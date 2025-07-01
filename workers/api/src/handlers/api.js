// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API для курса "Механика здоровья"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Эта страница - документация API',
        'GET /player/{courseId}/{lessonId}?token=Y': 'HTML плеер для обучения (из email)',
        'GET /archive/{courseId}?token=Y': 'HTML плеер-архив с навигацией (после курса)',
        'GET /thumbnails/{courseId}/{filename}': 'Публичные превью видео из R2',
        'GET /video/{courseId}/{filename}?token=xxx': 'Защищенные видео из R2 с поддержкой streaming',
        'POST /webhook/purchase': 'Webhook от SendPulse при покупке'
      },
      test_links: {
        player_learning: {url.origin}/player/course1/week1_lesson1?token=demo123,
        player_archive: {url.origin}/archive/course1?token=demo123,
        thumbnail: {url.origin}/thumbnails/course1/week1_lesson1.jpg,
        video: {url.origin}/video/course1/week1_lesson1.mp4?token=demo123
      },
      course_structure: COURSE_DATA,
      timestamp: new Date().toISOString()
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
