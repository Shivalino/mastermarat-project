// handlers/video.js
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse, createUnauthorizedResponse, createBadRequestResponse } from '../utils/errors.js';
import { validateTokenFormat } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 4) {
    return createBadRequestResponse('Invalid video path format');
  }
  
  const courseId = pathParts[2];
  const videoFile = pathParts[3];
  const token = url.searchParams.get('token');

  if (!token) {
    return createUnauthorizedResponse('Token required');
  }

  if (!validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid token format');
  }

  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  // Находим урок по имени видео файла
  let lessonData = null;
  for (const key in course.lessons) {
    if (course.lessons[key].video_file === videoFile) {
      lessonData = course.lessons[key];
      break;
    }
  }

  if (!lessonData) {
    return createNotFoundResponse('Video');
  }

  // TODO: Добавить проверку доступа пользователя к курсу через SendPulse API

  try {
    // Получаем метаданные файла
    const videoPath = ideos/{courseId}/{lessonData.video_file};
    const object = await env.R2.head(videoPath);
    
    if (!object) {
      return createNotFoundResponse('Video in R2');
    }

    const fileSize = object.size;
    const range = request.headers.get('range');

    // HTTP Range requests для streaming
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      const rangedObject = await env.R2.get(videoPath, {
        range: {
          offset: start,
          length: chunkSize
        }
      });

      if (!rangedObject) {
        return new Response('Range Not Satisfiable', { status: 416 });
      }

      return createCorsResponse(rangedObject.body, {
        status: 206,
        headers: {
          'Content-Type': 'video/mp4',
          'Content-Length': chunkSize.toString(),
          'Content-Range': ytes {start}-{end}/{fileSize},
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // Полное видео без range
    const fullObject = await env.R2.get(videoPath);
    return createCorsResponse(fullObject.body, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'ETag': object.httpEtag
      }
    });

  } catch (error) {
    console.error('Video access error:', error);
    return createNotFoundResponse('Video');
  }
}
