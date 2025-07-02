// handlers/thumbnails.js
import { createCorsResponse, createNotFoundResponse } from '../utils/errors.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleThumbnails(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  if (pathParts.length < 3) {
    return createNotFoundResponse('Thumbnail');
  }
  
  const courseId = pathParts[1];
  const fileName = pathParts[2];
  
  // Для обратной совместимости: проверяем есть ли такой урок
  let thumbnailKey = content//;
  
  // Если запрашивается по lessonId, конвертируем в имя файла
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonId = fileName.replace('.jpg', '').replace('.png', '');
    const lessonData = course.lessons[lessonId];
    
    if (lessonData && lessonData.thumbnail_file) {
      thumbnailKey = content//;
    }
  }
  
  try {
    const thumbnail = await env.R2.get(thumbnailKey);
    
    if (!thumbnail) {
      return createNotFoundResponse('Thumbnail');
    }
    
    const headers = new Headers();
    headers.set('Content-Type', thumbnail.httpMetadata?.contentType || 'image/jpeg');
    headers.set('Cache-Control', 'public, max-age=3600');
    headers.set('Access-Control-Allow-Origin', '*');
    
    return new Response(thumbnail.body, { headers });
  } catch (error) {
    console.error('Thumbnail error:', error);
    return createNotFoundResponse('Thumbnail');
  }
}
