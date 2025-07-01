// handlers/player-learning.js - плеер для обучения (из email)
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse, createUnauthorizedResponse } from '../utils/errors.js';
import { validateTokenFormat } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerLearning(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 4) {
    return createNotFoundResponse('Invalid player path');
  }
  
  const courseId = pathParts[2] || 'course1';
  const lessonId = pathParts[3] || 'week1_lesson1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  const email = url.searchParams.get('email') || 'demo@mastermarat.com';

  if (!validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid token');
  }

  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  const lessonData = course.lessons[lessonId];
  if (!lessonData) {
    return createNotFoundResponse('Lesson');
  }

  // TODO: Загрузить дополнительный контент из R2
  let contentData = {
    display_title: null,
    description_points: ["Практические техники остеопатии", "Безопасное выполнение упражнений", "Рекомендации по частоте применения"],
    important_notes: ["Выполняйте технику медленно и аккуратно", "При дискомфорте немедленно прекратите упражнение"],
    additional_resources: []
  };

  // Простой HTML плеер (позже перенесем в templates/)
  const playerHTML = <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - {lessonData.title}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; background: #f5f5f5; }
        .header { background: #2E8B57; color: white; padding: 20px; text-align: center; }
        .video-container { max-width: 800px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; }
        .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; }
        video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .content { padding: 20px; }
        .watermark { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px; border-radius: 3px; font-size: 12px; }
    </style>
</head>
<body>
    <div class="header">
        <h1> {lessonData.title}</h1>
        <p>Курс: {course.title}  Режим: Обучение</p>
    </div>
    
    <div class="video-container">
        <div class="video-wrapper">
            <div class="watermark">{email}</div>
            <video controls playsinline>
                <source src="/video/{courseId}/{lessonData.video_file}?token={token}" type="video/mp4">
            </video>
        </div>
        
        <div class="content">
            <h2>{lessonData.title}</h2>
            <h3>В этом уроке:</h3>
            <ul>
                {contentData.description_points.map(point => <li>{point}</li>).join('')}
            </ul>
            
            {contentData.important_notes.length > 0 ? 
            <div style="background: #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>⚠️ Важно:</h3>
                {contentData.important_notes.map(note => <p>{note}</p>).join('')}
            </div>
             : ''}
        </div>
    </div>

    <script>
        console.log('Learning mode player loaded for: {courseId}/{lessonId}');
    </script>
</body>
</html>;

  return createCorsResponse(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }
  });
}
