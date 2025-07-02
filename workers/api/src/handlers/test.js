// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // Тестируем все токены
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1> MasterMarat Token Testing</h1>
    <p>Используйте эти токены для тестирования разных уровней доступа:</p>
    
    <div class="token-box">
        <h3> Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=superuser_mastermarat_2025">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=superuser_mastermarat_2025">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=demo123">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=expired_test_token">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}
