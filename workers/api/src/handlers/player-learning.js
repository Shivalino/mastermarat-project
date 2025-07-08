// handlers/player-learning.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerLearning(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1];
  const lessonId = pathParts[2];
  const token = url.searchParams.get('token');
  
  if (!courseId || !lessonId) {
    return createNotFoundResponse('Course or lesson');
  }
  
  if (!token) {
    return createUnauthorizedResponse('Token required');
  }
  
  // Проверяем доступ
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
  
  // Извлекаем номер недели и урока
  const weekMatch = lessonId.match(/week(\d+)_lesson(\d+)/);
  const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
  const lessonNum = weekMatch ? parseInt(weekMatch[2]) : 1;
  
  // Генерируем HTML плеера в стиле MasterMarat с зеленой палитрой
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
            background: #F5F1E8;
            color: #2C3E50;
            line-height: 1.6;
            font-size: 18px;
        }
        
        /* Шапка в стиле MasterMarat */
        .header {
            background: #2E8B57;
            color: white;
            padding: 20px 25px;
            box-shadow: 0 2px 10px rgba(46, 139, 87, 0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .header h1 {
            font-size: 28px;
            font-weight: 600;
            letter-spacing: -0.5px;
        }
        
        .course-meta {
            font-size: 18px;
            opacity: 0.95;
            font-weight: 500;
        }
        
        /* Контейнер видео */
        .video-section {
            background: #E6F3F0;
            padding: 60px 0;
            border-bottom: 1px solid rgba(46, 139, 87, 0.1);
        }
        
        .video-container {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(46, 139, 87, 0.15);
        }
        
        video {
            width: 100%;
            height: auto;
            display: block;
            background: #000;
        }
        
        /* Контент после видео */
        .content-section {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 25px;
        }
        
        .lesson-title {
            font-size: 38px;
            font-weight: 700;
            color: #2E8B57;
            margin-bottom: 40px;
            line-height: 1.3;
        }
        
        .video-content {
            background: white;
            padding: 35px;
            border-radius: 16px;
            margin-bottom: 35px;
            border: 1px solid rgba(46, 139, 87, 0.1);
        }
        
        .video-content h2 {
            font-size: 24px;
            color: #2E8B57;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
        }
        
        .video-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .video-content li {
            padding: 12px 0 12px 35px;
            position: relative;
            font-size: 20px;
            line-height: 1.8;
            color: #2C3E50;
        }
        
        .video-content li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #F59B3A;
            font-weight: bold;
            font-size: 22px;
        }
        
        /* Важная информация */
        .important-box {
            background: #FFF4E6;
            border: 2px solid #F59B3A;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 35px;
        }
        
        .important-box h3 {
            color: #D97F00;
            font-size: 22px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 600;
        }
        
        .important-box p {
            color: #2C3E50;
            line-height: 1.8;
            font-size: 19px;
            margin-bottom: 15px;
        }
        
        .important-box p:last-child {
            margin-bottom: 0;
        }
        
        /* Дополнительные материалы */
        .materials-box {
            background: #E6F3F0;
            border: 2px solid #2E8B57;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 35px;
        }
        
        .materials-box h3 {
            color: #2E8B57;
            font-size: 22px;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .materials-box p {
            color: #2C3E50;
            line-height: 1.8;
            font-size: 19px;
            margin-bottom: 15px;
        }
        
        .materials-box p:last-child {
            margin-bottom: 0;
        }
        
        /* Материалы для скачивания */
        .download-materials {
            background: white;
            border: 2px solid #2E8B57;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 35px;
        }
        
        .download-materials h3 {
            color: #2E8B57;
            font-size: 22px;
            margin-bottom: 20px;
            font-weight: 600;
        }
        
        .material-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            background: #F5F1E8;
            border-radius: 12px;
            margin-bottom: 15px;
            transition: all 0.3s ease;
        }
        
        .material-item:hover {
            background: #E6F3F0;
            transform: translateX(5px);
        }
        
        .material-item:last-child {
            margin-bottom: 0;
        }
        
        .material-icon {
            width: 40px;
            height: 40px;
            background: #F59B3A;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .material-icon svg {
            width: 24px;
            height: 24px;
            fill: white;
        }
        
        .material-info {
            flex: 1;
        }
        
        .material-title {
            font-weight: 600;
            color: #2C3E50;
            font-size: 18px;
        }
        
        .material-link {
            color: #2E8B57;
            text-decoration: none;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        
        .material-link:hover {
            text-decoration: underline;
        }
        
        /* Индикатор загрузки */
        .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(46, 139, 87, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 100;
            transition: opacity 0.3s;
            border-radius: 16px;
        }
        
        .loading-overlay.hidden {
            opacity: 0;
            pointer-events: none;
        }
        
        .spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Мобильная адаптация */
        @media (max-width: 768px) {
            body {
                font-size: 16px;
            }
            
            .header {
                padding: 15px 20px;
            }
            
            .header-content {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .header h1 {
                font-size: 24px;
            }
            
            .course-meta {
                font-size: 16px;
            }
            
            .video-section {
                padding: 30px 15px;
            }
            
            .content-section {
                padding: 40px 20px;
            }
            
            .lesson-title {
                font-size: 28px;
                margin-bottom: 30px;
            }
            
            .video-content, .important-box, .materials-box, .download-materials {
                padding: 25px;
            }
            
            .video-content h2, .important-box h3, .materials-box h3, .download-materials h3 {
                font-size: 20px;
            }
            
            .video-content li {
                font-size: 18px;
                padding-left: 30px;
            }
            
            .important-box p, .materials-box p {
                font-size: 17px;
            }
            
            .material-title {
                font-size: 16px;
            }
        }
    
        /* Скрываем кнопку скачивания */
        video::-webkit-media-controls-download-button {
            display: none !important;
        }
        video::-webkit-media-controls-picture-in-picture-button {
            display: none !important;
        }
        /* Отключаем контекстное меню */
        video {
            pointer-events: auto;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>MasterMarat</h1>
            <div class="course-meta">
                ${course.title} • Неделя ${weekNum}, Урок ${lessonNum}
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
             controlslist="nodownload noplaybackrate" disablePictureInPicture>
                <source src="${url.origin}/video/${courseId}/${lesson.video_file}?token=${token}" type="video/mp4">
                Ваш браузер не поддерживает HTML5 видео.
            </video>
        </div>
    </div>
    
    <div class="content-section">
        <h1 class="lesson-title">${lesson.title}</h1>
        
        <div class="video-content">
            <h2>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#2E8B57">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
                В этом видео:
            </h2>
            <ul>
                ${lesson.content_points ? lesson.content_points.map(point => 
                    `<li>${point}</li>`
                ).join('') : '<li>Практические упражнения для улучшения биомеханики</li>'}
            </ul>
        </div>
        
        ${lesson.important_notes && lesson.important_notes.length > 0 ? `
        <div class="important-box">
            <h3>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#F59B3A">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
                Важно помнить:
            </h3>
            ${Array.isArray(lesson.important_notes) 
                ? lesson.important_notes.map(note => `<p>• ${note}</p>`).join('')
                : `<p>${lesson.important_notes}</p>`
            }
        </div>
        ` : ''}
        
        ${lesson.additional_info && lesson.additional_info.length > 0 ? `
        <div class="materials-box">
            <h3>Дополнительная информация</h3>
            ${Array.isArray(lesson.additional_info)
                ? lesson.additional_info.map(info => `<p>• ${info}</p>`).join('')
                : `<p>${lesson.additional_info}</p>`
            }
        </div>
        ` : ''}
        
        ${lesson.materials && lesson.materials.length > 0 ? `
        <div class="download-materials">
            <h3>Материалы к уроку</h3>
            ${lesson.materials.map(material => {
                if (material.type === 'pdf') {
                    return `
                    <div class="material-item">
                        <div class="material-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                            </svg>
                        </div>
                        <div class="material-info">
                            <div class="material-title">${material.title}</div>
                            <a href="${url.origin}/materials/${courseId}/${material.file}?token=${token}" 
                               class="material-link" 
                               download>
                                Скачать PDF →
                            </a>
                        </div>
                    </div>`;
                } else if (material.type === 'link') {
                    return `
                    <div class="material-item">
                        <div class="material-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"/>
                            </svg>
                        </div>
                        <div class="material-info">
                            <div class="material-title">${material.title}</div>
                            <a href="${material.url}" 
                               class="material-link" 
                               target="_blank" 
                               rel="noopener noreferrer">
                                Открыть ссылку →
                            </a>
                        </div>
                    </div>`;
                }
                return '';
            }).join('')}
        </div>
        ` : ''}
    </div>
    
    <script>
        const video = document.getElementById('lessonVideo');
        const loadingOverlay = document.getElementById('loadingOverlay');
        
        // Скрываем индикатор загрузки когда видео готово
        video.addEventListener('loadeddata', () => {
            loadingOverlay.classList.add('hidden');
        });
        
        // Показываем индикатор при буферизации
        video.addEventListener('waiting', () => {
            loadingOverlay.classList.remove('hidden');
        });
        
        video.addEventListener('playing', () => {
            loadingOverlay.classList.add('hidden');
        });
        
        // Обработка ошибок
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            loadingOverlay.innerHTML = '<div style="color: white; text-align: center; padding: 20px;"><h3>Ошибка загрузки видео</h3><p style="margin-top: 10px;">Проверьте подключение к интернету или обратитесь в поддержку.</p></div>';
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
