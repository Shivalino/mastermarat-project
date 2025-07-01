// worker.js - только роутинг
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// Импортируем обработчики
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Роутинг запросов
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 для неизвестных маршрутов
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};
