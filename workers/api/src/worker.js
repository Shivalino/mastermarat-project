export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);

    // CORS headers для всех ответов
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Range',
      'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
    };

    // Обработка OPTIONS для CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // HTML плеер видео
    if (url.pathname === '/player/' || url.pathname === '/player') {
      return handlePlayerRequest(request, env, corsHeaders);
    }

    // Публичные thumbnails (БЕЗ токена) - прямо из R2
    if (url.pathname.startsWith('/thumbnails/')) {
      const thumbnailPath = url.pathname.replace('/thumbnails/', '');

      try {
        const object = await env.R2.get(`thumbnails/${thumbnailPath}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Thumbnail not found',
              path: thumbnailPath
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        // Возвращаем изображение
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400',
            ETag: object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Защищенные видео с поддержкой Range requests для стриминга
    if (url.pathname.startsWith('/video/')) {
      const videoPath = url.pathname.replace('/video/', '');
      const token = url.searchParams.get('token');

      if (!token) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Token required',
            message: 'Добавьте ?token=ваш_токен к URL',
            example: url.origin + url.pathname + '?token=abc123'
          }),
          {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      // Простая проверка токена (позже интегрируем с SendPulse)
      if (token.length < 3) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid token',
            message: 'Неверный токен доступа'
          }),
          {
            status: 403,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      try {
        // Сначала получаем метаданные о файле
        const object = await env.R2.head(`videos/${videoPath}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Video not found',
              path: videoPath
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        const fileSize = object.size;
        const range = request.headers.get('range');

        // Если браузер запрашивает конкретный диапазон (для стриминга)
        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunkSize = end - start + 1;

          // Получаем только нужную часть видео
          const rangedObject = await env.R2.get(`videos/${videoPath}`, {
            range: {
              offset: start,
              length: chunkSize
            }
          });

          if (!rangedObject) {
            return new Response('Range Not Satisfiable', {
              status: 416,
              headers: corsHeaders
            });
          }

          // Возвращаем частичный контент
          return new Response(rangedObject.body, {
            status: 206,
            headers: {
              'Content-Type': 'video/mp4',
              'Content-Length': chunkSize.toString(),
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Cache-Control': 'no-cache',
              ...corsHeaders
            }
          });
        }

        // Если нет range запроса, отдаем весь файл
        const fullObject = await env.R2.get(`videos/${videoPath}`);

        return new Response(fullObject.body, {
          headers: {
            'Content-Type': 'video/mp4',
            'Content-Length': fileSize.toString(),
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'no-cache',
            ETag: object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Webhook от SendPulse при покупке
    if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
      try {
        const webhook = await request.json();

        // Здесь будет логика создания токена пользователя
        const userToken = generateSimpleToken(
          webhook.email || 'test@example.com'
        );

        // TODO: Обновить контакт в SendPulse через API
        // с токеном и датами подписки

        return new Response(
          JSON.stringify({
            status: 'success',
            message: 'Webhook получен! Токен создан.',
            user_token: userToken,
            received_data: webhook,
            note: 'Токен будет отправлен в первом email курса'
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid JSON in webhook',
            message: error.message
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Главная страница API
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'MasterMarat API для MVP курса "Механика здоровья"',
        worker_url: 'https://api.mastermarat.com',
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Эта страница',
          'GET /player/?lesson=X&token=Y': 'HTML видеоплеер',
          'GET /thumbnails/{filename}': 'Публичные превью видео из R2',
          'GET /video/{filename}?token=xxx':
            'Защищенные видео из R2 с поддержкой streaming',
          'POST /webhook/purchase': 'Webhook от SendPulse при покупке'
        },
        test_links: {
          player:
            'https://api.mastermarat.com/player/?lesson=course1_week1_lesson1&token=demo123',
          thumbnail:
            'https://api.mastermarat.com/thumbnails/course1_week1_lesson1.jpg',
          video:
            'https://api.mastermarat.com/video/course1_week1_lesson1.mp4?token=demo123'
        },
        course_structure: {
          name: 'Механика здоровья',
          weeks: 4,
          lessons_per_week: 2,
          total_lessons: 8
        },
        timestamp: new Date().toISOString()
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
};

// Обработка HTML плеера - упрощенная версия для MVP
async function handlePlayerRequest(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'course1_week1_lesson1';
  const token = url.searchParams.get('token') || 'demo-token-123';

  // Определяем название урока на основе ID
  const lessonTitles = {
    course1_week1_lesson1: 'Введение в биомеханику тела',
    course1_week1_lesson2: 'Основы правильной осанки',
    course1_week2_lesson1: 'Работа с позвоночником',
    course1_week2_lesson2: 'Упражнения для шеи',
    course1_week3_lesson1: 'Техники самомассажа',
    course1_week3_lesson2: 'Снятие мышечных блоков',
    course1_week4_lesson1: 'Интеграция движений',
    course1_week4_lesson2: 'Ежедневная практика'
  };

  const lessonTitle = lessonTitles[lesson] || 'Урок курса "Механика здоровья"';

  // HTML код плеера - минималистичная версия
  const playerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - ${lessonTitle}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        
        .header {
            background: linear-gradient(135deg, #2E8B57 0%, #3D968C 100%);
            padding: 20px;
            color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0;
        }
        
        .header .course-info {
            margin-top: 5px;
            font-size: 14px;
            opacity: 0.9;
        }
        
        .video-container {
            max-width: 1200px;
            margin: 20px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 соотношение */
            height: 0;
            background: #000;
        }
        
        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .content {
            padding: 30px;
        }
        
        .lesson-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #2E8B57;
        }
        
        .lesson-description {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            border-left: 4px solid #2E8B57;
        }
        
        .lesson-description h3 {
            color: #2E8B57;
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 600;
        }
        
        .lesson-description ul {
            list-style: none;
            padding: 0;
        }
        
        .lesson-description li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: #555;
            line-height: 1.6;
        }
        
        .lesson-description li:before {
            content: "✓";
            color: #2E8B57;
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        
        .homework {
            background: linear-gradient(135deg, #F59B3A 0%, #E8851C 100%);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            color: white;
        }
        
        .homework h3 {
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .homework p {
            line-height: 1.6;
        }
        
        .navigation {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }
        
        .nav-button {
            flex: 1;
            padding: 15px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
            text-decoration: none;
            display: inline-block;
        }
        
        .nav-button.primary {
            background: #2E8B57;
            color: white;
        }
        
        .nav-button.primary:hover {
            background: #3D968C;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .nav-button.secondary {
            background: #e0e0e0;
            color: #666;
        }
        
        .nav-button.secondary:hover {
            background: #d0d0d0;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            margin-top: 50px;
            color: #666;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 20px;
            }
            
            .video-container {
                margin: 10px;
                border-radius: 0;
            }
            
            .content {
                padding: 20px;
            }
            
            .lesson-title {
                font-size: 24px;
            }
            
            .navigation {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>MasterMarat</h1>
        <div class="course-info">Курс "Механика здоровья" • MVP версия</div>
    </div>
    
    <div class="video-container">
        <div class="video-wrapper">
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <div>Загрузка видео...</div>
            </div>
            
            <video 
                id="videoPlayer"
                controls
                playsinline
                preload="auto"
                style="display: none;"
            >
                <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
                Ваш браузер не поддерживает видео HTML5.
            </video>
        </div>
    </div>
    
    <div class="content">
        <h2 class="lesson-title">${lessonTitle}</h2>
        
        <div class="lesson-description">
            <h3>В этом уроке:</h3>
            <ul>
                <li>Основные принципы работы с телом</li>
                <li>Безопасные техники выполнения упражнений</li>
                <li>Понимание биомеханики движений</li>
                <li>Практические рекомендации для ежедневного применения</li>
            </ul>
        </div>
        
        <div class="homework">
            <h3>Домашнее задание</h3>
            <p>Выполните изученные техники 2 раза в день. Обратите внимание на ощущения в теле и запишите свои наблюдения. В следующем уроке мы разберем типичные ошибки.</p>
        </div>
        
        <div class="navigation">
            <button class="nav-button secondary" onclick="alert('Демо версия: навигация будет доступна в полной версии')">
                ← Предыдущий урок
            </button>
            <button class="nav-button primary" onclick="alert('Демо версия: навигация будет доступна в полной версии')">
                Следующий урок →
            </button>
        </div>
    </div>
    
    <div class="footer">
        <p>© 2025 MasterMarat • Остеопатические методики • Марат Малиев</p>
    </div>

    <script>
        // Простая инициализация плеера
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('videoPlayer');
            const loading = document.getElementById('loading');
            
            // Показываем видео когда оно готово к воспроизведению
            video.addEventListener('loadedmetadata', function() {
                loading.style.display = 'none';
                video.style.display = 'block';
            });
            
            // Обработка ошибок
            video.addEventListener('error', function(e) {
                loading.innerHTML = '<div style="color: #ff6b6b;">Ошибка загрузки видео. Проверьте токен доступа.</div>';
                console.error('Video error:', e);
            });
            
            // Простая аналитика
            video.addEventListener('play', function() {
                console.log('Начат просмотр урока:', '${lesson}');
            });
            
            video.addEventListener('ended', function() {
                console.log('Завершен просмотр урока:', '${lesson}');
            });
        });
    </script>
</body>
</html>`;

  return new Response(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

// Простая функция генерации токена
function generateSimpleToken(email) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  return `${emailHash}_${timestamp.substring(-8)}`;
}
