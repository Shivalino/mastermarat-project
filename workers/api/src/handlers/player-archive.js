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
    
    lessonItems.push({
      id: lessonId,
      weekNum,
      lessonNum,
      title: lesson.title,
      thumbnail: lesson.thumbnail_file || 'default_thumb.jpg'
    });
  }
  
  // Сортируем по неделям и урокам
  lessonItems.sort((a, b) => {
    if (a.weekNum !== b.weekNum) return a.weekNum - b.weekNum;
    return a.lessonNum - b.lessonNum;
  });
  
  // Генерируем HTML архива с зеленой палитрой
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
            background: #F5F1E8;
            color: #2C3E50;
            min-height: 100vh;
            font-size: 18px;
            line-height: 1.6;
        }
        
        .header {
            background: #2E8B57;
            padding: 30px 0;
            box-shadow: 0 4px 20px rgba(46, 139, 87, 0.1);
        }
        
        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 25px;
        }
        
        .header h1 {
            font-size: 38px;
            color: white;
            font-weight: 700;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        }
        
        .header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.95);
            font-weight: 500;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 25px;
        }
        
        .section-title {
            font-size: 32px;
            margin-bottom: 40px;
            color: #2E8B57;
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 700;
        }
        
        .section-title::before {
            content: '';
            width: 5px;
            height: 32px;
            background: #F59B3A;
            border-radius: 3px;
        }
        
        .lessons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            gap: 30px;
        }
        
        .lesson-card {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            box-shadow: 0 4px 15px rgba(46, 139, 87, 0.08);
        }
        
        .lesson-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(46, 139, 87, 0.15);
            border-color: #2E8B57;
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
            background: #E6F3F0;
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
            background: rgba(46, 139, 87, 0.8);
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
            width: 70px;
            height: 70px;
            background: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .play-icon svg {
            width: 30px;
            height: 30px;
            fill: #2E8B57;
            margin-left: 4px;
        }
        
        .lesson-info {
            padding: 25px;
        }
        
        .lesson-meta {
            display: flex;
            gap: 12px;
            margin-bottom: 15px;
        }
        
        .week-badge {
            background: #2E8B57;
            color: white;
            padding: 6px 14px;
            border-radius: 25px;
            font-size: 16px;
            font-weight: 600;
        }
        
        .lesson-number {
            color: #666;
            font-size: 16px;
            display: flex;
            align-items: center;
            font-weight: 500;
        }
        
        .lesson-info h3 {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.4;
            color: #2C3E50;
        }
        
        /* Пустое состояние */
        .empty-state {
            text-align: center;
            padding: 80px 20px;
            color: #666;
        }
        
        .empty-state h2 {
            font-size: 28px;
            margin-bottom: 20px;
            color: #2E8B57;
        }
        
        .empty-state p {
            font-size: 20px;
            line-height: 1.8;
        }
        
        /* Адаптивность */
        @media (max-width: 768px) {
            .header {
                padding: 20px 0;
            }
            
            .header h1 {
                font-size: 28px;
            }
            
            .header p {
                font-size: 18px;
            }
            
            .container {
                padding: 40px 20px;
            }
            
            .section-title {
                font-size: 24px;
                margin-bottom: 30px;
            }
            
            .lessons-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
            
            .lesson-info {
                padding: 20px;
            }
            
            .lesson-info h3 {
                font-size: 19px;
            }
            
            .week-badge {
                font-size: 14px;
                padding: 5px 12px;
            }
            
            .play-icon {
                width: 60px;
                height: 60px;
            }
        }
    
        /* Скрываем кнопку скачивания и PiP */
        video::-webkit-media-controls-download-button,
        video::-webkit-media-controls-picture-in-picture-button {
            display: none !important;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>${course.title}</h1>
            <p>Полный архив видеоуроков курса</p>
        </div>
    </div>
    
    <div class="container">
        <h2 class="section-title">Все уроки курса</h2>
        
        ${lessonItems.length > 0 ? `
        <div class="lessons-grid">
            ${lessonItems.map(lesson => `
            <div class="lesson-card">
                <a href="${url.origin}/player/${courseId}/${lesson.id}?token=${token}">
                    <div class="lesson-thumbnail">
                        <img src="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail}" 
                             alt="${lesson.title}" 
                             loading="lazy">
                        <div class="play-overlay">
                            <div class="play-icon">
                                <svg viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="lesson-info">
                        <div class="lesson-meta">
                            <span class="week-badge">Неделя ${lesson.weekNum}</span>
                            <span class="lesson-number">Урок ${lesson.lessonNum}</span>
                        </div>
                        <h3>${lesson.title}</h3>
                    </div>
                </a>
            </div>
            `).join('')}
        </div>
        ` : `
        <div class="empty-state">
            <h2>Уроки скоро появятся</h2>
            <p>Мы работаем над добавлением контента.<br>Пожалуйста, проверьте позже.</p>
        </div>
        `}
    </div>
</body>
</html>`;
  
  return createCorsResponse(archiveHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
