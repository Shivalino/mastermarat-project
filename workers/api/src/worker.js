export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS headers для всех ответов
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    // Обработка OPTIONS для CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
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
            'Cache-Control': 'public, max-age=86400', // кеш на сутки
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

    // Защищенные видео (С токеном)
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
        const object = await env.R2.get(`videos/${videoPath}`);

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

        // Возвращаем видео
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'video/mp4',
            'Cache-Control': 'private, max-age=3600', // кеш на час
            ETag: object.httpEtag,
            'Accept-Ranges': 'bytes',
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
        message: 'MasterMarat API с R2 интеграцией работает!',
        worker_url: 'https://api.mastermarat.com',
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Эта страница',
          'GET /thumbnails/{filename}': 'Публичные превью видео из R2',
          'GET /video/{filename}?token=xxx': 'Защищенные видео из R2',
          'POST /webhook/purchase': 'Webhook от SendPulse при покупке'
        },
        test_links: {
          thumbnail: 'https://api.mastermarat.com/thumbnails/test-thumb.jpg',
          video_no_token: 'https://api.mastermarat.com/video/test-video.mp4',
          video_with_token:
            'https://api.mastermarat.com/video/test-video.mp4?token=test123'
        },
        file_structure: {
          thumbnails: 'R2://mastermarat-videos/thumbnails/',
          videos: 'R2://mastermarat-videos/videos/'
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

// Простая функция генерации токена
function generateSimpleToken(email) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  return `${emailHash}_${timestamp.substring(-8)}`;
}
