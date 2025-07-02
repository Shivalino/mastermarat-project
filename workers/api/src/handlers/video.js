// handlers/video.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  if (pathParts.length < 3) {
    return createNotFoundResponse('Video');
  }
  
  const courseId = pathParts[1];
  const fileName = pathParts[2];
  const token = url.searchParams.get('token');
  
  // Проверяем токен
  if (!token || !validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid or missing token');
  }
  
  // Проверяем доступ
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  // Получаем путь к видео
  let videoKey = `content/${courseId}/${fileName}`;
  
  // Если запрашивается по lessonId, конвертируем в имя файла
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonId = fileName.replace('.mp4', '');
    const lessonData = course.lessons[lessonId];
    
    if (lessonData && lessonData.video_file) {
      videoKey = `content/${courseId}/${lessonData.video_file}`;
    }
  }
  
  try {
    const range = request.headers.get('range');
    
    if (range) {
      // Поддержка HTTP Range requests для видео
      const matches = range.match(/bytes=(\d+)-(\d*)/);
      if (matches) {
        const start = parseInt(matches[1], 10);
        const end = matches[2] ? parseInt(matches[2], 10) : undefined;
        
        const video = await env.R2.get(videoKey, {
          range: { offset: start, length: end ? end - start + 1 : undefined }
        });
        
        if (!video) {
          return createNotFoundResponse('Video');
        }
        
        const videoSize = video.size || 0;
        const contentLength = end ? end - start + 1 : videoSize - start;
        const contentRange = `bytes ${start}-${end || videoSize - 1}/${videoSize}`;
        
        const headers = new Headers();
        headers.set('Content-Type', video.httpMetadata?.contentType || 'video/mp4');
        headers.set('Accept-Ranges', 'bytes');
        headers.set('Content-Range', contentRange);
        headers.set('Content-Length', contentLength.toString());
        headers.set('Cache-Control', 'private, max-age=3600');
        headers.set('Access-Control-Allow-Origin', '*');
        
        return new Response(video.body, {
          status: 206,
          headers
        });
      }
    }
    
    // Обычный запрос без range
    const video = await env.R2.get(videoKey);
    
    if (!video) {
      return createNotFoundResponse('Video');
    }
    
    const headers = new Headers();
    headers.set('Content-Type', video.httpMetadata?.contentType || 'video/mp4');
    headers.set('Content-Length', video.size.toString());
    headers.set('Accept-Ranges', 'bytes');
    headers.set('Cache-Control', 'private, max-age=3600');
    headers.set('Access-Control-Allow-Origin', '*');
    
    return new Response(video.body, { headers });
    
  } catch (error) {
    console.error('Video streaming error:', error);
    return createNotFoundResponse('Video');
  }
}