// handlers/player-learning.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerLearning(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  if (pathParts.length < 3) {
    return createNotFoundResponse('Lesson');
  }
  
  const courseId = pathParts[1];
  const lessonId = pathParts[2];
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // Проверяем токен и доступ
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  const lesson = course.lessons[lessonId];
  if (!lesson) {
    return createNotFoundResponse('Lesson');
  }
  
  // Получаем номер недели и урока
  const weekMatch = lessonId.match(/week(\d+)_lesson(\d+)/);
  const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
  const lessonNum = weekMatch ? parseInt(weekMatch[2]) : 1;
  
  // Генерируем HTML плеера в стиле MasterMarat
  const playerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${lesson.title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            color: #333;
            line-height: 1.6;
        }
        
        /* Шапка в стиле MasterMarat */
        .header {
            background: #3D968C;
            color: white;
            padding: 15px 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .header h1 {
            font-size: 1.3rem;
            font-weight: 600;
        }
        
        .course-meta {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        /* Контейнер видео */
        .video-section {
            background: #000;
            padding: 40px 0;
        }
        
        .video-container {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
        }
        
        video {
            width: 100%;
            height: auto;
            display: block;
            background: #000;
        }
        
        /* Контент под видео */
        .content-section {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        
        .lesson-title {
            font-size: 2rem;
            color: #2c3e50;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
        }
        
        /* Блок "В этом видео" */
        .video-content {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            margin-bottom: 30px;
        }
        
        .video-content h2 {
            color: #3D968C;
            font-size: 1.4rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .video-content ul {
            list-style: none;
            padding: 0;
        }
        
        .video-content li {
            padding: 12px 0;
            padding-left: 30px;
            position: relative;
            color: #555;
            border-bottom: 1px solid #f0f0f0;
        }
        
        .video-content li:last-child {
            border-bottom: none;
        }
        
        .video-content li::before {
            content: "";
            position: absolute;
            left: 0;
            color: #3D968C;
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        /* Важные моменты */
        .important-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .important-box h3 {
            color: #856404;
            font-size: 1.1rem;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .important-box p {
            color: #856404;
            line-height: 1.8;
        }
        
        /* Дополнительные материалы */
        .materials-box {
            background: #e8f5f3;
            border: 1px solid #3D968C;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .materials-box h3 {
            color: #2a6b64;
            font-size: 1.1rem;
            margin-bottom: 15px;
        }
        
        .materials-box p {
            color: #555;
            line-height: 1.8;
        }
        
        /* Индикатор загрузки */
        .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            transition: opacity 0.3s;
        }
        
        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid #333;
            border-top-color: #3D968C;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Мобильная адаптация */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .video-section {
                padding: 20px 0;
            }
            
            .content-section {
                padding: 20px 15px;
            }
            
            .lesson-title {
                font-size: 1.5rem;
            }
            
            .video-content {
                padding: 20px;
            }
            
            .video-content h2 {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>MasterMarat</h1>
            <div class="course-meta">
                Курс: ${course.title}  Неделя ${weekNum}, Урок ${lessonNum}
            </div>
        </div>
    </div>
    
    <div class="video-section">
        <div class="video-container">
            <div class="loading-overlay" id="loadingOverlay">
                <div class="spinner"></div>
            </div>
            
            <video 
                controls 
                preload="metadata"
                poster="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}"
                id="lessonVideo"
                playsinline
            >
                <source src="${url.origin}/video/${courseId}/${lesson.video_file}?token=${token}" type="video/mp4">
                Ваш браузер не поддерживает HTML5 видео.
            </video>
        </div>
    </div>
    
    <div class="content-section">
        <h1 class="lesson-title">${lesson.title}</h1>
        
        <div class="video-content">
            <h2>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#3D968C">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                В этом видео:
            </h2>
            <ul>
                ${lesson.content_points ? lesson.content_points.map(point => 
                    `<li>${point}</li>`
                ).join('') : `
                <li>Ключевой момент 1: Что будет рассмотрено в этом видео</li>
                <li>Ключевой момент 2: Основные концепции или демонстрации</li>
                <li>Ключевой момент 3: Практические советы или примеры</li>
                `}
            </ul>
        </div>
        
        <div class="important-box">
            <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#856404">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                Важные моменты
            </h3>
            <p>
                ${lesson.important_notes || 
                'Выполняйте упражнения медленно и осознанно. При появлении боли или дискомфорта остановитесь и проконсультируйтесь со специалистом.'}
            </p>
        </div>
        
        <div class="materials-box">
            <h3> Дополнительные материалы</h3>
            <p>
                ${lesson.additional_info || 
                'Рекомендуем выполнять упражнения 2-3 раза в неделю для достижения наилучших результатов. Следите за правильной техникой выполнения.'}
            </p>
        </div>
    </div>

    <script>
        const video = document.getElementById('lessonVideo');
        const loadingOverlay = document.getElementById('loadingOverlay');
        
        // Скрываем загрузку когда видео готово
        video.addEventListener('loadeddata', () => {
            loadingOverlay.classList.add('hidden');
            console.log('Video loaded:', '${courseId}/${lessonId}');
        });
        
        // Показываем загрузку при буферизации
        video.addEventListener('waiting', () => {
            loadingOverlay.classList.remove('hidden');
        });
        
        video.addEventListener('playing', () => {
            loadingOverlay.classList.add('hidden');
        });
        
        // Обработка ошибок
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            loadingOverlay.classList.add('hidden');
            alert('Ошибка загрузки видео. Проверьте подключение к интернету.');
        });
        
        // Сохраняем прогресс просмотра
        let lastSaveTime = 0;
        video.addEventListener('timeupdate', () => {
            const currentTime = Math.floor(video.currentTime);
            if (currentTime - lastSaveTime > 10) { // Сохраняем каждые 10 секунд
                lastSaveTime = currentTime;
                console.log('Progress saved:', currentTime);
                // TODO: Отправить прогресс в SendPulse
            }
        });
    </script>
</body>
</html>`;
  
  return createCorsResponse(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }
  });
}
