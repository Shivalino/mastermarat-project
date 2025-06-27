export default {
  async fetch(request, env, ctx) {
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

    // Специальный плеер для Telegram
    if (url.pathname === '/telegram-player/' || url.pathname === '/telegram-player') {
      return handleTelegramPlayer(request, env, corsHeaders);
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
            'ETag': object.httpEtag,
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

      // Простая проверка токена (позже усложним)
      if (token.length < 3) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid token',
            message: 'Токен слишком короткий'
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
            'ETag': object.httpEtag,
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
        message: 'MasterMarat API с R2 интеграцией и плеером работает!',
        worker_url: 'https://api.mastermarat.com',
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Эта страница',
          'GET /player/?lesson=X&token=Y&email=Z': 'HTML видеоплеер',
          'GET /telegram-player/?lesson=X&token=Y': 'Специальный плеер для Telegram',
          'GET /thumbnails/{filename}': 'Публичные превью видео из R2',
          'GET /video/{filename}?token=xxx': 'Защищенные видео из R2 с поддержкой streaming',
          'POST /webhook/purchase': 'Webhook от SendPulse при покупке'
        },
        test_links: {
          thumbnail: 'https://api.mastermarat.com/thumbnails/test_thumb.jpg',
          video_no_token: 'https://api.mastermarat.com/video/test_video.mp4',
          video_with_token: 'https://api.mastermarat.com/video/test_video.mp4?token=test123',
          player_demo: 'https://api.mastermarat.com/player/?lesson=test_video&token=demo123&email=demo@mastermarat.com',
          telegram_player: 'https://api.mastermarat.com/telegram-player/?lesson=test_video&token=demo123'
        },
        file_structure: {
          thumbnails: 'R2://mastermarat-videos/thumbnails/',
          videos: 'R2://mastermarat-videos/videos/'
        },
        features: {
          streaming: 'HTTP Range requests поддерживаются для быстрого старта видео',
          fullscreen: 'Полная поддержка fullscreen на мобильных устройствах',
          telegram: 'Специальная поддержка для Telegram Browser'
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

// Специальный плеер для Telegram Browser
async function handleTelegramPlayer(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'test_video';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  const telegramPlayerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${lesson} - MasterMarat</title>
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        body { 
            background: #000; 
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
        }
        
        video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            object-fit: contain;
            background: #000;
        }
        
        .controls {
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .btn {
            background: rgba(0,0,0,0.7);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .exit-btn {
            background: rgba(255,0,0,0.8);
            border: none;
        }
        
        .info {
            position: fixed;
            bottom: 20px;
            left: 20px;
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 14px;
            max-width: 70%;
        }
        
        .loading {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 18px;
            text-align: center;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loading" id="loading">
        <div class="spinner"></div>
        <div>Загрузка видео...</div>
    </div>
    
    <video id="video" controls autoplay playsinline webkit-playsinline style="display: none;">
        <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
    </video>
    
    <div class="controls">
        <button class="btn" onclick="location.href='/player/?lesson=${lesson}&token=${token}'">
            ↩️ Обычный вид
        </button>
        <button class="btn exit-btn" onclick="window.close()">
            ✕ Закрыть
        </button>
    </div>
    
    <div class="info">
        🎯 Урок: ${lesson}<br>
        💡 Используйте элементы управления видео для паузы и перемотки
    </div>
    
    <script>
        const video = document.getElementById('video');
        const loading = document.getElementById('loading');
        
        video.addEventListener('loadedmetadata', function() {
            loading.style.display = 'none';
            video.style.display = 'block';
            video.focus();
        });
        
        video.addEventListener('error', function(e) {
            loading.innerHTML = '<div style="color: #ff6b6b;">⚠️ Ошибка загрузки видео</div>';
        });
        
        // Предотвращаем случайное закрытие
        window.addEventListener('beforeunload', function (e) {
            if (video.currentTime > 0 && !video.paused && !video.ended) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    </script>
</body>
</html>`;

  return new Response(telegramPlayerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

// Обработка HTML плеера с улучшенной поддержкой fullscreen и Telegram
async function handlePlayerRequest(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'test_video';
  const token = url.searchParams.get('token') || 'demo-token-123';
  const email = url.searchParams.get('email') || 'demo@mastermarat.com';

  // HTML код плеера с полной поддержкой fullscreen
  const playerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>MasterMarat - Урок: ${lesson}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000;
            color: #fff;
            overflow-x: hidden;
            -webkit-user-select: none;
            user-select: none;
        }
        
        .header {
            background: linear-gradient(135deg, #2E8B57 0%, #3D968C 100%);
            padding: 15px 20px;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header h1 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            color: #fff;
        }
        
        .header .progress {
            margin-top: 8px;
            font-size: 14px;
            opacity: 0.9;
            color: #E6F3F0;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            background: #000;
        }
        
        .video-wrapper {
            position: relative;
            width: 100%;
            height: 250px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible !important;
        }
        
        video {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #000;
            -webkit-media-controls-start-playback-button: revert;
        }
        
        /* Форсируем показ кнопки fullscreen */
        video::-webkit-media-controls-fullscreen-button {
            display: inline-block !important;
            opacity: 1 !important;
            pointer-events: auto !important;
        }
        
        video::-webkit-media-controls-panel {
            display: flex !important;
        }
        
        video::-webkit-media-controls {
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Fullscreen режимы для разных браузеров */
        video:fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-webkit-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-moz-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-ms-fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }
        
        /* Скрываем watermark в fullscreen */
        video:-webkit-full-screen ~ .watermark,
        video:fullscreen ~ .watermark {
            display: none;
        }
        
        /* Telegram псевдо-fullscreen стили */
        .telegram-fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 999999 !important;
            background: #000 !important;
            object-fit: contain !important;
        }
        
        .watermark {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: rgba(255,255,255,0.8);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            z-index: 10;
            pointer-events: none;
        }
        
        .loading {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 20;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .content {
            padding: 20px;
            background: #1a1a1a;
            min-height: calc(100vh - 300px);
        }
        
        .lesson-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #fff;
        }
        
        .lesson-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            flex-wrap: wrap;
        }
        
        .lesson-description {
            background: #2a2a2a;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #2E8B57;
        }
        
        .lesson-description h3 {
            color: #2E8B57;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .lesson-description ul {
            list-style: none;
            padding: 0;
        }
        
        .lesson-description li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            color: #ddd;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .lesson-description li:before {
            content: "•";
            color: #2E8B57;
            position: absolute;
            left: 0;
        }
        
        .homework {
            background: linear-gradient(135deg, #F59B3A 0%, #E8851C 100%);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .homework h3 {
            color: #fff;
            font-size: 16px;
            margin-bottom: 8px;
        }
        
        .homework p {
            color: #fff;
            font-size: 14px;
            margin: 0;
            line-height: 1.4;
        }
        
        .telegram-notice {
            background: #2E8B57;
            color: white;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            text-align: center;
        }
        
        .telegram-fullscreen-btn {
            background: #F59B3A;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 10px;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
        }
        
        .navigation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .nav-button {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }
        
        .nav-button.primary {
            background: #2E8B57;
            color: #fff;
        }
        
        .nav-button.primary:hover {
            background: #3D968C;
        }
        
        .nav-button.secondary {
            background: #333;
            color: #ccc;
        }
        
        .nav-button.secondary:hover {
            background: #444;
        }
        
        .footer {
            background: #111;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #333;
        }
        
        .footer p {
            color: #666;
            font-size: 12px;
            margin: 0;
        }
        
        /* Fallback кнопка fullscreen для устройств без native поддержки */
        .fullscreen-button {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            z-index: 15;
            display: none;
        }
        
        @media (max-width: 375px) {
            .video-wrapper {
                height: 220px;
            }
            
            .content {
                padding: 15px;
            }
            
            .lesson-title {
                font-size: 18px;
            }
        }
        
        /* Показываем fallback кнопку на устройствах без native fullscreen */
        @media (hover: none) and (pointer: coarse) {
            .fullscreen-button {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎯 Техника снятия напряжения в шее</h1>
        <div class="progress">Урок ${lesson} • Курс 1: Основы остеопатии</div>
    </div>
    
    <div class="video-container">
        <div class="video-wrapper">
            <div class="watermark">${email}</div>
            
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <div style="color: #ccc; font-size: 14px;">Загрузка видео...</div>
            </div>
            
            <video 
                id="videoPlayer"
                controls
                playsinline
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="landscape|portrait"
                preload="auto"
                style="display: none;"
            >
                <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
                Ваш браузер не поддерживает видео HTML5.
            </video>
            
            <button class="fullscreen-button" id="fullscreenBtn">
                ⛶ Полный экран
            </button>
        </div>
        
        <div id="telegramNotice" style="display: none;"></div>
    </div>
    
    <div class="content">
        <h2 class="lesson-title">Урок: ${lesson}</h2>
        <div class="lesson-meta">
            <span>⏱️ 4 мин 30 сек</span>
            <span>👁️ Просмотрено 127 раз</span>
            <span>⭐ 4.8/5</span>
        </div>
        
        <div class="lesson-description">
            <h3>🔍 Что вы изучите в этом уроке:</h3>
            <ul>
                <li>Как правильно определить точки максимального напряжения</li>
                <li>Технику мягкого остеопатического воздействия</li>
                <li>Последовательность движений для снятия спазма</li>
                <li>Профилактику повторного возникновения напряжения</li>
            </ul>
        </div>
        
        <div class="homework">
            <h3>💡 Домашнее задание</h3>
            <p>Выполните изученную технику 2 раза в день в течение недели. Записывайте ваши ощущения в дневник здоровья.</p>
        </div>
        
        <div class="navigation">
            <button class="nav-button secondary" onclick="alert('Демо: предыдущий урок')">
                ← Предыдущий урок
            </button>
            <button class="nav-button primary" onclick="alert('Демо: следующий урок')">
                Следующий урок →
            </button>
        </div>
    </div>
    
    <div class="footer">
        <p>© 2025 MasterMarat • Остеопатические техники • Подписка активна до 15.09.2025</p>
    </div>

    <script>
        // Отключаем контекстное меню и выделение
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('selectstart', e => e.preventDefault());
        
        // Блокируем горячие клавиши
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
                (e.ctrlKey && e.keyCode === 85) ||
                (e.ctrlKey && e.keyCode === 83)) {
                e.preventDefault();
                return false;
            }
        });
        
        // Инициализация плеера
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('videoPlayer');
            const loading = document.getElementById('loading');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const videoWrapper = document.querySelector('.video-wrapper');
            const header = document.querySelector('.header');
            const content = document.querySelector('.content');
            const footer = document.querySelector('.footer');
            const telegramNotice = document.getElementById('telegramNotice');
            
            // Определяем Telegram Browser
            const isTelegram = /Telegram/i.test(navigator.userAgent) || 
                              window.Telegram !== undefined ||
                              /TelegramWebview/i.test(navigator.userAgent);
            
            console.log('Is Telegram:', isTelegram, 'UA:', navigator.userAgent);
            
            if (isTelegram) {
                // Показываем специальное уведомление для Telegram
                telegramNotice.style.display = 'block';
                telegramNotice.className = 'telegram-notice';
                telegramNotice.innerHTML = `
                    <div>📱 Вы используете Telegram браузер</div>
                    <a href="/telegram-player/?lesson=${lesson}&token=${token}" class="telegram-fullscreen-btn">
                        🎬 Открыть в полноэкранном режиме
                    </a>
                `;
                
                // Показываем кнопку псевдо-fullscreen
                fullscreenBtn.style.display = 'block';
                fullscreenBtn.style.fontSize = '16px';
                fullscreenBtn.style.padding = '10px 15px';
                
                // Telegram псевдо-fullscreen
                let isFullscreen = false;
                
                fullscreenBtn.addEventListener('click', function() {
                    if (!isFullscreen) {
                        // Сохраняем оригинальные стили
                        const originalStyles = {
                            video: video.style.cssText,
                            wrapper: videoWrapper.style.cssText,
                            body: document.body.style.cssText
                        };
                        
                        // Скрываем все кроме видео
                        header.style.display = 'none';
                        content.style.display = 'none';
                        footer.style.display = 'none';
                        telegramNotice.style.display = 'none';
                        document.querySelector('.watermark').style.display = 'none';
                        
                        // Растягиваем видео на весь экран
                        videoWrapper.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999999; background: #000;';
                        video.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;';
                        document.body.style.cssText = 'overflow: hidden; position: fixed; width: 100%; height: 100%;';
                        
                        // Меняем кнопку
                        fullscreenBtn.textContent = '✕ Выйти';
                        fullscreenBtn.style.cssText = 'display: block; position: fixed; top: 20px; right: 20px; z-index: 1000000; background: rgba(255,0,0,0.8); color: white; border: none; padding: 15px 20px; border-radius: 8px; font-size: 18px; font-weight: bold;';
                        
                        isFullscreen = true;
                        
                        // Форсируем фокус на видео
                        video.focus();
                        
                    } else {
                        // Восстанавливаем все обратно
                        header.style.display = 'block';
                        content.style.display = 'block';
                        footer.style.display = 'block';
                        telegramNotice.style.display = 'block';
                        document.querySelector('.watermark').style.display = 'block';
                        
                        videoWrapper.style.cssText = '';
                        video.style.cssText = '';
                        document.body.style.cssText = '';
                        
                        fullscreenBtn.textContent = '⛶ Полный экран';
                        fullscreenBtn.style.cssText = 'display: block; position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 10px 15px; border-radius: 4px; font-size: 16px; cursor: pointer; z-index: 15;';
                        
                        isFullscreen = false;
                    }
                });
                
                // Двойной клик по видео тоже включает fullscreen
                video.addEventListener('dblclick', function() {
                    fullscreenBtn.click();
                });
                
            } else {
                // Обычные браузеры - стандартный fullscreen
                if (!video.requestFullscreen) {
                    video.requestFullscreen = video.webkitRequestFullscreen || 
                                             video.mozRequestFullScreen || 
                                             video.msRequestFullscreen ||
                                             video.webkitEnterFullscreen ||
                                             function() {
                                                 if (video.webkitSupportsFullscreen) {
                                                     video.webkitEnterFullscreen();
                                                 }
                                             };
                }
                
                if (!document.exitFullscreen) {
                    document.exitFullscreen = document.webkitExitFullscreen || 
                                            document.mozCancelFullScreen || 
                                            document.msExitFullscreen ||
                                            document.webkitCancelFullScreen;
                }
                
                fullscreenBtn.addEventListener('click', function() {
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen();
                    } else if (video.webkitEnterFullscreen) {
                        video.webkitEnterFullscreen();
                    } else if (video.mozRequestFullScreen) {
                        video.mozRequestFullScreen();
                    } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen();
                    } else {
                        alert('Полноэкранный режим не поддерживается на вашем устройстве');
                    }
                });
                
                // Форсируем показ контролов на touch устройствах
                if ('ontouchstart' in window) {
                    video.setAttribute('controls', 'controls');
                }
            }
            
            // Показываем видео когда загрузились метаданные (быстрее чем loadeddata)
            video.addEventListener('loadedmetadata', function() {
                loading.style.display = 'none';
                video.style.display = 'block';
                console.log('Video metadata loaded, ready to play');
            });
            
            // Можно начать воспроизведение
            video.addEventListener('canplay', function() {
                console.log('Video can start playing');
            });
            
            // Обработка ошибок загрузки
            video.addEventListener('error', function(e) {
                loading.innerHTML = '<div style="color: #ff6b6b; font-size: 14px;">⚠️ Ошибка загрузки видео<br><small>' + 
                                   (e.target.error ? e.target.error.message : 'Неизвестная ошибка') + '</small></div>';
                console.error('Video loading error:', e);
            });
            
            // iOS specific fullscreen events
            video.addEventListener('webkitbeginfullscreen', function() {
                console.log('iOS fullscreen started');
            });
            
            video.addEventListener('webkitendfullscreen', function() {
                console.log('iOS fullscreen ended');
            });
            
            // Простая аналитика
            video.addEventListener('play', function() {
                console.log('Video started:', '${lesson}');
            });
            
            video.addEventListener('ended', function() {
                console.log('Video completed:', '${lesson}');
            });
            
            // Логирование прогресса буферизации
            video.addEventListener('progress', function() {
                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    const duration = video.duration;
                    if (duration > 0) {
                        console.log('Buffered: ' + Math.round((bufferedEnd / duration) * 100) + '%');
                    }
                }
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