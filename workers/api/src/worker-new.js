// worker-new.js - только роутинг
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// Импортируем обработчики
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhook } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Главная страница - документация API
      if (pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // Тестовая страница
      if (pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      // Thumbnails (превью видео)
      if (pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      // Video streaming
      if (pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      // Player для обучения (learning mode)
      if (pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      // Player для архива (archive mode)
      if (pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      // Webhooks - универсальный обработчик
      // Поддерживает пути вида:
      // /webhook/sendpulse/subscribe
      // /webhook/sendpulse/payment
      // /webhook/monobank
      // /webhook/fondy
      if (pathname.startsWith('/webhook/')) {
        return await handleWebhook(request, env, pathname);
      }

      // 404 для неизвестных маршрутов
      return createErrorResponse('Endpoint not found', 404, {
        path: pathname,
        method: method,
        available_endpoints: [
          'GET /',
          'GET /test',
          'GET /thumbnails/{courseId}/{filename}',
          'GET /video/{courseId}/{filename}',
          'GET /player/{courseId}/{lessonId}',
          'GET /archive/{courseId}/{lessonId}',
          'POST /webhook/sendpulse/{event}',
          'POST /webhook/monobank',
          'POST /webhook/fondy'
        ]
      });
    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse('Internal server error', 500, {
        message: error.message,
        stack: env.ENVIRONMENT === 'development' ? error.stack : undefined
      });
    }
  }
};
