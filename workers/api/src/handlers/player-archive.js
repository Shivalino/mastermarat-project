// handlers/player-archive.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // Проверяем доступ к архиву
  const accessCheck = hasAccess(token, courseId, 'archive');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  // Генерируем список всех уроков для навигации
  const lessonItems = [];
  for (const [lessonId, lesson] of Object.entries(course.lessons)) {
    const weekMatch = lessonId.match(/week(\d+)_lesson(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    const lessonNum = weekMatch ? parseInt(weekMatch[2]) : 1;
    
    lessonItems.push(`
      <div class="lesson-card">
        <a href="${url.origin}/player/${courseId}/${lessonId}?token=${token}">
          <div class="lesson-thumbnail">
            <img src="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}" alt="${lesson.title}">
            <div class="play-overlay">
              <svg class="play-icon" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" fill="white"/>
              </svg>
            </div>
          </div>
          <div class="lesson-info">
            <div class="lesson-meta">
              <span class="week-badge">Неделя ${weekNum}</span>
              <span class="lesson-number">Урок ${lessonNum}</span>
            </div>
            <h3>${lesson.title}</h3>
          </div>
        </a>
      </div>
    `);
  }
  
  const archiveHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Архив курса: ${course.title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0a0a0a;
            color: #ffffff;
            min-height: 100vh;
        }
        
        .header {
            background: linear-gradient(135deg, #3D968C 0%, #2a6b64 100%);
            color: white;
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        
        .header h1 {
            font-size: 2rem;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.95;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .section-title {
            font-size: 1.5rem;
            margin-bottom: 30px;
            color: #fff;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section-title::before {
            content: '';
            width: 4px;
            height: 24px;
            background: #3D968C;
            border-radius: 2px;
        }
        
        .lessons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 25px;
        }
        
        .lesson-card {
            background: #1a1a1a;
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid #2a2a2a;
        }
        
        .lesson-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(61, 150, 140, 0.3);
            border-color: #3D968C;
        }
        
        .lesson-card a {
            text-decoration: none;
            color: inherit;
            display: block;
        }
        
        .lesson-thumbnail {
            position: relative;
            width: 100%;
            padding-top: 56.25%; /* 16:9 aspect ratio */
            background: #000;
            overflow: hidden;
        }
        
        .lesson-thumbnail img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        
        .lesson-card:hover .lesson-thumbnail img {
            transform: scale(1.05);
        }
        
        .play-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lesson-card:hover .play-overlay {
            opacity: 1;
        }
        
        .play-icon {
            width: 60px;
            height: 60px;
            background: rgba(61, 150, 140, 0.9);
            border-radius: 50%;
            padding: 15px;
            padding-left: 20px;
        }
        
        .lesson-info {
            padding: 20px;
        }
        
        .lesson-meta {
            display: flex;
            gap: 10px;
            margin-bottom: 12px;
        }
        
        .week-badge {
            background: #3D968C;
            color: white;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .lesson-number {
            color: #666;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
        }
        
        .lesson-info h3 {
            font-size: 1.1rem;
            font-weight: 600;
            line-height: 1.4;
            color: #fff;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.5rem;
            }
            
            .container {
                padding: 20px 15px;
            }
            
            .lessons-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
        
        /* Анимация появления */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .lesson-card {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0;
        }
        
        .lesson-card:nth-child(1) { animation-delay: 0.1s; }
        .lesson-card:nth-child(2) { animation-delay: 0.2s; }
        .lesson-card:nth-child(3) { animation-delay: 0.3s; }
        .lesson-card:nth-child(4) { animation-delay: 0.4s; }
        .lesson-card:nth-child(5) { animation-delay: 0.5s; }
        .lesson-card:nth-child(6) { animation-delay: 0.6s; }
        .lesson-card:nth-child(7) { animation-delay: 0.7s; }
        .lesson-card:nth-child(8) { animation-delay: 0.8s; }
    </style>
</head>
<body>
    <div class="header">
        <h1> Архив курса</h1>
        <p>${course.title}</p>
    </div>
    
    <div class="container">
        <h2 class="section-title">Все уроки курса (${Object.keys(course.lessons).length})</h2>
        <div class="lessons-grid">
            ${lessonItems.join('')}
        </div>
    </div>

    <script>
        console.log('Archive mode loaded for course: ${courseId}');
        
        // Предзагрузка изображений при наведении
        document.querySelectorAll('.lesson-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const link = card.querySelector('a');
                if (link) {
                    const preload = document.createElement('link');
                    preload.rel = 'prefetch';
                    preload.href = link.href;
                    document.head.appendChild(preload);
                }
            });
        });
    </script>
</body>
</html>`;
  
  return createCorsResponse(archiveHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }
  });
}
