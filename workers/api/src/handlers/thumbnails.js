// handlers/thumbnails.js
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse } from '../utils/errors.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleThumbnails(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 4) {
    return createNotFoundResponse('Invalid thumbnail path');
  }
  
  const courseId = pathParts[2];
  const thumbnailFile = pathParts[3];
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  // Находим урок по имени файла thumbnail
  let lessonData = null;
  for (const key in course.lessons) {
    if (course.lessons[key].thumbnail_file === thumbnailFile) {
      lessonData = course.lessons[key];
      break;
    }
  }

  if (!lessonData) {
    return createNotFoundResponse('Lesson thumbnail');
  }

  try {
    const object = await env.R2.get(	humbnails/{courseId}/{lessonData.thumbnail_file});

    if (!object) {
      return createNotFoundResponse('Thumbnail in R2');
    }

    return createCorsResponse(object.body, {
      headers: {
        'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400',
        'ETag': object.httpEtag
      }
    });

  } catch (error) {
    console.error('R2 thumbnail error:', error);
    return createNotFoundResponse('Thumbnail');
  }
}
