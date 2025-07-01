// handlers/player-archive.js - плеер-архив с навигацией (после курса)
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse, createUnauthorizedResponse } from '../utils/errors.js';
import { validateTokenFormat } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 3) {
    return createNotFoundResponse('Invalid archive path');
  }
  
  const courseId = pathParts[2] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';

  if (!validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid token');
  }

  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  // TODO: Проверить что у пользователя есть доступ к архиву (завершил курс)

  // Генерируем список всех уроков для навигации
  const lessonsList = Object.entries(course.lessons).map(([lessonId, lesson]) => {
    return 
      <div class="lesson-item">
        <a href="/video/{courseId}/{lesson.video_file}?token={token}" target="_blank">
          <img src="/thumbnails/{courseId}/{lesson.thumbnail_file}" alt="{lesson.title}" style="width: 120px; height: 68px; object-fit: cover;">
          <span>{lesson.title}</span>
        </a>
      </div>
    ;
  }).join('');

  const archiveHTML = <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - Архив курса {course.title}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: #f5f5f5; }
        .header { background: #3D968C; color: white; padding: 20px; text-align: center; }
        .container { max-width: 1000px; margin: 20px auto; padding: 20px; }
        .lessons-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
        .lesson-item { background: white; border-radius: 8px; padding: 15px; }
        .lesson-item a { text-decoration: none; color: #333; display: flex; align-items: center; gap: 15px; }
        .lesson-item:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <div class="header">
        <h1> Архив курса: {course.title}</h1>
        <p>Полный доступ ко всем урокам курса</p>
    </div>
    
    <div class="container">
        <h2>Все уроки курса ({Object.keys(course.lessons).length} уроков)</h2>
        <div class="lessons-grid">
            {lessonsList}
        </div>
    </div>

    <script>
        console.log('Archive mode player loaded for course: {courseId}');
    </script>
</body>
</html>;

  return createCorsResponse(archiveHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }
  });
}
