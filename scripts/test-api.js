#!/usr/bin/env node

/**
 * Автоматическое тестирование MasterMarat API
 * Использование: npm run test:api
 */

const API_BASE = process.env.API_URL || 'https://api.mastermarat.com';

async function testEndpoint(name, url, options = {}) {
  console.log(`\n🧪 Testing: ${name}`);
  console.log(`📍 URL: ${url}`);
  
  try {
    const response = await fetch(url, options);
    const status = response.status;
    const statusText = response.statusText;
    
    // Пытаемся парсить как JSON
    let data;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }
    
    // Определяем результат
    const isSuccess = status >= 200 && status < 300;
    const icon = isSuccess ? '✅' : '❌';
    
    console.log(`${icon} Status: ${status} ${statusText}`);
    
    if (typeof data === 'object') {
      console.log(`📄 Response:`, JSON.stringify(data, null, 2));
    } else {
      console.log(`📄 Response: ${data.substring(0, 200)}${data.length > 200 ? '...' : ''}`);
    }
    
    return { success: isSuccess, status, data };
    
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function runTests() {
  console.log(`🚀 Testing MasterMarat API: ${API_BASE}`);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  
  const results = [];
  
  // 1. Главная страница API
  results.push(await testEndpoint(
    'Main API endpoint',
    `${API_BASE}/`
  ));
  
  // 2. Thumbnails (публичный доступ)
  results.push(await testEndpoint(
    'Thumbnails endpoint',
    `${API_BASE}/thumbnails/test-thumb.jpg`
  ));
  
  // 3. Video без токена (должен вернуть 401)
  results.push(await testEndpoint(
    'Video without token (should fail)',
    `${API_BASE}/video/test-video.mp4`
  ));
  
  // 4. Video с токеном
  results.push(await testEndpoint(
    'Video with token',
    `${API_BASE}/video/test-video.mp4?token=test123`
  ));
  
  // 5. Webhook endpoint
  results.push(await testEndpoint(
    'Webhook endpoint',
    `${API_BASE}/webhook/purchase`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        amount: 50,
        transaction_id: 'test_12345'
      })
    }
  ));
  
  // 6. CORS preflight
  results.push(await testEndpoint(
    'CORS preflight',
    `${API_BASE}/`,
    {
      method: 'OPTIONS',
      headers: {
        'Origin': 'https://mastermarat.com',
        'Access-Control-Request-Method': 'GET'
      }
    }
  ));
  
  // 7. Несуществующий endpoint
  results.push(await testEndpoint(
    'Non-existent endpoint (should 404)',
    `${API_BASE}/nonexistent`
  ));
  
  // Подсчет результатов
  const successful = results.filter(r => r.success).length;
  const total = results.length;
  
  console.log(`\n📊 Test Results:`);
  console.log(`✅ Successful: ${successful}/${total}`);
  console.log(`❌ Failed: ${total - successful}/${total}`);
  
  if (successful === total) {
    console.log(`🎉 All tests passed!`);
    process.exit(0);
  } else {
    console.log(`⚠️  Some tests failed. Check the output above.`);
    process.exit(1);
  }
}

// Проверяем, что fetch доступен (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.error('❌ fetch is not available. Please use Node.js 18+ or install node-fetch');
  process.exit(1);
}

// Запускаем тесты
runTests().catch(error => {
  console.error('💥 Test runner crashed:', error);
  process.exit(1);
});