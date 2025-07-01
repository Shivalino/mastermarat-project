const COURSE_DATA = {
  "course1": {
    title: "Механика здоровья",
    lessons: {
      "week1_lesson1": {
        title: "Введение в биомеханику тела",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week1_lesson1.jpg"
      },
      "week1_lesson2": {
        title: "Основы правильной осанки",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week1_lesson2.jpg"
      },
      "week2_lesson1": {
        title: "Работа с позвоночником",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week2_lesson1.jpg"
      },
      "week2_lesson2": {
        title: "Упражнения для шеи",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week2_lesson2.jpg"
      },
      "week3_lesson1": {
        title: "Техники самомассажа",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week3_lesson1.jpg"
      },
      "week3_lesson2": {
        title: "Снятие мышечных блоков",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week3_lesson2.jpg"
      },
      "week4_lesson1": {
        title: "Интеграция движений",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week4_lesson1.jpg"
      },
      "week4_lesson2": {
        title: "Ежедневная практика",
        video_file: "test_video.mp4",
        thumbnail_file: "course1_week4_lesson2.jpg"
      }
    }
  },
  // Здесь будут добавлены другие курсы (course2, course3 и т.д.)
  // Пока оставим только один для примера
};

export default {
  async fetch(request, env, _ctx) {
    const url = new URL(request.url);

    // CORS headers для всех ответов
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Range',
      'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
    };

    // Обработка OPTIONS для CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // HTML плеер видео
    if (url.pathname.startsWith('/player/')) {
      return handlePlayerRequest(request, env, corsHeaders);
    }

    // Публичные thumbnails (БЕЗ токена) - прямо из R2
    if (url.pathname.startsWith('/thumbnails/')) {
      // Извлекаем courseId и lessonId из пути
      const pathParts = url.pathname.split('/');
      if (pathParts.length < 4) { // Ожидаем /thumbnails/{courseId}/{lessonId}.jpg
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid thumbnail path',
            message: 'Ожидаемый формат: /thumbnails/{courseId}/{lessonId}.jpg'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
      const courseId = pathParts[2];
      const lessonFile = pathParts[3]; // Например, week1_lesson1.jpg

      const course = COURSE_DATA[courseId];
      if (!course) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Course not found',
            courseId: courseId
          }),
          {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      // Находим урок по имени файла миниатюры
      let lessonData = null;
      for (const key in course.lessons) {
        if (course.lessons[key].thumbnail_file === lessonFile) {
          lessonData = course.lessons[key];
          break;
        }
      }

      if (!lessonData) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Lesson thumbnail not found',
            lessonFile: lessonFile
          }),
          {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      try {
        const object = await env.R2.get(`thumbnails/${courseId}/${lessonData.thumbnail_file}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Thumbnail not found in R2',
              path: `thumbnails/${courseId}/${lessonData.thumbnail_file}`
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        // Возвращаем изображение
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400',
            ETag: object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Защищенные видео с поддержкой Range requests для стриминга
    if (url.pathname.startsWith('/video/')) {
      // Ожидаем формат /video/{courseId}/{lessonId}.mp4
      const pathParts = url.pathname.split('/');
      if (pathParts.length < 4) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid video path',
            message: 'Ожидаемый формат: /video/{courseId}/{lessonId}.mp4'
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
      const courseId = pathParts[2];
      const lessonFile = pathParts[3]; // Например, week1_lesson1.mp4

      const token = url.searchParams.get('token');

      if (!token) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Token required',
            message: 'Добавьте ?token=ваш_токен к URL',
            example: url.origin + url.pathname + '?token=abc123'
          }),
          {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      // TODO: Реализовать надежную проверку токена
      // Токен должен содержать информацию о пользователе и курсах, к которым у него есть доступ.
      // Для MVP пока оставим простую проверку, но в будущем здесь будет валидация JWT или подписанного токена.
      if (token.length < 3) { // Пример: token.length < 3
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid token',
            message: 'Неверный токен доступа'
          }),
          {
            status: 403,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      const course = COURSE_DATA[courseId];
      if (!course) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Course not found',
            courseId: courseId
          }),
          {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      let lessonData = null;
      for (const key in course.lessons) {
        if (course.lessons[key].video_file === lessonFile) {
          lessonData = course.lessons[key];
          break;
        }
      }

      if (!lessonData) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Lesson video not found',
            lessonFile: lessonFile
          }),
          {
            status: 404,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }

      // TODO: Проверить, имеет ли токен доступ к этому конкретному курсу/уроку
      // Например, если токен содержит список доступных курсов, проверить courseId в этом списке.
      // if (!userHasAccessToCourse(token, courseId)) {
      //   return new Response(
      //     JSON.stringify({
      //       status: 'error',
      //       error: 'Access denied',
      //       message: 'У вас нет доступа к этому курсу'
      //     }),
      //     {
      //       status: 403,
      //       headers: {
      //         'Content-Type': 'application/json',
      //         ...corsHeaders
      //       }
      //     }
      //   );
      // }

      try {
        // Сначала получаем метаданные о файле
        const object = await env.R2.head(`videos/${courseId}/${lessonData.video_file}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Video not found in R2',
              path: `videos/${courseId}/${lessonData.video_file}`
            }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
                ...corsHeaders
              }
            }
          );
        }

        const fileSize = object.size;
        const range = request.headers.get('range');

        // Если браузер запрашивает конкретный диапазон (для стриминга)
        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunkSize = end - start + 1;

          // Получаем только нужную часть видео
          const rangedObject = await env.R2.get(`videos/${courseId}/${lessonData.video_file}`, {
            range: {
              offset: start,
              length: chunkSize
            }
          });

          if (!rangedObject) {
            return new Response('Range Not Satisfiable', {
              status: 416,
              headers: corsHeaders
            });
          }

          // Возвращаем частичный контент
          return new Response(rangedObject.body, {
            status: 206,
            headers: {
              'Content-Type': 'video/mp4',
              'Content-Length': chunkSize.toString(),
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Cache-Control': 'no-cache',
              ...corsHeaders
            }
          });
        }

        // Если нет range запроса, отдаем весь файл
        const fullObject = await env.R2.get(`videos/${courseId}/${lessonData.video_file}`);

        return new Response(fullObject.body, {
          headers: {
            'Content-Type': 'video/mp4',
            'Content-Length': fileSize.toString(),
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'no-cache',
            ETag: object.httpEtag,
            ...corsHeaders
          }
        });
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'R2 error',
            message: error.message
          }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Webhook от SendPulse при покупке
    if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
      try {
        const webhook = await request.json();

        // TODO: Здесь будет логика определения купленного курса из webhook
        // Для примера, предположим, что webhook содержит course_id
        const purchasedCourseId = webhook.course_id || 'course1'; // Заглушка

        // Здесь будет логика создания токена пользователя, который включает course_id
        const userToken = generateSimpleToken(
          webhook.email || 'test@example.com',
          purchasedCourseId
        );

        // TODO: Обновить контакт в SendPulse через API
        // с токеном и датами подписки

        return new Response(
          JSON.stringify({
            status: 'success',
            message: 'Webhook получен! Токен создан.',
            user_token: userToken,
            received_data: webhook,
            note: 'Токен будет отправлен в первом email курса'
          }),
          {
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid JSON in webhook',
            message: error.message
          }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders
            }
          }
        );
      }
    }

    // Главная страница API
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'MasterMarat API для MVP курса "Механика здоровья"',
        worker_url: url.origin,
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Эта страница',
          'GET /player/{courseId}/{lessonId}?token=Y': 'HTML видеоплеер',
          'GET /thumbnails/{courseId}/{filename}': 'Публичные превью видео из R2',
          'GET /video/{courseId}/{filename}?token=xxx':
            'Защищенные видео из R2 с поддержкой streaming',
          'POST /webhook/purchase': 'Webhook от SendPulse при покупке'
        },
        test_links: {
          player:
            `${url.origin}/player/course1/week1_lesson1?token=demo123`,
          thumbnail:
            `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
          video:
            `${url.origin}/video/course1/week1_lesson1.mp4?token=demo123`
        },
        course_structure: COURSE_DATA, // Теперь ссылаемся на COURSE_DATA
        timestamp: new Date().toISOString()
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
};

// Обработка HTML плеера - упрощенная версия для MVP
async function handlePlayerRequest(request, env, corsHeaders) {
  const url = new URL(request.url);
  // Ожидаем /player/{courseId}/{lessonId}
  const pathParts = url.pathname.split('/');
  const courseId = pathParts[2] || 'course1'; // По умолчанию course1
  const lessonId = pathParts[3] || 'week1_lesson1'; // По умолчанию week1_lesson1

  const token = url.searchParams.get('token') || 'demo-token-123';

  const course = COURSE_DATA[courseId];
  if (!course) {
    return new Response(`<h1>Курс "${courseId}" не найден</h1>`, { status: 404, headers: { 'Content-Type': 'text/html', ...corsHeaders } });
  }

  const lessonData = course.lessons[lessonId];
  if (!lessonData) {
    return new Response(`<h1>Урок "${lessonId}" в курсе "${courseId}" не найден</h1>`, { status: 404, headers: { 'Content-Type': 'text/html', ...corsHeaders } });
  }

  const lessonTitle = lessonData.title;
  const videoFile = lessonData.video_file;

  // --- Начало изменений для загрузки контента из R2 ---
  let contentData = {
    display_title: null,
    description_points: ["Контент не загружен из R2."],
    important_notes: ["Важное: Контент не загружен из R2."],
    additional_resources: []
  };

  try {
    const contentObject = await env.R2.get(`content/${courseId}/${lessonId}.json`);
    if (contentObject) {
      contentData = await contentObject.json();
    } else {
      console.warn(`Content file content/${courseId}/${lessonId}.json not found in R2. Using default.`);
    }
  } catch (error) {
    console.error(`Error fetching content from R2 for ${courseId}/${lessonId}.json:`, error);
  }
  // --- Конец изменений для загрузки контента из R2 ---

  const playerHTML = getPlayerHTML(courseId, lessonId, videoFile, token, lessonTitle, contentData);

  return new Response(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

function getPlayerHTML(courseId, lessonId, videoFile, token, lessonTitle, contentData) {
  const displayTitle = contentData.display_title || lessonTitle;
  return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - ${displayTitle}</title>
    ${getStylesHTML()}
</head>
<body>
    ${getHeaderHTML()}
    
    <div class="video-container">
        ${getVideoPlayerHTML(courseId, videoFile, token)}
    </div>
    
    <div class="content">
        ${getLessonContentHTML(displayTitle, contentData.description_points)}
        ${getImportantNotesHTML(contentData.important_notes)}
        ${getAdditionalResourcesHTML(contentData.additional_resources)}
        ${getNavigationHTML(courseId, lessonId, token)}
    </div>
    
    ${getFooterHTML()}

    ${getScriptHTML(courseId, lessonId)}
</body>
</html>`;
}

// --- Новые вспомогательные функции ---
function getStylesHTML() {
  return `<style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        
        .header {
            background: linear-gradient(135deg, #2E8B57 0%, #3D968C 100%);
            padding: 20px;
            color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            font-size: 24px;
            font-weight: 600;
            margin: 0;
        }
        
        .header .course-info {
            margin-top: 5px;
            font-size: 14px;
            opacity: 0.9;
        }
        
        .video-container {
            max-width: 1200px;
            margin: 20px auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 соотношение */
            height: 0;
            background: #000;
        }
        
        video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
        }
        
        .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .content {
            padding: 30px;
        }
        
        .lesson-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 20px;
            color: #2E8B57;
        }
        
        .lesson-description {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            border-left: 4px solid #2E8B57;
        }
        
        .lesson-description h3 {
            color: #2E8B57;
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 600;
        }
        
        .lesson-description ul {
            list-style: none;
            padding: 0;
        }
        
        .lesson-description li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
            color: #555;
            line-height: 1.6;
        }
        
        .lesson-description li:before {
            content: "✓";
            color: #2E8B57;
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        
        .important-notes {
            background: linear-gradient(135deg, #F59B3A 0%, #E8851C 100%);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            color: white;
        }
        
        .important-notes h3 {
            font-size: 18px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        
        .important-notes p {
            line-height: 1.6;
            margin-bottom: 10px;
        }
        
        .important-notes p:last-child {
            margin-bottom: 0;
        }

        .additional-resources {
            background: #e6f7ff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 25px;
            border-left: 4px solid #1890ff;
        }

        .additional-resources h3 {
            color: #1890ff;
            font-size: 18px;
            margin-bottom: 12px;
            font-weight: 600;
        }

        .additional-resources ul {
            list-style: none;
            padding: 0;
        }

        .additional-resources li {
            margin-bottom: 8px;
        }

        .additional-resources a {
            color: #1890ff;
            text-decoration: none;
            font-weight: 500;
        }

        .additional-resources a:hover {
            text-decoration: underline;
        }
        
        .navigation {
            display: flex;
            gap: 15px;
            margin-top: 30px;
        }
        
        .nav-button {
            flex: 1;
            padding: 15px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
            text-decoration: none;
            display: inline-block;
        }
        
        .nav-button.primary {
            background: #2E8B57;
            color: white;
        }
        
        .nav-button.primary:hover {
            background: #3D968C;
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .nav-button.secondary {
            background: #e0e0e0;
            color: #666;
        }
        
        .nav-button.secondary:hover {
            background: #d0d0d0;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            margin-top: 50px;
            color: #666;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 20px;
            }
            
            .video-container {
                margin: 10px;
                border-radius: 0;
            }
            
            .content {
                padding: 20px;
            }
            
            .lesson-title {
                font-size: 24px;
            }
            
            .navigation {
                flex-direction: column;
            }
        }
    </style>`;
}

function getHeaderHTML() {
  return `<div class="header">
        <h1>MasterMarat</h1>
        <div class="course-info">Курс "Механика здоровья" • MVP версия</div>
    </div>`;
}

function getVideoPlayerHTML(courseId, videoFile, token) {
  return `<div class="video-wrapper">
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <div>Загрузка видео...</div>
            </div>
            
            <video 
                id="videoPlayer"
                controls
                playsinline
                preload="auto"
                style="display: none;"
            >
                <source src="/video/${courseId}/${videoFile}?token=${token}" type="video/mp4">
                Ваш браузер не поддерживает видео HTML5.
            </video>
        </div>`;
}

function getLessonContentHTML(lessonTitle, descriptionPoints) {
  const pointsHtml = descriptionPoints.map(point => `<li>${point}</li>`).join('');
  return `<h2 class="lesson-title">${lessonTitle}</h2>
        
        <div class="lesson-description">
            <h3>В этом видео:</h3>
            <ul>
                ${pointsHtml}
            </ul>
        </div>`;
}

function getImportantNotesHTML(importantNotes) {
  if (!importantNotes || importantNotes.length === 0) {
    return '';
  }
  
  const notesHtml = importantNotes.map(note => `<p>${note}</p>`).join('');
  return `<div class="important-notes">
            <h3>Важные моменты</h3>
            ${notesHtml}
        </div>`;
}

function getAdditionalResourcesHTML(additionalResources) {
  if (!additionalResources || additionalResources.length === 0) {
    return '';
  }
  
  const resourcesHtml = additionalResources.map(resource => 
    `<li><a href="${resource.url}" target="_blank">${resource.title}</a></li>`
  ).join('');
  
  return `<div class="additional-resources">
            <h3>Дополнительные материалы</h3>
            <ul>
                ${resourcesHtml}
            </ul>
        </div>`;
}

function getHomeworkHTML(homeworkText) {
  return `<div class="homework">
            <h3>Важное</h3>
            <p>${homeworkText}</p>
        </div>`;
}

function getNavigationHTML(courseId, lessonId, token) {
  const course = COURSE_DATA[courseId];
  const lessonKeys = Object.keys(course.lessons);
  const currentIndex = lessonKeys.indexOf(lessonId);

  const prevLessonId = currentIndex > 0 ? lessonKeys[currentIndex - 1] : null;
  const nextLessonId = currentIndex < lessonKeys.length - 1 ? lessonKeys[currentIndex + 1] : null;

  const prevButton = prevLessonId
    ? `<a href="/player/${courseId}/${prevLessonId}?token=${token}" class="nav-button secondary">← Предыдущий урок</a>`
    : `<button class="nav-button secondary" disabled>← Предыдущий урок</button>`;

  const nextButton = nextLessonId
    ? `<a href="/player/${courseId}/${nextLessonId}?token=${token}" class="nav-button primary">Следующий урок →</a>`
    : `<button class="nav-button primary" disabled>Следующий урок →</button>`;

  return `<div class="navigation">
            ${prevButton}
            ${nextButton}
        </div>`;
}

function getFooterHTML() {
  return `<div class="footer">
        <p>© 2025 MasterMarat • Остеопатические методики • Марат Малиев</p>
    </div>`;
}

function getScriptHTML(courseId, lessonId) {
  return `<script>
        // Простая инициализация плеера
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('videoPlayer');
            const loading = document.getElementById('loading');
            
            // Показываем видео когда оно готово к воспроизведению
            video.addEventListener('loadedmetadata', function() {
                loading.style.display = 'none';
                video.style.display = 'block';
            });
            
            // Обработка ошибок
            video.addEventListener('error', function(e) {
                loading.innerHTML = '<div style="color: #ff6b6b;">Ошибка загрузки видео. Проверьте токен доступа.</div>';
                console.error('Video error:', e);
            });
            
            // Простая аналитика
            video.addEventListener('play', function() {
                console.log('Начат просмотр урока:', '${courseId}/${lessonId}');
            });
            
            video.addEventListener('ended', function() {
                console.log('Завершен просмотр урока:', '${courseId}/${lessonId}');
            });
        });
    </script>`;
}

// Простая функция генерации токена
function generateSimpleToken(email, courseId) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  return `${emailHash}_${courseId}_${timestamp.substring(-8)}`;
}
