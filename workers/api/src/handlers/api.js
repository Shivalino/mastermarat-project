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
        'GET /': 'Документация API',
        'GET /test': 'Тестовая страница с токенами',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'Плеер для обучения',
        'GET /archive/{courseId}?token=XXX': 'Плеер-архив с навигацией',
        'GET /thumbnails/{courseId}/{filename}': 'Публичные превью',
        'GET /video/{courseId}/{filename}?token=XXX': 'Защищенные видео',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}