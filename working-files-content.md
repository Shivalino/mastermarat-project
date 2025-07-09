# Working Files with Content - MasterMarat Project

*Generated: 2025-07-08 09:46*

**Total: 69 files**

---

## API Config (2)

### `workers/api/src/config/constants.js` (2.29 KB)

```javascript
// config/constants.js
export const API_VERSION = '1.0.0';

// Токены для тестирования
export const TEST_TOKENS = {
  // SuperUser - полный доступ ко всему
  SUPER_USER: 'superuser_mastermarat_2025',

  // Токены по типам подписки
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',

  // Специальные токены
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// Права доступа по типам токенов
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: [
      'course01',
      'course02',
      'course03',
      'course04',
      'course05',
      'course06',
      'course07',
      'course08'
    ],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course01'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course01'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course01', 'course00'], // Добавлен доступ к демо-курсу
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL конфигурация
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};

// Публичные курсы (доступны без токена)
export const PUBLIC_COURSES = ['course00'];

// Публичные уроки (доступны без токена)
export const PUBLIC_LESSONS = {
  course00: ['demo001', 'demo002', 'demo003'] // Список демо-уроков
};

```

---

### `workers/api/src/config/courses.js` (10.51 KB)

```javascript
// config/courses.js - обновленная структура с lesson001-999
export const COURSE_DATA = {
  course01: {
    title: 'Механика здоровья',
    lessons: {
      lesson001: {
        title: '"Три Слона" в Механике Здоровья',
        video_file: 'lesson001.mp4',
        thumbnail_file: 'lesson001.jpg',
        content_points: [
          'Движение (здоровые суставы)',
          'Водный баланс (жидкости в организме)',
          'Дыхание (без него остальное - бессмысленно)'
        ],
        important_notes: [
          'На самом деле «слонов» намного больше, потому что человеческий организм похож на автомобиль: без корректной работы любого из «отделов» человеческого организма будет малая поломка - последует другая. В итоге, «механизм остановится»',
          'Каждый орган, каждый цикл, каждый гормон, клетка или ткань человеческого организма — важны и тесно связаны между собой.',
          'При нарушении работы любого из отделов человеческого организма дисфункция проявится и на других. Вопрос во времени проявления цепочки дисфункций.'
        ],
        additional_info: [
          'В этом, вводном курсе, будет дана кратко информация для понимания механики работы по каждому из сегментов, и пара рекомендаций для поддержания баланса.',
          'Объем достаточный для понимания концепции подачи информации и понимания в теме о которой говорим.',
          'Базовые рекомендации, которые будут даны в этом курсе, при регулярном использовании, дадут положительный результат на организм.'
        ],
        materials: [
          {
            type: 'pdf',
            title: 'Методичка по трем слонам',
            file: 'lesson001_guide.pdf'
          },
          {
            type: 'link',
            title: 'Дополнительное видео на YouTube',
            url: 'https://youtube.com/...'
          }
        ]
      },
      lesson002: {
        title: 'Основы правильной осанки',
        video_file: 'lesson002.mp4',
        thumbnail_file: 'lesson002.jpg',
        content_points: [
          'Анатомия позвоночника и его естественные изгибы',
          'Признаки правильной и неправильной осанки',
          'Простые упражнения для улучшения осанки'
        ],
        important_notes:
          'Выполняйте упражнения перед зеркалом для контроля правильности положения тела. При болях в спине проконсультируйтесь с врачом.',
        additional_info:
          'Правильная осанка - основа здоровья всего организма. Уделяйте внимание осанке в течение всего дня, особенно при работе за компьютером.'
      },
      lesson003: {
        title: 'Работа с позвоночником',
        video_file: 'lesson003.mp4',
        thumbnail_file: 'lesson003.jpg',
        content_points: [
          'Безопасная мобилизация позвоночника',
          'Упражнения для каждого отдела позвоночника',
          'Техники снятия напряжения в спине'
        ],
        important_notes:
          'Все движения выполняйте плавно, без рывков. При головокружении прекратите выполнение упражнений.',
        additional_info:
          'Регулярная практика этих упражнений поможет улучшить гибкость позвоночника и снизить риск болей в спине.'
      },
      lesson004: {
        title: 'Упражнения для шеи',
        video_file: 'lesson004.mp4',
        thumbnail_file: 'lesson004.jpg',
        content_points: [
          'Анатомия шейного отдела и его особенности',
          'Безопасные упражнения для снятия напряжения в шее',
          'Профилактика головных болей напряжения'
        ],
        important_notes:
          'Упражнения для шеи требуют особой осторожности. Не делайте резких движений и круговых вращений головой.',
        additional_info:
          'Эти упражнения особенно полезны для людей, работающих за компьютером. Выполняйте их каждые 2-3 часа в течение рабочего дня.'
      },
      lesson005: {
        title: 'Техники самомассажа',
        video_file: 'lesson005.mp4',
        thumbnail_file: 'lesson005.jpg',
        content_points: [
          'Основные приемы самомассажа',
          'Работа с триггерными точками',
          'Использование подручных средств для массажа'
        ],
        important_notes:
          'При самомассаже избегайте сильного давления на позвоночник, лимфоузлы и области с воспалениями.',
        additional_info:
          'Самомассаж - эффективный способ снятия мышечного напряжения. Лучшее время для массажа - после теплого душа или ванны.'
      },
      lesson006: {
        title: 'Снятие мышечных блоков',
        video_file: 'lesson006.mp4',
        thumbnail_file: 'lesson006.jpg',
        content_points: [
          'Что такое мышечные блоки и почему они возникают',
          'Техники глубокого расслабления мышц',
          'Дыхательные упражнения для снятия напряжения'
        ],
        important_notes:
          'Дыхание - ключ к расслаблению. Следите за ритмом дыхания во время выполнения всех упражнений.',
        additional_info:
          'Регулярная практика поможет вам научиться быстро снимать напряжение в любой ситуации.'
      },
      lesson007: {
        title: 'Интеграция движений',
        video_file: 'lesson007.mp4',
        thumbnail_file: 'lesson007.jpg',
        content_points: [
          'Соединение изученных техник в единый комплекс',
          'Создание индивидуальной программы упражнений',
          'Адаптация упражнений под ваши потребности'
        ],
        important_notes:
          'На этом этапе важно прислушиваться к своему телу и выбирать те упражнения, которые приносят наибольшую пользу именно вам.',
        additional_info:
          'Создайте свой ежедневный 15-минутный комплекс из наиболее эффективных для вас упражнений.'
      },
      lesson008: {
        title: 'Ежедневная практика',
        video_file: 'lesson008.mp4',
        thumbnail_file: 'lesson008.jpg',
        content_points: [
          'Как встроить упражнения в повседневную жизнь',
          'Мини-комплексы для офиса и дома',
          'Поддержание результатов и дальнейшее развитие'
        ],
        important_notes:
          'Регулярность важнее интенсивности. Лучше заниматься по 10 минут каждый день, чем час раз в неделю.',
        additional_info:
          'Поздравляем с завершением курса! Продолжайте практику, и ваше тело скажет вам спасибо.'
      }
    }
  },
  course00: {
    title: 'Демо-курс',
    demo: true, // Флаг для доступа без токена
    lessons: {
      demo001: {
        title: 'Знакомство с методикой',
        video_file: 'demo001.mp4',
        thumbnail_file: 'demo001.jpg',
        content_points: [
          'Что такое остеопатия',
          'Основные принципы работы',
          'Что вы получите от курсов'
        ],
        important_notes:
          'Это демонстрационный урок. Полный курс содержит более 20 уроков с детальной проработкой каждой темы.',
        additional_info:
          'После просмотра демо-урока вы можете приобрести полный доступ к курсам.'
      }
    }
  }
};

// Вспомогательная функция для получения всех уроков курса
export function getCourseLessons(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return [];

  return Object.entries(course.lessons)
    .map(([id, lesson]) => ({ id, ...lesson }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

// Проверка, является ли курс демо
export function isDemoCourse(courseId) {
  const course = COURSE_DATA[courseId];
  return course && course.demo === true;
}

```

---

## API Core (2)

### `workers/api/src/templates/base.js` (1.51 KB)

```javascript
// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    
    
</body>
</html>;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return 
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster=""
            id="lesson-video"
        >
            <source src="" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
    </div>
  ;
}

```

---

### `workers/api/src/worker-new.js` (2.99 KB)

```javascript
// worker-new.js - только роутинг
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// Импортируем обработчики
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhook } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Главная страница - документация API
      if (pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // Тестовая страница
      if (pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      // Thumbnails (превью видео)
      if (pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      // Video streaming
      if (pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      // Player для обучения (learning mode)
      if (pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      // Player для архива (archive mode)
      if (pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      // Webhooks - универсальный обработчик
      // Поддерживает пути вида:
      // /webhook/sendpulse/subscribe
      // /webhook/sendpulse/payment
      // /webhook/monobank
      // /webhook/fondy
      if (pathname.startsWith('/webhook/')) {
        return await handleWebhook(request, env, pathname);
      }

      // 404 для неизвестных маршрутов
      return createErrorResponse('Endpoint not found', 404, {
        path: pathname,
        method: method,
        available_endpoints: [
          'GET /',
          'GET /test',
          'GET /thumbnails/{courseId}/{filename}',
          'GET /video/{courseId}/{filename}',
          'GET /player/{courseId}/{lessonId}',
          'GET /archive/{courseId}/{lessonId}',
          'POST /webhook/sendpulse/{event}',
          'POST /webhook/monobank',
          'POST /webhook/fondy'
        ]
      });
    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse('Internal server error', 500, {
        message: error.message,
        stack: env.ENVIRONMENT === 'development' ? error.stack : undefined
      });
    }
  }
};

```

---

## API Handlers (7)

### `workers/api/src/handlers/api.js` (1.73 KB)

```javascript
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}
```

---

### `workers/api/src/handlers/player-archive.js` (10.13 KB)

```javascript
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

```

---

### `workers/api/src/handlers/player-learning.js` (18.15 KB)

```javascript
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

```

---

### `workers/api/src/handlers/test.js` (2.05 KB)

```javascript
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // Тестируем все токены
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1> MasterMarat Token Testing</h1>
    <p>Используйте эти токены для тестирования разных уровней доступа:</p>
    
    <div class="token-box">
        <h3> Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=superuser_mastermarat_2025">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=superuser_mastermarat_2025">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=demo123">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=expired_test_token">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}

```

---

### `workers/api/src/handlers/thumbnails.js` (1.54 KB)

```javascript
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

```

---

### `workers/api/src/handlers/video.js` (3.56 KB)

```javascript
// handlers/video.js
import {
  createCorsResponse,
  createUnauthorizedResponse,
  createNotFoundResponse
} from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';
import { isPublicAccess } from '../utils/token.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);

  if (pathParts.length < 3) {
    return createNotFoundResponse('Video');
  }

  const courseId = pathParts[1];
  const fileName = pathParts[2];
  const token = url.searchParams.get('token');

  // РР·РІР»РµРєР°РµРј lessonId РёР· РёРјРµРЅРё С„Р°Р№Р»Р°
  const lessonId = fileName.replace('.mp4', '');
  const isPublic = isPublicAccess(courseId, lessonId);

  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ С‚РѕР»СЊРєРѕ РґР»СЏ РЅРµРїСѓР±Р»РёС‡РЅС‹С… РєСѓСЂСЃРѕРІ
  if (!isPublic) {
    if (!token) {
      return createUnauthorizedResponse('Token required');
    }

    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
    const accessCheck = hasAccess(token, courseId, 'player');
    if (!accessCheck.allowed) {
      return createUnauthorizedResponse(accessCheck.reason);
    }
  }

  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;

  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonData = course.lessons[lessonId];

    if (lessonData && lessonData.video_file) {
      videoKey = `content/${courseId}/${lessonData.video_file}`;
    }
  }

  try {
    const range = request.headers.get('range');

    if (range) {
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
        headers.set(
          'Content-Type',
          video.httpMetadata?.contentType || 'video/mp4'
        );
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

    // РћР±С‹С‡РЅС‹Р№ Р·Р°РїСЂРѕСЃ Р±РµР· range
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

```

---

### `workers/api/src/handlers/webhooks.js` (14.16 KB)

```javascript
// handlers/webhooks.js
import { createErrorResponse, createCorsResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

// Вспомогательная функция для JSON ответов
function createJsonResponse(data, status = 200) {
  return createCorsResponse(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

/**
 * Основной роутер для вебхуков
 */
export async function handleWebhooks(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Разбираем путь: /webhook/sendpulse/subscribe
  const parts = path.split('/').filter(Boolean);

  if (parts.length < 2) {
    return createErrorResponse('Invalid webhook path', 404);
  }

  const service = parts[1]; // sendpulse, monobank
  const event = parts[2] || 'default'; // subscribe, payment, etc.

  try {
    switch (service) {
      case 'sendpulse':
        return await handleSendPulseWebhook(request, env, event);

      case 'monobank':
        return await handleMonobankWebhook(request, env, event);

      default:
        return createErrorResponse(`Unknown webhook service: ${service}`, 404);
    }
  } catch (error) {
    console.error(`Webhook error [${service}/${event}]:`, error);
    return createErrorResponse('Webhook processing failed', 500);
  }
}

/**
 * Обработчик вебхуков SendPulse
 */
async function handleSendPulseWebhook(request, env, eventType) {
  // Проверка метода
  if (request.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  // Проверка секретного ключа (если настроен)
  const secret = env.SENDPULSE_WEBHOOK_SECRET;
  if (secret) {
    const signature = request.headers.get('X-Webhook-Signature');
    if (!signature || signature !== secret) {
      console.warn('Invalid webhook signature');
      return createErrorResponse('Unauthorized', 401);
    }
  }

  // Получаем данные
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid JSON', 400);
  }

  // Логируем событие
  console.log(`SendPulse webhook [${eventType}]:`, JSON.stringify(data));

  // Обрабатываем разные типы событий
  switch (eventType) {
    case 'subscribe':
      return await handleSubscribe(data, env);

    case 'unsubscribe':
    case 'user-unsubscribe':
      return await handleUnsubscribe(data, env);

    case 'hard-bounce':
      return await handleHardBounce(data, env);

    case 'soft-bounce':
      return await handleSoftBounce(data, env);

    case 'spam':
      return await handleSpamReport(data, env);

    case 'open':
      return await handleEmailOpen(data, env);

    case 'click':
      return await handleLinkClick(data, env);

    case 'delivered':
      return await handleDelivered(data, env);

    case 'payment':
      return await handleSendPulsePayment(data, env);

    default:
      console.warn(`Unknown SendPulse event: ${eventType}`);
      return createJsonResponse({
        status: 'success',
        message: `Event ${eventType} received but not processed`
      });
  }
}

/**
 * Обработчик новой подписки
 */
async function handleSubscribe(data, env) {
  const { email, name, phone, variables } = data;

  // Создаем или обновляем пользователя
  const user = {
    email,
    name: name || variables?.name || 'Unknown',
    phone: phone || variables?.phone || '',
    subscribed: true,
    subscribed_at: new Date().toISOString(),
    subscription_type: variables?.subscription_type || 'basic',
    source: 'sendpulse_webhook'
  };

  // Сохраняем в KV (если есть)
  if (env.KV) {
    await env.KV.put(`user:${email}`, JSON.stringify(user), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  // Если это платная подписка, генерируем токен
  if (variables?.payment_confirmed) {
    const courseId = variables?.course_id || 'course1';
    const token = generateSimpleToken(email, courseId);

    // TODO: Обновить контакт в SendPulse с токеном через API
    console.log(`Generated token for ${email}: ${token}`);

    return createJsonResponse({
      status: 'success',
      message: 'Subscription activated',
      email,
      token_generated: true // В реальности токен отправляется по email
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Subscriber added',
    email
  });
}

/**
 * Обработчик отписки
 */
async function handleUnsubscribe(data, env) {
  const { email } = data;

  // Обновляем статус пользователя
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.subscribed = false;
      existingUser.unsubscribed_at = new Date().toISOString();
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }

    // Инвалидируем токены пользователя
    // Ищем все токены пользователя (в реальности нужен список токенов)
    const tokenPattern = `token:${email}:*`;
    // KV не поддерживает wildcard, нужно хранить список токенов отдельно
  }

  return createJsonResponse({
    status: 'success',
    message: 'User unsubscribed',
    email
  });
}

/**
 * Обработчик жестких отказов (email не существует)
 */
async function handleHardBounce(data, env) {
  const { email, reason } = data;

  // Помечаем email как недействительный
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.email_status = 'invalid';
      existingUser.bounce_reason = reason;
      existingUser.bounced_at = new Date().toISOString();
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }
  }

  return createJsonResponse({
    status: 'success',
    message: 'Hard bounce processed'
  });
}

/**
 * Обработчик мягких отказов (временные проблемы)
 */
async function handleSoftBounce(data, env) {
  const { email, reason } = data;

  // Увеличиваем счетчик soft bounces
  if (env.KV) {
    const key = `analytics:bounce:soft:${email}`;
    const count = (await env.KV.get(key, 'json')) || { count: 0 };
    count.count++;
    count.last_bounce = new Date().toISOString();
    count.last_reason = reason;

    await env.KV.put(key, JSON.stringify(count), {
      expirationTtl: 60 * 60 * 24 * 30 // 30 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Soft bounce logged'
  });
}

/**
 * Обработчик жалоб на спам
 */
async function handleSpamReport(data, env) {
  const { email } = data;

  console.error(`SPAM COMPLAINT from ${email}!`);

  // Критически важно! Немедленно отписываем
  return await handleUnsubscribe(data, env);
}

/**
 * Обработчик открытия письма
 */
async function handleEmailOpen(data, env) {
  const { email, campaign_id, timestamp } = data;

  // Сохраняем для аналитики
  if (env.KV) {
    const key = `analytics:open:${campaign_id}:${email}`;
    await env.KV.put(key, timestamp || new Date().toISOString(), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Open tracked'
  });
}

/**
 * Обработчик клика по ссылке
 */
async function handleLinkClick(data, env) {
  const { email, url, campaign_id, timestamp } = data;

  // Сохраняем для аналитики
  if (env.KV) {
    const clickData = {
      email,
      url,
      campaign_id,
      timestamp: timestamp || new Date().toISOString()
    };

    const key = `analytics:click:${campaign_id}:${email}:${Date.now()}`;
    await env.KV.put(key, JSON.stringify(clickData), {
      expirationTtl: 60 * 60 * 24 * 90 // 90 дней
    });
  }

  return createJsonResponse({
    status: 'success',
    message: 'Click tracked'
  });
}

/**
 * Обработчик успешной доставки
 */
async function handleDelivered(data, env) {
  const { email, campaign_id } = data;

  // Обновляем статус доставки
  if (env.KV) {
    const userKey = `user:${email}`;
    const existingUser = await env.KV.get(userKey, 'json');

    if (existingUser) {
      existingUser.last_email_delivered = new Date().toISOString();
      existingUser.last_campaign_id = campaign_id;
      await env.KV.put(userKey, JSON.stringify(existingUser));
    }
  }

  return createJsonResponse({
    status: 'success',
    message: 'Delivery confirmed'
  });
}

/**
 * Обработчик платежей через SendPulse
 */
async function handleSendPulsePayment(data, env) {
  const {
    email,
    amount,
    currency,
    subscription_type,
    payment_id,
    period_months = 3,
    variables
  } = data;

  // Определяем курс из переменных или по умолчанию
  const courseId = variables?.course_id || 'course1';

  // Генерируем токен доступа
  const token = generateSimpleToken(email, courseId);

  // Рассчитываем дату окончания подписки
  const expiresAt = new Date();
  expiresAt.setMonth(expiresAt.getMonth() + period_months);

  // Сохраняем информацию о платеже
  if (env.KV) {
    const payment = {
      payment_id,
      email,
      amount,
      currency,
      subscription_type,
      period_months,
      course_id: courseId,
      token,
      created_at: new Date().toISOString(),
      expires_at: expiresAt.toISOString()
    };

    await env.KV.put(`payment:${payment_id}`, JSON.stringify(payment));

    // Обновляем пользователя
    const user = {
      email,
      subscription_type,
      subscription_active: true,
      subscription_expires: expiresAt.toISOString(),
      last_payment_id: payment_id,
      last_payment_date: new Date().toISOString(),
      access_token: token,
      courses_access: [courseId]
    };

    await env.KV.put(`user:${email}`, JSON.stringify(user));

    // Кешируем токен для быстрой проверки
    await env.KV.put(
      `token:${token}`,
      JSON.stringify({
        email,
        subscription_type,
        expires_at: expiresAt.toISOString(),
        courses: [courseId]
      }),
      {
        expirationTtl: 60 * 60 * 24 // 24 часа
      }
    );
  }

  // TODO: Обновить контакт в SendPulse через API с токеном

  return createJsonResponse({
    status: 'success',
    message: 'Payment processed',
    payment_id,
    subscription_activated: true,
    expires_at: expiresAt.toISOString()
  });
}

/**
 * Обработчик вебхуков Monobank
 * Документация: https://api.monobank.ua/docs/acquiring.html
 */
async function handleMonobankWebhook(request, env, eventType) {
  // Проверка метода
  if (request.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  // Проверка подписи X-Sign (если настроена)
  const publicKey = env.MONOBANK_PUBLIC_KEY;
  if (publicKey) {
    const signature = request.headers.get('X-Sign');
    if (!signature) {
      console.warn('Missing Monobank signature');
      return createErrorResponse('Unauthorized', 401);
    }

    // TODO: Реализовать проверку подписи по алгоритму Monobank
    // const isValid = await verifyMonobankSignature(signature, await request.text(), publicKey);
  }

  // Получаем данные
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return createErrorResponse('Invalid JSON', 400);
  }

  console.log(`Monobank webhook [${eventType}]:`, JSON.stringify(data));

  // Обрабатываем статус платежа
  const { invoiceId, status, amount, ccy, reference, email } = data;

  if (status === 'success') {
    // Платеж успешен

    // Определяем тип подписки по сумме (в копейках)
    let subscription_type = 'basic';
    let period_months = 3;

    // Примерные суммы в гривнах * 100 (копейки)
    if (amount >= 500000) {
      // 5000 грн и выше
      subscription_type = 'vip';
    } else if (amount >= 200000) {
      // 2000 грн и выше
      subscription_type = 'standard';
    }

    // Генерируем токен
    const courseId = 'course1'; // Можно передавать в reference
    const token = generateSimpleToken(email || reference, courseId);

    // Сохраняем платеж
    if (env.KV) {
      const payment = {
        payment_id: invoiceId,
        email: email || reference,
        amount: amount / 100, // Конвертируем в гривны
        currency: ccy,
        subscription_type,
        period_months,
        token,
        created_at: new Date().toISOString(),
        source: 'monobank'
      };

      await env.KV.put(`payment:mono:${invoiceId}`, JSON.stringify(payment));

      // TODO: Найти email пользователя по reference и активировать подписку
      // TODO: Отправить уведомление через SendPulse API
    }

    return createJsonResponse({
      status: 'success',
      message: 'Payment confirmed',
      invoiceId
    });
  } else if (status === 'failure' || status === 'reversed') {
    // Платеж отклонен или отменен
    console.error(`Monobank payment failed: ${invoiceId}, status: ${status}`);

    return createJsonResponse({
      status: 'success',
      message: 'Payment failure acknowledged',
      invoiceId
    });
  }

  // Другие статусы (processing, hold, etc)
  return createJsonResponse({
    status: 'success',
    message: `Payment status ${status} received`,
    invoiceId
  });
}

```

---

## API Services (3)

### `workers/api/src/services/auth.js` (1.02 KB)

```javascript
// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Проверка через SendPulse API
  // Пока простая проверка для демо
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // Проверяем что токен для правильного курса
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Получить email из SendPulse по хешу
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}

```

---

### `workers/api/src/services/content.js` (1.61 KB)

```javascript
// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = content//;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = content//;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Группируем уроки по неделям
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}

```

---

### `workers/api/src/services/sendpulse.js` (0.8 KB)

```javascript
// services/sendpulse.js
const SENDPULSE_API_URL = 'https://api.sendpulse.com';

export async function verifyPurchaseToken(token) {
  // TODO: Реальная проверка через SendPulse API
  console.log('Verifying token with SendPulse:', token);
  
  return {
    valid: true,
    email: 'user@example.com',
    subscription_type: 'standard'
  };
}

export async function updateUserProgress(email, courseId, lessonId) {
  // TODO: Обновить прогресс в SendPulse
  console.log(Updating progress for : /);
  
  return { success: true };
}

export async function getUserSubscription(email) {
  // TODO: Получить данные подписки из SendPulse
  return {
    email,
    active: true,
    type: 'standard',
    expires: '2025-12-31',
    courses: ['course1']
  };
}

```

---

## API Utils (3)

### `workers/api/src/utils/cors.js` (0.74 KB)

```javascript
// utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Range',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
};

export function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function createCorsResponse(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      ...init.headers
    }
  });
}

```

---

### `workers/api/src/utils/errors.js` (0.79 KB)

```javascript
// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
export function createBadRequestResponse(message, details = null) {
  return createErrorResponse(message, 400, details);
}

```

---

### `workers/api/src/utils/token.js` (5.07 KB)

```javascript
// utils/token.js
import { PUBLIC_COURSES, PUBLIC_LESSONS } from '../config/constants.js';
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

/**
 * Генерирует токен доступа на основе email и курса
 * @param {string} email - Email пользователя
 * @param {string|null} courseId - ID курса (опционально)
 * @returns {string} Сгенерированный токен
 */
export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

/**
 * Проверяет формат токена
 * @param {string} token - Токен для проверки
 * @returns {boolean} true если токен валидный
 */
export function validateTokenFormat(token) {
  // Проверяем тестовые токены
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }

  // Проверяем формат обычных токенов
  return token && token.length >= 3 && token.includes('_');
}

/**
 * Парсит информацию из токена
 * @param {string} token - Токен для парсинга
 * @returns {Object} Объект с информацией о токене
 * @returns {boolean} returns.isTestToken - Является ли токен тестовым
 * @returns {Object} returns.permissions - Права доступа (для тестовых токенов)
 * @returns {string} returns.emailHash - Хеш email (для обычных токенов)
 * @returns {string|null} returns.courseId - ID курса (для обычных токенов)
 * @returns {string} returns.timestamp - Временная метка (для обычных токенов)
 */
export function parseTokenInfo(token) {
  // Для тестовых токенов возвращаем их права
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }

  // Для обычных токенов парсим структуру
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

/**
 * Проверяет доступ токена к курсу и функции
 * @param {string} token - Токен доступа
 * @param {string} courseId - ID курса (например, 'course01')
 * @param {string} [feature='player'] - Функция для проверки ('player', 'archive', 'download')
 * @returns {{allowed: boolean, reason?: string, permissions?: Object}} Результат проверки
 */
export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);

  // Для тестовых токенов проверяем права
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;

    // Проверяем не истек ли токен
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }

    // SuperUser имеет доступ ко всему
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }

    // Проверяем доступ к курсу
    const hasCourseAccess =
      perms.courses.includes('*') || perms.courses.includes(courseId);

    // Проверяем доступ к функции
    const hasFeatureAccess = perms.features.includes(feature);

    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }

    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }

    return { allowed: true, permissions: perms };
  }

  // Для обычных токенов - простая проверка
  // TODO: интеграция с SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}

/**
 * Генерирует простой токен без привязки к email
 * @returns {string} Случайный токен
 */
export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Проверяет публичный доступ к курсу или уроку
 * @param {string} courseId - ID курса
 * @param {string|null} [lessonId=null] - ID урока (опционально)
 * @returns {boolean} true если доступ публичный
 */
export function isPublicAccess(courseId, lessonId = null) {
  // Проверяем, является ли курс публичным
  if (PUBLIC_COURSES.includes(courseId)) {
    // Если указан урок, проверяем его в списке публичных
    if (lessonId) {
      const publicLessons = PUBLIC_LESSONS[courseId] || [];
      return publicLessons.includes(lessonId);
    }
    return true;
  }
  return false;
}

```

---

## Documentation (30)

### `chats/chat_claude-opus_02_07_2025.md` (201.88 KB)

```markdown
РњС‹ СЃ Sonnet РЅР°С‡Р°Р»Рё РґРµР»Р°С‚СЊ СЂРµС„Р°РєС‚РѕСЂРёРЅРі РїСЂРѕРµРєС‚Р°.
РћР±СЂР°Р±РѕС‚С‡РёРєРё.md РњРѕРґСѓР»Рё.md
Р’ РїР°РїРєРµ РїСЂРѕРµРєС‚Р° РїСЂРµРґС‹РґСѓС‰Р°СЏ РІРµСЂСЃРёСЏ РІСЃРµС… С„Р°Р№Р»РѕРІ.
РџРѕСЃРјРѕС‚СЂРё РЅРѕРІС‹Р№ README.md
РћРЅ РЅР°РїРёСЃР°Р», С‡С‚Рѕ СЃРµСЂРІРёСЃС‹ Рё С€Р°Р±Р»РѕРЅС‹ РЅРµ СЃРѕР·РґР°РЅС‹, РЅРѕРІР°СЏ РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РЅРµ РїСЂРѕС‚РµСЃС‚РёСЂРѕРІР°РЅР°.РЇ РёР·СѓС‡Сѓ С‚РµРєСѓС‰СѓСЋ СЃРёС‚СѓР°С†РёСЋ СЃ СЂРµС„Р°РєС‚РѕСЂРёРЅРіРѕРј РїСЂРѕРµРєС‚Р°. Р”Р°Р№С‚Рµ РјРЅРµ РїСЂРѕРІРµСЂРёС‚СЊ РЅРѕРІС‹Рµ С„Р°Р№Р»С‹ Рё СЃС‚СЂСѓРєС‚СѓСЂСѓ.Searched project for вЂњREADME.md СЂРµС„Р°РєС‚РѕСЂРёРЅРі РЅРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°вЂќ1 resultchat_claude-sonnet_01_07_2026.md10 relevant sectionstextР”Р°Р№С‚Рµ РјРЅРµ РЅР°Р№С‚Рё Р±РѕР»РµРµ РїРѕРґСЂРѕР±РЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРµ РјРѕРґСѓР»РµР№.Searched project for вЂњhandlers utils config РјРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° worker-new.jsвЂќ3 resultschat_claude-sonnet_01_07_2026.md7 relevant sectionstextREADME.mdtextРњРѕРґСѓР»Рё.md2 relevant sectionstextРџРѕР·РІРѕР»СЊС‚Рµ РјРЅРµ РїСЂРѕРІРµСЂРёС‚СЊ С„Р°Р№Р»С‹ "РћР±СЂР°Р±РѕС‚С‡РёРєРё.md" Рё "РњРѕРґСѓР»Рё.md" РІ РїСЂРѕРµРєС‚Рµ:Searched project for вЂњРћР±СЂР°Р±РѕС‚С‡РёРєРё.mdвЂќ3 resultschat_claude-sonnet_01_07_2026.md2 relevant sectionstextРћР±СЂР°Р±РѕС‚С‡РёРєРё.md2 relevant sectionstextРњРѕРґСѓР»Рё.mdtextSearched project for вЂњРњРѕРґСѓР»Рё.mdвЂќ2 resultsРњРѕРґСѓР»Рё.md3 relevant sectionstextchat_claude-sonnet_01_07_2026.md2 relevant sectionstextРћС‚Р»РёС‡РЅРѕ! РЇ РІРёР¶Сѓ, С‡С‚Рѕ РІС‹ СЃ Sonnet РЅР°С‡Р°Р»Рё СЂРµС„Р°РєС‚РѕСЂРёРЅРі РїСЂРѕРµРєС‚Р°. РР·СѓС‡РёР» РІСЃРµ С„Р°Р№Р»С‹, РєРѕС‚РѕСЂС‹Рµ РІС‹ Р·Р°РіСЂСѓР·РёР»Рё. Р’РёР¶Сѓ РїРѕР»РЅСѓСЋ РєР°СЂС‚РёРЅСѓ:
рџ“Љ РђРЅР°Р»РёР· С‚РµРєСѓС‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ
вњ… Р§С‚Рѕ СѓР¶Рµ СЃРґРµР»Р°РЅРѕ СЃ Sonnet:

РЎРѕР·РґР°РЅР° РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РІ src/:

config/ - РєРѕРЅС„РёРіСѓСЂР°С†РёРё (courses.js, constants.js)
handlers/ - РѕР±СЂР°Р±РѕС‚С‡РёРєРё РґР»СЏ РєР°Р¶РґРѕРіРѕ endpoint
utils/ - СѓС‚РёР»РёС‚С‹ (CORS, errors, token)
services/ Рё templates/ - СЃРѕР·РґР°РЅС‹ РїР°РїРєРё, РЅРѕ С„Р°Р№Р»С‹ РµС‰Рµ РЅРµ РґРѕР±Р°РІР»РµРЅС‹


РЎРѕР·РґР°РЅ РЅРѕРІС‹Р№ worker-new.js - С‡РёСЃС‚С‹Р№ СЂРѕСѓС‚РµСЂ РЅР° 30 СЃС‚СЂРѕРє РІРјРµСЃС‚Рѕ 500+
Р Р°Р·Р±РёС‚Р° Р»РѕРіРёРєР° РїРѕ РјРѕРґСѓР»СЏРј:

РљР°Р¶РґС‹Р№ endpoint РёРјРµРµС‚ СЃРІРѕР№ handler
РћР±С‰РёРµ С„СѓРЅРєС†РёРё РІС‹РЅРµСЃРµРЅС‹ РІ utils
Р”Р°РЅРЅС‹Рµ РєСѓСЂСЃРѕРІ РІ РѕС‚РґРµР»СЊРЅРѕР№ РєРѕРЅС„РёРіСѓСЂР°С†РёРё



вќЊ Р§С‚Рѕ РµС‰Рµ РЅРµ СЃРґРµР»Р°РЅРѕ:

Services РЅРµ СЃРѕР·РґР°РЅС‹:

auth.js - РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ Рё SendPulse API
sendpulse.js - РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
content.js - Р·Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РёР· R2


Templates РЅРµ СЃРѕР·РґР°РЅС‹:

HTML С€Р°Р±Р»РѕРЅС‹ РґР»СЏ РїР»РµРµСЂРѕРІ РІС‹РЅРµСЃРµРЅС‹ РІ РѕС‚РґРµР»СЊРЅС‹Рµ С„Р°Р№Р»С‹
Р‘Р°Р·РѕРІС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹ РґР»СЏ РїРµСЂРµРёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ


РќРµ РїСЂРѕС‚РµСЃС‚РёСЂРѕРІР°РЅР° РЅРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°:

worker-new.js РµС‰Рµ РЅРµ Р·Р°РјРµРЅРёР» СЃС‚Р°СЂС‹Р№ worker.js
РќСѓР¶РЅРѕ РїСЂРѕРІРµСЂРёС‚СЊ С‡С‚Рѕ РІСЃРµ РёРјРїРѕСЂС‚С‹ СЂР°Р±РѕС‚Р°СЋС‚



рџЋЇ РџР»Р°РЅ Р·Р°РІРµСЂС€РµРЅРёСЏ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°:
РЁР°Рі 1: РЎРѕР·РґР°С‚СЊ РЅРµРґРѕСЃС‚Р°СЋС‰РёРµ СЃРµСЂРІРёСЃС‹
powershell# РЎРєСЂРёРїС‚ СЃРѕР·РґР°РЅРёСЏ СЃРµСЂРІРёСЃРѕРІ
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# services/auth.js
@"
// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  // РџРѕРєР° РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР° РґР»СЏ РґРµРјРѕ
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ С‚РѕРєРµРЅ РґР»СЏ РїСЂР°РІРёР»СЊРЅРѕРіРѕ РєСѓСЂСЃР°
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџРѕР»СѓС‡РёС‚СЊ email РёР· SendPulse РїРѕ С…РµС€Сѓ
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}
"@ | Out-File -FilePath "src\services\auth.js" -Encoding UTF8

# services/sendpulse.js
@"
// services/sendpulse.js
const SENDPULSE_API_URL = 'https://api.sendpulse.com';

export async function verifyPurchaseToken(token) {
  // TODO: Р РµР°Р»СЊРЅР°СЏ РїСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  console.log('Verifying token with SendPulse:', token);
  
  return {
    valid: true,
    email: 'user@example.com',
    subscription_type: 'standard'
  };
}

export async function updateUserProgress(email, courseId, lessonId) {
  // TODO: РћР±РЅРѕРІРёС‚СЊ РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
  console.log(`Updating progress for ${email}: ${courseId}/${lessonId}`);
  
  return { success: true };
}

export async function getUserSubscription(email) {
  // TODO: РџРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё РёР· SendPulse
  return {
    email,
    active: true,
    type: 'standard',
    expires: '2025-12-31',
    courses: ['course1']
  };
}
"@ | Out-File -FilePath "src\services\sendpulse.js" -Encoding UTF8

# services/content.js
@"
// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = `content/${courseId}/${fileName}`;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = `content/${courseId}/${fileName}`;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Р“СЂСѓРїРїРёСЂСѓРµРј СѓСЂРѕРєРё РїРѕ РЅРµРґРµР»СЏРј
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}
"@ | Out-File -FilePath "src\services\content.js" -Encoding UTF8

Write-Host "вњ… Р’СЃРµ СЃРµСЂРІРёСЃС‹ СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
РЁР°Рі 2: РЎРѕР·РґР°С‚СЊ HTML С€Р°Р±Р»РѕРЅС‹
powershell# templates/base.js
@"
// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    ${content}
    ${scripts}
</body>
</html>`;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return `
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster="${posterUrl}"
            id="lesson-video"
        >
            <source src="${videoUrl}" type="video/mp4">
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ.
        </video>
    </div>
  `;
}
"@ | Out-File -FilePath "src\templates\base.js" -Encoding UTF8

Write-Host "вњ… РЁР°Р±Р»РѕРЅС‹ СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
РЁР°Рі 3: РћР±РЅРѕРІРёС‚СЊ package.json РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
powershell# РћР±РЅРѕРІР»СЏРµРј package.json РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРѕР№
$packageJson = Get-Content "package.json" | ConvertFrom-Json
$packageJson.main = "src/worker-new.js"
$packageJson | ConvertTo-Json -Depth 10 | Out-File "package.json" -Encoding UTF8

Write-Host "вњ… package.json РѕР±РЅРѕРІР»РµРЅ!" -ForegroundColor Green
РЁР°Рі 4: РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ
powershell# Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅРѕРµ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ
Write-Host "рџ§Є РўРµСЃС‚РёСЂСѓРµРј РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ..." -ForegroundColor Cyan
npm run dev
рџљЂ РЎР»РµРґСѓСЋС‰РёРµ РґРµР№СЃС‚РІРёСЏ:

Р—Р°РїСѓСЃС‚РёС‚СЊ СЃРєСЂРёРїС‚С‹ РІС‹С€Рµ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ РЅРµРґРѕСЃС‚Р°СЋС‰РёС… С„Р°Р№Р»РѕРІ
РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ Р»РѕРєР°Р»СЊРЅРѕ СЃ npm run dev
Р•СЃР»Рё РІСЃС‘ СЂР°Р±РѕС‚Р°РµС‚ - Р·Р°РјРµРЅРёС‚СЊ worker.js РЅР° worker-new.js
РЎРґРµР»Р°С‚СЊ commit СЃ РѕРїРёСЃР°РЅРёРµРј СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°
Deploy РЅР° dev РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ РІ РѕР±Р»Р°РєРµ

Р“РѕС‚РѕРІС‹ РїСЂРѕРґРѕР»Р¶РёС‚СЊ? РќР°С‡РЅРµРј СЃ СЃРѕР·РґР°РЅРёСЏ СЃРµСЂРІРёСЃРѕРІ? рџЋЇР’{"status":"success","message":"MasterMarat API РґР»СЏ MVP РєСѓСЂСЃР° \"РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ\"","worker_url":"http://api.mastermarat.com","r2_connected":"Yes","endpoints":{"GET /":"Р­С‚Р° СЃС‚СЂР°РЅРёС†Р°","GET /player/{courseId}/{lessonId}?token=Y":"HTML РІРёРґРµРѕРїР»РµРµСЂ","GET /thumbnails/{courseId}/{filename}":"РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2","GET /video/{courseId}/{filename}?token=xxx":"Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming","POST /webhook/purchase":"Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ"},"test_links":{"player":"http://api.mastermarat.com/player/course1/week1_lesson1?token=demo123","thumbnail":"http://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg","video":"http://api.mastermarat.com/video/course1/week1_lesson1.mp4?token=demo123"},"course_structure":{"course1":{"title":"РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ","lessons":{"week1_lesson1":{"title":"Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°","video_file":"test_video.mp4","thumbnail_file":"course1_week1_lesson1.jpg"},"week1_lesson2":{"title":"РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё","video_file":"test_video.mp4","thumbnail_file":"course1_week1_lesson2.jpg"},"week2_lesson1":{"title":"Р Р°Р±РѕС‚Р° СЃ РїРѕР·РІРѕРЅРѕС‡РЅРёРєРѕРј","video_file":"test_video.mp4","thumbnail_file":"course1_week2_lesson1.jpg"},"week2_lesson2":{"title":"РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё","video_file":"test_video.mp4","thumbnail_file":"course1_week2_lesson2.jpg"},"week3_lesson1":{"title":"РўРµС…РЅРёРєРё СЃР°РјРѕРјР°СЃСЃР°Р¶Р°","video_file":"test_video.mp4","thumbnail_file":"course1_week3_lesson1.jpg"},"week3_lesson2":{"title":"РЎРЅСЏС‚РёРµ РјС‹С€РµС‡РЅС‹С… Р±Р»РѕРєРѕРІ","video_file":"test_video.mp4","thumbnail_file":"course1_week3_lesson2.jpg"},"week4_lesson1":{"title":"РРЅС‚РµРіСЂР°С†РёСЏ РґРІРёР¶РµРЅРёР№","video_file":"test_video.mp4","thumbnail_file":"course1_week4_lesson1.jpg"},"week4_lesson2":{"title":"Р•Р¶РµРґРЅРµРІРЅР°СЏ РїСЂР°РєС‚РёРєР°","video_file":"test_video.mp4","thumbnail_file":"course1_week4_lesson2.jpg"}}}},"timestamp":"2025-07-01T11:31:08.054Z"}

вЋ” Starting local server...
[wrangler:info] Ready on http://127.0.0.1:8787
[wrangler:info] GET / 200 OK (30ms)
[wrangler:info] GET /favicon.ico 200 OK (5ms)Р’РџСЂРµРґР¶Рµ С‡РµРј РїСЂРѕРґРѕР»Р¶РёРј, РЅСѓР¶РЅРѕ СЃРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РІРµСЂРѕСЏС‚РЅРѕ, SuperUser token РґР»СЏ СѓРґРѕР±СЃС‚РІР° С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ С„СѓРЅРєС†РёРѕРЅР°Р»Р°рџ”ђ РЎРѕР·РґР°РЅРёРµ SuperUser С‚РѕРєРµРЅР° РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
РћС‚Р»РёС‡РЅР°СЏ РёРґРµСЏ! Р”Р°РІР°Р№С‚Рµ СЃРѕР·РґР°РґРёРј СЃРёСЃС‚РµРјСѓ С‚РѕРєРµРЅРѕРІ СЃ СЂР°Р·РЅС‹РјРё СѓСЂРѕРІРЅСЏРјРё РґРѕСЃС‚СѓРїР° РґР»СЏ СѓРґРѕР±РЅРѕРіРѕ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ.
рџ“ќ РЎРєСЂРёРїС‚ РґРѕР±Р°РІР»РµРЅРёСЏ SuperUser С‚РѕРєРµРЅРѕРІ
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РћР±РЅРѕРІР»СЏРµРј config/constants.js СЃ С‚РѕРєРµРЅР°РјРё РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
@"
// config/constants.js
export const API_VERSION = '1.0.0';

// РўРѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
export const TEST_TOKENS = {
  // SuperUser - РїРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
  SUPER_USER: 'superuser_mastermarat_2025',
  
  // РўРѕРєРµРЅС‹ РїРѕ С‚РёРїР°Рј РїРѕРґРїРёСЃРєРё
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',
  
  // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ С‚РѕРєРµРЅС‹
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// РџСЂР°РІР° РґРѕСЃС‚СѓРїР° РїРѕ С‚РёРїР°Рј С‚РѕРєРµРЅРѕРІ
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: ['course1', 'course2', 'course3'],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course1'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};
"@ | Out-File -FilePath "src\config\constants.js" -Encoding UTF8

Write-Host "вњ… РљРѕРЅСЃС‚Р°РЅС‚С‹ СЃ С‚РѕРєРµРЅР°РјРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РћР±РЅРѕРІР»СЏРµРј utils/token.js РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РЅРѕРІС‹РјРё С‚РѕРєРµРЅР°РјРё
@"
// utils/token.js
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕРІРµСЂСЏРµРј С‚РµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј С„РѕСЂРјР°С‚ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РІРѕР·РІСЂР°С‰Р°РµРј РёС… РїСЂР°РІР°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ РїР°СЂСЃРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);
  
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РїСЂРѕРІРµСЂСЏРµРј РїСЂР°РІР°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;
    
    // РџСЂРѕРІРµСЂСЏРµРј РЅРµ РёСЃС‚РµРє Р»Рё С‚РѕРєРµРЅ
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }
    
    // SuperUser РёРјРµРµС‚ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє РєСѓСЂСЃСѓ
    const hasCourseAccess = perms.courses.includes('*') || 
                           perms.courses.includes(courseId);
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє С„СѓРЅРєС†РёРё
    const hasFeatureAccess = perms.features.includes(feature);
    
    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }
    
    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }
    
    return { allowed: true, permissions: perms };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ - РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР°
  // TODO: РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
"@ | Out-File -FilePath "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… РћР±РЅРѕРІР»РµРЅР° Р»РѕРіРёРєР° СЂР°Р±РѕС‚С‹ СЃ С‚РѕРєРµРЅР°РјРё!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј С‚РµСЃС‚РѕРІСѓСЋ СЃС‚СЂР°РЅРёС†Сѓ РґР»СЏ РїСЂРѕРІРµСЂРєРё С‚РѕРєРµРЅРѕРІ
@"
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // РўРµСЃС‚РёСЂСѓРµРј РІСЃРµ С‚РѕРєРµРЅС‹
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1>рџ”ђ MasterMarat Token Testing</h1>
    <p>РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рё С‚РѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ СЂР°Р·РЅС‹С… СѓСЂРѕРІРЅРµР№ РґРѕСЃС‚СѓРїР°:</p>
    
    ${Object.entries(testResults).map(([name, result]) => `
        <div class="token-box">
            <h3>${name}</h3>
            <p>Token: <span class="token">${result.token}</span></p>
            <p>Course1 Player: <span class="${result.course1_player.allowed ? 'allowed' : 'denied'}">
                ${result.course1_player.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course1_player.reason}
            </span></p>
            <p>Course1 Archive: <span class="${result.course1_archive.allowed ? 'allowed' : 'denied'}">
                ${result.course1_archive.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course1_archive.reason}
            </span></p>
            <p>Course2 Access: <span class="${result.course2_access.allowed ? 'allowed' : 'denied'}">
                ${result.course2_access.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course2_access.reason}
            </span></p>
            <p>Admin Access: <span class="${result.admin_access.allowed ? 'allowed' : 'denied'}">
                ${result.admin_access.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.admin_access.reason}
            </span></p>
        </div>
    `).join('')}
    
    <div class="token-box">
        <h3>рџ§Є Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.SUPER_USER}">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=${TEST_TOKENS.SUPER_USER}">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.DEMO_USER}">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.EXPIRED_USER}">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}
"@ | Out-File -FilePath "src\handlers\test.js" -Encoding UTF8

Write-Host "вњ… РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃРѕР·РґР°РЅР°!" -ForegroundColor Green

# РћР±РЅРѕРІР»СЏРµРј СЂРѕСѓС‚РµСЂ РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†С‹
Write-Host "" -ForegroundColor White
Write-Host "рџ“ќ Р”РѕР±Р°РІСЊС‚Рµ РІ worker-new.js РЅРѕРІС‹Р№ СЂРѕСѓС‚:" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "import { handleTestPage } from './handlers/test.js';" -ForegroundColor Cyan
Write-Host "" -ForegroundColor White
Write-Host "// Р’ СЃРµРєС†РёРё СЂРѕСѓС‚РёРЅРіР° РґРѕР±Р°РІСЊС‚Рµ:" -ForegroundColor Gray
Write-Host "if (url.pathname === '/test') {" -ForegroundColor Cyan
Write-Host "  return await handleTestPage(request, env, ctx);" -ForegroundColor Cyan
Write-Host "}" -ForegroundColor Cyan
рџЋЇ РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ С‚РѕРєРµРЅРѕРІ
SuperUser С‚РѕРєРµРЅ РґР»СЏ РїРѕР»РЅРѕРіРѕ РґРѕСЃС‚СѓРїР°:
superuser_mastermarat_2025
РџСЂРёРјРµСЂС‹ С‚РµСЃС‚РѕРІС‹С… URL:
bash# SuperUser - РІРёРґРёС‚ РІСЃС‘
http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025
http://localhost:8787/archive/course1?token=superuser_mastermarat_2025

# VIP РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ - РґРѕСЃС‚СѓРї Рє РЅРµСЃРєРѕР»СЊРєРёРј РєСѓСЂСЃР°Рј
http://localhost:8787/player/course1/week1_lesson1?token=vip_test_token_2025

# РћР±С‹С‡РЅС‹Р№ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ - С‚РѕР»СЊРєРѕ player
http://localhost:8787/player/course1/week1_lesson1?token=standard_test_token_2025

# Р”РµРјРѕ С‚РѕРєРµРЅ - РѕРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї
http://localhost:8787/player/course1/week1_lesson1?token=demo123

# РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃРѕ РІСЃРµРјРё С‚РѕРєРµРЅР°РјРё
http://localhost:8787/test
рџ”’ Р›РѕРіРёРєР° РїСЂРѕРІРµСЂРєРё РґРѕСЃС‚СѓРїР°
javascript// Р’ Р»СЋР±РѕРј handler РјРѕР¶РЅРѕ РїСЂРѕРІРµСЂРёС‚СЊ РґРѕСЃС‚СѓРї:
const accessCheck = hasAccess(token, courseId, 'player');
if (!accessCheck.allowed) {
  return createUnauthorizedResponse(accessCheck.reason);
}

// Р”Р»СЏ SuperUser РјРѕР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ Р°РґРјРёРЅ-С„СѓРЅРєС†РёРё:
if (accessCheck.permissions.type === 'superuser') {
  // РџРѕРєР°Р·Р°С‚СЊ РєРЅРѕРїРєРё Р°РґРјРёРЅР°, СЃС‚Р°С‚РёСЃС‚РёРєСѓ Рё С‚.Рґ.
}
РўРµРїРµСЂСЊ Сѓ РІР°СЃ РµСЃС‚СЊ РїРѕР»РЅРѕС†РµРЅРЅР°СЏ СЃРёСЃС‚РµРјР° С‚РѕРєРµРЅРѕРІ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ! РҐРѕС‚РёС‚Рµ Р·Р°РїСѓСЃС‚РёС‚СЊ Рё РїСЂРѕРІРµСЂРёС‚СЊ? рџљЂР’РґР°РІР°Р№ РїРѕРїСЂРѕР±СѓРµРј Р·Р°РїСѓСЃС‚РёС‚СЊрџљЂ Р—Р°РїСѓСЃРєР°РµРј Рё С‚РµСЃС‚РёСЂСѓРµРј РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ
РЁР°Рі 1: РћР±РЅРѕРІР»СЏРµРј worker-new.js РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†С‹
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РћР±РЅРѕРІР»СЏРµРј worker-new.js СЃ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†РµР№
@"
// worker-new.js - С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// РРјРїРѕСЂС‚РёСЂСѓРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Р РѕСѓС‚РёРЅРі Р·Р°РїСЂРѕСЃРѕРІ
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // РќРћР’Р«Р™: РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р°
      if (url.pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 РґР»СЏ РЅРµРёР·РІРµСЃС‚РЅС‹С… РјР°СЂС€СЂСѓС‚РѕРІ
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};
"@ | Out-File -FilePath "src\worker-new.js" -Encoding UTF8

Write-Host "вњ… worker-new.js РѕР±РЅРѕРІР»РµРЅ СЃ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†РµР№!" -ForegroundColor Green
РЁР°Рі 2: Р’СЂРµРјРµРЅРЅРѕ РѕР±РЅРѕРІР»СЏРµРј wrangler.toml РґР»СЏ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹
powershell# РћР±РЅРѕРІР»СЏРµРј wrangler.toml С‡С‚РѕР±С‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РЅРѕРІС‹Р№ worker
$wranglerContent = Get-Content "wrangler.toml" -Raw
$wranglerContent = $wranglerContent -replace 'main = "src/worker\.js"', 'main = "src/worker-new.js"'
$wranglerContent | Out-File "wrangler.toml" -Encoding UTF8

Write-Host "вњ… wrangler.toml РѕР±РЅРѕРІР»РµРЅ РґР»СЏ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹!" -ForegroundColor Green
РЁР°Рі 3: Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅС‹Р№ СЃРµСЂРІРµСЂ
powershellWrite-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅС‹Р№ СЃРµСЂРІРµСЂ..." -ForegroundColor Cyan
Write-Host "" -ForegroundColor White

# РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РїСЂРµРґС‹РґСѓС‰РёР№ РїСЂРѕС†РµСЃСЃ РµСЃР»Рё РѕРЅ Р·Р°РїСѓС‰РµРЅ
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {$_.MainWindowTitle -like "*wrangler*"} | Stop-Process -Force

# Р—Р°РїСѓСЃРєР°РµРј РЅРѕРІС‹Р№
npm run dev
рџ§Є Р§С‚Рѕ С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РїРѕСЃР»Рµ Р·Р°РїСѓСЃРєР°:
1. Р“Р»Р°РІРЅР°СЏ СЃС‚СЂР°РЅРёС†Р° API (РґРѕР»Р¶РЅР° СЂР°Р±РѕС‚Р°С‚СЊ):
http://localhost:8787/
2. РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё:
http://localhost:8787/test
3. РџР»РµРµСЂ СЃ SuperUser С‚РѕРєРµРЅРѕРј:
http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025
4. РђСЂС…РёРІ СЃ SuperUser С‚РѕРєРµРЅРѕРј:
http://localhost:8787/archive/course1?token=superuser_mastermarat_2025
рџ”Ќ Р•СЃР»Рё РІРѕР·РЅРёРєРЅСѓС‚ РѕС€РёР±РєРё:
РћС€РёР±РєР° РёРјРїРѕСЂС‚РѕРІ?
powershell# РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ РІСЃРµ С„Р°Р№Р»С‹ СЃРѕР·РґР°РЅС‹
Get-ChildItem -Path "src" -Recurse | Select-Object FullName
РћС€РёР±РєР° СЃРёРЅС‚Р°РєСЃРёСЃР°?
powershell# РџСЂРѕРІРµСЂСЏРµРј Р»РёРЅС‚РµСЂРѕРј
npm run lint
РћС‚РєР°С‚РёС‚СЊСЃСЏ РЅР° СЃС‚Р°СЂСѓСЋ РІРµСЂСЃРёСЋ?
powershell# Р’РµСЂРЅСѓС‚СЊ СЃС‚Р°СЂС‹Р№ worker РІ wrangler.toml
$wranglerContent = Get-Content "wrangler.toml" -Raw
$wranglerContent = $wranglerContent -replace 'main = "src/worker-new\.js"', 'main = "src/worker.js"'
$wranglerContent | Out-File "wrangler.toml" -Encoding UTF8
Р—Р°РїСѓСЃРєР°Р№ РїРµСЂРІС‹Р№ СЃРєСЂРёРїС‚ Рё РґР°РІР°Р№ РїРѕСЃРјРѕС‚СЂРёРј С‡С‚Рѕ РїРѕР»СѓС‡РёС‚СЃСЏ! рџљЂ
Р•СЃР»Рё РІСЃРµ Р·Р°СЂР°Р±РѕС‚Р°РµС‚, СѓРІРёРґРёС€СЊ РІ РєРѕРЅСЃРѕР»Рё:
вЋ” Starting local server...
[wrangler:info] Ready on http://127.0.0.1:8787
Р—Р°С‚РµРј РѕС‚РєСЂРѕР№ http://localhost:8787/test РґР»СЏ РїСЂРѕРІРµСЂРєРё С‚РѕРєРµРЅРѕРІ! рџ”ђР’npm run dev
> mastermarat-api@1.0.0 dev
> wrangler dev
 в›…пёЏ wrangler 4.22.0
в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
X [ERROR] Unknown character "65279"
    C:\Projects\mastermaratcom\mastermarat-project\workers\api\wrangler.toml:1:0:
      1 в”‚ # Production Worker (default environment)
        в•µ ^
  If you think this is a bug, please open an issue at:
  https://github.com/cloudflare/workers-sdk/issues/new/choose
npm error Lifecycle script dev failed with error:
npm error code 1
npm error path C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error workspace mastermarat-api@1.0.0
npm error location C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c wrangler devрџђ› РћС€РёР±РєР° СЃ BOM (Byte Order Mark) РІ wrangler.toml
РџСЂРѕР±Р»РµРјР° РІ С‚РѕРј, С‡С‚Рѕ С„Р°Р№Р» СЃРѕС…СЂР°РЅРёР»СЃСЏ СЃ BOM СЃРёРјРІРѕР»РѕРј (РЅРµРІРёРґРёРјС‹Р№ СЃРёРјРІРѕР» Unicode). Р­С‚Рѕ С‡Р°СЃС‚Р°СЏ РїСЂРѕР±Р»РµРјР° РІ Windows.
рџ”§ РСЃРїСЂР°РІР»СЏРµРј wrangler.toml:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# Р§РёС‚Р°РµРј СЃРѕРґРµСЂР¶РёРјРѕРµ Рё СЃРѕС…СЂР°РЅСЏРµРј Р±РµР· BOM
$content = Get-Content "wrangler.toml" -Raw
[System.IO.File]::WriteAllText("$PWD\wrangler.toml", $content)

Write-Host "вњ… wrangler.toml РёСЃРїСЂР°РІР»РµРЅ (СѓР±СЂР°РЅ BOM)!" -ForegroundColor Green

# РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ BOM СѓРґР°Р»РµРЅ
$bytes = [System.IO.File]::ReadAllBytes("$PWD\wrangler.toml")
if ($bytes[0] -eq 239 -and $bytes[1] -eq 187 -and $bytes[2] -eq 191) {
    Write-Host "вќЊ BOM РІСЃРµ РµС‰Рµ РїСЂРёСЃСѓС‚СЃС‚РІСѓРµС‚!" -ForegroundColor Red
} else {
    Write-Host "вњ… BOM СѓСЃРїРµС€РЅРѕ СѓРґР°Р»РµРЅ!" -ForegroundColor Green
}

# РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ СЃРїРѕСЃРѕР± - РїРµСЂРµСЃРѕР·РґР°С‚СЊ С„Р°Р№Р» РїРѕР»РЅРѕСЃС‚СЊСЋ
@'
name = "mastermarat-api"
main = "src/worker-new.js"
compatibility_date = "2024-07-01"

# R2 bucket binding
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"

# Production environment
[env.production]
name = "mastermarat-api"
route = { pattern = "api.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.production.vars]
ENVIRONMENT = "production"

# Development environment
[env.dev]
name = "mastermarat-api-dev"
route = { pattern = "api-dev.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.dev.vars]
ENVIRONMENT = "development"
'@ | Out-File -FilePath "wrangler.toml" -Encoding ASCII

Write-Host "вњ… wrangler.toml РїРµСЂРµСЃРѕР·РґР°РЅ СЃ ASCII РєРѕРґРёСЂРѕРІРєРѕР№!" -ForegroundColor Green
рџљЂ РўРµРїРµСЂСЊ Р·Р°РїСѓСЃРєР°РµРј СЃРЅРѕРІР°:
powershellWrite-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј dev СЃРµСЂРІРµСЂ..." -ForegroundColor Cyan
npm run dev
рџ“ќ Р•СЃР»Рё РІСЃРµ РµС‰Рµ РѕС€РёР±РєР°, РїСЂРѕРІРµСЂРёРј РІСЃРµ С„Р°Р№Р»С‹ РЅР° BOM:
powershell# Р¤СѓРЅРєС†РёСЏ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ BOM РёР· РІСЃРµС… С„Р°Р№Р»РѕРІ
function Remove-BOMFromFiles {
    param($Path)
    
    Get-ChildItem -Path $Path -Include "*.js","*.json","*.toml" -Recurse | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content) {
            [System.IO.File]::WriteAllText($_.FullName, $content)
            Write-Host "РћР±СЂР°Р±РѕС‚Р°РЅ: $($_.Name)" -ForegroundColor Gray
        }
    }
}

# РЈРґР°Р»СЏРµРј BOM РёР· РІСЃРµС… С„Р°Р№Р»РѕРІ РїСЂРѕРµРєС‚Р°
Remove-BOMFromFiles -Path "src"
Write-Host "вњ… Р’СЃРµ С„Р°Р№Р»С‹ РѕР±СЂР°Р±РѕС‚Р°РЅС‹!" -ForegroundColor Green
РџРѕСЃР»Рµ РёСЃРїСЂР°РІР»РµРЅРёСЏ РґРѕР»Р¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊСЃСЏ Р±РµР· РѕС€РёР±РѕРє! рџЋЇ в›…пёЏ wrangler 4.22.0
в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
Your Worker has access to the following bindings:
Binding                          Resource       Mode
env.R2 (mastermarat-videos)      R2 Bucket      local

в•­в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв•®
в”‚  [b] open a browser pastedР’рџђ› РњРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Рµ РѕС€РёР±РєРё РІ С€Р°Р±Р»РѕРЅР°С… СЃС‚СЂРѕРє
Р’РёР¶Сѓ РїСЂРѕР±Р»РµРјСѓ - РІ РєРѕРґРµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ С€Р°Р±Р»РѕРЅРЅС‹Рµ Р»РёС‚РµСЂР°Р»С‹ (template literals) РІРЅСѓС‚СЂРё РѕР±С‹С‡РЅС‹С… СЃС‚СЂРѕРє. РќСѓР¶РЅРѕ РёСЃРїСЂР°РІРёС‚СЊ СЃРёРЅС‚Р°РєСЃРёСЃ.
рџ”§ РСЃРїСЂР°РІР»СЏРµРј РІСЃРµ РѕС€РёР±РєРё:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РСЃРїСЂР°РІР»СЏРµРј handlers/api.js
@"
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}
"@ | Out-File -FilePath "src\handlers\api.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/thumbnails.js
@"
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
  
  // Р”Р»СЏ РѕР±СЂР°С‚РЅРѕР№ СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚Рё: РїСЂРѕРІРµСЂСЏРµРј РµСЃС‚СЊ Р»Рё С‚Р°РєРѕР№ СѓСЂРѕРє
  let thumbnailKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonId = fileName.replace('.jpg', '').replace('.png', '');
    const lessonData = course.lessons[lessonId];
    
    if (lessonData && lessonData.thumbnail_file) {
      thumbnailKey = `content/${courseId}/${lessonData.thumbnail_file}`;
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
"@ | Out-File -FilePath "src\handlers\thumbnails.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/video.js
@"
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ
  if (!token || !validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid or missing token');
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
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
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
        
        const headers = new Headers();
        headers.set('Content-Type', video.httpMetadata?.contentType || 'video/mp4');
        headers.set('Accept-Ranges', 'bytes');
        headers.set('Content-Range', `bytes ${start}-${end || video.size - 1}/${video.size}`);
        headers.set('Content-Length', video.size.toString());
        headers.set('Cache-Control', 'private, max-age=3600');
        headers.set('Access-Control-Allow-Origin', '*');
        
        return new Response(video.body, {
          status: 206,
          headers
        });
      }
    }
    
    // РћР±С‹С‡РЅС‹Р№ Р·Р°РїСЂРѕСЃ Р±РµР· range
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
"@ | Out-File -FilePath "src\handlers\video.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/player-learning.js
@"
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґРѕСЃС‚СѓРї
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
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј HTML РїР»РµРµСЂР° РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (Р±РµР· РЅР°РІРёРіР°С†РёРё)
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
            background: #1a1a1a;
            color: #fff;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .header {
            background: #3D968C;
            padding: 15px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 1.2rem;
            font-weight: 500;
        }
        .video-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
        }
        video {
            width: 100%;
            max-width: 900px;
            height: auto;
        }
        .info {
            padding: 20px;
            text-align: center;
            background: #2a2a2a;
        }
        .token-info {
            font-size: 0.8rem;
            color: #888;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${lesson.title}</h1>
    </div>
    
    <div class="video-container">
        <video 
            controls 
            autoplay
            preload="metadata"
            poster="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}"
            id="lesson-video"
        >
            <source src="${url.origin}/video/${courseId}/${lesson.video_file}?token=${token}" type="video/mp4">
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ HTML5 РІРёРґРµРѕ.
        </video>
    </div>
    
    <div class="info">
        <p>РљСѓСЂСЃ: ${course.title}</p>
        <p class="token-info">Р РµР¶РёРј: РћР±СѓС‡РµРЅРёРµ (Р±РµР· РЅР°РІРёРіР°С†РёРё)</p>
    </div>

    <script>
        const video = document.getElementById('lesson-video');
        video.addEventListener('loadedmetadata', () => {
            console.log('Video loaded:', '${courseId}/${lessonId}');
        });
        
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            alert('РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ. РџСЂРѕРІРµСЂСЊС‚Рµ С‚РѕРєРµРЅ РґРѕСЃС‚СѓРїР°.');
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
"@ | Out-File -FilePath "src\handlers\player-learning.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/player-archive.js
@"
// handlers/player-archive.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ
  const accessCheck = hasAccess(token, courseId, 'archive');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
  const lessonsList = Object.entries(course.lessons).map(([lessonId, lesson]) => {
    return `
      <div class="lesson-item">
        <a href="${url.origin}/player/${courseId}/${lessonId}?token=${token}">
          <img src="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}" alt="${lesson.title}">
          <div class="lesson-info">
            <h3>${lesson.title}</h3>
            <p>РЈСЂРѕРє ${lessonId.replace('week', 'РќРµРґРµР»СЏ ').replace('_lesson', ', СѓСЂРѕРє ')}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  
  const archiveHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .lessons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .lesson-item {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .lesson-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .lesson-item a {
            text-decoration: none;
            color: inherit;
            display: block;
        }
        .lesson-item img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }
        .lesson-info {
            padding: 15px;
        }
        .lesson-info h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }
        .lesson-info p {
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>рџ“љ РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title}</h1>
        <p>РџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРј СѓСЂРѕРєР°Рј РєСѓСЂСЃР°</p>
    </div>
    
    <div class="container">
        <h2>Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° (${Object.keys(course.lessons).length} СѓСЂРѕРєРѕРІ)</h2>
        <div class="lessons-grid">
            ${lessonsList}
        </div>
    </div>

    <script>
        console.log('Archive mode loaded for course: ${courseId}');
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
"@ | Out-File -FilePath "src\handlers\player-archive.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј utils/errors.js
@"
// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
"@ | Out-File -FilePath "src\utils\errors.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј utils/token.js
@"
// utils/token.js
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕРІРµСЂСЏРµРј С‚РµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј С„РѕСЂРјР°С‚ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РІРѕР·РІСЂР°С‰Р°РµРј РёС… РїСЂР°РІР°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ РїР°СЂСЃРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);
  
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РїСЂРѕРІРµСЂСЏРµРј РїСЂР°РІР°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;
    
    // РџСЂРѕРІРµСЂСЏРµРј РЅРµ РёСЃС‚РµРє Р»Рё С‚РѕРєРµРЅ
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }
    
    // SuperUser РёРјРµРµС‚ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє РєСѓСЂСЃСѓ
    const hasCourseAccess = perms.courses.includes('*') || 
                           perms.courses.includes(courseId);
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє С„СѓРЅРєС†РёРё
    const hasFeatureAccess = perms.features.includes(feature);
    
    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }
    
    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }
    
    return { allowed: true, permissions: perms };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ - РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР°
  // TODO: РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
"@ | Out-File -FilePath "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… Р’СЃРµ С„Р°Р№Р»С‹ РёСЃРїСЂР°РІР»РµРЅС‹!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџљЂ РўРµРїРµСЂСЊ Р·Р°РїСѓСЃРєР°РµРј СЃРЅРѕРІР°..." -ForegroundColor Cyan

# Р—Р°РїСѓСЃРєР°РµРј
npm run dev
Р’СЃРµ СЃРёРЅС‚Р°РєСЃРёС‡РµСЃРєРёРµ РѕС€РёР±РєРё РёСЃРїСЂР°РІР»РµРЅС‹. РўРµРїРµСЂСЊ РґРѕР»Р¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊСЃСЏ Р±РµР· РїСЂРѕР±Р»РµРј! рџљЂР’в›…пёЏ wrangler 4.22.0
в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
Your Worker has access to the following bindings:
Binding                          Resource       Mode
env.R2 (mastermarat-videos)      R2 Bucket      local
в•­в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв•®
в”‚  [b] open a browser [d] open devtools [c] clear console [x] to exit  в”‚
в•°в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв•Ї
в–І [WARNING] The character "}" is not valid inside a JSX element
    src/handlers/player-archive.js:37:2:
      37 в”‚   }).join('');
         в”‚   ^
         в•µ   {'}'}
  Did you mean to escape it as "{'}'}" instead?
X [ERROR] Build failed with 9 errors:
  X [ERROR] Expected "}" but found "{"
      src/handlers/api.js:26:20:
        26 в”‚         testpage: ${url.origin}/test,
           в”‚                     ^
           в•µ                     }
  X [ERROR] Unexpected closing "a" tag does not match
  opening "img" tag
      src/handlers/player-archive.js:34:10:
        34 в”‚         </a>
           в”‚           ^
           в•µ           img
    The opening "img" tag is here:
      src/handlers/player-archive.js:29:11:
        29 в”‚           <img src="/thumbnails//" alt="">
           в•µ            ~~~
  X [ERROR] Unexpected closing "div" tag does not match
  opening "a" tag
      src/handlers/player-archive.js:35:8:
        35 в”‚       </div>
           в”‚         ~~~
           в•µ         a
    The opening "a" tag is here:
      src/handlers/player-archive.js:28:9:
        28 в”‚         <a href="/player//?token=">
           в•µ          ^
  X [ERROR] Expected identifier but found "!"
      src/handlers/player-archive.js:39:23:
        39 в”‚   const archiveHTML = <!DOCTYPE html>
           в•µ                        ^
  X [ERROR] Expected identifier but found "!"
      src/handlers/player-learning.js:35:22:
        35 в”‚   const playerHTML = <!DOCTYPE html>
           в•µ                       ^
  X [ERROR] Unexpected "\b"
      src/handlers/video.js:64:37:
        64 в”‚         headers.set('Content-Range',ytes -/);
           в•µ                                      ^
  X [ERROR] Expected ")" but found "{"
      src/utils/errors.js:21:30:
        21 в”‚   return createErrorResponse(${resource} not found, 404);
           в”‚                               ^
           в•µ                               )
  X [ERROR] Expected ":" but found "{"
      src/utils/token.js:7:35:
        7 в”‚   const coursePrefix = courseId ? ${courseId} : '';
          в”‚                                    ^
          в•µ                                    :
  X [ERROR] Could not resolve "./handlers/test.js"
      src/worker-new.js:12:31:
        12 в”‚ import { handleTestPage } from './handlers/test.js';
           в•µ                                ~~~~~~~~~~~~~~~~~~~~
в–І [WARNING] The character "}" is not valid inside a JSX element
    src/handlers/player-archive.js:37:2:
      37 в”‚   }).join('');
         в”‚   ^
         в•µ   {'}'}
  Did you mean to escape it as "{'}'}" instead?
[wrangler:info] Ready on http://127.0.0.1:8787
рџЄµ  Logs were written to "C:\Users\vshadrin\AppData\Roaming\xdg.config\.wrangler\logs\wrangler-22025-07-01_12-43-36_228.log"
npm error Lifecycle script dev failed with error:
npm error code 1
npm error path C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error workspace mastermarat-api@1.0.0
npm error location C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c wrangler devрџђ› РџСЂРѕР±Р»РµРјР° СЃ С€Р°Р±Р»РѕРЅРЅС‹РјРё Р»РёС‚РµСЂР°Р»Р°РјРё РІ PowerShell
Р’РёР¶Сѓ РїСЂРѕР±Р»РµРјСѓ - PowerShell РёРЅС‚РµСЂРїСЂРµС‚РёСЂСѓРµС‚ ${} РєР°Рє СЃРІРѕРё РїРµСЂРµРјРµРЅРЅС‹Рµ. РќСѓР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ escape-СЃРёРјРІРѕР»С‹.
рџ”§ РСЃРїСЂР°РІР»СЏРµРј СЃ РїСЂР°РІРёР»СЊРЅС‹Рј СЌРєСЂР°РЅРёСЂРѕРІР°РЅРёРµРј:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РЎРѕР·РґР°РµРј handlers/test.js РєРѕС‚РѕСЂС‹Р№ РѕС‚СЃСѓС‚СЃС‚РІСѓРµС‚
@'
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // РўРµСЃС‚РёСЂСѓРµРј РІСЃРµ С‚РѕРєРµРЅС‹
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1>рџ”ђ MasterMarat Token Testing</h1>
    <p>РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рё С‚РѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ СЂР°Р·РЅС‹С… СѓСЂРѕРІРЅРµР№ РґРѕСЃС‚СѓРїР°:</p>
    
    <div class="token-box">
        <h3>рџ§Є Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=superuser_mastermarat_2025">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=superuser_mastermarat_2025">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=demo123">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=expired_test_token">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}
'@ | Out-File -FilePath "src\handlers\test.js" -Encoding UTF8

Write-Host "вњ… handlers/test.js СЃРѕР·РґР°РЅ!" -ForegroundColor Green

# РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ РїРѕРґС…РѕРґ - СЃРѕР·РґР°РµРј РІСЂРµРјРµРЅРЅС‹Рµ С„Р°Р№Р»С‹ Рё РєРѕРїРёСЂСѓРµРј
Write-Host "" -ForegroundColor White
Write-Host "рџ“ќ РЎРѕР·РґР°РµРј РёСЃРїСЂР°РІР»РµРЅРЅС‹Рµ С„Р°Р№Р»С‹ С‡РµСЂРµР· РІСЂРµРјРµРЅРЅС‹Рµ..." -ForegroundColor Yellow

# РЎРѕР·РґР°РµРј РІСЂРµРјРµРЅРЅСѓСЋ РґРёСЂРµРєС‚РѕСЂРёСЋ
$tempDir = "$env:TEMP\mastermarat-fix"
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

# РЎРѕР·РґР°РµРј С„Р°Р№Р»С‹ РІРѕ РІСЂРµРјРµРЅРЅРѕР№ РґРёСЂРµРєС‚РѕСЂРёРё СЃ РїСЂР°РІРёР»СЊРЅС‹Рј СЃРѕРґРµСЂР¶РёРјС‹Рј
$files = @{
    "api.js" = @'
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}
'@

    "player-archive.js" = @'
// handlers/player-archive.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ
  const accessCheck = hasAccess(token, courseId, 'archive');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
  const lessonItems = [];
  for (const [lessonId, lesson] of Object.entries(course.lessons)) {
    const lessonNumber = lessonId.replace('week', 'РќРµРґРµР»СЏ ').replace('_lesson', ', СѓСЂРѕРє ');
    lessonItems.push(`
      <div class="lesson-item">
        <a href="${url.origin}/player/${courseId}/${lessonId}?token=${token}">
          <img src="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}" alt="${lesson.title}">
          <div class="lesson-info">
            <h3>${lesson.title}</h3>
            <p>${lessonNumber}</p>
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
    <title>РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .lessons-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .lesson-item {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .lesson-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .lesson-item a {
            text-decoration: none;
            color: inherit;
            display: block;
        }
        .lesson-item img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }
        .lesson-info {
            padding: 15px;
        }
        .lesson-info h3 {
            font-size: 1.1rem;
            margin-bottom: 5px;
        }
        .lesson-info p {
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>рџ“љ РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title}</h1>
        <p>РџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРј СѓСЂРѕРєР°Рј РєСѓСЂСЃР°</p>
    </div>
    
    <div class="container">
        <h2>Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° (${Object.keys(course.lessons).length} СѓСЂРѕРєРѕРІ)</h2>
        <div class="lessons-grid">
            ${lessonItems.join('')}
        </div>
    </div>

    <script>
        console.log('Archive mode loaded for course: ${courseId}');
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
'@

    "player-learning.js" = @'
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґРѕСЃС‚СѓРї
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
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј HTML РїР»РµРµСЂР° РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (Р±РµР· РЅР°РІРёРіР°С†РёРё)
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
            background: #1a1a1a;
            color: #fff;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .header {
            background: #3D968C;
            padding: 15px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 1.2rem;
            font-weight: 500;
        }
        .video-container {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
        }
        video {
            width: 100%;
            max-width: 900px;
            height: auto;
        }
        .info {
            padding: 20px;
            text-align: center;
            background: #2a2a2a;
        }
        .token-info {
            font-size: 0.8rem;
            color: #888;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${lesson.title}</h1>
    </div>
    
    <div class="video-container">
        <video 
            controls 
            autoplay
            preload="metadata"
            poster="${url.origin}/thumbnails/${courseId}/${lesson.thumbnail_file}"
            id="lesson-video"
        >
            <source src="${url.origin}/video/${courseId}/${lesson.video_file}?token=${token}" type="video/mp4">
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ HTML5 РІРёРґРµРѕ.
        </video>
    </div>
    
    <div class="info">
        <p>РљСѓСЂСЃ: ${course.title}</p>
        <p class="token-info">Р РµР¶РёРј: РћР±СѓС‡РµРЅРёРµ (Р±РµР· РЅР°РІРёРіР°С†РёРё)</p>
    </div>

    <script>
        const video = document.getElementById('lesson-video');
        video.addEventListener('loadedmetadata', () => {
            console.log('Video loaded:', '${courseId}/${lessonId}');
        });
        
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            alert('РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ. РџСЂРѕРІРµСЂСЊС‚Рµ С‚РѕРєРµРЅ РґРѕСЃС‚СѓРїР°.');
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
'@

    "video.js" = @'
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ
  if (!token || !validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid or missing token');
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
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
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
    
    // РћР±С‹С‡РЅС‹Р№ Р·Р°РїСЂРѕСЃ Р±РµР· range
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
'@

    "errors.js" = @'
// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
'@

    "token.js" = @'
// utils/token.js
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕРІРµСЂСЏРµРј С‚РµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј С„РѕСЂРјР°С‚ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РІРѕР·РІСЂР°С‰Р°РµРј РёС… РїСЂР°РІР°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ РїР°СЂСЃРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);
  
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РїСЂРѕРІРµСЂСЏРµРј РїСЂР°РІР°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;
    
    // РџСЂРѕРІРµСЂСЏРµРј РЅРµ РёСЃС‚РµРє Р»Рё С‚РѕРєРµРЅ
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }
    
    // SuperUser РёРјРµРµС‚ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє РєСѓСЂСЃСѓ
    const hasCourseAccess = perms.courses.includes('*') || 
                           perms.courses.includes(courseId);
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє С„СѓРЅРєС†РёРё
    const hasFeatureAccess = perms.features.includes(feature);
    
    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }
    
    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }
    
    return { allowed: true, permissions: perms };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ - РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР°
  // TODO: РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
'@
}

# РЎРѕС…СЂР°РЅСЏРµРј С„Р°Р№Р»С‹
foreach ($file in $files.GetEnumerator()) {
    $content = $file.Value
    $filePath = Join-Path $tempDir $file.Key
    [System.IO.File]::WriteAllText($filePath, $content)
    Write-Host "вњ… РЎРѕР·РґР°РЅ РІСЂРµРјРµРЅРЅС‹Р№ С„Р°Р№Р»: $($file.Key)" -ForegroundColor Gray
}

# РљРѕРїРёСЂСѓРµРј РІ РЅСѓР¶РЅС‹Рµ РјРµСЃС‚Р°
Copy-Item "$tempDir\api.js" "src\handlers\api.js" -Force
Copy-Item "$tempDir\player-archive.js" "src\handlers\player-archive.js" -Force
Copy-Item "$tempDir\player-learning.js" "src\handlers\player-learning.js" -Force
Copy-Item "$tempDir\video.js" "src\handlers\video.js" -Force
Copy-Item "$tempDir\errors.js" "src\utils\errors.js" -Force
Copy-Item "$tempDir\token.js" "src\utils\token.js" -Force

# РЈРґР°Р»СЏРµРј РІСЂРµРјРµРЅРЅСѓСЋ РґРёСЂРµРєС‚РѕСЂРёСЋ
Remove-Item $tempDir -Recurse -Force

Write-Host "" -ForegroundColor White
Write-Host "вњ… Р’СЃРµ С„Р°Р№Р»С‹ РёСЃРїСЂР°РІР»РµРЅС‹ С‡РµСЂРµР· РІСЂРµРјРµРЅРЅС‹Рµ С„Р°Р№Р»С‹!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј СЃРЅРѕРІР°..." -ForegroundColor Cyan

# Р—Р°РїСѓСЃРєР°РµРј
npm run dev
РўРµРїРµСЂСЊ РІСЃРµ С„Р°Р№Р»С‹ СЃРѕР·РґР°РЅС‹ РєРѕСЂСЂРµРєС‚РЅРѕ Р±РµР· РїСЂРѕР±Р»РµРј СЃ СЌРєСЂР°РЅРёСЂРѕРІР°РЅРёРµРј. Р—Р°РїСѓСЃРєР°Р№ СЃРєСЂРёРїС‚! рџљЂР’[wrangler:info] Ready on http://127.0.0.1:8787
X [ERROR] Build failed with 2 errors:
  X [ERROR] No matching export in "src/utils/errors.js" for
  import "createBadRequestResponse"
      src/handlers/webhooks.js:3:9:
        3 в”‚ import { createBadRequestResponse } from '../utils/errors.js';
          в•µ          ~~~~~~~~~~~~~~~~~~~~~~~~
  X [ERROR] No matching export in "src/utils/token.js" for
  import "generateSimpleToken"
      src/handlers/webhooks.js:4:9:
        4 в”‚ import { generateSimpleToken } from '../utils/token.js';
          в•µ          ~~~~~~~~~~~~~~~~~~~
рџЄµ  Logs were written to "C:\Users\vshadrin\AppData\Roaming\xdg.config\.wrangler\logs\wrangler-22025-07-01_12-46-30_953.log"
npm error Lifecycle script dev failed with error:
npm error code 1
npm error path C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error workspace mastermarat-api@1.0.0
npm error location C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c wrangler devРЅР°РґРµСЋСЃСЊ РІСЃРµ СЃРЅРѕРІР° РЅРµ Р±СѓРґРµС€СЊ РїРµСЂРµРїРёСЃС‹РІР°С‚СЊрџ”§ Р‘С‹СЃС‚СЂРѕРµ РёСЃРїСЂР°РІР»РµРЅРёРµ - РґРѕР±Р°РІР»СЏРµРј РЅРµРґРѕСЃС‚Р°СЋС‰РёРµ С„СѓРЅРєС†РёРё
РќРµС‚, РЅРµ Р±СѓРґСѓ РІСЃС‘ РїРµСЂРµРїРёСЃС‹РІР°С‚СЊ! РџСЂРѕСЃС‚Рѕ РґРѕР±Р°РІРёРј РґРІРµ РЅРµРґРѕСЃС‚Р°СЋС‰РёРµ С„СѓРЅРєС†РёРё:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# Р”РѕР±Р°РІР»СЏРµРј РЅРµРґРѕСЃС‚Р°СЋС‰СѓСЋ С„СѓРЅРєС†РёСЋ РІ utils/errors.js
$errorsContent = Get-Content "src\utils\errors.js" -Raw
$errorsContent = $errorsContent.TrimEnd() + @"

export function createBadRequestResponse(message, details = null) {
  return createErrorResponse(message, 400, details);
}
"@
$errorsContent | Out-File "src\utils\errors.js" -Encoding UTF8

Write-Host "вњ… Р”РѕР±Р°РІР»РµРЅР° С„СѓРЅРєС†РёСЏ createBadRequestResponse РІ errors.js" -ForegroundColor Green

# Р”РѕР±Р°РІР»СЏРµРј РЅРµРґРѕСЃС‚Р°СЋС‰СѓСЋ С„СѓРЅРєС†РёСЋ РІ utils/token.js
$tokenContent = Get-Content "src\utils\token.js" -Raw
$tokenContent = $tokenContent.TrimEnd() + @"

export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
"@
$tokenContent | Out-File "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… Р”РѕР±Р°РІР»РµРЅР° С„СѓРЅРєС†РёСЏ generateSimpleToken РІ token.js" -ForegroundColor Green

Write-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј СЃРЅРѕРІР°..." -ForegroundColor Cyan

# Р—Р°РїСѓСЃРєР°РµРј
npm run dev
Р’СЃС‘! РџСЂРѕСЃС‚Рѕ РґРѕР±Р°РІРёР»Рё РґРІРµ РЅРµРґРѕСЃС‚Р°СЋС‰РёРµ С„СѓРЅРєС†РёРё, РєРѕС‚РѕСЂС‹Рµ РёРјРїРѕСЂС‚РёСЂСѓРµС‚ webhooks.js. РўРµРїРµСЂСЊ РґРѕР»Р¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊСЃСЏ! рџљЂImages hidden in shared chatsР’РћС…СѓРµРЅРЅРѕ, РІСЃРµ Р·Р°РїСѓСЃРєР°РµС‚СЃСЏ, С‚РѕР»СЊРєРѕ РєРѕР»РѕСЂРёС‚ РЅР°РґРѕ РїРѕРґРїСЂР°РІРёС‚СЊ Рё РїР»РµРµСЂрџЋЁ РћС‚Р»РёС‡РЅРѕ! РўРµРїРµСЂСЊ РЅР°СЃС‚СЂРѕРёРј РґРёР·Р°Р№РЅ Рё РїР»РµРµСЂ
Р’РёР¶Сѓ, С‡С‚Рѕ РІСЃС‘ СЂР°Р±РѕС‚Р°РµС‚, РЅРѕ РЅСѓР¶РЅРѕ СѓР»СѓС‡С€РёС‚СЊ СЃС‚РёР»Рё. Р”Р°РІР°Р№С‚Рµ РёСЃРїСЂР°РІРёРј С†РІРµС‚РѕРІСѓСЋ СЃС…РµРјСѓ Рё РїР»РµРµСЂ:
рџЋЁ РћР±РЅРѕРІР»СЏРµРј СЃС‚РёР»Рё РїР»РµРµСЂР°
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РћР±РЅРѕРІР»СЏРµРј player-learning.js СЃ СѓР»СѓС‡С€РµРЅРЅС‹Рј РґРёР·Р°Р№РЅРѕРј
@'
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґРѕСЃС‚СѓРї
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
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј HTML РїР»РµРµСЂР° РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (Р±РµР· РЅР°РІРёРіР°С†РёРё)
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
            background: #0a0a0a;
            color: #ffffff;
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #3D968C 0%, #2a6b64 100%);
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            position: relative;
            z-index: 10;
        }
        
        .header h1 {
            font-size: 1.4rem;
            font-weight: 600;
            text-shadow: 0 1px 3px rgba(0,0,0,0.3);
            margin-bottom: 5px;
        }
        
        .header p {
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .video-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            position: relative;
            padding: 20px;
        }
        
        .video-container {
            width: 100%;
            max-width: 1200px;
            position: relative;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }
        
        video {
            width: 100%;
            height: auto;
            display: block;
            background: #000;
        }
        
        .info-bar {
            background: linear-gradient(to bottom, #1a1a1a, #0f0f0f);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #333;
        }
        
        .course-info {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .course-badge {
            background: #3D968C;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
        }
        
        .lesson-number {
            color: #888;
            font-size: 0.9rem;
        }
        
        .mode-info {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #666;
            font-size: 0.85rem;
        }
        
        .mode-icon {
            width: 20px;
            height: 20px;
            fill: #3D968C;
        }
        
        /* РђРЅРёРјР°С†РёСЏ Р·Р°РіСЂСѓР·РєРё */
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
        
        /* РњРѕР±РёР»СЊРЅР°СЏ Р°РґР°РїС‚Р°С†РёСЏ */
        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.1rem;
            }
            
            .video-wrapper {
                padding: 0;
            }
            
            .video-container {
                border-radius: 0;
            }
            
            .info-bar {
                flex-direction: column;
                gap: 10px;
                text-align: center;
            }
        }
        
        /* РљРЅРѕРїРєР° РѕС€РёР±РєРё */
        .error-message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(220, 38, 38, 0.9);
            color: white;
            padding: 20px 30px;
            border-radius: 8px;
            text-align: center;
            display: none;
        }
        
        .error-message.show {
            display: block;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>${lesson.title}</h1>
        <p>${course.title}</p>
    </div>
    
    <div class="video-wrapper">
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
                Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ HTML5 РІРёРґРµРѕ.
            </video>
            
            <div class="error-message" id="errorMessage">
                <p>РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ</p>
                <p style="font-size: 0.9rem; margin-top: 10px; opacity: 0.8;">РџСЂРѕРІРµСЂСЊС‚Рµ РїРѕРґРєР»СЋС‡РµРЅРёРµ Рє РёРЅС‚РµСЂРЅРµС‚Сѓ</p>
            </div>
        </div>
    </div>
    
    <div class="info-bar">
        <div class="course-info">
            <span class="course-badge">РљСѓСЂСЃ</span>
            <span class="lesson-number">${lessonId.replace('week', 'РќРµРґРµР»СЏ ').replace('_lesson', ', СѓСЂРѕРє ')}</span>
        </div>
        
        <div class="mode-info">
            <svg class="mode-icon" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Р РµР¶РёРј РѕР±СѓС‡РµРЅРёСЏ</span>
        </div>
    </div>

    <script>
        const video = document.getElementById('lessonVideo');
        const loadingOverlay = document.getElementById('loadingOverlay');
        const errorMessage = document.getElementById('errorMessage');
        
        // РЎРєСЂС‹РІР°РµРј Р·Р°РіСЂСѓР·РєСѓ РєРѕРіРґР° РІРёРґРµРѕ РіРѕС‚РѕРІРѕ
        video.addEventListener('loadeddata', () => {
            loadingOverlay.classList.add('hidden');
            console.log('Video loaded:', '${courseId}/${lessonId}');
        });
        
        // РџРѕРєР°Р·С‹РІР°РµРј Р·Р°РіСЂСѓР·РєСѓ РїСЂРё Р±СѓС„РµСЂРёР·Р°С†РёРё
        video.addEventListener('waiting', () => {
            loadingOverlay.classList.remove('hidden');
        });
        
        video.addEventListener('playing', () => {
            loadingOverlay.classList.add('hidden');
        });
        
        // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            loadingOverlay.classList.add('hidden');
            errorMessage.classList.add('show');
        });
        
        // РЎРѕС…СЂР°РЅСЏРµРј РїСЂРѕРіСЂРµСЃСЃ РїСЂРѕСЃРјРѕС‚СЂР°
        let lastSaveTime = 0;
        video.addEventListener('timeupdate', () => {
            const currentTime = Math.floor(video.currentTime);
            if (currentTime - lastSaveTime > 10) { // РЎРѕС…СЂР°РЅСЏРµРј РєР°Р¶РґС‹Рµ 10 СЃРµРєСѓРЅРґ
                lastSaveTime = currentTime;
                console.log('Progress saved:', currentTime);
                // TODO: РћС‚РїСЂР°РІРёС‚СЊ РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
            }
        });
        
        // РџРѕР»РЅРѕСЌРєСЂР°РЅРЅС‹Р№ СЂРµР¶РёРј РЅР° РјРѕР±РёР»СЊРЅС‹С… РїСЂРё РєР»РёРєРµ
        if ('ontouchstart' in window) {
            video.addEventListener('click', () => {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                }
            });
        }
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
'@ | Out-File -FilePath "src\handlers\player-learning.js" -Encoding UTF8

Write-Host "вњ… РџР»РµРµСЂ РѕР±РЅРѕРІР»РµРЅ СЃ СѓР»СѓС‡С€РµРЅРЅС‹Рј РґРёР·Р°Р№РЅРѕРј!" -ForegroundColor Green

# РўР°РєР¶Рµ РѕР±РЅРѕРІРёРј player-archive.js РґР»СЏ РµРґРёРЅРѕРѕР±СЂР°Р·РёСЏ
@'
// handlers/player-archive.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ
  const accessCheck = hasAccess(token, courseId, 'archive');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
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
              <span class="week-badge">РќРµРґРµР»СЏ ${weekNum}</span>
              <span class="lesson-number">РЈСЂРѕРє ${lessonNum}</span>
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
    <title>РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title} - MasterMarat</title>
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
        
        /* РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ */
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
        
        /* РђРЅРёРјР°С†РёСЏ РїРѕСЏРІР»РµРЅРёСЏ */
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
        <h1>рџ“љ РђСЂС…РёРІ РєСѓСЂСЃР°</h1>
        <p>${course.title}</p>
    </div>
    
    <div class="container">
        <h2 class="section-title">Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° (${Object.keys(course.lessons).length})</h2

... [CONTENT TRUNCATED - FILE TOO LARGE] ...
```

---

### `chats/chat_claude-sonnet_01_07_2025.md` (127.34 KB)

```markdown
РџРѕСЃРјРѕС‚СЂРµР» РѕР±РЅРѕРІР»РµРЅРЅС‹Р№ worker.js! РћС‚Р»РёС‡РЅР°СЏ СЂР°Р±РѕС‚Р° РїРѕ СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРёСЋ РєРѕРґР°. Р’РёР¶Сѓ РЅРµСЃРєРѕР»СЊРєРѕ РєР»СЋС‡РµРІС‹С… СѓР»СѓС‡С€РµРЅРёР№:
рџЋЇ РљСЂР°С‚РєРёР№ Р°РЅР°Р»РёР· РёР·РјРµРЅРµРЅРёР№
РћСЃРЅРѕРІРЅС‹Рµ СѓР»СѓС‡С€РµРЅРёСЏ:

вњ… РЎС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅР°СЏ СЃРёСЃС‚РµРјР° РєСѓСЂСЃРѕРІ С‡РµСЂРµР· COURSE_DATA
вњ… Р”РёРЅР°РјРёС‡РµСЃРєР°СЏ Р·Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РёР· R2 (content/{courseId}/{lessonId}.json)
вњ… РЈР»СѓС‡С€РµРЅРЅР°СЏ РЅР°РІРёРіР°С†РёСЏ РјРµР¶РґСѓ СѓСЂРѕРєР°РјРё
вњ… РњРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° HTML-РіРµРЅРµСЂР°С†РёРё
вњ… РџСЂР°РІРёР»СЊРЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР° РїСѓС‚РµР№ /video/{courseId}/{filename}

РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ СЂРµС€РµРЅРёСЏ:

Р¦РµРЅС‚СЂР°Р»РёР·РѕРІР°РЅРЅРѕРµ СѓРїСЂР°РІР»РµРЅРёРµ РєСѓСЂСЃР°РјРё
Р Р°Р·РґРµР»РµРЅРёРµ РєРѕРЅС‚РµРЅС‚Р° Рё РјРµС‚Р°РґР°РЅРЅС‹С…
Fallback РґР»СЏ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‰РµРіРѕ РєРѕРЅС‚РµРЅС‚Р°

рџ“‹ РџР»Р°РЅ РґРµС‚Р°Р»СЊРЅРѕРіРѕ Р°РЅР°Р»РёР·Р°
РҐРѕС‡РµС€СЊ, С‡С‚РѕР±С‹ СЏ РїСЂРѕР°РЅР°Р»РёР·РёСЂРѕРІР°Р»:

РўРµС…РЅРёС‡РµСЃРєСѓСЋ РєРѕСЂСЂРµРєС‚РЅРѕСЃС‚СЊ - РїСЂРѕРІРµСЂРєР° Р»РѕРіРёРєРё РѕР±СЂР°Р±РѕС‚РєРё Р·Р°РїСЂРѕСЃРѕРІ, CORS, error handling
РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ СЂРµС€РµРЅРёСЏ - СЃС‚СЂСѓРєС‚СѓСЂР° РґР°РЅРЅС‹С…, РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚СЊ, РјР°СЃС€С‚Р°Р±РёСЂСѓРµРјРѕСЃС‚СЊ
РРЅС‚РµРіСЂР°С†РёСЋ СЃ R2 - СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚СЊ СЂР°Р±РѕС‚С‹ СЃ РѕР±СЉРµРєС‚Р°РјРё, РєРµС€РёСЂРѕРІР°РЅРёРµ
Р“РѕС‚РѕРІРЅРѕСЃС‚СЊ Рє РїСЂРѕРґР°РєС€РµРЅСѓ - Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ С‚РѕРєРµРЅРѕРІ, Р»РѕРіРёСЂРѕРІР°РЅРёРµ, РјРѕРЅРёС‚РѕСЂРёРЅРі
Р РµРєРѕРјРµРЅРґР°С†РёРё РїРѕ РѕРїС‚РёРјРёР·Р°С†РёРё - СѓР»СѓС‡С€РµРЅРёСЏ РєРѕРґР° Рё РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё

РљР°РєРѕР№ Р°СЃРїРµРєС‚ С‚РµР±СЏ Р±РѕР»СЊС€Рµ РІСЃРµРіРѕ РёРЅС‚РµСЂРµСЃСѓРµС‚ СЃРµР№С‡Р°СЃ? РР»Рё РїСЂРµРґРѕСЃС‚Р°РІРёС‚СЊ РїРѕР»РЅС‹Р№ С‚РµС…РЅРёС‡РµСЃРєРёР№ РѕР±Р·РѕСЂ?RetryР’РґР° С‡С‚Рѕ-С‚Рѕ РїРµСЂРµСЃС‚Р°Р» РїР»РµРµСЂ СЂР°Р±РѕС‚Р°С‚СЊEditР”Р°РІР°Р№ Р±С‹СЃС‚СЂРѕ РґРёР°РіРЅРѕСЃС‚РёСЂСѓРµРј РїСЂРѕР±Р»РµРјСѓ СЃ РїР»РµРµСЂРѕРј!
рџ”Ќ РџР»Р°РЅ РґРёР°РіРЅРѕСЃС‚РёРєРё

РџСЂРѕРІРµСЂРєР° РґРµРїР»РѕСЏ - СѓР±РµРґРёС‚СЊСЃСЏ С‡С‚Рѕ РЅРѕРІС‹Р№ РєРѕРґ СЂР°Р·РІРµСЂРЅСѓС‚
РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ СЌРЅРґРїРѕРёРЅС‚РѕРІ - API РѕС‚РІРµС‡Р°РµС‚ РєРѕСЂСЂРµРєС‚РЅРѕ
РџСЂРѕРІРµСЂРєР° РїСѓС‚РµР№ - РЅРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° /player/{courseId}/{lessonId}
R2 РёРЅС‚РµРіСЂР°С†РёСЏ - РґРѕСЃС‚СѓРїРЅРѕСЃС‚СЊ С„Р°Р№Р»РѕРІ РєРѕРЅС‚РµРЅС‚Р°
Browser console - РѕС€РёР±РєРё JavaScript

РЎРЅР°С‡Р°Р»Р° Р±С‹СЃС‚СЂС‹Рµ РїСЂРѕРІРµСЂРєРё:
Р‘С‹СЃС‚СЂР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР°
bash# 1. РџСЂРѕРІРµСЂСЏРµРј РѕСЃРЅРѕРІРЅРѕР№ API
curl https://api.mastermarat.com/

# 2. РўРµСЃС‚РёСЂСѓРµРј РЅРѕРІС‹Р№ РїСѓС‚СЊ РїР»РµРµСЂР°  
curl https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123

# 3. РџСЂРѕРІРµСЂСЏРµРј РІРёРґРµРѕ endpoint
curl -I https://api.mastermarat.com/video/course1/test_video.mp4?token=demo123
Р’РѕРїСЂРѕСЃС‹ РґР»СЏ СѓС‚РѕС‡РЅРµРЅРёСЏ:

Р§С‚Рѕ РёРјРµРЅРЅРѕ РЅРµ СЂР°Р±РѕС‚Р°РµС‚?

РџР»РµРµСЂ РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ (Р±РµР»С‹Р№ СЌРєСЂР°РЅ)?
Р’РёРґРµРѕ РЅРµ РІРѕСЃРїСЂРѕРёР·РІРѕРґРёС‚СЃСЏ?
JavaScript РѕС€РёР±РєРё?
404/500 РѕС€РёР±РєРё?


РљР°РєРѕР№ URL С‚РµСЃС‚РёСЂСѓРµС€СЊ?

РЎС‚Р°СЂС‹Р№ С„РѕСЂРјР°С‚ /player/?lesson=X&token=Y?
РќРѕРІС‹Р№ С„РѕСЂРјР°С‚ /player/course1/week1_lesson1?token=X?


Р”РµРїР»РѕР№ РїСЂРѕС€РµР» СѓСЃРїРµС€РЅРѕ?

wrangler deploy РІС‹РїРѕР»РЅСЏР»СЃСЏ?
Р•СЃС‚СЊ Р»Рё РѕС€РёР±РєРё РІ Cloudflare Dashboard?



РљР°РєРёРµ СЃРёРјРїС‚РѕРјС‹ РІРёРґРёС€СЊ? Р”Р°Р№ Р·РЅР°С‚СЊ Рё СЃСЂР°Р·Сѓ РЅР°Р№РґРµРј РїСЂРѕР±Р»РµРјСѓ! рџ› пёЏRetryР’РґРµРїР»РѕР№ РїРѕРєР° РІ api-dev.mastermarat.comEditРџРѕРЅСЏР»! РўРµСЃС‚РёСЂСѓРµРј РЅР° dev РѕРєСЂСѓР¶РµРЅРёРё. Р”Р°РІР°Р№ РїСЂРѕРІРµСЂРёРј С‡С‚Рѕ РїСЂРѕРёСЃС…РѕРґРёС‚ СЃ api-dev.mastermarat.com.
рџ”Ќ Р”РёР°РіРЅРѕСЃС‚РёРєР° dev environment
1. РџСЂРѕРІРµСЂСЏРµРј РѕСЃРЅРѕРІРЅС‹Рµ endpoints
bash# РћСЃРЅРѕРІРЅРѕР№ API
curl https://api-dev.mastermarat.com/

# РќРѕРІС‹Р№ С„РѕСЂРјР°С‚ РїР»РµРµСЂР°
curl https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123

# РџСЂРѕРІРµСЂСЏРµРј РµСЃС‚СЊ Р»Рё СЃС‚Р°СЂС‹Р№ endpoint
curl https://api-dev.mastermarat.com/player/?lesson=test_video&token=demo123
2. Р’РѕР·РјРѕР¶РЅС‹Рµ РїСЂРѕР±Р»РµРјС‹ РїРѕСЃР»Рµ РёР·РјРµРЅРµРЅРёР№
РР·РјРµРЅРёР»СЃСЏ СЂРѕСѓС‚РёРЅРі РїР»РµРµСЂР°:

РЎС‚Р°СЂС‹Р№: /player/?lesson=X&token=Y
РќРѕРІС‹Р№: /player/{courseId}/{lessonId}?token=Y

Р’ РєРѕРґРµ РІРёР¶Сѓ СѓСЃР»РѕРІРёРµ:
javascriptif (url.pathname.startsWith('/player/')) {
  return handlePlayerRequest(request, env, corsHeaders);
}
3. Р‘С‹СЃС‚СЂР°СЏ РїСЂРѕРІРµСЂРєР°
РћС‚РєСЂРѕР№ РІ Р±СЂР°СѓР·РµСЂРµ РѕРґРёРЅ РёР· СЌС‚РёС… URL Рё СЃРєР°Р¶Рё С‡С‚Рѕ РІРёРґРёС€СЊ:

РћСЃРЅРѕРІРЅРѕР№ API: https://api-dev.mastermarat.com/
РџР»РµРµСЂ РЅРѕРІС‹Р№ С„РѕСЂРјР°С‚: https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123
РџР»РµРµСЂ СЃС‚Р°СЂС‹Р№ С„РѕСЂРјР°С‚: https://api-dev.mastermarat.com/player/?lesson=test_video&token=demo123

4. РџСЂРѕРІРµСЂСЏРµРј dev deployment
bash# РЎС‚Р°С‚СѓСЃ dev worker
wrangler tail --env dev

# РР»Рё СЃРјРѕС‚СЂРёРј Р»РѕРіРё РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё РїСЂРё С‚РµСЃС‚РёСЂРѕРІР°РЅРёРё
Р§С‚Рѕ РёРјРµРЅРЅРѕ РІРёРґРёС€СЊ РєРѕРіРґР° Р·Р°С…РѕРґРёС€СЊ РЅР° РїР»РµРµСЂ?

Р‘РµР»С‹Р№ СЌРєСЂР°РЅ?
РћС€РёР±РєР° 404?
РћС€РёР±РєР° 500?
РЎС‚СЂР°РЅРёС†Р° Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ РЅРѕ РІРёРґРµРѕ РЅРµ СЂР°Р±РѕС‚Р°РµС‚?

Р”Р°Р№ Р·РЅР°С‚СЊ С‡С‚Рѕ РїРѕРєР°Р·С‹РІР°РµС‚ - СЃСЂР°Р·Сѓ РЅР°Р№РґРµРј РїСЂРёС‡РёРЅСѓ! рџљЂRetryР’Сѓ РјРµРЅСЏ Р±Р»СЏС…Р° РїР°РІРµСЂС€РµР», РєР°Рє РјРЅРµ С‚РµР±Рµ РѕР±СЉСЏСЃРЅРёС‚СЊ СЂР°Р· Рё РЅР°РІСЃРµРіРґР°?EditРџРѕРЅСЏР»! PowerShell РІРјРµСЃС‚Рѕ bash. Р’РѕС‚ РєРѕРјР°РЅРґС‹ РґР»СЏ PowerShell:
рџ”Ќ Р”РёР°РіРЅРѕСЃС‚РёРєР° РІ PowerShell
1. РџСЂРѕРІРµСЂСЏРµРј РѕСЃРЅРѕРІРЅС‹Рµ endpoints
powershell# РћСЃРЅРѕРІРЅРѕР№ API
Invoke-RestMethod -Uri "https://api-dev.mastermarat.com/" -Method Get

# РќРѕРІС‹Р№ С„РѕСЂРјР°С‚ РїР»РµРµСЂР° (РїРѕР»СѓС‡Р°РµРј С‚РѕР»СЊРєРѕ headers)
Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123" -Method Head

# РџСЂРѕРІРµСЂСЏРµРј РІРёРґРµРѕ endpoint
Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/video/course1/test_video.mp4?token=demo123" -Method Head
2. РџСЂРѕРІРµСЂСЏРµРј dev deployment
powershell# РЎРјРѕС‚СЂРёРј Р»РѕРіРё dev worker
wrangler tail --env dev

# Р”РµРїР»РѕР№ РЅР° dev (РµСЃР»Рё РЅСѓР¶РЅРѕ)
wrangler deploy --env dev
3. Р‘С‹СЃС‚СЂР°СЏ РїСЂРѕРІРµСЂРєР° РІ Р±СЂР°СѓР·РµСЂРµ
РџСЂРѕСЃС‚Рѕ РѕС‚РєСЂРѕР№ СЌС‚Рё URL Рё СЃРєР°Р¶Рё С‡С‚Рѕ РІРёРґРёС€СЊ:

РћСЃРЅРѕРІРЅРѕР№ API: https://api-dev.mastermarat.com/
РџР»РµРµСЂ: https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123

Р§С‚Рѕ РёРјРµРЅРЅРѕ СЃР»РѕРјР°Р»РѕСЃСЊ?

404 РѕС€РёР±РєР°?
Р‘РµР»С‹Р№ СЌРєСЂР°РЅ?
JavaScript РѕС€РёР±РєРё РІ РєРѕРЅСЃРѕР»Рё Р±СЂР°СѓР·РµСЂР°?
Р’РёРґРµРѕ РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ?

РЎРєР°Р¶Рё С‡С‚Рѕ РІРёРґРёС€СЊ Рё СЏ СЃСЂР°Р·Сѓ РЅР°Р№РґСѓ РїСЂРѕР±Р»РµРјСѓ! рџ’ЄRetryР’PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> Invoke-RestMethod -Uri "https://api-dev.mastermarat.com/" -Method Get
status           : success
message          : MasterMarat API ГђВґГђВ»Г‘ MVP ГђВєГ‘Г‘Г‘ГђВ° "ГђГђВµГ‘ГђВ°ГђВЅГђВёГђВєГђВ° ГђВ·ГђВґГђВѕГ‘ГђВѕГђВІГ‘Г‘"
worker_url       : https://api-dev.mastermarat.com
r2_connected     : Yes
endpoints        : @{GET /=ГђВ­Г‘ГђВ° Г‘Г‘Г‘ГђВ°ГђВЅГђВёГ‘ГђВ°; GET /player/{courseId}/{lessonId}?token=Y=HTML ГђВІГђВёГђВґГђВµГђВѕГђВїГђВ»ГђВµГђВµГ‘; GET /thumbnails/{cou
                   rseId}/{filename}=ГђГ‘ГђВ±ГђВ»ГђВёГ‘ГђВЅГ‘ГђВµ ГђВїГ‘ГђВµГђВІГ‘Г‘ ГђВІГђВёГђВґГђВµГђВѕ ГђВёГђВ· R2; GET /video/{courseId}/{filename}?token=xxx=ГђГђВ°Г‘ГђВёГ‘
                   ГђВµГђВЅГђВЅГ‘ГђВµ ГђВІГђВёГђВґГђВµГђВѕ ГђВёГђВ· R2 Г‘ ГђВїГђВѕГђВґГђВґГђВµГ‘ГђВ¶ГђВєГђВѕГђВ№ streaming; POST /webhook/purchase=Webhook ГђВѕГ‘ SendPulse ГђВїГ‘ГђВё ГђВїГђ
                   ВѕГђВєГ‘ГђВїГђВєГђВµ}
test_links       : @{player=https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123; thumbnail=https://api-dev.mastermarat
                   .com/thumbnails/course1/week1_lesson1.jpg; video=https://api-dev.mastermarat.com/video/course1/week1_lesson1.mp4?token=dem
                   o123}
course_structure : @{course1=}
timestamp        : 2025-06-30T20:49:15.002Z
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> 
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> # РќРѕРІС‹Р№ С„РѕСЂРјР°С‚ РїР»РµРµСЂР° (РїРѕР»СѓС‡Р°РµРј С‚РѕР»СЊРєРѕ headers)
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123" -Method Head
Invoke-WebRequest : The remote server returned an error: (500) Internal Server Error.
At line:1 char:1
+ Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/player/course ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommand
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> 
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> # РџСЂРѕРІРµСЂСЏРµРј РІРёРґРµРѕ endpoint
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/video/course1/test_video.mp4?token=demo123" -Method Head
Invoke-WebRequest : The remote server returned an error: (404) Not Found.
At line:1 char:1
+ Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/video/course1 ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : InvalidOperation: (System.Net.HttpWebRequest:HttpWebRequest) [Invoke-WebRequest], WebException
    + FullyQualifiedErrorId : WebCmdletWebResponseException,Microsoft.PowerShell.Commands.InvokeWebRequestCommandEditР’РёР¶Сѓ РїСЂРѕР±Р»РµРјСѓ!
рџ”Ґ Р”РёР°РіРЅРѕР·: 500 РѕС€РёР±РєР° РІ РїР»РµРµСЂРµ, 404 РІ РІРёРґРµРѕ
РџСЂРѕР±Р»РµРјС‹:

РџР»РµРµСЂ: 500 Internal Server Error - РѕС€РёР±РєР° РІ РєРѕРґРµ
Р’РёРґРµРѕ: 404 Not Found - С„Р°Р№Р» test_video.mp4 РЅРµ РЅР°Р№РґРµРЅ РІ R2

рџ› пёЏ Р‘С‹СЃС‚СЂРѕРµ РёСЃРїСЂР°РІР»РµРЅРёРµ
1. РЎРјРѕС‚СЂРёРј Р»РѕРіРё РѕС€РёР±РєРё
powershell# Р—Р°РїСѓСЃРєР°РµРј Р»РѕРіРё РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё
wrangler tail --env dev
Р—Р°С‚РµРј РІ РґСЂСѓРіРѕРј РѕРєРЅРµ PowerShell:
powershell# РўРµСЃС‚РёСЂСѓРµРј РїР»РµРµСЂ С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ РѕС€РёР±РєСѓ РІ Р»РѕРіР°С…
Invoke-WebRequest -Uri "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123"
2. Р’РѕР·РјРѕР¶РЅС‹Рµ РїСЂРёС‡РёРЅС‹ 500 РѕС€РёР±РєРё
Р’ РєРѕРґРµ РІРёР¶Сѓ РїРѕС‚РµРЅС†РёР°Р»СЊРЅСѓСЋ РїСЂРѕР±Р»РµРјСѓ:
javascript// Р­С‚Р° СЃС‚СЂРѕРєР° РјРѕР¶РµС‚ РїР°РґР°С‚СЊ РµСЃР»Рё С„Р°Р№Р»Р° РЅРµС‚ РІ R2
const contentObject = await env.R2.get(`content/${courseId}/${lessonId}.json`);
if (contentObject) {
  contentData = await contentObject.json(); // в†ђ РўСѓС‚ РјРѕР¶РµС‚ Р±С‹С‚СЊ РѕС€РёР±РєР°
}
3. Р‘С‹СЃС‚СЂС‹Р№ С„РёРєСЃ
РњРѕР¶РµС€СЊ РїРѕРїСЂРѕР±РѕРІР°С‚СЊ РІСЂРµРјРµРЅРЅРѕ Р·Р°РєРѕРјРјРµРЅС‚РёСЂРѕРІР°С‚СЊ Р·Р°РіСЂСѓР·РєСѓ РєРѕРЅС‚РµРЅС‚Р° РёР· R2:
javascript// Р’СЂРµРјРµРЅРЅРѕ РѕС‚РєР»СЋС‡Р°РµРј Р·Р°РіСЂСѓР·РєСѓ РёР· R2
let contentData = {
  display_title: null,
  description_points: ["РўРµСЃС‚РѕРІС‹Р№ РєРѕРЅС‚РµРЅС‚"],
  important_notes: ["Р’Р°Р¶РЅРѕРµ: РўРµСЃС‚РѕРІР°СЏ РІРµСЂСЃРёСЏ"],
  additional_resources: []
};

// try {
//   const contentObject = await env.R2.get(`content/${courseId}/${lessonId}.json`);
//   if (contentObject) {
//     contentData = await contentObject.json();
//   }
// } catch (error) {
//   console.error(`Error fetching content:`, error);
// }
Р—Р°РїСѓСЃС‚Рё wrangler tail --env dev Рё РїРѕРїСЂРѕР±СѓР№ РїР»РµРµСЂ - СѓРІРёРґРёРј С‚РѕС‡РЅСѓСЋ РѕС€РёР±РєСѓ!
Р§С‚Рѕ РїРѕРєР°Р¶СѓС‚ Р»РѕРіРё? рџ“‹RetryР’GET https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123 - Exception Thrown @ 30.06.2025, 23:50:47
X [ERROR]   ReferenceError: getImportantNotesHTML is not definedEditРќР°С€РµР» РїСЂРѕР±Р»РµРјСѓ! рџЋЇ
рџ”Ґ РћС€РёР±РєР°: getImportantNotesHTML is not defined
Р’ РєРѕРґРµ РµСЃС‚СЊ РІС‹Р·РѕРІ С„СѓРЅРєС†РёРё, РєРѕС‚РѕСЂР°СЏ РЅРµ РѕРїСЂРµРґРµР»РµРЅР°!
рџ› пёЏ Р‘С‹СЃС‚СЂРѕРµ РёСЃРїСЂР°РІР»РµРЅРёРµ
Р’ С„Р°Р№Р»Рµ worker.js РЅСѓР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ РЅРµРґРѕСЃС‚Р°СЋС‰СѓСЋ С„СѓРЅРєС†РёСЋ. РќР°Р№РґРё С„СѓРЅРєС†РёСЋ getLessonContentHTML Рё РґРѕР±Р°РІСЊ РїРѕСЃР»Рµ РЅРµРµ:
javascriptfunction getImportantNotesHTML(importantNotes) {
  if (!importantNotes || importantNotes.length === 0) {
    return '';
  }
  
  const notesHtml = importantNotes.map(note => `<p>${note}</p>`).join('');
  return `<div class="important-notes">
            <h3>Р’Р°Р¶РЅС‹Рµ РјРѕРјРµРЅС‚С‹</h3>
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
            <h3>Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹</h3>
            <ul>
                ${resourcesHtml}
            </ul>
        </div>`;
}
рџ“ќ Р”РµРїР»РѕР№ РёСЃРїСЂР°РІР»РµРЅРёСЏ
powershell# РЎРѕС…СЂР°РЅСЏР№ РёР·РјРµРЅРµРЅРёСЏ РІ worker.js Рё РґРµРїР»РѕР№
wrangler deploy --env dev
Р—Р°С‚РµРј РїСЂРѕРІРµСЂСЏР№:
powershellInvoke-WebRequest -Uri "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123"
Р”РѕР±Р°РІРёС€СЊ С„СѓРЅРєС†РёРё Рё Р·Р°РґРµРїР»РѕРёС€СЊ? РџР»РµРµСЂ РґРѕР»Р¶РµРЅ Р·Р°СЂР°Р±РѕС‚Р°С‚СЊ! рџљЂRetryР’РћС‚Р»РёС‡РЅРѕ, РЅРѕ РІРёРґРµРѕ РїРµСЂРµСЃС‚Р°Р»Рѕ РІРѕСЃРїСЂРѕРёР·РІРѕРґРёС‚СЊСЃСЏEditрџЋЇ РџСЂРѕР±Р»РµРјР° СЃ РІРёРґРµРѕ: С„Р°Р№Р» РЅРµ РЅР°Р№РґРµРЅ РІ R2
РР· Р»РѕРіРѕРІ РІРёРґРЅРѕ С‡С‚Рѕ test_video.mp4 РЅРµ РЅР°Р№РґРµРЅ. Р”Р°РІР°Р№ РїСЂРѕРІРµСЂРёРј С‡С‚Рѕ РµСЃС‚СЊ РІ R2 Рё РёСЃРїСЂР°РІРёРј РїСѓС‚Рё.
рџ”Ќ Р”РёР°РіРЅРѕСЃС‚РёРєР° R2
1. РџСЂРѕРІРµСЂРёРј С‡С‚Рѕ РµСЃС‚СЊ РІ R2 bucket
powershell# РЎРјРѕС‚СЂРёРј СЃРѕРґРµСЂР¶РёРјРѕРµ R2 bucket
wrangler r2 object list mastermarat-videos --env dev
2. РџСЂРѕРІРµСЂРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ РІ РєРѕРґРµ
Р’ COURSE_DATA СѓРєР°Р·Р°РЅРѕ:
javascript"week1_lesson1": {
  title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°",
  video_file: "test_video.mp4",  // в†ђ Р­С‚РѕС‚ С„Р°Р№Р» РёС‰РµС‚СЃСЏ
  thumbnail_file: "course1_week1_lesson1.jpg"
}
Worker РёС‰РµС‚ РІРёРґРµРѕ РїРѕ РїСѓС‚Рё: videos/course1/test_video.mp4
рџ› пёЏ Р‘С‹СЃС‚СЂС‹Рµ РІР°СЂРёР°РЅС‚С‹ РёСЃРїСЂР°РІР»РµРЅРёСЏ
Р’Р°СЂРёР°РЅС‚ 1: Р—Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚РѕРІРѕРµ РІРёРґРµРѕ
powershell# Р•СЃР»Рё РµСЃС‚СЊ С‚РµСЃС‚РѕРІРѕРµ РІРёРґРµРѕ Р»РѕРєР°Р»СЊРЅРѕ
wrangler r2 object put mastermarat-videos/videos/course1/test_video.mp4 --file="path/to/your/test-video.mp4" --env dev
Р’Р°СЂРёР°РЅС‚ 2: РР·РјРµРЅРёС‚СЊ РїСѓС‚СЊ РЅР° СЃСѓС‰РµСЃС‚РІСѓСЋС‰РёР№ С„Р°Р№Р»
Р•СЃР»Рё РІ R2 РµСЃС‚СЊ С„Р°Р№Р»С‹ СЃ РґСЂСѓРіРёРјРё РёРјРµРЅР°РјРё, РїРѕРјРµРЅСЏР№ РІ COURSE_DATA:
javascript"week1_lesson1": {
  title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°", 
  video_file: "real_filename.mp4", // в†ђ Р—Р°РјРµРЅРё РЅР° СЂРµР°Р»СЊРЅРѕРµ РёРјСЏ С„Р°Р№Р»Р°
  thumbnail_file: "course1_week1_lesson1.jpg"
}
Р’Р°СЂРёР°РЅС‚ 3: Р’СЂРµРјРµРЅРЅР°СЏ Р·Р°РіР»СѓС€РєР°
Р”РѕР±Р°РІСЊ РїСЂРѕРІРµСЂРєСѓ РІ РєРѕРґ РїРµСЂРµРґ РѕР±СЂР°С‰РµРЅРёРµРј Рє R2:
javascript// Р’ handlePlayerRequest, РїРµСЂРµРґ try-catch Р±Р»РѕРєРѕРј R2
console.log(`Looking for video: videos/${courseId}/${lessonData.video_file}`);
РЎРЅР°С‡Р°Р»Р° Р·Р°РїСѓСЃС‚Рё wrangler r2 object list mastermarat-videos --env dev - РїРѕСЃРјРѕС‚СЂРёРј С‡С‚Рѕ СЂРµР°Р»СЊРЅРѕ РµСЃС‚СЊ РІ R2! рџ“‚
Р§С‚Рѕ РїРѕРєР°Р¶РµС‚ СЃРїРёСЃРѕРє С„Р°Р№Р»РѕРІ?RetryР’Worker РёС‰РµС‚ РІРёРґРµРѕ РїРѕ РїСѓС‚Рё: videos/course1/test_video.mp4
СЏСЃРЅРѕ, СЏ РїРѕСЃРјРѕС‚СЂСЋ, РјРѕР¶РµС‚ Р±С‹С‚СЊ СЃС‚РѕРёС‚ СѓР¶Рµ СЂРµР°Р»СЊРЅС‹Рµ С‚РµРєСЃС‚С‹ Рё РІРёРґРµРѕ СЃС‚РѕРёС‚ Р·Р°РіСЂСѓР·РёС‚СЊ РЅР° R2EditРћС‚Р»РёС‡РЅР°СЏ РёРґРµСЏ! рџЋЇ РџРѕСЂР° РїРµСЂРµС…РѕРґРёС‚СЊ Рє СЂРµР°Р»СЊРЅРѕРјСѓ РєРѕРЅС‚РµРЅС‚Сѓ.
рџ“‹ РџР»Р°РЅ Р·Р°РіСЂСѓР·РєРё СЂРµР°Р»СЊРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
1. РЎС‚СЂСѓРєС‚СѓСЂР° С„Р°Р№Р»РѕРІ РґР»СЏ R2
mastermarat-videos/
в”њв”Ђв”Ђ videos/
в”‚   в””в”Ђв”Ђ course1/
в”‚       в”њв”Ђв”Ђ week1_lesson1.mp4
в”‚       в”њв”Ђв”Ђ week1_lesson2.mp4
в”‚       в”њв”Ђв”Ђ week2_lesson1.mp4
в”‚       в””в”Ђв”Ђ ...
в”њв”Ђв”Ђ thumbnails/
в”‚   в””в”Ђв”Ђ course1/
в”‚       в”њв”Ђв”Ђ week1_lesson1.jpg
в”‚       в”њв”Ђв”Ђ week1_lesson2.jpg
в”‚       в””в”Ђв”Ђ ...
в””в”Ђв”Ђ content/
    в””в”Ђв”Ђ course1/
        в”њв”Ђв”Ђ week1_lesson1.json
        в”њв”Ђв”Ђ week1_lesson2.json
        в””в”Ђв”Ђ ...
2. РћР±РЅРѕРІР»РµРЅРёРµ COURSE_DATA
РњРµРЅСЏРµРј СЃ test_video.mp4 РЅР° СЂРµР°Р»СЊРЅС‹Рµ РёРјРµРЅР°:
javascript"week1_lesson1": {
  title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°",
  video_file: "week1_lesson1.mp4", // в†ђ Р РµР°Р»СЊРЅРѕРµ РёРјСЏ
  thumbnail_file: "week1_lesson1.jpg"
}
3. РџРѕРґРіРѕС‚РѕРІРєР° РєРѕРЅС‚РµРЅС‚Р°
РќСѓР¶РЅРѕ РїРѕРґРіРѕС‚РѕРІРёС‚СЊ:

вњ… JSON С„Р°Р№Р»С‹ СЃ РѕРїРёСЃР°РЅРёСЏРјРё СѓСЂРѕРєРѕРІ (РїРѕ С€Р°Р±Р»РѕРЅСѓ week1_lesson1.json)
рџ“№ Р’РёРґРµРѕ СѓСЂРѕРєРё РѕС‚ РњР°СЂР°С‚Р° (РІ РїСЂР°РІРёР»СЊРЅРѕРј С„РѕСЂРјР°С‚Рµ)
рџ–јпёЏ Thumbnails РґР»СЏ РєР°Р¶РґРѕРіРѕ СѓСЂРѕРєР°

4. РљРѕРјР°РЅРґС‹ Р·Р°РіСЂСѓР·РєРё
powershell# Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ
wrangler r2 object put mastermarat-videos/videos/course1/week1_lesson1.mp4 --file="week1_lesson1.mp4" --env dev

# Р—Р°РіСЂСѓР·РєР° thumbnails
wrangler r2 object put mastermarat-videos/thumbnails/course1/week1_lesson1.jpg --file="week1_lesson1.jpg" --env dev

# Р—Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р°
wrangler r2 object put mastermarat-videos/content/course1/week1_lesson1.json --file="week1_lesson1.json" --env dev
РљР°РєРѕР№ РєРѕРЅС‚РµРЅС‚ Сѓ С‚РµР±СЏ СѓР¶Рµ РіРѕС‚РѕРІ?

Р•СЃС‚СЊ Р»Рё РІРёРґРµРѕ РѕС‚ РњР°СЂР°С‚Р°?
РќСѓР¶РЅРѕ Р»Рё СЃРѕР·РґР°С‚СЊ JSON РѕРїРёСЃР°РЅРёСЏ СѓСЂРѕРєРѕРІ?
Р•СЃС‚СЊ Р»Рё thumbnails РёР»Рё СЃРіРµРЅРµСЂРёСЂСѓРµРј?

Р Р°СЃСЃРєР°Р¶Рё С‡С‚Рѕ РµСЃС‚СЊ Рё С‡С‚Рѕ РЅСѓР¶РЅРѕ РїРѕРґРіРѕС‚РѕРІРёС‚СЊ! рџ“‚RetryР’Р•СЃС‚СЊ Р»Рё РІРёРґРµРѕ РѕС‚ РњР°СЂР°С‚Р°? - РµСЃС‚СЊ
РќСѓР¶РЅРѕ Р»Рё СЃРѕР·РґР°С‚СЊ JSON РѕРїРёСЃР°РЅРёСЏ СѓСЂРѕРєРѕРІ? -РµСЃС‚СЊ, С€Р°Р±Р»РѕРЅ Р·Р°РіСЂСѓР·РёР» РІ РїР°РїРєСѓ РїСЂРѕРµРєС‚Р°
Р•СЃС‚СЊ Р»Рё thumbnails РёР»Рё СЃРіРµРЅРµСЂРёСЂСѓРµРј? - РЅР°РїРёС€Рё С‡С‚Рѕ РїСЂРµРґР»Р°РіР°РµС€СЊ СЃ РіРµРЅРµСЂР°С†РёРµР№EditРћС‚Р»РёС‡РЅРѕ! РљРѕРЅС‚РµРЅС‚ РµСЃС‚СЊ. РџРѕ thumbnails РїСЂРµРґР»Р°РіР°СЋ РЅРµСЃРєРѕР»СЊРєРѕ РІР°СЂРёР°РЅС‚РѕРІ:
рџ–јпёЏ Р’Р°СЂРёР°РЅС‚С‹ РіРµРЅРµСЂР°С†РёРё thumbnails
Р’Р°СЂРёР°РЅС‚ 1: FFmpeg (Р±С‹СЃС‚СЂРѕ Рё РєР°С‡РµСЃС‚РІРµРЅРЅРѕ)
РР·РІР»РµРєР°РµРј РєР°РґСЂ РёР· СЃРµСЂРµРґРёРЅС‹ РєР°Р¶РґРѕРіРѕ РІРёРґРµРѕ:
powershell# Р”Р»СЏ РєР°Р¶РґРѕРіРѕ РІРёРґРµРѕ
ffmpeg -i week1_lesson1.mp4 -ss 00:02:00 -vframes 1 -q:v 2 week1_lesson1.jpg

# Batch СЃРєСЂРёРїС‚ РґР»СЏ РІСЃРµС… РІРёРґРµРѕ
Get-ChildItem *.mp4 | ForEach-Object {
    $name = $_.BaseName
    ffmpeg -i $_.Name -ss 00:02:00 -vframes 1 -q:v 2 "$name.jpg"
}
Р’Р°СЂРёР°РЅС‚ 2: РџСЂРѕСЃС‚С‹Рµ SVG Р·Р°РіР»СѓС€РєРё (РјРіРЅРѕРІРµРЅРЅРѕ)
Р“РµРЅРµСЂРёСЂСѓРµРј С‡РµСЂРµР· РєРѕРґ, РєР°Рє РІ РґРѕРєСѓРјРµРЅС‚Рµ "РњР°РєСЃРёРјР°Р»СЊРЅР°СЏ РѕРїС‚РёРјРёР·Р°С†РёСЏ":
javascriptfunction generateThumbnailSVG(lessonTitle, lessonNumber) {
  return `<svg width="320" height="180" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#2E8B57"/>
    <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="14" font-weight="bold">
      ${lessonTitle}
    </text>
    <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="16">
      в–¶пёЏ РЈСЂРѕРє ${lessonNumber}
    </text>
  </svg>`;
}
Р’Р°СЂРёР°РЅС‚ 3: РљСЂР°СЃРёРІС‹Рµ С€Р°Р±Р»РѕРЅС‹ (СЂРµРєРѕРјРµРЅРґСѓСЋ)
РЎРѕР·РґР°РµРј РµРґРёРЅС‹Р№ С€Р°Р±Р»РѕРЅ РІ Figma/Canva Рё Р°РґР°РїС‚РёСЂСѓРµРј:
рџ“ђ Р Р°Р·РјРµСЂ: 1280x720 (16:9)
рџЋЁ Р¤РѕРЅ: РіСЂР°РґРёРµРЅС‚ Р·РµР»РµРЅС‹Р№ (#2E8B57 в†’ #3D968C)
рџ“ќ РўРµРєСЃС‚: РЅР°Р·РІР°РЅРёРµ СѓСЂРѕРєР° + РЅРѕРјРµСЂ
рџ‘¤ Р›РѕРіРѕС‚РёРї MasterMarat
вљЎ РРєРѕРЅРєР° play РїРѕ С†РµРЅС‚СЂСѓ
рџљЂ РњРѕРё СЂРµРєРѕРјРµРЅРґР°С†РёРё
Р”Р»СЏ MVP (Р±С‹СЃС‚СЂС‹Р№ СЃС‚Р°СЂС‚):

FFmpeg - РёР·РІР»РµРєР°РµРј РєР°РґСЂС‹ РёР· РІРёРґРµРѕ
Р”РѕР±Р°РІР»СЏРµРј watermark СЃ РЅР°Р·РІР°РЅРёРµРј СѓСЂРѕРєР°
РЎС‚Р°РЅРґР°СЂС‚РёР·РёСЂСѓРµРј СЂР°Р·РјРµСЂ 1280x720

РљРѕРјР°РЅРґР° РґР»СЏ batch РѕР±СЂР°Р±РѕС‚РєРё:
powershell# РР·РІР»РµРєР°РµРј thumbnail РёР· РєР°Р¶РґРѕРіРѕ РІРёРґРµРѕ
Get-ChildItem videos\course1\*.mp4 | ForEach-Object {
    $output = "thumbnails\course1\$($_.BaseName).jpg"
    ffmpeg -i $_.FullName -ss 00:01:30 -vframes 1 -vf "scale=1280:720" -q:v 2 $output
}
РљР°РєРѕР№ РІР°СЂРёР°РЅС‚ С‚РµР±Рµ Р±РѕР»СЊС€Рµ РЅСЂР°РІРёС‚СЃСЏ?

FFmpeg РґР»СЏ РёР·РІР»РµС‡РµРЅРёСЏ РєР°РґСЂРѕРІ?
РџСЂРѕСЃС‚С‹Рµ SVG Р·Р°РіР»СѓС€РєРё?
РР»Рё РґРµР»Р°РµРј РєСЂР°СЃРёРІС‹Рµ С€Р°Р±Р»РѕРЅС‹?

РЈ С‚РµР±СЏ СѓСЃС‚Р°РЅРѕРІР»РµРЅ FFmpeg? рџЋ¬RetryР’FFmpeg?EditрџЋ¬ FFmpeg - С‡С‚Рѕ СЌС‚Рѕ Рё РЅСѓР¶РµРЅ Р»Рё РѕРЅ
FFmpeg - СЌС‚Рѕ РјРѕС‰РЅР°СЏ СѓС‚РёР»РёС‚Р° РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё РІРёРґРµРѕ/Р°СѓРґРёРѕ. РџРѕР·РІРѕР»СЏРµС‚ РёР·РІР»РµРєР°С‚СЊ РєР°РґСЂС‹ РёР· РІРёРґРµРѕ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ thumbnails.
рџ¤” РќСѓР¶РµРЅ Р»Рё FFmpeg РґР»СЏ РЅР°С€РµР№ Р·Р°РґР°С‡Рё?
РџР»СЋСЃС‹ FFmpeg:

вњ… РљР°С‡РµСЃС‚РІРµРЅРЅС‹Рµ thumbnails РёР· СЂРµР°Р»СЊРЅРѕРіРѕ РІРёРґРµРѕ
вњ… РђРІС‚РѕРјР°С‚РёР·Р°С†РёСЏ РґР»СЏ РІСЃРµС… С„Р°Р№Р»РѕРІ
вњ… РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚

РњРёРЅСѓСЃС‹:

вќЊ РќСѓР¶РЅРѕ СѓСЃС‚Р°РЅР°РІР»РёРІР°С‚СЊ (РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ СЃРѕС„С‚)
вќЊ Р’СЂРµРјСЏ РЅР° РёР·СѓС‡РµРЅРёРµ РєРѕРјР°РЅРґ
вќЊ РџРѕС‚РµРЅС†РёР°Р»СЊРЅС‹Рµ РїСЂРѕР±Р»РµРјС‹ СЃ РєРѕРґРµРєР°РјРё

рџ’Ў РђР»СЊС‚РµСЂРЅР°С‚РёРІС‹ Р±РµР· FFmpeg
Р’Р°СЂРёР°РЅС‚ 1: РџСЂРѕСЃС‚С‹Рµ SVG thumbnails (СЂРµРєРѕРјРµРЅРґСѓСЋ РґР»СЏ MVP)
РЎРѕР·РґР°РµРј РєСЂР°СЃРёРІС‹Рµ Р·Р°РіР»СѓС€РєРё РєРѕРґРѕРј - Р±С‹СЃС‚СЂРѕ Рё СЂР°Р±РѕС‚Р°РµС‚ РІРµР·РґРµ:
javascript// Р“РµРЅРµСЂРёСЂСѓРµРј SVG РґР»СЏ РєР°Р¶РґРѕРіРѕ СѓСЂРѕРєР°
const thumbnails = [
  { lesson: "week1_lesson1", title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ" },
  { lesson: "week1_lesson2", title: "РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё" }
];

thumbnails.forEach(item => {
  const svg = `<svg width="1280" height="720" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#2E8B57"/>
        <stop offset="100%" style="stop-color:#3D968C"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <text x="640" y="300" text-anchor="middle" fill="white" font-size="48" font-weight="bold">
      ${item.title}
    </text>
    <circle cx="640" cy="400" r="60" fill="rgba(255,255,255,0.2)"/>
    <polygon points="620,380 620,420 660,400" fill="white"/>
    <text x="640" y="500" text-anchor="middle" fill="white" font-size="32">
      MasterMarat.com
    </text>
  </svg>`;
  
  // РЎРѕС…СЂР°РЅСЏРµРј РєР°Рє ${item.lesson}.svg
});
Р’Р°СЂРёР°РЅС‚ 2: РћРЅР»Р°Р№РЅ РіРµРЅРµСЂР°С‚РѕСЂ
РСЃРїРѕР»СЊР·СѓРµРј Canva/Figma РґР»СЏ СЃРѕР·РґР°РЅРёСЏ С€Р°Р±Р»РѕРЅР°, Р·Р°С‚РµРј СЌРєСЃРїРѕСЂС‚РёСЂСѓРµРј.
рџЋЇ РњРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ
Р”Р»СЏ Р±С‹СЃС‚СЂРѕРіРѕ MVP:

РЎРѕР·РґР°РµРј SVG thumbnails РєРѕРґРѕРј (5 РјРёРЅСѓС‚)
Р—Р°РіСЂСѓР¶Р°РµРј РєРѕРЅС‚РµРЅС‚ РІ R2
РўРµСЃС‚РёСЂСѓРµРј СЂР°Р±РѕС‚Сѓ РїР»РµРµСЂР°
РџРѕС‚РѕРј РїСЂРё Р¶РµР»Р°РЅРёРё СѓР»СѓС‡С€Р°РµРј thumbnails

РРґРµРј РїРѕ СЌС‚РѕРјСѓ РїСѓС‚Рё? РР»Рё С…РѕС‡РµС€СЊ СѓСЃС‚Р°РЅРѕРІРёС‚СЊ FFmpeg?
РљР°РєРѕР№ РІР°СЂРёР°РЅС‚ РІС‹Р±РёСЂР°РµС€СЊ? рџљЂRetryР’FFmpeg
С‚Р°Рј РµСЃС‚СЊ GUI?EditрџЋ¬ FFmpeg GUI РІР°СЂРёР°РЅС‚С‹
РЎР°Рј FFmpeg - СЌС‚Рѕ РєРѕРЅСЃРѕР»СЊРЅР°СЏ СѓС‚РёР»РёС‚Р° (Р±РµР· GUI), РЅРѕ РµСЃС‚СЊ РѕС‚Р»РёС‡РЅС‹Рµ РіСЂР°С„РёС‡РµСЃРєРёРµ РѕР±РѕР»РѕС‡РєРё!
рџ–ҐпёЏ GUI РїСЂРѕРіСЂР°РјРјС‹ РЅР° Р±Р°Р·Рµ FFmpeg
1. HandBrake (СЂРµРєРѕРјРµРЅРґСѓСЋ)

вњ… РџСЂРѕСЃС‚РѕР№ Рё РїРѕРЅСЏС‚РЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ
вњ… РћС‚Р»РёС‡РЅР°СЏ РїРѕРґРґРµСЂР¶РєР° thumbnails
вњ… Р‘РµСЃРїР»Р°С‚РЅС‹Р№
рџ“Ґ РЎРєР°С‡Р°С‚СЊ: https://handbrake.fr/

2. FFmpeg Batch AV Converter

вњ… РЎРїРµС†РёР°Р»СЊРЅРѕ РґР»СЏ batch РѕР±СЂР°Р±РѕС‚РєРё
вњ… РџСЂРѕСЃС‚Р°СЏ РЅР°СЃС‚СЂРѕР№РєР° РёР·РІР»РµС‡РµРЅРёСЏ РєР°РґСЂРѕРІ
рџ“Ґ РЎРєР°С‡Р°С‚СЊ: https://ffmpeg-batch.sourceforge.io/

3. Shutter Encoder

вњ… РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ GUI РґР»СЏ FFmpeg
вњ… РњРЅРѕРіРѕ РїСЂРµРґСѓСЃС‚Р°РЅРѕРІРѕРє
рџ“Ґ РЎРєР°С‡Р°С‚СЊ: https://www.shutterencoder.com/

рџЋЇ Р”Р»СЏ РЅР°С€РµР№ Р·Р°РґР°С‡Рё (thumbnails)
РЎР°РјС‹Р№ РїСЂРѕСЃС‚РѕР№ РІР°СЂРёР°РЅС‚ - HandBrake:

РЈСЃС‚Р°РЅРѕРІРєР°: РЎРєР°С‡РёРІР°РµРј Рё СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј HandBrake
РќР°СЃС‚СЂРѕР№РєР°:

Source: РІС‹Р±РёСЂР°РµРј РІРёРґРµРѕ
Preset: "Fast 1080p30"
Pictures tab в†’ Still Images
Preview в†’ Р·Р°С…РІР°С‚С‹РІР°РµРј РєР°РґСЂ


Р РµР·СѓР»СЊС‚Р°С‚: РџРѕР»СѓС‡Р°РµРј РєР°С‡РµСЃС‚РІРµРЅРЅС‹Р№ thumbnail

вљЎ РђР»СЊС‚РµСЂРЅР°С‚РёРІР°: VLC Media Player
РЈ С‚РµР±СЏ РµСЃС‚СЊ VLC? РћРЅ С‚РѕР¶Рµ СѓРјРµРµС‚ РёР·РІР»РµРєР°С‚СЊ РєР°РґСЂС‹:

РћС‚РєСЂС‹РІР°РµРј РІРёРґРµРѕ РІ VLC
Video в†’ Take Snapshot (Ctrl+Alt+S)
РЎРѕС…СЂР°РЅСЏРµС‚СЃСЏ РІ РїР°РїРєСѓ "РњРѕРё СЂРёСЃСѓРЅРєРё"

рџ¤” РўРІРѕР№ РІС‹Р±РѕСЂ?

HandBrake - СЃРєР°С‡Р°С‚СЊ Рё СѓСЃС‚Р°РЅРѕРІРёС‚СЊ GUI
VLC - РµСЃР»Рё СѓР¶Рµ СѓСЃС‚Р°РЅРѕРІР»РµРЅ, РјРѕР¶РЅРѕ СЃСЂР°Р·Сѓ РїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ
РљРѕРјР°РЅРґРЅР°СЏ СЃС‚СЂРѕРєР° FFmpeg - РµСЃР»Рё РЅРµ Р±РѕРёС€СЊСЃСЏ РєРѕРЅСЃРѕР»Рё
SVG Р·Р°РіР»СѓС€РєРё - СЃР°РјС‹Р№ Р±С‹СЃС‚СЂС‹Р№ РІР°СЂРёР°РЅС‚

Р§С‚Рѕ РІС‹Р±РёСЂР°РµС€СЊ? РЎРєР°С‡РёРІР°РµРј HandBrake РёР»Рё РёСЃРїРѕР»СЊР·СѓРµРј VLC? рџЋ¬RetryР’РѕРєРµР№, Сѓ РјРµРЅСЏ С‚РµС…РЅРёС‡РµСЃРєРёР№ РІРѕРїСЂРѕСЃ РїРѕ СЃРѕС…СЂР°РЅРµРЅРёСЋ РЅР°С€РёС… СЃ С‚РѕР±РѕР№ С‡Р°С‚РѕРІ
С‡С‚РѕР± СЃРѕС…СЂР°РЅРёР»РѕСЃСЊ С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµEditрџ“‹ РЎРѕС…СЂР°РЅРµРЅРёРµ С‡Р°С‚РѕРІ СЃ С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµРј
Р•СЃС‚СЊ РЅРµСЃРєРѕР»СЊРєРѕ СЃРїРѕСЃРѕР±РѕРІ СЃРѕС…СЂР°РЅРёС‚СЊ РЅР°С€Рё РґРёР°Р»РѕРіРё РІ СѓРґРѕР±РЅРѕРј РІРёРґРµ:
рџ”§ РЎРїРѕСЃРѕР±С‹ СЃРѕС…СЂР°РЅРµРЅРёСЏ
1. Copy & Paste РІ Markdown (СЂРµРєРѕРјРµРЅРґСѓСЋ)

Р’С‹РґРµР»СЏР№ РІРµСЃСЊ С‡Р°С‚ Рё РєРѕРїРёСЂСѓР№
Р’СЃС‚Р°РІР»СЏР№ РІ VS Code СЃ СЂР°СЃС€РёСЂРµРЅРёРµРј .md
Р¤РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ СЃРѕС…СЂР°РЅСЏРµС‚СЃСЏ РїРѕС‡С‚Рё РїРѕР»РЅРѕСЃС‚СЊСЋ

2. Р‘СЂР°СѓР·РµСЂРЅРѕРµ СЂР°СЃС€РёСЂРµРЅРёРµ

"Save ChatGPT" - РґР»СЏ СЃРѕС…СЂР°РЅРµРЅРёСЏ С‡Р°С‚РѕРІ
"Web Clipper" - РѕС‚ Notion/Obsidian
РЎРѕС…СЂР°РЅСЏРµС‚ СЃ РїРѕР»РЅС‹Рј С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµРј

3. Print to PDF

Ctrl+P в†’ "РЎРѕС…СЂР°РЅРёС‚СЊ РєР°Рє PDF"
РҐРѕСЂРѕС€Рѕ СЃРѕС…СЂР°РЅСЏРµС‚ РІРёР·СѓР°Р»СЊРЅРѕРµ С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ
Р›РµРіРєРѕ Р°СЂС…РёРІРёСЂРѕРІР°С‚СЊ Рё РёСЃРєР°С‚СЊ

4. Р­РєСЃРїРѕСЂС‚ РІ РїСЂРѕРµРєС‚ (РґР»СЏ РЅР°С€РµРіРѕ СЃР»СѓС‡Р°СЏ)
powershell# РЎРѕР·РґР°РµРј РїР°РїРєСѓ РґР»СЏ С‡Р°С‚РѕРІ РІ РїСЂРѕРµРєС‚Рµ
mkdir C:\Projects\mastermaratcom\mastermarat-project\chats

# РЎРѕС…СЂР°РЅСЏРµРј РєР°Рє:
# 2025-06-30_[TECH]_Worker-debugging-session.md
# 2025-06-30_[DISCUSS]_Content-upload-strategy.md
рџЋЇ Р”Р»СЏ С‚РµС…РЅРёС‡РµСЃРєРёС… С‡Р°С‚РѕРІ (РєР°Рє РЅР°С€)
Р›СѓС‡С€РёР№ РїРѕРґС…РѕРґ:

РљРѕРїРёСЂСѓРµС€СЊ СЃРѕРґРµСЂР¶РёРјРѕРµ С‡Р°С‚Р°
РЎРѕР·РґР°РµС€СЊ С„Р°Р№Р» docs/chat-logs/2025-06-30_worker-troubleshooting.md
Р’СЃС‚Р°РІР»СЏРµС€СЊ Рё СЃРѕС…СЂР°РЅСЏРµС€СЊ РІ СЂРµРїРѕР·РёС‚РѕСЂРёРё РїСЂРѕРµРєС‚Р°
Commit РІ git - РёСЃС‚РѕСЂРёСЏ СЃРѕС…СЂР°РЅРµРЅР° РЅР°РІСЃРµРіРґР°!

рџ“Ѓ РЎС‚СЂСѓРєС‚СѓСЂР° РґР»СЏ РЅР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°
mastermarat-project/
в”њв”Ђв”Ђ docs/
в”‚   в”њв”Ђв”Ђ chat-logs/
в”‚   в”‚   в”њв”Ђв”Ђ 2025-06-30_worker-debugging.md
в”‚   в”‚   в”њв”Ђв”Ђ 2025-06-30_content-strategy.md
в”‚   в”‚   в””в”Ђв”Ђ ...
в”‚   в””в”Ђв”Ђ decisions/
в””в”Ђв”Ђ ...
РљР°РєРѕР№ СЃРїРѕСЃРѕР± С‚РµР±Рµ Р±РѕР»СЊС€Рµ РЅСЂР°РІРёС‚СЃСЏ?

РџСЂРѕСЃС‚РѕР№ copy-paste РІ VS Code?
PDF РґР»СЏ Р°СЂС…РёРІР°?
РРЅС‚РµРіСЂР°С†РёСЏ РІ РїСЂРѕРµРєС‚? рџ“‚
RetryР’Р”Р°РІР°Р№ РїРѕСЂР°Р·Р±РёСЂР°РµРјСЃСЏ СЃ РІРѕСЂРµРєСЂРѕРј.
РРјРµРµС‚ Р»Рё СЃРјС‹СЃР» СЃРѕР·РґР°РІР°С‚СЊ РЅРµСЃРєРѕР»СЊРєРѕ РІРѕСЂРєРµСЂРѕРІ?Editрџ¤” РћС‚Р»РёС‡РЅС‹Р№ РІРѕРїСЂРѕСЃ РїРѕ Р°СЂС…РёС‚РµРєС‚СѓСЂРµ!
Р”Р°РІР°Р№ СЂР°Р·Р±РµСЂРµРј РєРѕРіРґР° РёРјРµРµС‚ СЃРјС‹СЃР» СЂР°Р·РґРµР»СЏС‚СЊ РЅР° РЅРµСЃРєРѕР»СЊРєРѕ Workers.
рџ“‹ РџР»Р°РЅ Р°РЅР°Р»РёР·Р°

РўРµРєСѓС‰Р°СЏ СЃРёС‚СѓР°С†РёСЏ - С‡С‚Рѕ РґРµР»Р°РµС‚ РѕРґРёРЅ Worker СЃРµР№С‡Р°СЃ
Р’Р°СЂРёР°РЅС‚С‹ СЂР°Р·РґРµР»РµРЅРёСЏ - Р»РѕРіРёС‡РµСЃРєРёРµ РіСЂР°РЅРёС†С‹
РџР»СЋСЃС‹ Рё РјРёРЅСѓСЃС‹ - РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚СЊ vs СЃР»РѕР¶РЅРѕСЃС‚СЊ
Р РµРєРѕРјРµРЅРґР°С†РёРё - РґР»СЏ РЅР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°

рџЋЇ РўРµРєСѓС‰РёР№ Worker РґРµР»Р°РµС‚:
javascript// РћРґРёРЅ Worker РѕР±СЂР°Р±Р°С‚С‹РІР°РµС‚ Р’РЎРЃ:
- GET / (API РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ)
- GET /player/{courseId}/{lessonId} (HTML РїР»РµРµСЂ)
- GET /thumbnails/{courseId}/{file} (РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ)
- GET /video/{courseId}/{file}?token=X (Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ)
- POST /webhook/purchase (webhook РѕС‚ SendPulse)
рџ”„ Р’Р°СЂРёР°РЅС‚С‹ СЂР°Р·РґРµР»РµРЅРёСЏ
Р’Р°СЂРёР°РЅС‚ 1: РџРѕ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕСЃС‚Рё
worker-api.js          в†’ API + webhooks
worker-content.js      в†’ РІРёРґРµРѕ + thumbnails
worker-player.js       в†’ HTML РїР»РµРµСЂ
Р’Р°СЂРёР°РЅС‚ 2: РџРѕ СѓСЂРѕРІРЅСЋ РґРѕСЃС‚СѓРїР°
worker-public.js       в†’ thumbnails, РїР»РµРµСЂ, API doc
worker-protected.js    в†’ Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ + С‚РѕРєРµРЅС‹
worker-webhooks.js     в†’ РѕР±СЂР°Р±РѕС‚РєР° РїР»Р°С‚РµР¶РµР№
Р’Р°СЂРёР°РЅС‚ 3: РџРѕ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё
worker-streaming.js    в†’ С‚РѕР»СЊРєРѕ РІРёРґРµРѕ (РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅ РґР»СЏ R2)
worker-app.js         в†’ РІСЃС‘ РѕСЃС‚Р°Р»СЊРЅРѕРµ
вљ–пёЏ РџР»СЋСЃС‹ Рё РјРёРЅСѓСЃС‹ СЂР°Р·РґРµР»РµРЅРёСЏ
вњ… РџР»СЋСЃС‹ РЅРµСЃРєРѕР»СЊРєРёС… Workers:

РЎРїРµС†РёР°Р»РёР·Р°С†РёСЏ: РєР°Р¶РґС‹Р№ РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅ РїРѕРґ Р·Р°РґР°С‡Сѓ
РњР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ: РЅРµР·Р°РІРёСЃРёРјС‹Рµ Р»РёРјРёС‚С‹ CPU
Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ: РёР·РѕР»СЏС†РёСЏ РєСЂРёС‚РёС‡РЅС‹С… РѕРїРµСЂР°С†РёР№
Р”РµРїР»РѕР№: РјРѕР¶РЅРѕ РѕР±РЅРѕРІР»СЏС‚СЊ С‡Р°СЃС‚Рё РѕС‚РґРµР»СЊРЅРѕ

вќЊ РњРёРЅСѓСЃС‹ СЂР°Р·РґРµР»РµРЅРёСЏ:

РЎР»РѕР¶РЅРѕСЃС‚СЊ: Р±РѕР»СЊС€Рµ РєРѕРЅС„РёРіСѓСЂР°С†РёР№, СЂРѕСѓС‚РёРЅРіР°
CORS: РЅСѓР¶РЅРѕ РЅР°СЃС‚СЂР°РёРІР°С‚СЊ РјРµР¶РґСѓ Workers
РћС‚Р»Р°РґРєР°: СЃР»РѕР¶РЅРµРµ РёСЃРєР°С‚СЊ РїСЂРѕР±Р»РµРјС‹
Р—Р°С‚СЂР°С‚С‹: РІРѕР·РјРѕР¶РЅРѕ РїСЂРµРІС‹С€РµРЅРёРµ Free tier

рџЋЇ Р”Р»СЏ MasterMarat РїСЂРѕРµРєС‚Р°
РњРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ:
Р­С‚Р°Рї 1: MVP (СЃРµР№С‡Р°СЃ)
РћРґРёРЅ Worker - РІСЃС‘ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ. РџСЂРѕС‰Рµ РѕС‚Р»Р°Р¶РёРІР°С‚СЊ Рё СЂР°Р·РІРёРІР°С‚СЊ.
Р­С‚Р°Рї 2: РџСЂРё СЂРѕСЃС‚Рµ (500+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№)
Р Р°Р·РґРµР»РёС‚СЊ РЅР° 2 Workers:
api.mastermarat.com     в†’ РїР»РµРµСЂ, API, webhooks
media.mastermarat.com   в†’ С‚РѕР»СЊРєРѕ РІРёРґРµРѕ + thumbnails (РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅРЅС‹Р№)
Р­С‚Р°Рї 3: РџСЂРё РјР°СЃС€С‚Р°Р±Рµ (2000+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№)
3 СЃРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹С… Workers:
app.mastermarat.com     в†’ РїР»РµРµСЂ, API, СЃС‚Р°С‚РёРєР°
stream.mastermarat.com  в†’ С‚РѕР»СЊРєРѕ РІРёРґРµРѕ СЃС‚СЂРёРјРёРЅРі
webhooks.mastermarat.com в†’ РѕР±СЂР°Р±РѕС‚РєР° РїР»Р°С‚РµР¶РµР№
рџ’Ў РљРѕРіРґР° С‚РѕС‡РЅРѕ РЅСѓР¶РЅРѕ СЂР°Р·РґРµР»СЏС‚СЊ?

РџСЂРµРІС‹С€РµРЅРёРµ Р»РёРјРёС‚РѕРІ CPU РёР»Рё Р·Р°РїСЂРѕСЃРѕРІ РЅР° РѕРґРЅРѕРј Worker
Р Р°Р·РЅР°СЏ Р»РѕРіРёРєР° РєРµС€РёСЂРѕРІР°РЅРёСЏ (РІРёРґРµРѕ vs API)
Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ - РёР·РѕР»СЏС†РёСЏ С‚РѕРєРµРЅРѕРІ Рё РїР»Р°С‚РµР¶РµР№
Р“РµРѕРіСЂР°С„РёСЏ - СЂР°Р·РЅС‹Рµ СЂРµРіРёРѕРЅС‹ РґР»СЏ РєРѕРЅС‚РµРЅС‚Р°

рџљЂ РњРѕР№ РІРµСЂРґРёРєС‚ РґР»СЏ СЃРµР№С‡Р°СЃ
РћСЃС‚Р°РІР»СЏРµРј РѕРґРёРЅ Worker РїРѕС‚РѕРјСѓ С‡С‚Рѕ:

РџСЂРѕРµРєС‚ РІ MVP СЃС‚Р°РґРёРё
Р›РµРіС‡Рµ РѕС‚Р»Р°Р¶РёРІР°С‚СЊ
РќРµ РїСЂРµРІС‹С€Р°РµРј Р»РёРјРёС‚С‹
РњРѕР¶РµРј Р»РµРіРєРѕ СЂР°Р·РґРµР»РёС‚СЊ РїРѕС‚РѕРј

РЎРѕРіР»Р°СЃРµРЅ? РР»Рё РІРёРґРёС€СЊ РїСЂРёС‡РёРЅС‹ СЂР°Р·РґРµР»РёС‚СЊ СѓР¶Рµ СЃРµР№С‡Р°СЃ? рџ¤”RetryР’СЂР°Р·РјРµСЂ РєРѕРЅС‚РµРєСЃС‚Р° Сѓ РµРґРёРЅСЃС‚РІРµРЅРЅРѕРіРѕ РІРѕСЂРєРµСЂР° Р±РѕР»СЊС€Рµ, С‚РµР±Рµ СЃР»РѕР¶РЅРµРµ РґСѓРјР°С‚СЊ, РЅР°РІРµСЂРЅРѕРµ...Editрџ§  РРЅС‚РµСЂРµСЃРЅР°СЏ РјС‹СЃР»СЊ!
РќРѕ РЅРµС‚, СЂР°Р·РјРµСЂ РєРѕРґР° Worker'Р° РЅРµ РІР»РёСЏРµС‚ РЅР° РјРѕР№ РєРѕРЅС‚РµРєСЃС‚ Р°РЅР°Р»РёР·Р° - СЏ С‡РёС‚Р°СЋ РІРµСЃСЊ С„Р°Р№Р» С†РµР»РёРєРѕРј РЅРµР·Р°РІРёСЃРёРјРѕ РѕС‚ СЂР°Р·РјРµСЂР°.
рџ“Љ Р§С‚Рѕ РІР»РёСЏРµС‚ РЅР° СЃР»РѕР¶РЅРѕСЃС‚СЊ Р°РЅР°Р»РёР·Р°
РќР• РІР»РёСЏРµС‚:

Р Р°Р·РјРµСЂ С„Р°Р№Р»Р° worker.js (200 СЃС‚СЂРѕРє РёР»Рё 2000)
РљРѕР»РёС‡РµСЃС‚РІРѕ С„СѓРЅРєС†РёР№ РІ РѕРґРЅРѕРј С„Р°Р№Р»Рµ
РћР±СЉРµРј РєРѕРјРјРµРЅС‚Р°СЂРёРµРІ

Р’Р»РёСЏРµС‚ РЅР° СЃР»РѕР¶РЅРѕСЃС‚СЊ:

Р—Р°РїСѓС‚Р°РЅРЅР°СЏ Р»РѕРіРёРєР° РјРµР¶РґСѓ С„СѓРЅРєС†РёСЏРјРё
РћС‚СЃСѓС‚СЃС‚РІРёРµ СЂР°Р·РґРµР»РµРЅРёСЏ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё
РќРµРѕС‡РµРІРёРґРЅС‹Рµ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё

рџЋЇ Р РµР°Р»СЊРЅС‹Рµ РїСЂРѕР±Р»РµРјС‹ РЅР°С€РµРіРѕ Worker'Р°
javascript// вќЊ РџР РћР‘Р›Р•РњРђ: РІСЃС‘ РІ РѕРґРЅРѕРј fetch()
export default {
  async fetch(request, env, _ctx) {
    // 300+ СЃС‚СЂРѕРє СЂР°Р·РЅРѕР№ Р»РѕРіРёРєРё
    if (thumbnails) { ... }
    if (video) { ... }
    if (player) { ... }
    if (webhook) { ... }
  }
}

// вњ… Р›РЈР§РЁР•: СЂР°Р·РґРµР»РµРЅРЅР°СЏ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ
export default {
  async fetch(request, env, _ctx) {
    const router = new Router();
    router.get('/thumbnails/*', handleThumbnails);
    router.get('/video/*', handleVideo);
    router.get('/player/*', handlePlayer);
    router.post('/webhook/*', handleWebhook);
    return router.handle(request, env);
  }
}
рџ’Ў РџСЂРµРґР»РѕР¶РµРЅРёРµ
РќРµ СЂР°Р·РґРµР»СЏС‚СЊ РЅР° РЅРµСЃРєРѕР»СЊРєРѕ Workers, Р° СЂРµС„Р°РєС‚РѕСЂРёС‚СЊ РѕРґРёРЅ:
javascript// workers/api/src/
в”њв”Ђв”Ђ worker.js          // С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
в”њв”Ђв”Ђ handlers/
в”‚   в”њв”Ђв”Ђ thumbnails.js  // РѕР±СЂР°Р±РѕС‚РєР° thumbnails
в”‚   в”њв”Ђв”Ђ video.js       // Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ
в”‚   в”њв”Ђв”Ђ player.js      // HTML РїР»РµРµСЂ
в”‚   в””в”Ђв”Ђ webhooks.js    // SendPulse integration
в”њв”Ђв”Ђ utils/
в”‚   в”њв”Ђв”Ђ auth.js        // РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ
в”‚   в””в”Ђв”Ђ templates.js   // HTML РіРµРЅРµСЂР°С†РёСЏ
в””в”Ђв”Ђ constants/
    в””в”Ђв”Ђ courses.js     // COURSE_DATA
Р РµР·СѓР»СЊС‚Р°С‚: РўРѕС‚ Р¶Рµ Worker, РЅРѕ С‡РёСЃС‚С‹Р№ Рё РјРѕРґСѓР»СЊРЅС‹Р№ РєРѕРґ!
РҐРѕС‡РµС€СЊ Р·Р°СЂРµС„Р°РєС‚РѕСЂРёС‚СЊ С‚РµРєСѓС‰РёР№ Worker РґР»СЏ С‡РёС‚Р°РµРјРѕСЃС‚Рё? рџ”§RetryР’РїСЂРµРґР»Р°РіР°РµС€СЊ РІС‹РЅРµСЃС‚Рё СЃРєСЂРёРїС‚С‹ РёР· РІРѕСЂРєРµСЂР°?Editрџ¤” РЈС‚РѕС‡РЅСЋ С‡С‚Рѕ РёРјРµРµС€СЊ РІ РІРёРґСѓ РїРѕРґ "СЃРєСЂРёРїС‚Р°РјРё"
Р’ РЅР°С€РµРј Worker'Рµ РµСЃС‚СЊ СЂР°Р·РЅС‹Рµ РІРёРґС‹ РєРѕРґР°:
1. JavaScript Р»РѕРіРёРєР° (СЃРµСЂРІРµСЂРЅР°СЏ)
javascript// РћР±СЂР°Р±РѕС‚С‡РёРєРё Р·Р°РїСЂРѕСЃРѕРІ, СЂР°Р±РѕС‚Р° СЃ R2, С‚РѕРєРµРЅС‹
async function handleVideoAccess() { ... }
async function validateToken() { ... }
2. HTML + JavaScript (РєР»РёРµРЅС‚СЃРєРёР№)
javascript// Р“РµРЅРµСЂР°С†РёСЏ HTML РїР»РµРµСЂР° СЃ РІСЃС‚СЂРѕРµРЅРЅС‹Рј JS
const playerHTML = `
  <script>
    video.addEventListener('play', function() {
      console.log('Video started');
    });
  </script>
`;
3. РЎС‚Р°С‚РёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ
javascript// COURSE_DATA, РєРѕРЅС„РёРіСѓСЂР°С†РёРё
const COURSE_DATA = { ... }
рџЋЇ Р§С‚Рѕ РєРѕРЅРєСЂРµС‚РЅРѕ РІС‹РЅРѕСЃРёС‚СЊ?
Р’Р°СЂРёР°РЅС‚ A: РљР»РёРµРЅС‚СЃРєРёР№ JavaScript РѕС‚РґРµР»СЊРЅРѕ
workers/api/src/
в”њв”Ђв”Ђ worker.js           // С‚РѕР»СЊРєРѕ СЃРµСЂРІРµСЂРЅР°СЏ Р»РѕРіРёРєР°
в”њв”Ђв”Ђ templates/
в”‚   в”њв”Ђв”Ђ player.html     // HTML С€Р°Р±Р»РѕРЅ
в”‚   в””в”Ђв”Ђ player.js       // РєР»РёРµРЅС‚СЃРєРёР№ JS РѕС‚РґРµР»СЊРЅРѕ
в””в”Ђв”Ђ handlers/
    в””в”Ђв”Ђ player.js       // СЃРµСЂРІРµСЂРЅС‹Р№ РѕР±СЂР°Р±РѕС‚С‡РёРє
Р’Р°СЂРёР°РЅС‚ B: Р’СЃСЋ Р»РѕРіРёРєСѓ РІ РјРѕРґСѓР»Рё
workers/api/src/
в”њв”Ђв”Ђ worker.js           // С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
в”њв”Ђв”Ђ handlers/           // СЃРµСЂРІРµСЂРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё
в”њв”Ђв”Ђ templates/          // HTML РіРµРЅРµСЂР°С†РёСЏ
в”њв”Ђв”Ђ utils/              // РІСЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё
в””в”Ђв”Ђ constants/          // РґР°РЅРЅС‹Рµ РєСѓСЂСЃРѕРІ
Р’Р°СЂРёР°РЅС‚ C: РЎС‚Р°С‚РёРєСѓ РІ R2
// РљР»РёРµРЅС‚СЃРєРёР№ JS Р·Р°РіСЂСѓР¶Р°РµРј РёР· R2
<script src="https://api.mastermarat.com/static/player.js"></script>
рџ¤” РљР°РєРёРµ "СЃРєСЂРёРїС‚С‹" С‚С‹ РёРјРµРµС€СЊ РІ РІРёРґСѓ?

РљР»РёРµРЅС‚СЃРєРёР№ JavaScript РёР· HTML РїР»РµРµСЂР°?
РЎРµСЂРІРµСЂРЅСѓСЋ Р»РѕРіРёРєСѓ РѕР±СЂР°Р±РѕС‚С‡РёРєРѕРІ?
РЎС‚Р°С‚РёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ С‚РёРїР° COURSE_DATA?
Р’СЃРµ РІРјРµСЃС‚Рµ - РїРѕР»РЅР°СЏ РјРѕРґСѓР»СЏСЂРёР·Р°С†РёСЏ?

РЈС‚РѕС‡РЅРё РєР°РєСѓСЋ С‡Р°СЃС‚СЊ С…РѕС‡РµС€СЊ РІС‹РЅРµСЃС‚Рё? рџЋЇRetryР’РЅР°РґРѕ СЂРµС„Р°РєС‚РѕСЂРёС‚СЊ СѓР¶Рµ, РїСЂРµРґР»Р°РіР°Р№ РєР°Рє Р»РѕРіРёС‡РЅРµРµ, РјРµРЅСЏ СЃРјСѓС‰Р°СЋС‚ 1000 СЃС‚СЂРѕРє РІ РѕРґРЅРѕРј СЃРєСЂРёРїС‚Рµ РёС… СЃРєРѕСЂРѕ Р±СѓС‚РµС‚ 2000, Р° РїРѕС‚РѕРј Рё 3000
Р•С‰Рµ РЅРµСЃРєРѕР»СЊРєРѕ РјРѕРёС… РјС‹СЃР»РµР№ РґР»СЏ СЂРµР°Р»РёР·Р°С†РёРё:
1.Р’ С‚РµРєСѓС‰РµРј РєР»РёРµРЅС‚Рµ РµСЃС‚СЊ РЅР°РІРёРіР°С†РёСЏ, РЅСѓР¶РЅРѕ Р±СѓРґРµС‚ СЃРґРµР»Р°С‚СЊ 2 РІР°СЂРёР°РЅС‚Р°
Р°.РџРѕ СЃСЃС‹Р»РєРµ РёР· РїРёСЃСЊРјР° - РїР»РµРµСЂ Р±РµР· РЅР°РІРёРіР°С†РёРё РІРѕРѕР±С‰Рµ РґР»СЏ РїСЂРѕС†РµСЃСЃР° РѕР±СѓС‡РµРЅРёСЏ, СѓС‡РµРЅРёРє РЅРµ РґРѕР»Р¶РµРЅ РІС‹РґРµС‚СЊ С‡С‚Рѕ РІ РєСѓСЂСЃРµ РґР°Р»СЊС€Рµ СЂР°РЅСЊС€Рµ РІСЂРµРјРµРЅРё
Р±.РџРѕ РѕРєРѕРЅС‡Р°РЅРёСЋ РєСѓСЂСЃР° РєР»РёРµРЅС‚ РїРѕР»СѓС‡РёС‚ СЃСЃС‹Р»РєСѓ РЅР° РїР»РµРµСЂ СЃ РЅР°РІРёРіР°С†РёРµР№ РїРѕ РІСЃРµРјСѓ РѕРїР»Р°С‡РµРЅРЅРѕРјСѓ РєСѓСЂСЃСѓ РЅР° СЃСЂРѕРє РґРѕ РѕРєРѕРЅС‡Р°РЅРёСЏ РїРѕРґРїРёСЃРєРё (3-6-12 РјРµСЃСЏС†РµРІ СЃ РґР°С‚С‹ РѕРїР»Р°С‚С‹ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РІС‹Р±СЂР°РЅРЅРѕРіРѕ С‚Р°СЂРёС„Р°) РљР°Рє СЂРµР°Р»РёР·РѕРІР°С‚СЊ? РњРѕР¶РЅРѕ Р»Рё Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РЅР°СЏРІРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°, РЅСѓР¶РЅРѕРіРѕ РґР»СЏ РіРµРЅРµСЂР°С†РёРё, РІ РїР°РїРєР°С… R2?
2.D1 РјС‹ РЅРµ РёСЃРїРѕР»СЊР·СѓРµРј, С‚С‹ Р¶Рµ РІ РєСѓСЂСЃРµ? Р”Р°С‚С‹ РїРѕРєСѓРїРѕРє Рё РїСЂРѕС‡РµРµ С„РёРєСЃРёСЂСѓРµРј РІ Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРµ Рё РѕС‚С‚СѓРґР° Р·Р°Р±РёСЂР°РµРј, РєРѕРіРґР° РЅР°РґРѕ
 Р’РѕСЂРєРµСЂ РјРѕР¶РЅРѕ РѕРїР»Р°С‚РёС‚СЊ, РѕРЅ СЃС‚РѕРёС‚ 5$ РІ РјРµСЃСЏС† СѓР±РµСЂРµРј Р»РёРјРёС‚С‹, РѕРїС‚РёРјРёР·Р°С†РёСЏ РЅРµ РїСЂРёРѕСЂРёС‚РµС‚, РЅРѕ РЅСѓР¶РЅРѕ СЃС‚Р°С‚Р°С‚СЊСЃСЏ СЃРґРµР»Р°С‚СЊ РјРёРЅРёРјР°Р»СЊРЅСѓСЋ РѕРїС‚РёРјРёР·Р°С†РёСЋ РЅР° СЌС‚Р°РїРµ РїСЂРѕРµРєС‚РёСЂРѕРІР°РЅРёСЏ.Editрџ“‹ РћС‚Р»РёС‡РЅС‹Р№ РїР»Р°РЅ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°!
РЎРѕРіР»Р°СЃРµРЅ - 1000+ СЃС‚СЂРѕРє РЅСѓР¶РЅРѕ СЂР°Р·Р±РёРІР°С‚СЊ. РџР»СЋСЃ С‚РІРѕРё РёРґРµРё РїСЂРѕ РЅР°РІРёРіР°С†РёСЋ Рё Р±РµР· D1 РѕС‡РµРЅСЊ Р»РѕРіРёС‡РЅС‹.
рџЏ—пёЏ РџСЂРµРґР»Р°РіР°РµРјР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°
workers/api/src/
в”њв”Ђв”Ђ worker.js                 // С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі (50 СЃС‚СЂРѕРє)
в”њв”Ђв”Ђ config/
в”‚   в”њв”Ђв”Ђ courses.js           // COURSE_DATA
в”‚   в””в”Ђв”Ђ constants.js         // РЅР°СЃС‚СЂРѕР№РєРё, Р»РёРјРёС‚С‹
в”њв”Ђв”Ђ handlers/
в”‚   в”њв”Ђв”Ђ api.js              // GET / - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ
в”‚   в”њв”Ђв”Ђ thumbnails.js       // РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ
в”‚   в”њв”Ђв”Ђ video.js            // Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ
в”‚   в”њв”Ђв”Ђ player.js           // HTML РїР»РµРµСЂ (2 СЂРµР¶РёРјР°)
в”‚   в””в”Ђв”Ђ webhooks.js         // SendPulse integration
в”њв”Ђв”Ђ services/
в”‚   в”њв”Ђв”Ђ auth.js             // РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ
в”‚   в”њв”Ђв”Ђ sendpulse.js        // СЂР°Р±РѕС‚Р° СЃ SendPulse API
в”‚   в””в”Ђв”Ђ content.js          // СЂР°Р±РѕС‚Р° СЃ R2 РєРѕРЅС‚РµРЅС‚РѕРј
в”њв”Ђв”Ђ templates/
в”‚   в”њв”Ђв”Ђ player-learning.js  // РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (Р±РµР· РЅР°РІРёРіР°С†РёРё)
в”‚   в”њв”Ђв”Ђ player-archive.js   // РїР»РµРµСЂ-Р°СЂС…РёРІ (СЃ РЅР°РІРёРіР°С†РёРµР№)
в”‚   в””в”Ђв”Ђ shared.js           // РѕР±С‰РёРµ HTML РєРѕРјРїРѕРЅРµРЅС‚С‹
в””в”Ђв”Ђ utils/
    в”њв”Ђв”Ђ token.js            // РіРµРЅРµСЂР°С†РёСЏ/РІР°Р»РёРґР°С†РёСЏ С‚РѕРєРµРЅРѕРІ
    в”њв”Ђв”Ђ navigation.js       // Р»РѕРіРёРєР° РЅР°РІРёРіР°С†РёРё
    в””в”Ђв”Ђ r2-scanner.js       // СЃРєР°РЅРёСЂРѕРІР°РЅРёРµ РґРѕСЃС‚СѓРїРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
рџЋЇ Р”РІР° С‚РёРїР° РїР»РµРµСЂР°
Р РµР¶РёРј "РћР±СѓС‡РµРЅРёРµ" (РёР· email)
javascript// URL: /player/learning/{courseId}/{lessonId}?token=xxx
// Р¤СѓРЅРєС†РёРё:
- РўРѕР»СЊРєРѕ С‚РµРєСѓС‰РёР№ СѓСЂРѕРє
- РќРёРєР°РєРѕР№ РЅР°РІРёРіР°С†РёРё
- РќРµС‚ РёРЅС„РѕСЂРјР°С†РёРё Рѕ РґСЂСѓРіРёС… СѓСЂРѕРєР°С…
- Watermark СЃ email
Р РµР¶РёРј "РђСЂС…РёРІ" (РїРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ)
javascript// URL: /player/archive/{courseId}?token=xxx
// Р¤СѓРЅРєС†РёРё:
- РџРѕР»РЅР°СЏ РЅР°РІРёРіР°С†РёСЏ РїРѕ РєСѓСЂСЃСѓ
- РЎРїРёСЃРѕРє РІСЃРµС… РґРѕСЃС‚СѓРїРЅС‹С… СѓСЂРѕРєРѕРІ
- РџСЂРѕРіСЂРµСЃСЃ-Р±Р°СЂ РєСѓСЂСЃР°
- РџРѕРёСЃРє РїРѕ СѓСЂРѕРєР°Рј
рџ¤– РђРІС‚РѕРіРµРЅРµСЂР°С†РёСЏ РЅР°РІРёРіР°С†РёРё РёР· R2
javascript// services/content.js
async function scanAvailableContent(courseId, userToken, env) {
  // 1. Р’Р°Р»РёРґРёСЂСѓРµРј С‚РѕРєРµРЅ Рё РїРѕР»СѓС‡Р°РµРј РїСЂР°РІР° РґРѕСЃС‚СѓРїР°
  const userAccess = await validateTokenAccess(userToken);
  
  // 2. РЎРєР°РЅРёСЂСѓРµРј С‡С‚Рѕ РµСЃС‚СЊ РІ R2
  const contentList = await env.R2.list({
    prefix: `content/${courseId}/`
  });
  
  // 3. Р¤РёР»СЊС‚СЂСѓРµРј РїРѕ РїСЂР°РІР°Рј РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
  const availableLessons = contentList.objects
    .filter(obj => userHasAccessToLesson(obj.key, userAccess))
    .map(obj => parseContentKey(obj.key));
    
  // 4. Р“СЂСѓРїРїРёСЂСѓРµРј РїРѕ РЅРµРґРµР»СЏРј
  return groupLessonsByWeek(availableLessons);
}
рџ”— РРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse (Р±РµР· D1)
javascript// services/sendpulse.js
async function getUserSubscriptionInfo(email) {
  // РџРѕР»СѓС‡Р°РµРј РґР°РЅРЅС‹Рµ РёР· SendPulse Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРё
  const contact = await sendPulseAPI.getContact(email);
  
  return {
    purchaseDate: contact.variables.purchase_date,
    subscriptionType: contact.variables.subscription_type,
    expiryDate: contact.variables.expiry_date,
    coursesAccess: contact.variables.courses_access
  };
}

async function updateUserProgress(email, courseId, lessonId) {
  // РћР±РЅРѕРІР»СЏРµРј РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
  await sendPulseAPI.updateContact(email, {
    [`progress_${courseId}`]: lessonId,
    last_activity: new Date().toISOString()
  });
}
рџ’° РџР»Р°С‚РЅС‹Р№ Worker (Р±РµР· Р»РёРјРёС‚РѕРІ)
Р”Р°, Р·Р° $5/РјРµСЃ СѓР±РёСЂР°РµРј РІСЃРµ Р»РёРјРёС‚С‹! РўРѕРіРґР° РјРѕР¶РµРј:

РќРµ РїР°СЂРёС‚СЊСЃСЏ СЃ РѕРїС‚РёРјРёР·Р°С†РёРµР№ Р·Р°РїСЂРѕСЃРѕРІ
Р”РµР»Р°С‚СЊ Р±РѕР»РµРµ Р±РѕРіР°С‚С‹Рµ HTML СЃС‚СЂР°РЅРёС†С‹
Р”РѕР±Р°РІРёС‚СЊ РїРѕРґСЂРѕР±РЅРѕРµ Р»РѕРіРёСЂРѕРІР°РЅРёРµ
РљРµС€РёСЂРѕРІР°С‚СЊ Р°РіСЂРµСЃСЃРёРІРЅРµРµ

рџљЂ РџР»Р°РЅ СЂРµР°Р»РёР·Р°С†РёРё

Р РµС„Р°РєС‚РѕСЂРёРЅРі - СЂР°Р·Р±РёРІР°РµРј РЅР° РјРѕРґСѓР»Рё (1-2 РґРЅСЏ)
Р”РІР° РїР»РµРµСЂР° - learning vs archive СЂРµР¶РёРјС‹ (1 РґРµРЅСЊ)
R2 СЃРєР°РЅРµСЂ - Р°РІС‚РѕРіРµРЅРµСЂР°С†РёСЏ РЅР°РІРёРіР°С†РёРё (1 РґРµРЅСЊ)
SendPulse API - РёРЅС‚РµРіСЂР°С†РёСЏ Р±РµР· D1 (1 РґРµРЅСЊ)
РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ - РїСЂРѕРІРµСЂРєР° РІСЃРµС… СЃС†РµРЅР°СЂРёРµРІ (1 РґРµРЅСЊ)

РќР°С‡РёРЅР°РµРј СЃ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°? РЎРѕР·РґР°С‚СЊ СЃС‚СЂСѓРєС‚СѓСЂСѓ РїР°РїРѕРє Рё СЂР°Р·Р±РёС‚СЊ worker.js РЅР° РјРѕРґСѓР»Рё?
РР»Рё СЃРЅР°С‡Р°Р»Р° С…РѕС‡РµС€СЊ РѕР±СЃСѓРґРёС‚СЊ Р»РѕРіРёРєСѓ С‚РѕРєРµРЅРѕРІ РґР»СЏ РґРІСѓС… СЂРµР¶РёРјРѕРІ РїР»РµРµСЂР°? рџ¤”RetryР’РљР°РєРёРµ С‚РµРєСѓС‰РёРµ РѕР±РЅРѕРІР»РµРЅРЅС‹Рµ СЃРєСЂРёРїС‚С‹ Рё РЅР°СЃС‚СЂРѕР№РєРё С‚РµР±Рµ Р·Р°Р»РёС‚СЊ РІ РїР°РїРєСѓ РїСЂРѕРµРєС‚Р°?Editрџ“‹ РЎРїРёСЃРѕРє С‚РµРєСѓС‰РёС… С„Р°Р№Р»РѕРІ РґР»СЏ Р·Р°Р»РёРІРєРё
Р§С‚РѕР±С‹ РїСЂРѕР°РЅР°Р»РёР·РёСЂРѕРІР°С‚СЊ Р°РєС‚СѓР°Р»СЊРЅРѕРµ СЃРѕСЃС‚РѕСЏРЅРёРµ Рё СЃРїР»Р°РЅРёСЂРѕРІР°С‚СЊ СЂРµС„Р°РєС‚РѕСЂРёРЅРі, РјРЅРµ РЅСѓР¶РЅС‹:
рџЋЇ РљСЂРёС‚РёС‡РµСЃРєРё РІР°Р¶РЅС‹Рµ С„Р°Р№Р»С‹
1. РћСЃРЅРѕРІРЅРѕР№ Worker
workers/api/src/worker.js  // С‚РµРєСѓС‰РёР№ РѕР±РЅРѕРІР»РµРЅРЅС‹Р№ РІРѕСЂРєРµСЂ (1000+ СЃС‚СЂРѕРє)
2. РљРѕРЅС„РёРіСѓСЂР°С†РёРё Cloudflare
workers/api/wrangler.toml  // Р°РєС‚СѓР°Р»СЊРЅС‹Рµ РЅР°СЃС‚СЂРѕР№РєРё dev/prod
workers/api/package.json   // Р·Р°РІРёСЃРёРјРѕСЃС‚Рё Рё СЃРєСЂРёРїС‚С‹
3. РљРѕРЅС‚РµРЅС‚ СЃС‚СЂСѓРєС‚СѓСЂС‹
content/course1/week1_lesson1.json  // РїСЂРёРјРµСЂ СЃС‚СЂСѓРєС‚СѓСЂС‹ РєРѕРЅС‚РµРЅС‚Р°
content/course1/week1_lesson2.json  // РµСЃР»Рё РµСЃС‚СЊ РµС‰Рµ
// РёР»Рё Р»СЋР±С‹Рµ JSON С„Р°Р№Р»С‹ РєРѕРЅС‚РµРЅС‚Р° С‡С‚Рѕ СѓР¶Рµ РїРѕРґРіРѕС‚РѕРІР»РµРЅС‹
4. РџСЂРѕРµРєС‚РЅС‹Рµ РєРѕРЅС„РёРіРё
.gitignore           // Р°РєС‚СѓР°Р»СЊРЅР°СЏ РІРµСЂСЃРёСЏ
.eslintrc.js         // РµСЃР»Рё РѕР±РЅРѕРІР»СЏР»СЃСЏ  
.prettierrc          // РµСЃР»Рё РѕР±РЅРѕРІР»СЏР»СЃСЏ
README.md            // РµСЃР»Рё РµСЃС‚СЊ РѕРїРёСЃР°РЅРёРµ С‚РµРєСѓС‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ
рџ¤” РћРїС†РёРѕРЅР°Р»СЊРЅРѕ (РµСЃР»Рё РµСЃС‚СЊ РёР·РјРµРЅРµРЅРёСЏ)
5. Р•СЃР»Рё СЃРѕР·РґР°РІР°Р»РёСЃСЊ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ С„Р°Р№Р»С‹
scripts/deploy.js    // СЃРєСЂРёРїС‚С‹ РґРµРїР»РѕСЏ РµСЃР»Рё РµСЃС‚СЊ
docs/api.md          // РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ РµСЃР»Рё РІРµР»Р°СЃСЊ
Р»СЋР±С‹Рµ РґСЂСѓРіРёРµ РЅРѕРІС‹Рµ С„Р°Р№Р»С‹ РІ РїСЂРѕРµРєС‚Рµ
рџЋЇ РџСЂРёРѕСЂРёС‚РµС‚РЅРѕСЃС‚СЊ
РћР±СЏР·Р°С‚РµР»СЊРЅРѕ РЅСѓР¶РЅС‹:

workers/api/src/worker.js - РѕСЃРЅРѕРІР° РґР»СЏ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°
wrangler.toml - РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ РѕРєСЂСѓР¶РµРЅРёР№
РџСЂРёРјРµСЂС‹ JSON РєРѕРЅС‚РµРЅС‚Р° - РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ СЃС‚СЂСѓРєС‚СѓСЂС‹ РґР°РЅРЅС‹С…

РћСЃС‚Р°Р»СЊРЅРѕРµ РїРѕ Р¶РµР»Р°РЅРёСЋ - РґР»СЏ РїРѕР»РЅРѕС‚С‹ РєР°СЂС‚РёРЅС‹.
РљР°РєРёРµ РёР· СЌС‚РёС… С„Р°Р№Р»РѕРІ Сѓ С‚РµР±СЏ РµСЃС‚СЊ РІ Р°РєС‚СѓР°Р»СЊРЅРѕР№ РІРµСЂСЃРёРё?
Р—Р°Р»РёРІР°Р№ РІ Р»СЋР±РѕРј РїРѕСЂСЏРґРєРµ, РЅР°С‡РЅРµРј Р°РЅР°Р»РёР·! рџљЂRetryР’Р·Р°Р»РёР» РІСЃРµ С‡С‚Рѕ РµСЃС‚СЊ РІ РїР°РїРєСѓ РїСЂРѕРµРєС‚Р°, С‚РІРѕР№ С…РѕРґEditРћС‚Р»РёС‡РЅРѕ! РР·СѓС‡РёР» РІСЃРµ С„Р°Р№Р»С‹. Р’РёР¶Сѓ РїРѕР»РЅСѓСЋ РєР°СЂС‚РёРЅСѓ РїСЂРѕРµРєС‚Р°! рџЋЇ
рџ“Љ РђРЅР°Р»РёР· С‚РµРєСѓС‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ
вњ… Р§С‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ С…РѕСЂРѕС€Рѕ

РЎС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р° - С‡РµС‚РєР°СЏ РѕСЂРіР°РЅРёР·Р°С†РёСЏ С„Р°Р№Р»РѕРІ
РљРѕРЅС„РёРіСѓСЂР°С†РёРё - РїСЂР°РІРёР»СЊРЅС‹Рµ wrangler.toml, package.json, Р»РёРЅС‚РµСЂС‹
JSON РєРѕРЅС‚РµРЅС‚ - С…РѕСЂРѕС€РёР№ С€Р°Р±Р»РѕРЅ РґР»СЏ СѓСЂРѕРєРѕРІ
Git workflow - .gitignore РЅР°СЃС‚СЂРѕРµРЅ РїСЂР°РІРёР»СЊРЅРѕ

рџ”Ґ РџСЂРѕР±Р»РµРјС‹ РґР»СЏ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°

worker.js: 500+ СЃС‚СЂРѕРє РІ РѕРґРЅРѕРј С„Р°Р№Р»Рµ (СЃРєРѕСЂРѕ Р±СѓРґРµС‚ 2000+)
РЎРјРµС€Р°РЅРЅР°СЏ Р»РѕРіРёРєР° - HTML РіРµРЅРµСЂР°С†РёСЏ + API + РІРёРґРµРѕ + webhooks
Р”СѓР±Р»РёСЂРѕРІР°РЅРЅС‹Р№ РєРѕРґ - РЅРµСЃРєРѕР»СЊРєРѕ РІРµСЂСЃРёР№ РїР»РµРµСЂР° РІ РѕРґРЅРѕРј С„Р°Р№Р»Рµ
РЎР»РѕР¶РЅРѕРµ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ - РІСЃС‘ РІ РѕРґРЅРѕР№ С„СѓРЅРєС†РёРё fetch()

рџЏ—пёЏ РџР»Р°РЅ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°
Р­С‚Р°Рї 1: РЎРѕР·РґР°РЅРёРµ РјРѕРґСѓР»СЊРЅРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹ (СЃРµРіРѕРґРЅСЏ)
workers/api/src/
в”њв”Ђв”Ђ worker.js                 // С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі (30 СЃС‚СЂРѕРє)
в”њв”Ђв”Ђ config/
в”‚   в”њв”Ђв”Ђ courses.js           // COURSE_DATA РёР· С‚РµРєСѓС‰РµРіРѕ worker.js
в”‚   в””в”Ђв”Ђ constants.js         // URL endpoints, РЅР°СЃС‚СЂРѕР№РєРё
в”њв”Ђв”Ђ handlers/
в”‚   в”њв”Ђв”Ђ api.js              // GET / - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
в”‚   в”њв”Ђв”Ђ thumbnails.js       // GET /thumbnails/*
в”‚   в”њв”Ђв”Ђ video.js            // GET /video/* + Range requests
в”‚   в”њв”Ђв”Ђ player-learning.js  // GET /player/* (РёР· email, Р±РµР· РЅР°РІРёРіР°С†РёРё)
в”‚   в”њв”Ђв”Ђ player-archive.js   // GET /archive/* (СЃ РїРѕР»РЅРѕР№ РЅР°РІРёРіР°С†РёРµР№)
в”‚   в””в”Ђв”Ђ webhooks.js         // POST /webhook/*
в”њв”Ђв”Ђ services/
в”‚   в”њв”Ђв”Ђ auth.js             // РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ + SendPulse API
в”‚   в”њв”Ђв”Ђ content.js          // Р·Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РёР· R2
в”‚   в””в”Ђв”Ђ navigation.js       // Р°РІС‚РѕРіРµРЅРµСЂР°С†РёСЏ РЅР°РІРёРіР°С†РёРё РёР· R2
в”њв”Ђв”Ђ templates/
в”‚   в”њв”Ђв”Ђ base.js             // РѕР±С‰РёРµ HTML РєРѕРјРїРѕРЅРµРЅС‚С‹
в”‚   в”њв”Ђв”Ђ player-learning.js  // РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ
в”‚   в””в”Ђв”Ђ player-archive.js   // РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№
в””в”Ђв”Ђ utils/
    в”њв”Ђв”Ђ cors.js             // CORS headers
    в”њв”Ђв”Ђ errors.js           // РѕР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
    в””в”Ђв”Ђ token.js            // РіРµРЅРµСЂР°С†РёСЏ С‚РѕРєРµРЅРѕРІ
Р­С‚Р°Рї 2: Р РµР°Р»РёР·Р°С†РёСЏ РґРІСѓС… С‚РёРїРѕРІ РїР»РµРµСЂР°
/player/learning/{courseId}/{lessonId}?token=xxx    // РёР· email
/player/archive/{courseId}?token=xxx                // РїРѕСЃР»Рµ РєСѓСЂСЃР°
Р­С‚Р°Рї 3: SendPulse РёРЅС‚РµРіСЂР°С†РёСЏ Р±РµР· D1
javascript// Р’СЃРµ РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№ РІ SendPulse Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРµ:
// - purchase_date, expiry_date
// - subscription_type, courses_access  
// - progress_course1, last_activity
рџљЂ РҐРѕС‡РµС€СЊ РЅР°С‡Р°С‚СЊ СЂРµС„Р°РєС‚РѕСЂРёРЅРі?
РџСЂРµРґР»Р°РіР°СЋ РїРѕС€Р°РіРѕРІРѕ:

РЎРѕР·РґР°С‚СЊ СЃС‚СЂСѓРєС‚СѓСЂСѓ РїР°РїРѕРє Рё РїРµСЂРµРјРµСЃС‚РёС‚СЊ РєРѕРґ РїРѕ РјРѕРґСѓР»СЏРј
РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ С‡С‚Рѕ РІСЃС‘ СЂР°Р±РѕС‚Р°РµС‚ РєР°Рє СЂР°РЅСЊС€Рµ
Р”РѕР±Р°РІРёС‚СЊ РЅРѕРІС‹Рµ С„РёС‡Рё (РґРІР° С‚РёРїР° РїР»РµРµСЂР°, Р°РІС‚РѕРЅР°РІРёРіР°С†РёСЏ)

РќР°С‡РёРЅР°РµРј СЃ СЃРѕР·РґР°РЅРёСЏ РјРѕРґСѓР»РµР№? РР»Рё СЃРЅР°С‡Р°Р»Р° С…РѕС‡РµС€СЊ РѕР±СЃСѓРґРёС‚СЊ Р»РѕРіРёРєСѓ РґРІСѓС… С‚РёРїРѕРІ РїР»РµРµСЂР°? рџ¤”RetryР’1.РЎРѕР·РґР°С‚СЊ СЃС‚СЂСѓРєС‚СѓСЂСѓ РїР°РїРѕРє Рё РїРµСЂРµРјРµСЃС‚РёС‚СЊ РєРѕРґ РїРѕ РјРѕРґСѓР»СЏРј
РџРѕРµС…Р°Р»Рё. Р’СЃС‚Р°РІСЊ СЃРєСЂРёРїС‚ РґР»СЏ РїР°РІРµСЂС€РµР»Р° РІ С‡Р°С‚, РЅРµ Р·Р°Р±С‹РІР°Р№ СѓРєР°Р·С‹РІР°С‚СЊ РєРѕРјР°РЅРґСѓ cd РІ СЃРєСЂРёРїС‚Р°С…, С‡С‚РѕР± Р·Р°РїСѓСЃРєР°Р»РѕСЃСЊ РІСЃРµ С‡С‚Рѕ РЅСѓР¶РЅРѕ РёР· С‚РѕР№ РґРёСЂРµРєС‚РѕСЂРёРё СЃ РєР°РєРѕР№ РЅСѓР¶РЅРѕEditрџЏ—пёЏ РЎРєСЂРёРїС‚ СЃРѕР·РґР°РЅРёСЏ РјРѕРґСѓР»СЊРЅРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РЎРѕР·РґР°РµРј СЃС‚СЂСѓРєС‚СѓСЂСѓ РїР°РїРѕРє
New-Item -ItemType Directory -Path "src\config" -Force
New-Item -ItemType Directory -Path "src\handlers" -Force
New-Item -ItemType Directory -Path "src\services" -Force
New-Item -ItemType Directory -Path "src\templates" -Force
New-Item -ItemType Directory -Path "src\utils" -Force

Write-Host "вњ… РЎС‚СЂСѓРєС‚СѓСЂР° РїР°РїРѕРє СЃРѕР·РґР°РЅР°!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј Р±Р°Р·РѕРІС‹Рµ С„Р°Р№Р»С‹ РјРѕРґСѓР»РµР№
@"
// config/courses.js
const COURSE_DATA = {
  "course1": {
    title: "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ",
    lessons: {
      "week1_lesson1": {
        title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°",
        video_file: "week1_lesson1.mp4",
        thumbnail_file: "week1_lesson1.jpg"
      },
      "week1_lesson2": {
        title: "РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё",
        video_file: "week1_lesson2.mp4",
        thumbnail_file: "week1_lesson2.jpg"
      },
      "week2_lesson1": {
        title: "Р Р°Р±РѕС‚Р° СЃ РїРѕР·РІРѕРЅРѕС‡РЅРёРєРѕРј",
        video_file: "week2_lesson1.mp4",
        thumbnail_file: "week2_lesson1.jpg"
      },
      "week2_lesson2": {
        title: "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё",
        video_file: "week2_lesson2.mp4",
        thumbnail_file: "week2_lesson2.jpg"
      },
      "week3_lesson1": {
        title: "РўРµС…РЅРёРєРё СЃР°РјРѕРјР°СЃСЃР°Р¶Р°",
        video_file: "week3_lesson1.mp4",
        thumbnail_file: "week3_lesson1.jpg"
      },
      "week3_lesson2": {
        title: "РЎРЅСЏС‚РёРµ РјС‹С€РµС‡РЅС‹С… Р±Р»РѕРєРѕРІ",
        video_file: "week3_lesson2.mp4",
        thumbnail_file: "week3_lesson2.jpg"
      },
      "week4_lesson1": {
        title: "РРЅС‚РµРіСЂР°С†РёСЏ РґРІРёР¶РµРЅРёР№",
        video_file: "week4_lesson1.mp4",
        thumbnail_file: "week4_lesson1.jpg"
      },
      "week4_lesson2": {
        title: "Р•Р¶РµРґРЅРµРІРЅР°СЏ РїСЂР°РєС‚РёРєР°",
        video_file: "week4_lesson2.mp4",
        thumbnail_file: "week4_lesson2.jpg"
      }
    }
  }
};

export { COURSE_DATA };
"@ | Out-File -FilePath "src\config\courses.js" -Encoding UTF8

@"
// config/constants.js
export const API_VERSION = '1.0.0';
export const SUPPORTED_VIDEO_FORMATS = ['mp4', 'webm'];
export const SUPPORTED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'webp'];

export const ENDPOINTS = {
  API_DOC: '/',
  PLAYER_LEARNING: '/player',
  PLAYER_ARCHIVE: '/archive', 
  THUMBNAILS: '/thumbnails',
  VIDEO: '/video',
  WEBHOOK: '/webhook/purchase'
};

export const ERROR_MESSAGES = {
  TOKEN_REQUIRED: 'Token required',
  TOKEN_INVALID: 'Invalid token',
  VIDEO_NOT_FOUND: 'Video not found',
  COURSE_NOT_FOUND: 'Course not found',
  LESSON_NOT_FOUND: 'Lesson not found'
};
"@ | Out-File -FilePath "src\config\constants.js" -Encoding UTF8

@"
// utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Range',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
};

export function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function createCorsResponse(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      ...init.headers
    }
  });
}
"@ | Out-File -FilePath "src\utils\cors.js" -Encoding UTF8

@"
// utils/errors.js
import { createCorsResponse } from './cors.js';

export function createErrorResponse(error, status = 500, extra = {}) {
  return createCorsResponse(
    JSON.stringify({
      status: 'error',
      error: error,
      timestamp: new Date().toISOString(),
      ...extra
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(
    `${resource} not found`,
    404,
    { resource }
  );
}

export function createUnauthorizedResponse(message = 'Unauthorized') {
  return createErrorResponse(message, 401);
}

export function createBadRequestResponse(message = 'Bad Request') {
  return createErrorResponse(message, 400);
}
"@ | Out-File -FilePath "src\utils\errors.js" -Encoding UTF8

@"
// utils/token.js
export function generateSimpleToken(email, courseId = null) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp.substring(-8)}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕСЃС‚Р°СЏ РІР°Р»РёРґР°С†РёСЏ С„РѕСЂРјР°С‚Р° С‚РѕРєРµРЅР°
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // РР·РІР»РµРєР°РµРј РёРЅС„РѕСЂРјР°С†РёСЋ РёР· С‚РѕРєРµРЅР°
  const parts = token.split('_');
  return {
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}
"@ | Out-File -FilePath "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… Р‘Р°Р·РѕРІС‹Рµ РјРѕРґСѓР»Рё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј РЅРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ worker.js
@"
// worker.js - С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// РРјРїРѕСЂС‚РёСЂСѓРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Р РѕСѓС‚РёРЅРі Р·Р°РїСЂРѕСЃРѕРІ
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 РґР»СЏ РЅРµРёР·РІРµСЃС‚РЅС‹С… РјР°СЂС€СЂСѓС‚РѕРІ
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};
"@ | Out-File -FilePath "src\worker-new.js" -Encoding UTF8

Write-Host "вњ… РќРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ worker.js СЃРѕР·РґР°РЅ РєР°Рє worker-new.js!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџ“‹ РЎР»РµРґСѓСЋС‰РёРµ С€Р°РіРё:" -ForegroundColor Cyan
Write-Host "1. РЎРѕР·РґР°С‚СЊ РѕР±СЂР°Р±РѕС‚С‡РёРєРё РІ handlers/" -ForegroundColor Yellow
Write-Host "2. РЎРѕР·РґР°С‚СЊ СЃРµСЂРІРёСЃС‹ РІ services/" -ForegroundColor Yellow  
Write-Host "3. РЎРѕР·РґР°С‚СЊ С€Р°Р±Р»РѕРЅС‹ РІ templates/" -ForegroundColor Yellow
Write-Host "4. РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ Рё Р·Р°РјРµРЅРёС‚СЊ worker.js" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Р“РѕС‚РѕРІРѕ Рє СЃРѕР·РґР°РЅРёСЋ РѕР±СЂР°Р±РѕС‚С‡РёРєРѕРІ!" -ForegroundColor Green
Р—Р°РїСѓСЃРєР°Р№ СЌС‚РѕС‚ СЃРєСЂРёРїС‚! РџРѕСЃР»Рµ РІС‹РїРѕР»РЅРµРЅРёСЏ Сѓ С‚РµР±СЏ Р±СѓРґРµС‚ Р±Р°Р·РѕРІР°СЏ РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°.
Р—Р°С‚РµРј СЃРѕР·РґР°РґРёРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё РІ handlers/ - РїРµСЂРµРЅРµСЃРµРј Р»РѕРіРёРєСѓ РёР· С‚РµРєСѓС‰РµРіРѕ worker.js. Р“РѕС‚РѕРІ? рџљЂRetryPS C:\Projects\mastermaratcom\mastermarat-project\workers\api> # РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"
PS C:\Projects\mastermaratcom\mastermarat-project\workers\api> 
PS C:\pastedР’EditРћС‚Р»РёС‡РЅРѕ! РЎС‚СЂСѓРєС‚СѓСЂР° СЃРѕР·РґР°РЅР° СѓСЃРїРµС€РЅРѕ! рџЋ‰
рџ“‚ РўРµРїРµСЂСЊ СЃРѕР·РґР°РµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё РІ handlers/
РЎР»РµРґСѓСЋС‰РёР№ СЃРєСЂРёРїС‚ СЃРѕР·РґР°СЃС‚ РІСЃРµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё, РїРµСЂРµРЅРѕСЃСЏ Р»РѕРіРёРєСѓ РёР· С‚РµРєСѓС‰РµРіРѕ worker.js:
powershell# РЈР±РµР¶РґР°РµРјСЃСЏ С‡С‚Рѕ РЅР°С…РѕРґРёРјСЃСЏ РІ РїСЂР°РІРёР»СЊРЅРѕР№ РґРёСЂРµРєС‚РѕСЂРёРё
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РЎРѕР·РґР°РµРј handlers/api.js - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
@"
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р­С‚Р° СЃС‚СЂР°РЅРёС†Р° - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /player/{courseId}/{lessonId}?token=Y': 'HTML РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (РёР· email)',
        'GET /archive/{courseId}?token=Y': 'HTML РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№ (РїРѕСЃР»Рµ РєСѓСЂСЃР°)',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2',
        'GET /video/{courseId}/{filename}?token=xxx': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming',
        'POST /webhook/purchase': 'Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ'
      },
      test_links: {
        player_learning: `{url.origin}/player/course1/week1_lesson1?token=demo123`,
        player_archive: `{url.origin}/archive/course1?token=demo123`,
        thumbnail: `{url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `{url.origin}/video/course1/week1_lesson1.mp4?token=demo123`
      },
      course_structure: COURSE_DATA,
      timestamp: new Date().toISOString()
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
"@ | Out-File -FilePath "src\handlers\api.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/thumbnails.js - РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ
@"
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

  // РќР°С…РѕРґРёРј СѓСЂРѕРє РїРѕ РёРјРµРЅРё С„Р°Р№Р»Р° thumbnail
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
    const object = await env.R2.get(`thumbnails/{courseId}/{lessonData.thumbnail_file}`);

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
"@ | Out-File -FilePath "src\handlers\thumbnails.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/video.js - Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ streaming
@"
// handlers/video.js
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse, createUnauthorizedResponse, createBadRequestResponse } from '../utils/errors.js';
import { validateTokenFormat } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 4) {
    return createBadRequestResponse('Invalid video path format');
  }
  
  const courseId = pathParts[2];
  const videoFile = pathParts[3];
  const token = url.searchParams.get('token');

  if (!token) {
    return createUnauthorizedResponse('Token required');
  }

  if (!validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid token format');
  }

  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  // РќР°С…РѕРґРёРј СѓСЂРѕРє РїРѕ РёРјРµРЅРё РІРёРґРµРѕ С„Р°Р№Р»Р°
  let lessonData = null;
  for (const key in course.lessons) {
    if (course.lessons[key].video_file === videoFile) {
      lessonData = course.lessons[key];
      break;
    }
  }

  if (!lessonData) {
    return createNotFoundResponse('Video');
  }

  // TODO: Р”РѕР±Р°РІРёС‚СЊ РїСЂРѕРІРµСЂРєСѓ РґРѕСЃС‚СѓРїР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ Рє РєСѓСЂСЃСѓ С‡РµСЂРµР· SendPulse API

  try {
    // РџРѕР»СѓС‡Р°РµРј РјРµС‚Р°РґР°РЅРЅС‹Рµ С„Р°Р№Р»Р°
    const videoPath = `videos/{courseId}/{lessonData.video_file}`;
    const object = await env.R2.head(videoPath);
    
    if (!object) {
      return createNotFoundResponse('Video in R2');
    }

    const fileSize = object.size;
    const range = request.headers.get('range');

    // HTTP Range requests РґР»СЏ streaming
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      const rangedObject = await env.R2.get(videoPath, {
        range: {
          offset: start,
          length: chunkSize
        }
      });

      if (!rangedObject) {
        return new Response('Range Not Satisfiable', { status: 416 });
      }

      return createCorsResponse(rangedObject.body, {
        status: 206,
        headers: {
          'Content-Type': 'video/mp4',
          'Content-Length': chunkSize.toString(),
          'Content-Range': `bytes {start}-{end}/{fileSize}`,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // РџРѕР»РЅРѕРµ РІРёРґРµРѕ Р±РµР· range
    const fullObject = await env.R2.get(videoPath);
    return createCorsResponse(fullObject.body, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'ETag': object.httpEtag
      }
    });

  } catch (error) {
    console.error('Video access error:', error);
    return createNotFoundResponse('Video');
  }
}
"@ | Out-File -FilePath "src\handlers\video.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/webhooks.js - SendPulse integration
@"
// handlers/webhooks.js
import { createCorsResponse } from '../utils/cors.js';
import { createBadRequestResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

export async function handleWebhooks(request, env, ctx) {
  try {
    const webhook = await request.json();

    // Р“РµРЅРµСЂРёСЂСѓРµРј С‚РѕРєРµРЅ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
    const userToken = generateSimpleToken(
      webhook.email || 'test@example.com',
      webhook.course_id || 'course1'
    );

    // TODO: РћР±РЅРѕРІРёС‚СЊ РєРѕРЅС‚Р°РєС‚ РІ SendPulse С‡РµСЂРµР· API
    // await updateSendPulseContact(webhook.email, {
    //   access_token: userToken,
    //   purchase_date: new Date().toISOString(),
    //   subscription_type: webhook.subscription_type
    // });

    return createCorsResponse(
      JSON.stringify({
        status: 'success',
        message: 'Webhook processed successfully',
        user_token: userToken,
        received_data: webhook,
        note: 'Token will be sent in first course email'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook processing error:', error);
    return createBadRequestResponse('Invalid webhook data');
  }
}
"@ | Out-File -FilePath "src\handlers\webhooks.js" -Encoding UTF8

Write-Host "вњ… РћСЃРЅРѕРІРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј Р·Р°РіР»СѓС€РєРё РґР»СЏ РїР»РµРµСЂРѕРІ (РїРѕРєР° РїСЂРѕСЃС‚С‹Рµ)
@"
// handlers/player-learning.js - РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (РёР· email)
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

  // TODO: Р—Р°РіСЂСѓР·РёС‚СЊ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ РєРѕРЅС‚РµРЅС‚ РёР· R2
  let contentData = {
    display_title: null,
    description_points: ["РџСЂР°РєС‚РёС‡РµСЃРєРёРµ С‚РµС…РЅРёРєРё РѕСЃС‚РµРѕРїР°С‚РёРё", "Р‘РµР·РѕРїР°СЃРЅРѕРµ РІС‹РїРѕР»РЅРµРЅРёРµ СѓРїСЂР°Р¶РЅРµРЅРёР№", "Р РµРєРѕРјРµРЅРґР°С†РёРё РїРѕ С‡Р°СЃС‚РѕС‚Рµ РїСЂРёРјРµРЅРµРЅРёСЏ"],
    important_notes: ["Р’С‹РїРѕР»РЅСЏР№С‚Рµ С‚РµС…РЅРёРєСѓ РјРµРґР»РµРЅРЅРѕ Рё Р°РєРєСѓСЂР°С‚РЅРѕ", "РџСЂРё РґРёСЃРєРѕРјС„РѕСЂС‚Рµ РЅРµРјРµРґР»РµРЅРЅРѕ РїСЂРµРєСЂР°С‚РёС‚Рµ СѓРїСЂР°Р¶РЅРµРЅРёРµ"],
    additional_resources: []
  };

  // РџСЂРѕСЃС‚РѕР№ HTML РїР»РµРµСЂ (РїРѕР·Р¶Рµ РїРµСЂРµРЅРµСЃРµРј РІ templates/)
  const playerHTML = `<!DOCTYPE html>
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
        <h1>рџЋЇ {lessonData.title}</h1>
        <p>РљСѓСЂСЃ: {course.title} вЂў Р РµР¶РёРј: РћР±СѓС‡РµРЅРёРµ</p>
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
            <h3>Р’ СЌС‚РѕРј СѓСЂРѕРєРµ:</h3>
            <ul>
                {contentData.description_points.map(point => `<li>{point}</li>`).join('')}
            </ul>
            
            {contentData.important_notes.length > 0 ? `
            <div style="background: #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>вљ пёЏ Р’Р°Р¶РЅРѕ:</h3>
                {contentData.important_notes.map(note => `<p>{note}</p>`).join('')}
            </div>
            ` : ''}
        </div>
    </div>

    <script>
        console.log('Learning mode player loaded for: {courseId}/{lessonId}');
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
"@ | Out-File -FilePath "src\handlers\player-learning.js" -Encoding UTF8

@"
// handlers/player-archive.js - РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№ (РїРѕСЃР»Рµ РєСѓСЂСЃР°)
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

  // TODO: РџСЂРѕРІРµСЂРёС‚СЊ С‡С‚Рѕ Сѓ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РµСЃС‚СЊ РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ (Р·Р°РІРµСЂС€РёР» РєСѓСЂСЃ)

  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
  const lessonsList = Object.entries(course.lessons).map(([lessonId, lesson]) => {
    return `
      <div class="lesson-item">
        <a href="/video/{courseId}/{lesson.video_file}?token={token}" target="_blank">
          <img src="/thumbnails/{courseId}/{lesson.thumbnail_file}" alt="{lesson.title}" style="width: 120px; height: 68px; object-fit: cover;">
          <span>{lesson.title}</span>
        </a>
      </div>
    `;
  }).join('');

  const archiveHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - РђСЂС…РёРІ РєСѓСЂСЃР° {course.title}</title>
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
        <h1>рџ“љ РђСЂС…РёРІ РєСѓСЂСЃР°: {course.title}</h1>
        <p>РџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРј СѓСЂРѕРєР°Рј РєСѓСЂСЃР°</p>
    </div>
    
    <div class="container">
        <h2>Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° ({Object.keys(course.lessons).length} СѓСЂРѕРєРѕРІ)</h2>
        <div class="lessons-grid">
            {lessonsList}
        </div>
    </div>

    <script>
        console.log('Archive mode player loaded for course: {courseId}');
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
"@ | Out-File -FilePath "src\handlers\player-archive.js" -Encoding UTF8

Write-Host "вњ… Р’СЃРµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџ“‹ РЎРѕР·РґР°РЅРЅС‹Рµ С„Р°Р№Р»С‹:" -ForegroundColor Cyan
Write-Host "вЂў handlers/api.js - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API" -ForegroundColor Yellow
Write-Host "вЂў handlers/thumbnails.js - РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ" -ForegroundColor Yellow
Write-Host "вЂў handlers/video.js - Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ streaming" -ForegroundColor Yellow
Write-Host "вЂў handlers/player-learning.js - РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ" -ForegroundColor Yellow
Write-Host "вЂў handlers/player-archive.js - РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№" -ForegroundColor Yellow
Write-Host "вЂў handlers/webhooks.js - SendPulse integration" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Р“РѕС‚РѕРІРѕ! РўРµРїРµСЂСЊ РјРѕР¶РЅРѕ СЃРѕР·РґР°С‚СЊ СЃРµСЂРІРёСЃС‹ Рё С€Р°Р±Р»РѕРЅС‹." -ForegroundColor Green
Р—Р°РїСѓСЃРєР°Р№ СЌС‚РѕС‚ СЃРєСЂРёРїС‚! РџРѕСЃР»Рµ РЅРµРіРѕ Сѓ РЅР°СЃ Р±СѓРґСѓС‚ РІСЃРµ РѕСЃРЅРѕРІРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё РіРѕС‚РѕРІС‹. РџРѕС‚РѕРј СЃРѕР·РґР°РґРёРј СЃРµСЂРІРёСЃС‹ Рё С€Р°Р±Р»РѕРЅС‹. рџљЂRetryР’РЅР°РїРёС€Рё Р°РЅР°Р»РѕРіРёС‡РЅС‹Р№ СЃРєСЂРёРїС‚ С‡С‚РѕР± Р·Р°РїСѓС€РёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ РІ РіРёС‚С…Р°Р±Editрџ“¤ РЎРєСЂРёРїС‚ РґР»СЏ Git push РІ GitHub
powershell# РџРµСЂРµС…РѕРґРёРј РІ РєРѕСЂРµРЅСЊ РїСЂРѕРµРєС‚Р°
cd "C:\Projects\mastermaratcom\mastermarat-project"

Write-Host "рџ”„ РќР°С‡РёРЅР°РµРј Git commit Рё push..." -ForegroundColor Cyan
Write-Host "" -ForegroundColor White

# РџСЂРѕРІРµСЂСЏРµРј СЃС‚Р°С‚СѓСЃ Git
Write-Host "рџ“‹ РўРµРєСѓС‰РёР№ СЃС‚Р°С‚СѓСЃ Git:" -ForegroundColor Yellow
git status

Write-Host "" -ForegroundColor White

# Р”РѕР±Р°РІР»СЏРµРј РІСЃРµ РЅРѕРІС‹Рµ С„Р°Р№Р»С‹
Write-Host "вћ• Р”РѕР±Р°РІР»СЏРµРј РІСЃРµ РёР·РјРµРЅРµРЅРёСЏ РІ staging..." -ForegroundColor Green
git add .

# РџРѕРєР°Р·С‹РІР°РµРј С‡С‚Рѕ РґРѕР±Р°РІРёР»Рё
Write-Host "" -ForegroundColor White
Write-Host "рџ“„ Р¤Р°Р№Р»С‹ РґР»СЏ commit:" -ForegroundColor Yellow
git diff --cached --name-only

Write-Host "" -ForegroundColor White

# РЎРѕР·РґР°РµРј commit СЃ РѕСЃРјС‹СЃР»РµРЅРЅС‹Рј СЃРѕРѕР±С‰РµРЅРёРµРј
$commitMessage = "feat: СЂРµС„Р°РєС‚РѕСЂРёРЅРі worker.js РЅР° РјРѕРґСѓР»СЊРЅСѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ

- РЎРѕР·РґР°РЅР° РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РІ src/ (config, handlers, services, templates, utils)
- Р Р°Р·Р±РёС‚ monolithic worker.js РЅР° РѕС‚РґРµР»СЊРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё
- Р”РѕР±Р°РІР»РµРЅС‹ РјРѕРґСѓР»Рё РґР»СЏ CORS, РѕС€РёР±РѕРє, С‚РѕРєРµРЅРѕРІ
- Р РµР°Р»РёР·РѕРІР°РЅС‹ РѕС‚РґРµР»СЊРЅС‹Рµ handlers РґР»СЏ РєР°Р¶РґРѕРіРѕ endpoint
- РџРѕРґРіРѕС‚РѕРІР»РµРЅР° Р±Р°Р·Р° РґР»СЏ РґРІСѓС… С‚РёРїРѕРІ РїР»РµРµСЂР° (learning/archive)
- РЈР»СѓС‡С€РµРЅР° С‡РёС‚Р°РµРјРѕСЃС‚СЊ Рё РїРѕРґРґРµСЂР¶РёРІР°РµРјРѕСЃС‚СЊ РєРѕРґР°

РЎС‚СЂСѓРєС‚СѓСЂР°:
- config/: courses.js, constants.js
- handlers/: api.js, thumbnails.js, video.js, player-*.js, webhooks.js  
- utils/: cors.js, errors.js, token.js
- worker-new.js: РЅРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ СЂРѕСѓС‚РµСЂ (30 СЃС‚СЂРѕРє РІРјРµСЃС‚Рѕ 500+)"

Write-Host "рџ’¬ РЎРѕР·РґР°РµРј commit..." -ForegroundColor Green
git commit -m $commitMessage

# РџСЂРѕРІРµСЂСЏРµРј РЅР° РєР°РєРѕР№ РІРµС‚РєРµ РЅР°С…РѕРґРёРјСЃСЏ
$currentBranch = git branch --show-current
Write-Host "" -ForegroundColor White
Write-Host "рџЊї РўРµРєСѓС‰Р°СЏ РІРµС‚РєР°: $currentBranch" -ForegroundColor Cyan

# Push РІ GitHub
Write-Host "" -ForegroundColor White
Write-Host "рџљЂ РћС‚РїСЂР°РІР»СЏРµРј РёР·РјРµРЅРµРЅРёСЏ РІ GitHub..." -ForegroundColor Green
git push origin $currentBranch

# РџСЂРѕРІРµСЂСЏРµРј СЂРµР·СѓР»СЊС‚Р°С‚
if ($LASTEXITCODE -eq 0) {
    Write-Host "" -ForegroundColor White
    Write-Host "вњ… РЈСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ РІ GitHub!" -ForegroundColor Green
    Write-Host "" -ForegroundColor White
    Write-Host "рџ”— РЎСЃС‹Р»РєР° РЅР° СЂРµРїРѕР·РёС‚РѕСЂРёР№:" -ForegroundColor Cyan
    Write-Host "https://github.com/Shivalino/mastermarat-project" -ForegroundColor Blue
    Write-Host "" -ForegroundColor White
    Write-Host "рџ“Љ РЎС‚Р°С‚РёСЃС‚РёРєР° РёР·РјРµРЅРµРЅРёР№:" -ForegroundColor Yellow
    
    # РџРѕРєР°Р·С‹РІР°РµРј РїРѕСЃР»РµРґРЅРёР№ commit
    git log --oneline -1
    
    # РџРѕРєР°Р·С‹РІР°РµРј РєРѕР»РёС‡РµСЃС‚РІРѕ РёР·РјРµРЅРµРЅРЅС‹С… С„Р°Р№Р»РѕРІ
    $changedFiles = git diff HEAD~1 --name-only | Measure-Object | Select-Object -ExpandProperty Count
    Write-Host "рџ“Ѓ РР·РјРµРЅРµРЅРѕ С„Р°Р№Р»РѕРІ: $changedFiles" -ForegroundColor Yellow
    
} else {
    Write-Host "" -ForegroundColor White
    Write-Host "вќЊ РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ РІ GitHub!" -ForegroundColor Red
    Write-Host "Р’РѕР·РјРѕР¶РЅС‹Рµ РїСЂРёС‡РёРЅС‹:" -ForegroundColor Yellow
    Write-Host "вЂў РќРµС‚ РёРЅС‚РµСЂРЅРµС‚ СЃРѕРµРґРёРЅРµРЅРёСЏ" -ForegroundColor White
    Write-Host "вЂў РќСѓР¶РЅР° Р°РІС‚РѕСЂРёР·Р°С†РёСЏ РІ Git" -ForegroundColor White
    Write-Host "вЂў РљРѕРЅС„Р»РёРєС‚С‹ СЃ СѓРґР°Р»РµРЅРЅРѕР№ РІРµС‚РєРѕР№" -ForegroundColor White
    Write-Host "" -ForegroundColor White
    Write-Host "рџ”§ РџСЂРѕРІРµСЂСЊС‚Рµ:" -ForegroundColor Cyan
    Write-Host "git remote -v" -ForegroundColor Gray
    Write-Host "git status" -ForegroundColor Gray
}

Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Git РѕРїРµСЂР°С†РёСЏ Р·Р°РІРµСЂС€РµРЅР°!" -ForegroundColor Green
рџ”§ РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ СЃРєСЂРёРїС‚ СЃ РїСЂРѕРІРµСЂРєР°РјРё
Р•СЃР»Рё С…РѕС‡РµС€СЊ Р±РѕР»РµРµ Р±РµР·РѕРїР°СЃРЅС‹Р№ РІР°СЂРёР°РЅС‚ СЃ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹РјРё РїСЂРѕРІРµСЂРєР°РјРё:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РєРѕСЂРµРЅСЊ РїСЂРѕРµРєС‚Р°
cd "C:\Projects\mastermaratcom\mastermarat-project"

# Р¤СѓРЅРєС†РёСЏ РґР»СЏ РїСЂРѕРІРµСЂРєРё Git СЂРµРїРѕР·РёС‚РѕСЂРёСЏ
function Test-GitRepository {
    if (-not (Test-Path ".git")) {
        Write-Host "вќЊ РќРµ РЅР°Р№РґРµРЅ Git СЂРµРїРѕР·РёС‚РѕСЂРёР№!" -ForegroundColor Red
        return $false
    }
    return $true
}

# Р¤СѓРЅРєС†РёСЏ РґР»СЏ РїСЂРѕРІРµСЂРєРё РёР·РјРµРЅРµРЅРёР№
function Test-GitChanges {
    $status = git status --porcelain
    if ([string]::IsNullOrEmpty($status)) {
        Write-Host "в„№пёЏ РќРµС‚ РёР·РјРµРЅРµРЅРёР№ РґР»СЏ commit" -ForegroundColor Blue
        return $false
    }
    return $true
}

# РћСЃРЅРѕРІРЅР°СЏ Р»РѕРіРёРєР°
if (-not (Test-GitRepository)) {
    exit 1
}

if (-not (Test-GitChanges)) {
    Write-Host "рџ”Ќ РџСЂРѕРІРµСЂСЊС‚Рµ РЅР°Р»РёС‡РёРµ РёР·РјРµРЅРµРЅРёР№: git status" -ForegroundColor Yellow
    exit 0
}

# РџРѕРєР°Р·С‹РІР°РµРј С‡С‚Рѕ Р±СѓРґРµРј РєРѕРјРјРёС‚РёС‚СЊ
Write-Host "рџ“‹ РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Р№ РїСЂРѕСЃРјРѕС‚СЂ РёР·РјРµРЅРµРЅРёР№:" -ForegroundColor Cyan
git status --short

Write-Host "" -ForegroundColor White
$confirmation = Read-Host "вќ“ РџСЂРѕРґРѕР»Р¶РёС‚СЊ СЃ commit Рё push? (y/N)"

if ($confirmation -eq 'y' -or $confirmation -eq 'Y') {
    # Р’С‹РїРѕР»РЅСЏРµРј РѕСЃРЅРѕРІРЅРѕР№ СЃРєСЂРёРїС‚ РІС‹С€Рµ
    git add .
    git commit -m "feat: СЂРµС„Р°РєС‚РѕСЂРёРЅРі worker.js РЅР° РјРѕРґСѓР»СЊРЅСѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ..."
    git push origin (git branch --show-current)
    
    Write-Host "вњ… РР·РјРµРЅРµРЅРёСЏ РѕС‚РїСЂР°РІР»РµРЅС‹!" -ForegroundColor Green
} else {
    Write-Host "вќЊ РћРїРµСЂР°С†РёСЏ РѕС‚РјРµРЅРµРЅР° РїРѕР»СЊР·РѕРІР°С‚РµР»РµРј" -ForegroundColor Yellow
}
РљР°РєРѕР№ РІР°СЂРёР°РЅС‚ Р·Р°РїСѓСЃРєР°РµРј?

РџРµСЂРІС‹Р№ - Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёР№ push Р±РµР· РїРѕРґС‚РІРµСЂР¶РґРµРЅРёР№
Р’С‚РѕСЂРѕР№ - СЃ РїСЂРѕРІРµСЂРєР°РјРё Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµРј

Р’С‹Р±РёСЂР°Р№ Рё Р·Р°РїСѓСЃРєР°Р№! рџљЂRetryР’1Р№ РІР°СЂРёР°РЅС‚
git status
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../../scripts/upload_content_to_r2.js
        modified:   src/worker.js
        modified:   wrangler.toml
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        src/config/
        src/handlers/
        src/utils/
        src/worker-new.jsEditРћС‚Р»РёС‡РЅРѕ! Р’РёР¶Сѓ РёР·РјРµРЅРµРЅРёСЏ РіРѕС‚РѕРІС‹ Рє commit. Р—Р°РїСѓСЃРєР°Р№ РїРµСЂРІС‹Р№ СЃРєСЂРёРїС‚:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РєРѕСЂРµРЅСЊ РїСЂРѕРµРєС‚Р°
cd "C:\Projects\mastermaratcom\mastermarat-project"

Write-Host "рџ”„ РќР°С‡РёРЅР°РµРј Git commit Рё push..." -ForegroundColor Cyan
Write-Host "" -ForegroundColor White

# РџСЂРѕРІРµСЂСЏРµРј СЃС‚Р°С‚СѓСЃ Git
Write-Host "рџ“‹ РўРµРєСѓС‰РёР№ СЃС‚Р°С‚СѓСЃ Git:" -ForegroundColor Yellow
git status

Write-Host "" -ForegroundColor White

# Р”РѕР±Р°РІР»СЏРµРј РІСЃРµ РЅРѕРІС‹Рµ С„Р°Р№Р»С‹
Write-Host "вћ• Р”РѕР±Р°РІР»СЏРµРј РІСЃРµ РёР·РјРµРЅРµРЅРёСЏ РІ staging..." -ForegroundColor Green
git add .

# РџРѕРєР°Р·С‹РІР°РµРј С‡С‚Рѕ РґРѕР±Р°РІРёР»Рё
Write-Host "" -ForegroundColor White
Write-Host "рџ“„ Р¤Р°Р№Р»С‹ РґР»СЏ commit:" -ForegroundColor Yellow
git diff --cached --name-only

Write-Host "" -ForegroundColor White

# РЎРѕР·РґР°РµРј commit СЃ РѕСЃРјС‹СЃР»РµРЅРЅС‹Рј СЃРѕРѕР±С‰РµРЅРёРµРј
$commitMessage = "feat: СЂРµС„Р°РєС‚РѕСЂРёРЅРі worker.js РЅР° РјРѕРґСѓР»СЊРЅСѓСЋ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ

- РЎРѕР·РґР°РЅР° РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РІ src/ (config, handlers, services, templates, utils)
- Р Р°Р·Р±РёС‚ monolithic worker.js РЅР° РѕС‚РґРµР»СЊРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё
- Р”РѕР±Р°РІР»РµРЅС‹ РјРѕРґСѓР»Рё РґР»СЏ CORS, РѕС€РёР±РѕРє, С‚РѕРєРµРЅРѕРІ
- Р РµР°Р»РёР·РѕРІР°РЅС‹ РѕС‚РґРµР»СЊРЅС‹Рµ handlers РґР»СЏ РєР°Р¶РґРѕРіРѕ endpoint
- РџРѕРґРіРѕС‚РѕРІР»РµРЅР° Р±Р°Р·Р° РґР»СЏ РґРІСѓС… С‚РёРїРѕРІ РїР»РµРµСЂР° (learning/archive)
- РЈР»СѓС‡С€РµРЅР° С‡РёС‚Р°РµРјРѕСЃС‚СЊ Рё РїРѕРґРґРµСЂР¶РёРІР°РµРјРѕСЃС‚СЊ РєРѕРґР°

РЎС‚СЂСѓРєС‚СѓСЂР°:
- config/: courses.js, constants.js
- handlers/: api.js, thumbnails.js, video.js, player-*.js, webhooks.js  
- utils/: cors.js, errors.js, token.js
- worker-new.js: РЅРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ СЂРѕСѓС‚РµСЂ (30 СЃС‚СЂРѕРє РІРјРµСЃС‚Рѕ 500+)"

Write-Host "рџ’¬ РЎРѕР·РґР°РµРј commit..." -ForegroundColor Green
git commit -m $commitMessage

# РџСЂРѕРІРµСЂСЏРµРј РЅР° РєР°РєРѕР№ РІРµС‚РєРµ РЅР°С…РѕРґРёРјСЃСЏ
$currentBranch = git branch --show-current
Write-Host "" -ForegroundColor White
Write-Host "рџЊї РўРµРєСѓС‰Р°СЏ РІРµС‚РєР°: $currentBranch" -ForegroundColor Cyan

# Push РІ GitHub
Write-Host "" -ForegroundColor White
Write-Host "рџљЂ РћС‚РїСЂР°РІР»СЏРµРј РёР·РјРµРЅРµРЅРёСЏ РІ GitHub..." -ForegroundColor Green
git push origin $currentBranch

# РџСЂРѕРІРµСЂСЏРµРј СЂРµР·СѓР»СЊС‚Р°С‚
if ($LASTEXITCODE -eq 0) {
    Write-Host "" -ForegroundColor White
    Write-Host "вњ… РЈСЃРїРµС€РЅРѕ РѕС‚РїСЂР°РІР»РµРЅРѕ РІ GitHub!" -ForegroundColor Green
    Write-Host "" -ForegroundColor White
    Write-Host "рџ”— РЎСЃС‹Р»РєР° РЅР° СЂРµРїРѕР·РёС‚РѕСЂРёР№:" -ForegroundColor Cyan
    Write-Host "https://github.com/Shivalino/mastermarat-project" -ForegroundColor Blue
    Write-Host "" -ForegroundColor White
    Write-Host "рџ“Љ РЎС‚Р°С‚РёСЃС‚РёРєР° РёР·РјРµРЅРµРЅРёР№:" -ForegroundColor Yellow
    
    # РџРѕРєР°Р·С‹РІР°РµРј РїРѕСЃР»РµРґРЅРёР№ commit
    git log --oneline -1
    
    # РџРѕРєР°Р·С‹РІР°РµРј РєРѕР»РёС‡РµСЃС‚РІРѕ РёР·РјРµРЅРµРЅРЅС‹С… С„Р°Р№Р»РѕРІ
    $changedFiles = git diff HEAD~1 --name-only | Measure-Object | Select-Object -ExpandProperty Count
    Write-Host "рџ“Ѓ РР·РјРµРЅРµРЅРѕ С„Р°Р№Р»РѕРІ: $changedFiles" -ForegroundColor Yellow
    
} else {
    Write-Host "" -ForegroundColor White
    Write-Host "вќЊ РћС€РёР±РєР° РїСЂРё РѕС‚РїСЂР°РІРєРµ РІ GitHub!" -ForegroundColor Red
    Write-Host "Р’РѕР·РјРѕР¶РЅС‹Рµ РїСЂРёС‡РёРЅС‹:" -ForegroundColor Yellow
    Write-Host "вЂў РќРµС‚ РёРЅС‚РµСЂРЅРµС‚ СЃРѕРµРґРёРЅРµРЅРёСЏ" -ForegroundColor White
    Write-Host "вЂў РќСѓР¶РЅР° Р°РІС‚РѕСЂРёР·Р°С†РёСЏ РІ Git" -ForegroundColor White
    Write-Host "вЂў РљРѕРЅС„Р»РёРєС‚С‹ СЃ СѓРґР°Р»РµРЅРЅРѕР№ РІРµС‚РєРѕР№" -ForegroundColor White
    Write-Host "" -ForegroundColor White
    Write-Host "рџ”§ РџСЂРѕРІРµСЂСЊС‚Рµ:" -ForegroundColor Cyan
    Write-Host "git remote -v" -ForegroundColor Gray
    Write-Host "git status" -ForegroundColor Gray
}

Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Git РѕРїРµСЂР°С†РёСЏ Р·Р°РІРµСЂС€РµРЅР°!" -ForegroundColor Green
РЎРєСЂРёРїС‚ РґРѕР±Р°РІРёС‚:

вњ… РР·РјРµРЅРµРЅРЅС‹Рµ С„Р°Р№Р»С‹: upload_content_to_r2.js, worker.js, wrangler.toml
вњ… РќРѕРІС‹Рµ РїР°РїРєРё: src/config/, src/handlers/, src/utils/
вњ… РќРѕРІС‹Р№ С„Р°Р№Р»: src/worker-new.js

РџРѕСЃР»Рµ push'Р° Р±СѓРґРµРј С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РЅРѕРІСѓСЋ РјРѕРґСѓР»СЊРЅСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ! рџљЂRetryР’Р¤Р°Р№Р»С‹ РґР»СЏ commit:
PS C:\Projects\mastermaratcom\mastermarat-project> git diff --cached --name-only
scripts/upload_content_to_r2.js
workers/api/src/config/constants.js
workers/api/src/config/courses.js
workers/api/src/handlers/api.js
workers/api/src/handlers/player-archive.js
workers/api/src/handlers/player-learning.js
workers/api/src/handlers/thumbnails.js
workers/api/src/handlers/video.js
workers/api/src/handlers/webhooks.js
workers/api/src/utils/cors.js
workers/api/src/utils/errors.js
workers/api/src/utils/token.js
workers/api/src/worker-new.js
workers/api/src/worker.js
workers/api/wrangler.toml
(END)
С‡С‚Рѕ РЅР°Р¶Р°С‚СЊ РІ С‚РµСЂРјРёРЅР°Р»Рµ?EditР’ PowerShell РїРѕСЃР»Рµ (END) РЅР°Р¶РјРё:
q - С‡С‚РѕР±С‹ РІС‹Р№С‚Рё РёР· РїСЂРѕСЃРјРѕС‚СЂР° СЃРїРёСЃРєР° С„Р°Р№Р»РѕРІ
Р­С‚Рѕ РєРѕРјР°РЅРґР° git diff РїРѕРєР°Р·С‹РІР°РµС‚ С„Р°Р№Р»С‹ С‡РµСЂРµР· pager (РїРѕСЃС‚СЂР°РЅРёС‡РЅС‹Р№ РїСЂРѕСЃРјРѕС‚СЂ). РЎРёРјРІРѕР» (END) РѕР·РЅР°С‡Р°РµС‚ С‡С‚Рѕ РґРѕС€Р»Рё РґРѕ РєРѕРЅС†Р° СЃРїРёСЃРєР°.
РџРѕСЃР»Рµ РЅР°Р¶Р°С‚РёСЏ q СЃРєСЂРёРїС‚ РїСЂРѕРґРѕР»Р¶РёС‚ РІС‹РїРѕР»РЅРµРЅРёРµ Рё СЃРѕР·РґР°СЃС‚ commit СЃ push РІ GitHub.
РќР°Р¶РёРјР°Р№ q Рё СЃРєСЂРёРїС‚ РїСЂРѕРґРѕР»Р¶РёС‚СЃСЏ! рџљЂRetryР’РІСЃРµ С…РѕСЂРѕС€Рѕ, РЅР°РїРёС€Рё README.md РґР»СЏ РїСЂРѕРµРєС‚Р°, С‡С‚РѕР± РёР· РЅРµРіРѕ РІСЃРµ Р±С‹Р»Рѕ РїРѕРЅСЏС‚РЅРѕ Рё С‚РµР±Рµ Рё С‡РµР»РѕРІРµРєСѓ Рѕ С‚РµРєСѓС‰РµРј СЃРѕСЃС‚РѕСЏРЅРёРё РїСЂРѕРµРєС‚Р°Editрџ“ќ РЎРєСЂРёРїС‚ СЃРѕР·РґР°РЅРёСЏ README.md РґР»СЏ РїСЂРѕРµРєС‚Р°
powershell# РџРµСЂРµС…РѕРґРёРј РІ РєРѕСЂРµРЅСЊ РїСЂРѕРµРєС‚Р°
cd "C:\Projects\mastermaratcom\mastermarat-project"

# РЎРѕР·РґР°РµРј РїРѕРґСЂРѕР±РЅС‹Р№ README.md
@"
# MasterMarat.com - EdTech Platform

> Email-РєСѓСЂСЃС‹ РѕСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРёС… РїСЂР°РєС‚РёРє РґР»СЏ СЃР°РјРѕРїРѕРјРѕС‰Рё РѕС‚ РњР°СЂР°С‚Р° РњР°Р»РёРµРІР°

[![Status](https://img.shields.io/badge/Status-Development-yellow)](https://github.com/Shivalino/mastermarat-project)
[![API](https://img.shields.io/badge/API-Cloudflare_Workers-orange)](https://api.mastermarat.com)
[![License](https://img.shields.io/badge/License-Private-red)](LICENSE)

---

## рџЋЇ Рћ РїСЂРѕРµРєС‚Рµ

**MasterMarat.com** - РїР»Р°С‚С„РѕСЂРјР° email-РєСѓСЂСЃРѕРІ РїСЂР°РєС‚РёС‡РµСЃРєРёС… С‚РµС…РЅРёРє РґР»СЏ Р·РґРѕСЂРѕРІСЊСЏ РѕС‚ РѕСЃС‚РµРѕРїР°С‚Р° СЃ 20-Р»РµС‚РЅРёРј РѕРїС‹С‚РѕРј РњР°СЂР°С‚Р° РњР°Р»РёРµРІР°. РџСЂРѕРµРєС‚ СЃРїРµС†РёР°Р»РёР·РёСЂСѓРµС‚СЃСЏ РЅР° РѕР±СѓС‡РµРЅРёРё РѕСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРёРј С‚РµС…РЅРёРєР°Рј СЃР°РјРѕРїРѕРјРѕС‰Рё С‡РµСЂРµР· СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅС‹Рµ email-СЂР°СЃСЃС‹Р»РєРё СЃ РІРёРґРµРѕ-СѓСЂРѕРєР°РјРё.

### РљР»СЋС‡РµРІС‹Рµ РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё
- рџ“§ **Email-РїРµСЂРІС‹Р№ РїРѕРґС…РѕРґ** - РѕР±СѓС‡РµРЅРёРµ С‡РµСЂРµР· РµР¶РµРЅРµРґРµР»СЊРЅС‹Рµ СЂР°СЃСЃС‹Р»РєРё
- рџЋҐ **Р’РёРґРµРѕ-РєРѕРЅС‚РµРЅС‚** - РІРµСЂС‚РёРєР°Р»СЊРЅС‹Рµ РІРёРґРµРѕ 9:16 РґР»СЏ РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІ
- рџ”ђ **Р—Р°С‰РёС‰РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї** - С‚РѕРєРµРЅРёР·РёСЂРѕРІР°РЅРЅР°СЏ СЃРёСЃС‚РµРјР° РґРѕСЃС‚СѓРїР° Рє РєРѕРЅС‚РµРЅС‚Сѓ
- рџЊЌ **РњРЅРѕРіРѕСЏР·С‹С‡РЅРѕСЃС‚СЊ** - СЂСѓСЃСЃРєРёР№, СѓРєСЂР°РёРЅСЃРєРёР№, Р°РЅРіР»РёР№СЃРєРёР№ (С‡РµСЂРµР· AI-РїРµСЂРµРІРѕРґС‹)
- рџ’° **РџРѕРґРїРёСЃРѕС‡РЅР°СЏ РјРѕРґРµР»СЊ** - 3 С‚Р°СЂРёС„Р° СЃ СЂР°Р·РЅС‹Рј СѓСЂРѕРІРЅРµРј РїРѕРґРґРµСЂР¶РєРё

---

## рџ‘Ґ РљРѕРјР°РЅРґР°

| Р РѕР»СЊ | РЈС‡Р°СЃС‚РЅРёРє | РћС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊ |
|------|----------|----------------|
| **CEO (35%)** | РњР°СЂР°С‚ РњР°Р»РёРµРІ | РћСЃС‚РµРѕРїР°С‚-СЌРєСЃРїРµСЂС‚, СЃРѕР·РґР°РЅРёРµ РєРѕРЅС‚РµРЅС‚Р°, VIP-РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё |
| **PM & Content (35%)** | РђРјРёСЂР° | РЈРїСЂР°РІР»РµРЅРёРµ РїСЂРѕРµРєС‚РѕРј, СѓС‚РІРµСЂР¶РґРµРЅРёРµ РєРѕРЅС‚РµРЅС‚Р°, РєР»РёРµРЅС‚СЃРєР°СЏ РїРѕРґРґРµСЂР¶РєР° |
| **CTO (30%)** | Р’СЏС‡РµСЃР»Р°РІ | РўРµС…РЅРёС‡РµСЃРєР°СЏ СЂРµР°Р»РёР·Р°С†РёСЏ, Р¤РћРџ, AI-РїРµСЂРµРІРѕРґС‹, DevOps |

---

## рџЏ—пёЏ РўРµС…РЅРёС‡РµСЃРєР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°

### РРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂР°
в”Њв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”ђ
в”‚ mastermarat.com (Cloudflare Pages + SendPulse)             в”‚
в”‚ в”њв”Ђв”Ђ Р›РµРЅРґРёРЅРі СЃ lead-РјР°РіРЅРёС‚РѕРј                                 в”‚
в”‚ в””в”Ђв”Ђ Email-С„РѕСЂРјР° в†’ SendPulse Automation 360                 в”‚
в””в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”
в†“
в”Њв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”ђ
в”‚ api.mastermarat.com (Cloudflare Workers)                   в”‚
в”‚ в”њв”Ђв”Ђ РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° (handlers, services, utils)      в”‚
в”‚ в”њв”Ђв”Ђ Р—Р°С‰РёС‰РµРЅРЅРѕРµ РІРёРґРµРѕ СЃ HTTP Range requests                 в”‚
в”‚ в”њв”Ђв”Ђ Р”РІР° С‚РёРїР° РїР»РµРµСЂР° (learning/archive)                     в”‚
в”‚ в””в”Ђв”Ђ SendPulse webhook РёРЅС‚РµРіСЂР°С†РёСЏ                           в”‚
в””в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”
в†“
в”Њв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”ђ
в”‚ R2 Object Storage (mastermarat-videos)                     в”‚
в”‚ в”њв”Ђв”Ђ /videos/ в†’ Р·Р°С‰РёС‰РµРЅРЅС‹Рµ MP4 С„Р°Р№Р»С‹ РєСѓСЂСЃРѕРІ                 в”‚
в”‚ в”њв”Ђв”Ђ /thumbnails/ в†’ РїСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ                        в”‚
в”‚ в””в”Ђв”Ђ /content/ в†’ JSON РјРµС‚Р°РґР°РЅРЅС‹Рµ СѓСЂРѕРєРѕРІ                     в”‚
в””в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”

### Р”РѕРјРµРЅС‹ Рё РѕРєСЂСѓР¶РµРЅРёСЏ
- **Production**: `mastermarat.com`, `api.mastermarat.com`
- **Development**: `api-dev.mastermarat.com`
- **Email**: Zoho Mail (`mastermarat.com`)
- **Marketing**: SendPulse Automation 360

---

## рџ’° Р‘РёР·РЅРµСЃ-РјРѕРґРµР»СЊ

### РўР°СЂРёС„РЅС‹Рµ РїР»Р°РЅС‹ (РјРµСЃСЏС‡РЅР°СЏ РїРѕРґРїРёСЃРєР° Г— 3 РјРµСЃСЏС†Р°)
| РўР°СЂРёС„ | Р¦РµРЅР° | РћРїРёСЃР°РЅРёРµ |
|-------|------|----------|
| **Р‘Р°Р·РѕРІС‹Р№** | $30/РјРµСЃ | Email-РєСѓСЂСЃ СЃ РІРёРґРµРѕ-СѓСЂРѕРєР°РјРё |
| **РЎС‚Р°РЅРґР°СЂС‚РЅС‹Р№** в­ђ | $50/РјРµСЃ | + РїРµСЂСЃРѕРЅР°Р»СЊРЅР°СЏ РїРѕРґРґРµСЂР¶РєР° С‡РµСЂРµР· Telegram |
| **VIP** | $150/РјРµСЃ | + РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё СЃ РњР°СЂР°С‚РѕРј |

### РџСЂРѕРґСѓРєС‚РѕРІР°СЏ Р»РёРЅРµР№РєР°
- **8 РєСѓСЂСЃРѕРІ** РїРѕ 3-4 РЅРµРґРµР»Рё РєР°Р¶РґС‹Р№
- **58 РІРёРґРµРѕ-СѓСЂРѕРєРѕРІ** РѕР±С‰РµР№ РїСЂРѕРґРѕР»Р¶РёС‚РµР»СЊРЅРѕСЃС‚СЊСЋ
- **РњРЅРѕРіРѕСЏР·С‹С‡РЅР°СЏ Р»РѕРєР°Р»РёР·Р°С†РёСЏ** (RU в†’ UA в†’ EN)
- **РџСЂРѕРіСЂРµСЃСЃРёРІРЅРѕРµ РѕС‚РєСЂС‹С‚РёРµ РєРѕРЅС‚РµРЅС‚Р°** РїРѕ СЂР°СЃРїРёСЃР°РЅРёСЋ

---

## рџ“‚ РЎС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р°
mastermarat-project/
в”њв”Ђв”Ђ .github/workflows/          # CI/CD РєРѕРЅС„РёРіСѓСЂР°С†РёРё (TODO)
в”њв”Ђв”Ђ docs/                       # РџСЂРѕРµРєС‚РЅР°СЏ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ
в”њв”Ђв”Ђ scripts/                    # РЈС‚РёР»РёС‚С‹ Рё СЃРєСЂРёРїС‚С‹
в”‚   в”њв”Ђв”Ђ test-api.js            # РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ API endpoints
в”‚   в””в”Ђв”Ђ upload_content_to_r2.js # Р—Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РІ R2
в”њв”Ђв”Ђ temp_upload/               # Р’СЂРµРјРµРЅРЅС‹Рµ С„Р°Р№Р»С‹ РґР»СЏ Р·Р°РіСЂСѓР·РєРё
в”‚   в””в”Ђв”Ђ content/course1/       # JSON С„Р°Р№Р»С‹ РєРѕРЅС‚РµРЅС‚Р° СѓСЂРѕРєРѕРІ
в””в”Ђв”Ђ workers/api/               # Cloudflare Workers API
в”њв”Ђв”Ђ src/
в”‚   в”њв”Ђв”Ђ config/           # РљРѕРЅС„РёРіСѓСЂР°С†РёРё Рё РєРѕРЅСЃС‚Р°РЅС‚С‹
в”‚   в”‚   в”њв”Ђв”Ђ courses.js    # РЎС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃРѕРІ
в”‚   в”‚   в””в”Ђв”Ђ constants.js  # API РєРѕРЅСЃС‚Р°РЅС‚С‹
в”‚   в”њв”Ђв”Ђ handlers/         # HTTP request handlers
в”‚   в”‚   в”њв”Ђв”Ђ api.js        # GET / - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
в”‚   в”‚   в”њв”Ђв”Ђ thumbnails.js # GET /thumbnails/* - РїСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ
в”‚   в”‚   в”њв”Ђв”Ђ video.js      # GET /video/* - Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ
в”‚   в”‚   в”њв”Ђв”Ђ player-learning.js # GET /player/* - РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ
в”‚   в”‚   в”њв”Ђв”Ђ player-archive.js  # GET /archive/* - РїР»РµРµСЂ-Р°СЂС…РёРІ
в”‚   в”‚   в””в”Ђв”Ђ webhooks.js   # POST /webhook/* - SendPulse integration
в”‚   в”њв”Ђв”Ђ services/         # Р‘РёР·РЅРµСЃ-Р»РѕРіРёРєР° (TODO)
в”‚   в”‚   в”њв”Ђв”Ђ auth.js       # РђСѓС‚РµРЅС‚РёС„РёРєР°С†РёСЏ Рё Р°РІС‚РѕСЂРёР·Р°С†РёСЏ
в”‚   в”‚   в”њв”Ђв”Ђ sendpulse.js  # SendPulse API РёРЅС‚РµРіСЂР°С†РёСЏ
в”‚   в”‚   в””в”Ђв”Ђ content.js    # Р Р°Р±РѕС‚Р° СЃ РєРѕРЅС‚РµРЅС‚РѕРј РёР· R2
в”‚   в”њв”Ђв”Ђ templates/        # HTML С€Р°Р±Р»РѕРЅС‹ (TODO)
в”‚   в”‚   в”њв”Ђв”Ђ base.js       # Р‘Р°Р·РѕРІС‹Рµ HTML РєРѕРјРїРѕРЅРµРЅС‚С‹
в”‚   в”‚   в”њв”Ђв”Ђ player-learning.js # РЁР°Р±Р»РѕРЅ РїР»РµРµСЂР° РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ
в”‚   в”‚   в””в”Ђв”Ђ player-archive.js  # РЁР°Р±Р»РѕРЅ РїР»РµРµСЂР°-Р°СЂС…РёРІР°
в”‚   в”њв”Ђв”Ђ utils/            # Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ СѓС‚РёР»РёС‚С‹
в”‚   в”‚   в”њв”Ђв”Ђ cors.js       # CORS headers Рё helpers
в”‚   в”‚   в”њв”Ђв”Ђ errors.js     # РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
в”‚   в”‚   в””в”Ђв”Ђ token.js      # Р“РµРЅРµСЂР°С†РёСЏ Рё РІР°Р»РёРґР°С†РёСЏ С‚РѕРєРµРЅРѕРІ
в”‚   в”њв”Ђв”Ђ worker.js         # Legacy monolithic worker (500+ СЃС‚СЂРѕРє)
в”‚   в””в”Ђв”Ђ worker-new.js     # РќРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ СЂРѕСѓС‚РµСЂ (30 СЃС‚СЂРѕРє)
в”њв”Ђв”Ђ package.json          # Р—Р°РІРёСЃРёРјРѕСЃС‚Рё Рё СЃРєСЂРёРїС‚С‹
в”њв”Ђв”Ђ wrangler.toml         # Cloudflare Workers РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ
в””в”Ђв”Ђ node_modules/         # РЈСЃС‚Р°РЅРѕРІР»РµРЅРЅС‹Рµ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё

---

## рџљЂ РўРµРєСѓС‰РёР№ СЃС‚Р°С‚СѓСЃ РїСЂРѕРµРєС‚Р°

### вњ… Р—Р°РІРµСЂС€РµРЅРѕ (Production Ready)
- [x] **Cloudflare Workers API** СЂР°Р·РІРµСЂРЅСѓС‚ РЅР° `api.mastermarat.com` Рё `api-dev.mastermarat.com`
- [x] **R2 Object Storage** РЅР°СЃС‚СЂРѕРµРЅ (`mastermarat-videos` bucket)
- [x] **Custom domains** Рё SSL СЃРµСЂС‚РёС„РёРєР°С‚С‹
- [x] **DNS РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ** С‡РµСЂРµР· Cloudflare
- [x] **Zoho Mail** РґР»СЏ РєРѕСЂРїРѕСЂР°С‚РёРІРЅРѕР№ РїРѕС‡С‚С‹
- [x] **SendPulse Р»РµРЅРґРёРЅРі** СЃРѕР·РґР°РЅ Рё РЅР°СЃС‚СЂРѕРµРЅ
- [x] **РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°** - СЂРµС„Р°РєС‚РѕСЂРёРЅРі СЃ 500+ СЃС‚СЂРѕРє РЅР° РєРѕРјРїРѕРЅРµРЅС‚С‹
- [x] **GitHub СЂРµРїРѕР·РёС‚РѕСЂРёР№** СЃ VS Code workspace
- [x] **Р›РёРЅС‚РµСЂС‹ Рё С„РѕСЂРјР°С‚С‚РµСЂС‹** (ESLint + Prettier)

### рџ”„ Р’ СЂР°Р·СЂР°Р±РѕС‚РєРµ (Sprint 1)
- [ ] **РЎРѕР·РґР°РЅРёРµ СЃРµСЂРІРёСЃРѕРІ** (`services/auth.js`, `services/sendpulse.js`)
- [ ] **HTML С€Р°Р±Р»РѕРЅС‹** РґР»СЏ РїР»РµРµСЂРѕРІ (`templates/`)
- [ ] **SendPulse webhook РёРЅС‚РµРіСЂР°С†РёСЏ** - Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєР°СЏ РіРµРЅРµСЂР°С†РёСЏ С‚РѕРєРµРЅРѕРІ
- [ ] **Р—Р°РіСЂСѓР·РєР° СЂРµР°Р»СЊРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°** РІ R2 (РІРёРґРµРѕ + JSON РјРµС‚Р°РґР°РЅРЅС‹Рµ)
- [ ] **Р”РІР° С‚РёРїР° РїР»РµРµСЂР°**:
  - Learning mode (РёР· email, Р±РµР· РЅР°РІРёРіР°С†РёРё)
  - Archive mode (РїРѕСЃР»Рµ РєСѓСЂСЃР°, СЃ РїРѕР»РЅРѕР№ РЅР°РІРёРіР°С†РёРµР№)

### рџ“‹ Р—Р°РїР»Р°РЅРёСЂРѕРІР°РЅРѕ (Sprint 2-3)
- [ ] **SendPulse API РёРЅС‚РµРіСЂР°С†РёСЏ** - С…СЂР°РЅРµРЅРёРµ РїРѕРґРїРёСЃРѕРє РІ Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРµ
- [ ] **РЈРєСЂР°РёРЅСЃРєР°СЏ Р»РѕРєР°Р»РёР·Р°С†РёСЏ** (`ua.mastermarat.com`)
- [ ] **AI-РїРµСЂРµРІРѕРґС‹ РІРёРґРµРѕ** С‡РµСЂРµР· HeyGen AI
- [ ] **Custom domain** РґР»СЏ Р»РµРЅРґРёРЅРіР°
- [ ] **Email Р°РІС‚РѕРјР°С‚РёР·Р°С†РёРё** (Welcome + Course sequences)
- [ ] **Telegram РёРЅС‚РµРіСЂР°С†РёСЏ** РґР»СЏ РїРѕРґРґРµСЂР¶РєРё РєР»РёРµРЅС‚РѕРІ

---

## рџ› пёЏ Р Р°Р·СЂР°Р±РѕС‚РєР°

### РўСЂРµР±РѕРІР°РЅРёСЏ Рє РѕРєСЂСѓР¶РµРЅРёСЋ
- **Node.js** в‰Ґ18.0.0
- **npm** в‰Ґ8.0.0
- **Wrangler CLI** (Cloudflare Workers)
- **Git** РґР»СЏ version control

### РЈСЃС‚Р°РЅРѕРІРєР° Рё Р·Р°РїСѓСЃРє

```bash
# РљР»РѕРЅРёСЂРѕРІР°РЅРёРµ СЂРµРїРѕР·РёС‚РѕСЂРёСЏ
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# РЈСЃС‚Р°РЅРѕРІРєР° Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№
npm install

# Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°
npm run dev                    # http://localhost:8787

# Р”РµРїР»РѕР№
npm run deploy:dev            # РЅР° api-dev.mastermarat.com
npm run deploy                # РЅР° api.mastermarat.com (production)

# РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ
npm run test                  # Р·Р°РїСѓСЃРє API С‚РµСЃС‚РѕРІ
npm run lint                  # РїСЂРѕРІРµСЂРєР° РєРѕРґР° ESLint
npm run format                # С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ Prettier
РџРѕР»РµР·РЅС‹Рµ РєРѕРјР°РЅРґС‹
bash# РџСЂРѕСЃРјРѕС‚СЂ Р»РѕРіРѕРІ Workers
npm run logs                  # production logs
npm run logs:dev              # development logs

# Р Р°Р±РѕС‚Р° СЃ R2 Storage
wrangler r2 object list mastermarat-videos
wrangler r2 object put mastermarat-videos/videos/course1/lesson1.mp4 --file="lesson1.mp4"

# Р Р°Р±РѕС‚Р° СЃ РєРѕРЅС‚РµРЅС‚РѕРј
node scripts/upload_content_to_r2.js    # Р·Р°РіСЂСѓР·РєР° JSON РєРѕРЅС‚РµРЅС‚Р°
node scripts/test-api.js                # С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ endpoints

рџ”— API Documentation
Р‘Р°Р·РѕРІС‹Р№ URL

Production: https://api.mastermarat.com
Development: https://api-dev.mastermarat.com

Endpoints
РћР±С‰РёРµ

GET / - Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API 

... [CONTENT TRUNCATED - FILE TOO LARGE] ...
```

---

### `data/import/lesson-template.md` (1.77 KB)

```markdown
# РЁР°Р±Р»РѕРЅ СѓСЂРѕРєР° MasterMarat

## TITLE: Рћ РІР°Р¶РЅРѕСЃС‚Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРіРѕ РїРѕРґС…РѕРґР°

## VIDEO: lesson01.mp4

## THUMBNAIL: lesson01.jpg

## CONTENT_POINTS:
- Р”РІРёР¶РµРЅРёРµ (Р·РґРѕСЂРѕРІС‹Рµ СЃСѓСЃС‚Р°РІС‹)
- Р’РѕРґРЅС‹Р№ Р±Р°Р»Р°РЅСЃ (Р¶РёРґРєРѕСЃС‚Рё РІ РѕСЂРіР°РЅРёР·РјРµ)
- Р”С‹С…Р°РЅРёРµ (Р±РµР· РЅРµРіРѕ РѕСЃС‚Р°Р»СЊРЅРѕРµ - Р±РµСЃСЃРјС‹СЃР»РµРЅРЅРѕ)

## IMPORTANT_NOTES:
- РќР° СЃР°РјРѕРј РґРµР»Рµ В«СЃР»РѕРЅРѕРІВ» РЅР°РјРЅРѕРіРѕ Р±РѕР»СЊС€Рµ, РїРѕС‚РѕРјСѓ С‡С‚Рѕ С‡РµР»РѕРІРµС‡РµСЃРєРёР№ РѕСЂРіР°РЅРёР·Рј РїРѕС…РѕР¶ РЅР° Р°РІС‚РѕРјРѕР±РёР»СЊ
- РљР°Р¶РґС‹Р№ РѕСЂРіР°РЅ, РєР°Р¶РґС‹Р№ С†РёРєР», РєР°Р¶РґС‹Р№ РіРѕСЂРјРѕРЅ РІР°Р¶РЅС‹ Рё С‚РµСЃРЅРѕ СЃРІСЏР·Р°РЅС‹ РјРµР¶РґСѓ СЃРѕР±РѕР№
- РџСЂРё РЅР°СЂСѓС€РµРЅРёРё СЂР°Р±РѕС‚С‹ Р»СЋР±РѕРіРѕ РёР· РѕС‚РґРµР»РѕРІ РґРёСЃС„СѓРЅРєС†РёСЏ РїСЂРѕСЏРІРёС‚СЃСЏ Рё РЅР° РґСЂСѓРіРёС…

## ADDITIONAL_INFO:
- Р’ СЌС‚РѕРј РєСѓСЂСЃРµ Р±СѓРґРµС‚ РґР°РЅР° РєСЂР°С‚РєР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ РјРµС…Р°РЅРёРєРё СЂР°Р±РѕС‚С‹
- РћР±СЉРµРј РґРѕСЃС‚Р°С‚РѕС‡РЅС‹Р№ РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ РєРѕРЅС†РµРїС†РёРё РїРѕРґР°С‡Рё РёРЅС„РѕСЂРјР°С†РёРё
- Р‘Р°Р·РѕРІС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё РїСЂРё СЂРµРіСѓР»СЏСЂРЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё РґР°РґСѓС‚ РїРѕР»РѕР¶РёС‚РµР»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚

## MATERIALS:
[PDF] workbook.pdf | Р Р°Р±РѕС‡Р°СЏ С‚РµС‚СЂР°РґСЊ Рє СѓСЂРѕРєСѓ
[PDF] exercises.pdf | РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ СЃР°РјРѕСЃС‚РѕСЏС‚РµР»СЊРЅРѕР№ СЂР°Р±РѕС‚С‹
[LINK] https://youtube.com/watch?v=xxx | Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕРµ РІРёРґРµРѕ РЅР° YouTube

## NOTES:
Р—РґРµСЃСЊ РјРѕР¶РЅРѕ РїРёСЃР°С‚СЊ Р»СЋР±С‹Рµ Р·Р°РјРµС‚РєРё РґР»СЏ СЃРµР±СЏ, РѕРЅРё РЅРµ РїРѕРїР°РґСѓС‚ РІ С„РёРЅР°Р»СЊРЅС‹Р№ JSON.
РќР°РїСЂРёРјРµСЂ: Р·Р°РїРёСЃР°РЅРѕ РІ СЃС‚СѓРґРёРё 15.06.2024, РЅСѓР¶РЅРѕ РїРµСЂРµР·Р°РїРёСЃР°С‚СЊ РІСЃС‚СѓРїР»РµРЅРёРµ.
```

---

### `docs/Development/API_REFERENCE.md` (14.73 KB)

```markdown
# API Reference - MasterMarat

> РџРѕР»РЅР°СЏ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ РїРѕ РІСЃРµРј endpoints API v1.0

## рџ“‹ РЎРѕРґРµСЂР¶Р°РЅРёРµ

- [Р‘Р°Р·РѕРІР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ](#Р±Р°Р·РѕРІР°СЏ-РёРЅС„РѕСЂРјР°С†РёСЏ)
- [РђСѓС‚РµРЅС‚РёС„РёРєР°С†РёСЏ](#Р°СѓС‚РµРЅС‚РёС„РёРєР°С†РёСЏ)
- [Endpoints](#endpoints)
  - [GET / - API Documentation](#get---api-documentation)
  - [GET /test - Token Testing](#get-test---token-testing)
  - [GET /player/{courseId}/{lessonId} - Learning Player](#get-playercourseidlessonid---learning-player)
  - [GET /archive/{courseId} - Archive Player](#get-archivecourseid---archive-player)
  - [GET /thumbnails/{courseId}/{filename} - Thumbnails](#get-thumbnailscourseidfilename---thumbnails)
  - [GET /video/{courseId}/{filename} - Video Streaming](#get-videocourseidfilename---video-streaming)
  - [POST /webhook/purchase - Purchase Webhook](#post-webhookpurchase---purchase-webhook)
- [РљРѕРґС‹ РѕС€РёР±РѕРє](#РєРѕРґС‹-РѕС€РёР±РѕРє)
- [Rate Limiting](#rate-limiting)
- [РџСЂРёРјРµСЂС‹ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ](#РїСЂРёРјРµСЂС‹-РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ)

---

## рџЊђ Р‘Р°Р·РѕРІР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ

### Base URLs
- **Production**: `https://api.mastermarat.com`
- **Development**: `https://api-dev.mastermarat.com`
- **Local**: `http://localhost:8787`

### РћР±С‰РёРµ Р·Р°РіРѕР»РѕРІРєРё

Р’СЃРµ РѕС‚РІРµС‚С‹ РІРєР»СЋС‡Р°СЋС‚ СЃР»РµРґСѓСЋС‰РёРµ CORS Р·Р°РіРѕР»РѕРІРєРё:
```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Р¤РѕСЂРјР°С‚С‹ РѕС‚РІРµС‚РѕРІ
РЈСЃРїРµС€РЅС‹Рµ РѕС‚РІРµС‚С‹ (JSON):
json{
  "status": "success",
  "data": { ... }
}
РћС€РёР±РєРё (JSON):
json{
  "status": "error",
  "message": "Error description",
  "details": { ... }
}

рџ”ђ РђСѓС‚РµРЅС‚РёС„РёРєР°С†РёСЏ
РњРµС‚РѕРґС‹ Р°СѓС‚РµРЅС‚РёС„РёРєР°С†РёРё
API РёСЃРїРѕР»СЊР·СѓРµС‚ С‚РѕРєРµРЅ-based Р°СѓС‚РµРЅС‚РёС„РёРєР°С†РёСЋ С‡РµСЂРµР· query РїР°СЂР°РјРµС‚СЂС‹:
httpGET /video/course1/video.mp4?token=YOUR_TOKEN_HERE
РўРёРїС‹ С‚РѕРєРµРЅРѕРІ
РўРёРїР¤РѕСЂРјР°С‚РџСЂРёРјРµСЂРџСЂР°РІР° РґРѕСЃС‚СѓРїР°Test TokenРЎС‚Р°С‚РёС‡РЅР°СЏ СЃС‚СЂРѕРєР°superuser_mastermarat_2025РћРїСЂРµРґРµР»РµРЅС‹ РІ РєРѕРЅС„РёРіРµUser Token{emailHash}_{courseId}_{timestamp}aGVsbG8_course1_lqr5n8kРќР° РѕСЃРЅРѕРІРµ РїРѕРґРїРёСЃРєРёDemo Tokendemo{number}demo123РћРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї
РџСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅР°
bash# РџСЂРѕРІРµСЂРёС‚СЊ РІР°Р»РёРґРЅРѕСЃС‚СЊ С‚РѕРєРµРЅР°
curl "https://api.mastermarat.com/test"

рџ“љ Endpoints
GET / - API Documentation
Р’РѕР·РІСЂР°С‰Р°РµС‚ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЋ API Рё СЃРїРёСЃРѕРє РІСЃРµС… endpoints.
Request:
httpGET /
Response:
json{
  "status": "success",
  "message": "MasterMarat API РґР»СЏ РєСѓСЂСЃР° \"РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ\"",
  "version": "1.0.0",
  "worker_url": "https://api.mastermarat.com",
  "r2_connected": "Yes",
  "endpoints": {
    "GET /": "Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API",
    "GET /test": "РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё",
    "GET /player/{courseId}/{lessonId}?token=XXX": "РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ",
    "GET /archive/{courseId}?token=XXX": "РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№",
    "GET /thumbnails/{courseId}/{filename}": "РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ",
    "GET /video/{courseId}/{filename}?token=XXX": "Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ",
    "POST /webhook/purchase": "SendPulse webhook"
  },
  "test_links": {
    "test_page": "https://api.mastermarat.com/test",
    "player_learning": "https://api.mastermarat.com/player/course1/week1_lesson1?token=superuser_mastermarat_2025",
    "player_archive": "https://api.mastermarat.com/archive/course1?token=superuser_mastermarat_2025",
    "thumbnail": "https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg",
    "video": "https://api.mastermarat.com/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025"
  },
  "courses": { ... },
  "timestamp": "2025-07-01T12:00:00.000Z"
}

GET /test - Token Testing
РРЅС‚РµСЂР°РєС‚РёРІРЅР°СЏ СЃС‚СЂР°РЅРёС†Р° РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ С‚РѕРєРµРЅРѕРІ.
Request:
httpGET /test
Response:
httpContent-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML СЃС‚СЂР°РЅРёС†Р° СЃ С„РѕСЂРјРѕР№ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ С‚РѕРєРµРЅРѕРІ -->
</html>
Р¤СѓРЅРєС†РёРё СЃС‚СЂР°РЅРёС†С‹:

РћС‚РѕР±СЂР°Р¶РµРЅРёРµ РІСЃРµС… С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ
РџСЂРѕРІРµСЂРєР° РїСЂР°РІ РґРѕСЃС‚СѓРїР° РґР»СЏ РєР°Р¶РґРѕРіРѕ С‚РѕРєРµРЅР°
РџСЂСЏРјС‹Рµ СЃСЃС‹Р»РєРё РЅР° С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ endpoints


GET /player/{courseId}/{lessonId} - Learning Player
HTML РїР»РµРµСЂ РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° СѓСЂРѕРєР° РІ СЂРµР¶РёРјРµ РѕР±СѓС‡РµРЅРёСЏ (Р±РµР· РЅР°РІРёРіР°С†РёРё).
Request:
httpGET /player/{courseId}/{lessonId}?token={token}
Path Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћРїРёСЃР°РЅРёРµРџСЂРёРјРµСЂcourseIdstringID РєСѓСЂСЃР°course1lessonIdstringID СѓСЂРѕРєР°week1_lesson1
Query Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћР±СЏР·Р°С‚РµР»СЊРЅС‹Р№РћРїРёСЃР°РЅРёРµtokenstringР”Р°РўРѕРєРµРЅ РґРѕСЃС‚СѓРїР°
Response (Success):
httpHTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML РїР»РµРµСЂ СЃ РІРёРґРµРѕ Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рј РєРѕРЅС‚РµРЅС‚РѕРј -->
</html>
Response (Unauthorized):
json{
  "status": "error",
  "message": "Invalid or missing token"
}
Response (Not Found):
json{
  "status": "error",
  "message": "Lesson not found"
}

GET /archive/{courseId} - Archive Player
HTML СЃС‚СЂР°РЅРёС†Р° СЃРѕ РІСЃРµРјРё СѓСЂРѕРєР°РјРё РєСѓСЂСЃР° РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° РІ СЂРµР¶РёРјРµ Р°СЂС…РёРІР°.
Request:
httpGET /archive/{courseId}?token={token}
Path Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћРїРёСЃР°РЅРёРµРџСЂРёРјРµСЂcourseIdstringID РєСѓСЂСЃР°course1
Query Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћР±СЏР·Р°С‚РµР»СЊРЅС‹Р№РћРїРёСЃР°РЅРёРµtokenstringР”Р°РўРѕРєРµРЅ СЃ РїСЂР°РІР°РјРё РЅР° Р°СЂС…РёРІ
Response (Success):
httpHTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML СЃС‚СЂР°РЅРёС†Р° СЃ СЃРµС‚РєРѕР№ РІСЃРµС… СѓСЂРѕРєРѕРІ РєСѓСЂСЃР° -->
</html>
Features:

РЎРµС‚РєР° РїСЂРµРІСЊСЋ РІСЃРµС… СѓСЂРѕРєРѕРІ
РџСЂСЏРјС‹Рµ СЃСЃС‹Р»РєРё РЅР° РєР°Р¶РґС‹Р№ СѓСЂРѕРє
РРЅС„РѕСЂРјР°С†РёСЏ Рѕ РїСЂРѕРіСЂРµСЃСЃРµ (TODO)


GET /thumbnails/{courseId}/{filename} - Thumbnails
РџСѓР±Р»РёС‡РЅС‹Р№ РґРѕСЃС‚СѓРї Рє РїСЂРµРІСЊСЋ РёР·РѕР±СЂР°Р¶РµРЅРёСЏРј СѓСЂРѕРєРѕРІ.
Request:
httpGET /thumbnails/{courseId}/{filename}
Path Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћРїРёСЃР°РЅРёРµРџСЂРёРјРµСЂcourseIdstringID РєСѓСЂСЃР°course1filenamestringРРјСЏ С„Р°Р№Р»Р° РёР»Рё ID СѓСЂРѕРєР°week1_lesson1.jpg
Response (Success):
httpHTTP/1.1 200 OK
Content-Type: image/jpeg
Cache-Control: public, max-age=3600

[Binary image data]
Response (Not Found):
json{
  "status": "error",
  "message": "Thumbnail not found"
}
РћСЃРѕР±РµРЅРЅРѕСЃС‚Рё:

РќРµ С‚СЂРµР±СѓРµС‚ С‚РѕРєРµРЅ (РїСѓР±Р»РёС‡РЅС‹Р№ РґРѕСЃС‚СѓРї)
РљРµС€РёСЂРѕРІР°РЅРёРµ РЅР° 1 С‡Р°СЃ
РџРѕРґРґРµСЂР¶РєР° РѕР±СЂР°С‰РµРЅРёСЏ РїРѕ lessonId


GET /video/{courseId}/{filename} - Video Streaming
Р—Р°С‰РёС‰РµРЅРЅС‹Р№ СЃС‚СЂРёРјРёРЅРі РІРёРґРµРѕ СЃ РїРѕРґРґРµСЂР¶РєРѕР№ HTTP Range requests.
Request:
httpGET /video/{courseId}/{filename}?token={token}
Range: bytes=0-1048575
Path Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћРїРёСЃР°РЅРёРµРџСЂРёРјРµСЂcourseIdstringID РєСѓСЂСЃР°course1filenamestringРРјСЏ РІРёРґРµРѕ С„Р°Р№Р»Р°week1_lesson1.mp4
Query Parameters:
РџР°СЂР°РјРµС‚СЂРўРёРїРћР±СЏР·Р°С‚РµР»СЊРЅС‹Р№РћРїРёСЃР°РЅРёРµtokenstringР”Р°РўРѕРєРµРЅ РґРѕСЃС‚СѓРїР°
Headers:
HeaderРћРїРёСЃР°РЅРёРµРџСЂРёРјРµСЂRangeР—Р°РїСЂРѕСЃ С‡Р°СЃС‚Рё С„Р°Р№Р»Р°bytes=0-1048575
Response (Success - Full):
httpHTTP/1.1 200 OK
Content-Type: video/mp4
Content-Length: 52428800
Accept-Ranges: bytes
Cache-Control: private, max-age=3600

[Binary video data]
Response (Success - Partial):
httpHTTP/1.1 206 Partial Content
Content-Type: video/mp4
Content-Range: bytes 0-1048575/52428800
Content-Length: 1048576
Accept-Ranges: bytes

[Binary video data chunk]
Response (Unauthorized):
json{
  "status": "error",
  "message": "Invalid or missing token"
}

POST /webhook/purchase - Purchase Webhook
Webhook endpoint РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё РїРѕРєСѓРїРѕРє РѕС‚ SendPulse.
Request:
httpPOST /webhook/purchase
Content-Type: application/json
X-Webhook-Signature: {signature}

{
  "email": "user@example.com",
  "name": "РРІР°РЅ РРІР°РЅРѕРІ",
  "subscription_type": "standard",
  "payment_amount": 150.00,
  "currency": "USD",
  "order_id": "SP123456",
  "courses": ["course1"],
  "valid_until": "2025-10-01"
}
Headers:
HeaderРћР±СЏР·Р°С‚РµР»СЊРЅС‹Р№РћРїРёСЃР°РЅРёРµX-Webhook-SignatureР”Р°HMAC РїРѕРґРїРёСЃСЊ РґР»СЏ РІР°Р»РёРґР°С†РёРё
Request Body:
РџРѕР»РµРўРёРїРћРїРёСЃР°РЅРёРµemailstringEmail РїРѕРєСѓРїР°С‚РµР»СЏnamestringРРјСЏ РїРѕРєСѓРїР°С‚РµР»СЏsubscription_typestringРўРёРї РїРѕРґРїРёСЃРєРё (basic/standard/vip)payment_amountnumberРЎСѓРјРјР° РїР»Р°С‚РµР¶Р°currencystringР’Р°Р»СЋС‚Р° (USD/EUR/UAH)order_idstringID Р·Р°РєР°Р·Р° РІ SendPulsecoursesarrayРЎРїРёСЃРѕРє РґРѕСЃС‚СѓРїРЅС‹С… РєСѓСЂСЃРѕРІvalid_untilstringР”Р°С‚Р° РѕРєРѕРЅС‡Р°РЅРёСЏ РїРѕРґРїРёСЃРєРё
Response (Success):
json{
  "status": "success",
  "message": "Purchase processed",
  "token": "generated_access_token",
  "access_url": "https://mastermarat.com/access?token=..."
}
Response (Invalid Signature):
json{
  "status": "error",
  "message": "Invalid webhook signature"
}

вќЊ РљРѕРґС‹ РѕС€РёР±РѕРє
HTTP Status Codes
РљРѕРґРќР°Р·РІР°РЅРёРµРћРїРёСЃР°РЅРёРµ200OKРЈСЃРїРµС€РЅС‹Р№ Р·Р°РїСЂРѕСЃ206Partial ContentР§Р°СЃС‚РёС‡РЅС‹Р№ РєРѕРЅС‚РµРЅС‚ (РІРёРґРµРѕ streaming)400Bad RequestРќРµРІРµСЂРЅС‹Рµ РїР°СЂР°РјРµС‚СЂС‹ Р·Р°РїСЂРѕСЃР°401UnauthorizedРћС‚СЃСѓС‚СЃС‚РІСѓРµС‚ РёР»Рё РЅРµРІРµСЂРЅС‹Р№ С‚РѕРєРµРЅ404Not FoundР РµСЃСѓСЂСЃ РЅРµ РЅР°Р№РґРµРЅ405Method Not AllowedРњРµС‚РѕРґ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚СЃСЏ500Internal Server ErrorР’РЅСѓС‚СЂРµРЅРЅСЏСЏ РѕС€РёР±РєР° СЃРµСЂРІРµСЂР°
РЎС‚СЂСѓРєС‚СѓСЂР° РѕС€РёР±РѕРє
json{
  "status": "error",
  "message": "Human-readable error message",
  "details": {
    "code": "ERROR_CODE",
    "field": "field_name",
    "value": "invalid_value"
  }
}
РљРѕРґС‹ РѕС€РёР±РѕРє РїСЂРёР»РѕР¶РµРЅРёСЏ
РљРѕРґРћРїРёСЃР°РЅРёРµINVALID_TOKENРќРµРІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚ С‚РѕРєРµРЅР°TOKEN_EXPIREDРўРѕРєРµРЅ РёСЃС‚РµРєNO_ACCESSРќРµС‚ РґРѕСЃС‚СѓРїР° Рє СЂРµСЃСѓСЂСЃСѓCOURSE_NOT_FOUNDРљСѓСЂСЃ РЅРµ РЅР°Р№РґРµРЅLESSON_NOT_FOUNDРЈСЂРѕРє РЅРµ РЅР°Р№РґРµРЅVIDEO_NOT_FOUNDР’РёРґРµРѕ С„Р°Р№Р» РЅРµ РЅР°Р№РґРµРЅINVALID_SIGNATUREРќРµРІРµСЂРЅР°СЏ РїРѕРґРїРёСЃСЊ webhook

вљЎ Rate Limiting
Р›РёРјРёС‚С‹ РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ
EndpointР›РёРјРёС‚РћРєРЅРѕ/video/*100 Р·Р°РїСЂРѕСЃРѕРІ1 РјРёРЅСѓС‚Р°/player/*50 Р·Р°РїСЂРѕСЃРѕРІ1 РјРёРЅСѓС‚Р°/webhook/*10 Р·Р°РїСЂРѕСЃРѕРІ1 РјРёРЅСѓС‚Р°РћСЃС‚Р°Р»СЊРЅС‹Рµ200 Р·Р°РїСЂРѕСЃРѕРІ1 РјРёРЅСѓС‚Р°
Headers РѕС‚РІРµС‚Р°
httpX-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1625097600
РџСЂРµРІС‹С€РµРЅРёРµ Р»РёРјРёС‚Р°
httpHTTP/1.1 429 Too Many Requests
Retry-After: 60

{
  "status": "error",
  "message": "Rate limit exceeded",
  "details": {
    "limit": 100,
    "reset": 1625097600
  }
}

рџ’Ў РџСЂРёРјРµСЂС‹ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ
JavaScript (Fetch API)
javascript// РџРѕР»СѓС‡РµРЅРёРµ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё API
const response = await fetch('https://api.mastermarat.com/');
const data = await response.json();
console.log(data);

// Р—Р°РіСЂСѓР·РєР° РїР»РµРµСЂР° СЃ С‚РѕРєРµРЅРѕРј
const token = 'superuser_mastermarat_2025';
const playerUrl = `https://api.mastermarat.com/player/course1/week1_lesson1?token=${token}`;
window.location.href = playerUrl;

// РЎС‚СЂРёРјРёРЅРі РІРёРґРµРѕ
const video = document.querySelector('video');
video.src = `https://api.mastermarat.com/video/course1/video.mp4?token=${token}`;
cURL
bash# Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
curl https://api.mastermarat.com/

# РџР»РµРµСЂ СЃ С‚РѕРєРµРЅРѕРј
curl "https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123"

# РЎРєР°С‡РёРІР°РЅРёРµ РІРёРґРµРѕ (РїРµСЂРІС‹Рµ 10MB)
curl -H "Range: bytes=0-10485760" \
  "https://api.mastermarat.com/video/course1/video.mp4?token=demo123" \
  -o video_part.mp4

# Webhook С‚РµСЃС‚
curl -X POST https://api.mastermarat.com/webhook/purchase \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Signature: test_signature" \
  -d '{
    "email": "test@example.com",
    "subscription_type": "standard",
    "courses": ["course1"]
  }'
Python
pythonimport requests

# Р‘Р°Р·РѕРІС‹Р№ URL
BASE_URL = "https://api.mastermarat.com"
TOKEN = "demo123"

# РџРѕР»СѓС‡РёС‚СЊ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЋ
response = requests.get(f"{BASE_URL}/")
print(response.json())

# Р—Р°РіСЂСѓР·РёС‚СЊ РїСЂРµРІСЊСЋ (РїСѓР±Р»РёС‡РЅРѕРµ)
thumbnail = requests.get(f"{BASE_URL}/thumbnails/course1/week1_lesson1.jpg")
with open("thumbnail.jpg", "wb") as f:
    f.write(thumbnail.content)

# РЎС‚СЂРёРјРёРЅРі РІРёРґРµРѕ РїРѕ С‡Р°СЃС‚СЏРј
headers = {"Range": "bytes=0-1048575"}
video_response = requests.get(
    f"{BASE_URL}/video/course1/video.mp4?token={TOKEN}",
    headers=headers,
    stream=True
)
print(f"Status: {video_response.status_code}")
print(f"Content-Range: {video_response.headers.get('Content-Range')}")
РРЅС‚РµРіСЂР°С†РёСЏ РІ HTML
html<!DOCTYPE html>
<html>
<head>
  <title>MasterMarat Player Integration</title>
</head>
<body>
  <!-- Р’СЃС‚СЂР°РёРІР°РЅРёРµ РїР»РµРµСЂР° С‡РµСЂРµР· iframe -->
  <iframe 
    src="https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123"
    width="100%" 
    height="600"
    frameborder="0"
    allowfullscreen>
  </iframe>

  <!-- РџСЂСЏРјР°СЏ Р·Р°РіСЂСѓР·РєР° РІРёРґРµРѕ -->
  <video controls width="100%">
    <source 
      src="https://api.mastermarat.com/video/course1/video.mp4?token=demo123" 
      type="video/mp4">
  </video>

  <!-- РџСЂРµРІСЊСЋ РёР·РѕР±СЂР°Р¶РµРЅРёРµ -->
  <img 
    src="https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg" 
    alt="Lesson preview"
    width="320">
</body>
</html>

рџ”’ Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ
Р РµРєРѕРјРµРЅРґР°С†РёРё

РќРёРєРѕРіРґР° РЅРµ РїРµСЂРµРґР°РІР°Р№С‚Рµ С‚РѕРєРµРЅС‹ РІ URL РЅР° РїСѓР±Р»РёС‡РЅС‹С… СЃС‚СЂР°РЅРёС†Р°С…
РСЃРїРѕР»СЊР·СѓР№С‚Рµ HTTPS РґР»СЏ РІСЃРµС… Р·Р°РїСЂРѕСЃРѕРІ
РќРµ РєРµС€РёСЂСѓР№С‚Рµ РѕС‚РІРµС‚С‹ СЃ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹РјРё РґР°РЅРЅС‹РјРё
Р’Р°Р»РёРґРёСЂСѓР№С‚Рµ webhook РїРѕРґРїРёСЃРё РЅР° СЃС‚РѕСЂРѕРЅРµ СЃРµСЂРІРµСЂР°

CORS РїРѕР»РёС‚РёРєР°
API РїРѕРґРґРµСЂР¶РёРІР°РµС‚ CORS РґР»СЏ РІСЃРµС… origin:
httpAccess-Control-Allow-Origin: *
Р”Р»СЏ production СЂРµРєРѕРјРµРЅРґСѓРµС‚СЃСЏ РѕРіСЂР°РЅРёС‡РёС‚СЊ СЃРїРёСЃРѕРє СЂР°Р·СЂРµС€РµРЅРЅС‹С… РґРѕРјРµРЅРѕРІ.

рџ“ћ РџРѕРґРґРµСЂР¶РєР°

РўРµС…РЅРёС‡РµСЃРєРёРµ РІРѕРїСЂРѕСЃС‹: РЎРѕР·РґР°Р№С‚Рµ issue РІ GitHub
API РєР»СЋС‡Рё: РћР±СЂР°С‚РёС‚РµСЃСЊ Рє Р°РґРјРёРЅРёСЃС‚СЂР°С‚РѕСЂСѓ
РЎСЂРѕС‡РЅС‹Рµ РїСЂРѕР±Р»РµРјС‹: support@mastermarat.com


API Version: 1.0.0 | РџРѕСЃР»РµРґРЅРµРµ РѕР±РЅРѕРІР»РµРЅРёРµ: 01.07.2025
```

---

### `docs/Development/ARCHITECTURE.md` (10.9 KB)

```markdown
# РђСЂС…РёС‚РµРєС‚СѓСЂР° MasterMarat API

> Р”РµС‚Р°Р»СЊРЅРѕРµ РѕРїРёСЃР°РЅРёРµ РјРѕРґСѓР»СЊРЅРѕР№ Р°СЂС…РёС‚РµРєС‚СѓСЂС‹ РїРѕСЃР»Рµ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР° РѕС‚ 01.07.2025

## рџ“‹ РЎРѕРґРµСЂР¶Р°РЅРёРµ

- [РћР±Р·РѕСЂ Р°СЂС…РёС‚РµРєС‚СѓСЂС‹](#РѕР±Р·РѕСЂ-Р°СЂС…РёС‚РµРєС‚СѓСЂС‹)
- [РЎС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р°](#СЃС‚СЂСѓРєС‚СѓСЂР°-РїСЂРѕРµРєС‚Р°)
- [РћСЃРЅРѕРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹](#РѕСЃРЅРѕРІРЅС‹Рµ-РєРѕРјРїРѕРЅРµРЅС‚С‹)
- [РџРѕС‚РѕРє РґР°РЅРЅС‹С…](#РїРѕС‚РѕРє-РґР°РЅРЅС‹С…)
- [РњРѕРґСѓР»Рё Рё РёС… РЅР°Р·РЅР°С‡РµРЅРёРµ](#РјРѕРґСѓР»Рё-Рё-РёС…-РЅР°Р·РЅР°С‡РµРЅРёРµ)
- [РРЅС‚РµРіСЂР°С†РёРё](#РёРЅС‚РµРіСЂР°С†РёРё)
- [Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ](#Р±РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ)
- [РњР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ](#РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ)

---

## рџЋЇ РћР±Р·РѕСЂ Р°СЂС…РёС‚РµРєС‚СѓСЂС‹

### РўРµС…РЅРѕР»РѕРіРёС‡РµСЃРєРёР№ СЃС‚РµРє
- **Runtime**: Cloudflare Workers (V8 Isolates)
- **РҐСЂР°РЅРёР»РёС‰Рµ**: Cloudflare R2 (S3-СЃРѕРІРјРµСЃС‚РёРјРѕРµ)
- **Email**: SendPulse Automation 360
- **РџР»Р°С‚РµР¶Рё**: Fondy (UAH) + Monobank
- **CDN**: Cloudflare Global Network
- **Р”РѕРјРµРЅС‹**: mastermarat.com + РїРѕРґРґРѕРјРµРЅС‹

### РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ РїСЂРёРЅС†РёРїС‹
1. **Serverless-first** - РЅРµС‚ СЃРµСЂРІРµСЂРѕРІ РґР»СЏ СѓРїСЂР°РІР»РµРЅРёСЏ
2. **Edge Computing** - РІС‹РїРѕР»РЅРµРЅРёРµ РєРѕРґР° Р±Р»РёР¶Рµ Рє РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ
3. **РњРѕРґСѓР»СЊРЅРѕСЃС‚СЊ** - СЂР°Р·РґРµР»РµРЅРёРµ РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё
4. **Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ** - С‚РѕРєРµРЅС‹ РІРјРµСЃС‚Рѕ СЃРµСЃСЃРёР№
5. **РњР°СЃС€С‚Р°Р±РёСЂСѓРµРјРѕСЃС‚СЊ** - Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРµ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ

---

## рџ“Ѓ РЎС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р°
mastermarat-project/
в”њв”Ђв”Ђ workers/
в”‚   в””в”Ђв”Ђ api/
в”‚       в”њв”Ђв”Ђ src/
в”‚       в”‚   в”њв”Ђв”Ђ worker-new.js          # РўРѕС‡РєР° РІС…РѕРґР° (СЂРѕСѓС‚РµСЂ)
в”‚       в”‚   в”њв”Ђв”Ђ config/                # РљРѕРЅС„РёРіСѓСЂР°С†РёРё
в”‚       в”‚   в”њв”Ђв”Ђ handlers/              # HTTP РѕР±СЂР°Р±РѕС‚С‡РёРєРё
в”‚       в”‚   в”њв”Ђв”Ђ services/              # Р‘РёР·РЅРµСЃ-Р»РѕРіРёРєР°
в”‚       в”‚   в””в”Ђв”Ђ utils/                 # РЈС‚РёР»РёС‚С‹
в”‚       в”њв”Ђв”Ђ wrangler.toml              # РљРѕРЅС„РёРіСѓСЂР°С†РёСЏ Cloudflare
в”‚       в””в”Ђв”Ђ package.json               # Р—Р°РІРёСЃРёРјРѕСЃС‚Рё
в”њв”Ђв”Ђ content/                           # Р›РѕРєР°Р»СЊРЅС‹Р№ РєРѕРЅС‚РµРЅС‚ РґР»СЏ С‚РµСЃС‚РѕРІ
в”њв”Ђв”Ђ docs/                              # Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ
в””в”Ђв”Ђ scripts/                           # РЎРєСЂРёРїС‚С‹ РґРµРїР»РѕСЏ

---

## рџ”§ РћСЃРЅРѕРІРЅС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹

### 1. Worker Router (worker-new.js)
```javascript
// РњРёРЅРёРјР°Р»РёСЃС‚РёС‡РЅС‹Р№ СЂРѕСѓС‚РµСЂ - 30 СЃС‚СЂРѕРє
// РўРѕР»СЊРєРѕ РјР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ Р·Р°РїСЂРѕСЃРѕРІ Рє handlers
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // РњР°СЂС€СЂСѓС‚РёР·Р°С†РёСЏ РїРѕ pathname
    if (url.pathname === '/') return handleApiDocumentation(...)
    if (url.pathname.startsWith('/player/')) return handlePlayerLearning(...)
    // ...
  }
}
2. Handlers (РѕР±СЂР°Р±РѕС‚С‡РёРєРё Р·Р°РїСЂРѕСЃРѕРІ)
РљР°Р¶РґС‹Р№ handler РѕС‚РІРµС‡Р°РµС‚ Р·Р° СЃРІРѕР№ endpoint:
HandlerEndpointР¤СѓРЅРєС†РёСЏapi.jsGET /Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ APItest.jsGET /testРўРµСЃС‚РёСЂРѕРІР°РЅРёРµ С‚РѕРєРµРЅРѕРІthumbnails.jsGET /thumbnails/*РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋvideo.jsGET /video/*Р—Р°С‰РёС‰РµРЅРЅС‹Р№ СЃС‚СЂРёРјРёРЅРіplayer-learning.jsGET /player/*РџР»РµРµСЂ РѕР±СѓС‡РµРЅРёСЏplayer-archive.jsGET /archive/*РџР»РµРµСЂ Р°СЂС…РёРІР°webhooks.jsPOST /webhook/*SendPulse РёРЅС‚РµРіСЂР°С†РёСЏ
3. Services (Р±РёР·РЅРµСЃ-Р»РѕРіРёРєР°)
РџРµСЂРµРёСЃРїРѕР»СЊР·СѓРµРјР°СЏ Р»РѕРіРёРєР°:

auth.js - РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ Рё РїСЂР°РІ РґРѕСЃС‚СѓРїР°
sendpulse.js - СЂР°Р±РѕС‚Р° СЃ SendPulse API
content.js - Р·Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РёР· R2

4. Utils (СѓС‚РёР»РёС‚С‹)
Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё:

cors.js - CORS Р·Р°РіРѕР»РѕРІРєРё Рё РѕР±РµСЂС‚РєРё
errors.js - СЃС‚Р°РЅРґР°СЂС‚РёР·РёСЂРѕРІР°РЅРЅС‹Рµ РѕС€РёР±РєРё
token.js - РіРµРЅРµСЂР°С†РёСЏ Рё РІР°Р»РёРґР°С†РёСЏ С‚РѕРєРµРЅРѕРІ

5. Config (РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ)
РЎС‚Р°С‚РёС‡РµСЃРєРёРµ РґР°РЅРЅС‹Рµ:

courses.js - СЃС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃРѕРІ Рё СѓСЂРѕРєРѕРІ
constants.js - С‚РѕРєРµРЅС‹, URL, РЅР°СЃС‚СЂРѕР№РєРё


рџ”„ РџРѕС‚РѕРє РґР°РЅРЅС‹С…
РћР±СЂР°Р±РѕС‚РєР° Р·Р°РїСЂРѕСЃР° РЅР° РїСЂРѕСЃРјРѕС‚СЂ РІРёРґРµРѕ
mermaidsequenceDiagram
    participant U as User
    participant CF as Cloudflare Edge
    participant W as Worker
    participant R2 as R2 Storage
    participant SP as SendPulse

    U->>CF: GET /player/course1/week1_lesson1?token=XXX
    CF->>W: Route to Worker
    W->>W: Parse request & validate token
    W->>SP: Check user subscription (TODO)
    SP-->>W: User data & permissions
    W->>R2: Get video metadata
    R2-->>W: Video info
    W->>W: Generate HTML player
    W-->>CF: HTML response
    CF-->>U: Render player
    U->>CF: GET /video/course1/video.mp4?token=XXX
    CF->>W: Video request
    W->>W: Validate token again
    W->>R2: Stream video with range
    R2-->>W: Video chunks
    W-->>CF: Video stream (206)
    CF-->>U: Progressive video
Webhook РѕР±СЂР°Р±РѕС‚РєР° РїРѕРєСѓРїРєРё
mermaidsequenceDiagram
    participant SP as SendPulse
    participant W as Worker
    participant R2 as R2 Storage
    
    SP->>W: POST /webhook/purchase
    W->>W: Validate webhook signature
    W->>W: Generate access token
    W->>SP: Update user tags & variables
    SP-->>W: Confirmation
    W->>SP: Trigger email sequence
    W-->>SP: 200 OK

рџ“¦ РњРѕРґСѓР»Рё Рё РёС… РЅР°Р·РЅР°С‡РµРЅРёРµ
/config/courses.js
РЎС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃРѕРІ СЃ РјРµС‚Р°РґР°РЅРЅС‹РјРё:
javascript{
  "course1": {
    title: "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ",
    lessons: {
      "week1_lesson1": {
        title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ",
        video_file: "video.mp4",
        thumbnail_file: "thumb.jpg",
        content_points: [...],
        important_notes: "...",
        additional_info: "..."
      }
    }
  }
}
/handlers/video.js
РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ СЃС‚СЂРёРјРёРЅРіР°:
javascript// РћР±СЂР°Р±РѕС‚РєР° С‡Р°СЃС‚РёС‡РЅС‹С… Р·Р°РїСЂРѕСЃРѕРІ РІРёРґРµРѕ
if (range) {
  const [start, end] = parseRange(range);
  const video = await env.R2.get(videoKey, {
    range: { offset: start, length: end - start + 1 }
  });
  return new Response(video.body, {
    status: 206,
    headers: {
      'Content-Range': `bytes ${start}-${end}/${video.size}`,
      'Accept-Ranges': 'bytes'
    }
  });
}
/services/auth.js
РњРЅРѕРіРѕСѓСЂРѕРІРЅРµРІР°СЏ СЃРёСЃС‚РµРјР° РґРѕСЃС‚СѓРїР°:
javascript{
  superuser: ['*'],          // Р’СЃРµ РєСѓСЂСЃС‹ Рё С„СѓРЅРєС†РёРё
  vip: ['course1', 'course2', 'consultation'],
  standard: ['course1', 'archive'],
  basic: ['course1'],        // РўРѕР»СЊРєРѕ РїР»РµРµСЂ
  demo: ['course1']          // РћРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї
}

рџ”Њ РРЅС‚РµРіСЂР°С†РёРё
Cloudflare R2

Bucket: mastermarat-videos
РЎС‚СЂСѓРєС‚СѓСЂР°: /content/{courseId}/{fileName}
Р”РѕСЃС‚СѓРї: Р§РµСЂРµР· Worker API, РїСЂСЏРјРѕР№ РґРѕСЃС‚СѓРї Р·Р°РєСЂС‹С‚
РљРµС€РёСЂРѕРІР°РЅРёРµ: 1 С‡Р°СЃ РґР»СЏ РІРёРґРµРѕ, 24 С‡Р°СЃР° РґР»СЏ РїСЂРµРІСЊСЋ

SendPulse API

РђРґСЂРµСЃРЅР°СЏ РєРЅРёРіР°: РҐСЂР°РЅРµРЅРёРµ РґР°РЅРЅС‹С… РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№
РџРµСЂРµРјРµРЅРЅС‹Рµ: purchase_date, subscription_type, courses_access
РђРІС‚РѕРјР°С‚РёР·Р°С†РёРё: Email РїРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚Рё РїРѕ СЃРѕР±С‹С‚РёСЏРј
Webhooks: РџРѕРєСѓРїРєР°, РѕС‚РјРµРЅР°, РїСЂРѕРґР»РµРЅРёРµ

РџР»Р°С‚РµР¶РЅС‹Рµ СЃРёСЃС‚РµРјС‹

Fondy: РњРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Рµ РїР»Р°С‚РµР¶Рё (USD/EUR)
Monobank: Р›РѕРєР°Р»СЊРЅС‹Рµ РїР»Р°С‚РµР¶Рё (UAH)
Webhook flow: Payment в†’ SendPulse в†’ Worker в†’ Access


рџ”ђ Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ
РўРѕРєРµРЅС‹ РґРѕСЃС‚СѓРїР°
javascript// Р¤РѕСЂРјР°С‚: {emailHash}_{courseId}_{timestamp}
// РџСЂРёРјРµСЂ: aGVsbG8_course1_lqr5n8k

// РџСЂРѕРІРµСЂРєР°:
1. Р’Р°Р»РёРґР°С†РёСЏ С„РѕСЂРјР°С‚Р°
2. РџСЂРѕРІРµСЂРєР° РІ SendPulse (TODO)
3. РџСЂРѕРІРµСЂРєР° РїСЂР°РІ РЅР° РєСѓСЂСЃ
4. РџСЂРѕРІРµСЂРєР° СЃСЂРѕРєР° РґРµР№СЃС‚РІРёСЏ
CORS РїРѕР»РёС‚РёРєР°
javascript{
  'Access-Control-Allow-Origin': '*',  // Р”Р»СЏ РїСѓР±Р»РёС‡РЅРѕРіРѕ API
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}
Р—Р°С‰РёС‚Р° РєРѕРЅС‚РµРЅС‚Р°

Р’РёРґРµРѕ РґРѕСЃС‚СѓРїРЅС‹ С‚РѕР»СЊРєРѕ С‡РµСЂРµР· API СЃ С‚РѕРєРµРЅРѕРј
РќРµС‚ РїСЂСЏРјС‹С… СЃСЃС‹Р»РѕРє РЅР° R2
РўРѕРєРµРЅС‹ СЃ РѕРіСЂР°РЅРёС‡РµРЅРЅС‹Рј СЃСЂРѕРєРѕРј РґРµР№СЃС‚РІРёСЏ
Rate limiting РЅР° СѓСЂРѕРІРЅРµ Cloudflare


рџ“€ РњР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ
РўРµРєСѓС‰РёРµ РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё

Р—Р°РїСЂРѕСЃРѕРІ: 100,000/РґРµРЅСЊ (Р±РµСЃРїР»Р°С‚РЅС‹Р№ РїР»Р°РЅ)
CPU РІСЂРµРјСЏ: 10ms/Р·Р°РїСЂРѕСЃ
РџРѕР»СЊР·РѕРІР°С‚РµР»РµР№: ~1,000 РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ
Р“РµРѕРіСЂР°С„РёСЏ: 200+ PoP Cloudflare

РћРїС‚РёРјРёР·Р°С†РёРё

РљРµС€РёСЂРѕРІР°РЅРёРµ: РђРіСЂРµСЃСЃРёРІРЅРѕРµ РґР»СЏ СЃС‚Р°С‚РёРєРё
Lazy loading: РџРѕРґРіСЂСѓР·РєР° РїРѕ С‚СЂРµР±РѕРІР°РЅРёСЋ
Edge computing: РњРёРЅРёРјСѓРј РѕР±СЂР°С‰РµРЅРёР№ Рє origin
Compression: Brotli РґР»СЏ HTML/JS

РџР»Р°РЅ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёСЏ
РџРѕР»СЊР·РѕРІР°С‚РµР»РµР№РџР»Р°РЅРЎС‚РѕРёРјРѕСЃС‚СЊРР·РјРµРЅРµРЅРёСЏ< 1,000Free$0РўРµРєСѓС‰Р°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°1,000-10,000Paid$5/РјРµСЃWorkers Paid РїР»Р°РЅ10,000+EnterpriseCustomKV РґР»СЏ СЃРµСЃСЃРёР№, Durable Objects

рџЋЇ РђСЂС…РёС‚РµРєС‚СѓСЂРЅС‹Рµ СЂРµС€РµРЅРёСЏ
РџРѕС‡РµРјСѓ Cloudflare Workers?

Р“Р»РѕР±Р°Р»СЊРЅР°СЏ СЃРµС‚СЊ - РЅРёР·РєР°СЏ Р·Р°РґРµСЂР¶РєР°
РђРІС‚РѕРјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ - РЅРµС‚ СѓРїСЂР°РІР»РµРЅРёСЏ СЃРµСЂРІРµСЂР°РјРё
РЎС‚РѕРёРјРѕСЃС‚СЊ - РѕРїР»Р°С‚Р° Р·Р° РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ
РџСЂРѕСЃС‚РѕС‚Р° - JavaScript/TypeScript
РРЅС‚РµРіСЂР°С†РёСЏ - R2, KV, Durable Objects

РџРѕС‡РµРјСѓ РјРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°?

Р§РёС‚Р°РµРјРѕСЃС‚СЊ - РєР°Р¶РґС‹Р№ РјРѕРґСѓР»СЊ < 200 СЃС‚СЂРѕРє
РўРµСЃС‚РёСЂСѓРµРјРѕСЃС‚СЊ - РёР·РѕР»РёСЂРѕРІР°РЅРЅР°СЏ Р»РѕРіРёРєР°
РџРѕРґРґРµСЂР¶РєР° - Р»РµРіРєРѕ РЅР°Р№С‚Рё Рё РёСЃРїСЂР°РІРёС‚СЊ
Р Р°СЃС€РёСЂСЏРµРјРѕСЃС‚СЊ - РЅРѕРІС‹Рµ features = РЅРѕРІС‹Рµ РјРѕРґСѓР»Рё

РџРѕС‡РµРјСѓ Р±РµР· Р±Р°Р·С‹ РґР°РЅРЅС‹С…?

РџСЂРѕСЃС‚РѕС‚Р° - SendPulse РєР°Рє "Р±Р°Р·Р° РґР°РЅРЅС‹С…"
РЎС‚РѕРёРјРѕСЃС‚СЊ - РЅРµС‚ Р·Р°С‚СЂР°С‚ РЅР° Р‘Р”
РЎРєРѕСЂРѕСЃС‚СЊ - РЅРµС‚ Р·Р°РїСЂРѕСЃРѕРІ Рє Р‘Р”
РќР°РґРµР¶РЅРѕСЃС‚СЊ - РјРµРЅСЊС€Рµ С‚РѕС‡РµРє РѕС‚РєР°Р·Р°


рџ”® Р‘СѓРґСѓС‰РёРµ СѓР»СѓС‡С€РµРЅРёСЏ
РљСЂР°С‚РєРѕСЃСЂРѕС‡РЅС‹Рµ (1-2 РјРµСЃСЏС†Р°)

 РРЅС‚РµРіСЂР°С†РёСЏ SendPulse API
 РђРЅР°Р»РёС‚РёРєР° РїСЂРѕСЃРјРѕС‚СЂРѕРІ
 A/B С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ РїР»РµРµСЂРѕРІ
 РћРїС‚РёРјРёР·Р°С†РёСЏ Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ

Р”РѕР»РіРѕСЃСЂРѕС‡РЅС‹Рµ (3-6 РјРµСЃСЏС†РµРІ)

 KV Storage РґР»СЏ РєРµС€Р° РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№
 Durable Objects РґР»СЏ real-time features
 WebRTC РґР»СЏ live РєРѕРЅСЃСѓР»СЊС‚Р°С†РёР№
 PWA РјРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ


Р”РѕРєСѓРјРµРЅС‚ РѕР±РЅРѕРІР»РµРЅ: 01.07.2025

```

---

### `docs/Development/DEPLOYMENT.md` (12.2 KB)

```markdown
# Р СѓРєРѕРІРѕРґСЃС‚РІРѕ РїРѕ СЂР°Р·РІРµСЂС‚С‹РІР°РЅРёСЋ MasterMarat API

> РџРѕС€Р°РіРѕРІР°СЏ РёРЅСЃС‚СЂСѓРєС†РёСЏ РїРѕ РґРµРїР»РѕСЋ РЅР° Cloudflare Workers

## рџ“‹ РЎРѕРґРµСЂР¶Р°РЅРёРµ

- [РўСЂРµР±РѕРІР°РЅРёСЏ](#С‚СЂРµР±РѕРІР°РЅРёСЏ)
- [РџРѕРґРіРѕС‚РѕРІРєР° РѕРєСЂСѓР¶РµРЅРёСЏ](#РїРѕРґРіРѕС‚РѕРІРєР°-РѕРєСЂСѓР¶РµРЅРёСЏ)
- [РќР°СЃС‚СЂРѕР№РєР° Cloudflare](#РЅР°СЃС‚СЂРѕР№РєР°-cloudflare)
- [Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°](#Р»РѕРєР°Р»СЊРЅР°СЏ-СЂР°Р·СЂР°Р±РѕС‚РєР°)
- [Р”РµРїР»РѕР№ РЅР° Dev](#РґРµРїР»РѕР№-РЅР°-dev)
- [Р”РµРїР»РѕР№ РЅР° Production](#РґРµРїР»РѕР№-РЅР°-production)
- [РџСЂРѕРІРµСЂРєР° РґРµРїР»РѕСЏ](#РїСЂРѕРІРµСЂРєР°-РґРµРїР»РѕСЏ)
- [РћС‚РєР°С‚ РёР·РјРµРЅРµРЅРёР№](#РѕС‚РєР°С‚-РёР·РјРµРЅРµРЅРёР№)
- [РњРѕРЅРёС‚РѕСЂРёРЅРі](#РјРѕРЅРёС‚РѕСЂРёРЅРі)
- [Troubleshooting](#troubleshooting)

---

## вњ… РўСЂРµР±РѕРІР°РЅРёСЏ

### РЎРёСЃС‚РµРјРЅС‹Рµ С‚СЂРµР±РѕРІР°РЅРёСЏ
- **OS**: Windows 10/11, macOS, Linux
- **Node.js**: 18.0.0 РёР»Рё РІС‹С€Рµ
- **npm**: 8.0.0 РёР»Рё РІС‹С€Рµ
- **Git**: 2.30.0 РёР»Рё РІС‹С€Рµ

### РђРєРєР°СѓРЅС‚С‹ Рё РґРѕСЃС‚СѓРїС‹
- [ ] Cloudflare Р°РєРєР°СѓРЅС‚ СЃ РґРѕР±Р°РІР»РµРЅРЅС‹Рј РґРѕРјРµРЅРѕРј mastermarat.com
- [ ] GitHub РґРѕСЃС‚СѓРї Рє СЂРµРїРѕР·РёС‚РѕСЂРёСЋ
- [ ] SendPulse API credentials (РґР»СЏ webhooks)
- [ ] Р”РѕСЃС‚СѓРї Рє R2 bucket `mastermarat-videos`

### CLI РёРЅСЃС‚СЂСѓРјРµРЅС‚С‹
```bash
# РЈСЃС‚Р°РЅРѕРІРєР° Wrangler CLI
npm install -g wrangler@latest

# РџСЂРѕРІРµСЂРєР° РІРµСЂСЃРёРё
wrangler --version
# Р”РѕР»Р¶РЅРѕ Р±С‹С‚СЊ: в›…пёЏ wrangler 3.0.0 РёР»Рё РІС‹С€Рµ

# РђРІС‚РѕСЂРёР·Р°С†РёСЏ РІ Cloudflare
wrangler login

рџ› пёЏ РџРѕРґРіРѕС‚РѕРІРєР° РѕРєСЂСѓР¶РµРЅРёСЏ
1. РљР»РѕРЅРёСЂРѕРІР°РЅРёРµ СЂРµРїРѕР·РёС‚РѕСЂРёСЏ
bash# РљР»РѕРЅРёСЂРѕРІР°РЅРёРµ
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# РџСЂРѕРІРµСЂРєР° РІРµС‚РєРё
git branch
# Р”РѕР»Р¶РЅРѕ РїРѕРєР°Р·Р°С‚СЊ: * main
2. РЈСЃС‚Р°РЅРѕРІРєР° Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№
bash# РЈСЃС‚Р°РЅРѕРІРєР° РїР°РєРµС‚РѕРІ
npm install

# РџСЂРѕРІРµСЂРєР° СѓСЃС‚Р°РЅРѕРІРєРё
npm list
3. РќР°СЃС‚СЂРѕР№РєР° РїРµСЂРµРјРµРЅРЅС‹С… РѕРєСЂСѓР¶РµРЅРёСЏ
РЎРѕР·РґР°Р№С‚Рµ С„Р°Р№Р» .dev.vars РґР»СЏ Р»РѕРєР°Р»СЊРЅРѕР№ СЂР°Р·СЂР°Р±РѕС‚РєРё:
env# SendPulse credentials
SENDPULSE_ID=your_sendpulse_id
SENDPULSE_SECRET=your_sendpulse_secret

# Environment
ENVIRONMENT=development

# Webhook secret
WEBHOOK_SECRET=your_webhook_secret_key
4. РџСЂРѕРІРµСЂРєР° РєРѕРЅС„РёРіСѓСЂР°С†РёРё
РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ wrangler.toml РЅР°СЃС‚СЂРѕРµРЅ РїСЂР°РІРёР»СЊРЅРѕ:
tomlname = "mastermarat-api"
main = "src/worker-new.js"
compatibility_date = "2024-07-01"

# R2 bucket binding
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"

# Production environment
[env.production]
name = "mastermarat-api"
route = { pattern = "api.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.production.vars]
ENVIRONMENT = "production"

# Development environment
[env.dev]
name = "mastermarat-api-dev"
route = { pattern = "api-dev.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.dev.vars]
ENVIRONMENT = "development"

вЃпёЏ РќР°СЃС‚СЂРѕР№РєР° Cloudflare
1. РЎРѕР·РґР°РЅРёРµ R2 bucket
bash# РЎРѕР·РґР°РЅРёРµ bucket (РµСЃР»Рё РµС‰Рµ РЅРµ СЃРѕР·РґР°РЅ)
wrangler r2 bucket create mastermarat-videos

# РџСЂРѕРІРµСЂРєР°
wrangler r2 bucket list
2. Р—Р°РіСЂСѓР·РєР° С‚РµСЃС‚РѕРІРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
bash# Р—Р°РіСЂСѓР·РєР° С‚РµСЃС‚РѕРІРѕРіРѕ РІРёРґРµРѕ
wrangler r2 object put mastermarat-videos/content/course1/test_video.mp4 \
  --file ./content/test_video.mp4

# Р—Р°РіСЂСѓР·РєР° РїСЂРµРІСЊСЋ
wrangler r2 object put mastermarat-videos/content/course1/week1_lesson1.jpg \
  --file ./content/thumbnails/week1_lesson1.jpg

# РџСЂРѕРІРµСЂРєР° Р·Р°РіСЂСѓР¶РµРЅРЅС‹С… С„Р°Р№Р»РѕРІ
wrangler r2 object list mastermarat-videos --prefix content/
3. РќР°СЃС‚СЂРѕР№РєР° DNS Р·Р°РїРёСЃРµР№
Р’ Cloudflare Dashboard:

РџРµСЂРµР№РґРёС‚Рµ РІ DNS РЅР°СЃС‚СЂРѕР№РєРё РґРѕРјРµРЅР°
Р”РѕР±Р°РІСЊС‚Рµ/РїСЂРѕРІРµСЂСЊС‚Рµ Р·Р°РїРёСЃРё:

TypeNameContentProxyCNAMEapimastermarat-api.workers.devвњ…CNAMEapi-devmastermarat-api-dev.workers.devвњ…

рџ’» Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°
Р—Р°РїСѓСЃРє Р»РѕРєР°Р»СЊРЅРѕРіРѕ СЃРµСЂРІРµСЂР°
bash# Р—Р°РїСѓСЃРє СЃ hot-reload
npm run dev

# Р’С‹РІРѕРґ:
# вЋ” Starting local server...
# [wrangler:info] Ready on http://127.0.0.1:8787
РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ Р»РѕРєР°Р»СЊРЅРѕ
bash# РџСЂРѕРІРµСЂРєР° API
curl http://localhost:8787/

# РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р°
open http://localhost:8787/test

# РџР»РµРµСЂ СЃ С‚РѕРєРµРЅРѕРј
open "http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025"
РћС‚Р»Р°РґРєР°
bash# РџСЂРѕСЃРјРѕС‚СЂ Р»РѕРіРѕРІ РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё
wrangler tail

# Р’ Р±СЂР°СѓР·РµСЂРµ РЅР°Р¶РјРёС‚Рµ [d] РґР»СЏ Chrome DevTools

рџ”µ Р”РµРїР»РѕР№ РЅР° Dev
1. РџСЂРѕРІРµСЂРєР° РїРµСЂРµРґ РґРµРїР»РѕРµРј
bash# Р›РёРЅС‚РёРЅРі РєРѕРґР°
npm run lint

# РџСЂРѕРІРµСЂРєР° С‚РёРїРѕРІ (РµСЃР»Рё РёСЃРїРѕР»СЊР·СѓРµС‚СЃСЏ TypeScript)
npm run typecheck

# РџСЂРѕРІРµСЂРєР° РєРѕРЅС„РёРіСѓСЂР°С†РёРё
wrangler whoami
2. Р”РµРїР»РѕР№ РЅР° dev РѕРєСЂСѓР¶РµРЅРёРµ
bash# Р”РµРїР»РѕР№
npm run deploy:dev

# РР»Рё РЅР°РїСЂСЏРјСѓСЋ
wrangler deploy --env dev

# Р’С‹РІРѕРґ:
# Total Upload: 50.23 KiB / gzip: 12.45 KiB
# Uploaded mastermarat-api-dev (1.25 sec)
# Published mastermarat-api-dev (0.35 sec)
#   https://api-dev.mastermarat.com
3. РЈСЃС‚Р°РЅРѕРІРєР° СЃРµРєСЂРµС‚РѕРІ РґР»СЏ dev
bash# SendPulse credentials
echo "your_sendpulse_id" | wrangler secret put SENDPULSE_ID --env dev
echo "your_sendpulse_secret" | wrangler secret put SENDPULSE_SECRET --env dev
echo "your_webhook_secret" | wrangler secret put WEBHOOK_SECRET --env dev
4. РџСЂРѕРІРµСЂРєР° dev РґРµРїР»РѕСЏ
bash# API СЂР°Р±РѕС‚Р°РµС‚
curl https://api-dev.mastermarat.com/

# РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р°
open https://api-dev.mastermarat.com/test

# РџСЂРѕРІРµСЂРєР° Р»РѕРіРѕРІ
wrangler tail --env dev

рџџў Р”РµРїР»РѕР№ РЅР° Production
вљ пёЏ РџСЂРµРґРІР°СЂРёС‚РµР»СЊРЅС‹Рµ РїСЂРѕРІРµСЂРєРё
bash# 1. РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ dev РІРµСЂСЃРёСЏ СЂР°Р±РѕС‚Р°РµС‚ РєРѕСЂСЂРµРєС‚РЅРѕ
curl https://api-dev.mastermarat.com/

# 2. РџСЂРѕРІРµСЂСЊС‚Рµ С‚РµРєСѓС‰СѓСЋ production РІРµСЂСЃРёСЋ
curl https://api.mastermarat.com/

# 3. РЎРѕР·РґР°Р№С‚Рµ Р±РµРєР°Рї С‚РµРєСѓС‰РµРіРѕ РєРѕРґР°
git tag -a "backup-$(date +%Y%m%d-%H%M%S)" -m "Backup before production deploy"
git push --tags
1. Р”РµРїР»РѕР№ РЅР° production
bash# Р—Р°РїСЂРѕСЃ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ
read -p "Deploy to PRODUCTION? (yes/no): " confirm
if [ "$confirm" = "yes" ]; then
    npm run deploy
fi

# РР»Рё СЃ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµРј
wrangler deploy --env production
2. РЈСЃС‚Р°РЅРѕРІРєР° production СЃРµРєСЂРµС‚РѕРІ
bash# Р’РђР–РќРћ: РСЃРїРѕР»СЊР·СѓР№С‚Рµ production credentials!
echo "PROD_sendpulse_id" | wrangler secret put SENDPULSE_ID --env production
echo "PROD_sendpulse_secret" | wrangler secret put SENDPULSE_SECRET --env production
echo "PROD_webhook_secret" | wrangler secret put WEBHOOK_SECRET --env production
3. РџСЂРѕРІРµСЂРєР° production
bash# РћСЃРЅРѕРІРЅС‹Рµ РїСЂРѕРІРµСЂРєРё
curl https://api.mastermarat.com/
curl "https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg"

# РњРѕРЅРёС‚РѕСЂРёРЅРі Р»РѕРіРѕРІ (РїРµСЂРІС‹Рµ 5 РјРёРЅСѓС‚)
wrangler tail --env production

вњ… РџСЂРѕРІРµСЂРєР° РґРµРїР»РѕСЏ
РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ С‚РµСЃС‚С‹
РЎРѕР·РґР°Р№С‚Рµ С„Р°Р№Р» scripts/test-deployment.sh:
bash#!/bin/bash
API_URL=${1:-"https://api-dev.mastermarat.com"}

echo "Testing deployment at: $API_URL"

# Test 1: API Documentation
echo -n "1. API Documentation: "
curl -s "$API_URL/" | grep -q "MasterMarat API" && echo "вњ… PASS" || echo "вќЊ FAIL"

# Test 2: Test page
echo -n "2. Test page: "
curl -s "$API_URL/test" | grep -q "Token Testing" && echo "вњ… PASS" || echo "вќЊ FAIL"

# Test 3: Thumbnail (public)
echo -n "3. Public thumbnail: "
curl -s -o /dev/null -w "%{http_code}" "$API_URL/thumbnails/course1/week1_lesson1.jpg" | grep -q "200" && echo "вњ… PASS" || echo "вќЊ FAIL"

# Test 4: Video requires token
echo -n "4. Video auth check: "
curl -s -o /dev/null -w "%{http_code}" "$API_URL/video/course1/test_video.mp4" | grep -q "401" && echo "вњ… PASS" || echo "вќЊ FAIL"

# Test 5: Player with token
echo -n "5. Player with token: "
curl -s "$API_URL/player/course1/week1_lesson1?token=demo123" | grep -q "video" && echo "вњ… PASS" || echo "вќЊ FAIL"
Р—Р°РїСѓСЃРє С‚РµСЃС‚РѕРІ
bash# Р”Р»СЏ dev
./scripts/test-deployment.sh https://api-dev.mastermarat.com

# Р”Р»СЏ production
./scripts/test-deployment.sh https://api.mastermarat.com

в†©пёЏ РћС‚РєР°С‚ РёР·РјРµРЅРµРЅРёР№
Р‘С‹СЃС‚СЂС‹Р№ РѕС‚РєР°С‚ Рє РїСЂРµРґС‹РґСѓС‰РµР№ РІРµСЂСЃРёРё
bash# РџСЂРѕСЃРјРѕС‚СЂ РёСЃС‚РѕСЂРёРё РґРµРїР»РѕРµРІ
wrangler deployments list --env production

# РћС‚РєР°С‚ Рє РїСЂРµРґС‹РґСѓС‰РµР№ РІРµСЂСЃРёРё
wrangler rollback --env production

# РР»Рё Рє РєРѕРЅРєСЂРµС‚РЅРѕР№ РІРµСЂСЃРёРё
wrangler rollback <deployment-id> --env production
РћС‚РєР°С‚ С‡РµСЂРµР· Git
bash# РќР°Р№С‚Рё РїРѕСЃР»РµРґРЅРёР№ СЂР°Р±РѕС‡РёР№ РєРѕРјРјРёС‚
git log --oneline -10

# РћС‚РєР°С‚РёС‚СЊСЃСЏ Рє РєРѕРјРјРёС‚Сѓ
git checkout <commit-hash>

# Р—Р°РґРµРїР»РѕРёС‚СЊ РѕС‚РєР°С‡РµРЅРЅСѓСЋ РІРµСЂСЃРёСЋ
wrangler deploy --env production

# Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє Р°РєС‚СѓР°Р»СЊРЅРѕР№ РІРµС‚РєРµ
git checkout main

рџ“Љ РњРѕРЅРёС‚РѕСЂРёРЅРі
Cloudflare Analytics

РћС‚РєСЂРѕР№С‚Рµ Cloudflare Dashboard
Workers & Pages в†’ mastermarat-api
РџСЂРѕРІРµСЂСЊС‚Рµ РјРµС‚СЂРёРєРё:

Requests per second
CPU time
Errors rate
Response times



Р›РѕРіРёСЂРѕРІР°РЅРёРµ РІ СЂРµР°Р»СЊРЅРѕРј РІСЂРµРјРµРЅРё
bash# Р’СЃРµ Р»РѕРіРё
wrangler tail --env production

# Р¤РёР»СЊС‚СЂ РїРѕ РѕС€РёР±РєР°Рј
wrangler tail --env production --search "error"

# Р¤РёР»СЊС‚СЂ РїРѕ IP
wrangler tail --env production --ip-address 1.2.3.4
РђР»РµСЂС‚С‹ (РЅР°СЃС‚СЂРѕР№РєР°)
Р’ Cloudflare Dashboard:

Workers в†’ РІР°С€ worker в†’ Settings в†’ Alerts
РќР°СЃС‚СЂРѕР№С‚Рµ СѓРІРµРґРѕРјР»РµРЅРёСЏ РґР»СЏ:

Error rate > 1%
CPU time > 50ms (p99)
Requests > 10k/min




рџ”§ Troubleshooting
Р§Р°СЃС‚С‹Рµ РїСЂРѕР±Р»РµРјС‹ Рё СЂРµС€РµРЅРёСЏ
1. Worker РЅРµ РѕС‚РІРµС‡Р°РµС‚ (Error 522)
bash# РџСЂРѕРІРµСЂРєР° СЃС‚Р°С‚СѓСЃР°
wrangler tail --env production

# РџСЂРѕРІРµСЂРєР° СЂРѕСѓС‚РѕРІ
wrangler route list

# РџРµСЂРµРґРµРїР»РѕР№
wrangler deploy --env production
2. R2 bucket РЅРµРґРѕСЃС‚СѓРїРµРЅ
bash# РџСЂРѕРІРµСЂРєР° binding
cat wrangler.toml | grep r2_buckets -A 3

# РџСЂРѕРІРµСЂРєР° СЃРѕРґРµСЂР¶РёРјРѕРіРѕ
wrangler r2 object list mastermarat-videos

# РџСЂРѕРІРµСЂРєР° РїСЂР°РІ
wrangler r2 bucket info mastermarat-videos
3. РћС€РёР±РєРё CORS
javascript// РџСЂРѕРІРµСЂСЊС‚Рµ utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};
4. РўРѕРєРµРЅС‹ РЅРµ СЂР°Р±РѕС‚Р°СЋС‚
bash# РџСЂРѕРІРµСЂРєР° СЃРµРєСЂРµС‚РѕРІ
wrangler secret list --env production

# РўРµСЃС‚ С‚РѕРєРµРЅР°
curl "https://api.mastermarat.com/test"
Р”РёР°РіРЅРѕСЃС‚РёС‡РµСЃРєРёРµ РєРѕРјР°РЅРґС‹
bash# РџРѕР»РЅР°СЏ РґРёР°РіРЅРѕСЃС‚РёРєР°
echo "=== Cloudflare Account ==="
wrangler whoami

echo "=== Workers ==="
wrangler deployments list

echo "=== R2 Buckets ==="
wrangler r2 bucket list

echo "=== Secrets ==="
wrangler secret list --env production

echo "=== Routes ==="
wrangler route list
РљРѕРЅС‚Р°РєС‚С‹ РїРѕРґРґРµСЂР¶РєРё

РўРµС…РЅРёС‡РµСЃРєРёРµ РІРѕРїСЂРѕСЃС‹: Р’СЏС‡РµСЃР»Р°РІ (CTO)
Cloudflare Support: support.cloudflare.com
РЎСЂРѕС‡РЅС‹Рµ РїСЂРѕР±Р»РµРјС‹: РЎРѕР·РґР°С‚СЊ issue СЃ С‚РµРіРѕРј urgent


рџ“ќ Р§РµРєР»РёСЃС‚ РґРµРїР»РѕСЏ
Pre-deployment

 РљРѕРґ РїСЂРѕС€РµР» code review
 РўРµСЃС‚С‹ РїСЂРѕР№РґРµРЅС‹ Р»РѕРєР°Р»СЊРЅРѕ
 РћР±РЅРѕРІР»РµРЅР° РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ
 РЎРѕР·РґР°РЅ git tag

Deployment

 Deploy РЅР° dev РѕРєСЂСѓР¶РµРЅРёРµ
 РўРµСЃС‚С‹ РЅР° dev РїСЂРѕР№РґРµРЅС‹
 Deploy РЅР° production
 Production С‚РµСЃС‚С‹ РїСЂРѕР№РґРµРЅС‹

Post-deployment

 РњРѕРЅРёС‚РѕСЂРёРЅРі РїРµСЂРІС‹Рµ 30 РјРёРЅСѓС‚
 РЈРІРµРґРѕРјР»РµРЅРёРµ РєРѕРјР°РЅРґС‹ Рѕ РґРµРїР»РѕРµ
 РћР±РЅРѕРІР»РµРЅРёРµ СЃС‚Р°С‚СѓСЃР° РІ README
 Р—Р°РєСЂС‹С‚РёРµ СЃРІСЏР·Р°РЅРЅС‹С… issues


Р”РѕРєСѓРјРµРЅС‚ РѕР±РЅРѕРІР»РµРЅ: 01.07.2025

```

---

### `docs/Development/DEVELOPMENT_STATUS.md` (12.18 KB)

```markdown
# Development Status - MasterMarat Project

> Р”РµС‚Р°Р»СЊРЅС‹Р№ СЃС‚Р°С‚СѓСЃ СЂР°Р·СЂР°Р±РѕС‚РєРё Рё roadmap РїСЂРѕРµРєС‚Р°

## рџ“‹ РЎРѕРґРµСЂР¶Р°РЅРёРµ

- [РћР±С‰РёР№ РїСЂРѕРіСЂРµСЃСЃ](#РѕР±С‰РёР№-РїСЂРѕРіСЂРµСЃСЃ)
- [Р—Р°РІРµСЂС€РµРЅРЅС‹Рµ Р·Р°РґР°С‡Рё](#Р·Р°РІРµСЂС€РµРЅРЅС‹Рµ-Р·Р°РґР°С‡Рё)
- [РўРµРєСѓС‰РёРµ Р·Р°РґР°С‡Рё](#С‚РµРєСѓС‰РёРµ-Р·Р°РґР°С‡Рё)
- [Backlog](#backlog)
- [РР·РІРµСЃС‚РЅС‹Рµ РїСЂРѕР±Р»РµРјС‹](#РёР·РІРµСЃС‚РЅС‹Рµ-РїСЂРѕР±Р»РµРјС‹)
- [РўРµС…РЅРёС‡РµСЃРєРёР№ РґРѕР»Рі](#С‚РµС…РЅРёС‡РµСЃРєРёР№-РґРѕР»Рі)
- [Roadmap](#roadmap)
- [РњРµС‚СЂРёРєРё РїСЂРѕРµРєС‚Р°](#РјРµС‚СЂРёРєРё-РїСЂРѕРµРєС‚Р°)

---

## рџ“Љ РћР±С‰РёР№ РїСЂРѕРіСЂРµСЃСЃ

### РћР±С‰Р°СЏ РіРѕС‚РѕРІРЅРѕСЃС‚СЊ: **65%** рџџ©рџџ©рџџ©рџџ©рџџ©рџџ©в¬њв¬њв¬њв¬њ

| РљРѕРјРїРѕРЅРµРЅС‚ | Р“РѕС‚РѕРІРЅРѕСЃС‚СЊ | РЎС‚Р°С‚СѓСЃ |
|-----------|------------|--------|
| **Backend API** | 85% | рџџў Р Р°Р±РѕС‚Р°РµС‚, РЅСѓР¶РЅС‹ РґРѕСЂР°Р±РѕС‚РєРё |
| **Р’РёРґРµРѕ СЃС‚СЂРёРјРёРЅРі** | 95% | рџџў РџРѕР»РЅРѕСЃС‚СЊСЋ РіРѕС‚РѕРІ |
| **РђРІС‚РѕСЂРёР·Р°С†РёСЏ** | 70% | рџџЎ Р‘Р°Р·РѕРІР°СЏ РіРѕС‚РѕРІР°, РЅСѓР¶РЅР° РёРЅС‚РµРіСЂР°С†РёСЏ |
| **Email РёРЅС‚РµРіСЂР°С†РёСЏ** | 30% | рџ”ґ РўРѕР»СЊРєРѕ webhooks |
| **РџР»Р°С‚РµР¶Рё** | 0% | рџ”ґ РќРµ РЅР°С‡Р°С‚Рѕ |
| **РљРѕРЅС‚РµРЅС‚** | 20% | рџ”ґ РўРѕР»СЊРєРѕ С‚РµСЃС‚РѕРІС‹Р№ |
| **Р›РѕРєР°Р»РёР·Р°С†РёСЏ** | 0% | рџ”ґ РќРµ РЅР°С‡Р°С‚Рѕ |
| **Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ** | 90% | рџџў РџРѕС‡С‚Рё РіРѕС‚РѕРІР° |

---

## вњ… Р—Р°РІРµСЂС€РµРЅРЅС‹Рµ Р·Р°РґР°С‡Рё

### РСЋР»СЊ 2025 (РўРµРєСѓС‰РёР№ СЃРїСЂРёРЅС‚)

#### 01.07.2025 - РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°
- [x] **Р РµС„Р°РєС‚РѕСЂРёРЅРі worker.js**
  - Р Р°Р·Р±РёР»Рё 500+ СЃС‚СЂРѕРє РЅР° РјРѕРґСѓР»Рё
  - РЎРѕР·РґР°Р»Рё СЃС‚СЂСѓРєС‚СѓСЂСѓ handlers/services/utils
  - РЈР»СѓС‡С€РёР»Рё С‡РёС‚Р°РµРјРѕСЃС‚СЊ РєРѕРґР°
  - Р’СЂРµРјСЏ: 4 С‡Р°СЃР°

- [x] **Р”РІР° С‚РёРїР° РІРёРґРµРѕРїР»РµРµСЂР°**
  - Learning mode (РёР· email, Р±РµР· РЅР°РІРёРіР°С†РёРё)
  - Archive mode (РїРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї СЃ РЅР°РІРёРіР°С†РёРµР№)
  - РђРґР°РїС‚РёРІРЅС‹Р№ РґРёР·Р°Р№РЅ
  - Р’СЂРµРјСЏ: 3 С‡Р°СЃР°

- [x] **РЎРёСЃС‚РµРјР° С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ**
  - 5 СѓСЂРѕРІРЅРµР№ РґРѕСЃС‚СѓРїР°
  - РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° /test
  - Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ С‚РѕРєРµРЅРѕРІ
  - Р’СЂРµРјСЏ: 2 С‡Р°СЃР°

- [x] **РЈР»СѓС‡С€РµРЅРЅС‹Р№ UI/UX**
  - РЎРІРµС‚Р»Р°СЏ С‚РµРјР° MasterMarat
  - Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ РєРѕРЅС‚РµРЅС‚ РїРѕРґ РІРёРґРµРѕ
  - РРЅРґРёРєР°С‚РѕСЂС‹ Р·Р°РіСЂСѓР·РєРё
  - Р’СЂРµРјСЏ: 2 С‡Р°СЃР°

### РСЋРЅСЊ 2025

- [x] **Р‘Р°Р·РѕРІР°СЏ РёРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂР°**
  - Cloudflare Workers setup
  - R2 bucket configuration
  - Custom domains + SSL
  - GitHub repository
  - Р’СЂРµРјСЏ: 8 С‡Р°СЃРѕРІ

- [x] **MVP РІРёРґРµРѕРїР»РµРµСЂР°**
  - Р‘Р°Р·РѕРІС‹Р№ HTML РїР»РµРµСЂ
  - Р—Р°С‰РёС‚Р° РІРёРґРµРѕ С‚РѕРєРµРЅР°РјРё
  - HTTP Range requests
  - Р’СЂРµРјСЏ: 6 С‡Р°СЃРѕРІ

- [x] **SendPulse Р»РµРЅРґРёРЅРі**
  - РЎРѕР·РґР°РЅРёРµ Р»РµРЅРґРёРЅРіР°
  - Р¤РѕСЂРјР° РїРѕРґРїРёСЃРєРё
  - Р‘Р°Р·РѕРІР°СЏ Р°РІС‚РѕРјР°С‚РёР·Р°С†РёСЏ
  - Р’СЂРµРјСЏ: 4 С‡Р°СЃР°

---

## рџ”„ РўРµРєСѓС‰РёРµ Р·Р°РґР°С‡Рё

### Р’ СЂР°Р±РѕС‚Рµ СЃРµР№С‡Р°СЃ

#### 1. SendPulse API РёРЅС‚РµРіСЂР°С†РёСЏ (Р’СЏС‡РµСЃР»Р°РІ)
**РџСЂРѕРіСЂРµСЃСЃ**: 40% рџџ©рџџ©рџџ©рџџ©в¬њв¬њв¬њв¬њв¬њв¬њ
- [x] Webhook endpoint СЃРѕР·РґР°РЅ
- [x] Р‘Р°Р·РѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° СЃРµСЂРІРёСЃР°
- [ ] РђРІС‚РѕСЂРёР·Р°С†РёСЏ С‡РµСЂРµР· API
- [ ] РџРѕР»СѓС‡РµРЅРёРµ РґР°РЅРЅС‹С… РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
- [ ] РћР±РЅРѕРІР»РµРЅРёРµ РїСЂРѕРіСЂРµСЃСЃР°
- [ ] РЈРїСЂР°РІР»РµРЅРёРµ РїРѕРґРїРёСЃРєР°РјРё
**Deadline**: 05.07.2025

#### 2. Р—Р°РіСЂСѓР·РєР° СЂРµР°Р»СЊРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р° (РђРјРёСЂР° + Р’СЏС‡РµСЃР»Р°РІ)
**РџСЂРѕРіСЂРµСЃСЃ**: 20% рџџ©рџџ©в¬њв¬њв¬њв¬њв¬њв¬њв¬њв¬њ
- [x] РЎС‚СЂСѓРєС‚СѓСЂР° РєРѕРЅС‚РµРЅС‚Р° РѕРїСЂРµРґРµР»РµРЅР°
- [ ] РљРѕРЅРІРµСЂС‚Р°С†РёСЏ РІРёРґРµРѕ РІ РЅСѓР¶РЅС‹Р№ С„РѕСЂРјР°С‚
- [ ] РћРїС‚РёРјРёР·Р°С†РёСЏ СЂР°Р·РјРµСЂРѕРІ
- [ ] Р—Р°РіСЂСѓР·РєР° РІ R2
- [ ] РЎРѕР·РґР°РЅРёРµ РїСЂРµРІСЊСЋ
**Deadline**: 10.07.2025

#### 3. Email Р°РІС‚РѕРјР°С‚РёР·Р°С†РёРё (РђРјРёСЂР°)
**РџСЂРѕРіСЂРµСЃСЃ**: 30% рџџ©рџџ©рџџ©в¬њв¬њв¬њв¬њв¬њв¬њв¬њ
- [x] Welcome sequence
- [ ] Р•Р¶РµРЅРµРґРµР»СЊРЅС‹Рµ СѓСЂРѕРєРё
- [ ] РќР°РїРѕРјРёРЅР°РЅРёСЏ
- [ ] Р РµР°РєС‚РёРІР°С†РёСЏ
**Deadline**: 07.07.2025

---

## рџ“ќ Backlog

### Р’С‹СЃРѕРєРёР№ РїСЂРёРѕСЂРёС‚РµС‚

#### РџР»Р°С‚РµР¶РЅР°СЏ РёРЅС‚РµРіСЂР°С†РёСЏ Fondy
**РћС†РµРЅРєР°**: 16 С‡Р°СЃРѕРІ
- [ ] РќР°СЃС‚СЂРѕР№РєР° merchant Р°РєРєР°СѓРЅС‚Р°
- [ ] Webhook РґР»СЏ РїР»Р°С‚РµР¶РµР№
- [ ] РџСЂРѕРІРµСЂРєР° РїРѕРґРїРёСЃРё
- [ ] РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ РІСЃРµС… СЃС†РµРЅР°СЂРёРµРІ
- [ ] Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ

#### РђРЅР°Р»РёС‚РёРєР° Рё РјРµС‚СЂРёРєРё
**РћС†РµРЅРєР°**: 8 С‡Р°СЃРѕРІ
- [ ] РўСЂРµРєРёРЅРі РїСЂРѕСЃРјРѕС‚СЂРѕРІ РІРёРґРµРѕ
- [ ] РџСЂРѕРіСЂРµСЃСЃ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№
- [ ] РљРѕРЅРІРµСЂСЃРёРё
- [ ] Р”Р°С€Р±РѕСЂРґ РґР»СЏ Р°РґРјРёРЅР°

#### РњРѕР±РёР»СЊРЅР°СЏ РѕРїС‚РёРјРёР·Р°С†РёСЏ
**РћС†РµРЅРєР°**: 12 С‡Р°СЃРѕРІ
- [ ] PWA РјР°РЅРёС„РµСЃС‚
- [ ] Offline РїРѕРґРґРµСЂР¶РєР°
- [ ] Push СѓРІРµРґРѕРјР»РµРЅРёСЏ
- [ ] РћРїС‚РёРјРёР·Р°С†РёСЏ РІРёРґРµРѕ РґР»СЏ РјРѕР±РёР»СЊРЅС‹С…

### РЎСЂРµРґРЅРёР№ РїСЂРёРѕСЂРёС‚РµС‚

#### РЈРєСЂР°РёРЅСЃРєР°СЏ Р»РѕРєР°Р»РёР·Р°С†РёСЏ
**РћС†РµРЅРєР°**: 20 С‡Р°СЃРѕРІ
- [ ] РџРµСЂРµРІРѕРґ РёРЅС‚РµСЂС„РµР№СЃР°
- [ ] AI РґСѓР±Р»СЏР¶ РІРёРґРµРѕ (HeyGen)
- [ ] ua.mastermarat.com setup
- [ ] Email С€Р°Р±Р»РѕРЅС‹ РЅР° СѓРєСЂР°РёРЅСЃРєРѕРј

#### Р Р°СЃС€РёСЂРµРЅРЅР°СЏ Р°РІС‚РѕСЂРёР·Р°С†РёСЏ
**РћС†РµРЅРєР°**: 10 С‡Р°СЃРѕРІ
- [ ] РРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРѕР№
- [ ] Р’РѕСЃСЃС‚Р°РЅРѕРІР»РµРЅРёРµ РґРѕСЃС‚СѓРїР°
- [ ] РњРЅРѕРіРѕСѓСЃС‚СЂРѕР№СЃС‚РІРµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї
- [ ] РСЃС‚РѕСЂРёСЏ РїСЂРѕСЃРјРѕС‚СЂРѕРІ

#### Р“СЂСѓРїРїРѕРІС‹Рµ С„СѓРЅРєС†РёРё
**РћС†РµРЅРєР°**: 24 С‡Р°СЃР°
- [ ] РљРѕРјРјРµРЅС‚Р°СЂРёРё РїРѕРґ РІРёРґРµРѕ
- [ ] Р’РѕРїСЂРѕСЃС‹ СЌРєСЃРїРµСЂС‚Сѓ
- [ ] Р—Р°РєСЂС‹С‚С‹Р№ С‡Р°С‚ РґР»СЏ VIP
- [ ] Р’РµР±РёРЅР°СЂС‹

### РќРёР·РєРёР№ РїСЂРёРѕСЂРёС‚РµС‚

#### РђРЅРіР»РёР№СЃРєР°СЏ РІРµСЂСЃРёСЏ
**РћС†РµРЅРєР°**: 40 С‡Р°СЃРѕРІ
- [ ] РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅС‹Р№ РїРµСЂРµРІРѕРґ
- [ ] en.mastermarat.com
- [ ] РњРµР¶РґСѓРЅР°СЂРѕРґРЅС‹Рµ РїР»Р°С‚РµР¶Рё
- [ ] РњР°СЂРєРµС‚РёРЅРі РјР°С‚РµСЂРёР°Р»С‹

#### РњРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ
**РћС†РµРЅРєР°**: 80 С‡Р°СЃРѕРІ
- [ ] React Native app
- [ ] iOS + Android
- [ ] Offline РїСЂРѕСЃРјРѕС‚СЂ
- [ ] App Store/Google Play

---

## рџђ› РР·РІРµСЃС‚РЅС‹Рµ РїСЂРѕР±Р»РµРјС‹

### РљСЂРёС‚РёС‡РµСЃРєРёРµ
- **РќРµС‚** РєСЂРёС‚РёС‡РµСЃРєРёС… РїСЂРѕР±Р»РµРј РЅР° РґР°РЅРЅС‹Р№ РјРѕРјРµРЅС‚ вњ…

### Р’С‹СЃРѕРєРёРµ
1. **РћС‚СЃСѓС‚СЃС‚РІРёРµ СЂРµР°Р»СЊРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°**
   - Р’Р»РёСЏРЅРёРµ: РќРµРІРѕР·РјРѕР¶РЅРѕ С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ СЃ СЂРµР°Р»СЊРЅС‹РјРё РїРѕР»СЊР·РѕРІР°С‚РµР»СЏРјРё
   - Р РµС€РµРЅРёРµ: Р—Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° (РІ РїСЂРѕС†РµСЃСЃРµ)
   - ETA: 10.07.2025

2. **SendPulse РёРЅС‚РµРіСЂР°С†РёСЏ РЅРµ Р·Р°РІРµСЂС€РµРЅР°**
   - Р’Р»РёСЏРЅРёРµ: Р СѓС‡РЅР°СЏ РІС‹РґР°С‡Р° РґРѕСЃС‚СѓРїРѕРІ
   - Р РµС€РµРЅРёРµ: Р—Р°РІРµСЂС€РёС‚СЊ РёРЅС‚РµРіСЂР°С†РёСЋ API
   - ETA: 05.07.2025

### РЎСЂРµРґРЅРёРµ
1. **РќРµС‚ СЃРѕС…СЂР°РЅРµРЅРёСЏ РїСЂРѕРіСЂРµСЃСЃР° РІРёРґРµРѕ**
   - Р’Р»РёСЏРЅРёРµ: РџРѕР»СЊР·РѕРІР°С‚РµР»Рё РЅР°С‡РёРЅР°СЋС‚ СЃ РЅР°С‡Р°Р»Р°
   - Р РµС€РµРЅРёРµ: Р”РѕР±Р°РІРёС‚СЊ localStorage/API
   - ETA: 15.07.2025

2. **РћС‚СЃСѓС‚СЃС‚РІСѓРµС‚ РІР°Р»РёРґР°С†РёСЏ webhook РїРѕРґРїРёСЃРё**
   - Р’Р»РёСЏРЅРёРµ: РџРѕС‚РµРЅС†РёР°Р»СЊРЅР°СЏ СѓСЏР·РІРёРјРѕСЃС‚СЊ
   - Р РµС€РµРЅРёРµ: Р”РѕР±Р°РІРёС‚СЊ HMAC РїСЂРѕРІРµСЂРєСѓ
   - ETA: 05.07.2025

### РќРёР·РєРёРµ
1. **РќРµС‚ РёРЅРґРёРєР°С‚РѕСЂР° РєР°С‡РµСЃС‚РІР° РІРёРґРµРѕ**
   - Р’Р»РёСЏРЅРёРµ: UX РјРѕР¶РµС‚ Р±С‹С‚СЊ Р»СѓС‡С€Рµ
   - Р РµС€РµРЅРёРµ: Р”РѕР±Р°РІРёС‚СЊ РІС‹Р±РѕСЂ РєР°С‡РµСЃС‚РІР°
   - ETA: Backlog

2. **РћС‚СЃСѓС‚СЃС‚РІСѓРµС‚ РїРѕРёСЃРє РїРѕ СѓСЂРѕРєР°Рј**
   - Р’Р»РёСЏРЅРёРµ: РќР°РІРёРіР°С†РёСЏ С‚РѕР»СЊРєРѕ С‡РµСЂРµР· СЃРїРёСЃРѕРє
   - Р РµС€РµРЅРёРµ: Р”РѕР±Р°РІРёС‚СЊ РїРѕРёСЃРє РІ Р°СЂС…РёРІРµ
   - ETA: Backlog

---

## рџЏ—пёЏ РўРµС…РЅРёС‡РµСЃРєРёР№ РґРѕР»Рі

### РљРѕРґ
- [ ] Р”РѕР±Р°РІРёС‚СЊ TypeScript С‚РёРїРёР·Р°С†РёСЋ
- [ ] РџРѕРєСЂС‹С‚СЊ С‚РµСЃС‚Р°РјРё РєСЂРёС‚РёС‡РµСЃРєРёРµ С„СѓРЅРєС†РёРё
- [ ] Р’С‹РЅРµСЃС‚Рё HTML С€Р°Р±Р»РѕРЅС‹ РІ РѕС‚РґРµР»СЊРЅС‹Рµ С„Р°Р№Р»С‹
- [ ] Р”РѕР±Р°РІРёС‚СЊ JSDoc РєРѕРјРјРµРЅС‚Р°СЂРёРё

### РРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂР°
- [ ] РќР°СЃС‚СЂРѕРёС‚СЊ CI/CD pipeline
- [ ] Р”РѕР±Р°РІРёС‚СЊ staging РѕРєСЂСѓР¶РµРЅРёРµ
- [ ] РќР°СЃС‚СЂРѕРёС‚СЊ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ Р±РµРєР°РїС‹ R2
- [ ] РњРѕРЅРёС‚РѕСЂРёРЅРі Рё Р°Р»РµСЂС‚С‹

### Р‘РµР·РѕРїР°СЃРЅРѕСЃС‚СЊ
- [ ] Р”РѕР±Р°РІРёС‚СЊ rate limiting РЅР° СѓСЂРѕРІРЅРµ РїСЂРёР»РѕР¶РµРЅРёСЏ
- [ ] Р РµР°Р»РёР·РѕРІР°С‚СЊ refresh С‚РѕРєРµРЅС‹
- [ ] РђСѓРґРёС‚ Р±РµР·РѕРїР°СЃРЅРѕСЃС‚Рё
- [ ] OWASP compliance check

### Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ
- [ ] API changelog
- [ ] Р’РёРґРµРѕ С‚СѓС‚РѕСЂРёР°Р»С‹ РґР»СЏ РєРѕРјР°РЅРґС‹
- [ ] Runbook РґР»СЏ production issues
- [ ] Architecture Decision Records (ADR)

---

## рџ“… Roadmap

### Q3 2025 (РСЋР»СЊ - РЎРµРЅС‚СЏР±СЂСЊ)

#### РСЋР»СЊ 2025 вњ…
- [x] РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°
- [ ] SendPulse РїРѕР»РЅР°СЏ РёРЅС‚РµРіСЂР°С†РёСЏ
- [ ] Р—Р°РіСЂСѓР·РєР° РІСЃРµРіРѕ РєРѕРЅС‚РµРЅС‚Р°
- [ ] Р—Р°РїСѓСЃРє СЃ РїРµСЂРІС‹РјРё 100 РїРѕР»СЊР·РѕРІР°С‚РµР»СЏРјРё

#### РђРІРіСѓСЃС‚ 2025
- [ ] РџР»Р°С‚РµР¶РЅР°СЏ СЃРёСЃС‚РµРјР° Fondy
- [ ] РЈРєСЂР°РёРЅСЃРєР°СЏ РІРµСЂСЃРёСЏ
- [ ] РђРЅР°Р»РёС‚РёРєР° v1
- [ ] 500 Р°РєС‚РёРІРЅС‹С… РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№

#### РЎРµРЅС‚СЏР±СЂСЊ 2025
- [ ] РњРѕР±РёР»СЊРЅР°СЏ PWA
- [ ] Р“СЂСѓРїРїРѕРІС‹Рµ С„СѓРЅРєС†РёРё
- [ ] A/B С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ
- [ ] 1000+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№

### Q4 2025 (РћРєС‚СЏР±СЂСЊ - Р”РµРєР°Р±СЂСЊ)

#### РћРєС‚СЏР±СЂСЊ 2025
- [ ] РђРЅРіР»РёР№СЃРєР°СЏ РІРµСЂСЃРёСЏ beta
- [ ] API РґР»СЏ РїР°СЂС‚РЅРµСЂРѕРІ
- [ ] Р Р°СЃС€РёСЂРµРЅРЅР°СЏ Р°РЅР°Р»РёС‚РёРєР°

#### РќРѕСЏР±СЂСЊ 2025
- [ ] РњРѕР±РёР»СЊРЅС‹Рµ РїСЂРёР»РѕР¶РµРЅРёСЏ
- [ ] РќРѕРІС‹Рµ РєСѓСЂСЃС‹
- [ ] Affiliate РїСЂРѕРіСЂР°РјРјР°

#### Р”РµРєР°Р±СЂСЊ 2025
- [ ] 5000+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№
- [ ] Р’С‹С…РѕРґ РЅР° РїСЂРёР±С‹Р»СЊРЅРѕСЃС‚СЊ
- [ ] РџР»Р°РЅРёСЂРѕРІР°РЅРёРµ 2026

---

## рџ“€ РњРµС‚СЂРёРєРё РїСЂРѕРµРєС‚Р°

### РљРѕРґ
- **РћР±С‰РµРµ РєРѕР»РёС‡РµСЃС‚РІРѕ С„Р°Р№Р»РѕРІ**: 23
- **РЎС‚СЂРѕРє РєРѕРґР°**: ~2,500
- **Р Р°Р·РјРµСЂ (gzip)**: 45 KB
- **РџРѕРєСЂС‹С‚РёРµ С‚РµСЃС‚Р°РјРё**: 0% рџў

### РџСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚СЊ
- **Р’СЂРµРјСЏ С…РѕР»РѕРґРЅРѕРіРѕ СЃС‚Р°СЂС‚Р°**: ~5ms
- **Р’СЂРµРјСЏ РѕС‚РІРµС‚Р° (p50)**: 15ms
- **Р’СЂРµРјСЏ РѕС‚РІРµС‚Р° (p99)**: 45ms
- **CPU РІСЂРµРјСЏ**: ~10ms/request

### РРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂР°
- **Uptime**: 99.9% (РїРѕСЃР»РµРґРЅРёРµ 30 РґРЅРµР№)
- **Requests/РґРµРЅСЊ**: ~1,000 (С‚РµСЃС‚РѕРІС‹Рµ)
- **R2 storage**: 2.5 GB
- **Bandwidth/РјРµСЃСЏС†**: ~50 GB

### РљРѕРјР°РЅРґР°
- **Commits Р·Р° РЅРµРґРµР»СЋ**: 47
- **Pull requests**: 12
- **Issues Р·Р°РєСЂС‹С‚Рѕ**: 18
- **Issues РѕС‚РєСЂС‹С‚Рѕ**: 7

---

## рџЋЇ KPI РЅР° РєРѕРЅРµС† РјРµСЃСЏС†Р°

| РњРµС‚СЂРёРєР° | Р¦РµР»СЊ | РўРµРєСѓС‰РµРµ | РЎС‚Р°С‚СѓСЃ |
|---------|------|---------|--------|
| РђРєС‚РёРІРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»Рё | 100 | 0 | рџ”ґ |
| Р—Р°РІРµСЂС€РµРЅРЅРѕСЃС‚СЊ MVP | 100% | 65% | рџџЎ |
| Р—Р°РіСЂСѓР¶РµРЅРѕ СѓСЂРѕРєРѕРІ | 8 | 1 | рџ”ґ |
| Email Р°РІС‚РѕРјР°С‚РёР·Р°С†РёР№ | 4 | 1 | рџ”ґ |
| Uptime | 99.9% | 99.9% | рџџў |
| РћС€РёР±РєРё РІ production | 0 | 0 | рџџў |

---

## рџ“ћ РћС‚РІРµС‚СЃС‚РІРµРЅРЅС‹Рµ

| РћР±Р»Р°СЃС‚СЊ | РћС‚РІРµС‚СЃС‚РІРµРЅРЅС‹Р№ | РљРѕРЅС‚Р°РєС‚ |
|---------|---------------|---------|
| Backend/API | Р’СЏС‡РµСЃР»Р°РІ | GitHub: @Shivalino |
| РљРѕРЅС‚РµРЅС‚ | РђРјРёСЂР° | Telegram: @amira |
| Р’РёРґРµРѕ/Р”РёР·Р°Р№РЅ | РњР°СЂР°С‚ | Email: marat@mastermarat.com |
| DevOps | Р’СЏС‡РµСЃР»Р°РІ | Email: tech@mastermarat.com |

---

## рџ”„ РСЃС‚РѕСЂРёСЏ РѕР±РЅРѕРІР»РµРЅРёР№

| Р”Р°С‚Р° | РР·РјРµРЅРµРЅРёСЏ |
|------|-----------|
| 01.07.2025 | РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°, РЅРѕРІС‹Рµ РїР»РµРµСЂС‹ |
| 28.06.2025 | MVP РІРёРґРµРѕРїР»РµРµСЂР° |
| 25.06.2025 | РРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂР° Cloudflare |
| 20.06.2025 | РќР°С‡Р°Р»Рѕ РїСЂРѕРµРєС‚Р° |

---

*РџРѕСЃР»РµРґРЅРµРµ РѕР±РЅРѕРІР»РµРЅРёРµ: 01.07.2025 14:30 UTC*
*РЎР»РµРґСѓСЋС‰РёР№ review: 05.07.2025*
```

---

### `docs/Development/LOCAL_LINKS.md` (0 KB)

```markdown
[EMPTY FILE]
```

---

### `docs/Manuals/vscode_git_guide.md` (7.65 KB)

```markdown
# VS Code Git Guide - Р Р°Р±РѕС‚Р° СЃ GitHub РІ mastermarat-project

## рџ”§ Р‘Р°Р·РѕРІС‹Рµ РєРѕРјР°РЅРґС‹ Git РІ VS Code

### **РЎРїРѕСЃРѕР± 1: Р§РµСЂРµР· VS Code РёРЅС‚РµСЂС„РµР№СЃ (СЂРµРєРѕРјРµРЅРґСѓРµРјС‹Р№)**

#### **Source Control РїР°РЅРµР»СЊ:**
1. **Ctrl+Shift+G** - РѕС‚РєСЂС‹С‚СЊ Source Control
2. **Staged Changes** - С„Р°Р№Р»С‹ РіРѕС‚РѕРІС‹Рµ Рє РєРѕРјРјРёС‚Сѓ
3. **Changes** - РёР·РјРµРЅРµРЅРЅС‹Рµ С„Р°Р№Р»С‹
4. **"+"** СЂСЏРґРѕРј СЃ С„Р°Р№Р»РѕРј - РґРѕР±Р°РІРёС‚СЊ РІ staging
5. **"-"** СЂСЏРґРѕРј СЃ С„Р°Р№Р»РѕРј - СѓР±СЂР°С‚СЊ РёР· staging

#### **РџСЂРѕС†РµСЃСЃ РєРѕРјРјРёС‚Р°:**
1. **Р’РЅРµСЃРёС‚Рµ РёР·РјРµРЅРµРЅРёСЏ** РІ С„Р°Р№Р»С‹
2. **Source Control** в†’ РІРёРґРёС‚Рµ СЃРїРёСЃРѕРє РёР·РјРµРЅРµРЅРЅС‹С… С„Р°Р№Р»РѕРІ
3. **"+" Сѓ РєР°Р¶РґРѕРіРѕ С„Р°Р№Р»Р°** РёР»Рё **"Stage All Changes"**
4. **Р’РІРµРґРёС‚Рµ commit message** РІ РїРѕР»Рµ СЃРІРµСЂС…Сѓ
5. **Ctrl+Enter** РёР»Рё РєРЅРѕРїРєР° **"Commit"**
6. **Sync Changes** РёР»Рё **"Push"** РґР»СЏ РѕС‚РїСЂР°РІРєРё РЅР° GitHub

### **РЎРїРѕСЃРѕР± 2: Р§РµСЂРµР· С‚РµСЂРјРёРЅР°Р» VS Code**

#### **РћС‚РєСЂС‹С‚РёРµ С‚РµСЂРјРёРЅР°Р»Р°:**
```bash
Ctrl+` (backtick) - РѕС‚РєСЂС‹С‚СЊ С‚РµСЂРјРёРЅР°Р» VS Code
```

#### **РћСЃРЅРѕРІРЅС‹Рµ РєРѕРјР°РЅРґС‹:**
```bash
# РџСЂРѕРІРµСЂРєР° СЃС‚Р°С‚СѓСЃР°
git status

# Р”РѕР±Р°РІР»РµРЅРёРµ С„Р°Р№Р»РѕРІ
git add .                    # РІСЃРµ С„Р°Р№Р»С‹
git add workers/api/src/     # РєРѕРЅРєСЂРµС‚РЅР°СЏ РїР°РїРєР°
git add package.json         # РєРѕРЅРєСЂРµС‚РЅС‹Р№ С„Р°Р№Р»

# РљРѕРјРјРёС‚
git commit -m "РћРїРёСЃР°РЅРёРµ РёР·РјРµРЅРµРЅРёР№"

# РћС‚РїСЂР°РІРєР° РЅР° GitHub
git push origin main

# РџРѕР»СѓС‡РµРЅРёРµ РёР·РјРµРЅРµРЅРёР№ СЃ GitHub
git pull origin main
```

## рџ“ќ РЁР°Р±Р»РѕРЅС‹ commit messages РґР»СЏ РїСЂРѕРµРєС‚Р°

### **РЎС‚СЂСѓРєС‚СѓСЂР° СЃРѕРѕР±С‰РµРЅРёСЏ:**
```
[С‚РёРї]: РєСЂР°С‚РєРѕРµ РѕРїРёСЃР°РЅРёРµ

Р”РµС‚Р°Р»СЊРЅРѕРµ РѕРїРёСЃР°РЅРёРµ (РµСЃР»Рё РЅСѓР¶РЅРѕ)
```

### **РўРёРїС‹ РёР·РјРµРЅРµРЅРёР№:**
```bash
feat: РґРѕР±Р°РІР»РµРЅРёРµ РЅРѕРІРѕР№ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕСЃС‚Рё
fix: РёСЃРїСЂР°РІР»РµРЅРёРµ РѕС€РёР±РѕРє
docs: РѕР±РЅРѕРІР»РµРЅРёРµ РґРѕРєСѓРјРµРЅС‚Р°С†РёРё
style: С„РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ РєРѕРґР°
refactor: СЂРµС„Р°РєС‚РѕСЂРёРЅРі Р±РµР· РёР·РјРµРЅРµРЅРёСЏ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕСЃС‚Рё
test: РґРѕР±Р°РІР»РµРЅРёРµ С‚РµСЃС‚РѕРІ
chore: С‚РµС…РЅРёС‡РµСЃРєРёРµ Р·Р°РґР°С‡Рё
```

### **РџСЂРёРјРµСЂС‹ РґР»СЏ mastermarat-project:**
```bash
# РќРѕРІР°СЏ С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅРѕСЃС‚СЊ
git commit -m "feat: РґРѕР±Р°РІР»РµРЅ endpoint РґР»СЏ webhook SendPulse"

# РСЃРїСЂР°РІР»РµРЅРёРµ РѕС€РёР±РєРё  
git commit -m "fix: РёСЃРїСЂР°РІР»РµРЅР° РіРµРЅРµСЂР°С†РёСЏ С‚РѕРєРµРЅРѕРІ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№"

# РћР±РЅРѕРІР»РµРЅРёРµ РєРѕРЅС„РёРіСѓСЂР°С†РёРё
git commit -m "chore: РѕР±РЅРѕРІР»РµРЅ package.json СЃ РЅРѕРІС‹РјРё СЃРєСЂРёРїС‚Р°РјРё"

# Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ
git commit -m "docs: РґРѕР±Р°РІР»РµРЅ README РґР»СЏ API endpoints"

# РќР°СЃС‚СЂРѕР№РєР° РёРЅС„СЂР°СЃС‚СЂСѓРєС‚СѓСЂС‹
git commit -m "chore: РЅР°СЃС‚СЂРѕРµРЅР° РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ ESLint Рё Prettier"
```

## рџ”„ Р Р°Р±РѕС‡РёР№ РїСЂРѕС†РµСЃСЃ (workflow)

### **Р•Р¶РµРґРЅРµРІРЅР°СЏ СЂР°Р±РѕС‚Р°:**
```bash
1. РќР°С‡Р°Р»Рѕ РґРЅСЏ: git pull origin main
2. Р Р°Р±РѕС‚Р° РЅР°Рґ Р·Р°РґР°С‡Р°РјРё
3. РљРѕРјРјРёС‚ РёР·РјРµРЅРµРЅРёР№: git add . && git commit -m "РѕРїРёСЃР°РЅРёРµ"
4. РћС‚РїСЂР°РІРєР°: git push origin main
```

### **РџСЂРё СЂР°Р±РѕС‚Рµ СЃ РєСЂСѓРїРЅС‹РјРё РёР·РјРµРЅРµРЅРёСЏРјРё:**
```bash
1. РЎРѕР·РґР°РЅРёРµ РІРµС‚РєРё: git checkout -b feature/РЅРѕРІР°СЏ-С„СѓРЅРєС†РёСЏ
2. Р Р°Р±РѕС‚Р° РІ РІРµС‚РєРµ
3. РљРѕРјРјРёС‚С‹ РІ РІРµС‚РєСѓ
4. Merge РІ main С‡РµСЂРµР· Pull Request РЅР° GitHub
```

## рџ—‚пёЏ РЎС‚СЂСѓРєС‚СѓСЂР° С„Р°Р№Р»РѕРІ РґР»СЏ РєРѕРјРјРёС‚РѕРІ

### **Р§С‚Рѕ РєРѕРјРјРёС‚РёС‚СЊ:**
```bash
вњ… РСЃС…РѕРґРЅС‹Р№ РєРѕРґ (src/, scripts/)
вњ… РљРѕРЅС„РёРіСѓСЂР°С†РёРѕРЅРЅС‹Рµ С„Р°Р№Р»С‹ (package.json, wrangler.toml)
вњ… Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЋ (README.md, docs/)
вњ… РќР°СЃС‚СЂРѕР№РєРё РїСЂРѕРµРєС‚Р° (.gitignore, .prettierrc)
```

### **Р§С‚Рѕ РќР• РєРѕРјРјРёС‚РёС‚СЊ (СѓР¶Рµ РІ .gitignore):**
```bash
вќЊ node_modules/
вќЊ .wrangler/
вќЊ .env С„Р°Р№Р»С‹
вќЊ Р›РѕРіРё (*.log)
вќЊ Р’СЂРµРјРµРЅРЅС‹Рµ С„Р°Р№Р»С‹
```

## рџ“‹ Р§Р°СЃС‚С‹Рµ СЃС†РµРЅР°СЂРёРё

### **Р”РѕР±Р°РІР»РµРЅРёРµ РЅРѕРІС‹С… С„Р°Р№Р»РѕРІ:**
```bash
# VS Code
Source Control в†’ "+" СЂСЏРґРѕРј СЃ РЅРѕРІС‹РјРё С„Р°Р№Р»Р°РјРё в†’ Commit message в†’ Commit

# Terminal
git add РЅРѕРІС‹Р№-С„Р°Р№Р».js
git commit -m "feat: РґРѕР±Р°РІР»РµРЅ РЅРѕРІС‹Р№ С„Р°Р№Р» РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё РїР»Р°С‚РµР¶РµР№"
git push origin main
```

### **РћР±РЅРѕРІР»РµРЅРёРµ СЃСѓС‰РµСЃС‚РІСѓСЋС‰РёС… С„Р°Р№Р»РѕРІ:**
```bash
# VS Code  
Р¤Р°Р№Р» РёР·РјРµРЅРёР»СЃСЏ в†’ Source Control в†’ Stage в†’ Commit в†’ Push

# Terminal
git add РёР·РјРµРЅРµРЅРЅС‹Р№-С„Р°Р№Р».js
git commit -m "fix: РёСЃРїСЂР°РІР»РµРЅР° РѕР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє R2"
git push origin main
```

### **РњР°СЃСЃРѕРІС‹Рµ РёР·РјРµРЅРµРЅРёСЏ:**
```bash
# VS Code
Source Control в†’ "Stage All Changes" в†’ Commit message в†’ Commit в†’ Push

# Terminal
git add .
git commit -m "chore: РѕР±РЅРѕРІР»РµРЅР° СЃС‚СЂСѓРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р° Рё РґРѕР±Р°РІР»РµРЅС‹ С‚РµСЃС‚С‹"
git push origin main
```

## рџљЂ РЎРїРµС†РёС„РёС‡РЅС‹Рµ РєРѕРјР°РЅРґС‹ РґР»СЏ mastermarat-project

### **Р”РµРїР»РѕР№ Worker:**
```bash
# Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°
cd workers/api
npm run dev

# Р”РµРїР»РѕР№ РІ РїСЂРѕРґР°РєС€РµРЅ
npm run deploy

# РџСЂРѕРІРµСЂРєР° Р»РѕРіРѕРІ
npm run logs
```

### **РћР±РЅРѕРІР»РµРЅРёРµ Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№:**
```bash
cd workers/api
npm update
git add package.json package-lock.json
git commit -m "chore: РѕР±РЅРѕРІР»РµРЅС‹ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё Wrangler"
git push origin main
```

### **Р”РѕР±Р°РІР»РµРЅРёРµ РЅРѕРІРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°:**
```bash
# Р”РѕР±Р°РІР»РµРЅРёРµ РІРёРґРµРѕ/thumbnails (РЅРµ РІ Git, С‚РѕР»СЊРєРѕ РґРѕРєСѓРјРµРЅС‚РёСЂСѓРµРј)
git add docs/content-inventory.md
git commit -m "docs: РѕР±РЅРѕРІР»РµРЅ СЃРїРёСЃРѕРє Р·Р°РіСЂСѓР¶РµРЅРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°"
```

## рџ”§ РќР°СЃС‚СЂРѕР№РєР° VS Code РґР»СЏ Git

### **РџРѕР»РµР·РЅС‹Рµ СЂР°СЃС€РёСЂРµРЅРёСЏ:**
- **GitLens** - СЂР°СЃС€РёСЂРµРЅРЅР°СЏ Git РёРЅС‚РµРіСЂР°С†РёСЏ
- **Git Graph** - РІРёР·СѓР°Р»РёР·Р°С†РёСЏ РёСЃС‚РѕСЂРёРё
- **GitHub Pull Requests** - СЂР°Р±РѕС‚Р° СЃ PR

### **РќР°СЃС‚СЂРѕР№РєРё VS Code (.vscode/settings.json):**
```json
{
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true
}
```

## вљ пёЏ Р’Р°Р¶РЅС‹Рµ РїСЂР°РІРёР»Р°

### **РќР• РєРѕРјРјРёС‚РёС‚СЊ:**
- РЎРµРєСЂРµС‚РЅС‹Рµ РєР»СЋС‡Рё Рё С‚РѕРєРµРЅС‹
- Р›РёС‡РЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ
- Р‘РѕР»СЊС€РёРµ РјРµРґРёР° С„Р°Р№Р»С‹ (РІРёРґРµРѕ)
- Р’СЂРµРјРµРЅРЅС‹Рµ С„Р°Р№Р»С‹ СЂР°Р·СЂР°Р±РѕС‚РєРё

### **Р’СЃРµРіРґР° РїСЂРѕРІРµСЂСЏС‚СЊ:**
```bash
git status              # С‡С‚Рѕ Р±СѓРґРµС‚ Р·Р°РєРѕРјРјРёС‡РµРЅРѕ
git diff                # РєР°РєРёРµ РёР·РјРµРЅРµРЅРёСЏ
git log --oneline -5    # РїРѕСЃР»РµРґРЅРёРµ РєРѕРјРјРёС‚С‹
```

### **РџСЂРё РѕС€РёР±РєР°С…:**
```bash
# РћС‚РјРµРЅР° РїРѕСЃР»РµРґРЅРµРіРѕ РєРѕРјРјРёС‚Р° (Р»РѕРєР°Р»СЊРЅРѕ)
git reset --soft HEAD~1

# РћС‚РјРµРЅР° РёР·РјРµРЅРµРЅРёР№ РІ С„Р°Р№Р»Рµ
git checkout -- РёРјСЏ-С„Р°Р№Р»Р°

# РЎРёРЅС…СЂРѕРЅРёР·Р°С†РёСЏ СЃ GitHub РїСЂРё РєРѕРЅС„Р»РёРєС‚Р°С…
git pull origin main
# СЂРµС€РёС‚СЊ РєРѕРЅС„Р»РёРєС‚С‹
git push origin main
```

## рџ“± Р‘С‹СЃС‚СЂС‹Рµ РєР»Р°РІРёС€Рё VS Code РґР»СЏ Git

```bash
Ctrl+Shift+G    - Source Control РїР°РЅРµР»СЊ
Ctrl+Shift+P    - Command Palette
Ctrl+`          - РўРµСЂРјРёРЅР°Р»
Ctrl+Enter      - РљРѕРјРјРёС‚ РІ Source Control
F1              - РљРѕРјР°РЅРґС‹ Git С‡РµСЂРµР· РїР°Р»РёС‚СЂСѓ
```

---

**РЈСЃРїРµС€РЅРѕР№ СЂР°Р±РѕС‚С‹ СЃ Git РІ VS Code! Р’СЃРµРіРґР° РёСЃРїРѕР»СЊР·СѓР№С‚Рµ РѕСЃРјС‹СЃР»РµРЅРЅС‹Рµ commit messages Рё СЂРµРіСѓР»СЏСЂРЅРѕ РїСѓС€СЊС‚Рµ РёР·РјРµРЅРµРЅРёСЏ РЅР° GitHub.** рџљЂ
```

---

### `docs/Technical/address_books_sendpulse.md` (32.45 KB)

```markdown
РњРѕР¶РµРј Р»Рё РјС‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё СЃРµРЅРґРїСѓР»СЊСЃ РґР»СЏ С…СЂР°РЅРµРЅРёСЏ РґР°С‚С‹ РЅР°С‡Р°Р»Р° Рё РєРѕРЅС†Р° РїРѕРґРїРёСЃРєРё?

Р”Р°, РјРѕР¶РµРј РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё SendPulse РґР»СЏ С…СЂР°РЅРµРЅРёСЏ РґР°С‚ РїРѕРґРїРёСЃРєРё! Р­С‚Рѕ РґР°Р¶Рµ СѓРґРѕР±РЅРµРµ, С‡РµРј С…СЂР°РЅРёС‚СЊ РІСЃС‘ РІ Cloudflare.
РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ РІ SendPulse:
1. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ РІ Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРµ
SendPulse РїРѕР·РІРѕР»СЏРµС‚ СЃРѕР·РґР°РІР°С‚СЊ custom РїРѕР»СЏ РґР»СЏ РєРѕРЅС‚Р°РєС‚РѕРІ:
Email: user@example.com
в”њв”Ђв”Ђ subscription_start: 2025-06-27
в”њв”Ђв”Ђ subscription_end: 2025-09-27
в”њв”Ђв”Ђ subscription_type: standard
в”њв”Ђв”Ђ access_token: abc123xyz
в””в”Ђв”Ђ course_progress: week_2
2. РџСЂРµРёРјСѓС‰РµСЃС‚РІР° СЌС‚РѕРіРѕ РїРѕРґС…РѕРґР°:

вњ… Р’СЃРµ РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ
вњ… РђРІС‚РѕРјР°С‚РёС‡РµСЃРєР°СЏ СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёСЏ СЃ email-РєР°РјРїР°РЅРёСЏРјРё
вњ… Р’СЃС‚СЂРѕРµРЅРЅР°СЏ СЃРµРіРјРµРЅС‚Р°С†РёСЏ РїРѕ РґР°С‚Р°Рј
вњ… РќРµ РЅСѓР¶РЅР° РѕС‚РґРµР»СЊРЅР°СЏ Р±Р°Р·Р° РґР°РЅРЅС‹С…
вњ… РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ Рѕ РїСЂРѕРґР»РµРЅРёРё

3. РљР°Рє РЅР°СЃС‚СЂРѕРёС‚СЊ:
Р’ SendPulse:
1. РђРґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё в†’ Р’С‹Р±СЂР°С‚СЊ РєРЅРёРіСѓ в†’ РќР°СЃС‚СЂРѕР№РєРё
2. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ в†’ Р”РѕР±Р°РІРёС‚СЊ РїРѕР»Рµ
3. РЎРѕР·РґР°С‚СЊ РїРѕР»СЏ:
   - subscription_start (С‚РёРї: Р”Р°С‚Р°)
   - subscription_end (С‚РёРї: Р”Р°С‚Р°)
   - subscription_type (С‚РёРї: РЎС‚СЂРѕРєР°)
   - access_token (С‚РёРї: РЎС‚СЂРѕРєР°)
4. РђРІС‚РѕРјР°С‚РёР·Р°С†РёСЏ РЅР° РѕСЃРЅРѕРІРµ РґР°С‚:
Automation 360 СЃС†РµРЅР°СЂРёРё:
в”њв”Ђв”Ђ Р—Р° 7 РґРЅРµР№ РґРѕ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РќР°РїРѕРјРёРЅР°РЅРёРµ Рѕ РїСЂРѕРґР»РµРЅРёРё
в”њв”Ђв”Ђ Р’ РґРµРЅСЊ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РџРѕСЃР»РµРґРЅРµРµ РїРёСЃСЊРјРѕ СЃ РїСЂРµРґР»РѕР¶РµРЅРёРµРј
в”њв”Ђв”Ђ РџРѕСЃР»Рµ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РџРµСЂРµРІРѕРґ РІ РґСЂСѓРіСѓСЋ Р°РґСЂРµСЃРЅСѓСЋ РєРЅРёРіСѓ
в””в”Ђв”Ђ РџСЂРё РїСЂРѕРґР»РµРЅРёРё в†’ РћР±РЅРѕРІР»РµРЅРёРµ subscription_end
5. Webhook РёРЅС‚РµРіСЂР°С†РёСЏ:
javascript// РџСЂРё РїРѕРєСѓРїРєРµ РѕР±РЅРѕРІР»СЏРµРј РґР°РЅРЅС‹Рµ РІ SendPulse
async function updateSendPulseContact(email, purchaseData) {
  const startDate = new Date().toISOString();
  const endDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();
  
  // API Р·Р°РїСЂРѕСЃ Рє SendPulse
  await fetch('https://api.sendpulse.com/addressbooks/{id}/emails', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${SENDPULSE_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emails: [{
        email: email,
        variables: {
          subscription_start: startDate,
          subscription_end: endDate,
          subscription_type: purchaseData.tariff,
          access_token: generateToken(email)
        }
      }]
    })
  });
}
6. РџСЂРѕРІРµСЂРєР° РґРѕСЃС‚СѓРїР° С‡РµСЂРµР· Cloudflare Worker:
javascript// Р’РјРµСЃС‚Рѕ D1 Р±Р°Р·С‹ РґР°РЅРЅС‹С… РёСЃРїРѕР»СЊР·СѓРµРј SendPulse API
async function checkAccessViaSendPulse(email, token) {
  const response = await fetch(`https://api.sendpulse.com/addressbooks/{id}/emails/${email}`, {
    headers: {
      'Authorization': `Bearer ${SENDPULSE_TOKEN}`
    }
  });
  
  const userData = await response.json();
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґР°С‚Сѓ РѕРєРѕРЅС‡Р°РЅРёСЏ
  if (userData.variables.access_token === token && 
      new Date(userData.variables.subscription_end) > new Date()) {
    return true;
  }
  
  return false;
}
Р­С‚Рѕ СѓРїСЂРѕС‰Р°РµС‚ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ:
Р‘С‹Р»Рѕ:

SendPulse (email) + Cloudflare D1 (РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё)

РЎС‚Р°Р»Рѕ:

SendPulse (email + РІСЃРµ РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё) вњ…

РҐРѕС‚РёС‚Рµ С‚Р°Рє СЂРµР°Р»РёР·РѕРІР°С‚СЊ? Р­С‚Рѕ РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ РїСЂРѕС‰Рµ РґР»СЏ MVP!RetryР’С‚Рѕ РµСЃС‚СЊ Р±РµР· D1 РІРѕРѕР±С‰Рµ РјРѕР¶РЅРѕ РѕР±РѕР№С‚РёСЃСЊ?EditР”Р°, РґР»СЏ MVP РјРѕР¶РЅРѕ РїРѕР»РЅРѕСЃС‚СЊСЋ РѕР±РѕР№С‚РёСЃСЊ Р±РµР· D1!
РђСЂС…РёС‚РµРєС‚СѓСЂР° Р±РµР· D1:
SendPulse С…СЂР°РЅРёС‚ Р’РЎРЃ:
SendPulse Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°:
в”њв”Ђв”Ђ email
в”њв”Ђв”Ђ subscription_start
в”њв”Ђв”Ђ subscription_end  
в”њв”Ђв”Ђ subscription_type (basic/standard/vip)
в”њв”Ђв”Ђ access_token
в”њв”Ђв”Ђ payment_id
в””в”Ђв”Ђ last_lesson_watched
Cloudflare Workers С‚РѕР»СЊРєРѕ:

РџСЂРёРЅРёРјР°РµС‚ webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ
РџСЂРѕРІРµСЂСЏРµС‚ С‚РѕРєРµРЅ РїСЂРё РґРѕСЃС‚СѓРїРµ Рє РІРёРґРµРѕ (С‡РµСЂРµР· SendPulse API)
РћС‚РґР°РµС‚ РІРёРґРµРѕ РёР· R2 Storage

РџР»СЋСЃС‹ РѕС‚РєР°Р·Р° РѕС‚ D1:
вњ… РџСЂРѕС‰Рµ Р°СЂС…РёС‚РµРєС‚СѓСЂР° - РѕРґРЅР° СЃРёСЃС‚РµРјР° РІРјРµСЃС‚Рѕ РґРІСѓС…
вњ… Р”РµС€РµРІР»Рµ - РЅРµ РїР»Р°С‚РёРј Р·Р° D1 РѕРїРµСЂР°С†РёРё
вњ… Р•РґРёРЅС‹Р№ РёСЃС‚РѕС‡РЅРёРє РїСЂР°РІРґС‹ - РІСЃРµ РґР°РЅРЅС‹Рµ РІ SendPulse
вњ… РџСЂРѕС‰Рµ backup - SendPulse СЃР°Рј РґРµР»Р°РµС‚ СЂРµР·РµСЂРІРЅС‹Рµ РєРѕРїРёРё
вњ… Р“РѕС‚РѕРІР°СЏ Р°РґРјРёРЅРєР° - СѓРїСЂР°РІР»РµРЅРёРµ С‡РµСЂРµР· РёРЅС‚РµСЂС„РµР№СЃ SendPulse
РњРёРЅСѓСЃС‹:
вљ пёЏ РЎРєРѕСЂРѕСЃС‚СЊ - API Р·Р°РїСЂРѕСЃС‹ Рє SendPulse РјРµРґР»РµРЅРЅРµРµ С‡РµРј D1
вљ пёЏ Р›РёРјРёС‚С‹ API - РѕРіСЂР°РЅРёС‡РµРЅРёСЏ РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ Р·Р°РїСЂРѕСЃРѕРІ
вљ пёЏ Р—Р°РІРёСЃРёРјРѕСЃС‚СЊ - РµСЃР»Рё SendPulse Р»РµР¶РёС‚, РІСЃС‘ РЅРµ СЂР°Р±РѕС‚Р°РµС‚
Р РµС€РµРЅРёРµ РґР»СЏ СЃРєРѕСЂРѕСЃС‚Рё - РєРµС€РёСЂРѕРІР°РЅРёРµ РІ KV:
javascript// РљРµС€РёСЂСѓРµРј РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РЅР° 5 РјРёРЅСѓС‚
async function getUser(email, token) {
  const cacheKey = `user:${email}:${token}`;
  
  // РџСЂРѕРІРµСЂСЏРµРј РєРµС€
  const cached = await env.KV.get(cacheKey, 'json');
  if (cached) return cached;
  
  // Р•СЃР»Рё РЅРµС‚ РІ РєРµС€Рµ - Р·Р°РїСЂРѕСЃ Рє SendPulse
  const userData = await fetchFromSendPulse(email);
  
  // РљРµС€РёСЂСѓРµРј РЅР° 5 РјРёРЅСѓС‚
  await env.KV.put(cacheKey, JSON.stringify(userData), {
    expirationTtl: 300
  });
  
  return userData;
}
РС‚РѕРіРѕРІР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° MVP:
SendPulse (С…СЂР°РЅРµРЅРёРµ РґР°РЅРЅС‹С… + email)
    в†“
Cloudflare Workers (Р»РѕРіРёРєР° + РєРµС€)
    в†“
R2 Storage (РІРёРґРµРѕ С„Р°Р№Р»С‹)
Р­С‚Рѕ РјР°РєСЃРёРјР°Р»СЊРЅРѕ РїСЂРѕСЃС‚РѕРµ СЂРµС€РµРЅРёРµ РґР»СЏ СЃС‚Р°СЂС‚Р°! РљРѕРіРґР° Р±СѓРґРµС‚ 1000+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№, РјРѕР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ D1 РґР»СЏ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё.
РЎРѕРіР»Р°СЃРЅС‹ СЃ С‚Р°РєРёРј РїРѕРґС…РѕРґРѕРј?RetryР’С…Рј... РјРѕР¶РµРј СЃРєРѕРїРёСЂРѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё СЃРµРЅРґРїСѓР»СЊСЃ РІ РєР»Р°СѓРґС„Р»РµР№СЂ, С‚Р°Рј Р±СѓРґРµС‚ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РІС‹РіСЂСѓР·РєРё РІ csv
РќРѕ Сѓ РјРµРЅСЏ РґСЂСѓРіРѕР№ РІРѕРїСЂРѕСЃ.
РџРѕРґСЃРєР°Р¶Рё Р±РµСЃС‚ РїСЂР°РєС‚РёРє СЂР°Р±РѕС‚С‹ СЃ Р°РґСЂРµСЃРЅС‹РјРё РєРЅРёРіР°РјРё СЃРµРЅРґРїСѓР»СЊСЃР° РІ РєРѕРЅС‚РµРєСЃС‚Рµ РђСѓС‚РѕРјРµР№С€РЅ360
РњРѕСЏ Р»РѕРіРёРєР° СЃР»РµРґСѓСЋС‰Р°СЏ
1. Сѓ РЅР°СЃ С„РѕСЂРјРёСЂСѓРµС‚СЃСЏ Р“Р»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР° СЃРѕ РІСЃРµРјРё РїРѕРґРїРёСЃС‡РёРєР°РјРё, РєС‚Рѕ РїСЂРёС€РµР» СЃ Р»РµРЅРґРёРЅРіР°. РћРЅРё РїРѕР»СѓС‡Р°СЋС‚ Welcome-СЂР°СЃСЃС‹Р»РєСѓ. Р’ РїСЂРѕС†РµСЃСЃРµ СЂР°СЃСЃС‹Р»РєРё РјС‹ РїСЂРѕРІРѕРґРёРј Р°РЅРєРµС‚РёСЂРѕРІР°РЅРёСЏ Рё РїРѕР»СѓС‡Р°РµРј Р±РѕР»СЊС€Рµ Р·Р°РїРёСЃРµР№ РІ С‚Р°Р±Р»РёС†Рµ. (РїРѕСЃРѕРІРµС‚СѓР№ РєР°РєР°СЏ Р·РЅР°С‡РёРјР°СЏ РЅР°Рј РјРѕР¶РµС‚ РїРѕРЅР°РґРѕР±РёС‚СЊСЃСЏ Рё РєР°РєРёРµ СЃР»СѓР¶РµР±РЅС‹Рµ Рё РёРЅРґРµРєСЃРЅС‹Рµ РїРѕР»СЏ С‚Р°Рј РЅСѓР¶РЅРѕ СЃРґРµР»Р°С‚СЊ)
2. Р›РёРґ СЂРµС€Р°РµС‚СЃСЏ РІ РїСЂРѕС†РµСЃСЃРµ РєСѓРїРёС‚СЊ 1Р№ РєСѓСЂСЃ...EditРћС‚Р»РёС‡РЅС‹Р№ РІРѕРїСЂРѕСЃ! Р”Р°РІР°Р№С‚Рµ СЂР°Р·Р±РµСЂРµРј best practices РґР»СЏ Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі SendPulse РІ РєРѕРЅС‚РµРєСЃС‚Рµ Automation 360.
рџ“љ РЎС‚СЂСѓРєС‚СѓСЂР° Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі РґР»СЏ РІР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°:
1. Р“Р»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "Р’СЃРµ Р»РёРґС‹"
РћСЃРЅРѕРІРЅС‹Рµ РїРѕР»СЏ:
в”њв”Ђв”Ђ email*
в”њв”Ђв”Ђ name (РёРјСЏ)
в”њв”Ђв”Ђ phone (С‚РµР»РµС„РѕРЅ)
в”њв”Ђв”Ђ source (РёСЃС‚РѕС‡РЅРёРє: organic/fb/google)
в”њв”Ђв”Ђ lead_date (РґР°С‚Р° СЂРµРіРёСЃС‚СЂР°С†РёРё)
в””в”Ђв”Ђ lead_score (0-100 Р±Р°Р»Р»СЊРЅР°СЏ РѕС†РµРЅРєР°)

РђРЅРєРµС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ:
в”њв”Ђв”Ђ age_group (25-34/35-44/45-54/55+)
в”њв”Ђв”Ђ main_problem (back_pain/neck_pain/stress/other)
в”њв”Ђв”Ђ experience_level (beginner/intermediate/advanced)
в”њв”Ђв”Ђ preferred_time (morning/evening/weekend)
в””в”Ђв”Ђ city (РґР»СЏ РіРµРѕС‚Р°СЂРіРµС‚РёРЅРіР°)

РЎР»СѓР¶РµР±РЅС‹Рµ РїРѕР»СЏ:
в”њв”Ђв”Ђ utm_source
в”њв”Ђв”Ђ utm_medium
в”њв”Ђв”Ђ utm_campaign
в”њв”Ђв”Ђ welcome_completed (true/false)
в”њв”Ђв”Ђ survey_completed (true/false)
в””в”Ђв”Ђ last_activity_date
2. РђРґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "РџРѕРєСѓРїР°С‚РµР»Рё РљСѓСЂСЃ 1"
Р’СЃРµ РїРѕР»СЏ РёР· РіР»Р°РІРЅРѕР№ + РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ:
в”њв”Ђв”Ђ purchase_date
в”њв”Ђв”Ђ subscription_type (basic/standard/vip)
в”њв”Ђв”Ђ subscription_start
в”њв”Ђв”Ђ subscription_end
в”њв”Ђв”Ђ payment_method (monobank/fondy)
в”њв”Ђв”Ђ payment_id
в”њв”Ђв”Ђ access_token
в”њв”Ђв”Ђ course_progress (lesson_1/lesson_2/...)
в”њв”Ђв”Ђ last_lesson_date
в”њв”Ђв”Ђ completion_rate (%)
в””в”Ђв”Ђ satisfaction_score (1-10)
рџ”„ Best Practices РґР»СЏ Automation 360:
1. РЎРµРіРјРµРЅС‚Р°С†РёСЏ С‡РµСЂРµР· СѓСЃР»РѕРІРёСЏ, Р° РЅРµ РєРѕРїРёСЂРѕРІР°РЅРёРµ
Р’РјРµСЃС‚Рѕ РєРѕРїРёСЂРѕРІР°РЅРёСЏ РІ СЂР°Р·РЅС‹Рµ РєРЅРёРіРё РёСЃРїРѕР»СЊР·СѓР№С‚Рµ:
- РЈСЃР»РѕРІРёСЏ РІ Automation 360
- Р”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹
- РўРµРіРё РґР»СЏ Р±С‹СЃС‚СЂРѕР№ С„РёР»СЊС‚СЂР°С†РёРё
2. РџСЂР°РІРёР»СЊРЅС‹Р№ flow РґР»СЏ РїРѕРєСѓРїРєРё РєСѓСЂСЃР°:
Р›РёРґ РІ РіР»Р°РІРЅРѕР№ РєРЅРёРіРµ
    в†“
РџРѕРєСѓРїРєР° РєСѓСЂСЃР° (webhook)
    в†“
РћР‘РќРћР’Р›Р•РќРР• РїРѕР»РµР№ РІ С‚РѕР№ Р¶Рµ РєРЅРёРіРµ:
- is_customer = true
- course_1_purchased = true
- subscription_end = РґР°С‚Р°
    в†“
Р”РѕР±Р°РІР»РµРЅРёРµ С‚РµРіР° "customer_course_1"
    в†“
Р—Р°РїСѓСЃРє РѕС‚РґРµР»СЊРЅРѕР№ Automation РґР»СЏ РїРѕРєСѓРїР°С‚РµР»РµР№
3. РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ С‚РµРіРѕРІ РІРјРµСЃС‚Рѕ РјРЅРѕР¶РµСЃС‚РІР° РєРЅРёРі:
РўРµРіРё РґР»СЏ СЃРµРіРјРµРЅС‚Р°С†РёРё:
в”њв”Ђв”Ђ lead_cold (РЅРµ РѕС‚РєСЂС‹РІР°Р» 30 РґРЅРµР№)
в”њв”Ђв”Ђ lead_warm (Р°РєС‚РёРІРЅС‹Р№)
в”њв”Ђв”Ђ lead_hot (РіРѕС‚РѕРІ РєСѓРїРёС‚СЊ)
в”њв”Ђв”Ђ customer_course_1
в”њв”Ђв”Ђ customer_course_2
в”њв”Ђв”Ђ vip_customer
в”њв”Ђв”Ђ churned (РѕС‚РїРёСЃР°Р»СЃСЏ)
в””в”Ђв”Ђ reactivation_candidate
4. Automation 360 СЃС†РµРЅР°СЂРёРё:
1. Welcome Series (РґР»СЏ РІСЃРµС… РЅРѕРІС‹С…):
   в””в”Ђв†’ РџРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ: С‚РµРі "welcome_completed"

2. Lead Nurturing (РµСЃР»Рё РЅРµ РєСѓРїРёР» РїРѕСЃР»Рµ Welcome):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: РќР• РёРјРµРµС‚ С‚РµРі "customer_*"

3. Course Delivery (РїРѕСЃР»Рµ РїРѕРєСѓРїРєРё):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: С‚РµРі "customer_course_1"
   в””в”Ђв†’ РџСЂРѕРІРµСЂРєР° subscription_end РїРµСЂРµРґ РєР°Р¶РґС‹Рј РїРёСЃСЊРјРѕРј

4. Reactivation (РґР»СЏ РёСЃС‚РµРєС€РёС… РїРѕРґРїРёСЃРѕРє):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: subscription_end < СЃРµРіРѕРґРЅСЏ
5. РРЅРґРµРєСЃРЅС‹Рµ РїРѕР»СЏ РґР»СЏ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё:
javascriptРљР»СЋС‡РµРІС‹Рµ РїРѕР»СЏ РґР»СЏ С„РёР»СЊС‚СЂР°С†РёРё:
- email (primary key)
- lead_score (РґР»СЏ РїСЂРёРѕСЂРёС‚РёР·Р°С†РёРё)
- subscription_end (РґР»СЏ РїСЂРѕРІРµСЂРєРё РґРѕСЃС‚СѓРїР°)
- last_activity_date (РґР»СЏ СЂРµР°РєС‚РёРІР°С†РёРё)
- tags (РјР°СЃСЃРёРІ С‚РµРіРѕРІ)
рџ’Ў Р РµРєРѕРјРµРЅРґР°С†РёСЏ РїРѕ Р°СЂС…РёС‚РµРєС‚СѓСЂРµ:
РћРґРЅР° РіР»Р°РІРЅР°СЏ РєРЅРёРіР° + С‚РµРіРё + РґРёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ = РїСЂРѕС‰Рµ СѓРїСЂР°РІР»СЏС‚СЊ
РџСЂРµРёРјСѓС‰РµСЃС‚РІР°:
вњ… РќРµС‚ РґСѓР±Р»РёСЂРѕРІР°РЅРёСЏ РґР°РЅРЅС‹С…
вњ… РСЃС‚РѕСЂРёСЏ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёР№ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ
вњ… Р›РµРіРєРѕ СЃС‚СЂРѕРёС‚СЊ СЃР»РѕР¶РЅС‹Рµ СЃРµРіРјРµРЅС‚С‹
вњ… РџСЂРѕС‰Рµ Р°РЅР°Р»РёС‚РёРєР°
вњ… РњРµРЅСЊС€Рµ РѕС€РёР±РѕРє СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёРё
рџ“Љ РџСЂРёРјРµСЂ РґРёРЅР°РјРёС‡РµСЃРєРѕРіРѕ СЃРµРіРјРµРЅС‚Р°:
"Р“РѕСЂСЏС‡РёРµ Р»РёРґС‹ РґР»СЏ РљСѓСЂСЃР° 2":
- РРјРµРµС‚ С‚РµРі: customer_course_1
- course_1_progress > 70%
- satisfaction_score >= 8
- РќР• РёРјРµРµС‚ С‚РµРі: customer_course_2
- last_activity_date < 7 РґРЅРµР№ РЅР°Р·Р°Рґ
Р­С‚Рѕ РїРѕР·РІРѕР»РёС‚ С‚РѕС‡РµС‡РЅРѕ С‚Р°СЂРіРµС‚РёСЂРѕРІР°С‚СЊ РїСЂРµРґР»РѕР¶РµРЅРёСЏ Р±РµР· СЃРѕР·РґР°РЅРёСЏ РґРµСЃСЏС‚РєРѕРІ Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі!
Р§С‚Рѕ РґСѓРјР°РµС‚Рµ Рѕ С‚Р°РєРѕРј РїРѕРґС…РѕРґРµ?RetryР’РЇ РЅРµ РїРѕРЅСЏР», С‡С‚Рѕ С‚Р°РєРѕРµ РґРёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹.EditР”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ РІ SendPulse - СЌС‚Рѕ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕР±РЅРѕРІР»СЏРµРјС‹Рµ РіСЂСѓРїРїС‹ РєРѕРЅС‚Р°РєС‚РѕРІ РЅР° РѕСЃРЅРѕРІРµ Р·Р°РґР°РЅРЅС‹С… СѓСЃР»РѕРІРёР№.
Р Р°Р·РЅРёС†Р° РјРµР¶РґСѓ РїРѕРґС…РѕРґР°РјРё:
вќЊ РЎС‚Р°С‚РёС‡РµСЃРєРёРµ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё (СЃС‚Р°СЂС‹Р№ СЃРїРѕСЃРѕР±):
РђРґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "РљСѓРїРёР»Рё РєСѓСЂСЃ 1" - 50 С‡РµР»РѕРІРµРє
в”њв”Ђв”Ђ РРІР°РЅ (РґРѕР±Р°РІР»РµРЅ РІСЂСѓС‡РЅСѓСЋ)
в”њв”Ђв”Ђ РњР°СЂРёСЏ (РґРѕР±Р°РІР»РµРЅР° РІСЂСѓС‡РЅСѓСЋ)
в””в”Ђв”Ђ ... (РЅСѓР¶РЅРѕ РІСЂСѓС‡РЅСѓСЋ РґРѕР±Р°РІР»СЏС‚СЊ/СѓРґР°Р»СЏС‚СЊ)
вњ… Р”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ (СЃРѕРІСЂРµРјРµРЅРЅС‹Р№ СЃРїРѕСЃРѕР±):
РЎРµРіРјРµРЅС‚ "РђРєС‚РёРІРЅС‹Рµ VIP РєР»РёРµРЅС‚С‹" (РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё):
РЈСЃР»РѕРІРёСЏ:
- subscription_type = "VIP"
- subscription_end > СЃРµРіРѕРґРЅСЏ
- last_activity < 7 РґРЅРµР№

Р РµР·СѓР»СЊС‚Р°С‚: SendPulse СЃР°Рј РЅР°С…РѕРґРёС‚ РІСЃРµС…, РєС‚Рѕ РїРѕРґС…РѕРґРёС‚
РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ РІ SendPulse:
1. РЎРѕР·РґР°РЅРёРµ СЃРµРіРјРµРЅС‚Р°:
РђРґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё в†’ Р’С‹Р±СЂР°С‚СЊ РєРЅРёРіСѓ в†’ РЎРµРіРјРµРЅС‚С‹ в†’ РЎРѕР·РґР°С‚СЊ СЃРµРіРјРµРЅС‚

РќР°СЃС‚СЂРѕР№РєРё:
в”њв”Ђв”Ђ РќР°Р·РІР°РЅРёРµ: "Р“РѕС‚РѕРІС‹ Рє РїРѕРєСѓРїРєРµ РєСѓСЂСЃР° 2"
в”њв”Ђв”Ђ РЈСЃР»РѕРІРёСЏ:
в”‚   в”њв”Ђв”Ђ РўРµРі СЃРѕРґРµСЂР¶РёС‚ "customer_course_1"
в”‚   в”њв”Ђв”Ђ Р course_progress Р±РѕР»СЊС€Рµ 70%
в”‚   в”њв”Ђв”Ђ Р РќР• СЃРѕРґРµСЂР¶РёС‚ С‚РµРі "customer_course_2"
в”‚   в””в”Ђв”Ђ Р lead_score Р±РѕР»СЊС€Рµ 80
в””в”Ђв”Ђ РЎРѕС…СЂР°РЅРёС‚СЊ
2. РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ:

РќРѕРІС‹Р№ С‡РµР»РѕРІРµРє РєСѓРїРёР» РєСѓСЂСЃ 1 в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РїРѕРїР°РґР°РµС‚ РІ СЃРµРіРјРµРЅС‚
РљС‚Рѕ-С‚Рѕ РїСЂРѕС€РµР» 70% РєСѓСЂСЃР° в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РґРѕР±Р°РІР»СЏРµС‚СЃСЏ
РЈ РєРѕРіРѕ-С‚Рѕ РёСЃС‚РµРєР»Р° РїРѕРґРїРёСЃРєР° в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РёСЃРєР»СЋС‡Р°РµС‚СЃСЏ

3. РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РІ Automation 360:
РљР°РјРїР°РЅРёСЏ: "РџСЂРѕРґР°Р¶Р° РєСѓСЂСЃР° 2"
РџРѕР»СѓС‡Р°С‚РµР»Рё: РЎРµРіРјРµРЅС‚ "Р“РѕС‚РѕРІС‹ Рє РїРѕРєСѓРїРєРµ РєСѓСЂСЃР° 2"
Р—Р°РїСѓСЃРє: РљР°Р¶РґС‹Р№ РїРѕРЅРµРґРµР»СЊРЅРёРє РЅРѕРІС‹Рј РєРѕРЅС‚Р°РєС‚Р°Рј РІ СЃРµРіРјРµРЅС‚Рµ
РџСЂРёРјРµСЂС‹ РїРѕР»РµР·РЅС‹С… СЃРµРіРјРµРЅС‚РѕРІ РґР»СЏ РІР°СЃ:
рџ“Љ "РќРµР°РєС‚РёРІРЅС‹Рµ РїРѕРґРїРёСЃС‡РёРєРё"
РЈСЃР»РѕРІРёСЏ:
- welcome_completed = true
- last_activity_date > 30 РґРЅРµР№ РЅР°Р·Р°Рґ
- is_customer = false
рџ’° "РџРѕРґРїРёСЃРєР° РёСЃС‚РµРєР°РµС‚"
РЈСЃР»РѕРІРёСЏ:
- subscription_end РјРµР¶РґСѓ (СЃРµРіРѕРґРЅСЏ) Рё (СЃРµРіРѕРґРЅСЏ + 7 РґРЅРµР№)
- is_customer = true
рџ”Ґ "Р“РѕСЂСЏС‡РёРµ Р»РёРґС‹"
РЈСЃР»РѕРІРёСЏ:
- lead_score > 80
- РћС‚РєСЂС‹Р» РїРѕСЃР»РµРґРЅРёРµ 3 РїРёСЃСЊРјР°
- РљР»РёРєРЅСѓР» С…РѕС‚СЏ Р±С‹ 1 СЂР°Р·
- is_customer = false
рџЋЇ "РРґРµР°Р»СЊРЅР°СЏ Р°СѓРґРёС‚РѕСЂРёСЏ РґР»СЏ VIP"
РЈСЃР»РѕРІРёСЏ:
- subscription_type = "standard"
- satisfaction_score >= 9
- course_progress = 100%
- age_group = "35-44" РёР»Рё "45-54"
РџСЂРµРёРјСѓС‰РµСЃС‚РІР° РґР»СЏ РІР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°:

РќРµ РЅСѓР¶РЅРѕ РІСЂСѓС‡РЅСѓСЋ РїРµСЂРµРєР»Р°РґС‹РІР°С‚СЊ Р»СЋРґРµР№ РјРµР¶РґСѓ РєРЅРёРіР°РјРё
Р’СЃРµРіРґР° Р°РєС‚СѓР°Р»СЊРЅС‹Рµ СЃРїРёСЃРєРё РґР»СЏ СЂР°СЃСЃС‹Р»РѕРє
РЎР»РѕР¶РЅР°СЏ Р»РѕРіРёРєР° Р±РµР· РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЏ
РћРґРёРЅ РёСЃС‚РѕС‡РЅРёРє РґР°РЅРЅС‹С… - РіР»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°

РљР°Рє РЅР°СЃС‚СЂРѕРёС‚СЊ РґР»СЏ MVP:
1. РћРґРЅР° Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°: "Р’СЃРµ РєРѕРЅС‚Р°РєС‚С‹ MasterMarat"

2. РЎРµРіРјРµРЅС‚С‹:
   - "РќРѕРІС‹Рµ Р»РёРґС‹" (РґР»СЏ Welcome)
   - "РџРѕРєСѓРїР°С‚РµР»Рё РєСѓСЂСЃР° 1" (РґР»СЏ РґРѕСЃС‚Р°РІРєРё СѓСЂРѕРєРѕРІ)
   - "Р—Р°РІРµСЂС€РёР»Рё РєСѓСЂСЃ 1" (РґР»СЏ РїСЂРѕРґР°Р¶Рё РєСѓСЂСЃР° 2)
   - "РќРµР°РєС‚РёРІРЅС‹Рµ" (РґР»СЏ СЂРµР°РєС‚РёРІР°С†РёРё)
   - "VIP РєР»РёРµРЅС‚С‹" (РѕСЃРѕР±РѕРµ РѕР±СЃР»СѓР¶РёРІР°РЅРёРµ)

3. Automation 360 СЂР°Р±РѕС‚Р°РµС‚ СЃ СЃРµРіРјРµРЅС‚Р°РјРё, РЅРµ СЃ РєРЅРёРіР°РјРё
РўРµРїРµСЂСЊ РїРѕРЅСЏС‚РЅРµРµ? Р­С‚Рѕ РєР°Рє "СѓРјРЅС‹Рµ РїР»РµР№Р»РёСЃС‚С‹" РІ РјСѓР·С‹РєР°Р»СЊРЅС‹С… РїСЂРёР»РѕР¶РµРЅРёСЏС… - РѕРЅРё СЃР°РјРё РѕР±РЅРѕРІР»СЏСЋС‚СЃСЏ РїРѕ РІР°С€РёРј РїСЂР°РІРёР»Р°Рј.РњРѕР¶РµРј Р»Рё РјС‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё СЃРµРЅРґРїСѓР»СЊСЃ РґР»СЏ С…СЂР°РЅРµРЅРёСЏ РґР°С‚С‹ РЅР°С‡Р°Р»Р° Рё РєРѕРЅС†Р° РїРѕРґРїРёСЃРєРё?EditР”Р°, РјРѕР¶РµРј РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё SendPulse РґР»СЏ С…СЂР°РЅРµРЅРёСЏ РґР°С‚ РїРѕРґРїРёСЃРєРё! Р­С‚Рѕ РґР°Р¶Рµ СѓРґРѕР±РЅРµРµ, С‡РµРј С…СЂР°РЅРёС‚СЊ РІСЃС‘ РІ Cloudflare.
РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ РІ SendPulse:
1. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ РІ Р°РґСЂРµСЃРЅРѕР№ РєРЅРёРіРµ
SendPulse РїРѕР·РІРѕР»СЏРµС‚ СЃРѕР·РґР°РІР°С‚СЊ custom РїРѕР»СЏ РґР»СЏ РєРѕРЅС‚Р°РєС‚РѕРІ:
Email: user@example.com
в”њв”Ђв”Ђ subscription_start: 2025-06-27
в”њв”Ђв”Ђ subscription_end: 2025-09-27
в”њв”Ђв”Ђ subscription_type: standard
в”њв”Ђв”Ђ access_token: abc123xyz
в””в”Ђв”Ђ course_progress: week_2
2. РџСЂРµРёРјСѓС‰РµСЃС‚РІР° СЌС‚РѕРіРѕ РїРѕРґС…РѕРґР°:

вњ… Р’СЃРµ РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ
вњ… РђРІС‚РѕРјР°С‚РёС‡РµСЃРєР°СЏ СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёСЏ СЃ email-РєР°РјРїР°РЅРёСЏРјРё
вњ… Р’СЃС‚СЂРѕРµРЅРЅР°СЏ СЃРµРіРјРµРЅС‚Р°С†РёСЏ РїРѕ РґР°С‚Р°Рј
вњ… РќРµ РЅСѓР¶РЅР° РѕС‚РґРµР»СЊРЅР°СЏ Р±Р°Р·Р° РґР°РЅРЅС‹С…
вњ… РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРёРµ РЅР°РїРѕРјРёРЅР°РЅРёСЏ Рѕ РїСЂРѕРґР»РµРЅРёРё

3. РљР°Рє РЅР°СЃС‚СЂРѕРёС‚СЊ:
Р’ SendPulse:
1. РђРґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё в†’ Р’С‹Р±СЂР°С‚СЊ РєРЅРёРіСѓ в†’ РќР°СЃС‚СЂРѕР№РєРё
2. Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРѕР»СЏ в†’ Р”РѕР±Р°РІРёС‚СЊ РїРѕР»Рµ
3. РЎРѕР·РґР°С‚СЊ РїРѕР»СЏ:
   - subscription_start (С‚РёРї: Р”Р°С‚Р°)
   - subscription_end (С‚РёРї: Р”Р°С‚Р°)
   - subscription_type (С‚РёРї: РЎС‚СЂРѕРєР°)
   - access_token (С‚РёРї: РЎС‚СЂРѕРєР°)
4. РђРІС‚РѕРјР°С‚РёР·Р°С†РёСЏ РЅР° РѕСЃРЅРѕРІРµ РґР°С‚:
Automation 360 СЃС†РµРЅР°СЂРёРё:
в”њв”Ђв”Ђ Р—Р° 7 РґРЅРµР№ РґРѕ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РќР°РїРѕРјРёРЅР°РЅРёРµ Рѕ РїСЂРѕРґР»РµРЅРёРё
в”њв”Ђв”Ђ Р’ РґРµРЅСЊ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РџРѕСЃР»РµРґРЅРµРµ РїРёСЃСЊРјРѕ СЃ РїСЂРµРґР»РѕР¶РµРЅРёРµРј
в”њв”Ђв”Ђ РџРѕСЃР»Рµ РѕРєРѕРЅС‡Р°РЅРёСЏ в†’ РџРµСЂРµРІРѕРґ РІ РґСЂСѓРіСѓСЋ Р°РґСЂРµСЃРЅСѓСЋ РєРЅРёРіСѓ
в””в”Ђв”Ђ РџСЂРё РїСЂРѕРґР»РµРЅРёРё в†’ РћР±РЅРѕРІР»РµРЅРёРµ subscription_end
5. Webhook РёРЅС‚РµРіСЂР°С†РёСЏ:
javascript// РџСЂРё РїРѕРєСѓРїРєРµ РѕР±РЅРѕРІР»СЏРµРј РґР°РЅРЅС‹Рµ РІ SendPulse
async function updateSendPulseContact(email, purchaseData) {
  const startDate = new Date().toISOString();
  const endDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString();
  
  // API Р·Р°РїСЂРѕСЃ Рє SendPulse
  await fetch('https://api.sendpulse.com/addressbooks/{id}/emails', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${SENDPULSE_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      emails: [{
        email: email,
        variables: {
          subscription_start: startDate,
          subscription_end: endDate,
          subscription_type: purchaseData.tariff,
          access_token: generateToken(email)
        }
      }]
    })
  });
}
6. РџСЂРѕРІРµСЂРєР° РґРѕСЃС‚СѓРїР° С‡РµСЂРµР· Cloudflare Worker:
javascript// Р’РјРµСЃС‚Рѕ D1 Р±Р°Р·С‹ РґР°РЅРЅС‹С… РёСЃРїРѕР»СЊР·СѓРµРј SendPulse API
async function checkAccessViaSendPulse(email, token) {
  const response = await fetch(`https://api.sendpulse.com/addressbooks/{id}/emails/${email}`, {
    headers: {
      'Authorization': `Bearer ${SENDPULSE_TOKEN}`
    }
  });
  
  const userData = await response.json();
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґР°С‚Сѓ РѕРєРѕРЅС‡Р°РЅРёСЏ
  if (userData.variables.access_token === token && 
      new Date(userData.variables.subscription_end) > new Date()) {
    return true;
  }
  
  return false;
}
Р­С‚Рѕ СѓРїСЂРѕС‰Р°РµС‚ Р°СЂС…РёС‚РµРєС‚СѓСЂСѓ:
Р‘С‹Р»Рѕ:

SendPulse (email) + Cloudflare D1 (РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё)

РЎС‚Р°Р»Рѕ:

SendPulse (email + РІСЃРµ РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё) вњ…

РҐРѕС‚РёС‚Рµ С‚Р°Рє СЂРµР°Р»РёР·РѕРІР°С‚СЊ? Р­С‚Рѕ РґРµР№СЃС‚РІРёС‚РµР»СЊРЅРѕ РїСЂРѕС‰Рµ РґР»СЏ MVP!RetryР’С‚Рѕ РµСЃС‚СЊ Р±РµР· D1 РІРѕРѕР±С‰Рµ РјРѕР¶РЅРѕ РѕР±РѕР№С‚РёСЃСЊ?EditР”Р°, РґР»СЏ MVP РјРѕР¶РЅРѕ РїРѕР»РЅРѕСЃС‚СЊСЋ РѕР±РѕР№С‚РёСЃСЊ Р±РµР· D1!
РђСЂС…РёС‚РµРєС‚СѓСЂР° Р±РµР· D1:
SendPulse С…СЂР°РЅРёС‚ Р’РЎРЃ:
SendPulse Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°:
в”њв”Ђв”Ђ email
в”њв”Ђв”Ђ subscription_start
в”њв”Ђв”Ђ subscription_end  
в”њв”Ђв”Ђ subscription_type (basic/standard/vip)
в”њв”Ђв”Ђ access_token
в”њв”Ђв”Ђ payment_id
в””в”Ђв”Ђ last_lesson_watched
Cloudflare Workers С‚РѕР»СЊРєРѕ:

РџСЂРёРЅРёРјР°РµС‚ webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ
РџСЂРѕРІРµСЂСЏРµС‚ С‚РѕРєРµРЅ РїСЂРё РґРѕСЃС‚СѓРїРµ Рє РІРёРґРµРѕ (С‡РµСЂРµР· SendPulse API)
РћС‚РґР°РµС‚ РІРёРґРµРѕ РёР· R2 Storage

РџР»СЋСЃС‹ РѕС‚РєР°Р·Р° РѕС‚ D1:
вњ… РџСЂРѕС‰Рµ Р°СЂС…РёС‚РµРєС‚СѓСЂР° - РѕРґРЅР° СЃРёСЃС‚РµРјР° РІРјРµСЃС‚Рѕ РґРІСѓС…
вњ… Р”РµС€РµРІР»Рµ - РЅРµ РїР»Р°С‚РёРј Р·Р° D1 РѕРїРµСЂР°С†РёРё
вњ… Р•РґРёРЅС‹Р№ РёСЃС‚РѕС‡РЅРёРє РїСЂР°РІРґС‹ - РІСЃРµ РґР°РЅРЅС‹Рµ РІ SendPulse
вњ… РџСЂРѕС‰Рµ backup - SendPulse СЃР°Рј РґРµР»Р°РµС‚ СЂРµР·РµСЂРІРЅС‹Рµ РєРѕРїРёРё
вњ… Р“РѕС‚РѕРІР°СЏ Р°РґРјРёРЅРєР° - СѓРїСЂР°РІР»РµРЅРёРµ С‡РµСЂРµР· РёРЅС‚РµСЂС„РµР№СЃ SendPulse
РњРёРЅСѓСЃС‹:
вљ пёЏ РЎРєРѕСЂРѕСЃС‚СЊ - API Р·Р°РїСЂРѕСЃС‹ Рє SendPulse РјРµРґР»РµРЅРЅРµРµ С‡РµРј D1
вљ пёЏ Р›РёРјРёС‚С‹ API - РѕРіСЂР°РЅРёС‡РµРЅРёСЏ РЅР° РєРѕР»РёС‡РµСЃС‚РІРѕ Р·Р°РїСЂРѕСЃРѕРІ
вљ пёЏ Р—Р°РІРёСЃРёРјРѕСЃС‚СЊ - РµСЃР»Рё SendPulse Р»РµР¶РёС‚, РІСЃС‘ РЅРµ СЂР°Р±РѕС‚Р°РµС‚
Р РµС€РµРЅРёРµ РґР»СЏ СЃРєРѕСЂРѕСЃС‚Рё - РєРµС€РёСЂРѕРІР°РЅРёРµ РІ KV:
javascript// РљРµС€РёСЂСѓРµРј РґР°РЅРЅС‹Рµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РЅР° 5 РјРёРЅСѓС‚
async function getUser(email, token) {
  const cacheKey = `user:${email}:${token}`;
  
  // РџСЂРѕРІРµСЂСЏРµРј РєРµС€
  const cached = await env.KV.get(cacheKey, 'json');
  if (cached) return cached;
  
  // Р•СЃР»Рё РЅРµС‚ РІ РєРµС€Рµ - Р·Р°РїСЂРѕСЃ Рє SendPulse
  const userData = await fetchFromSendPulse(email);
  
  // РљРµС€РёСЂСѓРµРј РЅР° 5 РјРёРЅСѓС‚
  await env.KV.put(cacheKey, JSON.stringify(userData), {
    expirationTtl: 300
  });
  
  return userData;
}
РС‚РѕРіРѕРІР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° MVP:
SendPulse (С…СЂР°РЅРµРЅРёРµ РґР°РЅРЅС‹С… + email)
    в†“
Cloudflare Workers (Р»РѕРіРёРєР° + РєРµС€)
    в†“
R2 Storage (РІРёРґРµРѕ С„Р°Р№Р»С‹)
Р­С‚Рѕ РјР°РєСЃРёРјР°Р»СЊРЅРѕ РїСЂРѕСЃС‚РѕРµ СЂРµС€РµРЅРёРµ РґР»СЏ СЃС‚Р°СЂС‚Р°! РљРѕРіРґР° Р±СѓРґРµС‚ 1000+ РїРѕР»СЊР·РѕРІР°С‚РµР»РµР№, РјРѕР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ D1 РґР»СЏ РїСЂРѕРёР·РІРѕРґРёС‚РµР»СЊРЅРѕСЃС‚Рё.
РЎРѕРіР»Р°СЃРЅС‹ СЃ С‚Р°РєРёРј РїРѕРґС…РѕРґРѕРј?RetryР’С…Рј... РјРѕР¶РµРј СЃРєРѕРїРёСЂРѕРІР°С‚СЊ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё СЃРµРЅРґРїСѓР»СЊСЃ РІ РєР»Р°СѓРґС„Р»РµР№СЂ, С‚Р°Рј Р±СѓРґРµС‚ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊ РІС‹РіСЂСѓР·РєРё РІ csv
РќРѕ Сѓ РјРµРЅСЏ РґСЂСѓРіРѕР№ РІРѕРїСЂРѕСЃ.
РџРѕРґСЃРєР°Р¶Рё Р±РµСЃС‚ РїСЂР°РєС‚РёРє СЂР°Р±РѕС‚С‹ СЃ Р°РґСЂРµСЃРЅС‹РјРё РєРЅРёРіР°РјРё СЃРµРЅРґРїСѓР»СЊСЃР° РІ РєРѕРЅС‚РµРєСЃС‚Рµ РђСѓС‚РѕРјРµР№С€РЅ360
РњРѕСЏ Р»РѕРіРёРєР° СЃР»РµРґСѓСЋС‰Р°СЏ
1. Сѓ РЅР°СЃ С„РѕСЂРјРёСЂСѓРµС‚СЃСЏ Р“Р»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР° СЃРѕ РІСЃРµРјРё РїРѕРґРїРёСЃС‡РёРєР°РјРё, РєС‚Рѕ РїСЂРёС€РµР» СЃ Р»РµРЅРґРёРЅРіР°. РћРЅРё РїРѕР»СѓС‡Р°СЋС‚ Welcome-СЂР°СЃСЃС‹Р»РєСѓ. Р’ РїСЂРѕС†РµСЃСЃРµ СЂР°СЃСЃС‹Р»РєРё РјС‹ РїСЂРѕРІРѕРґРёРј Р°РЅРєРµС‚РёСЂРѕРІР°РЅРёСЏ Рё РїРѕР»СѓС‡Р°РµРј Р±РѕР»СЊС€Рµ Р·Р°РїРёСЃРµР№ РІ С‚Р°Р±Р»РёС†Рµ. (РїРѕСЃРѕРІРµС‚СѓР№ РєР°РєР°СЏ Р·РЅР°С‡РёРјР°СЏ РЅР°Рј РјРѕР¶РµС‚ РїРѕРЅР°РґРѕР±РёС‚СЊСЃСЏ Рё РєР°РєРёРµ СЃР»СѓР¶РµР±РЅС‹Рµ Рё РёРЅРґРµРєСЃРЅС‹Рµ РїРѕР»СЏ С‚Р°Рј РЅСѓР¶РЅРѕ СЃРґРµР»Р°С‚СЊ)
2. Р›РёРґ СЂРµС€Р°РµС‚СЃСЏ РІ РїСЂРѕС†РµСЃСЃРµ РєСѓРїРёС‚СЊ 1Р№ РєСѓСЂСЃ...EditРћС‚Р»РёС‡РЅС‹Р№ РІРѕРїСЂРѕСЃ! Р”Р°РІР°Р№С‚Рµ СЂР°Р·Р±РµСЂРµРј best practices РґР»СЏ Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі SendPulse РІ РєРѕРЅС‚РµРєСЃС‚Рµ Automation 360.
рџ“љ РЎС‚СЂСѓРєС‚СѓСЂР° Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі РґР»СЏ РІР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°:
1. Р“Р»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "Р’СЃРµ Р»РёРґС‹"
РћСЃРЅРѕРІРЅС‹Рµ РїРѕР»СЏ:
в”њв”Ђв”Ђ email*
в”њв”Ђв”Ђ name (РёРјСЏ)
в”њв”Ђв”Ђ phone (С‚РµР»РµС„РѕРЅ)
в”њв”Ђв”Ђ source (РёСЃС‚РѕС‡РЅРёРє: organic/fb/google)
в”њв”Ђв”Ђ lead_date (РґР°С‚Р° СЂРµРіРёСЃС‚СЂР°С†РёРё)
в””в”Ђв”Ђ lead_score (0-100 Р±Р°Р»Р»СЊРЅР°СЏ РѕС†РµРЅРєР°)

РђРЅРєРµС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ:
в”њв”Ђв”Ђ age_group (25-34/35-44/45-54/55+)
в”њв”Ђв”Ђ main_problem (back_pain/neck_pain/stress/other)
в”њв”Ђв”Ђ experience_level (beginner/intermediate/advanced)
в”њв”Ђв”Ђ preferred_time (morning/evening/weekend)
в””в”Ђв”Ђ city (РґР»СЏ РіРµРѕС‚Р°СЂРіРµС‚РёРЅРіР°)

РЎР»СѓР¶РµР±РЅС‹Рµ РїРѕР»СЏ:
в”њв”Ђв”Ђ utm_source
в”њв”Ђв”Ђ utm_medium
в”њв”Ђв”Ђ utm_campaign
в”њв”Ђв”Ђ welcome_completed (true/false)
в”њв”Ђв”Ђ survey_completed (true/false)
в””в”Ђв”Ђ last_activity_date
2. РђРґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "РџРѕРєСѓРїР°С‚РµР»Рё РљСѓСЂСЃ 1"
Р’СЃРµ РїРѕР»СЏ РёР· РіР»Р°РІРЅРѕР№ + РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ:
в”њв”Ђв”Ђ purchase_date
в”њв”Ђв”Ђ subscription_type (basic/standard/vip)
в”њв”Ђв”Ђ subscription_start
в”њв”Ђв”Ђ subscription_end
в”њв”Ђв”Ђ payment_method (monobank/fondy)
в”њв”Ђв”Ђ payment_id
в”њв”Ђв”Ђ access_token
в”њв”Ђв”Ђ course_progress (lesson_1/lesson_2/...)
в”њв”Ђв”Ђ last_lesson_date
в”њв”Ђв”Ђ completion_rate (%)
в””в”Ђв”Ђ satisfaction_score (1-10)
рџ”„ Best Practices РґР»СЏ Automation 360:
1. РЎРµРіРјРµРЅС‚Р°С†РёСЏ С‡РµСЂРµР· СѓСЃР»РѕРІРёСЏ, Р° РЅРµ РєРѕРїРёСЂРѕРІР°РЅРёРµ
Р’РјРµСЃС‚Рѕ РєРѕРїРёСЂРѕРІР°РЅРёСЏ РІ СЂР°Р·РЅС‹Рµ РєРЅРёРіРё РёСЃРїРѕР»СЊР·СѓР№С‚Рµ:
- РЈСЃР»РѕРІРёСЏ РІ Automation 360
- Р”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹
- РўРµРіРё РґР»СЏ Р±С‹СЃС‚СЂРѕР№ С„РёР»СЊС‚СЂР°С†РёРё
2. РџСЂР°РІРёР»СЊРЅС‹Р№ flow РґР»СЏ РїРѕРєСѓРїРєРё РєСѓСЂСЃР°:
Р›РёРґ РІ РіР»Р°РІРЅРѕР№ РєРЅРёРіРµ
    в†“
РџРѕРєСѓРїРєР° РєСѓСЂСЃР° (webhook)
    в†“
РћР‘РќРћР’Р›Р•РќРР• РїРѕР»РµР№ РІ С‚РѕР№ Р¶Рµ РєРЅРёРіРµ:
- is_customer = true
- course_1_purchased = true
- subscription_end = РґР°С‚Р°
    в†“
Р”РѕР±Р°РІР»РµРЅРёРµ С‚РµРіР° "customer_course_1"
    в†“
Р—Р°РїСѓСЃРє РѕС‚РґРµР»СЊРЅРѕР№ Automation РґР»СЏ РїРѕРєСѓРїР°С‚РµР»РµР№
3. РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ С‚РµРіРѕРІ РІРјРµСЃС‚Рѕ РјРЅРѕР¶РµСЃС‚РІР° РєРЅРёРі:
РўРµРіРё РґР»СЏ СЃРµРіРјРµРЅС‚Р°С†РёРё:
в”њв”Ђв”Ђ lead_cold (РЅРµ РѕС‚РєСЂС‹РІР°Р» 30 РґРЅРµР№)
в”њв”Ђв”Ђ lead_warm (Р°РєС‚РёРІРЅС‹Р№)
в”њв”Ђв”Ђ lead_hot (РіРѕС‚РѕРІ РєСѓРїРёС‚СЊ)
в”њв”Ђв”Ђ customer_course_1
в”њв”Ђв”Ђ customer_course_2
в”њв”Ђв”Ђ vip_customer
в”њв”Ђв”Ђ churned (РѕС‚РїРёСЃР°Р»СЃСЏ)
в””в”Ђв”Ђ reactivation_candidate
4. Automation 360 СЃС†РµРЅР°СЂРёРё:
1. Welcome Series (РґР»СЏ РІСЃРµС… РЅРѕРІС‹С…):
   в””в”Ђв†’ РџРѕСЃР»Рµ Р·Р°РІРµСЂС€РµРЅРёСЏ: С‚РµРі "welcome_completed"

2. Lead Nurturing (РµСЃР»Рё РЅРµ РєСѓРїРёР» РїРѕСЃР»Рµ Welcome):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: РќР• РёРјРµРµС‚ С‚РµРі "customer_*"

3. Course Delivery (РїРѕСЃР»Рµ РїРѕРєСѓРїРєРё):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: С‚РµРі "customer_course_1"
   в””в”Ђв†’ РџСЂРѕРІРµСЂРєР° subscription_end РїРµСЂРµРґ РєР°Р¶РґС‹Рј РїРёСЃСЊРјРѕРј

4. Reactivation (РґР»СЏ РёСЃС‚РµРєС€РёС… РїРѕРґРїРёСЃРѕРє):
   в””в”Ђв†’ РЈСЃР»РѕРІРёРµ: subscription_end < СЃРµРіРѕРґРЅСЏ
5. РРЅРґРµРєСЃРЅС‹Рµ РїРѕР»СЏ РґР»СЏ СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё:
javascriptРљР»СЋС‡РµРІС‹Рµ РїРѕР»СЏ РґР»СЏ С„РёР»СЊС‚СЂР°С†РёРё:
- email (primary key)
- lead_score (РґР»СЏ РїСЂРёРѕСЂРёС‚РёР·Р°С†РёРё)
- subscription_end (РґР»СЏ РїСЂРѕРІРµСЂРєРё РґРѕСЃС‚СѓРїР°)
- last_activity_date (РґР»СЏ СЂРµР°РєС‚РёРІР°С†РёРё)
- tags (РјР°СЃСЃРёРІ С‚РµРіРѕРІ)
рџ’Ў Р РµРєРѕРјРµРЅРґР°С†РёСЏ РїРѕ Р°СЂС…РёС‚РµРєС‚СѓСЂРµ:
РћРґРЅР° РіР»Р°РІРЅР°СЏ РєРЅРёРіР° + С‚РµРіРё + РґРёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ = РїСЂРѕС‰Рµ СѓРїСЂР°РІР»СЏС‚СЊ
РџСЂРµРёРјСѓС‰РµСЃС‚РІР°:
вњ… РќРµС‚ РґСѓР±Р»РёСЂРѕРІР°РЅРёСЏ РґР°РЅРЅС‹С…
вњ… РСЃС‚РѕСЂРёСЏ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёР№ РІ РѕРґРЅРѕРј РјРµСЃС‚Рµ
вњ… Р›РµРіРєРѕ СЃС‚СЂРѕРёС‚СЊ СЃР»РѕР¶РЅС‹Рµ СЃРµРіРјРµРЅС‚С‹
вњ… РџСЂРѕС‰Рµ Р°РЅР°Р»РёС‚РёРєР°
вњ… РњРµРЅСЊС€Рµ РѕС€РёР±РѕРє СЃРёРЅС…СЂРѕРЅРёР·Р°С†РёРё
рџ“Љ РџСЂРёРјРµСЂ РґРёРЅР°РјРёС‡РµСЃРєРѕРіРѕ СЃРµРіРјРµРЅС‚Р°:
"Р“РѕСЂСЏС‡РёРµ Р»РёРґС‹ РґР»СЏ РљСѓСЂСЃР° 2":
- РРјРµРµС‚ С‚РµРі: customer_course_1
- course_1_progress > 70%
- satisfaction_score >= 8
- РќР• РёРјРµРµС‚ С‚РµРі: customer_course_2
- last_activity_date < 7 РґРЅРµР№ РЅР°Р·Р°Рґ
Р­С‚Рѕ РїРѕР·РІРѕР»РёС‚ С‚РѕС‡РµС‡РЅРѕ С‚Р°СЂРіРµС‚РёСЂРѕРІР°С‚СЊ РїСЂРµРґР»РѕР¶РµРЅРёСЏ Р±РµР· СЃРѕР·РґР°РЅРёСЏ РґРµСЃСЏС‚РєРѕРІ Р°РґСЂРµСЃРЅС‹С… РєРЅРёРі!
Р§С‚Рѕ РґСѓРјР°РµС‚Рµ Рѕ С‚Р°РєРѕРј РїРѕРґС…РѕРґРµ?RetryР’РЇ РЅРµ РїРѕРЅСЏР», С‡С‚Рѕ С‚Р°РєРѕРµ РґРёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹.EditР”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ РІ SendPulse - СЌС‚Рѕ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РѕР±РЅРѕРІР»СЏРµРјС‹Рµ РіСЂСѓРїРїС‹ РєРѕРЅС‚Р°РєС‚РѕРІ РЅР° РѕСЃРЅРѕРІРµ Р·Р°РґР°РЅРЅС‹С… СѓСЃР»РѕРІРёР№.
Р Р°Р·РЅРёС†Р° РјРµР¶РґСѓ РїРѕРґС…РѕРґР°РјРё:
вќЊ РЎС‚Р°С‚РёС‡РµСЃРєРёРµ Р°РґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё (СЃС‚Р°СЂС‹Р№ СЃРїРѕСЃРѕР±):
РђРґСЂРµСЃРЅР°СЏ РєРЅРёРіР° "РљСѓРїРёР»Рё РєСѓСЂСЃ 1" - 50 С‡РµР»РѕРІРµРє
в”њв”Ђв”Ђ РРІР°РЅ (РґРѕР±Р°РІР»РµРЅ РІСЂСѓС‡РЅСѓСЋ)
в”њв”Ђв”Ђ РњР°СЂРёСЏ (РґРѕР±Р°РІР»РµРЅР° РІСЂСѓС‡РЅСѓСЋ)
в””в”Ђв”Ђ ... (РЅСѓР¶РЅРѕ РІСЂСѓС‡РЅСѓСЋ РґРѕР±Р°РІР»СЏС‚СЊ/СѓРґР°Р»СЏС‚СЊ)
вњ… Р”РёРЅР°РјРёС‡РµСЃРєРёРµ СЃРµРіРјРµРЅС‚С‹ (СЃРѕРІСЂРµРјРµРЅРЅС‹Р№ СЃРїРѕСЃРѕР±):
РЎРµРіРјРµРЅС‚ "РђРєС‚РёРІРЅС‹Рµ VIP РєР»РёРµРЅС‚С‹" (РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё):
РЈСЃР»РѕРІРёСЏ:
- subscription_type = "VIP"
- subscription_end > СЃРµРіРѕРґРЅСЏ
- last_activity < 7 РґРЅРµР№

Р РµР·СѓР»СЊС‚Р°С‚: SendPulse СЃР°Рј РЅР°С…РѕРґРёС‚ РІСЃРµС…, РєС‚Рѕ РїРѕРґС…РѕРґРёС‚
РљР°Рє СЌС‚Рѕ СЂР°Р±РѕС‚Р°РµС‚ РІ SendPulse:
1. РЎРѕР·РґР°РЅРёРµ СЃРµРіРјРµРЅС‚Р°:
РђРґСЂРµСЃРЅС‹Рµ РєРЅРёРіРё в†’ Р’С‹Р±СЂР°С‚СЊ РєРЅРёРіСѓ в†’ РЎРµРіРјРµРЅС‚С‹ в†’ РЎРѕР·РґР°С‚СЊ СЃРµРіРјРµРЅС‚

РќР°СЃС‚СЂРѕР№РєРё:
в”њв”Ђв”Ђ РќР°Р·РІР°РЅРёРµ: "Р“РѕС‚РѕРІС‹ Рє РїРѕРєСѓРїРєРµ РєСѓСЂСЃР° 2"
в”њв”Ђв”Ђ РЈСЃР»РѕРІРёСЏ:
в”‚   в”њв”Ђв”Ђ РўРµРі СЃРѕРґРµСЂР¶РёС‚ "customer_course_1"
в”‚   в”њв”Ђв”Ђ Р course_progress Р±РѕР»СЊС€Рµ 70%
в”‚   в”њв”Ђв”Ђ Р РќР• СЃРѕРґРµСЂР¶РёС‚ С‚РµРі "customer_course_2"
в”‚   в””в”Ђв”Ђ Р lead_score Р±РѕР»СЊС€Рµ 80
в””в”Ђв”Ђ РЎРѕС…СЂР°РЅРёС‚СЊ
2. РђРІС‚РѕРјР°С‚РёС‡РµСЃРєРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ:

РќРѕРІС‹Р№ С‡РµР»РѕРІРµРє РєСѓРїРёР» РєСѓСЂСЃ 1 в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РїРѕРїР°РґР°РµС‚ РІ СЃРµРіРјРµРЅС‚
РљС‚Рѕ-С‚Рѕ РїСЂРѕС€РµР» 70% РєСѓСЂСЃР° в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РґРѕР±Р°РІР»СЏРµС‚СЃСЏ
РЈ РєРѕРіРѕ-С‚Рѕ РёСЃС‚РµРєР»Р° РїРѕРґРїРёСЃРєР° в†’ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РёСЃРєР»СЋС‡Р°РµС‚СЃСЏ

3. РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РІ Automation 360:
РљР°РјРїР°РЅРёСЏ: "РџСЂРѕРґР°Р¶Р° РєСѓСЂСЃР° 2"
РџРѕР»СѓС‡Р°С‚РµР»Рё: РЎРµРіРјРµРЅС‚ "Р“РѕС‚РѕРІС‹ Рє РїРѕРєСѓРїРєРµ РєСѓСЂСЃР° 2"
Р—Р°РїСѓСЃРє: РљР°Р¶РґС‹Р№ РїРѕРЅРµРґРµР»СЊРЅРёРє РЅРѕРІС‹Рј РєРѕРЅС‚Р°РєС‚Р°Рј РІ СЃРµРіРјРµРЅС‚Рµ
РџСЂРёРјРµСЂС‹ РїРѕР»РµР·РЅС‹С… СЃРµРіРјРµРЅС‚РѕРІ РґР»СЏ РІР°СЃ:
рџ“Љ "РќРµР°РєС‚РёРІРЅС‹Рµ РїРѕРґРїРёСЃС‡РёРєРё"
РЈСЃР»РѕРІРёСЏ:
- welcome_completed = true
- last_activity_date > 30 РґРЅРµР№ РЅР°Р·Р°Рґ
- is_customer = false
рџ’° "РџРѕРґРїРёСЃРєР° РёСЃС‚РµРєР°РµС‚"
РЈСЃР»РѕРІРёСЏ:
- subscription_end РјРµР¶РґСѓ (СЃРµРіРѕРґРЅСЏ) Рё (СЃРµРіРѕРґРЅСЏ + 7 РґРЅРµР№)
- is_customer = true
рџ”Ґ "Р“РѕСЂСЏС‡РёРµ Р»РёРґС‹"
РЈСЃР»РѕРІРёСЏ:
- lead_score > 80
- РћС‚РєСЂС‹Р» РїРѕСЃР»РµРґРЅРёРµ 3 РїРёСЃСЊРјР°
- РљР»РёРєРЅСѓР» С…РѕС‚СЏ Р±С‹ 1 СЂР°Р·
- is_customer = false
рџЋЇ "РРґРµР°Р»СЊРЅР°СЏ Р°СѓРґРёС‚РѕСЂРёСЏ РґР»СЏ VIP"
РЈСЃР»РѕРІРёСЏ:
- subscription_type = "standard"
- satisfaction_score >= 9
- course_progress = 100%
- age_group = "35-44" РёР»Рё "45-54"
РџСЂРµРёРјСѓС‰РµСЃС‚РІР° РґР»СЏ РІР°С€РµРіРѕ РїСЂРѕРµРєС‚Р°:

РќРµ РЅСѓР¶РЅРѕ РІСЂСѓС‡РЅСѓСЋ РїРµСЂРµРєР»Р°РґС‹РІР°С‚СЊ Р»СЋРґРµР№ РјРµР¶РґСѓ РєРЅРёРіР°РјРё
Р’СЃРµРіРґР° Р°РєС‚СѓР°Р»СЊРЅС‹Рµ СЃРїРёСЃРєРё РґР»СЏ СЂР°СЃСЃС‹Р»РѕРє
РЎР»РѕР¶РЅР°СЏ Р»РѕРіРёРєР° Р±РµР· РїСЂРѕРіСЂР°РјРјРёСЂРѕРІР°РЅРёСЏ
РћРґРёРЅ РёСЃС‚РѕС‡РЅРёРє РґР°РЅРЅС‹С… - РіР»Р°РІРЅР°СЏ Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°

РљР°Рє РЅР°СЃС‚СЂРѕРёС‚СЊ РґР»СЏ MVP:
1. РћРґРЅР° Р°РґСЂРµСЃРЅР°СЏ РєРЅРёРіР°: "Р’СЃРµ РєРѕРЅС‚Р°РєС‚С‹ MasterMarat"

2. РЎРµРіРјРµРЅС‚С‹:
   - "РќРѕРІС‹Рµ Р»РёРґС‹" (РґР»СЏ Welcome)
   - "РџРѕРєСѓРїР°С‚РµР»Рё РєСѓСЂСЃР° 1" (РґР»СЏ РґРѕСЃС‚Р°РІРєРё СѓСЂРѕРєРѕРІ)
   - "Р—Р°РІРµСЂС€РёР»Рё РєСѓСЂСЃ 1" (РґР»СЏ РїСЂРѕРґР°Р¶Рё РєСѓСЂСЃР° 2)
   - "РќРµР°РєС‚РёРІРЅС‹Рµ" (РґР»СЏ СЂРµР°РєС‚РёРІР°С†РёРё)
   - "VIP РєР»РёРµРЅС‚С‹" (РѕСЃРѕР±РѕРµ РѕР±СЃР»СѓР¶РёРІР°РЅРёРµ)

3. Automation 360 СЂР°Р±РѕС‚Р°РµС‚ СЃ СЃРµРіРјРµРЅС‚Р°РјРё, РЅРµ СЃ РєРЅРёРіР°РјРё
РўРµРїРµСЂСЊ РїРѕРЅСЏС‚РЅРµРµ? Р­С‚Рѕ РєР°Рє "СѓРјРЅС‹Рµ РїР»РµР№Р»РёСЃС‚С‹" РІ РјСѓР·С‹РєР°Р»СЊРЅС‹С… РїСЂРёР»РѕР¶РµРЅРёСЏС… - РѕРЅРё СЃР°РјРё РѕР±РЅРѕРІР»СЏСЋС‚СЃСЏ РїРѕ РІР°С€РёРј РїСЂР°РІРёР»Р°Рј.
```

---

### `docs/Technical/content_template_guide.md` (6.14 KB)

```markdown
# Р СѓРєРѕРІРѕРґСЃС‚РІРѕ РїРѕ JSON-С€Р°Р±Р»РѕРЅСѓ РєРѕРЅС‚РµРЅС‚Р° СѓСЂРѕРєРѕРІ

Р­С‚РѕС‚ РґРѕРєСѓРјРµРЅС‚ РѕРїРёСЃС‹РІР°РµС‚ СЃС‚СЂСѓРєС‚СѓСЂСѓ JSON-С„Р°Р№Р»РѕРІ, РёСЃРїРѕР»СЊР·СѓРµРјС‹С… РґР»СЏ С…СЂР°РЅРµРЅРёСЏ РєРѕРЅС‚РµРЅС‚Р° РєР°Р¶РґРѕРіРѕ СѓСЂРѕРєР°. Р­С‚Рё С„Р°Р№Р»С‹ Р·Р°РіСЂСѓР¶Р°СЋС‚СЃСЏ РІ R2-Р±Р°РєРµС‚ `mastermarat-videos` РІ РїР°РїРєСѓ `content/{course_id}/`.

**Р’Р°Р¶РЅРѕ:** JSON-С„Р°Р№Р»С‹ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°СЋС‚ РєРѕРјРјРµРЅС‚Р°СЂРёРё. РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РёСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рѕ СЂСѓРєРѕРІРѕРґСЃС‚РІРѕ РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ СЃС‚СЂСѓРєС‚СѓСЂС‹.

---

## РџСЂРёРјРµСЂ JSON-С„Р°Р№Р»Р° РєРѕРЅС‚РµРЅС‚Р° СѓСЂРѕРєР°

```json
{
  "display_title": "РќР°Р·РІР°РЅРёРµ СѓСЂРѕРєР° РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РІ РїР»РµРµСЂРµ (РµСЃР»Рё РѕС‚Р»РёС‡Р°РµС‚СЃСЏ РѕС‚ COURSE_DATA)",
  "description_points": [
    "РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 1: Р§С‚Рѕ Р±СѓРґРµС‚ СЂР°СЃСЃРјРѕС‚СЂРµРЅРѕ РІ СЌС‚РѕРј РІРёРґРµРѕ.",
    "РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 2: РћСЃРЅРѕРІРЅС‹Рµ РєРѕРЅС†РµРїС†РёРё РёР»Рё РґРµРјРѕРЅСЃС‚СЂР°С†РёРё.",
    "РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 3: РџСЂР°РєС‚РёС‡РµСЃРєРёРµ СЃРѕРІРµС‚С‹ РёР»Рё РїСЂРёРјРµСЂС‹."
  ],
  "important_notes": [
    "Р’Р°Р¶РЅРѕРµ РїСЂРёРјРµС‡Р°РЅРёРµ 1: РРЅС„РѕСЂРјР°С†РёСЏ, РєРѕС‚РѕСЂСѓСЋ РЅСѓР¶РЅРѕ РІС‹РґРµР»РёС‚СЊ.",
    "Р’Р°Р¶РЅРѕРµ РїСЂРёРјРµС‡Р°РЅРёРµ 2: Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РёРЅСЃС‚СЂСѓРєС†РёРё РёР»Рё СЂРµРєРѕРјРµРЅРґР°С†РёРё."
  ],
  "additional_resources": [
    {
      "title": "РќР°Р·РІР°РЅРёРµ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕРіРѕ СЂРµСЃСѓСЂСЃР° (РЅР°РїСЂРёРјРµСЂ, 'PDF-РєРѕРЅСЃРїРµРєС‚')",
      "url": "https://example.com/path/to/resource.pdf"
    },
    {
      "title": "РЎСЃС‹Р»РєР° РЅР° СЃС‚Р°С‚СЊСЋ РёР»Рё РІРЅРµС€РЅРёР№ СЃР°Р№С‚",
      "url": "https://another-example.com/article"
    }
  ]
}
```

---

## РћРїРёСЃР°РЅРёРµ РїРѕР»РµР№

### `display_title` (СЃС‚СЂРѕРєР°, РѕРїС†РёРѕРЅР°Р»СЊРЅРѕ)

*   **РќР°Р·РЅР°С‡РµРЅРёРµ:** РќР°Р·РІР°РЅРёРµ СѓСЂРѕРєР°, РєРѕС‚РѕСЂРѕРµ Р±СѓРґРµС‚ РѕС‚РѕР±СЂР°Р¶Р°С‚СЊСЃСЏ РЅРµРїРѕСЃСЂРµРґСЃС‚РІРµРЅРЅРѕ РІ HTML-РїР»РµРµСЂРµ. РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рѕ РїРѕР»Рµ, РµСЃР»Рё РЅР°Р·РІР°РЅРёРµ СѓСЂРѕРєР°, СѓРєР°Р·Р°РЅРЅРѕРµ РІ `COURSE_DATA` (РІ `src/worker.js`), РЅРµ РїРѕРґС…РѕРґРёС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЋ РёР»Рё РІС‹ С…РѕС‚РёС‚Рµ РµРіРѕ СѓС‚РѕС‡РЅРёС‚СЊ.
*   **РџСЂРёРјРµСЂ:** `"РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё: Р”РµС‚Р°Р»СЊРЅС‹Р№ СЂР°Р·Р±РѕСЂ"`
*   **Р•СЃР»Рё РѕС‚СЃСѓС‚СЃС‚РІСѓРµС‚:** Р‘СѓРґРµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ РЅР°Р·РІР°РЅРёРµ СѓСЂРѕРєР° РёР· `COURSE_DATA`.

### `description_points` (РјР°СЃСЃРёРІ СЃС‚СЂРѕРє, РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ)

*   **РќР°Р·РЅР°С‡РµРЅРёРµ:** РЎРїРёСЃРѕРє РєР»СЋС‡РµРІС‹С… РјРѕРјРµРЅС‚РѕРІ, С‚РµРј РёР»Рё РІРѕРїСЂРѕСЃРѕРІ, РєРѕС‚РѕСЂС‹Рµ Р±СѓРґСѓС‚ СЂР°СЃСЃРјРѕС‚СЂРµРЅС‹ РІ РґР°РЅРЅРѕРј РІРёРґРµРѕСѓСЂРѕРєРµ. РљР°Р¶РґС‹Р№ СЌР»РµРјРµРЅС‚ РјР°СЃСЃРёРІР° Р±СѓРґРµС‚ РѕС‚РѕР±СЂР°Р¶РµРЅ РєР°Рє РѕС‚РґРµР»СЊРЅС‹Р№ РїСѓРЅРєС‚ СЃРїРёСЃРєР° РІ СЂР°Р·РґРµР»Рµ "Р’ СЌС‚РѕРј РІРёРґРµРѕ:".
*   **РџСЂРёРјРµСЂ:**
    ```json
    [
      "РџРѕРЅРёРјР°РЅРёРµ Р°РЅР°С‚РѕРјРёРё РїРѕР·РІРѕРЅРѕС‡РЅРёРєР°",
      "РўРµС…РЅРёРєРё РІС‹СЂР°РІРЅРёРІР°РЅРёСЏ РѕСЃР°РЅРєРё",
      "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ СѓРєСЂРµРїР»РµРЅРёСЏ РєРѕСЂР°",
      "Р§Р°СЃС‚С‹Рµ РѕС€РёР±РєРё Рё РёС… РёСЃРїСЂР°РІР»РµРЅРёРµ"
    ]
    ```

### `important_notes` (РјР°СЃСЃРёРІ СЃС‚СЂРѕРє, РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ)

*   **РќР°Р·РЅР°С‡РµРЅРёРµ:** Р’Р°Р¶РЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ, РґРѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ, СЂРµРєРѕРјРµРЅРґР°С†РёРё РёР»Рё РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РЅРµРѕР±С…РѕРґРёРјРѕ РІС‹РґРµР»РёС‚СЊ. РљР°Р¶РґС‹Р№ СЌР»РµРјРµРЅС‚ РјР°СЃСЃРёРІР° Р±СѓРґРµС‚ РѕС‚РѕР±СЂР°Р¶РµРЅ РєР°Рє РѕС‚РґРµР»СЊРЅС‹Р№ Р°Р±Р·Р°С† РёР»Рё РїСѓРЅРєС‚ РІ СЂР°Р·РґРµР»Рµ "Р’Р°Р¶РЅРѕРµ".
*   **РџСЂРёРјРµСЂ:**
    ```json
    [
      "**Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ:** Р’С‹РїРѕР»РЅСЏР№С‚Рµ РєРѕРјРїР»РµРєСЃ СѓРїСЂР°Р¶РЅРµРЅРёР№ РµР¶РµРґРЅРµРІРЅРѕ РІ С‚РµС‡РµРЅРёРµ 15 РјРёРЅСѓС‚.",
      "**Р’РЅРёРјР°РЅРёРµ:** РџСЂРё РІРѕР·РЅРёРєРЅРѕРІРµРЅРёРё Р±РѕР»Рё РЅРµРјРµРґР»РµРЅРЅРѕ РїСЂРµРєСЂР°С‚РёС‚Рµ РІС‹РїРѕР»РЅРµРЅРёРµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ Рё РїСЂРѕРєРѕРЅСЃСѓР»СЊС‚РёСЂСѓР№С‚РµСЃСЊ СЃРѕ СЃРїРµС†РёР°Р»РёСЃС‚РѕРј.",
      "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹ РґРѕСЃС‚СѓРїРЅС‹ РїРѕ СЃСЃС‹Р»РєРµ РЅРёР¶Рµ."
    ]
    ```

### `additional_resources` (РјР°СЃСЃРёРІ РѕР±СЉРµРєС‚РѕРІ, РѕРїС†РёРѕРЅР°Р»СЊРЅРѕ)

*   **РќР°Р·РЅР°С‡РµРЅРёРµ:** РЎРїРёСЃРѕРє СЃСЃС‹Р»РѕРє РЅР° РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹, СЃРІСЏР·Р°РЅРЅС‹Рµ СЃ СѓСЂРѕРєРѕРј (РЅР°РїСЂРёРјРµСЂ, PDF-РєРѕРЅСЃРїРµРєС‚С‹, СЃСЃС‹Р»РєРё РЅР° СЃС‚Р°С‚СЊРё, РІРЅРµС€РЅРёРµ СЂРµСЃСѓСЂСЃС‹).
*   **РЎС‚СЂСѓРєС‚СѓСЂР° РєР°Р¶РґРѕРіРѕ РѕР±СЉРµРєС‚Р°:**
    *   `title` (СЃС‚СЂРѕРєР°, РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ): РќР°Р·РІР°РЅРёРµ РёР»Рё РѕРїРёСЃР°РЅРёРµ СЂРµСЃСѓСЂСЃР°, РєРѕС‚РѕСЂРѕРµ Р±СѓРґРµС‚ РѕС‚РѕР±СЂР°Р¶Р°С‚СЊСЃСЏ РєР°Рє С‚РµРєСЃС‚ СЃСЃС‹Р»РєРё.
    *   `url` (СЃС‚СЂРѕРєР°, РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ): РџРѕР»РЅС‹Р№ URL-Р°РґСЂРµСЃ СЂРµСЃСѓСЂСЃР°.
*   **РџСЂРёРјРµСЂ:**
    ```json
    [
      {
        "title": "РљРѕРЅСЃРїРµРєС‚ СѓСЂРѕРєР° 'РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё'",
        "url": "https://mastermarat.com/docs/posture_lesson_summary.pdf"
      },
      {
        "title": "РЎС‚Р°С‚СЊСЏ: 'Р’Р»РёСЏРЅРёРµ РѕСЃР°РЅРєРё РЅР° РѕР±С‰РµРµ Р·РґРѕСЂРѕРІСЊРµ'",
        "url": "https://example.com/articles/posture-health"
      }
    ]
    ```
*   **Р•СЃР»Рё РѕС‚СЃСѓС‚СЃС‚РІСѓРµС‚:** Р Р°Р·РґРµР» СЃ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹РјРё СЂРµСЃСѓСЂСЃР°РјРё РЅРµ Р±СѓРґРµС‚ РѕС‚РѕР±СЂР°Р¶Р°С‚СЊСЃСЏ.

---

**РљР°Рє РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ:**

1.  РћС‚РєСЂРѕР№С‚Рµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёР№ JSON-С„Р°Р№Р» РґР»СЏ СѓСЂРѕРєР° РІ РїР°РїРєРµ `temp_upload/content/{course_id}/`.
2.  Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»СЏ `display_title`, `description_points`, `important_notes` Рё `additional_resources` Р°РєС‚СѓР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРµР№ РґР»СЏ РІР°С€РµРіРѕ СѓСЂРѕРєР°.
3.  РЎРѕС…СЂР°РЅРёС‚Рµ С„Р°Р№Р».
4.  Р—Р°РїСѓСЃС‚РёС‚Рµ СЃРєСЂРёРїС‚ Р·Р°РіСЂСѓР·РєРё РєРѕРЅС‚РµРЅС‚Р° РІ R2, Р° Р·Р°С‚РµРј СЂР°Р·РІРµСЂРЅРёС‚Рµ РІРѕСЂРєРµСЂ, С‡С‚РѕР±С‹ РёР·РјРµРЅРµРЅРёСЏ РІСЃС‚СѓРїРёР»Рё РІ СЃРёР»Сѓ.

Р­С‚Рѕ СЂСѓРєРѕРІРѕРґСЃС‚РІРѕ РїРѕРјРѕР¶РµС‚ РІР°Рј РїСЂР°РІРёР»СЊРЅРѕ СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°С‚СЊ РєРѕРЅС‚РµРЅС‚ РґР»СЏ РєР°Р¶РґРѕРіРѕ СѓСЂРѕРєР°.
```

---

### `docs/Technical/ffmpeg.md` (0.91 KB)

```markdown
ffmpeg -i Рћ_РІР°Р¶РЅРѕСЃС‚Рё_РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРіРѕ_РїРѕРґС…РѕРґР°.mp4 -c:v h264 -crf 28 -c:a copy week1_lesson1.mp4
ffmpeg -i РЎРІСЏР·СЊ_СЃРѕ_СЃРїРѕСЂС‚РѕРј_РјРµРґРёС†РёРЅРѕР№_Рё_РёРЅР¶РµРЅРµСЂРёРµР№.mp4 -c:v h264 -crf 28 -c:a copy week1_lesson2.mp4


РўР°РјР±РЅРµР№Р»С‹
# РџРѕРїСЂРѕР±РѕРІР°С‚СЊ СЂР°Р·РЅС‹Рµ РјРѕРјРµРЅС‚С‹ (3, 7, 10 СЃРµРєСѓРЅРґ)
ffmpeg -i week1_lesson1.mp4 -ss 00:00:03 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_3s.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:07 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_7s.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:10 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_10s.jpg
```

---

### `docs/Technical/r2_content_and_deployment.md` (2.49 KB)

```markdown
# РРЅСЃС‚СЂСѓРєС†РёРё РїРѕ СЃС‚СЂСѓРєС‚СѓСЂРµ РєРѕРЅС‚РµРЅС‚Р° R2 Рё РґРµРїР»РѕСЋ

РџРѕСЃР»Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ Р»РѕРіРёРєРё РІРѕСЂРєРµСЂР° РґР»СЏ РїРѕРґРґРµСЂР¶РєРё РЅРµСЃРєРѕР»СЊРєРёС… РєСѓСЂСЃРѕРІ Рё СѓСЂРѕРєРѕРІ, РЅРµРѕР±С…РѕРґРёРјРѕ РІС‹РїРѕР»РЅРёС‚СЊ СЃР»РµРґСѓСЋС‰РёРµ С€Р°РіРё:

## 1. Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ Рё РјРёРЅРёР°С‚СЋСЂ РІ R2

Р’РёРґРµРѕ Рё РјРёРЅРёР°С‚СЋСЂС‹ С‚РµРїРµСЂСЊ РґРѕР»Р¶РЅС‹ Р±С‹С‚СЊ Р·Р°РіСЂСѓР¶РµРЅС‹ РІ R2 Р±Р°РєРµС‚ `mastermarat-videos` РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРѕР№ РїР°РїРѕРє:

- **Р”Р»СЏ РІРёРґРµРѕ:** `videos/{course_id}/{video_file_name}`
- **Р”Р»СЏ РјРёРЅРёР°С‚СЋСЂ:** `thumbnails/{course_id}/{thumbnail_file_name}`

**РџСЂРёРјРµСЂС‹:**
- `videos/course1/course1_week1_lesson1.mp4`
- `thumbnails/course1/course1_week1_lesson1.jpg`

РЈР±РµРґРёС‚РµСЃСЊ, С‡С‚Рѕ `course_id` СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂР°Рј РєСѓСЂСЃРѕРІ, РѕРїСЂРµРґРµР»РµРЅРЅС‹Рј РІ `COURSE_DATA` РІ `src/worker.js`.

## 2. Р Р°Р·РІРµСЂС‚С‹РІР°РЅРёРµ РІРѕСЂРєРµСЂР° РІ dev-РѕРєСЂСѓР¶РµРЅРёРµ

РџРѕСЃР»Рµ Р·Р°РіСЂСѓР·РєРё С„Р°Р№Р»РѕРІ Рё Р»СЋР±С‹С… РґР°Р»СЊРЅРµР№С€РёС… РёР·РјРµРЅРµРЅРёР№ РІ РєРѕРґРµ РІРѕСЂРєРµСЂР°, СЂР°Р·РІРµСЂРЅРёС‚Рµ РµРіРѕ РІ dev-РѕРєСЂСѓР¶РµРЅРёРµ, РёСЃРїРѕР»СЊР·СѓСЏ СЃР»РµРґСѓСЋС‰СѓСЋ РєРѕРјР°РЅРґСѓ РІ С‚РµСЂРјРёРЅР°Р»Рµ (РёР· РґРёСЂРµРєС‚РѕСЂРёРё `mastermarat-project/workers/api`):

```bash
cd C:/Projects/mastermaratcom/mastermarat-project/workers/api
npm run deploy --env dev
```

## 3. РўРµСЃС‚РёСЂРѕРІР°РЅРёРµ РЅРѕРІС‹С… СЃСЃС‹Р»РѕРє

РџРѕСЃР»Рµ СѓСЃРїРµС€РЅРѕРіРѕ СЂР°Р·РІРµСЂС‚С‹РІР°РЅРёСЏ РІС‹ РјРѕР¶РµС‚Рµ РїСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РґРѕСЃС‚СѓРї Рє РІРёРґРµРѕ Рё РїР»РµРµСЂСѓ, РёСЃРїРѕР»СЊР·СѓСЏ РЅРѕРІС‹Рµ С„РѕСЂРјР°С‚С‹ URL:

- **РџР»РµРµСЂ:** `https://api-dev.mastermarat.com/player/{course_id}/{lesson_id}?token=demo123`
  *РџСЂРёРјРµСЂ:* `https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123`

- **РњРёРЅРёР°С‚СЋСЂР°:** `https://api-dev.mastermarat.com/thumbnails/{course_id}/{thumbnail_file_name}`
  *РџСЂРёРјРµСЂ:* `https://api-dev.mastermarat.com/thumbnails/course1/week1_lesson1.jpg`

- **Р’РёРґРµРѕ:** `https://api-dev.mastermarat.com/video/{course_id}/{video_file_name}?token=demo123`
  *РџСЂРёРјРµСЂ:* `https://api-dev.mastermarat.com/video/course1/week1_lesson1.mp4?token=demo123`

**РџСЂРёРјРµС‡Р°РЅРёРµ:** `demo123` - СЌС‚Рѕ РІСЂРµРјРµРЅРЅС‹Р№ С‚РѕРєРµРЅ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ. Р’ СЂРµР°Р»СЊРЅРѕР№ СЃРёСЃС‚РµРјРµ С‚РѕРєРµРЅС‹ Р±СѓРґСѓС‚ РіРµРЅРµСЂРёСЂРѕРІР°С‚СЊСЃСЏ РїРѕСЃР»Рµ РїРѕРєСѓРїРєРё РєСѓСЂСЃР°.
```

---

### `docs/Technical/r2-wrangler-manual.md` (1.72 KB)

```markdown
# рџ“ РњРёРЅРё-РјР°РЅСѓР°Р»: Р Р°Р±РѕС‚Р° СЃ Cloudflare R2 С‡РµСЂРµР· `wrangler`

## рџ”§ РџРѕРґРіРѕС‚РѕРІРєР°

1. РџСЂРѕРІРµСЂРєР° СѓСЃС‚Р°РЅРѕРІР»РµРЅРЅРѕРіРѕ `wrangler`:
   ```bash
   wrangler --version
   ```

2. РђРІС‚РѕСЂРёР·Р°С†РёСЏ:
   ```bash
   wrangler login
   ```

3. РЈР±РµРґРёСЃСЊ, С‡С‚Рѕ СЃРѕР·РґР°РЅ R2 bucket (РЅР°РїСЂРёРјРµСЂ: `mastermarat-videos`) РІ Cloudflare Dashboard.

---

## рџ“‚ РџСЂРѕСЃРјРѕС‚СЂ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ R2-Р±Р°РєРµС‚Р°

```bash
wrangler r2 object list mastermarat-videos
```

Р¤РёР»СЊС‚СЂР°С†РёСЏ РїРѕ "РїР°РїРєРµ" (РїСЂРµС„РёРєСЃСѓ):
```bash
wrangler r2 object list mastermarat-videos --prefix="videos/course1/"
```

---

## рџ“¤ Р—Р°РіСЂСѓР·РєР° С„Р°Р№Р»Р°

```bash
wrangler r2 object put mastermarat-videos/videos/course1/lesson1.mp4 --file="lesson1.mp4"
```

- РџСЂРµС„РёРєСЃС‹ (`videos/course1/`) РІС‹СЃС‚СѓРїР°СЋС‚ РєР°Рє "РґРёСЂРµРєС‚РѕСЂРёРё"
- РЎРѕР·РґР°РЅРёРµ "РїР°РїРѕРє" РїСЂРѕРёСЃС…РѕРґРёС‚ Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РїСЂРё Р·Р°Р»РёРІРєРµ

---

## рџ§№ РЈРґР°Р»РµРЅРёРµ С„Р°Р№Р»Р°

```bash
wrangler r2 object delete mastermarat-videos/videos/course1/lesson1.mp4
```

---

## рџ“¦ Р—Р°РіСЂСѓР·РєР° РІСЃРµС… С„Р°Р№Р»РѕРІ РёР· РїР°РїРєРё (PowerShell)

```powershell
Get-ChildItem "videos/course1" | ForEach-Object {
  wrangler r2 object put mastermarat-videos/videos/course1/$($_.Name) --file=$_.FullName
}
```

---

## рџ§  РџРѕР»РµР·РЅРѕ Р·РЅР°С‚СЊ

- R2 вЂ” СЌС‚Рѕ РѕР±СЉРµРєС‚РЅРѕРµ С…СЂР°РЅРёР»РёС‰Рµ: "РґРёСЂРµРєС‚РѕСЂРёРё" вЂ” СЌС‚Рѕ РїСЂРѕСЃС‚Рѕ РєР»СЋС‡Рё СЃ РїСЂРµС„РёРєСЃР°РјРё.
- РџРѕРІС‚РѕСЂРЅС‹Р№ `put` РїРµСЂРµР·Р°РїРёСЃС‹РІР°РµС‚ С„Р°Р№Р».
- РњРѕР¶РЅРѕ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ `--prefix` РґР»СЏ Р»РѕРіРёС‡РµСЃРєРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹, РєР°Рє РІ РѕР±С‹С‡РЅРѕР№ С„Р°Р№Р»РѕРІРѕР№ СЃРёСЃС‚РµРјРµ.
```

---

### `docs/Technical/thumbnail-generation-guide.md` (5.34 KB)

```markdown
# Р СѓРєРѕРІРѕРґСЃС‚РІРѕ РїРѕ РіРµРЅРµСЂР°С†РёРё Thumbnail РґР»СЏ MasterMarat

## рџ“‹ РћР±С‰РёРµ С‚СЂРµР±РѕРІР°РЅРёСЏ
- **Р Р°Р·РјРµСЂ**: 1280x720 (16:9)
- **Р¤РѕСЂРјР°С‚**: JPEG
- **РљР°С‡РµСЃС‚РІРѕ**: -q:v 2 (РІС‹СЃРѕРєРѕРµ)
- **Р¦РµР»РµРІРѕР№ СЂР°Р·РјРµСЂ**: 100-300 KB

## рџЋ¬ РЁР°Р±Р»РѕРЅС‹ РєРѕРјР°РЅРґ

### 1пёЏвѓЈ Р”Р»СЏ Р’Р•Р РўРРљРђР›Р¬РќР«РҐ РІРёРґРµРѕ (9:16)
РЎРѕР·РґР°РµРј РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅС‹Рµ thumbnail СЃ СЂР°Р·РјС‹С‚С‹Рј С„РѕРЅРѕРј:

```bash
# Р’Р°СЂРёР°РЅС‚ РЅР° 5 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:05 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_5s.jpg

# Р’Р°СЂРёР°РЅС‚ РЅР° 10 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:10 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_10s.jpg

# Р’Р°СЂРёР°РЅС‚ РЅР° 15 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:15 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_15s.jpg
```

### 2пёЏвѓЈ Р”Р»СЏ Р“РћР РР—РћРќРўРђР›Р¬РќР«РҐ РІРёРґРµРѕ (16:9)
РџСЂРѕСЃС‚РѕРµ РјР°СЃС€С‚Р°Р±РёСЂРѕРІР°РЅРёРµ:

```bash
# Р’Р°СЂРёР°РЅС‚ РЅР° 5 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:05 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_5s.jpg

# Р’Р°СЂРёР°РЅС‚ РЅР° 10 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:10 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_10s.jpg

# Р’Р°СЂРёР°РЅС‚ РЅР° 15 СЃРµРєСѓРЅРґРµ
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:15 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_15s.jpg
```

## рџ“ќ РџСЂРёРјРµСЂС‹ РґР»СЏ РєРѕРЅРєСЂРµС‚РЅС‹С… С„Р°Р№Р»РѕРІ

### week1_lesson1.mp4 (РІРµСЂС‚РёРєР°Р»СЊРЅРѕРµ РІРёРґРµРѕ)
```bash
# Р“РµРЅРµСЂРёСЂСѓРµРј 3 РІР°СЂРёР°РЅС‚Р°
ffmpeg -i week1_lesson1.mp4 -ss 00:00:05 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v1.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:10 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v2.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:15 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v3.jpg
```

### week1_lesson2.mp4 (РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРµ РІРёРґРµРѕ)
```bash
# Р“РµРЅРµСЂРёСЂСѓРµРј 3 РІР°СЂРёР°РЅС‚Р°
ffmpeg -i week1_lesson2.mp4 -ss 00:00:05 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v1.jpg

ffmpeg -i week1_lesson2.mp4 -ss 00:00:10 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v2.jpg

ffmpeg -i week1_lesson2.mp4 -ss 00:00:15 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v3.jpg
```

## рџ”§ Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїР°СЂР°РјРµС‚СЂС‹

### РР·РјРµРЅРµРЅРёРµ СЃС‚РµРїРµРЅРё СЂР°Р·РјС‹С‚РёСЏ
```bash
# РњРµРЅСЊС€Рµ СЂР°Р·РјС‹С‚РёСЏ (10:10)
-vf "split[a][b];[a]scale=1280:720,boxblur=10:10[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2"

# Р‘РѕР»СЊС€Рµ СЂР°Р·РјС‹С‚РёСЏ (30:30)
-vf "split[a][b];[a]scale=1280:720,boxblur=30:30[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2"
```

### Р”РѕР±Р°РІР»РµРЅРёРµ СЂРµР·РєРѕСЃС‚Рё
```bash
# РЎ С„РёР»СЊС‚СЂРѕРј СЂРµР·РєРѕСЃС‚Рё РґР»СЏ С‡РµС‚РєРѕСЃС‚Рё
-vf "scale=1280:720,unsharp=5:5:1.0:5:5:0.0"
```

### РР·РјРµРЅРµРЅРёРµ РєР°С‡РµСЃС‚РІР°
```bash
# Р’С‹СЃРѕРєРѕРµ РєР°С‡РµСЃС‚РІРѕ (Р±РѕР»СЊС€Рµ СЂР°Р·РјРµСЂ)
-q:v 1

# РЎСЂРµРґРЅРµРµ РєР°С‡РµСЃС‚РІРѕ (РјРµРЅСЊС€Рµ СЂР°Р·РјРµСЂ)
-q:v 5
```

## вњ… РљСЂРёС‚РµСЂРёРё РІС‹Р±РѕСЂР° Р»СѓС‡С€РµРіРѕ thumbnail
1. **РњР°СЂР°С‚ С…РѕСЂРѕС€Рѕ РІРёРґРµРЅ** - Р»РёС†Рѕ РЅРµ РѕР±СЂРµР·Р°РЅРѕ, РІС‹СЂР°Р¶РµРЅРёРµ РїСЂРёСЏС‚РЅРѕРµ
2. **РќРµС‚ СЂР°Р·РјС‹С‚РёСЏ РѕС‚ РґРІРёР¶РµРЅРёСЏ** - РєР°РґСЂ С‡РµС‚РєРёР№
3. **РҐРѕСЂРѕС€Р°СЏ РєРѕРјРїРѕР·РёС†РёСЏ** - СЃР±Р°Р»Р°РЅСЃРёСЂРѕРІР°РЅРЅРѕРµ РёР·РѕР±СЂР°Р¶РµРЅРёРµ
4. **РРЅС„РѕСЂРјР°С‚РёРІРЅРѕСЃС‚СЊ** - РїРѕРЅСЏС‚РЅРѕ, С‡С‚Рѕ СЌС‚Рѕ РѕР±СѓС‡Р°СЋС‰РµРµ РІРёРґРµРѕ

## рџљЂ Р‘С‹СЃС‚СЂС‹Р№ СЃС‚Р°СЂС‚ (PowerShell)
```powershell
# РЎРѕР·РґР°РµРј РїР°РїРєСѓ РґР»СЏ thumbnail
New-Item -ItemType Directory -Force -Path "thumbnails"

# Р“РµРЅРµСЂРёСЂСѓРµРј РІСЃРµ РІР°СЂРёР°РЅС‚С‹ РѕРґРЅРѕР№ РєРѕРјР°РЅРґРѕР№
@(5,10,15) | ForEach-Object {
    # Р”Р»СЏ РІРµСЂС‚РёРєР°Р»СЊРЅРѕРіРѕ РІРёРґРµРѕ
    ffmpeg -i week1_lesson1.mp4 -ss "00:00:$_" -vframes 1 `
      -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" `
      -q:v 2 "thumbnails/week1_lesson1_$($_)s.jpg"
    
    # Р”Р»СЏ РіРѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРіРѕ РІРёРґРµРѕ
    ffmpeg -i week1_lesson2.mp4 -ss "00:00:$_" -vframes 1 `
      -vf "scale=1280:720" `
      -q:v 2 "thumbnails/week1_lesson2_$($_)s.jpg"
}
```

## рџ“Ѓ РС‚РѕРіРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° С„Р°Р№Р»РѕРІ
```
thumbnails/
в”њв”Ђв”Ђ week1_lesson1.jpg    (РІС‹Р±СЂР°РЅРЅС‹Р№ Р»СѓС‡С€РёР№ РІР°СЂРёР°РЅС‚)
в”њв”Ђв”Ђ week1_lesson1_5s.jpg
в”њв”Ђв”Ђ week1_lesson1_10s.jpg
в”њв”Ђв”Ђ week1_lesson1_15s.jpg
в”њв”Ђв”Ђ week1_lesson2.jpg    (РІС‹Р±СЂР°РЅРЅС‹Р№ Р»СѓС‡С€РёР№ РІР°СЂРёР°РЅС‚)
в”њв”Ђв”Ђ week1_lesson2_5s.jpg
в”њв”Ђв”Ђ week1_lesson2_10s.jpg
в””в”Ђв”Ђ week1_lesson2_15s.jpg
```

РџРѕСЃР»Рµ РіРµРЅРµСЂР°С†РёРё РІС‹Р±РµСЂРёС‚Рµ Р»СѓС‡С€РёРµ РІР°СЂРёР°РЅС‚С‹ Рё РїРµСЂРµРёРјРµРЅСѓР№С‚Рµ РёС… РІ `week1_lesson1.jpg` Рё `week1_lesson2.jpg` РґР»СЏ Р·Р°РіСЂСѓР·РєРё РІ R2.
```

---

### `docs/Technical/Модули.md` (8.36 KB)

```markdown
# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РЎРѕР·РґР°РµРј СЃС‚СЂСѓРєС‚СѓСЂСѓ РїР°РїРѕРє
New-Item -ItemType Directory -Path "src\config" -Force
New-Item -ItemType Directory -Path "src\handlers" -Force
New-Item -ItemType Directory -Path "src\services" -Force
New-Item -ItemType Directory -Path "src\templates" -Force
New-Item -ItemType Directory -Path "src\utils" -Force

Write-Host "вњ… РЎС‚СЂСѓРєС‚СѓСЂР° РїР°РїРѕРє СЃРѕР·РґР°РЅР°!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј Р±Р°Р·РѕРІС‹Рµ С„Р°Р№Р»С‹ РјРѕРґСѓР»РµР№
@"
// config/courses.js
const COURSE_DATA = {
  "course1": {
    title: "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ",
    lessons: {
      "week1_lesson1": {
        title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°",
        video_file: "week1_lesson1.mp4",
        thumbnail_file: "week1_lesson1.jpg"
      },
      "week1_lesson2": {
        title: "РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё",
        video_file: "week1_lesson2.mp4",
        thumbnail_file: "week1_lesson2.jpg"
      },
      "week2_lesson1": {
        title: "Р Р°Р±РѕС‚Р° СЃ РїРѕР·РІРѕРЅРѕС‡РЅРёРєРѕРј",
        video_file: "week2_lesson1.mp4",
        thumbnail_file: "week2_lesson1.jpg"
      },
      "week2_lesson2": {
        title: "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё",
        video_file: "week2_lesson2.mp4",
        thumbnail_file: "week2_lesson2.jpg"
      },
      "week3_lesson1": {
        title: "РўРµС…РЅРёРєРё СЃР°РјРѕРјР°СЃСЃР°Р¶Р°",
        video_file: "week3_lesson1.mp4",
        thumbnail_file: "week3_lesson1.jpg"
      },
      "week3_lesson2": {
        title: "РЎРЅСЏС‚РёРµ РјС‹С€РµС‡РЅС‹С… Р±Р»РѕРєРѕРІ",
        video_file: "week3_lesson2.mp4",
        thumbnail_file: "week3_lesson2.jpg"
      },
      "week4_lesson1": {
        title: "РРЅС‚РµРіСЂР°С†РёСЏ РґРІРёР¶РµРЅРёР№",
        video_file: "week4_lesson1.mp4",
        thumbnail_file: "week4_lesson1.jpg"
      },
      "week4_lesson2": {
        title: "Р•Р¶РµРґРЅРµРІРЅР°СЏ РїСЂР°РєС‚РёРєР°",
        video_file: "week4_lesson2.mp4",
        thumbnail_file: "week4_lesson2.jpg"
      }
    }
  }
};

export { COURSE_DATA };
"@ | Out-File -FilePath "src\config\courses.js" -Encoding UTF8

@"
// config/constants.js
export const API_VERSION = '1.0.0';
export const SUPPORTED_VIDEO_FORMATS = ['mp4', 'webm'];
export const SUPPORTED_IMAGE_FORMATS = ['jpg', 'jpeg', 'png', 'webp'];

export const ENDPOINTS = {
  API_DOC: '/',
  PLAYER_LEARNING: '/player',
  PLAYER_ARCHIVE: '/archive', 
  THUMBNAILS: '/thumbnails',
  VIDEO: '/video',
  WEBHOOK: '/webhook/purchase'
};

export const ERROR_MESSAGES = {
  TOKEN_REQUIRED: 'Token required',
  TOKEN_INVALID: 'Invalid token',
  VIDEO_NOT_FOUND: 'Video not found',
  COURSE_NOT_FOUND: 'Course not found',
  LESSON_NOT_FOUND: 'Lesson not found'
};
"@ | Out-File -FilePath "src\config\constants.js" -Encoding UTF8

@"
// utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Range',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
};

export function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function createCorsResponse(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      ...init.headers
    }
  });
}
"@ | Out-File -FilePath "src\utils\cors.js" -Encoding UTF8

@"
// utils/errors.js
import { createCorsResponse } from './cors.js';

export function createErrorResponse(error, status = 500, extra = {}) {
  return createCorsResponse(
    JSON.stringify({
      status: 'error',
      error: error,
      timestamp: new Date().toISOString(),
      ...extra
    }),
    {
      status,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(
    `${resource} not found`,
    404,
    { resource }
  );
}

export function createUnauthorizedResponse(message = 'Unauthorized') {
  return createErrorResponse(message, 401);
}

export function createBadRequestResponse(message = 'Bad Request') {
  return createErrorResponse(message, 400);
}
"@ | Out-File -FilePath "src\utils\errors.js" -Encoding UTF8

@"
// utils/token.js
export function generateSimpleToken(email, courseId = null) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp.substring(-8)}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕСЃС‚Р°СЏ РІР°Р»РёРґР°С†РёСЏ С„РѕСЂРјР°С‚Р° С‚РѕРєРµРЅР°
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // РР·РІР»РµРєР°РµРј РёРЅС„РѕСЂРјР°С†РёСЋ РёР· С‚РѕРєРµРЅР°
  const parts = token.split('_');
  return {
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}
"@ | Out-File -FilePath "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… Р‘Р°Р·РѕРІС‹Рµ РјРѕРґСѓР»Рё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј РЅРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ worker.js
@"
// worker.js - С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// РРјРїРѕСЂС‚РёСЂСѓРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Р РѕСѓС‚РёРЅРі Р·Р°РїСЂРѕСЃРѕРІ
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 РґР»СЏ РЅРµРёР·РІРµСЃС‚РЅС‹С… РјР°СЂС€СЂСѓС‚РѕРІ
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};
"@ | Out-File -FilePath "src\worker-new.js" -Encoding UTF8

Write-Host "вњ… РќРѕРІС‹Р№ РјРѕРґСѓР»СЊРЅС‹Р№ worker.js СЃРѕР·РґР°РЅ РєР°Рє worker-new.js!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџ“‹ РЎР»РµРґСѓСЋС‰РёРµ С€Р°РіРё:" -ForegroundColor Cyan
Write-Host "1. РЎРѕР·РґР°С‚СЊ РѕР±СЂР°Р±РѕС‚С‡РёРєРё РІ handlers/" -ForegroundColor Yellow
Write-Host "2. РЎРѕР·РґР°С‚СЊ СЃРµСЂРІРёСЃС‹ РІ services/" -ForegroundColor Yellow  
Write-Host "3. РЎРѕР·РґР°С‚СЊ С€Р°Р±Р»РѕРЅС‹ РІ templates/" -ForegroundColor Yellow
Write-Host "4. РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ Рё Р·Р°РјРµРЅРёС‚СЊ worker.js" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Р“РѕС‚РѕРІРѕ Рє СЃРѕР·РґР°РЅРёСЋ РѕР±СЂР°Р±РѕС‚С‡РёРєРѕРІ!" -ForegroundColor Green
```

---

### `docs/Technical/Обработчики.md` (16.84 KB)

```markdown
# РЈР±РµР¶РґР°РµРјСЃСЏ С‡С‚Рѕ РЅР°С…РѕРґРёРјСЃСЏ РІ РїСЂР°РІРёР»СЊРЅРѕР№ РґРёСЂРµРєС‚РѕСЂРёРё
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РЎРѕР·РґР°РµРј handlers/api.js - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
@"
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р­С‚Р° СЃС‚СЂР°РЅРёС†Р° - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /player/{courseId}/{lessonId}?token=Y': 'HTML РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (РёР· email)',
        'GET /archive/{courseId}?token=Y': 'HTML РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№ (РїРѕСЃР»Рµ РєСѓСЂСЃР°)',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2',
        'GET /video/{courseId}/{filename}?token=xxx': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming',
        'POST /webhook/purchase': 'Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ'
      },
      test_links: {
        player_learning: `{url.origin}/player/course1/week1_lesson1?token=demo123`,
        player_archive: `{url.origin}/archive/course1?token=demo123`,
        thumbnail: `{url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `{url.origin}/video/course1/week1_lesson1.mp4?token=demo123`
      },
      course_structure: COURSE_DATA,
      timestamp: new Date().toISOString()
    }),
    {
      headers: { 'Content-Type': 'application/json' }
    }
  );
}
"@ | Out-File -FilePath "src\handlers\api.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/thumbnails.js - РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ
@"
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

  // РќР°С…РѕРґРёРј СѓСЂРѕРє РїРѕ РёРјРµРЅРё С„Р°Р№Р»Р° thumbnail
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
    const object = await env.R2.get(`thumbnails/{courseId}/{lessonData.thumbnail_file}`);

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
"@ | Out-File -FilePath "src\handlers\thumbnails.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/video.js - Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ streaming
@"
// handlers/video.js
import { createCorsResponse } from '../utils/cors.js';
import { createNotFoundResponse, createUnauthorizedResponse, createBadRequestResponse } from '../utils/errors.js';
import { validateTokenFormat } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/');
  
  if (pathParts.length < 4) {
    return createBadRequestResponse('Invalid video path format');
  }
  
  const courseId = pathParts[2];
  const videoFile = pathParts[3];
  const token = url.searchParams.get('token');

  if (!token) {
    return createUnauthorizedResponse('Token required');
  }

  if (!validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid token format');
  }

  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }

  // РќР°С…РѕРґРёРј СѓСЂРѕРє РїРѕ РёРјРµРЅРё РІРёРґРµРѕ С„Р°Р№Р»Р°
  let lessonData = null;
  for (const key in course.lessons) {
    if (course.lessons[key].video_file === videoFile) {
      lessonData = course.lessons[key];
      break;
    }
  }

  if (!lessonData) {
    return createNotFoundResponse('Video');
  }

  // TODO: Р”РѕР±Р°РІРёС‚СЊ РїСЂРѕРІРµСЂРєСѓ РґРѕСЃС‚СѓРїР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ Рє РєСѓСЂСЃСѓ С‡РµСЂРµР· SendPulse API

  try {
    // РџРѕР»СѓС‡Р°РµРј РјРµС‚Р°РґР°РЅРЅС‹Рµ С„Р°Р№Р»Р°
    const videoPath = `videos/{courseId}/{lessonData.video_file}`;
    const object = await env.R2.head(videoPath);
    
    if (!object) {
      return createNotFoundResponse('Video in R2');
    }

    const fileSize = object.size;
    const range = request.headers.get('range');

    // HTTP Range requests РґР»СЏ streaming
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunkSize = end - start + 1;

      const rangedObject = await env.R2.get(videoPath, {
        range: {
          offset: start,
          length: chunkSize
        }
      });

      if (!rangedObject) {
        return new Response('Range Not Satisfiable', { status: 416 });
      }

      return createCorsResponse(rangedObject.body, {
        status: 206,
        headers: {
          'Content-Type': 'video/mp4',
          'Content-Length': chunkSize.toString(),
          'Content-Range': `bytes {start}-{end}/{fileSize}`,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'no-cache'
        }
      });
    }

    // РџРѕР»РЅРѕРµ РІРёРґРµРѕ Р±РµР· range
    const fullObject = await env.R2.get(videoPath);
    return createCorsResponse(fullObject.body, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': fileSize.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'ETag': object.httpEtag
      }
    });

  } catch (error) {
    console.error('Video access error:', error);
    return createNotFoundResponse('Video');
  }
}
"@ | Out-File -FilePath "src\handlers\video.js" -Encoding UTF8

# РЎРѕР·РґР°РµРј handlers/webhooks.js - SendPulse integration
@"
// handlers/webhooks.js
import { createCorsResponse } from '../utils/cors.js';
import { createBadRequestResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

export async function handleWebhooks(request, env, ctx) {
  try {
    const webhook = await request.json();

    // Р“РµРЅРµСЂРёСЂСѓРµРј С‚РѕРєРµРЅ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
    const userToken = generateSimpleToken(
      webhook.email || 'test@example.com',
      webhook.course_id || 'course1'
    );

    // TODO: РћР±РЅРѕРІРёС‚СЊ РєРѕРЅС‚Р°РєС‚ РІ SendPulse С‡РµСЂРµР· API
    // await updateSendPulseContact(webhook.email, {
    //   access_token: userToken,
    //   purchase_date: new Date().toISOString(),
    //   subscription_type: webhook.subscription_type
    // });

    return createCorsResponse(
      JSON.stringify({
        status: 'success',
        message: 'Webhook processed successfully',
        user_token: userToken,
        received_data: webhook,
        note: 'Token will be sent in first course email'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook processing error:', error);
    return createBadRequestResponse('Invalid webhook data');
  }
}
"@ | Out-File -FilePath "src\handlers\webhooks.js" -Encoding UTF8

Write-Host "вњ… РћСЃРЅРѕРІРЅС‹Рµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј Р·Р°РіР»СѓС€РєРё РґР»СЏ РїР»РµРµСЂРѕРІ (РїРѕРєР° РїСЂРѕСЃС‚С‹Рµ)
@"
// handlers/player-learning.js - РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ (РёР· email)
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

  // TODO: Р—Р°РіСЂСѓР·РёС‚СЊ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Р№ РєРѕРЅС‚РµРЅС‚ РёР· R2
  let contentData = {
    display_title: null,
    description_points: ["РџСЂР°РєС‚РёС‡РµСЃРєРёРµ С‚РµС…РЅРёРєРё РѕСЃС‚РµРѕРїР°С‚РёРё", "Р‘РµР·РѕРїР°СЃРЅРѕРµ РІС‹РїРѕР»РЅРµРЅРёРµ СѓРїСЂР°Р¶РЅРµРЅРёР№", "Р РµРєРѕРјРµРЅРґР°С†РёРё РїРѕ С‡Р°СЃС‚РѕС‚Рµ РїСЂРёРјРµРЅРµРЅРёСЏ"],
    important_notes: ["Р’С‹РїРѕР»РЅСЏР№С‚Рµ С‚РµС…РЅРёРєСѓ РјРµРґР»РµРЅРЅРѕ Рё Р°РєРєСѓСЂР°С‚РЅРѕ", "РџСЂРё РґРёСЃРєРѕРјС„РѕСЂС‚Рµ РЅРµРјРµРґР»РµРЅРЅРѕ РїСЂРµРєСЂР°С‚РёС‚Рµ СѓРїСЂР°Р¶РЅРµРЅРёРµ"],
    additional_resources: []
  };

  // РџСЂРѕСЃС‚РѕР№ HTML РїР»РµРµСЂ (РїРѕР·Р¶Рµ РїРµСЂРµРЅРµСЃРµРј РІ templates/)
  const playerHTML = `<!DOCTYPE html>
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
        <h1>рџЋЇ {lessonData.title}</h1>
        <p>РљСѓСЂСЃ: {course.title} вЂў Р РµР¶РёРј: РћР±СѓС‡РµРЅРёРµ</p>
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
            <h3>Р’ СЌС‚РѕРј СѓСЂРѕРєРµ:</h3>
            <ul>
                {contentData.description_points.map(point => `<li>{point}</li>`).join('')}
            </ul>
            
            {contentData.important_notes.length > 0 ? `
            <div style="background: #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>вљ пёЏ Р’Р°Р¶РЅРѕ:</h3>
                {contentData.important_notes.map(note => `<p>{note}</p>`).join('')}
            </div>
            ` : ''}
        </div>
    </div>

    <script>
        console.log('Learning mode player loaded for: {courseId}/{lessonId}');
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
"@ | Out-File -FilePath "src\handlers\player-learning.js" -Encoding UTF8

@"
// handlers/player-archive.js - РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№ (РїРѕСЃР»Рµ РєСѓСЂСЃР°)
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

  // TODO: РџСЂРѕРІРµСЂРёС‚СЊ С‡С‚Рѕ Сѓ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ РµСЃС‚СЊ РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ (Р·Р°РІРµСЂС€РёР» РєСѓСЂСЃ)

  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
  const lessonsList = Object.entries(course.lessons).map(([lessonId, lesson]) => {
    return `
      <div class="lesson-item">
        <a href="/video/{courseId}/{lesson.video_file}?token={token}" target="_blank">
          <img src="/thumbnails/{courseId}/{lesson.thumbnail_file}" alt="{lesson.title}" style="width: 120px; height: 68px; object-fit: cover;">
          <span>{lesson.title}</span>
        </a>
      </div>
    `;
  }).join('');

  const archiveHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MasterMarat - РђСЂС…РёРІ РєСѓСЂСЃР° {course.title}</title>
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
        <h1>рџ“љ РђСЂС…РёРІ РєСѓСЂСЃР°: {course.title}</h1>
        <p>РџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРј СѓСЂРѕРєР°Рј РєСѓСЂСЃР°</p>
    </div>
    
    <div class="container">
        <h2>Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° ({Object.keys(course.lessons).length} СѓСЂРѕРєРѕРІ)</h2>
        <div class="lessons-grid">
            {lessonsList}
        </div>
    </div>

    <script>
        console.log('Archive mode player loaded for course: {courseId}');
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
"@ | Out-File -FilePath "src\handlers\player-archive.js" -Encoding UTF8

Write-Host "вњ… Р’СЃРµ РѕР±СЂР°Р±РѕС‚С‡РёРєРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "рџ“‹ РЎРѕР·РґР°РЅРЅС‹Рµ С„Р°Р№Р»С‹:" -ForegroundColor Cyan
Write-Host "вЂў handlers/api.js - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API" -ForegroundColor Yellow
Write-Host "вЂў handlers/thumbnails.js - РїСѓР±Р»РёС‡РЅС‹Рµ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ" -ForegroundColor Yellow
Write-Host "вЂў handlers/video.js - Р·Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ streaming" -ForegroundColor Yellow
Write-Host "вЂў handlers/player-learning.js - РїР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ" -ForegroundColor Yellow
Write-Host "вЂў handlers/player-archive.js - РїР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№" -ForegroundColor Yellow
Write-Host "вЂў handlers/webhooks.js - SendPulse integration" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "рџЋЇ Р“РѕС‚РѕРІРѕ! РўРµРїРµСЂСЊ РјРѕР¶РЅРѕ СЃРѕР·РґР°С‚СЊ СЃРµСЂРІРёСЃС‹ Рё С€Р°Р±Р»РѕРЅС‹." -ForegroundColor Green
```

---

### `GITHUB_RAW_LINKS.md` (5.26 KB)

```markdown
# GitHub RAW Links - mastermarat-project

> Direct links to project files on GitHub

**Repository**: https://github.com/shivalino/mastermarat-project
**Branch**: main
**Generated**: 2025-07-03 21:30

## API Core

- [worker-new.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/worker-new.js)

## Configuration

- [courses.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/config/courses.js)
- [constants.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/config/constants.js)

## Documentation

- [r2_content_and_deployment.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/r2_content_and_deployment.md)
- [r2-wrangler-manual.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/r2-wrangler-manual.md)
- [ffmpeg.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/ffmpeg.md)
- [Обработчики.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/Обработчики.md)
- [Модули.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/Модули.md)
- [thumbnail-generation-guide.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/thumbnail-generation-guide.md)
- [content_template_guide.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/content_template_guide.md)
- [DEPLOYMENT.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Development/DEPLOYMENT.md)
- [ARCHITECTURE.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Development/ARCHITECTURE.md)
- [API_REFERENCE.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Development/API_REFERENCE.md)
- [address_books_sendpulse.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Technical/address_books_sendpulse.md)
- [vscode_git_guide.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Manuals/vscode_git_guide.md)
- [DEVELOPMENT_STATUS.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/docs/Development/DEVELOPMENT_STATUS.md)

## Handlers

- [thumbnails.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/thumbnails.js)
- [video.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/video.js)
- [webhooks.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/webhooks.js)
- [test.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/test.js)
- [api.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/api.js)
- [player-archive.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/player-archive.js)
- [player-learning.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/handlers/player-learning.js)

## Project Config

- [README.md](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/README.md)
- [.gitignore](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/.gitignore)
- [package.json](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/package.json)

## Scripts

- [generate-raw-links.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/generate-raw-links.ps1)
- [lesson-converter.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/lesson-converter.ps1)
- [simple-lesson-converter.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/simple-lesson-converter.ps1)
- [export-project-structure.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/export-project-structure.ps1)
- [export-structure.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/export-structure.ps1)
- [export-working-files.ps1](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/scripts/export-working-files.ps1)

## Services

- [sendpulse.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/services/sendpulse.js)
- [content.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/services/content.js)
- [auth.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/services/auth.js)

## Utils

- [token.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/utils/token.js)
- [errors.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/utils/errors.js)
- [cors.js](https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/utils/cors.js)

## Usage Examples

```powershell
# Download file
$url = "https://raw.githubusercontent.com/shivalino/mastermarat-project/main/workers/api/src/worker-new.js"
Invoke-WebRequest -Uri $url -OutFile "worker-new.js"

# View content
Invoke-RestMethod -Uri $url
```

```

---

### `README.md` (9.3 KB)

```markdown
# MasterMarat.com - EdTech Platform

> Email-РєСѓСЂСЃС‹ РѕСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРёС… РїСЂР°РєС‚РёРє РґР»СЏ СЃР°РјРѕРїРѕРјРѕС‰Рё РѕС‚ РњР°СЂР°С‚Р° РњР°Р»РёРµРІР°

[![Status](https://img.shields.io/badge/Status-Development-yellow)](https://github.com/Shivalino/mastermarat-project)
[![API](https://img.shields.io/badge/API-Cloudflare_Workers-orange)](https://api.mastermarat.com)
[![Architecture](https://img.shields.io/badge/Architecture-Modular-green)](./ARCHITECTURE.md)

---

## рџЋЇ Рћ РїСЂРѕРµРєС‚Рµ

**MasterMarat.com** - РїР»Р°С‚С„РѕСЂРјР° email-РєСѓСЂСЃРѕРІ РїСЂР°РєС‚РёС‡РµСЃРєРёС… С‚РµС…РЅРёРє РґР»СЏ Р·РґРѕСЂРѕРІСЊСЏ РѕС‚ РѕСЃС‚РµРѕРїР°С‚Р° СЃ 20-Р»РµС‚РЅРёРј РѕРїС‹С‚РѕРј РњР°СЂР°С‚Р° РњР°Р»РёРµРІР°. РџСЂРѕРµРєС‚ СЃРїРµС†РёР°Р»РёР·РёСЂСѓРµС‚СЃСЏ РЅР° РѕР±СѓС‡РµРЅРёРё РїСЂРѕСЃС‚С‹Рј С‚РµС…РЅРёРєР°Рј РѕР·РґРѕСЂРѕРІР»РµРЅРёСЏ Рё СЃР°РјРѕРїРѕРјРѕС‰Рё С‡РµСЂРµР· СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅС‹Рµ email-СЂР°СЃСЃС‹Р»РєРё СЃ РІРёРґРµРѕ-СѓСЂРѕРєР°РјРё.

### РљР»СЋС‡РµРІС‹Рµ РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё
- рџ“§ **Email-РїРµСЂРІС‹Р№ РїРѕРґС…РѕРґ** - РѕР±СѓС‡РµРЅРёРµ С‡РµСЂРµР· РµР¶РµРЅРµРґРµР»СЊРЅС‹Рµ СЂР°СЃСЃС‹Р»РєРё SendPulse
- рџЋҐ **Р’РёРґРµРѕ-РєРѕРЅС‚РµРЅС‚** - РІРµСЂС‚РёРєР°Р»СЊРЅС‹Рµ РІРёРґРµРѕ 9:16 РґР»СЏ РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІ
- рџ”ђ **Р—Р°С‰РёС‰РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї** - С‚РѕРєРµРЅРёР·РёСЂРѕРІР°РЅРЅР°СЏ СЃРёСЃС‚РµРјР° СЃ СЂР°Р·РЅС‹РјРё СѓСЂРѕРІРЅСЏРјРё
- рџЊЌ **РњРЅРѕРіРѕСЏР·С‹С‡РЅРѕСЃС‚СЊ** - RU/UA/EN РІРµСЂСЃРёРё (С‡РµСЂРµР· AI-РїРµСЂРµРІРѕРґС‹ HeyGen)
- рџ’° **РџРѕРґРїРёСЃРѕС‡РЅР°СЏ РјРѕРґРµР»СЊ** - 3 С‚Р°СЂРёС„Р° СЃ СЂР°Р·РЅС‹Рј СѓСЂРѕРІРЅРµРј РїРѕРґРґРµСЂР¶РєРё

---

## рџљЂ Р‘С‹СЃС‚СЂС‹Р№ СЃС‚Р°СЂС‚

### РўСЂРµР±РѕРІР°РЅРёСЏ
- Node.js 18+
- Wrangler CLI 3.0+
- Р”РѕСЃС‚СѓРї Рє Cloudflare Р°РєРєР°СѓРЅС‚Сѓ
- R2 bucket `mastermarat-videos`

### РЈСЃС‚Р°РЅРѕРІРєР° Рё Р·Р°РїСѓСЃРє

```bash
# РљР»РѕРЅРёСЂРѕРІР°РЅРёРµ СЂРµРїРѕР·РёС‚РѕСЂРёСЏ
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# РЈСЃС‚Р°РЅРѕРІРєР° Р·Р°РІРёСЃРёРјРѕСЃС‚РµР№
npm install

# Р›РѕРєР°Р»СЊРЅР°СЏ СЂР°Р·СЂР°Р±РѕС‚РєР°
npm run dev                    # http://localhost:8787

# Р”РµРїР»РѕР№ РІ РѕРєСЂСѓР¶РµРЅРёСЏ
npm run deploy:dev            # api-dev.mastermarat.com
npm run deploy                # api.mastermarat.com

рџЏ—пёЏ РђСЂС…РёС‚РµРєС‚СѓСЂР° РїСЂРѕРµРєС‚Р°
РўРµРєСѓС‰РёР№ СЃС‚Р°С‚СѓСЃ: РњРћР”РЈР›Р¬РќРђРЇ РђР РҐРРўР•РљРўРЈР Рђ вњ…
РџРѕСЃР»Рµ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР° РѕС‚ 01.07.2025:

вњ… Р Р°Р·Р±РёР»Рё РјРѕРЅРѕР»РёС‚РЅС‹Р№ worker.js (500+ СЃС‚СЂРѕРє) РЅР° РјРѕРґСѓР»Рё
вњ… РЎРѕР·РґР°Р»Рё С‡РёСЃС‚СѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ handlers/utils/services
вњ… Р РµР°Р»РёР·РѕРІР°Р»Рё РґРІР° С‚РёРїР° РІРёРґРµРѕРїР»РµРµСЂР°
вњ… Р”РѕР±Р°РІРёР»Рё СЃРёСЃС‚РµРјСѓ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ

workers/api/src/
в”њв”Ђв”Ђ worker-new.js              # Р“Р»Р°РІРЅС‹Р№ СЂРѕСѓС‚РµСЂ (30 СЃС‚СЂРѕРє)
в”њв”Ђв”Ђ config/
в”‚   в”њв”Ђв”Ђ courses.js            # РЎС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃРѕРІ Рё СѓСЂРѕРєРѕРІ
в”‚   в””в”Ђв”Ђ constants.js          # РўРѕРєРµРЅС‹ Рё РєРѕРЅСЃС‚Р°РЅС‚С‹
в”њв”Ђв”Ђ handlers/                  # HTTP РѕР±СЂР°Р±РѕС‚С‡РёРєРё
в”‚   в”њв”Ђв”Ђ api.js               # GET / - РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ
в”‚   в”њв”Ђв”Ђ test.js              # GET /test - С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ С‚РѕРєРµРЅРѕРІ
в”‚   в”њв”Ђв”Ђ thumbnails.js        # GET /thumbnails/* - РїСЂРµРІСЊСЋ
в”‚   в”њв”Ђв”Ђ video.js             # GET /video/* - РІРёРґРµРѕ СЃС‚СЂРёРјРёРЅРі
в”‚   в”њв”Ђв”Ђ player-learning.js   # GET /player/* - СЂРµР¶РёРј РѕР±СѓС‡РµРЅРёСЏ
в”‚   в”њв”Ђв”Ђ player-archive.js    # GET /archive/* - СЂРµР¶РёРј Р°СЂС…РёРІР°
в”‚   в””в”Ђв”Ђ webhooks.js          # POST /webhook/* - SendPulse
в”њв”Ђв”Ђ services/                  # Р‘РёР·РЅРµСЃ-Р»РѕРіРёРєР°
в”‚   в”њв”Ђв”Ђ auth.js              # РџСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ
в”‚   в”њв”Ђв”Ђ sendpulse.js         # API SendPulse
в”‚   в””в”Ђв”Ђ content.js           # Р Р°Р±РѕС‚Р° СЃ R2
в””в”Ђв”Ђ utils/                     # Р’СЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Рµ С„СѓРЅРєС†РёРё
    в”њв”Ђв”Ђ cors.js              # CORS Р·Р°РіРѕР»РѕРІРєРё
    в”њв”Ђв”Ђ errors.js            # РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
    в””в”Ђв”Ђ token.js             # Р“РµРЅРµСЂР°С†РёСЏ С‚РѕРєРµРЅРѕРІ
РџРѕРґСЂРѕР±РЅРµРµ СЃРј. ARCHITECTURE.md

рџ”ђ РЎРёСЃС‚РµРјР° Р°РІС‚РѕСЂРёР·Р°С†РёРё
РўРµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹ РґР»СЏ СЂР°Р·СЂР°Р±РѕС‚РєРё
РўРѕРєРµРЅРўРёРїРћРїРёСЃР°РЅРёРµР”РѕСЃС‚СѓРїsuperuser_mastermarat_2025SuperUserРџРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРїР’СЃРµ С„СѓРЅРєС†РёРё + Р°РґРјРёРЅРєР°vip_test_token_2025VIPVIP РїРѕРґРїРёСЃРєР°Р’СЃРµ РєСѓСЂСЃС‹ + РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРёstandard_test_token_2025StandardРЎС‚Р°РЅРґР°СЂС‚РЅР°СЏ РїРѕРґРїРёСЃРєР°РљСѓСЂСЃ + Р°СЂС…РёРІbasic_test_token_2025BasicР‘Р°Р·РѕРІР°СЏ РїРѕРґРїРёСЃРєР°РўРѕР»СЊРєРѕ РїР»РµРµСЂdemo123DemoР”РµРјРѕ РґРѕСЃС‚СѓРїРћРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ РїСЂРѕСЃРјРѕС‚СЂ
РџСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ
РћС‚РєСЂРѕР№С‚Рµ http://localhost:8787/test РґР»СЏ РёРЅС‚РµСЂР°РєС‚РёРІРЅРѕР№ РїСЂРѕРІРµСЂРєРё РІСЃРµС… С‚РѕРєРµРЅРѕРІ.

рџ“Ў API Endpoints
РћСЃРЅРѕРІРЅС‹Рµ РјР°СЂС€СЂСѓС‚С‹
РњРµС‚РѕРґEndpointРћРїРёСЃР°РЅРёРµРўСЂРµР±СѓРµС‚ С‚РѕРєРµРЅGET/Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ APIвќЊGET/testРўРµСЃС‚РёСЂРѕРІР°РЅРёРµ С‚РѕРєРµРЅРѕРІвќЊGET/player/{courseId}/{lessonId}РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏвњ…GET/archive/{courseId}РђСЂС…РёРІ РІСЃРµС… СѓСЂРѕРєРѕРІвњ…GET/thumbnails/{courseId}/{file}РџСЂРµРІСЊСЋ РІРёРґРµРѕвќЊGET/video/{courseId}/{file}Р—Р°С‰РёС‰РµРЅРЅРѕРµ РІРёРґРµРѕвњ…POST/webhook/purchaseWebhook РѕС‚ SendPulseрџ”‘
РџСЂРёРјРµСЂС‹ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ
bash# Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API
curl https://api-dev.mastermarat.com/

# РџР»РµРµСЂ СЃ SuperUser С‚РѕРєРµРЅРѕРј
curl "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=superuser_mastermarat_2025"

# РђСЂС…РёРІ РєСѓСЂСЃР°
curl "https://api-dev.mastermarat.com/archive/course1?token=vip_test_token_2025"

# Р—Р°С‰РёС‰РµРЅРЅРѕРµ РІРёРґРµРѕ
curl "https://api-dev.mastermarat.com/video/course1/test_video.mp4?token=standard_test_token_2025"
РџРѕР»РЅР°СЏ РґРѕРєСѓРјРµРЅС‚Р°С†РёСЏ API: API_REFERENCE.md

рџ’ј Р‘РёР·РЅРµСЃ-РјРѕРґРµР»СЊ
РўР°СЂРёС„РЅС‹Рµ РїР»Р°РЅС‹ (РїРѕРґРїРёСЃРєР° РЅР° 3 РјРµСЃСЏС†Р°)
РџР»Р°РЅР¦РµРЅР°/РјРµСЃРћСЃРѕР±РµРЅРЅРѕСЃС‚РёР‘Р°Р·РѕРІС‹Р№$30Email-РєСѓСЂСЃ СЃ РІРёРґРµРѕ СѓСЂРѕРєР°РјРёРЎС‚Р°РЅРґР°СЂС‚РЅС‹Р№ в­ђ$50+ РџРµСЂСЃРѕРЅР°Р»СЊРЅР°СЏ РїРѕРґРґРµСЂР¶РєР° РІ С‡Р°С‚РµVIP$150+ РљРѕРЅСЃСѓР»СЊС‚Р°С†РёРё СЃ РњР°СЂР°С‚РѕРј (1 СЂР°Р·/РјРµСЃ)
РЎС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"

8 СѓСЂРѕРєРѕРІ (4 РЅРµРґРµР»Рё РїРѕ 2 СѓСЂРѕРєР°)
Р”Р»РёС‚РµР»СЊРЅРѕСЃС‚СЊ СѓСЂРѕРєР°: 15-30 РјРёРЅСѓС‚
Р¤РѕСЂРјР°С‚: Р’РµСЂС‚РёРєР°Р»СЊРЅРѕРµ РІРёРґРµРѕ 9:16
Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ: РўРµРєСЃС‚РѕРІС‹Рµ РјР°С‚РµСЂРёР°Р»С‹ РїРѕРґ РєР°Р¶РґС‹Рј РІРёРґРµРѕ


рџ‘Ґ РљРѕРјР°РЅРґР°
Р РѕР»СЊРЈС‡Р°СЃС‚РЅРёРєРћС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚СЊР”РѕР»СЏCEOРњР°СЂР°С‚Р­РєСЃРїРµСЂС‚-РѕСЃС‚РµРѕРїР°С‚, РєРѕРЅС‚РµРЅС‚, VIP-РєРѕРЅСЃСѓР»СЊС‚Р°С†РёРё35%PM & ContentРђРјРёСЂР°РЈРїСЂР°РІР»РµРЅРёРµ РїСЂРѕРµРєС‚РѕРј, РїРѕРґРґРµСЂР¶РєР° РєР»РёРµРЅС‚РѕРІ35%CTOР’СЏС‡РµСЃР»Р°РІРўРµС…РЅРёС‡РµСЃРєР°СЏ СЂРµР°Р»РёР·Р°С†РёСЏ, DevOps, Р¤РћРџ30%

рџ› пёЏ Р Р°Р·СЂР°Р±РѕС‚РєР°
РџРѕР»РµР·РЅС‹Рµ РєРѕРјР°РЅРґС‹
bash# Р›РёРЅС‚РёРЅРі РєРѕРґР°
npm run lint

# Р¤РѕСЂРјР°С‚РёСЂРѕРІР°РЅРёРµ
npm run format

# Р›РѕРіРё Cloudflare
wrangler tail

# РџСЂРѕРІРµСЂРєР° R2 bucket
wrangler r2 object list mastermarat-videos
РџРµСЂРµРјРµРЅРЅС‹Рµ РѕРєСЂСѓР¶РµРЅРёСЏ
РЎРѕР·РґР°Р№С‚Рµ .dev.vars РґР»СЏ Р»РѕРєР°Р»СЊРЅРѕР№ СЂР°Р·СЂР°Р±РѕС‚РєРё:
envSENDPULSE_ID=your_id_here
SENDPULSE_SECRET=your_secret_here
ENVIRONMENT=development
РћС‚Р»Р°РґРєР°

РћС‚РєСЂРѕР№С‚Рµ http://localhost:8787/test РґР»СЏ РїСЂРѕРІРµСЂРєРё С‚РѕРєРµРЅРѕРІ
РСЃРїРѕР»СЊР·СѓР№С‚Рµ wrangler tail РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР° Р»РѕРіРѕРІ
Chrome DevTools РґРѕСЃС‚СѓРїРЅС‹ С‡РµСЂРµР· [d] РІ РєРѕРЅСЃРѕР»Рё wrangler


рџ“Љ РўРµРєСѓС‰РёР№ РїСЂРѕРіСЂРµСЃСЃ
вњ… Р—Р°РІРµСЂС€РµРЅРѕ (РСЋР»СЊ 2025)

 РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° API
 Р”РІР° С‚РёРїР° РІРёРґРµРѕРїР»РµРµСЂР° (learning/archive)
 РЎРёСЃС‚РµРјР° С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ
 РРЅС‚РµРіСЂР°С†РёСЏ СЃ R2 Storage
 HTTP Range requests РґР»СЏ РІРёРґРµРѕ
 РђРґР°РїС‚РёРІРЅС‹Р№ РґРёР·Р°Р№РЅ РїР»РµРµСЂРѕРІ

рџ”„ Р’ РїСЂРѕС†РµСЃСЃРµ

 SendPulse API РёРЅС‚РµРіСЂР°С†РёСЏ
 Р—Р°РіСЂСѓР·РєР° СЂРµР°Р»СЊРЅРѕРіРѕ РєРѕРЅС‚РµРЅС‚Р°
 Email Р°РІС‚РѕРјР°С‚РёР·Р°С†РёРё
 РџР»Р°С‚РµР¶РЅР°СЏ РёРЅС‚РµРіСЂР°С†РёСЏ Fondy

рџ“… РџР»Р°РЅРёСЂСѓРµС‚СЃСЏ

 РЈРєСЂР°РёРЅСЃРєР°СЏ РІРµСЂСЃРёСЏ (ua.mastermarat.com)
 РђРЅРіР»РёР№СЃРєР°СЏ РІРµСЂСЃРёСЏ (en.mastermarat.com)
 РњРѕР±РёР»СЊРЅРѕРµ РїСЂРёР»РѕР¶РµРЅРёРµ
 Р Р°СЃС€РёСЂРµРЅРЅР°СЏ Р°РЅР°Р»РёС‚РёРєР°

Р”РµС‚Р°Р»СЊРЅС‹Р№ СЃС‚Р°С‚СѓСЃ: DEVELOPMENT_STATUS.md

рџљЂ Р”РµРїР»РѕР№
РРЅСЃС‚СЂСѓРєС†РёРё РїРѕ СЂР°Р·РІРµСЂС‚С‹РІР°РЅРёСЋ: DEPLOYMENT.md
Р‘С‹СЃС‚СЂС‹Р№ РґРµРїР»РѕР№
bash# РџСЂРѕРІРµСЂРєР° РєРѕРЅС„РёРіСѓСЂР°С†РёРё
npm run check

# Р”РµРїР»РѕР№ РЅР° dev
npm run deploy:dev

# Р”РµРїР»РѕР№ РЅР° production (С‚СЂРµР±СѓРµС‚ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ)
npm run deploy

рџ“ћ РљРѕРЅС‚Р°РєС‚С‹ Рё РїРѕРґРґРµСЂР¶РєР°

GitHub Issues: РЎРѕР·РґР°С‚СЊ issue
РўРµС…РЅРёС‡РµСЃРєР°СЏ РїРѕРґРґРµСЂР¶РєР°: Р’СЏС‡РµСЃР»Р°РІ (CTO)
Р’РѕРїСЂРѕСЃС‹ РїРѕ РєРѕРЅС‚РµРЅС‚Сѓ: РђРјРёСЂР° (PM)
Email: support@mastermarat.com


рџ“„ Р›РёС†РµРЅР·РёСЏ
Proprietary - Р’СЃРµ РїСЂР°РІР° Р·Р°С‰РёС‰РµРЅС‹ В© 2025 MasterMarat

РџРѕСЃР»РµРґРЅРµРµ РѕР±РЅРѕРІР»РµРЅРёРµ: 01.07.2025 - РњРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР°

```

---

### `src_01_07_2025.md` (63.26 KB)

```markdown
//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\config\constants.js

// config/constants.js
export const API_VERSION = '1.0.0';

// РўРѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
export const TEST_TOKENS = {
  // SuperUser - РїРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
  SUPER_USER: 'superuser_mastermarat_2025',
  
  // РўРѕРєРµРЅС‹ РїРѕ С‚РёРїР°Рј РїРѕРґРїРёСЃРєРё
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',
  
  // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ С‚РѕРєРµРЅС‹
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// РџСЂР°РІР° РґРѕСЃС‚СѓРїР° РїРѕ С‚РёРїР°Рј С‚РѕРєРµРЅРѕРІ
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: ['course1', 'course2', 'course3'],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course1'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\config\courses.js
// config/courses.js
export const COURSE_DATA = {
  "course1": {
    title: "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ",
    lessons: {
      "week1_lesson1": {
        title: "Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°",
        video_file: "week1_lesson1.mp4",
        thumbnail_file: "week1_lesson1.jpg",
        content_points: [
          "Р§С‚Рѕ С‚Р°РєРѕРµ Р±РёРѕРјРµС…Р°РЅРёРєР° Рё РїРѕС‡РµРјСѓ РѕРЅР° РІР°Р¶РЅР° РґР»СЏ Р·РґРѕСЂРѕРІСЊСЏ",
          "РћСЃРЅРѕРІРЅС‹Рµ РїСЂРёРЅС†РёРїС‹ СЂР°Р±РѕС‚С‹ РѕРїРѕСЂРЅРѕ-РґРІРёРіР°С‚РµР»СЊРЅРѕРіРѕ Р°РїРїР°СЂР°С‚Р°",
          "РљР°Рє РЅРµРїСЂР°РІРёР»СЊРЅС‹Рµ РґРІРёР¶РµРЅРёСЏ РІР»РёСЏСЋС‚ РЅР° РЅР°С€Рµ СЃР°РјРѕС‡СѓРІСЃС‚РІРёРµ"
        ],
        important_notes: "Р­С‚Рѕ РІРІРѕРґРЅРѕРµ Р·Р°РЅСЏС‚РёРµ РЅРµ С‚СЂРµР±СѓРµС‚ СЃРїРµС†РёР°Р»СЊРЅРѕР№ РїРѕРґРіРѕС‚РѕРІРєРё. Р РµРєРѕРјРµРЅРґСѓРµРј РїСЂРѕСЃРјРѕС‚СЂРµС‚СЊ РІРёРґРµРѕ РїРѕР»РЅРѕСЃС‚СЊСЋ РїРµСЂРµРґ РЅР°С‡Р°Р»РѕРј РїСЂР°РєС‚РёС‡РµСЃРєРёС… СѓРїСЂР°Р¶РЅРµРЅРёР№.",
        additional_info: "РџРѕСЃР»Рµ РїСЂРѕСЃРјРѕС‚СЂР° СЌС‚РѕРіРѕ СѓСЂРѕРєР° РІС‹ Р±СѓРґРµС‚Рµ Р»СѓС‡С€Рµ РїРѕРЅРёРјР°С‚СЊ, РєР°Рє СЂР°Р±РѕС‚Р°РµС‚ РІР°С€Рµ С‚РµР»Рѕ Рё РїРѕС‡РµРјСѓ РІР°Р¶РЅРѕ СЃР»РµРґРёС‚СЊ Р·Р° РїСЂР°РІРёР»СЊРЅРѕСЃС‚СЊСЋ РґРІРёР¶РµРЅРёР№ РІ РїРѕРІСЃРµРґРЅРµРІРЅРѕР№ Р¶РёР·РЅРё."
      },
      "week1_lesson2": {
        title: "РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё",
        video_file: "week1_lesson2.mp4",
        thumbnail_file: "week1_lesson2.jpg",
        content_points: [
          "РђРЅР°С‚РѕРјРёСЏ РїРѕР·РІРѕРЅРѕС‡РЅРёРєР° Рё РµРіРѕ РµСЃС‚РµСЃС‚РІРµРЅРЅС‹Рµ РёР·РіРёР±С‹",
          "РџСЂРёР·РЅР°РєРё РїСЂР°РІРёР»СЊРЅРѕР№ Рё РЅРµРїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё",
          "РџСЂРѕСЃС‚С‹Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ СѓР»СѓС‡С€РµРЅРёСЏ РѕСЃР°РЅРєРё"
        ],
        important_notes: "Р’С‹РїРѕР»РЅСЏР№С‚Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РїРµСЂРµРґ Р·РµСЂРєР°Р»РѕРј РґР»СЏ РєРѕРЅС‚СЂРѕР»СЏ РїСЂР°РІРёР»СЊРЅРѕСЃС‚Рё РїРѕР»РѕР¶РµРЅРёСЏ С‚РµР»Р°. РџСЂРё Р±РѕР»СЏС… РІ СЃРїРёРЅРµ РїСЂРѕРєРѕРЅСЃСѓР»СЊС‚РёСЂСѓР№С‚РµСЃСЊ СЃ РІСЂР°С‡РѕРј.",
        additional_info: "РџСЂР°РІРёР»СЊРЅР°СЏ РѕСЃР°РЅРєР° - РѕСЃРЅРѕРІР° Р·РґРѕСЂРѕРІСЊСЏ РІСЃРµРіРѕ РѕСЂРіР°РЅРёР·РјР°. РЈРґРµР»СЏР№С‚Рµ РІРЅРёРјР°РЅРёРµ РѕСЃР°РЅРєРµ РІ С‚РµС‡РµРЅРёРµ РІСЃРµРіРѕ РґРЅСЏ, РѕСЃРѕР±РµРЅРЅРѕ РїСЂРё СЂР°Р±РѕС‚Рµ Р·Р° РєРѕРјРїСЊСЋС‚РµСЂРѕРј."
      },
      "week2_lesson1": {
        title: "Р Р°Р±РѕС‚Р° СЃ РїРѕР·РІРѕРЅРѕС‡РЅРёРєРѕРј",
        video_file: "week2_lesson1.mp4",
        thumbnail_file: "week2_lesson1.jpg",
        content_points: [
          "Р‘РµР·РѕРїР°СЃРЅР°СЏ РјРѕР±РёР»РёР·Р°С†РёСЏ РїРѕР·РІРѕРЅРѕС‡РЅРёРєР°",
          "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ РєР°Р¶РґРѕРіРѕ РѕС‚РґРµР»Р° РїРѕР·РІРѕРЅРѕС‡РЅРёРєР°",
          "РўРµС…РЅРёРєРё СЃРЅСЏС‚РёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ РІ СЃРїРёРЅРµ"
        ],
        important_notes: "Р’СЃРµ РґРІРёР¶РµРЅРёСЏ РІС‹РїРѕР»РЅСЏР№С‚Рµ РїР»Р°РІРЅРѕ, Р±РµР· СЂС‹РІРєРѕРІ. РџСЂРё РіРѕР»РѕРІРѕРєСЂСѓР¶РµРЅРёРё РїСЂРµРєСЂР°С‚РёС‚Рµ РІС‹РїРѕР»РЅРµРЅРёРµ СѓРїСЂР°Р¶РЅРµРЅРёР№.",
        additional_info: "Р РµРіСѓР»СЏСЂРЅР°СЏ РїСЂР°РєС‚РёРєР° СЌС‚РёС… СѓРїСЂР°Р¶РЅРµРЅРёР№ РїРѕРјРѕР¶РµС‚ СѓР»СѓС‡С€РёС‚СЊ РіРёР±РєРѕСЃС‚СЊ РїРѕР·РІРѕРЅРѕС‡РЅРёРєР° Рё СЃРЅРёР·РёС‚СЊ СЂРёСЃРє Р±РѕР»РµР№ РІ СЃРїРёРЅРµ."
      },
      "week2_lesson2": {
        title: "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё",
        video_file: "week2_lesson2.mp4",
        thumbnail_file: "week2_lesson2.jpg",
        content_points: [
          "РђРЅР°С‚РѕРјРёСЏ С€РµР№РЅРѕРіРѕ РѕС‚РґРµР»Р° Рё РµРіРѕ РѕСЃРѕР±РµРЅРЅРѕСЃС‚Рё",
          "Р‘РµР·РѕРїР°СЃРЅС‹Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ СЃРЅСЏС‚РёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ РІ С€РµРµ",
          "РџСЂРѕС„РёР»Р°РєС‚РёРєР° РіРѕР»РѕРІРЅС‹С… Р±РѕР»РµР№ РЅР°РїСЂСЏР¶РµРЅРёСЏ"
        ],
        important_notes: "РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё С‚СЂРµР±СѓСЋС‚ РѕСЃРѕР±РѕР№ РѕСЃС‚РѕСЂРѕР¶РЅРѕСЃС‚Рё. РќРµ РґРµР»Р°Р№С‚Рµ СЂРµР·РєРёС… РґРІРёР¶РµРЅРёР№ Рё РєСЂСѓРіРѕРІС‹С… РІСЂР°С‰РµРЅРёР№ РіРѕР»РѕРІРѕР№.",
        additional_info: "Р­С‚Рё СѓРїСЂР°Р¶РЅРµРЅРёСЏ РѕСЃРѕР±РµРЅРЅРѕ РїРѕР»РµР·РЅС‹ РґР»СЏ Р»СЋРґРµР№, СЂР°Р±РѕС‚Р°СЋС‰РёС… Р·Р° РєРѕРјРїСЊСЋС‚РµСЂРѕРј. Р’С‹РїРѕР»РЅСЏР№С‚Рµ РёС… РєР°Р¶РґС‹Рµ 2-3 С‡Р°СЃР° РІ С‚РµС‡РµРЅРёРµ СЂР°Р±РѕС‡РµРіРѕ РґРЅСЏ."
      },
      "week3_lesson1": {
        title: "РўРµС…РЅРёРєРё СЃР°РјРѕРјР°СЃСЃР°Р¶Р°",
        video_file: "week3_lesson1.mp4",
        thumbnail_file: "week3_lesson1.jpg",
        content_points: [
          "РћСЃРЅРѕРІРЅС‹Рµ РїСЂРёРµРјС‹ СЃР°РјРѕРјР°СЃСЃР°Р¶Р°",
          "Р Р°Р±РѕС‚Р° СЃ С‚СЂРёРіРіРµСЂРЅС‹РјРё С‚РѕС‡РєР°РјРё",
          "РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ РїРѕРґСЂСѓС‡РЅС‹С… СЃСЂРµРґСЃС‚РІ РґР»СЏ РјР°СЃСЃР°Р¶Р°"
        ],
        important_notes: "РџСЂРё СЃР°РјРѕРјР°СЃСЃР°Р¶Рµ РёР·Р±РµРіР°Р№С‚Рµ СЃРёР»СЊРЅРѕРіРѕ РґР°РІР»РµРЅРёСЏ РЅР° РїРѕР·РІРѕРЅРѕС‡РЅРёРє, Р»РёРјС„РѕСѓР·Р»С‹ Рё РѕР±Р»Р°СЃС‚Рё СЃ РІРѕСЃРїР°Р»РµРЅРёСЏРјРё.",
        additional_info: "РЎР°РјРѕРјР°СЃСЃР°Р¶ - СЌС„С„РµРєС‚РёРІРЅС‹Р№ СЃРїРѕСЃРѕР± СЃРЅСЏС‚РёСЏ РјС‹С€РµС‡РЅРѕРіРѕ РЅР°РїСЂСЏР¶РµРЅРёСЏ. Р›СѓС‡С€РµРµ РІСЂРµРјСЏ РґР»СЏ РјР°СЃСЃР°Р¶Р° - РїРѕСЃР»Рµ С‚РµРїР»РѕРіРѕ РґСѓС€Р° РёР»Рё РІР°РЅРЅС‹."
      },
      "week3_lesson2": {
        title: "РЎРЅСЏС‚РёРµ РјС‹С€РµС‡РЅС‹С… Р±Р»РѕРєРѕРІ",
        video_file: "week3_lesson2.mp4",
        thumbnail_file: "week3_lesson2.jpg",
        content_points: [
          "Р§С‚Рѕ С‚Р°РєРѕРµ РјС‹С€РµС‡РЅС‹Рµ Р±Р»РѕРєРё Рё РїРѕС‡РµРјСѓ РѕРЅРё РІРѕР·РЅРёРєР°СЋС‚",
          "РўРµС…РЅРёРєРё РіР»СѓР±РѕРєРѕРіРѕ СЂР°СЃСЃР»Р°Р±Р»РµРЅРёСЏ РјС‹С€С†",
          "Р”С‹С…Р°С‚РµР»СЊРЅС‹Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ СЃРЅСЏС‚РёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ"
        ],
        important_notes: "Р”С‹С…Р°РЅРёРµ - РєР»СЋС‡ Рє СЂР°СЃСЃР»Р°Р±Р»РµРЅРёСЋ. РЎР»РµРґРёС‚Рµ Р·Р° СЂРёС‚РјРѕРј РґС‹С…Р°РЅРёСЏ РІРѕ РІСЂРµРјСЏ РІС‹РїРѕР»РЅРµРЅРёСЏ РІСЃРµС… СѓРїСЂР°Р¶РЅРµРЅРёР№.",
        additional_info: "Р РµРіСѓР»СЏСЂРЅР°СЏ РїСЂР°РєС‚РёРєР° РїРѕРјРѕР¶РµС‚ РІР°Рј РЅР°СѓС‡РёС‚СЊСЃСЏ Р±С‹СЃС‚СЂРѕ СЃРЅРёРјР°С‚СЊ РЅР°РїСЂСЏР¶РµРЅРёРµ РІ Р»СЋР±РѕР№ СЃРёС‚СѓР°С†РёРё."
      },
      "week4_lesson1": {
        title: "РРЅС‚РµРіСЂР°С†РёСЏ РґРІРёР¶РµРЅРёР№",
        video_file: "week4_lesson1.mp4",
        thumbnail_file: "week4_lesson1.jpg",
        content_points: [
          "РЎРѕРµРґРёРЅРµРЅРёРµ РёР·СѓС‡РµРЅРЅС‹С… С‚РµС…РЅРёРє РІ РµРґРёРЅС‹Р№ РєРѕРјРїР»РµРєСЃ",
          "РЎРѕР·РґР°РЅРёРµ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕР№ РїСЂРѕРіСЂР°РјРјС‹ СѓРїСЂР°Р¶РЅРµРЅРёР№",
          "РђРґР°РїС‚Р°С†РёСЏ СѓРїСЂР°Р¶РЅРµРЅРёР№ РїРѕРґ РІР°С€Рё РїРѕС‚СЂРµР±РЅРѕСЃС‚Рё"
        ],
        important_notes: "РќР° СЌС‚РѕРј СЌС‚Р°РїРµ РІР°Р¶РЅРѕ РїСЂРёСЃР»СѓС€РёРІР°С‚СЊСЃСЏ Рє СЃРІРѕРµРјСѓ С‚РµР»Сѓ Рё РІС‹Р±РёСЂР°С‚СЊ С‚Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ, РєРѕС‚РѕСЂС‹Рµ РїСЂРёРЅРѕСЃСЏС‚ РЅР°РёР±РѕР»СЊС€СѓСЋ РїРѕР»СЊР·Сѓ РёРјРµРЅРЅРѕ РІР°Рј.",
        additional_info: "РЎРѕР·РґР°Р№С‚Рµ СЃРІРѕР№ РµР¶РµРґРЅРµРІРЅС‹Р№ 15-РјРёРЅСѓС‚РЅС‹Р№ РєРѕРјРїР»РµРєСЃ РёР· РЅР°РёР±РѕР»РµРµ СЌС„С„РµРєС‚РёРІРЅС‹С… РґР»СЏ РІР°СЃ СѓРїСЂР°Р¶РЅРµРЅРёР№."
      },
      "week4_lesson2": {
        title: "Р•Р¶РµРґРЅРµРІРЅР°СЏ РїСЂР°РєС‚РёРєР°",
        video_file: "week4_lesson2.mp4",
        thumbnail_file: "week4_lesson2.jpg",
        content_points: [
          "РљР°Рє РІСЃС‚СЂРѕРёС‚СЊ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РІ РїРѕРІСЃРµРґРЅРµРІРЅСѓСЋ Р¶РёР·РЅСЊ",
          "РњРёРЅРё-РєРѕРјРїР»РµРєСЃС‹ РґР»СЏ РѕС„РёСЃР° Рё РґРѕРјР°",
          "РџРѕРґРґРµСЂР¶Р°РЅРёРµ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ Рё РґР°Р»СЊРЅРµР№С€РµРµ СЂР°Р·РІРёС‚РёРµ"
        ],
        important_notes: "Р РµРіСѓР»СЏСЂРЅРѕСЃС‚СЊ РІР°Р¶РЅРµРµ РёРЅС‚РµРЅСЃРёРІРЅРѕСЃС‚Рё. Р›СѓС‡С€Рµ Р·Р°РЅРёРјР°С‚СЊСЃСЏ РїРѕ 10 РјРёРЅСѓС‚ РєР°Р¶РґС‹Р№ РґРµРЅСЊ, С‡РµРј С‡Р°СЃ СЂР°Р· РІ РЅРµРґРµР»СЋ.",
        additional_info: "РџРѕР·РґСЂР°РІР»СЏРµРј СЃ Р·Р°РІРµСЂС€РµРЅРёРµРј РєСѓСЂСЃР°! РџСЂРѕРґРѕР»Р¶Р°Р№С‚Рµ РїСЂР°РєС‚РёРєСѓ, Рё РІР°С€Рµ С‚РµР»Рѕ СЃРєР°Р¶РµС‚ РІР°Рј СЃРїР°СЃРёР±Рѕ."
      }
    }
  }
};

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\api.js
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\player-archive.js
// handlers/player-archive.js
import { createCorsResponse, createUnauthorizedResponse, createNotFoundResponse } from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';

export async function handlePlayerArchive(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);
  
  const courseId = pathParts[1] || 'course1';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє Р°СЂС…РёРІСѓ
  const accessCheck = hasAccess(token, courseId, 'archive');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  const course = COURSE_DATA[courseId];
  if (!course) {
    return createNotFoundResponse('Course');
  }
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј СЃРїРёСЃРѕРє РІСЃРµС… СѓСЂРѕРєРѕРІ РґР»СЏ РЅР°РІРёРіР°С†РёРё
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
              <span class="week-badge">РќРµРґРµР»СЏ ${weekNum}</span>
              <span class="lesson-number">РЈСЂРѕРє ${lessonNum}</span>
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
    <title>РђСЂС…РёРІ РєСѓСЂСЃР°: ${course.title} - MasterMarat</title>
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
        
        /* РђРґР°РїС‚РёРІРЅРѕСЃС‚СЊ */
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
        
        /* РђРЅРёРјР°С†РёСЏ РїРѕСЏРІР»РµРЅРёСЏ */
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
        <h1> РђСЂС…РёРІ РєСѓСЂСЃР°</h1>
        <p>${course.title}</p>
    </div>
    
    <div class="container">
        <h2 class="section-title">Р’СЃРµ СѓСЂРѕРєРё РєСѓСЂСЃР° (${Object.keys(course.lessons).length})</h2>
        <div class="lessons-grid">
            ${lessonItems.join('')}
        </div>
    </div>

    <script>
        console.log('Archive mode loaded for course: ${courseId}');
        
        // РџСЂРµРґР·Р°РіСЂСѓР·РєР° РёР·РѕР±СЂР°Р¶РµРЅРёР№ РїСЂРё РЅР°РІРµРґРµРЅРёРё
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

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\player-learning.js
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ Рё РґРѕСЃС‚СѓРї
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
  
  // РџРѕР»СѓС‡Р°РµРј РЅРѕРјРµСЂ РЅРµРґРµР»Рё Рё СѓСЂРѕРєР°
  const weekMatch = lessonId.match(/week(\d+)_lesson(\d+)/);
  const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
  const lessonNum = weekMatch ? parseInt(weekMatch[2]) : 1;
  
  // Р“РµРЅРµСЂРёСЂСѓРµРј HTML РїР»РµРµСЂР° РІ СЃС‚РёР»Рµ MasterMarat
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
        
        /* РЁР°РїРєР° РІ СЃС‚РёР»Рµ MasterMarat */
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
        
        /* РљРѕРЅС‚РµР№РЅРµСЂ РІРёРґРµРѕ */
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
        
        /* РљРѕРЅС‚РµРЅС‚ РїРѕРґ РІРёРґРµРѕ */
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
        
        /* Р‘Р»РѕРє "Р’ СЌС‚РѕРј РІРёРґРµРѕ" */
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
        
        /* Р’Р°Р¶РЅС‹Рµ РјРѕРјРµРЅС‚С‹ */
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
        
        /* Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹ */
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
        
        /* РРЅРґРёРєР°С‚РѕСЂ Р·Р°РіСЂСѓР·РєРё */
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
        
        /* РњРѕР±РёР»СЊРЅР°СЏ Р°РґР°РїС‚Р°С†РёСЏ */
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
                РљСѓСЂСЃ: ${course.title}  РќРµРґРµР»СЏ ${weekNum}, РЈСЂРѕРє ${lessonNum}
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
                Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ HTML5 РІРёРґРµРѕ.
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
                Р’ СЌС‚РѕРј РІРёРґРµРѕ:
            </h2>
            <ul>
                ${lesson.content_points ? lesson.content_points.map(point => 
                    `<li>${point}</li>`
                ).join('') : `
                <li>РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 1: Р§С‚Рѕ Р±СѓРґРµС‚ СЂР°СЃСЃРјРѕС‚СЂРµРЅРѕ РІ СЌС‚РѕРј РІРёРґРµРѕ</li>
                <li>РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 2: РћСЃРЅРѕРІРЅС‹Рµ РєРѕРЅС†РµРїС†РёРё РёР»Рё РґРµРјРѕРЅСЃС‚СЂР°С†РёРё</li>
                <li>РљР»СЋС‡РµРІРѕР№ РјРѕРјРµРЅС‚ 3: РџСЂР°РєС‚РёС‡РµСЃРєРёРµ СЃРѕРІРµС‚С‹ РёР»Рё РїСЂРёРјРµСЂС‹</li>
                `}
            </ul>
        </div>
        
        <div class="important-box">
            <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#856404">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
                Р’Р°Р¶РЅС‹Рµ РјРѕРјРµРЅС‚С‹
            </h3>
            <p>
                ${lesson.important_notes || 
                'Р’С‹РїРѕР»РЅСЏР№С‚Рµ СѓРїСЂР°Р¶РЅРµРЅРёСЏ РјРµРґР»РµРЅРЅРѕ Рё РѕСЃРѕР·РЅР°РЅРЅРѕ. РџСЂРё РїРѕСЏРІР»РµРЅРёРё Р±РѕР»Рё РёР»Рё РґРёСЃРєРѕРјС„РѕСЂС‚Р° РѕСЃС‚Р°РЅРѕРІРёС‚РµСЃСЊ Рё РїСЂРѕРєРѕРЅСЃСѓР»СЊС‚РёСЂСѓР№С‚РµСЃСЊ СЃРѕ СЃРїРµС†РёР°Р»РёСЃС‚РѕРј.'}
            </p>
        </div>
        
        <div class="materials-box">
            <h3> Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РјР°С‚РµСЂРёР°Р»С‹</h3>
            <p>
                ${lesson.additional_info || 
                'Р РµРєРѕРјРµРЅРґСѓРµРј РІС‹РїРѕР»РЅСЏС‚СЊ СѓРїСЂР°Р¶РЅРµРЅРёСЏ 2-3 СЂР°Р·Р° РІ РЅРµРґРµР»СЋ РґР»СЏ РґРѕСЃС‚РёР¶РµРЅРёСЏ РЅР°РёР»СѓС‡С€РёС… СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ. РЎР»РµРґРёС‚Рµ Р·Р° РїСЂР°РІРёР»СЊРЅРѕР№ С‚РµС…РЅРёРєРѕР№ РІС‹РїРѕР»РЅРµРЅРёСЏ.'}
            </p>
        </div>
    </div>

    <script>
        const video = document.getElementById('lessonVideo');
        const loadingOverlay = document.getElementById('loadingOverlay');
        
        // РЎРєСЂС‹РІР°РµРј Р·Р°РіСЂСѓР·РєСѓ РєРѕРіРґР° РІРёРґРµРѕ РіРѕС‚РѕРІРѕ
        video.addEventListener('loadeddata', () => {
            loadingOverlay.classList.add('hidden');
            console.log('Video loaded:', '${courseId}/${lessonId}');
        });
        
        // РџРѕРєР°Р·С‹РІР°РµРј Р·Р°РіСЂСѓР·РєСѓ РїСЂРё Р±СѓС„РµСЂРёР·Р°С†РёРё
        video.addEventListener('waiting', () => {
            loadingOverlay.classList.remove('hidden');
        });
        
        video.addEventListener('playing', () => {
            loadingOverlay.classList.add('hidden');
        });
        
        // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            loadingOverlay.classList.add('hidden');
            alert('РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ. РџСЂРѕРІРµСЂСЊС‚Рµ РїРѕРґРєР»СЋС‡РµРЅРёРµ Рє РёРЅС‚РµСЂРЅРµС‚Сѓ.');
        });
        
        // РЎРѕС…СЂР°РЅСЏРµРј РїСЂРѕРіСЂРµСЃСЃ РїСЂРѕСЃРјРѕС‚СЂР°
        let lastSaveTime = 0;
        video.addEventListener('timeupdate', () => {
            const currentTime = Math.floor(video.currentTime);
            if (currentTime - lastSaveTime > 10) { // РЎРѕС…СЂР°РЅСЏРµРј РєР°Р¶РґС‹Рµ 10 СЃРµРєСѓРЅРґ
                lastSaveTime = currentTime;
                console.log('Progress saved:', currentTime);
                // TODO: РћС‚РїСЂР°РІРёС‚СЊ РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
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

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\test.js
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // РўРµСЃС‚РёСЂСѓРµРј РІСЃРµ С‚РѕРєРµРЅС‹
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1> MasterMarat Token Testing</h1>
    <p>РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рё С‚РѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ СЂР°Р·РЅС‹С… СѓСЂРѕРІРЅРµР№ РґРѕСЃС‚СѓРїР°:</p>
    
    <div class="token-box">
        <h3> Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=superuser_mastermarat_2025">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=superuser_mastermarat_2025">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=demo123">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=expired_test_token">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\thumbnails.js
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
  
  // Р”Р»СЏ РѕР±СЂР°С‚РЅРѕР№ СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚Рё: РїСЂРѕРІРµСЂСЏРµРј РµСЃС‚СЊ Р»Рё С‚Р°РєРѕР№ СѓСЂРѕРє
  let thumbnailKey = content//;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
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

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\video.js
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ
  if (!token || !validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid or missing token');
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
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
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
    
    // РћР±С‹С‡РЅС‹Р№ Р·Р°РїСЂРѕСЃ Р±РµР· range
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

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\handlers\webhooks.js
// handlers/webhooks.js
import { createCorsResponse } from '../utils/cors.js';
import { createBadRequestResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

export async function handleWebhooks(request, env, ctx) {
  try {
    const webhook = await request.json();

    // Р“РµРЅРµСЂРёСЂСѓРµРј С‚РѕРєРµРЅ РґР»СЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
    const userToken = generateSimpleToken(
      webhook.email || 'test@example.com',
      webhook.course_id || 'course1'
    );

    // TODO: РћР±РЅРѕРІРёС‚СЊ РєРѕРЅС‚Р°РєС‚ РІ SendPulse С‡РµСЂРµР· API
    // await updateSendPulseContact(webhook.email, {
    //   access_token: userToken,
    //   purchase_date: new Date().toISOString(),
    //   subscription_type: webhook.subscription_type
    // });

    return createCorsResponse(
      JSON.stringify({
        status: 'success',
        message: 'Webhook processed successfully',
        user_token: userToken,
        received_data: webhook,
        note: 'Token will be sent in first course email'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook processing error:', error);
    return createBadRequestResponse('Invalid webhook data');
  }
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\services\auth.js
// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  // РџРѕРєР° РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР° РґР»СЏ РґРµРјРѕ
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ С‚РѕРєРµРЅ РґР»СЏ РїСЂР°РІРёР»СЊРЅРѕРіРѕ РєСѓСЂСЃР°
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџРѕР»СѓС‡РёС‚СЊ email РёР· SendPulse РїРѕ С…РµС€Сѓ
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\services\content.js
// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = content//;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = content//;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Р“СЂСѓРїРїРёСЂСѓРµРј СѓСЂРѕРєРё РїРѕ РЅРµРґРµР»СЏРј
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\services\sendpulse.js
// services/sendpulse.js
const SENDPULSE_API_URL = 'https://api.sendpulse.com';

export async function verifyPurchaseToken(token) {
  // TODO: Р РµР°Р»СЊРЅР°СЏ РїСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  console.log('Verifying token with SendPulse:', token);
  
  return {
    valid: true,
    email: 'user@example.com',
    subscription_type: 'standard'
  };
}

export async function updateUserProgress(email, courseId, lessonId) {
  // TODO: РћР±РЅРѕРІРёС‚СЊ РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
  console.log(Updating progress for : /);
  
  return { success: true };
}

export async function getUserSubscription(email) {
  // TODO: РџРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё РёР· SendPulse
  return {
    email,
    active: true,
    type: 'standard',
    expires: '2025-12-31',
    courses: ['course1']
  };
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\templates\base.js
// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    
    
</body>
</html>;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return 
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster=""
            id="lesson-video"
        >
            <source src="" type="video/mp4">
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ.
        </video>
    </div>
  ;
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\utils\cors.js
// utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Range',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
};

export function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function createCorsResponse(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      ...init.headers
    }
  });
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\utils\errors.js
// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
export function createBadRequestResponse(message, details = null) {
  return createErrorResponse(message, 400, details);
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\utils\token.js
// utils/token.js
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С РЎвЂљР ВµРЎРѓРЎвЂљР С•Р Р†РЎвЂ№Р Вµ РЎвЂљР С•Р С”Р ВµР Р…РЎвЂ№
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }
  
  // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С РЎвЂћР С•РЎР‚Р СР В°РЎвЂљ Р С•Р В±РЎвЂ№РЎвЂЎР Р…РЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р†
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р вЂќР В»РЎРЏ РЎвЂљР ВµРЎРѓРЎвЂљР С•Р Р†РЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† Р Р†Р С•Р В·Р Р†РЎР‚Р В°РЎвЂ°Р В°Р ВµР С Р С‘РЎвЂ¦ Р С—РЎР‚Р В°Р Р†Р В°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }
  
  // Р вЂќР В»РЎРЏ Р С•Р В±РЎвЂ№РЎвЂЎР Р…РЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† Р С—Р В°РЎР‚РЎРѓР С‘Р С РЎРѓРЎвЂљРЎР‚РЎС“Р С”РЎвЂљРЎС“РЎР‚РЎС“
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);
  
  // Р вЂќР В»РЎРЏ РЎвЂљР ВµРЎРѓРЎвЂљР С•Р Р†РЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† Р С—РЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С Р С—РЎР‚Р В°Р Р†Р В°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;
    
    // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С Р Р…Р Вµ Р С‘РЎРѓРЎвЂљР ВµР С” Р В»Р С‘ РЎвЂљР С•Р С”Р ВµР Р…
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }
    
    // SuperUser Р С‘Р СР ВµР ВµРЎвЂљ Р Т‘Р С•РЎРѓРЎвЂљРЎС“Р С— Р С”Р С• Р Р†РЎРѓР ВµР СРЎС“
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }
    
    // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С Р Т‘Р С•РЎРѓРЎвЂљРЎС“Р С— Р С” Р С”РЎС“РЎР‚РЎРѓРЎС“
    const hasCourseAccess = perms.courses.includes('*') || 
                           perms.courses.includes(courseId);
    
    // Р СџРЎР‚Р С•Р Р†Р ВµРЎР‚РЎРЏР ВµР С Р Т‘Р С•РЎРѓРЎвЂљРЎС“Р С— Р С” РЎвЂћРЎС“Р Р…Р С”РЎвЂ Р С‘Р С‘
    const hasFeatureAccess = perms.features.includes(feature);
    
    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }
    
    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }
    
    return { allowed: true, permissions: perms };
  }
  
  // Р вЂќР В»РЎРЏ Р С•Р В±РЎвЂ№РЎвЂЎР Р…РЎвЂ№РЎвЂ¦ РЎвЂљР С•Р С”Р ВµР Р…Р С•Р Р† - Р С—РЎР‚Р С•РЎРѓРЎвЂљР В°РЎРЏ Р С—РЎР‚Р С•Р Р†Р ВµРЎР‚Р С”Р В°
  // TODO: Р С‘Р Р…РЎвЂљР ВµР С–РЎР‚Р В°РЎвЂ Р С‘РЎРЏ РЎРѓ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\src\worker-new.js
// worker-new.js - С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// РРјРїРѕСЂС‚РёСЂСѓРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Р РѕСѓС‚РёРЅРі Р·Р°РїСЂРѕСЃРѕРІ
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // РќРћР’Р«Р™: РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р°
      if (url.pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 РґР»СЏ РЅРµРёР·РІРµСЃС‚РЅС‹С… РјР°СЂС€СЂСѓС‚РѕРІ
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\package.json
{
    "name":  "mastermarat-api",
    "version":  "1.0.0",
    "description":  "MasterMarat API Worker for protected video delivery",
    "main":  "src/worker-new.js",
    "scripts":  {
                    "dev":  "wrangler dev",
                    "dev:remote":  "wrangler dev --env dev --remote",
                    "test":  "node ../../scripts/test-api.js",
                    "lint":  "eslint src/",
                    "format":  "prettier --write src/**/*.js",
                    "deploy:dev":  "wrangler deploy --env dev",
                    "logs:dev":  "wrangler tail --env dev",
                    "deploy":  "wrangler deploy",
                    "logs":  "wrangler tail",
                    "login":  "wrangler login",
                    "whoami":  "wrangler whoami"
                },
    "keywords":  [
                     "cloudflare",
                     "workers",
                     "edtech",
                     "api",
                     "video-streaming",
                     "mastermarat",
                     "r2-storage",
                     "osteopathy",
                     "health-education"
                 ],
    "author":  "MasterMarat Team",
    "license":  "MIT",
    "repository":  {
                       "type":  "git",
                       "url":  "https://github.com/Shivalino/mastermarat-project.git"
                   },
    "homepage":  "https://mastermarat.com",
    "devDependencies":  {
                            "eslint":  "^8.57.1",
                            "prettier":  "^3.6.2",
                            "wrangler":  "^4.22.0"
                        },
    "engines":  {
                    "node":  "\u003e=18.0.0",
                    "npm":  "\u003e=8.0.0"
                }
}

//C:\Projects\mastermaratcom\mastermarat-project\workers\api\wrangler.toml
name = "mastermarat-api"
main = "src/worker-new.js"
compatibility_date = "2024-07-01"

# R2 bucket binding
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"

# Production environment
[env.production]
name = "mastermarat-api"
route = { pattern = "api.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.production.vars]
ENVIRONMENT = "production"

# Development environment
[env.dev]
name = "mastermarat-api-dev"
route = { pattern = "api-dev.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.dev.vars]
ENVIRONMENT = "development"

//C:\Projects\mastermaratcom\mastermarat-project\.eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    // Cloudflare Workers globals
    'addEventListener': 'readonly',
    'Response': 'readonly',
    'Request': 'readonly',
    'URL': 'readonly',
    'URLSearchParams': 'readonly',
    'Headers': 'readonly',
    'FormData': 'readonly',
    'btoa': 'readonly',
    'atob': 'readonly',
    'crypto': 'readonly',
    'caches': 'readonly',
    'fetch': 'readonly'
  },
  rules: {
    // Code quality
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-console': 'off', // Р Р°Р·СЂРµС€Р°РµРј console.log РІ Workers
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Code style
    'indent': ['error', 2],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    
    // Best practices
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'eol-last': ['error', 'always'],
    
    // Security
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-script-url': 'error'
  },
  overrides: [
    {
      // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ РїСЂР°РІРёР»Р° РґР»СЏ Cloudflare Workers
      files: ['src/worker.js'],
      rules: {
        'no-undef': 'off' // РћС‚РєР»СЋС‡Р°РµРј РґР»СЏ Workers globals
      }
    },
    {
      // РџСЂР°РІРёР»Р° РґР»СЏ С‚РµСЃС‚РѕРІ
      files: ['scripts/test-*.js', '**/*.test.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
};

//C:\Projects\mastermaratcom\mastermarat-project\.gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment variables
.env
.env.local
.env.production
.env.*.local
.dev.vars

# Cloudflare
.wrangler/
.miniflare/
wrangler.toml.backup

# Build outputs
dist/
build/
.cache/
.parcel-cache/

# OS files
.DS_Store
Thumbs.db
desktop.ini
*.swp
*.swo
*~

# IDE
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Testing
coverage/
.nyc_output/

# Temporary files
*.tmp
*.temp
*.bak
*.backup
*.old
tmp/
temp_upload/

# Logs
logs/
*.log

# Security
*.pem
*.key
*.cert
*.crt
private/
secrets/

# Media files (use R2 storage instead)
*.mp4
*.mov
*.avi
*.mkv
*.webm

# Databases
*.sqlite
*.sqlite3
*.db

# Project specific
/content/videos/
/content/thumbnails/
analytics-data/
user-data/re -Encoding UTF8 -NoNewline

Write-Host "вњ… .gitignore СЃРѕР·РґР°РЅ!" -ForegroundColor Green

//C:\Projects\mastermaratcom\mastermarat-project\.prettierrc
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "crlf",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "printWidth": 70,
        "proseWrap": "always"
      }
    },
    {
      "files": "*.json",
      "options": {
        "trailingComma": "none"
      }
    }
  ]
}

//C:\Projects\mastermaratcom\mastermarat-project\eslint.config.js
// eslint.config.js - ESLint v9 configuration
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['workers/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Cloudflare Workers globals
        'addEventListener': 'readonly',
        'Response': 'readonly',
        'Request': 'readonly',
        'URL': 'readonly',
        'URLSearchParams': 'readonly',
        'Headers': 'readonly',
        'FormData': 'readonly',
        'btoa': 'readonly',
        'atob': 'readonly',
        'crypto': 'readonly',
        'caches': 'readonly',
        'fetch': 'readonly',
        'console': 'readonly',
        'Date': 'readonly',
        'JSON': 'readonly',
        'parseInt': 'readonly',
        'process': 'readonly'
      }
    },
    rules: {
      // Code quality
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'off', // Р Р°Р·СЂРµС€Р°РµРј console.log РІ Workers
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // Best practices
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'dot-notation': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
      'eol-last': ['error', 'always'],
      
      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error'
    }
  },
  {
    // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ РїСЂР°РІРёР»Р° РґР»СЏ С‚РµСЃС‚РѕРІ
    files: ['scripts/test-*.js', '**/*.test.js'],
    rules: {
      'no-console': 'off'
    }
  }
];

//C:\Projects\mastermaratcom\mastermarat-project\package.json
{
  "name": "mastermarat-project",
  "version": "1.0.0",
  "description": "MasterMarat EdTech Project",
  "private": true,
  "scripts": {
    "dev": "npm run dev --prefix workers/api",
    "deploy": "npm run deploy --prefix workers/api",
    "lint": "npm run lint --prefix workers/api",
    "lint:fix": "npm run lint:fix --prefix workers/api",
    "format": "npm run format --prefix workers/api",
    "format:check": "npm run format:check --prefix workers/api",
    "install:all": "npm install && cd workers/api && npm install"
  },
  "workspaces": [
    "workers/api"
  ],
  "devDependencies": {
    "prettier": "^3.0.0",
    "eslint": "^8.0.0"
  }
}

```

---

### `structure.md` (2.15 KB)

```markdown
# Project Structure

Generated: 2025-07-03 16:16

## Statistics
- Files: 67
- Total size: 0.66 MB

## root

| File | Size |
|------|------|
| .eslintrc.js | 1.8 KB |
| .gitignore | 1.3 KB |
| API_REFERENCE.md | 14.7 KB |
| eslint.config.js | 1.9 KB |
| package-lock.json | 57.2 KB |
| package.json | 0.6 KB |
| README.md | 9.3 KB |
| src_01_07_2025.md | 63.3 KB |
| structure.md | 2.1 KB |
| settings.json | 1.2 KB |
| chat_claude-sonnet_01_07_2025.md | 127.3 KB |
| courses-database.json | 0 KB |
| lesson-template.md | 1.8 KB |
| ARCHITECTURE.md | 10.9 KB |
| DEPLOYMENT.md | 12.2 KB |
| DEVELOPMENT_STATUS.md | 12.2 KB |
| vscode_git_guide.md | 7.6 KB |
| address_books_sendpulse.md | 32.4 KB |
| content_template_guide.md | 6.1 KB |
| ffmpeg.md | 0.9 KB |
| r2-wrangler-manual.md | 1.7 KB |
| r2_content_and_deployment.md | 2.5 KB |
| thumbnail-generation-guide.md | 5.3 KB |
| Модули.md | 8.4 KB |
| Обработчики.md | 16.8 KB |
| export-project-structure.ps1 | 10.2 KB |
| export-structure.ps1 | 4.4 KB |
| lesson-converter.ps1 | 16.4 KB |
| simple-lesson-converter.ps1 | 7 KB |
| structure.md | 0.4 KB |
| test-api.js | 40.4 KB |
| upload_content_to_r2.js | 1.3 KB |
| week1_lesson1.json | 1 KB |
| week1_lesson2.json | 1 KB |
| week2_lesson1.json | 1 KB |
| week2_lesson2.json | 1 KB |
| week3_lesson1.json | 1 KB |
| week3_lesson2.json | 1 KB |
| week4_lesson1.json | 1 KB |
| week4_lesson2.json | 0.7 KB |
| week1.md | 1.3 KB |
| week2.md | 2.8 KB |
| week3.md | 1.6 KB |
| week4.md | 3 KB |
| git_upload.ps1 | 0.6 KB |
| lesson-converter-en.ps1 | 5.7 KB |
| multi-course-editor.ps1 | 19.1 KB |
| package-lock.json | 94 KB |
| package.json | 1.8 KB |
| wrangler.toml | 0.5 KB |
| worker-new.js | 2.1 KB |
| constants.js | 1.8 KB |
| courses.js | 9.1 KB |
| api.js | 1.7 KB |
| player-archive.js | 9.9 KB |
| player-learning.js | 17.7 KB |
| test.js | 2 KB |
| thumbnails.js | 1.5 KB |
| video.js | 3.4 KB |
| webhooks.js | 1.2 KB |
| auth.js | 1 KB |
| content.js | 1.6 KB |
| sendpulse.js | 0.8 KB |
| base.js | 1.5 KB |
| cors.js | 0.7 KB |
| errors.js | 0.8 KB |
| token.js | 3.2 KB |


```

---

### `temp_upload/course1/week1.md` (1.33 KB)

```markdown
"РўСЂРё РЎР»РѕРЅР°" РІ РњРµС…Р°РЅРёРєРµ Р—РґРѕСЂРѕРІСЊСЏ.

РўСЂРё РѕСЃРЅРѕРІРЅС‹С… Р°СЃРїРµРєС‚Р°, Р±РµР· РєРѕС‚РѕСЂС‹С… С‡РµР»РѕРІРµРє РЅРµ РјРѕР¶РµС‚ СЃСѓС‰РµСЃС‚РІРѕРІР°С‚СЊ:

вњ… Р”РІРёР¶РµРЅРёРµ (Р·РґРѕСЂРѕРІС‹Рµ СЃСѓСЃС‚Р°РІС‹);

вњ… Р’РѕРґРЅС‹Р№ Р±Р°Р»Р°РЅСЃ (Р¶РёРґРєРѕСЃС‚Рё РІ РѕСЂРіР°РЅРёР·РјРµ);

вњ… Р”С‹С…Р°РЅРёРµ (Р±РµР· РєРѕС‚РѕСЂРѕРіРѕ РІСЃРµ РѕСЃС‚Р°Р»СЊРЅРѕРµ Р±РµСЃСЃРјС‹СЃР»РµРЅРЅРѕ).

Р’ СЌС‚РѕРј, РІРІРѕРґРЅРѕРј РєСѓСЂСЃРµ, РјС‹ РґР°РґРёРј Р’Р°Рј РєСЂР°С‚РєРѕ РёРЅС„РѕСЂРјР°С†РёСЋ РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ РІР°Р¶РЅРѕСЃС‚Рё РјРµС…Р°РЅРёРєРё СЂР°Р±РѕС‚С‹ РїРѕ РєР°Р¶РґРѕРјСѓ РёР· СЃРµРіРјРµРЅС‚РѕРІ, Рё РїР°СЂСѓ СЂРµРєРѕРјРµРЅРґР°С†РёР№ РґР»СЏ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ РёС… РІ Р±Р°Р»Р°РЅСЃРµ.  

рџ‘Ќ Р­С‚РѕРіРѕ РѕР±СЉРµРјР° РґРѕСЃС‚Р°С‚РѕС‡РЅРѕ РґР»СЏ РїРѕРЅРёРјР°РЅРёСЏ РєРѕРЅС†РµРїС†РёРё РїРѕРґР°С‡Рё РёРЅС„РѕСЂРјР°С†РёРё Рё СѓСЂРѕРІРЅСЏ РІРѕРІР»РµС‡РµРЅРЅРѕСЃС‚Рё Рё РїРѕРЅРёРјР°РЅРёСЏ РІ С‚РµРјРµ Рѕ РєРѕС‚РѕСЂРѕР№ РіРѕРІРѕСЂРёРј. 

рџ«¶ Рђ Р±Р°Р·РѕРІС‹Рµ СЂРµРєРѕРјРµРЅРґР°С†РёРё, РєРѕС‚РѕСЂС‹Рµ РјС‹ РґР°РґРёРј РІ СЌС‚РѕРј РєСѓСЂСЃРµ, РїСЂРё СЂРµРіСѓР»СЏСЂРЅРѕРј РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРё, РґР°РґСѓС‚ Р·Р°РјРµС‚РЅС‹Р№ РїРѕР»РѕР¶РёС‚РµР»СЊРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РЅР° РІСЃРµ СЃРёСЃС‚РµРјС‹ Р’Р°С€РµРіРѕ РѕСЂРіР°РЅРёР·РјР°.

[Р’РР”Р•Рћ]
вќпёЏ Рћ РІР°Р¶РЅРѕСЃС‚Рё РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРіРѕ РїРѕРґС…РѕРґР° вќпёЏ
```

---

### `temp_upload/course1/week2.md` (2.77 KB)

```markdown
РљР°Рє РјРѕР¶РЅРѕ РґРІРёРіР°С‚СЊСЃСЏ Рё РѕС‰СѓС‰Р°С‚СЊ СЃРµР±СЏ РІ 40 - 45 - 50+

Р’СЃРµ РјС‹ СЃР»С‹С€Р°Р»Рё С„СЂР°Р·Сѓ В«Р”РІРёР¶РµРЅРёРµ вЂ” СЌС‚Рѕ Р¶РёР·РЅСЊВ». 
Р­С‚Рѕ СѓС‚РІРµСЂР¶РґРµРЅРёРµ РІРµСЂРЅРѕ РЅР° 100500%.

вќпёЏР‘РµР· РґРІРёР¶РµРЅРёСЏ РЅРё РѕРґРёРЅ РѕСЂРіР°РЅ, РЅРё РѕРґРЅР° С‚РєР°РЅСЊ, РЅРё РѕРґРёРЅ СЃСѓСЃС‚Р°РІ РЅРµ РјРѕРіСѓС‚ РєРѕСЂСЂРµРєС‚РЅРѕ СЂР°Р±РѕС‚Р°С‚СЊ, Р° СЃРѕ РІСЂРµРјРµРЅРµРј СѓС‚СЂР°С‡РёРІР°СЋС‚ СЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ С„СѓРЅРєС†РёРѕРЅРёСЂРѕРІР°С‚СЊ. 

рџў РћР±РµР·РґРІРёР¶РµРЅРЅРѕРµ РїРѕР»РѕР¶РµРЅРёРµ С‚РµР»Р° РЅР° РїСЂРѕС‚СЏР¶РµРЅРёРё РґРѕР»РіРѕРіРѕ РІСЂРµРјРµРЅРё С‚Р°Рє Р¶Рµ РІСЂРµРґРЅРѕ РґР»СЏ С‡РµР»РѕРІРµРєР°, РєР°Рє Рё РїРѕРІС‹С€РµРЅРЅР°СЏ РёР»Рё РЅРµРєРѕСЂСЂРµРєС‚РЅР°СЏ С„РёР·РёС‡РµСЃРєР°СЏ РЅР°РіСЂСѓР·РєР°. 

РќР°С€Р° РґРµСЏС‚РµР»СЊРЅРѕСЃС‚СЊ С‡Р°СЃС‚Рѕ СЃРІСЏР·Р°РЅР° Р»РёР±Рѕ СЃ РґРѕР»РіРёРј СЃС‚РѕСЏРЅРёРµРј РЅР° РЅРѕРіР°С…, Р»РёР±Рѕ СЃ РґРѕР»РіРёРј СЃРёРґРµРЅРёРµРј РЅР° РѕРґРЅРѕРј РјРµСЃС‚Рµ. 

вќ—пёЏР’ РѕРґРЅРѕРј Рё РґСЂСѓРіРѕРј СЃР»СѓС‡Р°Рµ СЌС‚Рѕ РЅР°РіСЂСѓР·РєР° СЂР°Р·СЂСѓС€Р°РµС‚ РєРѕСЂСЂРµРєС‚РЅСѓСЋ СЂР°Р±РѕС‚Сѓ СЃСѓСЃС‚Р°РІРѕРІ, РїСѓС‚РµРј РѕСЃС‚Р°РЅРѕРІРєРё РІС‹СЂР°Р±РѕС‚РєРё СЃСѓСЃС‚Р°РІРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё.

РџРѕС‡РµРјСѓ СЃС‚СЂР°РґР°СЋС‚ СЃСѓСЃС‚Р°РІС‹

рџџЎ Р”Р»СЏ С‚РѕРіРѕ, С‡С‚РѕР±С‹ РїРѕРґРґРµСЂР¶Р°С‚СЊ СЃРІРѕРё СЃСѓСЃС‚Р°РІС‹ РІ СЂР°Р±РѕС‡РµРј СЃРѕСЃС‚РѕСЏРЅРёРё СЂРµРєРѕРјРµРЅРґСѓРµРј СЂРµРіСѓР»СЏСЂРЅС‹Рµ РїРµСЂРµСЂС‹РІС‹ РІ СЂР°Р±РѕС‚Рµ СЃРёРґСЏ, СЃ РІРѕР·РјРѕР¶РЅРѕСЃС‚СЊСЋ РїСЂРѕР№С‚РёСЃСЊ, СЃРґРµР»Р°С‚СЊ Р»РµРіРєСѓСЋ РјСЏРіРєСѓСЋ СЂР°Р·РјРёРЅРєСѓ, РїРѕС‚СЏРЅСѓС‚СЊ РЅРµРјРЅРѕРіРѕ С‚РµР»Рѕ РІ СЃС‚РѕСЂРѕРЅС‹. 

рџџў РЎРѕСЃС‚РѕСЏРЅРёРµ Р·РґРѕСЂРѕРІСЊСЏ Сѓ РєР°Р¶РґРѕРіРѕ СЃС„РѕСЂРјРёСЂРѕРІР°РЅРѕ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕ, РїРѕСЌС‚РѕРјСѓ РѕСЂРёРµРЅС‚РёСЂСѓР№С‚РµСЃСЊ РїРѕ РѕС‰СѓС‰РµРЅРёСЏРј СЃРІРѕРµРіРѕ С‚РµР»Р°. РџСЂРё РѕС‰СѓС‰РµРЅРёРё РґРёСЃРєРѕРјС„РѕСЂС‚Р°, Рё Р¶РµР»Р°РЅРёРё В«РµСЂР·Р°С‚СЊВ» вЂ” РїРѕРґРЅРёРјР°Р№С‚РµСЃСЊ, Рё РґРµР»Р°Р№С‚Рµ РјРёРЅРё-Р·Р°СЂСЏРґРєСѓ. 

РўР°РєРёРј РѕР±СЂР°Р·РѕРј Р±СѓРґРµС‚ РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°С‚СЊСЃСЏ С†РёСЂРєСѓР»СЏС†РёСЏ РєСЂРѕРІРё, РїРѕСЃС‚СѓРїР°СЋС‰РµР№ Рє С‚РєР°РЅСЏРј, Рё Рє РіРѕР»РѕРІРЅРѕРјСѓ РјРѕР·РіСѓ, Р° РїРѕРґРІРёР¶РЅРѕСЃС‚СЊ РґР°СЃС‚ РѕСЂРіР°РЅРёР·РјСѓ СЃРёРіРЅР°Р» Рє РІС‹СЂР°Р±РѕС‚РєРµ СЃСѓСЃС‚Р°РІРЅРѕР№ Р¶РёРґРєРѕСЃС‚Рё.

[Р’РР”Р•Рћ]
РЈРїСЂР°Р¶РЅРµРЅРёРµ РґР»СЏ С€РµР№РЅРѕРіРѕ РѕС‚РґРµР»Р°

РС‚Р°Рє РІС‹РІРѕРґС‹ Рѕ С‚РѕРј, С‡С‚Рѕ РІР°Р¶РЅРѕ РґР»СЏ РєРѕСЂСЂРµРєС‚РЅРѕР№ СЂР°Р±РѕС‚С‹ СЃСѓСЃС‚Р°РІРѕРІ: 

вњ… РґРѕСЃС‚Р°С‚РѕС‡РЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ Р¶РёРґРєРѕСЃС‚Рё РІ РѕСЂРіР°РЅРёР·РјРµ

вњ… СЃРѕР±Р»СЋРґРµРЅРёРµ СЂРµРіСѓР»СЏСЂРЅРѕР№ Рё РєРѕСЂСЂРµРєС‚РЅРѕР№ РїРѕРґРІРёР¶РЅРѕСЃС‚Рё

вњ… СЃРѕР±Р»СЋРґРµРЅРёРµ СЂРµРіСѓР»СЏСЂРЅРѕР№ Рё РєРѕСЂСЂРµРєС‚РЅРѕР№ РЅР°РіСЂСѓР·РєРё

вњ… СЃРѕР±Р»СЋРґРµРЅРёРµ РєРѕСЂСЂРµРєС‚РЅРѕРіРѕ РїРѕР»РѕР¶РµРЅРёСЏ РїСЂРё СЂР°Р±РѕС‚Рµ

```

---

### `temp_upload/course1/week3.md` (1.63 KB)

```markdown
вќпёЏР’ РєР°Р¶РґРѕР№ РёР· С‚РµРј, С‚Р°Рє РёР»Рё РёРЅР°С‡Рµ, Р·Р°С‚СЂР°РіРёРІР°РµС‚СЃСЏ РІРѕРїСЂРѕСЃ РґРІРёР¶РµРЅРёСЏ Р¶РёРґРєРѕСЃС‚РµР№ РІ РѕСЂРіР°РЅРёР·РјРµ:  СЃРЅР°Р±Р¶РµРЅРёСЏ СЃСѓСЃС‚Р°РІР°РјРё СЃСѓСЃС‚Р°РІРЅРѕР№ Р¶РёРґРєРѕСЃС‚СЊСЋ, РґРІРёР¶РµРЅРёРµ РєСЂРѕРІРё, Р»РёРјС„С‹ Рё С‚Р°Рє РґР°Р»РµРµ.

Р”Р°РІР°Р№С‚Рµ РІСЃРїРѕРјРЅРёРј Рѕ С‚РѕРј, РєР°Рє РјРЅРѕРіРѕ РІ РѕСЂРіР°РЅРёР·РјРµ С‡РµР»РѕРІРµРєР° СЃРѕРґРµСЂР¶РёС‚СЃСЏ РІРѕРґС‹, Рё РєР°Рє СЃРёР»СЊРЅРѕ РєРѕСЂСЂРµРєС‚РЅР°СЏ СЂР°Р±РѕС‚Р° РѕСЂРіР°РЅРѕРІ Р·Р°РІРёСЃРёС‚ РѕС‚ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕРіРѕ РЅР°СЃС‹С‰РµРЅРёСЏ Р¶РёРґРєРѕСЃС‚СЊСЋ.

вќ—пёЏрџ’§Р–РёРґРєРѕСЃС‚Рё Рё РІРѕРґР° Р±СѓРґСѓС‚ СЂР°Р·РЅС‹РјРё РїРѕРЅСЏС‚РёСЏРјРё, С…РѕС‚СЏ РІСЃРµ РЅР°РїРёС‚РєРё РіРѕС‚РѕРІСЏС‚СЃСЏ В«РЅР° РІРѕРґРµВ», РѕРЅРё РЅРµ СЏРІР»СЏСЋС‚СЃСЏ Р’РћР”РћР™. 

РРјРµРЅРЅРѕ РїРѕСЌС‚РѕРјСѓ РІР°Р¶РЅРѕ РѕР±СЂР°С‰Р°С‚СЊ РІРЅРёРјР°РЅРёРµ РЅРµ РЅР° РѕР±С‰РёР№ РѕР±СЉРµРј Р¶РёРґРєРѕСЃС‚РµР№, Р° РЅР° РѕР±С‰РёР№ РѕР±СЉРµРј РїРѕС‚СЂРµР±Р»СЏРµРјРѕР№ Р’РћР”Р«. рџ’§вќ—пёЏ

[Р’РР”Р•Рћ]
Рћ С‚РµРјРїРµСЂР°С‚СѓСЂРµ Рё С‡Р°СЃС‚РѕС‚Рµ РїРѕС‚СЂРµР±Р»РµРЅРёСЏ РІРѕРґС‹

РС‚Р°Рє, РєР°РєРёРµ РјС‹ РјРѕР¶РµРј СЃРґРµР»Р°С‚СЊ РІС‹РІРѕРґС‹:

вњ… РґР»СЏ РїРѕРґРґРµСЂР¶Р°РЅРёСЏ РєРѕСЂСЂРµРєС‚РЅРѕР№ СЂР°Р±РѕС‚С‹ РІСЃРµС… РІР°Р¶РЅС‹С… Рё С„СѓРЅРєС†РёРѕРЅР°Р»СЊРЅС‹С… РїСЂРѕС†РµСЃСЃРѕРІ РІ РѕСЂРіР°РЅРёР·РјРµ С‡РµР»РѕРІРµРєР°, РЅСѓР¶РЅРѕ РѕР±РµСЃРїРµС‡РёС‚СЊ РґРѕСЃС‚Р°С‚РѕС‡РЅРѕРµ РїРѕС‚СЂРµР±Р»РµРЅРёРµ Р’РћР”Р«;

вњ… РґР»СЏ РЅР°РёР»СѓС‡С€РµРіРѕ СѓСЃРІРѕРµРЅРёСЏ РІРѕРґС‹, РЅСѓР¶РЅРѕ СЃРѕР±Р»СЋРґР°С‚СЊ РµРµ С‚РµРјРїРµСЂР°С‚СѓСЂРЅС‹Р№ СЂРµР¶РёРј;

вњ… СѓРїРѕС‚СЂРµР±Р»СЏС‚СЊ РІРѕРґСѓ С‚Р°Рє С‡Р°СЃС‚Рѕ, РєР°Рє СЌС‚РѕРіРѕ РїСЂРѕСЃРёС‚ РѕСЂРіР°РЅРёР·Рј.

```

---

### `temp_upload/course1/week4.md` (3.04 KB)

```markdown
Р”С‹С…Р°РЅРёРµ.

Р РѕР¶РґР°СЏСЃСЊ, РїРµСЂРІС‹Рј РІРґРѕС…РѕРј РјС‹ СЂР°СЃРєСЂС‹РІР°РµРј СЃРІРѕРё Р»РµРіРєРёРµ, Рё Р·Р°РїСѓСЃРєР°РµРј РїРѕР»СѓС‡РµРЅРЅС‹Рј РєРёСЃР»РѕСЂРѕРґРѕРј РїСЂРѕС†РµСЃСЃС‹, РєРѕС‚РѕСЂС‹Рµ РЅР° РїСЂРѕС‚СЏР¶РµРЅРёРё РІСЃРµР№ Р¶РёР·РЅРё Р±СѓРґСѓС‚ СЂРµРіСѓР»РёСЂРѕРІР°С‚СЊСЃСЏ РёРјРµРЅРЅРѕ СЌС‚РёРј РїСЂРѕС†РµСЃСЃРѕРј.  

рџ«Ѓ Р’РґРѕС…РѕРј Рё РІС‹РґРѕС…РѕРј. рџ«Ѓ

РўР°РєРѕР№ РІСЂРѕРґРµ Р±С‹ РїСЂРѕСЃС‚РѕР№ Рё РїРѕРЅСЏС‚РЅС‹Р№ РїСЂРѕС†РµСЃСЃ РЅР° СЃР°РјРѕРј РґРµР»Рµ РЅРµ С‚Р°Рє РїСЂРѕСЃС‚, Рё РїРѕРЅСЏС‚РµРЅ! 

Р’РµРґСЊ РґС‹С…Р°РЅРёРµРј РјС‹ РЅРµ С‚РѕР»СЊРєРѕ Р»РµРіРєРёРµ рџ«Ѓ РЅР°СЃС‹С‰Р°РµРј РєРёСЃР»РѕСЂРѕРґРѕРј, Р° С‚Р°Рє Р¶Рµ РЅР°С€Сѓ РєСЂРѕРІСЊ рџ©ё, Рё РіРѕР»РѕРІРЅРѕР№ РјРѕР·Рі рџ§ .

Рђ РµС‰Рµ, РїРѕР»РЅРѕС†РµРЅРЅРѕРµ РґС‹С…Р°РЅРёРµ РЅСѓР¶РЅРѕ РґР»СЏ СЂР°Р±РѕС‚С‹ РІСЃРµС… РІРЅСѓС‚СЂРµРЅРЅРёС… РѕСЂРіР°РЅРѕРІ: С‡РµСЂРµР· РјР°СЃСЃР°Р¶ РІРЅСѓС‚СЂРµРЅРЅРёС… РѕСЂРіР°РЅРѕРІ РїРѕСЃСЂРµРґСЃС‚РІРѕРј РґРёР°С„СЂР°РіРј РІ РѕСЂРіР°РЅРёР·РјРµ. 

Р’РµРґСЊ РєРѕРіРґР° РѕРЅРё РѕР±РµР·РґРІРёР¶РµРЅС‹ - РЅР°СЂСѓС€Р°РµС‚СЃСЏ РµСЃС‚РµСЃС‚РІРµРЅРЅР°СЏ Рё РєРѕСЂСЂРµРєС‚РЅР°СЏ РёС… СЂР°Р±РѕС‚Р°!

[Р’РР”Р•Рћ]
Рћ РІР°Р¶РЅРѕСЃС‚Рё РґС‹С…Р°РЅРёСЏ

РС‚Р°Рє, РІР°Р¶РЅРѕСЃС‚СЊ РґС‹С…Р°РЅРёСЏ, Рё РєРѕСЂСЂРµРєС‚РЅРѕР№ СЂР°Р±РѕС‚С‹ Р»РµРіРєРёС…, СЂРµР±РµСЂ Рё РґРёР°С„СЂР°РіРј Р’С‹ РїРѕРЅСЏР»Рё. 

рџ¤” РћСЃС‚Р°Р»РѕСЃСЊ РїРѕРЅСЏС‚СЊ РєР°Рє РїСЂРё С‚РµРєСѓС‰РµРј, РїРѕРІР°Р»СЊРЅРѕ СЃРёРґСЏС‡РµРј РѕР±СЂР°Р·Рµ Р¶РёР·РЅРё Рё СЂР°Р±РѕС‚С‹, СЃС‚СЂРµСЃСЃР°С… Рё СЌРјРѕС†РёРѕРЅР°Р»СЊРЅС‹С… РЅР°РіСЂСѓР·РєР°С… В«СЃРІРѕСЂР°С‡РёРІР°С‰РёС…В» РЅР°СЃ РІ В«СѓР»РёС‚РѕС‡РєСѓВ» СЃРѕС…СЂР°РЅРёС‚СЊ РёР»Рё РІРѕСЃСЃС‚Р°РЅРѕРІРёС‚СЊ СЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ РїРѕР»РЅРѕС†РµРЅРЅРѕ РґС‹С€Р°С‚СЊ.

рџ”ё РњС‹ РїСЂРµРґР»Р°РіР°РµРј Р’Р°Рј РІРѕСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ РґРІСѓРјСЏ РїСЂРѕСЃС‚С‹РјРё СѓРїСЂР°Р¶РЅРµРЅРёСЏРјРё, РєРѕС‚РѕСЂС‹Рµ Р’С‹ РјРѕР¶РµС‚Рµ РґРµР»Р°С‚СЊ РІ Р»СЋР±РѕРј РјРµСЃС‚Рµ, Рё РІ Р»СЋР±РѕРµ РІСЂРµРјСЏ. 
вќпёЏР”Р»СЏ СЌС‚РѕРіРѕ Р’Р°Рј РЅРµ РЅСѓР¶РЅС‹  РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ Р°РєСЃРµСЃСѓР°СЂС‹.  

рџ’Є РўРѕР»СЊРєРѕ Р’С‹ СЃР°РјРё. вќ¤пёЏ

вќпёЏРџСЂРё РІС‹РїРѕР»РЅРµРЅРёРё Р»СЋР±РѕРіРѕ СѓРїСЂР°Р¶РЅРµРЅРёСЏ С„РѕРєСѓСЃРёСЂСѓР№С‚РµСЃСЊ РЅР° СЂРµРіСѓР»СЏСЂРЅРѕСЃС‚Рё РІС‹РїРѕР»РЅРµРЅРёСЏ Рё РѕС‰СѓС‰РµРЅРёСЏС… РІ С‚РµР»Рµ.

рџ¤І РўРµС…РЅРёРєР°, РїСЂР°РІРёР»СЊРЅРѕСЃС‚СЊ Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё РїСЂРѕСЏРІР»СЏСЋС‚СЃСЏ СЃРїСѓСЃС‚СЏ РІСЂРµРјСЏ РїСЂР°РєС‚РёРєРё (РёРјРµРЅРЅРѕ РѕР± СЌС‚РѕРј С€Р»Р° СЂРµС‡СЊ, РєРѕРіРґР° РјС‹ СѓРїРѕРјРёРЅР°Р»Рё Рѕ РґРёСЃС†РёРїР»РёРЅРµ Рё СЃР»РѕР¶РЅРѕСЃС‚СЏС…).

[Р’РР”Р•Рћ]
1пёЏвѓЈ РЈРїСЂР°Р¶РЅРµРЅРёРµ 
РљСЂСѓРіРѕРІРѕРµ СЂР°СЃРєСЂС‹С‚РёРµ СЂСѓРє РІРѕРєСЂСѓРі РєРѕСЂРїСѓСЃР°
[Р’РР”Р•Рћ]
2пёЏвѓЈ РЈРїСЂР°Р¶РЅРµРЅРёРµ 
Р“РѕСЂРёР·РѕРЅС‚Р°Р»СЊРЅРѕРµ СЂР°СЃРєСЂС‹С‚РёРµ СЂСѓРє

РџСЂРё РІС‹РїРѕР»РЅРµРЅРёРё СѓРїСЂР°Р¶РЅРµРЅРёР№ Р’Р°Рј РЅРµРѕР±С…РѕРґРёРјРѕ "СЃРІСЏР·Р°С‚СЊ" РјРµР¶РґСѓ СЃРѕР±РѕР№ РґРІРёР¶РµРЅРёСЏ: 

* РґРІРёР¶РµРЅРёРµ СЂСѓРє РІРІРµСЂС… - РІРґРѕС… 

* РґРІРёР¶РµРЅРёРµ СЂСѓРє РІРЅРёР· - РІС‹РґРѕС… 

* РґРІРёР¶РµРЅРёРµ СЂСѓРє РѕС‚ СЃРµР±СЏ - РІРґРѕС… 

* РґРІРёР¶РµРЅРёРµ СЂСѓРє Рє СЃРµР±Рµ  - РІС‹РґРѕС….

```

---

### `temp_upload/templates/lesson_template.md` (1.83 KB)

```markdown
# Шаблон урока MasterMarat

## TITLE: О важности индивидуального подхода

## VIDEO: lesson01.mp4

## THUMBNAIL: lesson01.jpg

## CONTENT_POINTS:

- Движение (здоровые суставы)
- Водный баланс (жидкости в организме)
- Дыхание (без него остальное - бессмысленно)

## IMPORTANT_NOTES:

- На самом деле «слонов» намного больше, потому что человеческий
  организм похож на автомобиль
- Каждый орган, каждый цикл, каждый гормон важны и тесно связаны между
  собой
- При нарушении работы любого из отделов дисфункция проявится и на
  других

## ADDITIONAL_INFO:

- В этом курсе будет дана краткая информация для понимания механики
  работы
- Объем достаточный для понимания концепции подачи информации
- Базовые рекомендации при регулярном использовании дадут
  положительный результат

## MATERIALS:

[PDF] workbook.pdf | Рабочая тетрадь к уроку [PDF] exercises.pdf |
Упражнения для самостоятельной работы [LINK]
https://youtube.com/watch?v=xxx | Дополнительное видео на YouTube

## NOTES:

Здесь можно писать любые заметки для себя, они не попадут в финальный
JSON. Например: записано в студии 15.06.2024, нужно перезаписать
вступление.

```

---

### `workers/api/src/utils/cors.readme.md` (0 KB)

```markdown
[EMPTY FILE]
```

---

### `workers/api/src/utils/errors.readme.md` (0 KB)

```markdown
[EMPTY FILE]
```

---

### `working-files.md` (1.97 KB)

```markdown
# Working Files - MasterMarat

*Generated: 2025-07-03 16:26*

**Total: 44 files**

## API Config (2)

- `workers\api\src\config\constants.js`
- `workers\api\src\config\courses.js`

## API Core (2)

- `workers\api\src\templates\base.js`
- `workers\api\src\worker-new.js`

## API Handlers (7)

- `workers\api\src\handlers\api.js`
- `workers\api\src\handlers\player-archive.js`
- `workers\api\src\handlers\player-learning.js`
- `workers\api\src\handlers\test.js`
- `workers\api\src\handlers\thumbnails.js`
- `workers\api\src\handlers\video.js`
- `workers\api\src\handlers\webhooks.js`

## API Services (3)

- `workers\api\src\services\auth.js`
- `workers\api\src\services\content.js`
- `workers\api\src\services\sendpulse.js`

## API Utils (3)

- `workers\api\src\utils\cors.js`
- `workers\api\src\utils\errors.js`
- `workers\api\src\utils\token.js`

## Course Content (8)

- `temp_upload\content\course1\week1_lesson1.json`
- `temp_upload\content\course1\week1_lesson2.json`
- `temp_upload\content\course1\week2_lesson1.json`
- `temp_upload\content\course1\week2_lesson2.json`
- `temp_upload\content\course1\week3_lesson1.json`
- `temp_upload\content\course1\week3_lesson2.json`
- `temp_upload\content\course1\week4_lesson1.json`
- `temp_upload\content\course1\week4_lesson2.json`

## Other (9)

- `.eslintrc.js`
- `.vscode\settings.json`
- `data\courses-database.json`
- `eslint.config.js`
- `scripts\test-api.js`
- `scripts\upload_content_to_r2.js`
- `workers\api\package.json`
- `workers\api\package-lock.json`
- `workers\api\wrangler.toml`

## Project Config (2)

- `.gitignore`
- `package.json`

## Scripts (8)

- `scripts\export-project-structure.ps1`
- `scripts\export-structure.ps1`
- `scripts\export-working-files.ps1`
- `scripts\lesson-converter.ps1`
- `scripts\simple-lesson-converter.ps1`
- `temp_upload\scripts\git_upload.ps1`
- `temp_upload\scripts\lesson-converter-en.ps1`
- `temp_upload\scripts\multi-course-editor.ps1`


```

---

### `working-files-content.md` (1047.66 KB)

```markdown
# Working Files with Content - MasterMarat Project

*Generated: 2025-07-05 18:35*

**Total: 69 files**

---

## API Config (2)

### `workers/api/src/config/constants.js` (2.29 KB)

```javascript
// config/constants.js
export const API_VERSION = '1.0.0';

// Токены для тестирования
export const TEST_TOKENS = {
  // SuperUser - полный доступ ко всему
  SUPER_USER: 'superuser_mastermarat_2025',

  // Токены по типам подписки
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',

  // Специальные токены
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// Права доступа по типам токенов
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: [
      'course01',
      'course02',
      'course03',
      'course04',
      'course05',
      'course06',
      'course07',
      'course08'
    ],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course01'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course01'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course01', 'course00'], // Добавлен доступ к демо-курсу
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL конфигурация
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};

// Публичные курсы (доступны без токена)
export const PUBLIC_COURSES = ['course00'];

// Публичные уроки (доступны без токена)
export const PUBLIC_LESSONS = {
  course00: ['demo001', 'demo002', 'demo003'] // Список демо-уроков
};

```

---

### `workers/api/src/config/courses.js` (10.51 KB)

```javascript
// config/courses.js - обновленная структура с lesson001-999
export const COURSE_DATA = {
  course01: {
    title: 'Механика здоровья',
    lessons: {
      lesson001: {
        title: '"Три Слона" в Механике Здоровья',
        video_file: 'lesson001.mp4',
        thumbnail_file: 'lesson001.jpg',
        content_points: [
          'Движение (здоровые суставы)',
          'Водный баланс (жидкости в организме)',
          'Дыхание (без него остальное - бессмысленно)'
        ],
        important_notes: [
          'На самом деле «слонов» намного больше, потому что человеческий организм похож на автомобиль: без корректной работы любого из «отделов» человеческого организма будет малая поломка - последует другая. В итоге, «механизм остановится»',
          'Каждый орган, каждый цикл, каждый гормон, клетка или ткань человеческого организма — важны и тесно связаны между собой.',
          'При нарушении работы любого из отделов человеческого организма дисфункция проявится и на других. Вопрос во времени проявления цепочки дисфункций.'
        ],
        additional_info: [
          'В этом, вводном курсе, будет дана кратко информация для понимания механики работы по каждому из сегментов, и пара рекомендаций для поддержания баланса.',
          'Объем достаточный для понимания концепции подачи информации и понимания в теме о которой говорим.',
          'Базовые рекомендации, которые будут даны в этом курсе, при регулярном использовании, дадут положительный результат на организм.'
        ],
        materials: [
          {
            type: 'pdf',
            title: 'Методичка по трем слонам',
            file: 'lesson001_guide.pdf'
          },
          {
            type: 'link',
            title: 'Дополнительное видео на YouTube',
            url: 'https://youtube.com/...'
          }
        ]
      },
      lesson002: {
        title: 'Основы правильной осанки',
        video_file: 'lesson002.mp4',
        thumbnail_file: 'lesson002.jpg',
        content_points: [
          'Анатомия позвоночника и его естественные изгибы',
          'Признаки правильной и неправильной осанки',
          'Простые упражнения для улучшения осанки'
        ],
        important_notes:
          'Выполняйте упражнения перед зеркалом для контроля правильности положения тела. При болях в спине проконсультируйтесь с врачом.',
        additional_info:
          'Правильная осанка - основа здоровья всего организма. Уделяйте внимание осанке в течение всего дня, особенно при работе за компьютером.'
      },
      lesson003: {
        title: 'Работа с позвоночником',
        video_file: 'lesson003.mp4',
        thumbnail_file: 'lesson003.jpg',
        content_points: [
          'Безопасная мобилизация позвоночника',
          'Упражнения для каждого отдела позвоночника',
          'Техники снятия напряжения в спине'
        ],
        important_notes:
          'Все движения выполняйте плавно, без рывков. При головокружении прекратите выполнение упражнений.',
        additional_info:
          'Регулярная практика этих упражнений поможет улучшить гибкость позвоночника и снизить риск болей в спине.'
      },
      lesson004: {
        title: 'Упражнения для шеи',
        video_file: 'lesson004.mp4',
        thumbnail_file: 'lesson004.jpg',
        content_points: [
          'Анатомия шейного отдела и его особенности',
          'Безопасные упражнения для снятия напряжения в шее',
          'Профилактика головных болей напряжения'
        ],
        important_notes:
          'Упражнения для шеи требуют особой осторожности. Не делайте резких движений и круговых вращений головой.',
        additional_info:
          'Эти упражнения особенно полезны для людей, работающих за компьютером. Выполняйте их каждые 2-3 часа в течение рабочего дня.'
      },
      lesson005: {
        title: 'Техники самомассажа',
        video_file: 'lesson005.mp4',
        thumbnail_file: 'lesson005.jpg',
        content_points: [
          'Основные приемы самомассажа',
          'Работа с триггерными точками',
          'Использование подручных средств для массажа'
        ],
        important_notes:
          'При самомассаже избегайте сильного давления на позвоночник, лимфоузлы и области с воспалениями.',
        additional_info:
          'Самомассаж - эффективный способ снятия мышечного напряжения. Лучшее время для массажа - после теплого душа или ванны.'
      },
      lesson006: {
        title: 'Снятие мышечных блоков',
        video_file: 'lesson006.mp4',
        thumbnail_file: 'lesson006.jpg',
        content_points: [
          'Что такое мышечные блоки и почему они возникают',
          'Техники глубокого расслабления мышц',
          'Дыхательные упражнения для снятия напряжения'
        ],
        important_notes:
          'Дыхание - ключ к расслаблению. Следите за ритмом дыхания во время выполнения всех упражнений.',
        additional_info:
          'Регулярная практика поможет вам научиться быстро снимать напряжение в любой ситуации.'
      },
      lesson007: {
        title: 'Интеграция движений',
        video_file: 'lesson007.mp4',
        thumbnail_file: 'lesson007.jpg',
        content_points: [
          'Соединение изученных техник в единый комплекс',
          'Создание индивидуальной программы упражнений',
          'Адаптация упражнений под ваши потребности'
        ],
        important_notes:
          'На этом этапе важно прислушиваться к своему телу и выбирать те упражнения, которые приносят наибольшую пользу именно вам.',
        additional_info:
          'Создайте свой ежедневный 15-минутный комплекс из наиболее эффективных для вас упражнений.'
      },
      lesson008: {
        title: 'Ежедневная практика',
        video_file: 'lesson008.mp4',
        thumbnail_file: 'lesson008.jpg',
        content_points: [
          'Как встроить упражнения в повседневную жизнь',
          'Мини-комплексы для офиса и дома',
          'Поддержание результатов и дальнейшее развитие'
        ],
        important_notes:
          'Регулярность важнее интенсивности. Лучше заниматься по 10 минут каждый день, чем час раз в неделю.',
        additional_info:
          'Поздравляем с завершением курса! Продолжайте практику, и ваше тело скажет вам спасибо.'
      }
    }
  },
  course00: {
    title: 'Демо-курс',
    demo: true, // Флаг для доступа без токена
    lessons: {
      demo001: {
        title: 'Знакомство с методикой',
        video_file: 'demo001.mp4',
        thumbnail_file: 'demo001.jpg',
        content_points: [
          'Что такое остеопатия',
          'Основные принципы работы',
          'Что вы получите от курсов'
        ],
        important_notes:
          'Это демонстрационный урок. Полный курс содержит более 20 уроков с детальной проработкой каждой темы.',
        additional_info:
          'После просмотра демо-урока вы можете приобрести полный доступ к курсам.'
      }
    }
  }
};

// Вспомогательная функция для получения всех уроков курса
export function getCourseLessons(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return [];

  return Object.entries(course.lessons)
    .map(([id, lesson]) => ({ id, ...lesson }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

// Проверка, является ли курс демо
export function isDemoCourse(courseId) {
  const course = COURSE_DATA[courseId];
  return course && course.demo === true;
}

```

---

## API Core (2)

### `workers/api/src/templates/base.js` (1.51 KB)

```javascript
// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return <!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    
    
</body>
</html>;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return 
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster=""
            id="lesson-video"
        >
            <source src="" type="video/mp4">
            Ваш браузер не поддерживает видео.
        </video>
    </div>
  ;
}

```

---

### `workers/api/src/worker-new.js` (2.12 KB)

```javascript
// worker-new.js - только роутинг
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// Импортируем обработчики
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Роутинг запросов
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // НОВЫЙ: Тестовая страница
      if (url.pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 для неизвестных маршрутов
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};

```

---

## API Handlers (7)

### `workers/api/src/handlers/api.js` (1.73 KB)

```javascript
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}
```

---

### `workers/api/src/handlers/player-archive.js` (9.88 KB)

```javascript
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
```

---

### `workers/api/src/handlers/player-learning.js` (17.67 KB)

```javascript
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
```

---

### `workers/api/src/handlers/test.js` (2.05 KB)

```javascript
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // Тестируем все токены
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1> MasterMarat Token Testing</h1>
    <p>Используйте эти токены для тестирования разных уровней доступа:</p>
    
    <div class="token-box">
        <h3> Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=superuser_mastermarat_2025">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=superuser_mastermarat_2025">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=demo123">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=expired_test_token">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}

```

---

### `workers/api/src/handlers/thumbnails.js` (1.54 KB)

```javascript
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

```

---

### `workers/api/src/handlers/video.js` (3.56 KB)

```javascript
// handlers/video.js
import {
  createCorsResponse,
  createUnauthorizedResponse,
  createNotFoundResponse
} from '../utils/errors.js';
import { validateTokenFormat, hasAccess } from '../utils/token.js';
import { COURSE_DATA } from '../config/courses.js';
import { isPublicAccess } from '../utils/token.js';

export async function handleVideo(request, env, ctx) {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(p => p);

  if (pathParts.length < 3) {
    return createNotFoundResponse('Video');
  }

  const courseId = pathParts[1];
  const fileName = pathParts[2];
  const token = url.searchParams.get('token');

  // РР·РІР»РµРєР°РµРј lessonId РёР· РёРјРµРЅРё С„Р°Р№Р»Р°
  const lessonId = fileName.replace('.mp4', '');
  const isPublic = isPublicAccess(courseId, lessonId);

  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ С‚РѕР»СЊРєРѕ РґР»СЏ РЅРµРїСѓР±Р»РёС‡РЅС‹С… РєСѓСЂСЃРѕРІ
  if (!isPublic) {
    if (!token) {
      return createUnauthorizedResponse('Token required');
    }

    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
    const accessCheck = hasAccess(token, courseId, 'player');
    if (!accessCheck.allowed) {
      return createUnauthorizedResponse(accessCheck.reason);
    }
  }

  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;

  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonData = course.lessons[lessonId];

    if (lessonData && lessonData.video_file) {
      videoKey = `content/${courseId}/${lessonData.video_file}`;
    }
  }

  try {
    const range = request.headers.get('range');

    if (range) {
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
        headers.set(
          'Content-Type',
          video.httpMetadata?.contentType || 'video/mp4'
        );
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

    // РћР±С‹С‡РЅС‹Р№ Р·Р°РїСЂРѕСЃ Р±РµР· range
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

```

---

### `workers/api/src/handlers/webhooks.js` (1.25 KB)

```javascript
// handlers/webhooks.js
import { createCorsResponse } from '../utils/cors.js';
import { createBadRequestResponse } from '../utils/errors.js';
import { generateSimpleToken } from '../utils/token.js';

export async function handleWebhooks(request, env, ctx) {
  try {
    const webhook = await request.json();

    // Генерируем токен для пользователя
    const userToken = generateSimpleToken(
      webhook.email || 'test@example.com',
      webhook.course_id || 'course1'
    );

    // TODO: Обновить контакт в SendPulse через API
    // await updateSendPulseContact(webhook.email, {
    //   access_token: userToken,
    //   purchase_date: new Date().toISOString(),
    //   subscription_type: webhook.subscription_type
    // });

    return createCorsResponse(
      JSON.stringify({
        status: 'success',
        message: 'Webhook processed successfully',
        user_token: userToken,
        received_data: webhook,
        note: 'Token will be sent in first course email'
      }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Webhook processing error:', error);
    return createBadRequestResponse('Invalid webhook data');
  }
}

```

---

## API Services (3)

### `workers/api/src/services/auth.js` (1.02 KB)

```javascript
// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Проверка через SendPulse API
  // Пока простая проверка для демо
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // Проверяем что токен для правильного курса
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: Получить email из SendPulse по хешу
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}

```

---

### `workers/api/src/services/content.js` (1.61 KB)

```javascript
// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = content//;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = content//;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Группируем уроки по неделям
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}

```

---

### `workers/api/src/services/sendpulse.js` (0.8 KB)

```javascript
// services/sendpulse.js
const SENDPULSE_API_URL = 'https://api.sendpulse.com';

export async function verifyPurchaseToken(token) {
  // TODO: Реальная проверка через SendPulse API
  console.log('Verifying token with SendPulse:', token);
  
  return {
    valid: true,
    email: 'user@example.com',
    subscription_type: 'standard'
  };
}

export async function updateUserProgress(email, courseId, lessonId) {
  // TODO: Обновить прогресс в SendPulse
  console.log(Updating progress for : /);
  
  return { success: true };
}

export async function getUserSubscription(email) {
  // TODO: Получить данные подписки из SendPulse
  return {
    email,
    active: true,
    type: 'standard',
    expires: '2025-12-31',
    courses: ['course1']
  };
}

```

---

## API Utils (3)

### `workers/api/src/utils/cors.js` (0.74 KB)

```javascript
// utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Range',
  'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
};

export function addCorsHeaders(response) {
  const headers = new Headers(response.headers);
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    headers.set(key, value);
  });
  
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export function createCorsResponse(body, init = {}) {
  return new Response(body, {
    ...init,
    headers: {
      ...CORS_HEADERS,
      ...init.headers
    }
  });
}

```

---

### `workers/api/src/utils/errors.js` (0.79 KB)

```javascript
// utils/errors.js
import { CORS_HEADERS } from './cors.js';

export function createErrorResponse(message, status = 400, details = null) {
  const body = {
    status: 'error',
    message,
    ...(details && { details })
  };
  
  return new Response(JSON.stringify(body, null, 2), {
    status,
    headers: {
      ...CORS_HEADERS,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
}

export function createNotFoundResponse(resource) {
  return createErrorResponse(`${resource} not found`, 404);
}

export function createUnauthorizedResponse(reason = 'Unauthorized') {
  return createErrorResponse(reason, 401);
}

export { createCorsResponse } from './cors.js';
export function createBadRequestResponse(message, details = null) {
  return createErrorResponse(message, 400, details);
}

```

---

### `workers/api/src/utils/token.js` (5.07 KB)

```javascript
// utils/token.js
import { PUBLIC_COURSES, PUBLIC_LESSONS } from '../config/constants.js';
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

/**
 * Генерирует токен доступа на основе email и курса
 * @param {string} email - Email пользователя
 * @param {string|null} courseId - ID курса (опционально)
 * @returns {string} Сгенерированный токен
 */
export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

/**
 * Проверяет формат токена
 * @param {string} token - Токен для проверки
 * @returns {boolean} true если токен валидный
 */
export function validateTokenFormat(token) {
  // Проверяем тестовые токены
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }

  // Проверяем формат обычных токенов
  return token && token.length >= 3 && token.includes('_');
}

/**
 * Парсит информацию из токена
 * @param {string} token - Токен для парсинга
 * @returns {Object} Объект с информацией о токене
 * @returns {boolean} returns.isTestToken - Является ли токен тестовым
 * @returns {Object} returns.permissions - Права доступа (для тестовых токенов)
 * @returns {string} returns.emailHash - Хеш email (для обычных токенов)
 * @returns {string|null} returns.courseId - ID курса (для обычных токенов)
 * @returns {string} returns.timestamp - Временная метка (для обычных токенов)
 */
export function parseTokenInfo(token) {
  // Для тестовых токенов возвращаем их права
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }

  // Для обычных токенов парсим структуру
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

/**
 * Проверяет доступ токена к курсу и функции
 * @param {string} token - Токен доступа
 * @param {string} courseId - ID курса (например, 'course01')
 * @param {string} [feature='player'] - Функция для проверки ('player', 'archive', 'download')
 * @returns {{allowed: boolean, reason?: string, permissions?: Object}} Результат проверки
 */
export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);

  // Для тестовых токенов проверяем права
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;

    // Проверяем не истек ли токен
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }

    // SuperUser имеет доступ ко всему
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }

    // Проверяем доступ к курсу
    const hasCourseAccess =
      perms.courses.includes('*') || perms.courses.includes(courseId);

    // Проверяем доступ к функции
    const hasFeatureAccess = perms.features.includes(feature);

    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }

    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }

    return { allowed: true, permissions: perms };
  }

  // Для обычных токенов - простая проверка
  // TODO: интеграция с SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}

/**
 * Генерирует простой токен без привязки к email
 * @returns {string} Случайный токен
 */
export function generateSimpleToken() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Проверяет публичный доступ к курсу или уроку
 * @param {string} courseId - ID курса
 * @param {string|null} [lessonId=null] - ID урока (опционально)
 * @returns {boolean} true если доступ публичный
 */
export function isPublicAccess(courseId, lessonId = null) {
  // Проверяем, является ли курс публичным
  if (PUBLIC_COURSES.includes(courseId)) {
    // Если указан урок, проверяем его в списке публичных
    if (lessonId) {
      const publicLessons = PUBLIC_LESSONS[courseId] || [];
      return publicLessons.includes(lessonId);
    }
    return true;
  }
  return false;
}

```

---

## Documentation (30)

### `chats/chat_claude-opus_02_07_2025.md` (201.88 KB)

```markdown
РњС‹ СЃ Sonnet РЅР°С‡Р°Р»Рё РґРµР»Р°С‚СЊ СЂРµС„Р°РєС‚РѕСЂРёРЅРі РїСЂРѕРµРєС‚Р°.
РћР±СЂР°Р±РѕС‚С‡РёРєРё.md РњРѕРґСѓР»Рё.md
Р’ РїР°РїРєРµ РїСЂРѕРµРєС‚Р° РїСЂРµРґС‹РґСѓС‰Р°СЏ РІРµСЂСЃРёСЏ РІСЃРµС… С„Р°Р№Р»РѕРІ.
РџРѕСЃРјРѕС‚СЂРё РЅРѕРІС‹Р№ README.md
РћРЅ РЅР°РїРёСЃР°Р», С‡С‚Рѕ СЃРµСЂРІРёСЃС‹ Рё С€Р°Р±Р»РѕРЅС‹ РЅРµ СЃРѕР·РґР°РЅС‹, РЅРѕРІР°СЏ РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РЅРµ РїСЂРѕС‚РµСЃС‚РёСЂРѕРІР°РЅР°.РЇ РёР·СѓС‡Сѓ С‚РµРєСѓС‰СѓСЋ СЃРёС‚СѓР°С†РёСЋ СЃ СЂРµС„Р°РєС‚РѕСЂРёРЅРіРѕРј РїСЂРѕРµРєС‚Р°. Р”Р°Р№С‚Рµ РјРЅРµ РїСЂРѕРІРµСЂРёС‚СЊ РЅРѕРІС‹Рµ С„Р°Р№Р»С‹ Рё СЃС‚СЂСѓРєС‚СѓСЂСѓ.Searched project for вЂњREADME.md СЂРµС„Р°РєС‚РѕСЂРёРЅРі РЅРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°вЂќ1 resultchat_claude-sonnet_01_07_2026.md10 relevant sectionstextР”Р°Р№С‚Рµ РјРЅРµ РЅР°Р№С‚Рё Р±РѕР»РµРµ РїРѕРґСЂРѕР±РЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРµ РјРѕРґСѓР»РµР№.Searched project for вЂњhandlers utils config РјРѕРґСѓР»СЊРЅР°СЏ Р°СЂС…РёС‚РµРєС‚СѓСЂР° worker-new.jsвЂќ3 resultschat_claude-sonnet_01_07_2026.md7 relevant sectionstextREADME.mdtextРњРѕРґСѓР»Рё.md2 relevant sectionstextРџРѕР·РІРѕР»СЊС‚Рµ РјРЅРµ РїСЂРѕРІРµСЂРёС‚СЊ С„Р°Р№Р»С‹ "РћР±СЂР°Р±РѕС‚С‡РёРєРё.md" Рё "РњРѕРґСѓР»Рё.md" РІ РїСЂРѕРµРєС‚Рµ:Searched project for вЂњРћР±СЂР°Р±РѕС‚С‡РёРєРё.mdвЂќ3 resultschat_claude-sonnet_01_07_2026.md2 relevant sectionstextРћР±СЂР°Р±РѕС‚С‡РёРєРё.md2 relevant sectionstextРњРѕРґСѓР»Рё.mdtextSearched project for вЂњРњРѕРґСѓР»Рё.mdвЂќ2 resultsРњРѕРґСѓР»Рё.md3 relevant sectionstextchat_claude-sonnet_01_07_2026.md2 relevant sectionstextРћС‚Р»РёС‡РЅРѕ! РЇ РІРёР¶Сѓ, С‡С‚Рѕ РІС‹ СЃ Sonnet РЅР°С‡Р°Р»Рё СЂРµС„Р°РєС‚РѕСЂРёРЅРі РїСЂРѕРµРєС‚Р°. РР·СѓС‡РёР» РІСЃРµ С„Р°Р№Р»С‹, РєРѕС‚РѕСЂС‹Рµ РІС‹ Р·Р°РіСЂСѓР·РёР»Рё. Р’РёР¶Сѓ РїРѕР»РЅСѓСЋ РєР°СЂС‚РёРЅСѓ:
рџ“Љ РђРЅР°Р»РёР· С‚РµРєСѓС‰РµРіРѕ СЃРѕСЃС‚РѕСЏРЅРёСЏ
вњ… Р§С‚Рѕ СѓР¶Рµ СЃРґРµР»Р°РЅРѕ СЃ Sonnet:

РЎРѕР·РґР°РЅР° РјРѕРґСѓР»СЊРЅР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР° РІ src/:

config/ - РєРѕРЅС„РёРіСѓСЂР°С†РёРё (courses.js, constants.js)
handlers/ - РѕР±СЂР°Р±РѕС‚С‡РёРєРё РґР»СЏ РєР°Р¶РґРѕРіРѕ endpoint
utils/ - СѓС‚РёР»РёС‚С‹ (CORS, errors, token)
services/ Рё templates/ - СЃРѕР·РґР°РЅС‹ РїР°РїРєРё, РЅРѕ С„Р°Р№Р»С‹ РµС‰Рµ РЅРµ РґРѕР±Р°РІР»РµРЅС‹


РЎРѕР·РґР°РЅ РЅРѕРІС‹Р№ worker-new.js - С‡РёСЃС‚С‹Р№ СЂРѕСѓС‚РµСЂ РЅР° 30 СЃС‚СЂРѕРє РІРјРµСЃС‚Рѕ 500+
Р Р°Р·Р±РёС‚Р° Р»РѕРіРёРєР° РїРѕ РјРѕРґСѓР»СЏРј:

РљР°Р¶РґС‹Р№ endpoint РёРјРµРµС‚ СЃРІРѕР№ handler
РћР±С‰РёРµ С„СѓРЅРєС†РёРё РІС‹РЅРµСЃРµРЅС‹ РІ utils
Р”Р°РЅРЅС‹Рµ РєСѓСЂСЃРѕРІ РІ РѕС‚РґРµР»СЊРЅРѕР№ РєРѕРЅС„РёРіСѓСЂР°С†РёРё



вќЊ Р§С‚Рѕ РµС‰Рµ РЅРµ СЃРґРµР»Р°РЅРѕ:

Services РЅРµ СЃРѕР·РґР°РЅС‹:

auth.js - РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅРѕРІ Рё SendPulse API
sendpulse.js - РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
content.js - Р·Р°РіСЂСѓР·РєР° РєРѕРЅС‚РµРЅС‚Р° РёР· R2


Templates РЅРµ СЃРѕР·РґР°РЅС‹:

HTML С€Р°Р±Р»РѕРЅС‹ РґР»СЏ РїР»РµРµСЂРѕРІ РІС‹РЅРµСЃРµРЅС‹ РІ РѕС‚РґРµР»СЊРЅС‹Рµ С„Р°Р№Р»С‹
Р‘Р°Р·РѕРІС‹Рµ РєРѕРјРїРѕРЅРµРЅС‚С‹ РґР»СЏ РїРµСЂРµРёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ


РќРµ РїСЂРѕС‚РµСЃС‚РёСЂРѕРІР°РЅР° РЅРѕРІР°СЏ СЃС‚СЂСѓРєС‚СѓСЂР°:

worker-new.js РµС‰Рµ РЅРµ Р·Р°РјРµРЅРёР» СЃС‚Р°СЂС‹Р№ worker.js
РќСѓР¶РЅРѕ РїСЂРѕРІРµСЂРёС‚СЊ С‡С‚Рѕ РІСЃРµ РёРјРїРѕСЂС‚С‹ СЂР°Р±РѕС‚Р°СЋС‚



рџЋЇ РџР»Р°РЅ Р·Р°РІРµСЂС€РµРЅРёСЏ СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°:
РЁР°Рі 1: РЎРѕР·РґР°С‚СЊ РЅРµРґРѕСЃС‚Р°СЋС‰РёРµ СЃРµСЂРІРёСЃС‹
powershell# РЎРєСЂРёРїС‚ СЃРѕР·РґР°РЅРёСЏ СЃРµСЂРІРёСЃРѕРІ
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# services/auth.js
@"
// services/auth.js
import { validateTokenFormat, parseTokenInfo } from '../utils/token.js';

export async function checkTokenAccess(token, courseId, lessonId) {
  if (!validateTokenFormat(token)) {
    return { valid: false, reason: 'Invalid token format' };
  }

  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  // РџРѕРєР° РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР° РґР»СЏ РґРµРјРѕ
  if (token === 'demo123' || token === 'demo-token-123') {
    return { valid: true, demo: true };
  }

  // РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ С‚РѕРєРµРЅ РґР»СЏ РїСЂР°РІРёР»СЊРЅРѕРіРѕ РєСѓСЂСЃР°
  if (tokenInfo.courseId && tokenInfo.courseId !== courseId) {
    return { valid: false, reason: 'Token for different course' };
  }

  return { valid: true };
}

export async function getUserFromToken(token) {
  const tokenInfo = parseTokenInfo(token);
  
  // TODO: РџРѕР»СѓС‡РёС‚СЊ email РёР· SendPulse РїРѕ С…РµС€Сѓ
  return {
    email: 'user@example.com',
    subscription: 'standard',
    courses: ['course1']
  };
}
"@ | Out-File -FilePath "src\services\auth.js" -Encoding UTF8

# services/sendpulse.js
@"
// services/sendpulse.js
const SENDPULSE_API_URL = 'https://api.sendpulse.com';

export async function verifyPurchaseToken(token) {
  // TODO: Р РµР°Р»СЊРЅР°СЏ РїСЂРѕРІРµСЂРєР° С‡РµСЂРµР· SendPulse API
  console.log('Verifying token with SendPulse:', token);
  
  return {
    valid: true,
    email: 'user@example.com',
    subscription_type: 'standard'
  };
}

export async function updateUserProgress(email, courseId, lessonId) {
  // TODO: РћР±РЅРѕРІРёС‚СЊ РїСЂРѕРіСЂРµСЃСЃ РІ SendPulse
  console.log(`Updating progress for ${email}: ${courseId}/${lessonId}`);
  
  return { success: true };
}

export async function getUserSubscription(email) {
  // TODO: РџРѕР»СѓС‡РёС‚СЊ РґР°РЅРЅС‹Рµ РїРѕРґРїРёСЃРєРё РёР· SendPulse
  return {
    email,
    active: true,
    type: 'standard',
    expires: '2025-12-31',
    courses: ['course1']
  };
}
"@ | Out-File -FilePath "src\services\sendpulse.js" -Encoding UTF8

# services/content.js
@"
// services/content.js
import { COURSE_DATA } from '../config/courses.js';

export async function getVideoStream(env, courseId, fileName, range) {
  const videoKey = `content/${courseId}/${fileName}`;
  
  if (range) {
    const matches = range.match(/bytes=(\d+)-(\d*)/);
    if (matches) {
      const start = parseInt(matches[1], 10);
      const end = matches[2] ? parseInt(matches[2], 10) : undefined;
      
      return await env.R2.get(videoKey, {
        range: { offset: start, length: end ? end - start + 1 : undefined }
      });
    }
  }
  
  return await env.R2.get(videoKey);
}

export async function getThumbnail(env, courseId, fileName) {
  const thumbnailKey = `content/${courseId}/${fileName}`;
  return await env.R2.get(thumbnailKey);
}

export async function getLessonData(courseId, lessonId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  const lesson = course.lessons[lessonId];
  if (!lesson) return null;
  
  return {
    ...lesson,
    courseId,
    lessonId,
    courseTitle: course.title
  };
}

export async function getCourseStructure(courseId) {
  const course = COURSE_DATA[courseId];
  if (!course) return null;
  
  // Р“СЂСѓРїРїРёСЂСѓРµРј СѓСЂРѕРєРё РїРѕ РЅРµРґРµР»СЏРј
  const weeks = {};
  Object.entries(course.lessons).forEach(([lessonId, lesson]) => {
    const weekMatch = lessonId.match(/week(\d+)/);
    const weekNum = weekMatch ? parseInt(weekMatch[1]) : 1;
    
    if (!weeks[weekNum]) {
      weeks[weekNum] = [];
    }
    
    weeks[weekNum].push({
      id: lessonId,
      ...lesson
    });
  });
  
  return {
    title: course.title,
    weeks,
    totalLessons: Object.keys(course.lessons).length
  };
}
"@ | Out-File -FilePath "src\services\content.js" -Encoding UTF8

Write-Host "вњ… Р’СЃРµ СЃРµСЂРІРёСЃС‹ СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
РЁР°Рі 2: РЎРѕР·РґР°С‚СЊ HTML С€Р°Р±Р»РѕРЅС‹
powershell# templates/base.js
@"
// templates/base.js
export function createHtmlPage(title, content, scripts = '') {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - MasterMarat</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f5f5f5;
            color: #333;
        }
        .header {
            background: #3D968C;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        .video-container {
            background: #000;
            border-radius: 8px;
            overflow: hidden;
            margin: 20px 0;
        }
        video {
            width: 100%;
            height: auto;
            display: block;
        }
    </style>
</head>
<body>
    ${content}
    ${scripts}
</body>
</html>`;
}

export function createVideoPlayer(videoUrl, posterUrl) {
  return `
    <div class="video-container">
        <video 
            controls 
            preload="metadata"
            poster="${posterUrl}"
            id="lesson-video"
        >
            <source src="${videoUrl}" type="video/mp4">
            Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ.
        </video>
    </div>
  `;
}
"@ | Out-File -FilePath "src\templates\base.js" -Encoding UTF8

Write-Host "вњ… РЁР°Р±Р»РѕРЅС‹ СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green
РЁР°Рі 3: РћР±РЅРѕРІРёС‚СЊ package.json РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
powershell# РћР±РЅРѕРІР»СЏРµРј package.json РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂРѕР№
$packageJson = Get-Content "package.json" | ConvertFrom-Json
$packageJson.main = "src/worker-new.js"
$packageJson | ConvertTo-Json -Depth 10 | Out-File "package.json" -Encoding UTF8

Write-Host "вњ… package.json РѕР±РЅРѕРІР»РµРЅ!" -ForegroundColor Green
РЁР°Рі 4: РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ
powershell# Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅРѕРµ С‚РµСЃС‚РёСЂРѕРІР°РЅРёРµ
Write-Host "рџ§Є РўРµСЃС‚РёСЂСѓРµРј РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ..." -ForegroundColor Cyan
npm run dev
рџљЂ РЎР»РµРґСѓСЋС‰РёРµ РґРµР№СЃС‚РІРёСЏ:

Р—Р°РїСѓСЃС‚РёС‚СЊ СЃРєСЂРёРїС‚С‹ РІС‹С€Рµ РґР»СЏ СЃРѕР·РґР°РЅРёСЏ РЅРµРґРѕСЃС‚Р°СЋС‰РёС… С„Р°Р№Р»РѕРІ
РџСЂРѕС‚РµСЃС‚РёСЂРѕРІР°С‚СЊ Р»РѕРєР°Р»СЊРЅРѕ СЃ npm run dev
Р•СЃР»Рё РІСЃС‘ СЂР°Р±РѕС‚Р°РµС‚ - Р·Р°РјРµРЅРёС‚СЊ worker.js РЅР° worker-new.js
РЎРґРµР»Р°С‚СЊ commit СЃ РѕРїРёСЃР°РЅРёРµРј СЂРµС„Р°РєС‚РѕСЂРёРЅРіР°
Deploy РЅР° dev РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ РІ РѕР±Р»Р°РєРµ

Р“РѕС‚РѕРІС‹ РїСЂРѕРґРѕР»Р¶РёС‚СЊ? РќР°С‡РЅРµРј СЃ СЃРѕР·РґР°РЅРёСЏ СЃРµСЂРІРёСЃРѕРІ? рџЋЇР’{"status":"success","message":"MasterMarat API РґР»СЏ MVP РєСѓСЂСЃР° \"РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ\"","worker_url":"http://api.mastermarat.com","r2_connected":"Yes","endpoints":{"GET /":"Р­С‚Р° СЃС‚СЂР°РЅРёС†Р°","GET /player/{courseId}/{lessonId}?token=Y":"HTML РІРёРґРµРѕРїР»РµРµСЂ","GET /thumbnails/{courseId}/{filename}":"РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2","GET /video/{courseId}/{filename}?token=xxx":"Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming","POST /webhook/purchase":"Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ"},"test_links":{"player":"http://api.mastermarat.com/player/course1/week1_lesson1?token=demo123","thumbnail":"http://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg","video":"http://api.mastermarat.com/video/course1/week1_lesson1.mp4?token=demo123"},"course_structure":{"course1":{"title":"РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ","lessons":{"week1_lesson1":{"title":"Р’РІРµРґРµРЅРёРµ РІ Р±РёРѕРјРµС…Р°РЅРёРєСѓ С‚РµР»Р°","video_file":"test_video.mp4","thumbnail_file":"course1_week1_lesson1.jpg"},"week1_lesson2":{"title":"РћСЃРЅРѕРІС‹ РїСЂР°РІРёР»СЊРЅРѕР№ РѕСЃР°РЅРєРё","video_file":"test_video.mp4","thumbnail_file":"course1_week1_lesson2.jpg"},"week2_lesson1":{"title":"Р Р°Р±РѕС‚Р° СЃ РїРѕР·РІРѕРЅРѕС‡РЅРёРєРѕРј","video_file":"test_video.mp4","thumbnail_file":"course1_week2_lesson1.jpg"},"week2_lesson2":{"title":"РЈРїСЂР°Р¶РЅРµРЅРёСЏ РґР»СЏ С€РµРё","video_file":"test_video.mp4","thumbnail_file":"course1_week2_lesson2.jpg"},"week3_lesson1":{"title":"РўРµС…РЅРёРєРё СЃР°РјРѕРјР°СЃСЃР°Р¶Р°","video_file":"test_video.mp4","thumbnail_file":"course1_week3_lesson1.jpg"},"week3_lesson2":{"title":"РЎРЅСЏС‚РёРµ РјС‹С€РµС‡РЅС‹С… Р±Р»РѕРєРѕРІ","video_file":"test_video.mp4","thumbnail_file":"course1_week3_lesson2.jpg"},"week4_lesson1":{"title":"РРЅС‚РµРіСЂР°С†РёСЏ РґРІРёР¶РµРЅРёР№","video_file":"test_video.mp4","thumbnail_file":"course1_week4_lesson1.jpg"},"week4_lesson2":{"title":"Р•Р¶РµРґРЅРµРІРЅР°СЏ РїСЂР°РєС‚РёРєР°","video_file":"test_video.mp4","thumbnail_file":"course1_week4_lesson2.jpg"}}}},"timestamp":"2025-07-01T11:31:08.054Z"}

вЋ” Starting local server...
[wrangler:info] Ready on http://127.0.0.1:8787
[wrangler:info] GET / 200 OK (30ms)
[wrangler:info] GET /favicon.ico 200 OK (5ms)Р’РџСЂРµРґР¶Рµ С‡РµРј РїСЂРѕРґРѕР»Р¶РёРј, РЅСѓР¶РЅРѕ СЃРіРµРЅРµСЂРёСЂРѕРІР°С‚СЊ РІРµСЂРѕСЏС‚РЅРѕ, SuperUser token РґР»СЏ СѓРґРѕР±СЃС‚РІР° С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ С„СѓРЅРєС†РёРѕРЅР°Р»Р°рџ”ђ РЎРѕР·РґР°РЅРёРµ SuperUser С‚РѕРєРµРЅР° РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
РћС‚Р»РёС‡РЅР°СЏ РёРґРµСЏ! Р”Р°РІР°Р№С‚Рµ СЃРѕР·РґР°РґРёРј СЃРёСЃС‚РµРјСѓ С‚РѕРєРµРЅРѕРІ СЃ СЂР°Р·РЅС‹РјРё СѓСЂРѕРІРЅСЏРјРё РґРѕСЃС‚СѓРїР° РґР»СЏ СѓРґРѕР±РЅРѕРіРѕ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ.
рџ“ќ РЎРєСЂРёРїС‚ РґРѕР±Р°РІР»РµРЅРёСЏ SuperUser С‚РѕРєРµРЅРѕРІ
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РћР±РЅРѕРІР»СЏРµРј config/constants.js СЃ С‚РѕРєРµРЅР°РјРё РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
@"
// config/constants.js
export const API_VERSION = '1.0.0';

// РўРѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ
export const TEST_TOKENS = {
  // SuperUser - РїРѕР»РЅС‹Р№ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
  SUPER_USER: 'superuser_mastermarat_2025',
  
  // РўРѕРєРµРЅС‹ РїРѕ С‚РёРїР°Рј РїРѕРґРїРёСЃРєРё
  VIP_USER: 'vip_test_token_2025',
  STANDARD_USER: 'standard_test_token_2025',
  BASIC_USER: 'basic_test_token_2025',
  
  // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ С‚РѕРєРµРЅС‹
  DEMO_USER: 'demo123',
  EXPIRED_USER: 'expired_test_token',
  INVALID_USER: 'invalid_token'
};

// РџСЂР°РІР° РґРѕСЃС‚СѓРїР° РїРѕ С‚РёРїР°Рј С‚РѕРєРµРЅРѕРІ
export const TOKEN_PERMISSIONS = {
  [TEST_TOKENS.SUPER_USER]: {
    type: 'superuser',
    access: 'all',
    courses: ['*'],
    features: ['player', 'archive', 'download', 'admin'],
    expires: '2099-12-31'
  },
  [TEST_TOKENS.VIP_USER]: {
    type: 'vip',
    access: 'full',
    courses: ['course1', 'course2', 'course3'],
    features: ['player', 'archive', 'consultation'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.STANDARD_USER]: {
    type: 'standard',
    access: 'standard',
    courses: ['course1'],
    features: ['player', 'archive'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.BASIC_USER]: {
    type: 'basic',
    access: 'basic',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-12-31'
  },
  [TEST_TOKENS.DEMO_USER]: {
    type: 'demo',
    access: 'limited',
    courses: ['course1'],
    features: ['player'],
    expires: '2025-07-31'
  },
  [TEST_TOKENS.EXPIRED_USER]: {
    type: 'expired',
    access: 'none',
    courses: [],
    features: [],
    expires: '2024-12-31'
  }
};

// URL РєРѕРЅС„РёРіСѓСЂР°С†РёСЏ
export const API_CONFIG = {
  CORS_ORIGIN: '*',
  CACHE_TTL: 3600,
  VIDEO_CHUNK_SIZE: 1024 * 1024, // 1MB chunks
  MAX_RANGE_SIZE: 10 * 1024 * 1024 // 10MB max range
};
"@ | Out-File -FilePath "src\config\constants.js" -Encoding UTF8

Write-Host "вњ… РљРѕРЅСЃС‚Р°РЅС‚С‹ СЃ С‚РѕРєРµРЅР°РјРё СЃРѕР·РґР°РЅС‹!" -ForegroundColor Green

# РћР±РЅРѕРІР»СЏРµРј utils/token.js РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РЅРѕРІС‹РјРё С‚РѕРєРµРЅР°РјРё
@"
// utils/token.js
import { TEST_TOKENS, TOKEN_PERMISSIONS } from '../config/constants.js';

export function generateToken(email, courseId = null) {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).replace(/=/g, '').substring(0, 8);
  const coursePrefix = courseId ? `${courseId}_` : '';
  return `${emailHash}_${coursePrefix}${timestamp}`;
}

export function validateTokenFormat(token) {
  // РџСЂРѕРІРµСЂСЏРµРј С‚РµСЃС‚РѕРІС‹Рµ С‚РѕРєРµРЅС‹
  if (Object.values(TEST_TOKENS).includes(token)) {
    return true;
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј С„РѕСЂРјР°С‚ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ
  return token && token.length >= 3 && token.includes('_');
}

export function parseTokenInfo(token) {
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РІРѕР·РІСЂР°С‰Р°РµРј РёС… РїСЂР°РІР°
  if (TOKEN_PERMISSIONS[token]) {
    return {
      isTestToken: true,
      permissions: TOKEN_PERMISSIONS[token],
      token
    };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ РїР°СЂСЃРёРј СЃС‚СЂСѓРєС‚СѓСЂСѓ
  const parts = token.split('_');
  return {
    isTestToken: false,
    emailHash: parts[0],
    courseId: parts.length > 2 ? parts[1] : null,
    timestamp: parts[parts.length - 1]
  };
}

export function hasAccess(token, courseId, feature = 'player') {
  const tokenInfo = parseTokenInfo(token);
  
  // Р”Р»СЏ С‚РµСЃС‚РѕРІС‹С… С‚РѕРєРµРЅРѕРІ РїСЂРѕРІРµСЂСЏРµРј РїСЂР°РІР°
  if (tokenInfo.isTestToken) {
    const perms = tokenInfo.permissions;
    
    // РџСЂРѕРІРµСЂСЏРµРј РЅРµ РёСЃС‚РµРє Р»Рё С‚РѕРєРµРЅ
    if (new Date(perms.expires) < new Date()) {
      return { allowed: false, reason: 'Token expired' };
    }
    
    // SuperUser РёРјРµРµС‚ РґРѕСЃС‚СѓРї РєРѕ РІСЃРµРјСѓ
    if (perms.type === 'superuser') {
      return { allowed: true, permissions: perms };
    }
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє РєСѓСЂСЃСѓ
    const hasCourseAccess = perms.courses.includes('*') || 
                           perms.courses.includes(courseId);
    
    // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї Рє С„СѓРЅРєС†РёРё
    const hasFeatureAccess = perms.features.includes(feature);
    
    if (!hasCourseAccess) {
      return { allowed: false, reason: 'No access to this course' };
    }
    
    if (!hasFeatureAccess) {
      return { allowed: false, reason: 'No access to this feature' };
    }
    
    return { allowed: true, permissions: perms };
  }
  
  // Р”Р»СЏ РѕР±С‹С‡РЅС‹С… С‚РѕРєРµРЅРѕРІ - РїСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР°
  // TODO: РёРЅС‚РµРіСЂР°С†РёСЏ СЃ SendPulse
  return { allowed: true, permissions: { type: 'user' } };
}
"@ | Out-File -FilePath "src\utils\token.js" -Encoding UTF8

Write-Host "вњ… РћР±РЅРѕРІР»РµРЅР° Р»РѕРіРёРєР° СЂР°Р±РѕС‚С‹ СЃ С‚РѕРєРµРЅР°РјРё!" -ForegroundColor Green

# РЎРѕР·РґР°РµРј С‚РµСЃС‚РѕРІСѓСЋ СЃС‚СЂР°РЅРёС†Сѓ РґР»СЏ РїСЂРѕРІРµСЂРєРё С‚РѕРєРµРЅРѕРІ
@"
// handlers/test.js
import { createCorsResponse } from '../utils/cors.js';
import { TEST_TOKENS } from '../config/constants.js';
import { hasAccess } from '../utils/token.js';

export async function handleTestPage(request, env, ctx) {
  const testResults = {};
  
  // РўРµСЃС‚РёСЂСѓРµРј РІСЃРµ С‚РѕРєРµРЅС‹
  for (const [name, token] of Object.entries(TEST_TOKENS)) {
    testResults[name] = {
      token,
      course1_player: hasAccess(token, 'course1', 'player'),
      course1_archive: hasAccess(token, 'course1', 'archive'),
      course2_access: hasAccess(token, 'course2', 'player'),
      admin_access: hasAccess(token, 'course1', 'admin')
    };
  }
  
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Token Test Page - MasterMarat</title>
    <style>
        body { font-family: monospace; padding: 20px; background: #f5f5f5; }
        .token-box { 
            background: white; 
            padding: 15px; 
            margin: 10px 0; 
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .allowed { color: green; }
        .denied { color: red; }
        .token { 
            background: #f0f0f0; 
            padding: 4px 8px; 
            border-radius: 4px;
            font-size: 12px;
        }
        h1 { color: #3D968C; }
    </style>
</head>
<body>
    <h1>рџ”ђ MasterMarat Token Testing</h1>
    <p>РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌС‚Рё С‚РѕРєРµРЅС‹ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ СЂР°Р·РЅС‹С… СѓСЂРѕРІРЅРµР№ РґРѕСЃС‚СѓРїР°:</p>
    
    ${Object.entries(testResults).map(([name, result]) => `
        <div class="token-box">
            <h3>${name}</h3>
            <p>Token: <span class="token">${result.token}</span></p>
            <p>Course1 Player: <span class="${result.course1_player.allowed ? 'allowed' : 'denied'}">
                ${result.course1_player.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course1_player.reason}
            </span></p>
            <p>Course1 Archive: <span class="${result.course1_archive.allowed ? 'allowed' : 'denied'}">
                ${result.course1_archive.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course1_archive.reason}
            </span></p>
            <p>Course2 Access: <span class="${result.course2_access.allowed ? 'allowed' : 'denied'}">
                ${result.course2_access.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.course2_access.reason}
            </span></p>
            <p>Admin Access: <span class="${result.admin_access.allowed ? 'allowed' : 'denied'}">
                ${result.admin_access.allowed ? 'вњ… Allowed' : 'вќЊ ' + result.admin_access.reason}
            </span></p>
        </div>
    `).join('')}
    
    <div class="token-box">
        <h3>рџ§Є Test Links</h3>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.SUPER_USER}">SuperUser Player</a></p>
        <p><a href="/archive/course1?token=${TEST_TOKENS.SUPER_USER}">SuperUser Archive</a></p>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.DEMO_USER}">Demo Player</a></p>
        <p><a href="/player/course1/week1_lesson1?token=${TEST_TOKENS.EXPIRED_USER}">Expired Token Test</a></p>
    </div>
</body>
</html>`;
  
  return createCorsResponse(html, {
    headers: { 'Content-Type': 'text/html;charset=UTF-8' }
  });
}
"@ | Out-File -FilePath "src\handlers\test.js" -Encoding UTF8

Write-Host "вњ… РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃРѕР·РґР°РЅР°!" -ForegroundColor Green

# РћР±РЅРѕРІР»СЏРµРј СЂРѕСѓС‚РµСЂ РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†С‹
Write-Host "" -ForegroundColor White
Write-Host "рџ“ќ Р”РѕР±Р°РІСЊС‚Рµ РІ worker-new.js РЅРѕРІС‹Р№ СЂРѕСѓС‚:" -ForegroundColor Yellow
Write-Host "" -ForegroundColor White
Write-Host "import { handleTestPage } from './handlers/test.js';" -ForegroundColor Cyan
Write-Host "" -ForegroundColor White
Write-Host "// Р’ СЃРµРєС†РёРё СЂРѕСѓС‚РёРЅРіР° РґРѕР±Р°РІСЊС‚Рµ:" -ForegroundColor Gray
Write-Host "if (url.pathname === '/test') {" -ForegroundColor Cyan
Write-Host "  return await handleTestPage(request, env, ctx);" -ForegroundColor Cyan
Write-Host "}" -ForegroundColor Cyan
рџЋЇ РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ С‚РѕРєРµРЅРѕРІ
SuperUser С‚РѕРєРµРЅ РґР»СЏ РїРѕР»РЅРѕРіРѕ РґРѕСЃС‚СѓРїР°:
superuser_mastermarat_2025
РџСЂРёРјРµСЂС‹ С‚РµСЃС‚РѕРІС‹С… URL:
bash# SuperUser - РІРёРґРёС‚ РІСЃС‘
http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025
http://localhost:8787/archive/course1?token=superuser_mastermarat_2025

# VIP РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ - РґРѕСЃС‚СѓРї Рє РЅРµСЃРєРѕР»СЊРєРёРј РєСѓСЂСЃР°Рј
http://localhost:8787/player/course1/week1_lesson1?token=vip_test_token_2025

# РћР±С‹С‡РЅС‹Р№ РїРѕР»СЊР·РѕРІР°С‚РµР»СЊ - С‚РѕР»СЊРєРѕ player
http://localhost:8787/player/course1/week1_lesson1?token=standard_test_token_2025

# Р”РµРјРѕ С‚РѕРєРµРЅ - РѕРіСЂР°РЅРёС‡РµРЅРЅС‹Р№ РґРѕСЃС‚СѓРї
http://localhost:8787/player/course1/week1_lesson1?token=demo123

# РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃРѕ РІСЃРµРјРё С‚РѕРєРµРЅР°РјРё
http://localhost:8787/test
рџ”’ Р›РѕРіРёРєР° РїСЂРѕРІРµСЂРєРё РґРѕСЃС‚СѓРїР°
javascript// Р’ Р»СЋР±РѕРј handler РјРѕР¶РЅРѕ РїСЂРѕРІРµСЂРёС‚СЊ РґРѕСЃС‚СѓРї:
const accessCheck = hasAccess(token, courseId, 'player');
if (!accessCheck.allowed) {
  return createUnauthorizedResponse(accessCheck.reason);
}

// Р”Р»СЏ SuperUser РјРѕР¶РЅРѕ РґРѕР±Р°РІРёС‚СЊ Р°РґРјРёРЅ-С„СѓРЅРєС†РёРё:
if (accessCheck.permissions.type === 'superuser') {
  // РџРѕРєР°Р·Р°С‚СЊ РєРЅРѕРїРєРё Р°РґРјРёРЅР°, СЃС‚Р°С‚РёСЃС‚РёРєСѓ Рё С‚.Рґ.
}
РўРµРїРµСЂСЊ Сѓ РІР°СЃ РµСЃС‚СЊ РїРѕР»РЅРѕС†РµРЅРЅР°СЏ СЃРёСЃС‚РµРјР° С‚РѕРєРµРЅРѕРІ РґР»СЏ С‚РµСЃС‚РёСЂРѕРІР°РЅРёСЏ! РҐРѕС‚РёС‚Рµ Р·Р°РїСѓСЃС‚РёС‚СЊ Рё РїСЂРѕРІРµСЂРёС‚СЊ? рџљЂР’РґР°РІР°Р№ РїРѕРїСЂРѕР±СѓРµРј Р·Р°РїСѓСЃС‚РёС‚СЊрџљЂ Р—Р°РїСѓСЃРєР°РµРј Рё С‚РµСЃС‚РёСЂСѓРµРј РЅРѕРІСѓСЋ СЃС‚СЂСѓРєС‚СѓСЂСѓ
РЁР°Рі 1: РћР±РЅРѕРІР»СЏРµРј worker-new.js РґР»СЏ РґРѕР±Р°РІР»РµРЅРёСЏ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†С‹
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РћР±РЅРѕРІР»СЏРµРј worker-new.js СЃ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†РµР№
@"
// worker-new.js - С‚РѕР»СЊРєРѕ СЂРѕСѓС‚РёРЅРі
import { CORS_HEADERS } from './utils/cors.js';
import { createErrorResponse } from './utils/errors.js';

// РРјРїРѕСЂС‚РёСЂСѓРµРј РѕР±СЂР°Р±РѕС‚С‡РёРєРё
import { handleApiDocumentation } from './handlers/api.js';
import { handleThumbnails } from './handlers/thumbnails.js';
import { handleVideo } from './handlers/video.js';
import { handlePlayerLearning } from './handlers/player-learning.js';
import { handlePlayerArchive } from './handlers/player-archive.js';
import { handleWebhooks } from './handlers/webhooks.js';
import { handleTestPage } from './handlers/test.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: CORS_HEADERS });
    }

    try {
      // Р РѕСѓС‚РёРЅРі Р·Р°РїСЂРѕСЃРѕРІ
      if (url.pathname === '/') {
        return await handleApiDocumentation(request, env, ctx);
      }

      // РќРћР’Р«Р™: РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р°
      if (url.pathname === '/test') {
        return await handleTestPage(request, env, ctx);
      }

      if (url.pathname.startsWith('/thumbnails/')) {
        return await handleThumbnails(request, env, ctx);
      }

      if (url.pathname.startsWith('/video/')) {
        return await handleVideo(request, env, ctx);
      }

      if (url.pathname.startsWith('/player/')) {
        return await handlePlayerLearning(request, env, ctx);
      }

      if (url.pathname.startsWith('/archive/')) {
        return await handlePlayerArchive(request, env, ctx);
      }

      if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
        return await handleWebhooks(request, env, ctx);
      }

      // 404 РґР»СЏ РЅРµРёР·РІРµСЃС‚РЅС‹С… РјР°СЂС€СЂСѓС‚РѕРІ
      return createErrorResponse('Endpoint not found', 404, {
        path: url.pathname,
        method: request.method
      });

    } catch (error) {
      console.error('Worker error:', error);
      return createErrorResponse(
        'Internal server error',
        500,
        { message: error.message }
      );
    }
  }
};
"@ | Out-File -FilePath "src\worker-new.js" -Encoding UTF8

Write-Host "вњ… worker-new.js РѕР±РЅРѕРІР»РµРЅ СЃ С‚РµСЃС‚РѕРІРѕР№ СЃС‚СЂР°РЅРёС†РµР№!" -ForegroundColor Green
РЁР°Рі 2: Р’СЂРµРјРµРЅРЅРѕ РѕР±РЅРѕРІР»СЏРµРј wrangler.toml РґР»СЏ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹
powershell# РћР±РЅРѕРІР»СЏРµРј wrangler.toml С‡С‚РѕР±С‹ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РЅРѕРІС‹Р№ worker
$wranglerContent = Get-Content "wrangler.toml" -Raw
$wranglerContent = $wranglerContent -replace 'main = "src/worker\.js"', 'main = "src/worker-new.js"'
$wranglerContent | Out-File "wrangler.toml" -Encoding UTF8

Write-Host "вњ… wrangler.toml РѕР±РЅРѕРІР»РµРЅ РґР»СЏ РЅРѕРІРѕР№ СЃС‚СЂСѓРєС‚СѓСЂС‹!" -ForegroundColor Green
РЁР°Рі 3: Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅС‹Р№ СЃРµСЂРІРµСЂ
powershellWrite-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј Р»РѕРєР°Р»СЊРЅС‹Р№ СЃРµСЂРІРµСЂ..." -ForegroundColor Cyan
Write-Host "" -ForegroundColor White

# РћСЃС‚Р°РЅР°РІР»РёРІР°РµРј РїСЂРµРґС‹РґСѓС‰РёР№ РїСЂРѕС†РµСЃСЃ РµСЃР»Рё РѕРЅ Р·Р°РїСѓС‰РµРЅ
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {$_.MainWindowTitle -like "*wrangler*"} | Stop-Process -Force

# Р—Р°РїСѓСЃРєР°РµРј РЅРѕРІС‹Р№
npm run dev
рџ§Є Р§С‚Рѕ С‚РµСЃС‚РёСЂРѕРІР°С‚СЊ РїРѕСЃР»Рµ Р·Р°РїСѓСЃРєР°:
1. Р“Р»Р°РІРЅР°СЏ СЃС‚СЂР°РЅРёС†Р° API (РґРѕР»Р¶РЅР° СЂР°Р±РѕС‚Р°С‚СЊ):
http://localhost:8787/
2. РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё:
http://localhost:8787/test
3. РџР»РµРµСЂ СЃ SuperUser С‚РѕРєРµРЅРѕРј:
http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025
4. РђСЂС…РёРІ СЃ SuperUser С‚РѕРєРµРЅРѕРј:
http://localhost:8787/archive/course1?token=superuser_mastermarat_2025
рџ”Ќ Р•СЃР»Рё РІРѕР·РЅРёРєРЅСѓС‚ РѕС€РёР±РєРё:
РћС€РёР±РєР° РёРјРїРѕСЂС‚РѕРІ?
powershell# РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ РІСЃРµ С„Р°Р№Р»С‹ СЃРѕР·РґР°РЅС‹
Get-ChildItem -Path "src" -Recurse | Select-Object FullName
РћС€РёР±РєР° СЃРёРЅС‚Р°РєСЃРёСЃР°?
powershell# РџСЂРѕРІРµСЂСЏРµРј Р»РёРЅС‚РµСЂРѕРј
npm run lint
РћС‚РєР°С‚РёС‚СЊСЃСЏ РЅР° СЃС‚Р°СЂСѓСЋ РІРµСЂСЃРёСЋ?
powershell# Р’РµСЂРЅСѓС‚СЊ СЃС‚Р°СЂС‹Р№ worker РІ wrangler.toml
$wranglerContent = Get-Content "wrangler.toml" -Raw
$wranglerContent = $wranglerContent -replace 'main = "src/worker-new\.js"', 'main = "src/worker.js"'
$wranglerContent | Out-File "wrangler.toml" -Encoding UTF8
Р—Р°РїСѓСЃРєР°Р№ РїРµСЂРІС‹Р№ СЃРєСЂРёРїС‚ Рё РґР°РІР°Р№ РїРѕСЃРјРѕС‚СЂРёРј С‡С‚Рѕ РїРѕР»СѓС‡РёС‚СЃСЏ! рџљЂ
Р•СЃР»Рё РІСЃРµ Р·Р°СЂР°Р±РѕС‚Р°РµС‚, СѓРІРёРґРёС€СЊ РІ РєРѕРЅСЃРѕР»Рё:
вЋ” Starting local server...
[wrangler:info] Ready on http://127.0.0.1:8787
Р—Р°С‚РµРј РѕС‚РєСЂРѕР№ http://localhost:8787/test РґР»СЏ РїСЂРѕРІРµСЂРєРё С‚РѕРєРµРЅРѕРІ! рџ”ђР’npm run dev
> mastermarat-api@1.0.0 dev
> wrangler dev
 в›…пёЏ wrangler 4.22.0
в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
X [ERROR] Unknown character "65279"
    C:\Projects\mastermaratcom\mastermarat-project\workers\api\wrangler.toml:1:0:
      1 в”‚ # Production Worker (default environment)
        в•µ ^
  If you think this is a bug, please open an issue at:
  https://github.com/cloudflare/workers-sdk/issues/new/choose
npm error Lifecycle script dev failed with error:
npm error code 1
npm error path C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error workspace mastermarat-api@1.0.0
npm error location C:\Projects\mastermaratcom\mastermarat-project\workers\api
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c wrangler devрџђ› РћС€РёР±РєР° СЃ BOM (Byte Order Mark) РІ wrangler.toml
РџСЂРѕР±Р»РµРјР° РІ С‚РѕРј, С‡С‚Рѕ С„Р°Р№Р» СЃРѕС…СЂР°РЅРёР»СЃСЏ СЃ BOM СЃРёРјРІРѕР»РѕРј (РЅРµРІРёРґРёРјС‹Р№ СЃРёРјРІРѕР» Unicode). Р­С‚Рѕ С‡Р°СЃС‚Р°СЏ РїСЂРѕР±Р»РµРјР° РІ Windows.
рџ”§ РСЃРїСЂР°РІР»СЏРµРј wrangler.toml:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# Р§РёС‚Р°РµРј СЃРѕРґРµСЂР¶РёРјРѕРµ Рё СЃРѕС…СЂР°РЅСЏРµРј Р±РµР· BOM
$content = Get-Content "wrangler.toml" -Raw
[System.IO.File]::WriteAllText("$PWD\wrangler.toml", $content)

Write-Host "вњ… wrangler.toml РёСЃРїСЂР°РІР»РµРЅ (СѓР±СЂР°РЅ BOM)!" -ForegroundColor Green

# РџСЂРѕРІРµСЂСЏРµРј С‡С‚Рѕ BOM СѓРґР°Р»РµРЅ
$bytes = [System.IO.File]::ReadAllBytes("$PWD\wrangler.toml")
if ($bytes[0] -eq 239 -and $bytes[1] -eq 187 -and $bytes[2] -eq 191) {
    Write-Host "вќЊ BOM РІСЃРµ РµС‰Рµ РїСЂРёСЃСѓС‚СЃС‚РІСѓРµС‚!" -ForegroundColor Red
} else {
    Write-Host "вњ… BOM СѓСЃРїРµС€РЅРѕ СѓРґР°Р»РµРЅ!" -ForegroundColor Green
}

# РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ СЃРїРѕСЃРѕР± - РїРµСЂРµСЃРѕР·РґР°С‚СЊ С„Р°Р№Р» РїРѕР»РЅРѕСЃС‚СЊСЋ
@'
name = "mastermarat-api"
main = "src/worker-new.js"
compatibility_date = "2024-07-01"

# R2 bucket binding
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"

# Production environment
[env.production]
name = "mastermarat-api"
route = { pattern = "api.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.production.vars]
ENVIRONMENT = "production"

# Development environment
[env.dev]
name = "mastermarat-api-dev"
route = { pattern = "api-dev.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.dev.vars]
ENVIRONMENT = "development"
'@ | Out-File -FilePath "wrangler.toml" -Encoding ASCII

Write-Host "вњ… wrangler.toml РїРµСЂРµСЃРѕР·РґР°РЅ СЃ ASCII РєРѕРґРёСЂРѕРІРєРѕР№!" -ForegroundColor Green
рџљЂ РўРµРїРµСЂСЊ Р·Р°РїСѓСЃРєР°РµРј СЃРЅРѕРІР°:
powershellWrite-Host "" -ForegroundColor White
Write-Host "рџљЂ Р—Р°РїСѓСЃРєР°РµРј dev СЃРµСЂРІРµСЂ..." -ForegroundColor Cyan
npm run dev
рџ“ќ Р•СЃР»Рё РІСЃРµ РµС‰Рµ РѕС€РёР±РєР°, РїСЂРѕРІРµСЂРёРј РІСЃРµ С„Р°Р№Р»С‹ РЅР° BOM:
powershell# Р¤СѓРЅРєС†РёСЏ РґР»СЏ СѓРґР°Р»РµРЅРёСЏ BOM РёР· РІСЃРµС… С„Р°Р№Р»РѕРІ
function Remove-BOMFromFiles {
    param($Path)
    
    Get-ChildItem -Path $Path -Include "*.js","*.json","*.toml" -Recurse | ForEach-Object {
        $content = Get-Content $_.FullName -Raw
        if ($content) {
            [System.IO.File]::WriteAllText($_.FullName, $content)
            Write-Host "РћР±СЂР°Р±РѕС‚Р°РЅ: $($_.Name)" -ForegroundColor Gray
        }
    }
}

# РЈРґР°Р»СЏРµРј BOM РёР· РІСЃРµС… С„Р°Р№Р»РѕРІ РїСЂРѕРµРєС‚Р°
Remove-BOMFromFiles -Path "src"
Write-Host "вњ… Р’СЃРµ С„Р°Р№Р»С‹ РѕР±СЂР°Р±РѕС‚Р°РЅС‹!" -ForegroundColor Green
РџРѕСЃР»Рµ РёСЃРїСЂР°РІР»РµРЅРёСЏ РґРѕР»Р¶РЅРѕ Р·Р°РїСѓСЃС‚РёС‚СЊСЃСЏ Р±РµР· РѕС€РёР±РѕРє! рџЋЇ в›…пёЏ wrangler 4.22.0
в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђ
Your Worker has access to the following bindings:
Binding                          Resource       Mode
env.R2 (mastermarat-videos)      R2 Bucket      local

в•­в”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв”Ђв•®
в”‚  [b] open a browser pastedР’рџђ› РњРЅРѕР¶РµСЃС‚РІРµРЅРЅС‹Рµ РѕС€РёР±РєРё РІ С€Р°Р±Р»РѕРЅР°С… СЃС‚СЂРѕРє
Р’РёР¶Сѓ РїСЂРѕР±Р»РµРјСѓ - РІ РєРѕРґРµ РёСЃРїРѕР»СЊР·СѓСЋС‚СЃСЏ С€Р°Р±Р»РѕРЅРЅС‹Рµ Р»РёС‚РµСЂР°Р»С‹ (template literals) РІРЅСѓС‚СЂРё РѕР±С‹С‡РЅС‹С… СЃС‚СЂРѕРє. РќСѓР¶РЅРѕ РёСЃРїСЂР°РІРёС‚СЊ СЃРёРЅС‚Р°РєСЃРёСЃ.
рџ”§ РСЃРїСЂР°РІР»СЏРµРј РІСЃРµ РѕС€РёР±РєРё:
powershell# РџРµСЂРµС…РѕРґРёРј РІ РґРёСЂРµРєС‚РѕСЂРёСЋ API РІРѕСЂРєРµСЂР°
cd "C:\Projects\mastermaratcom\mastermarat-project\workers\api"

# РСЃРїСЂР°РІР»СЏРµРј handlers/api.js
@"
// handlers/api.js
import { createCorsResponse } from '../utils/cors.js';
import { COURSE_DATA } from '../config/courses.js';
import { API_VERSION } from '../config/constants.js';

export async function handleApiDocumentation(request, env, ctx) {
  const url = new URL(request.url);
  
  return createCorsResponse(
    JSON.stringify({
      status: 'success',
      message: 'MasterMarat API РґР»СЏ РєСѓСЂСЃР° "РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ"',
      version: API_VERSION,
      worker_url: url.origin,
      r2_connected: env.R2 ? 'Yes' : 'No',
      endpoints: {
        'GET /': 'Р”РѕРєСѓРјРµРЅС‚Р°С†РёСЏ API',
        'GET /test': 'РўРµСЃС‚РѕРІР°СЏ СЃС‚СЂР°РЅРёС†Р° СЃ С‚РѕРєРµРЅР°РјРё',
        'GET /player/{courseId}/{lessonId}?token=XXX': 'РџР»РµРµСЂ РґР»СЏ РѕР±СѓС‡РµРЅРёСЏ',
        'GET /archive/{courseId}?token=XXX': 'РџР»РµРµСЂ-Р°СЂС…РёРІ СЃ РЅР°РІРёРіР°С†РёРµР№',
        'GET /thumbnails/{courseId}/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ',
        'GET /video/{courseId}/{filename}?token=XXX': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ',
        'POST /webhook/purchase': 'SendPulse webhook'
      },
      test_links: {
        test_page: `${url.origin}/test`,
        player_learning: `${url.origin}/player/course1/week1_lesson1?token=superuser_mastermarat_2025`,
        player_archive: `${url.origin}/archive/course1?token=superuser_mastermarat_2025`,
        thumbnail: `${url.origin}/thumbnails/course1/week1_lesson1.jpg`,
        video: `${url.origin}/video/course1/week1_lesson1.mp4?token=superuser_mastermarat_2025`
      },
      courses: COURSE_DATA,
      timestamp: new Date().toISOString()
    }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
      }
    }
  );
}
"@ | Out-File -FilePath "src\handlers\api.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/thumbnails.js
@"
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
  
  // Р”Р»СЏ РѕР±СЂР°С‚РЅРѕР№ СЃРѕРІРјРµСЃС‚РёРјРѕСЃС‚Рё: РїСЂРѕРІРµСЂСЏРµРј РµСЃС‚СЊ Р»Рё С‚Р°РєРѕР№ СѓСЂРѕРє
  let thumbnailKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
  const course = COURSE_DATA[courseId];
  if (course && course.lessons) {
    const lessonId = fileName.replace('.jpg', '').replace('.png', '');
    const lessonData = course.lessons[lessonId];
    
    if (lessonData && lessonData.thumbnail_file) {
      thumbnailKey = `content/${courseId}/${lessonData.thumbnail_file}`;
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
"@ | Out-File -FilePath "src\handlers\thumbnails.js" -Encoding UTF8

# РСЃРїСЂР°РІР»СЏРµРј handlers/video.js
@"
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
  
  // РџСЂРѕРІРµСЂСЏРµРј С‚РѕРєРµРЅ
  if (!token || !validateTokenFormat(token)) {
    return createUnauthorizedResponse('Invalid or missing token');
  }
  
  // РџСЂРѕРІРµСЂСЏРµРј РґРѕСЃС‚СѓРї
  const accessCheck = hasAccess(token, courseId, 'player');
  if (!accessCheck.allowed) {
    return createUnauthorizedResponse(accessCheck.reason);
  }
  
  // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ Рє РІРёРґРµРѕ
  let videoKey = `content/${courseId}/${fileName}`;
  
  // Р•СЃР»Рё Р·Р°РїСЂР°С€РёРІР°РµС‚СЃСЏ РїРѕ lessonId, РєРѕРЅРІРµСЂС‚РёСЂСѓРµРј РІ РёРјСЏ С„Р°Р№Р»Р°
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
      // РџРѕРґРґРµСЂР¶РєР° HTTP Range requests РґР»СЏ РІРёРґРµРѕ
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
        
        const headers = new Headers();
        headers.set('Content-Type', video.httpMetadata?.contentType || 'video/mp4');
        headers.set('Accept-Ranges', 'bytes');
        headers.set('Content-Range', `bytes ${start}-${end || video.size - 1}/${video.size}`);
        headers.set('Content-Length', video.size.toString());
        headers.set('Cache-Control', 'private, max-age=3600');
        headers.set('Access-Control-Allow-Origin', '*');
        
        return new Response(video.b

... [CONTENT TRUNCATED - FILE TOO LARGE] ...
```

---

## Project Config (11)

### `.eslintrc.js` (1.81 KB)

```javascript
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    worker: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    // Cloudflare Workers globals
    'addEventListener': 'readonly',
    'Response': 'readonly',
    'Request': 'readonly',
    'URL': 'readonly',
    'URLSearchParams': 'readonly',
    'Headers': 'readonly',
    'FormData': 'readonly',
    'btoa': 'readonly',
    'atob': 'readonly',
    'crypto': 'readonly',
    'caches': 'readonly',
    'fetch': 'readonly'
  },
  rules: {
    // Code quality
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-console': 'off', // Разрешаем console.log в Workers
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Code style
    'indent': ['error', 2],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    
    // Best practices
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'eol-last': ['error', 'always'],
    
    // Security
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-script-url': 'error'
  },
  overrides: [
    {
      // Специальные правила для Cloudflare Workers
      files: ['src/worker.js'],
      rules: {
        'no-undef': 'off' // Отключаем для Workers globals
      }
    },
    {
      // Правила для тестов
      files: ['scripts/test-*.js', '**/*.test.js'],
      rules: {
        'no-console': 'off'
      }
    }
  ]
};
```

---

### `.gitignore` (1.31 KB)

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment variables
.env
.env.local
.env.production
.env.*.local
.dev.vars

# Cloudflare
.wrangler/
.miniflare/
wrangler.toml.backup

# Build outputs
dist/
build/
.cache/
.parcel-cache/

# OS files
.DS_Store
Thumbs.db
desktop.ini
*.swp
*.swo
*~

# IDE
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Testing
coverage/
.nyc_output/

# Temporary files
*.tmp
*.temp
*.bak
*.backup
*.old
tmp/
temp_upload/

# Logs
logs/
*.log

# Security
*.pem
*.key
*.cert
*.crt
private/
secrets/

# Media files (use R2 storage instead)
*.mp4
*.mov
*.avi
*.mkv
*.webm
*.mp3
*.wav

# Images (except docs)
*.jpg
*.jpeg
*.png
*.gif
*.bmp
*.svg
!docs/**/*.jpg
!docs/**/*.jpeg
!docs/**/*.png
!docs/**/*.gif
!docs/**/*.svg

# Project specific
/content/videos/
/content/thumbnails/
/content/**/*.mp4
/content/**/*.jpg
/content/**/*.jpeg
/content/**/*.png

# Data files (but keep structure)
/data/courses-database.json
/data/courses-backup-*.json
/data/import/*.csv
!data/.gitkeep
!data/import/.gitkeep

# Analytics and user data
analytics-data/
user-data/

# Databases
*.sqlite
*.sqlite3
*.db

# PDF files (except docs)
*.pdf
!docs/**/*.pdf

# Keep empty directories
!content/.gitkeep
!content/videos/.gitkeep
!content/thumbnails/.gitkeep
!scripts/.gitkeep

```

---

### `.vscode/settings.json` (1.25 KB)

```json
{
  "files.eol": "\r\n",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "typescript.suggest.autoImports": true,
  "eslint.enable": true,
  
  // РќР°СЃС‚СЂРѕР№РєРё РєРѕРґРёСЂРѕРІРѕРє РґР»СЏ СЂР°Р·РЅС‹С… С‚РёРїРѕРІ С„Р°Р№Р»РѕРІ
  "files.encoding": "utf8",
  
  "[powershell]": {
    "files.encoding": "utf8bom",
    "files.eol": "\r\n"
  },
  
  "[javascript]": {
    "files.encoding": "utf8",
    "files.eol": "\n"
  },
  
  "[json]": {
    "files.encoding": "utf8",
    "files.eol": "\n"
  },
  
  "[markdown]": {
    "files.encoding": "utf8",
    "files.eol": "\n"
  },
  
  // Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹Рµ РїРѕР»РµР·РЅС‹Рµ РЅР°СЃС‚СЂРѕР№РєРё
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,
  
  // Git РЅР°СЃС‚СЂРѕР№РєРё
  "git.autofetch": true,
  "git.confirmSync": false,
  
  // РСЃРєР»СЋС‡РµРЅРёСЏ РёР· РїРѕРёСЃРєР°
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.wrangler": true,
    "**/content/videos": true,
    "**/content/thumbnails": true
  },
  
  // РђСЃСЃРѕС†РёР°С†РёРё С„Р°Р№Р»РѕРІ
  "files.associations": {
    "*.ps1": "powershell",
    "wrangler.toml": "toml"
  }
}
```

---

### `data/courses-database.json` (0 KB)

```json
[EMPTY FILE]
```

---

### `eslint.config.js` (1.92 KB)

```javascript
// eslint.config.js - ESLint v9 configuration
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['workers/**/*.js', 'scripts/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Cloudflare Workers globals
        'addEventListener': 'readonly',
        'Response': 'readonly',
        'Request': 'readonly',
        'URL': 'readonly',
        'URLSearchParams': 'readonly',
        'Headers': 'readonly',
        'FormData': 'readonly',
        'btoa': 'readonly',
        'atob': 'readonly',
        'crypto': 'readonly',
        'caches': 'readonly',
        'fetch': 'readonly',
        'console': 'readonly',
        'Date': 'readonly',
        'JSON': 'readonly',
        'parseInt': 'readonly',
        'process': 'readonly'
      }
    },
    rules: {
      // Code quality
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'off', // Р Р°Р·СЂРµС€Р°РµРј console.log РІ Workers
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Code style
      'indent': ['error', 2],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // Best practices
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'dot-notation': 'error',
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 2 }],
      'eol-last': ['error', 'always'],
      
      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error'
    }
  },
  {
    // РЎРїРµС†РёР°Р»СЊРЅС‹Рµ РїСЂР°РІРёР»Р° РґР»СЏ С‚РµСЃС‚РѕРІ
    files: ['scripts/test-*.js', '**/*.test.js'],
    rules: {
      'no-console': 'off'
    }
  }
];
```

---

### `package.json` (0.64 KB)

```json
{
  "name": "mastermarat-project",
  "version": "1.0.0",
  "description": "MasterMarat EdTech Project",
  "private": true,
  "scripts": {
    "dev": "npm run dev --prefix workers/api",
    "deploy": "npm run deploy --prefix workers/api",
    "lint": "npm run lint --prefix workers/api",
    "lint:fix": "npm run lint:fix --prefix workers/api",
    "format": "npm run format --prefix workers/api",
    "format:check": "npm run format:check --prefix workers/api",
    "install:all": "npm install && cd workers/api && npm install"
  },
  "workspaces": [
    "workers/api"
  ],
  "devDependencies": {
    "prettier": "^3.0.0",
    "eslint": "^8.0.0"
  }
}
```

---

### `package-lock.json` (57.2 KB)

```json
{
  "name": "mastermarat-project",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mastermarat-project",
      "version": "1.0.0",
      "workspaces": [
        "workers/api"
      ],
      "devDependencies": {
        "eslint": "^8.0.0",
        "prettier": "^3.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.7.0.tgz",
      "integrity": "sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/debug": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.1.tgz",
      "integrity": "sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mastermarat-api": {
      "resolved": "workers/api",
      "link": true
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.6.2.tgz",
      "integrity": "sha512-I7AIg5boAr5R0FFtJ6rCfD+LFsWHp81dolrFD8S79U9tb8Az2nGrJncnMSnys+bpQJfRUzqs9hnA81OAA3hCuQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "workers/api": {
      "name": "mastermarat-api",
      "version": "1.0.0",
      "license": "MIT",
      "devDependencies": {
        "eslint": "^8.57.1",
        "prettier": "^3.6.2",
        "wrangler": "^4.22.0"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      }
    },
    "workers/api/node_modules/@cloudflare/kv-asset-handler": {
      "version": "0.4.0",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "dependencies": {
        "mime": "^3.0.0"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "workers/api/node_modules/@cloudflare/unenv-preset": {
      "version": "2.3.3",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "peerDependencies": {
        "unenv": "2.0.0-rc.17",
        "workerd": "^1.20250508.0"
      },
      "peerDependenciesMeta": {
        "workerd": {
          "optional": true
        }
      }
    },
    "workers/api/node_modules/@cloudflare/workerd-windows-64": {
      "version": "1.20250617.0",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "workers/api/node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "workers/api/node_modules/@esbuild/win32-x64": {
      "version": "0.25.4",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "workers/api/node_modules/@fastify/busboy": {
      "version": "2.1.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "workers/api/node_modules/@img/sharp-win32-x64": {
      "version": "0.33.5",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "workers/api/node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "workers/api/node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "workers/api/node_modules/acorn-walk": {
      "version": "8.3.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "workers/api/node_modules/as-table": {
      "version": "1.0.55",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "printable-characters": "^1.0.42"
      }
    },
    "workers/api/node_modules/blake3-wasm": {
      "version": "2.1.5",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/color": {
      "version": "4.2.3",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "workers/api/node_modules/color-string": {
      "version": "1.9.1",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "workers/api/node_modules/cookie": {
      "version": "0.7.2",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "workers/api/node_modules/data-uri-to-buffer": {
      "version": "2.0.2",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/defu": {
      "version": "6.1.4",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/detect-libc": {
      "version": "2.0.4",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "workers/api/node_modules/esbuild": {
      "version": "0.25.4",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.4",
        "@esbuild/android-arm": "0.25.4",
        "@esbuild/android-arm64": "0.25.4",
        "@esbuild/android-x64": "0.25.4",
        "@esbuild/darwin-arm64": "0.25.4",
        "@esbuild/darwin-x64": "0.25.4",
        "@esbuild/freebsd-arm64": "0.25.4",
        "@esbuild/freebsd-x64": "0.25.4",
        "@esbuild/linux-arm": "0.25.4",
        "@esbuild/linux-arm64": "0.25.4",
        "@esbuild/linux-ia32": "0.25.4",
        "@esbuild/linux-loong64": "0.25.4",
        "@esbuild/linux-mips64el": "0.25.4",
        "@esbuild/linux-ppc64": "0.25.4",
        "@esbuild/linux-riscv64": "0.25.4",
        "@esbuild/linux-s390x": "0.25.4",
        "@esbuild/linux-x64": "0.25.4",
        "@esbuild/netbsd-arm64": "0.25.4",
        "@esbuild/netbsd-x64": "0.25.4",
        "@esbuild/openbsd-arm64": "0.25.4",
        "@esbuild/openbsd-x64": "0.25.4",
        "@esbuild/sunos-x64": "0.25.4",
        "@esbuild/win32-arm64": "0.25.4",
        "@esbuild/win32-ia32": "0.25.4",
        "@esbuild/win32-x64": "0.25.4"
      }
    },
    "workers/api/node_modules/exit-hook": {
      "version": "2.2.1",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "workers/api/node_modules/exsolve": {
      "version": "1.0.7",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/get-source": {
      "version": "2.0.12",
      "dev": true,
      "license": "Unlicense",
      "dependencies": {
        "data-uri-to-buffer": "^2.0.0",
        "source-map": "^0.6.1"
      }
    },
    "workers/api/node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "workers/api/node_modules/is-arrayish": {
      "version": "0.3.2",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/mime": {
      "version": "3.0.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "workers/api/node_modules/miniflare": {
      "version": "4.20250617.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "0.8.1",
        "acorn": "8.14.0",
        "acorn-walk": "8.3.2",
        "exit-hook": "2.2.1",
        "glob-to-regexp": "0.4.1",
        "sharp": "^0.33.5",
        "stoppable": "1.1.0",
        "undici": "^5.28.5",
        "workerd": "1.20250617.0",
        "ws": "8.18.0",
        "youch": "3.3.4",
        "zod": "3.22.3"
      },
      "bin": {
        "miniflare": "bootstrap.js"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "workers/api/node_modules/miniflare/node_modules/acorn": {
      "version": "8.14.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "workers/api/node_modules/mustache": {
      "version": "4.2.0",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mustache": "bin/mustache"
      }
    },
    "workers/api/node_modules/ohash": {
      "version": "2.0.11",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/path-to-regexp": {
      "version": "6.3.0",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/pathe": {
      "version": "2.0.3",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/printable-characters": {
      "version": "1.0.42",
      "dev": true,
      "license": "Unlicense"
    },
    "workers/api/node_modules/semver": {
      "version": "7.7.2",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "workers/api/node_modules/sharp": {
      "version": "0.33.5",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.3",
        "semver": "^7.6.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.33.5",
        "@img/sharp-darwin-x64": "0.33.5",
        "@img/sharp-libvips-darwin-arm64": "1.0.4",
        "@img/sharp-libvips-darwin-x64": "1.0.4",
        "@img/sharp-libvips-linux-arm": "1.0.5",
        "@img/sharp-libvips-linux-arm64": "1.0.4",
        "@img/sharp-libvips-linux-s390x": "1.0.4",
        "@img/sharp-libvips-linux-x64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
        "@img/sharp-linux-arm": "0.33.5",
        "@img/sharp-linux-arm64": "0.33.5",
        "@img/sharp-linux-s390x": "0.33.5",
        "@img/sharp-linux-x64": "0.33.5",
        "@img/sharp-linuxmusl-arm64": "0.33.5",
        "@img/sharp-linuxmusl-x64": "0.33.5",
        "@img/sharp-wasm32": "0.33.5",
        "@img/sharp-win32-ia32": "0.33.5",
        "@img/sharp-win32-x64": "0.33.5"
      }
    },
    "workers/api/node_modules/simple-swizzle": {
      "version": "0.2.2",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "workers/api/node_modules/source-map": {
      "version": "0.6.1",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "workers/api/node_modules/stacktracey": {
      "version": "2.1.8",
      "dev": true,
      "license": "Unlicense",
      "dependencies": {
        "as-table": "^1.0.36",
        "get-source": "^2.0.12"
      }
    },
    "workers/api/node_modules/stoppable": {
      "version": "1.1.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4",
        "npm": ">=6"
      }
    },
    "workers/api/node_modules/ufo": {
      "version": "1.6.1",
      "dev": true,
      "license": "MIT"
    },
    "workers/api/node_modules/undici": {
      "version": "5.29.0",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@fastify/busboy": "^2.0.0"
      },
      "engines": {
        "node": ">=14.0"
      }
    },
    "workers/api/node_modules/unenv": {
      "version": "2.0.0-rc.17",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.4",
        "exsolve": "^1.0.4",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "ufo": "^1.6.1"
      }
    },
    "workers/api/node_modules/workerd": {
      "version": "1.20250617.0",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "bin": {
        "workerd": "bin/workerd"
      },
      "engines": {
        "node": ">=16"
      },
      "optionalDependencies": {
        "@cloudflare/workerd-darwin-64": "1.20250617.0",
        "@cloudflare/workerd-darwin-arm64": "1.20250617.0",
        "@cloudflare/workerd-linux-64": "1.20250617.0",
        "@cloudflare/workerd-linux-arm64": "1.20250617.0",
        "@cloudflare/workerd-windows-64": "1.20250617.0"
      }
    },
    "workers/api/node_modules/wrangler": {
      "version": "4.22.0",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "dependencies": {
        "@cloudflare/kv-asset-handler": "0.4.0",
        "@cloudflare/unenv-preset": "2.3.3",
        "blake3-wasm": "2.1.5",
        "esbuild": "0.25.4",
        "miniflare": "4.20250617.4",
        "path-to-regexp": "6.3.0",
        "unenv": "2.0.0-rc.17",
        "workerd": "1.20250617.0"
      },
      "bin": {
        "wrangler": "bin/wrangler.js",
        "wrangler2": "bin/wrangler.js"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@cloudflare/workers-types": "^4.20250617.0"
      },
      "peerDependenciesMeta": {
        "@cloudflare/workers-types": {
          "optional": true
        }
      }
    },
    "workers/api/node_modules/ws": {
      "version": "8.18.0",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "workers/api/node_modules/youch": {
      "version": "3.3.4",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cookie": "^0.7.1",
        "mustache": "^4.2.0",
        "stacktracey": "^2.1.8"
      }
    },
    "workers/api/node_modules/zod": {
      "version": "3.22.3",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

---

### `temp_upload/content/course01/lesson001.json` (2.89 KB)

```json
{
    "content_points":  [
                           "Движение (здоровые суставы)",
                           "Водный баланс (жидкости в организме)",
                           "Дыхание (без него остальное - бессмысленно)"
                       ],
    "video_file":  "lesson01.mp4",
    "important_notes":  [
                            "На самом деле «слонов» намного больше, потому что человеческий организм похож на автомобиль: без корректной работы любого из «отделов» человеческого организма будет малая поломка - последует другая. В итоге, \"механизм остановится».",
                            "Каждый орган, каждый цикл, каждый гормон, клетка или ткань человеческого организма — важны и тесно связаны между собой.",
                            "При нарушении работы любого из отделов человеческого организма дисфункция проявится и на других.  Вопрос во времени проявления цепочки дисфункций."
                        ],
    "additional_info":  [
                            "В этом, вводном курсе, будет дана кратко информация для понимания механики работы по каждому из сегментов, и пара рекомендаций для поддержания баланса.",
                            "Объем достаточный, для понимания концепции подачи информации и понимания в теме,о которой говорим.",
                            "Базовые рекомендации, которые будут даны в этом курсе, при регулярном использовании, дадут положительный результат на организм."
                        ],
    "materials":  [
                      {
                          "title":  "Упражнения для самостоятельной работы",
                          "file":  "exercises.pdf",
                          "type":  "pdf"
                      },
                      {
                          "title":  "Ссылка на наш лендинг",
                          "url":  "https://mastermarat.com",
                          "type":  "link"
                      }
                  ],
    "title":  "О важности индивидуального подхода",
    "thumbnail_file":  "lesson01.jpg"
}

```

---

### `workers/api/package.json` (1.77 KB)

```json
{
    "name":  "mastermarat-api",
    "version":  "1.0.0",
    "description":  "MasterMarat API Worker for protected video delivery",
    "main":  "src/worker-new.js",
    "scripts":  {
                    "dev":  "wrangler dev",
                    "dev:remote":  "wrangler dev --env dev --remote",
                    "test":  "node ../../scripts/test-api.js",
                    "lint":  "eslint src/",
                    "format":  "prettier --write src/**/*.js",
                    "deploy:dev":  "wrangler deploy --env dev",
                    "logs:dev":  "wrangler tail --env dev",
                    "deploy":  "wrangler deploy",
                    "logs":  "wrangler tail",
                    "login":  "wrangler login",
                    "whoami":  "wrangler whoami"
                },
    "keywords":  [
                     "cloudflare",
                     "workers",
                     "edtech",
                     "api",
                     "video-streaming",
                     "mastermarat",
                     "r2-storage",
                     "osteopathy",
                     "health-education"
                 ],
    "author":  "MasterMarat Team",
    "license":  "MIT",
    "repository":  {
                       "type":  "git",
                       "url":  "https://github.com/Shivalino/mastermarat-project.git"
                   },
    "homepage":  "https://mastermarat.com",
    "devDependencies":  {
                            "eslint":  "^8.57.1",
                            "prettier":  "^3.6.2",
                            "wrangler":  "^4.22.0"
                        },
    "engines":  {
                    "node":  "\u003e=18.0.0",
                    "npm":  "\u003e=8.0.0"
                }
}

```

---

### `workers/api/package-lock.json` (93.99 KB)

```json
{
  "name": "mastermarat-api",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "mastermarat-api",
      "version": "1.0.0",
      "license": "MIT",
      "devDependencies": {
        "eslint": "^8.57.1",
        "prettier": "^3.6.2",
        "wrangler": "^4.22.0"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      }
    },
    "node_modules/@cloudflare/kv-asset-handler": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/kv-asset-handler/-/kv-asset-handler-0.4.0.tgz",
      "integrity": "sha512-+tv3z+SPp+gqTIcImN9o0hqE9xyfQjI1XD9pL6NuKjua9B1y7mNYv0S9cP+QEbA4ppVgGZEmKOvHX5G5Ei1CVA==",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "dependencies": {
        "mime": "^3.0.0"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@cloudflare/unenv-preset": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/@cloudflare/unenv-preset/-/unenv-preset-2.3.3.tgz",
      "integrity": "sha512-/M3MEcj3V2WHIRSW1eAQBPRJ6JnGQHc6JKMAPLkDb7pLs3m6X9ES/+K3ceGqxI6TKeF32AWAi7ls0AYzVxCP0A==",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "peerDependencies": {
        "unenv": "2.0.0-rc.17",
        "workerd": "^1.20250508.0"
      },
      "peerDependenciesMeta": {
        "workerd": {
          "optional": true
        }
      }
    },
    "node_modules/@cloudflare/workerd-darwin-64": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/workerd-darwin-64/-/workerd-darwin-64-1.20250617.0.tgz",
      "integrity": "sha512-toG8JUKVLIks4oOJLe9FeuixE84pDpMZ32ip7mCpE7JaFc5BqGFvevk0YC/db3T71AQlialjRwioH3jS/dzItA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@cloudflare/workerd-darwin-arm64": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/workerd-darwin-arm64/-/workerd-darwin-arm64-1.20250617.0.tgz",
      "integrity": "sha512-JTX0exbC9/ZtMmQQA8tDZEZFMXZrxOpTUj2hHnsUkErWYkr5SSZH04RBhPg6dU4VL8bXuB5/eJAh7+P9cZAp7g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@cloudflare/workerd-linux-64": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/workerd-linux-64/-/workerd-linux-64-1.20250617.0.tgz",
      "integrity": "sha512-8jkSoVRJ+1bOx3tuWlZCGaGCV2ew7/jFMl6V3CPXOoEtERUHsZBQLVkQIGKcmC/LKSj7f/mpyBUeu2EPTo2HEg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@cloudflare/workerd-linux-arm64": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/workerd-linux-arm64/-/workerd-linux-arm64-1.20250617.0.tgz",
      "integrity": "sha512-YAzcOyu897z5dQKFzme1oujGWMGEJCR7/Wrrm1nSP6dqutxFPTubRADM8BHn2CV3ij//vaPnAeLmZE3jVwOwig==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@cloudflare/workerd-windows-64": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/@cloudflare/workerd-windows-64/-/workerd-windows-64-1.20250617.0.tgz",
      "integrity": "sha512-XWM/6sagDrO0CYDKhXhPjM23qusvIN1ju9ZEml6gOQs8tNOFnq6Cn6X9FAmnyapRFCGUSEC3HZYJAm7zwVKaMA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/@cspotcode/source-map-support": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/@cspotcode/source-map-support/-/source-map-support-0.8.1.tgz",
      "integrity": "sha512-IchNf6dN4tHoMFIn/7OE8LWZ19Y6q/67Bmf6vnGREv8RSbBVb9LPJxEcnwrcwX6ixSvaiGoomAUvu4YSxXrVgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "0.3.9"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.4.3.tgz",
      "integrity": "sha512-pBPWdu6MLKROBX05wSNKcNb++m5Er+KQ9QkB+WVM+pW2Kx9hoSrVTnu3BdkI5eBLZoKu/J6mW/B6i6bJB2ytXQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.4.tgz",
      "integrity": "sha512-1VCICWypeQKhVbE9oW/sJaAmjLxhVqacdkvPLEjwlttjfwENRSClS8EjBz0KzRyFSCPDIkuXW34Je/vk7zdB7Q==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.4.tgz",
      "integrity": "sha512-QNdQEps7DfFwE3hXiU4BZeOV68HHzYwGd0Nthhd3uCkkEKK7/R6MTgM0P7H7FAs5pU/DIWsviMmEGxEoxIZ+ZQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.4.tgz",
      "integrity": "sha512-bBy69pgfhMGtCnwpC/x5QhfxAz/cBgQ9enbtwjf6V9lnPI/hMyT9iWpR1arm0l3kttTr4L0KSLpKmLp/ilKS9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.4.tgz",
      "integrity": "sha512-TVhdVtQIFuVpIIR282btcGC2oGQoSfZfmBdTip2anCaVYcqWlZXGcdcKIUklfX2wj0JklNYgz39OBqh2cqXvcQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.4.tgz",
      "integrity": "sha512-Y1giCfM4nlHDWEfSckMzeWNdQS31BQGs9/rouw6Ub91tkK79aIMTH3q9xHvzH8d0wDru5Ci0kWB8b3up/nl16g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.4.tgz",
      "integrity": "sha512-CJsry8ZGM5VFVeyUYB3cdKpd/H69PYez4eJh1W/t38vzutdjEjtP7hB6eLKBoOdxcAlCtEYHzQ/PJ/oU9I4u0A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.4.tgz",
      "integrity": "sha512-yYq+39NlTRzU2XmoPW4l5Ifpl9fqSk0nAJYM/V/WUGPEFfek1epLHJIkTQM6bBs1swApjO5nWgvr843g6TjxuQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.4.tgz",
      "integrity": "sha512-0FgvOJ6UUMflsHSPLzdfDnnBBVoCDtBTVyn/MrWloUNvq/5SFmh13l3dvgRPkDihRxb77Y17MbqbCAa2strMQQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.4.tgz",
      "integrity": "sha512-kro4c0P85GMfFYqW4TWOpvmF8rFShbWGnrLqlzp4X1TNWjRY3JMYUfDCtOxPKOIY8B0WC8HN51hGP4I4hz4AaQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.4.tgz",
      "integrity": "sha512-+89UsQTfXdmjIvZS6nUnOOLoXnkUTB9hR5QAeLrQdzOSWZvNSAXAtcRDHWtqAUtAmv7ZM1WPOOeSxDzzzMogiQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.4.tgz",
      "integrity": "sha512-yTEjoapy8UP3rv8dB0ip3AfMpRbyhSN3+hY8mo/i4QXFeDxmiYbEKp3ZRjBKcOP862Ua4b1PDfwlvbuwY7hIGQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.4.tgz",
      "integrity": "sha512-NeqqYkrcGzFwi6CGRGNMOjWGGSYOpqwCjS9fvaUlX5s3zwOtn1qwg1s2iE2svBe4Q/YOG1q6875lcAoQK/F4VA==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.4.tgz",
      "integrity": "sha512-IcvTlF9dtLrfL/M8WgNI/qJYBENP3ekgsHbYUIzEzq5XJzzVEV/fXY9WFPfEEXmu3ck2qJP8LG/p3Q8f7Zc2Xg==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.4.tgz",
      "integrity": "sha512-HOy0aLTJTVtoTeGZh4HSXaO6M95qu4k5lJcH4gxv56iaycfz1S8GO/5Jh6X4Y1YiI0h7cRyLi+HixMR+88swag==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.4.tgz",
      "integrity": "sha512-i8JUDAufpz9jOzo4yIShCTcXzS07vEgWzyX3NH2G7LEFVgrLEhjwL3ajFE4fZI3I4ZgiM7JH3GQ7ReObROvSUA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.4.tgz",
      "integrity": "sha512-jFnu+6UbLlzIjPQpWCNh5QtrcNfMLjgIavnwPQAfoGx4q17ocOU9MsQ2QVvFxwQoWpZT8DvTLooTvmOQXkO51g==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.4.tgz",
      "integrity": "sha512-6e0cvXwzOnVWJHq+mskP8DNSrKBr1bULBvnFLpc1KY+d+irZSgZ02TGse5FsafKS5jg2e4pbvK6TPXaF/A6+CA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.4.tgz",
      "integrity": "sha512-vUnkBYxZW4hL/ie91hSqaSNjulOnYXE1VSLusnvHg2u3jewJBz3YzB9+oCw8DABeVqZGg94t9tyZFoHma8gWZQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.4.tgz",
      "integrity": "sha512-XAg8pIQn5CzhOB8odIcAm42QsOfa98SBeKUdo4xa8OvX8LbMZqEtgeWE9P/Wxt7MlG2QqvjGths+nq48TrUiKw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.4.tgz",
      "integrity": "sha512-Ct2WcFEANlFDtp1nVAXSNBPDxyU+j7+tId//iHXU2f/lN5AmO4zLyhDcpR5Cz1r08mVxzt3Jpyt4PmXQ1O6+7A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.4.tgz",
      "integrity": "sha512-xAGGhyOQ9Otm1Xu8NT1ifGLnA6M3sJxZ6ixylb+vIUVzvvd6GOALpwQrYrtlPouMqd/vSbgehz6HaVk4+7Afhw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.4.tgz",
      "integrity": "sha512-Mw+tzy4pp6wZEK0+Lwr76pWLjrtjmJyUB23tHKqEDP74R3q95luY/bXqXZeYl4NYlvwOqoRKlInQialgCKy67Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.4.tgz",
      "integrity": "sha512-AVUP428VQTSddguz9dO9ngb+E5aScyg7nOeJDrF1HPYu555gmza3bDGMPhmVXL8svDSoqPCsCPjb265yG/kLKQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.4.tgz",
      "integrity": "sha512-i1sW+1i+oWvQzSgfRcxxG2k4I9n3O9NRqy8U+uugaT2Dy7kLO9Y7wI72haOahxceMX8hZAzgGou1FhndRldxRg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.4.tgz",
      "integrity": "sha512-nOT2vZNw6hJ+z43oP1SPea/G/6AbN6X+bGNhNuq8NtRHy4wsMhw765IKLNmnjek7GvjWBYQ8Q5VBoYTFg9y1UQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.7.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.7.0.tgz",
      "integrity": "sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@fastify/busboy": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/@fastify/busboy/-/busboy-2.1.1.tgz",
      "integrity": "sha512-vBZP4NlzfOlerQTnba4aqZoMhE/a9HY7HRqoOPaETQcSQuWEIyZMHGfVu6w9wGtGK5fED5qRs2DteVCjOH60sA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.33.5.tgz",
      "integrity": "sha512-UT4p+iz/2H4twwAoLCqfA9UH5pI6DggwKEGuaPy7nCVQ8ZsiY5PIcrRvD1DzuY3qYL07NtIQcWnBSY/heikIFQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.33.5.tgz",
      "integrity": "sha512-fyHac4jIc1ANYGRDxtiqelIbdWkIuQaI84Mv45KvGRRxSAa7o7d1ZKAOBaYbnepLC1WqxfpimdeWfvqqSGwR2Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.0.4.tgz",
      "integrity": "sha512-XblONe153h0O2zuFfTAbQYAX2JhYmDHeWikp1LM9Hul9gVPjFY427k6dFEcOL72O01QxQsWi761svJ/ev9xEDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.0.4.tgz",
      "integrity": "sha512-xnGR8YuZYfJGmWPvmlunFaWJsb9T/AO2ykoP3Fz/0X5XV2aoYBPkX6xqCQvUTKKiLddarLaxpzNe+b1hjeWHAQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.0.5.tgz",
      "integrity": "sha512-gvcC4ACAOPRNATg/ov8/MnbxFDJqf/pDePbBnuBDcjsI8PssmjoKMAz4LtLaVi+OnSb5FK/yIOamqDwGmXW32g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.0.4.tgz",
      "integrity": "sha512-9B+taZ8DlyyqzZQnoeIvDVR/2F4EbMepXMc/NdVbkzsJbzkUjhXv/70GQJ7tdLA4YJgNP25zukcxpX2/SueNrA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.0.4.tgz",
      "integrity": "sha512-u7Wz6ntiSSgGSGcjZ55im6uvTrOxSIS8/dgoVMoiGE9I6JAfU50yH5BoDlYA1tcuGS7g/QNtetJnxA6QEsCVTA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.0.4.tgz",
      "integrity": "sha512-MmWmQ3iPFZr0Iev+BAgVMb3ZyC4KeFc3jFxnNbEPas60e1cIfevbtuyf9nDGIzOaW9PdnDciJm+wFFaTlj5xYw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.0.4.tgz",
      "integrity": "sha512-9Ti+BbTYDcsbp4wfYib8Ctm1ilkugkA/uscUn6UXK1ldpC1JjiXbLfFZtRlBhjPZ5o1NCLiDbg8fhUPKStHoTA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.0.4.tgz",
      "integrity": "sha512-viYN1KX9m+/hGkJtvYYp+CCLgnJXwiQB39damAO7WMdKWlIhmYTfHjwSbQeUK/20vY154mwezd9HflVFM1wVSw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.33.5.tgz",
      "integrity": "sha512-JTS1eldqZbJxjvKaAkxhZmBqPRGmxgu+qFKSInv8moZ2AmT5Yib3EQ1c6gp493HvrvV8QgdOXdyaIBrhvFhBMQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.0.5"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.33.5.tgz",
      "integrity": "sha512-JMVv+AMRyGOHtO1RFBiJy/MBsgz0x4AWrT6QoEVVTyh1E39TrCUpTRI7mx9VksGX4awWASxqCYLCV4wBZHAYxA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.33.5.tgz",
      "integrity": "sha512-y/5PCd+mP4CA/sPDKl2961b+C9d+vPAveS33s6Z3zfASk2j5upL6fXVPZi7ztePZ5CuH+1kW8JtvxgbuXHRa4Q==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.33.5.tgz",
      "integrity": "sha512-opC+Ok5pRNAzuvq1AG0ar+1owsu842/Ab+4qvU879ippJBHvyY5n2mxF1izXqkPYlGuP/M556uh53jRLJmzTWA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.33.5.tgz",
      "integrity": "sha512-XrHMZwGQGvJg2V/oRSUfSAfjfPxO+4DkiRh6p2AFjLQztWUuY/o8Mq0eMQVIY7HJ1CDQUJlxGGZRw1a5bqmd1g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.33.5.tgz",
      "integrity": "sha512-WT+d/cgqKkkKySYmqoZ8y3pxx7lx9vVejxW/W4DOFMYVSkErR+w7mf2u8m/y4+xHe7yY9DAXQMWQhpnMuFfScw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.33.5.tgz",
      "integrity": "sha512-ykUW4LVGaMcU9lu9thv85CbRMAwfeadCJHRsg2GmeRa/cJxsVY9Rbd57JcMxBkKHag5U/x7TSBpScF4U8ElVzg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.2.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.33.5.tgz",
      "integrity": "sha512-T36PblLaTwuVJ/zw/LaH0PdZkRz5rd3SmMHX8GSmR7vtNSP5Z6bQkExdSK7xGWyxLw4sUknBuugTelgw2faBbQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.33.5.tgz",
      "integrity": "sha512-MpY/o8/8kj+EcnxwvrP4aTJSWw/aZ7JIGR4aBeZkZw5B7/Jn+tY9/VNwtcoGmdT7GfggGIU4kygOMSbYnOrAbg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.9",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.9.tgz",
      "integrity": "sha512-3Belt6tdc8bPgAtbcmdtNJlirVoTmEb5e2gC94PnkwEW9jI6CAHUeoG85tjWP5WquqfavoMtMwiG4P926ZKKuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.0.3",
        "@jridgewell/sourcemap-codec": "^1.4.10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.3.0.tgz",
      "integrity": "sha512-WmoN8qaIAo7WTYWbAZuG8PYEhn5fkz7dZrqTBZ7dtt//lL2Gwms1IcnQ5yHqjDfX8Ft5j4YzDM23f87zBfDe9g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-walk": {
      "version": "8.3.2",
      "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-8.3.2.tgz",
      "integrity": "sha512-cjkyv4OtNCIeqhHrfS81QWXoCBPExR/J62oyEqepVw8WaQeSqpW2uhuLPh1m9eWhDuOo/jUXVTlifvesOWp/4A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/as-table": {
      "version": "1.0.55",
      "resolved": "https://registry.npmjs.org/as-table/-/as-table-1.0.55.tgz",
      "integrity": "sha512-xvsWESUJn0JN421Xb9MQw6AsMHRCUknCe0Wjlxvjud80mU4E6hQf1A6NzQKcYNmYw62MfzEtXc+badstZP3JpQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "printable-characters": "^1.0.42"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/blake3-wasm": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/blake3-wasm/-/blake3-wasm-2.1.5.tgz",
      "integrity": "sha512-F1+K8EbfOZE49dtoPtmxUQrpXaBIl3ICvasLh+nJta0xkz+9kF/7uet9fLnwKqhDrmj6g+6K3Tw9yQPUg2ka5g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/data-uri-to-buffer": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-2.0.2.tgz",
      "integrity": "sha512-ND9qDTLc6diwj+Xe5cdAgVTbLVdXbtxTJRXRhli8Mowuaan+0EJOtdqJ0QCHNSSPyoXGx9HX2/VMnKeC34AChA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.1.tgz",
      "integrity": "sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/defu": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.4.tgz",
      "integrity": "sha512-mEQCMmwJu317oSz8CwdIOdwf3xMif1ttiM8LTufzc3g6kR+9Pe236twL8j3IYT1F7GfRgGcW6MWxzZjLIkuHIg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
      "integrity": "sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.4",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.4.tgz",
      "integrity": "sha512-8pgjLUcUjcgDg+2Q4NYXnPbo/vncAY4UmyaCm0jZevERqCHZIaWwdJHkf8XQtu4AxSKCdvrUbT0XUr1IdZzI8Q==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.4",
        "@esbuild/android-arm": "0.25.4",
        "@esbuild/android-arm64": "0.25.4",
        "@esbuild/android-x64": "0.25.4",
        "@esbuild/darwin-arm64": "0.25.4",
        "@esbuild/darwin-x64": "0.25.4",
        "@esbuild/freebsd-arm64": "0.25.4",
        "@esbuild/freebsd-x64": "0.25.4",
        "@esbuild/linux-arm": "0.25.4",
        "@esbuild/linux-arm64": "0.25.4",
        "@esbuild/linux-ia32": "0.25.4",
        "@esbuild/linux-loong64": "0.25.4",
        "@esbuild/linux-mips64el": "0.25.4",
        "@esbuild/linux-ppc64": "0.25.4",
        "@esbuild/linux-riscv64": "0.25.4",
        "@esbuild/linux-s390x": "0.25.4",
        "@esbuild/linux-x64": "0.25.4",
        "@esbuild/netbsd-arm64": "0.25.4",
        "@esbuild/netbsd-x64": "0.25.4",
        "@esbuild/openbsd-arm64": "0.25.4",
        "@esbuild/openbsd-x64": "0.25.4",
        "@esbuild/sunos-x64": "0.25.4",
        "@esbuild/win32-arm64": "0.25.4",
        "@esbuild/win32-ia32": "0.25.4",
        "@esbuild/win32-x64": "0.25.4"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/exit-hook": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/exit-hook/-/exit-hook-2.2.1.tgz",
      "integrity": "sha512-eNTPlAD67BmP31LDINZ3U7HSF8l57TxOY2PmBJ1shpCvpnxBF93mWCE8YHBnXs8qiUZJc9WDcWIeC3a2HIAMfw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/exsolve": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/exsolve/-/exsolve-1.0.7.tgz",
      "integrity": "sha512-VO5fQUzZtI6C+vx4w/4BWJpg3s/5l+6pRQEHzFRM8WFi4XffSP1Z+4qi7GbjWbvRQEbdIco5mIMq+zX4rPuLrw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.19.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz",
      "integrity": "sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-source": {
      "version": "2.0.12",
      "resolved": "https://registry.npmjs.org/get-source/-/get-source-2.0.12.tgz",
      "integrity": "sha512-X5+4+iD+HoSeEED+uwrQ07BOQr0kEDFMVqqpBuI+RaZBpBpHCuXxo70bjar6f0b0u/DQJsJ7ssurpP0V60Az+w==",
      "dev": true,
      "license": "Unlicense",
      "dependencies": {
        "data-uri-to-buffer": "^2.0.0",
        "source-map": "^0.6.1"
      }
    },
    "node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob-to-regexp": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/glob-to-regexp/-/glob-to-regexp-0.4.1.tgz",
      "integrity": "sha512-lkX1HJXwyMcprw/5YUZc2s7DrpAiHB21/V+E1rHUrVNokkvB6bqMzT0VfV6/86ZNabt1k14YOIaT7nDvOX3Iiw==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mime": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/mime/-/mime-3.0.0.tgz",
      "integrity": "sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mime": "cli.js"
      },
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/miniflare": {
      "version": "4.20250617.4",
      "resolved": "https://registry.npmjs.org/miniflare/-/miniflare-4.20250617.4.tgz",
      "integrity": "sha512-IAoApFKxOJlaaFkym5ETstVX3qWzVt3xyqCDj6vSSTgEH3zxZJ5417jZGg8iQfMHosKCcQH1doPPqqnOZm/yrw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@cspotcode/source-map-support": "0.8.1",
        "acorn": "8.14.0",
        "acorn-walk": "8.3.2",
        "exit-hook": "2.2.1",
        "glob-to-regexp": "0.4.1",
        "sharp": "^0.33.5",
        "stoppable": "1.1.0",
        "undici": "^5.28.5",
        "workerd": "1.20250617.0",
        "ws": "8.18.0",
        "youch": "3.3.4",
        "zod": "3.22.3"
      },
      "bin": {
        "miniflare": "bootstrap.js"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/miniflare/node_modules/acorn": {
      "version": "8.14.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",
      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/mustache": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/mustache/-/mustache-4.2.0.tgz",
      "integrity": "sha512-71ippSywq5Yb7/tVYyGbkBggbU8H3u5Rz56fH60jGFgr8uHwxs+aSKeqmluIVzM0m0kB7xQjKS6qPfd0b2ZoqQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mustache": "bin/mustache"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/ohash": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.11.tgz",
      "integrity": "sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-6.3.0.tgz",
      "integrity": "sha512-Yhpw4T9C6hPpgPeA28us07OJeqZ5EzQTkbfwuhsUg0c237RomFoETJgmp2sa3F/41gfLE6G5cqcYwznmeEeOlQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.6.2",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.6.2.tgz",
      "integrity": "sha512-I7AIg5boAr5R0FFtJ6rCfD+LFsWHp81dolrFD8S79U9tb8Az2nGrJncnMSnys+bpQJfRUzqs9hnA81OAA3hCuQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/printable-characters": {
      "version": "1.0.42",
      "resolved": "https://registry.npmjs.org/printable-characters/-/printable-characters-1.0.42.tgz",
      "integrity": "sha512-dKp+C4iXWK4vVYZmYSd0KBH5F/h1HoZRsbJ82AVKRO3PEo8L4lBS/vLwhVtpwwuYcoIsVY+1JYKR268yn480uQ==",
      "dev": true,
      "license": "Unlicense"
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.33.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.33.5.tgz",
      "integrity": "sha512-haPVm1EkS9pgvHrQ/F3Xy+hgcuMV0Wm9vfIBSiwZ05k+xgb0PkBQpGsAA/oWdDobNaZTH5ppvHtzCFbnSEwHVw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.3",
        "semver": "^7.6.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.33.5",
        "@img/sharp-darwin-x64": "0.33.5",
        "@img/sharp-libvips-darwin-arm64": "1.0.4",
        "@img/sharp-libvips-darwin-x64": "1.0.4",
        "@img/sharp-libvips-linux-arm": "1.0.5",
        "@img/sharp-libvips-linux-arm64": "1.0.4",
        "@img/sharp-libvips-linux-s390x": "1.0.4",
        "@img/sharp-libvips-linux-x64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.0.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.0.4",
        "@img/sharp-linux-arm": "0.33.5",
        "@img/sharp-linux-arm64": "0.33.5",
        "@img/sharp-linux-s390x": "0.33.5",
        "@img/sharp-linux-x64": "0.33.5",
        "@img/sharp-linuxmusl-arm64": "0.33.5",
        "@img/sharp-linuxmusl-x64": "0.33.5",
        "@img/sharp-wasm32": "0.33.5",
        "@img/sharp-win32-ia32": "0.33.5",
        "@img/sharp-win32-x64": "0.33.5"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stacktracey": {
      "version": "2.1.8",
      "resolved": "https://registry.npmjs.org/stacktracey/-/stacktracey-2.1.8.tgz",
      "integrity": "sha512-Kpij9riA+UNg7TnphqjH7/CzctQ/owJGNbFkfEeve4Z4uxT5+JapVLFXcsurIfN34gnTWZNJ/f7NMG0E8JDzTw==",
      "dev": true,
      "license": "Unlicense",
      "dependencies": {
        "as-table": "^1.0.36",
        "get-source": "^2.0.12"
      }
    },
    "node_modules/stoppable": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stoppable/-/stoppable-1.1.0.tgz",
      "integrity": "sha512-KXDYZ9dszj6bzvnEMRYvxgeTHU74QBFL54XKtP3nyMuJ81CFYtABZ3bAzL2EdFUaEwJOBOgENyFj3R7oTzDyyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4",
        "npm": ">=6"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/ufo": {
      "version": "1.6.1",
      "resolved": "https://registry.npmjs.org/ufo/-/ufo-1.6.1.tgz",
      "integrity": "sha512-9a4/uxlTWJ4+a5i0ooc1rU7C7YOw3wT+UGqdeNNHWnOF9qcMBgLRS+4IYUqbczewFx4mLEig6gawh7X6mFlEkA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/undici": {
      "version": "5.29.0",
      "resolved": "https://registry.npmjs.org/undici/-/undici-5.29.0.tgz",
      "integrity": "sha512-raqeBD6NQK4SkWhQzeYKd1KmIG6dllBOTt55Rmkt4HtI9mwdWtJljnrXjAFUBLTSN67HWrOIZ3EPF4kjUw80Bg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@fastify/busboy": "^2.0.0"
      },
      "engines": {
        "node": ">=14.0"
      }
    },
    "node_modules/unenv": {
      "version": "2.0.0-rc.17",
      "resolved": "https://registry.npmjs.org/unenv/-/unenv-2.0.0-rc.17.tgz",
      "integrity": "sha512-B06u0wXkEd+o5gOCMl/ZHl5cfpYbDZKAT+HWTL+Hws6jWu7dCiqBBXXXzMFcFVJb8D4ytAnYmxJA83uwOQRSsg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.4",
        "exsolve": "^1.0.4",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "ufo": "^1.6.1"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/workerd": {
      "version": "1.20250617.0",
      "resolved": "https://registry.npmjs.org/workerd/-/workerd-1.20250617.0.tgz",
      "integrity": "sha512-Uv6p0PYUHp/W/aWfUPLkZVAoAjapisM27JJlwcX9wCPTfCfnuegGOxFMvvlYpmNaX4YCwEdLCwuNn3xkpSkuZw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "bin": {
        "workerd": "bin/workerd"
      },
      "engines": {
        "node": ">=16"
      },
      "optionalDependencies": {
        "@cloudflare/workerd-darwin-64": "1.20250617.0",
        "@cloudflare/workerd-darwin-arm64": "1.20250617.0",
        "@cloudflare/workerd-linux-64": "1.20250617.0",
        "@cloudflare/workerd-linux-arm64": "1.20250617.0",
        "@cloudflare/workerd-windows-64": "1.20250617.0"
      }
    },
    "node_modules/wrangler": {
      "version": "4.22.0",
      "resolved": "https://registry.npmjs.org/wrangler/-/wrangler-4.22.0.tgz",
      "integrity": "sha512-m8qVO3YxhUTII+4U889G/f5UuLSvMkUkCNatupV2f/SJ+iqaWtP1QbuQII8bs2J/O4rqxsz46Wu2S50u7tKB5Q==",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "dependencies": {
        "@cloudflare/kv-asset-handler": "0.4.0",
        "@cloudflare/unenv-preset": "2.3.3",
        "blake3-wasm": "2.1.5",
        "esbuild": "0.25.4",
        "miniflare": "4.20250617.4",
        "path-to-regexp": "6.3.0",
        "unenv": "2.0.0-rc.17",
        "workerd": "1.20250617.0"
      },
      "bin": {
        "wrangler": "bin/wrangler.js",
        "wrangler2": "bin/wrangler.js"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      },
      "peerDependencies": {
        "@cloudflare/workers-types": "^4.20250617.0"
      },
      "peerDependenciesMeta": {
        "@cloudflare/workers-types": {
          "optional": true
        }
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.18.0",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.0.tgz",
      "integrity": "sha512-8VbfWfHLbbwu3+N6OKsOMpBdT4kXPDDB9cJk2bJ6mh9ucxdlnNvH1e+roYkKmN9Nxw2yjz7VzeO9oOz2zJ04Pw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/youch": {
      "version": "3.3.4",
      "resolved": "https://registry.npmjs.org/youch/-/youch-3.3.4.tgz",
      "integrity": "sha512-UeVBXie8cA35DS6+nBkls68xaBBXCye0CNznrhszZjTbRVnJKQuNsyLKBTTL4ln1o1rh2PKtv35twV7irj5SEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cookie": "^0.7.1",
        "mustache": "^4.2.0",
        "stacktracey": "^2.1.8"
      }
    },
    "node_modules/zod": {
      "version": "3.22.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.22.3.tgz",
      "integrity": "sha512-EjIevzuJRiRPbVH4mGc8nApb/lVLKVpmUhAaR5R5doKGfAnGJ6Gr3CViAVjP+4FWSxCsybeWQdcgCtbX+7oZug==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

```

---

### `workers/api/wrangler.toml` (0.55 KB)

```toml
name = "mastermarat-api"
main = "src/worker-new.js"
compatibility_date = "2024-07-01"

# R2 bucket binding
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"

# Production environment
[env.production]
name = "mastermarat-api"
route = { pattern = "api.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.production.vars]
ENVIRONMENT = "production"

# Development environment
[env.dev]
name = "mastermarat-api-dev"
route = { pattern = "api-dev.mastermarat.com/*", zone_name = "mastermarat.com" }

[env.dev.vars]
ENVIRONMENT = "development"

```

---

## Scripts (11)

### `scripts/export-project-structure.ps1` (10.16 KB)

```powershell
# export-project-structure.ps1
# Экспорт значимой структуры проекта MasterMarat

param(
    [string]$OutputFormat = "tree",  # tree, markdown, json
    [string]$OutputFile = "",
    [switch]$ShowContent = $false,
    [switch]$IncludeGitInfo = $false
)

# Конфигурация: что включать в экспорт
$includePatterns = @(
    # Конфигурационные файлы
    "*.json",
    "*.toml",
    "*.yml",
    "*.yaml",
    ".gitignore",
    ".gitattributes",
    ".env.example",

    # Код
    "*.js",
    "*.ps1",
    "*.sh",
    "*.bat",

    # Документация
    "*.md",
    "README*",
    "LICENSE*",

    # Структурные файлы
    ".gitkeep"
)

# Папки для включения
$includeFolders = @(
    "workers",
    "scripts",
    "docs",
    "data",
    "content",
    "temp_upload"
)

# Что исключать
$excludePatterns = @(
    # Системные
    ".git",
    ".wrangler",
    "node_modules",
    ".vscode",

    # Временные
    "*.log",
    "*.tmp",
    "*.temp",
    "*.bak",
    "*.backup",

    # Медиа (большие файлы)
    "*.mp4",
    "*.mov",
    "*.avi",
    "*.jpg",
    "*.jpeg",
    "*.png",
    "*.gif",

    # Данные
    "*.db",
    "*.sqlite",

    # Приватные
    ".env",
    ".dev.vars",
    "*.pem",
    "*.key",

    # Кеш
    "dist",
    "build",
    ".cache"
)

# Получение структуры проекта
function Get-ProjectStructure {
    param([string]$Path = ".")

    $items = @()

    # Получаем все файлы и папки
    Get-ChildItem -Path $Path -Recurse | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
        $include = $false

        # Проверяем исключения
        foreach ($pattern in $excludePatterns) {
            if ($relativePath -like "*$pattern*") {
                return
            }
        }

        # Для файлов проверяем паттерны включения
        if (-not $_.PSIsContainer) {
            foreach ($pattern in $includePatterns) {
                if ($_.Name -like $pattern) {
                    $include = $true
                    break
                }
            }
        } else {
            # Для папок проверяем, входят ли они в список
            foreach ($folder in $includeFolders) {
                if ($relativePath -like "$folder*") {
                    $include = $true
                    break
                }
            }
        }

        if ($include) {
            $item = @{
                Path = $relativePath
                Name = $_.Name
                IsDirectory = $_.PSIsContainer
                Size = if (-not $_.PSIsContainer) { $_.Length } else { 0 }
                LastModified = $_.LastWriteTime
            }

            # Добавляем Git информацию если нужно
            if ($IncludeGitInfo -and -not $_.PSIsContainer) {
                $gitStatus = git status --porcelain $_.FullName 2>$null
                if ($gitStatus) {
                    $item.GitStatus = $gitStatus.Substring(0, 2).Trim()
                }
            }

            $items += $item
        }
    }

    return $items | Sort-Object Path
}

# Вывод в формате дерева
function Export-AsTree {
    param($Items)

    $tree = @()
    $tree += "MasterMarat Project Structure"
    $tree += "=" * 30
    $tree += ""

    $lastDepth = 0
    foreach ($item in $Items) {
        $parts = $item.Path.Split('\')
        $depth = $parts.Count - 1
        $indent = "  " * $depth
        $prefix = if ($item.IsDirectory) { "📁" } else { "📄" }

        $line = "$indent$prefix $($item.Name)"

        if (-not $item.IsDirectory -and $item.Size -gt 0) {
            $sizeKB = [math]::Round($item.Size / 1KB, 2)
            $line += " ($sizeKB KB)"
        }

        if ($item.GitStatus) {
            $statusIcon = switch ($item.GitStatus) {
                "M" { "✏️" }
                "A" { "➕" }
                "D" { "➖" }
                "??" { "❓" }
                default { "📝" }
            }
            $line += " $statusIcon"
        }

        $tree += $line
    }

    return $tree -join "`n"
}

# Вывод в формате Markdown
function Export-AsMarkdown {
    param($Items)

    $md = @()
    $md += "# MasterMarat Project Structure"
    $md += ""
    $md += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    $md += ""

    # Статистика
    $fileCount = ($Items | Where-Object { -not $_.IsDirectory }).Count
    $folderCount = ($Items | Where-Object { $_.IsDirectory }).Count
    $totalSize = ($Items | Where-Object { -not $_.IsDirectory } | Measure-Object -Property Size -Sum).Sum

    $md += "## Statistics"
    $md += "- Total files: $fileCount"
    $md += "- Total folders: $folderCount"
    $md += "- Total size: $([math]::Round($totalSize / 1MB, 2)) MB"
    $md += ""

    # Структура по папкам
    $md += "## Project Structure"
    $md += ""

    # Группируем по корневым папкам
    $rootFolders = $Items | ForEach-Object {
        $_.Path.Split('\')[0]
    } | Select-Object -Unique

    foreach ($folder in $rootFolders) {
        $md += "### 📁 $folder/"
        $md += ""

        $folderItems = $Items | Where-Object { $_.Path -like "$folder*" }

        # Создаем таблицу для файлов
        $files = $folderItems | Where-Object { -not $_.IsDirectory }
        if ($files) {
            $md += "| File | Size | Modified |"
            $md += "|------|------|----------|"

            foreach ($file in $files) {
                $relativePath = $file.Path.Substring($folder.Length + 1)
                $sizeKB = [math]::Round($file.Size / 1KB, 2)
                $modified = $file.LastModified.ToString('yyyy-MM-dd')
                $md += "| $relativePath | $sizeKB KB | $modified |"
            }
            $md += ""
        }
    }

    # Важные файлы
    $md += "## Key Files"
    $md += ""

    $keyFiles = @(
        @{Pattern = "worker*.js"; Description = "API Workers"},
        @{Pattern = "*.ps1"; Description = "PowerShell Scripts"},
        @{Pattern = "courses*.js"; Description = "Course Configuration"},
        @{Pattern = "wrangler.toml"; Description = "Cloudflare Config"}
    )

    foreach ($key in $keyFiles) {
        $files = $Items | Where-Object { $_.Name -like $key.Pattern -and -not $_.IsDirectory }
        if ($files) {
            $md += "### $($key.Description)"
            foreach ($file in $files) {
                $md += "- `$($file.Path)`"
            }
            $md += ""
        }
    }

    return $md -join "`n"
}

# Вывод в формате JSON
function Export-AsJson {
    param($Items)

    $structure = @{
        project = "MasterMarat"
        generated = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
        statistics = @{
            files = ($Items | Where-Object { -not $_.IsDirectory }).Count
            folders = ($Items | Where-Object { $_.IsDirectory }).Count
            totalSizeMB = [math]::Round((($Items | Where-Object { -not $_.IsDirectory } | Measure-Object -Property Size -Sum).Sum) / 1MB, 2)
        }
        structure = @{}
    }

    # Строим иерархическую структуру
    foreach ($item in $Items) {
        $parts = $item.Path.Split('\')
        $current = $structure.structure

        for ($i = 0; $i -lt $parts.Count - 1; $i++) {
            if (-not $current.ContainsKey($parts[$i])) {
                $current[$parts[$i]] = @{}
            }
            $current = $current[$parts[$i]]
        }

        if (-not $item.IsDirectory) {
            $current[$parts[-1]] = @{
                size = $item.Size
                modified = $item.LastModified.ToString('yyyy-MM-dd HH:mm:ss')
            }
            if ($item.GitStatus) {
                $current[$parts[-1]].gitStatus = $item.GitStatus
            }
        }
    }

    return $structure | ConvertTo-Json -Depth 10
}

# Основная функция
function Main {
    Write-Host "🔍 Анализ структуры проекта MasterMarat..." -ForegroundColor Cyan

    # Получаем структуру
    $items = Get-ProjectStructure

    Write-Host "📊 Найдено: $($items.Count) элементов" -ForegroundColor Green

    # Экспорт в нужном формате
    $output = switch ($OutputFormat.ToLower()) {
        "tree" { Export-AsTree -Items $items }
        "markdown" { Export-AsMarkdown -Items $items }
        "md" { Export-AsMarkdown -Items $items }
        "json" { Export-AsJson -Items $items }
        default { Export-AsTree -Items $items }
    }

    # Сохранение или вывод
    if ($OutputFile) {
        $output | Out-File -FilePath $OutputFile -Encoding UTF8
        Write-Host "✅ Сохранено в: $OutputFile" -ForegroundColor Green

        # Предлагаем открыть
        $open = Read-Host "Открыть файл? (y/n)"
        if ($open -eq 'y') {
            Start-Process $OutputFile
        }
    } else {
        # Выводим в консоль
        Write-Host ""
        Write-Output $output
    }

    # Показываем содержимое важных файлов если нужно
    if ($ShowContent) {
        Write-Host "`n✅ Содержимое ключевых файлов:" -ForegroundColor Yellow

        $keyFiles = @("wrangler.toml", "package.json", ".gitignore")
        foreach ($fileName in $keyFiles) {
            $file = $items | Where-Object { $_.Name -eq $fileName } | Select-Object -First 1
            if ($file) {
                Write-Host "`n--- $($file.Path) ---" -ForegroundColor Cyan
                Get-Content $file.Path -ErrorAction SilentlyContinue | Select-Object -First 20
            }
        }
    }
}

# Запуск
Main

```

---

### `scripts/export-structure.ps1` (4.44 KB)

```powershell
# export-structure.ps1
# Simple project structure export

param(
    [string]$Format = "tree",
    [string]$Output = ""
)

# Config
$includeFiles = @("*.js", "*.ps1", "*.json", "*.toml", "*.md", "*.yml", "*.yaml", ".gitignore")
$excludeDirs = @(".git", "node_modules", ".wrangler", "dist", "build")
$excludeFiles = @("*.mp4", "*.jpg", "*.png", "*.log", "*.tmp")

# Get files
function Get-ProjectFiles {
    $files = @()

    Get-ChildItem -Recurse -File | ForEach-Object {
        $include = $false
        $exclude = $false

        # Check excludes
        foreach ($pattern in $excludeFiles) {
            if ($_.Name -like $pattern) {
                $exclude = $true
                break
            }
        }

        foreach ($dir in $excludeDirs) {
            if ($_.FullName -like "*\$dir\*") {
                $exclude = $true
                break
            }
        }

        # Check includes
        if (-not $exclude) {
            foreach ($pattern in $includeFiles) {
                if ($_.Name -like $pattern) {
                    $include = $true
                    break
                }
            }
        }

        if ($include) {
            $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
            $files += @{
                Path = $relativePath
                Name = $_.Name
                Size = $_.Length
                Dir = Split-Path $relativePath -Parent
            }
        }
    }

    return $files | Sort-Object Path
}

# Tree format
function Format-Tree {
    param($Files)

    $output = @()
    $output += "PROJECT STRUCTURE"
    $output += "================="
    $output += ""

    $currentDir = ""
    foreach ($file in $Files) {
        if ($file.Dir -ne $currentDir) {
            $currentDir = $file.Dir
            if ($currentDir) {
                $output += ""
                $output += "$currentDir\"
            }
        }

        $indent = "  "
        if ($currentDir) {
            $depth = ($currentDir.Split('\').Count)
            $indent = "  " * ($depth + 1)
        }

        $sizeKB = [math]::Round($file.Size / 1KB, 1)
        $output += "${indent}$($file.Name) (${sizeKB}KB)"
    }

    return $output -join "`r`n"
}

# Markdown format
function Format-Markdown {
    param($Files)

    $output = @()
    $output += "# Project Structure"
    $output += ""
    $output += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    $output += ""

    # Stats
    $fileCount = $Files.Count
    $totalSize = 0
    if ($Files) {
        $totalSize = ($Files | ForEach-Object { $_.Size } | Measure-Object -Sum).Sum
    }
    $output += "## Statistics"
    $output += "- Files: $fileCount"
    if ($totalSize -gt 0) {
        $output += "- Total size: $([math]::Round($totalSize / 1MB, 2)) MB"
    }
    $output += ""

    # Group by directory
    $dirs = $Files | Group-Object Dir

    foreach ($group in $dirs | Sort-Object Name) {
        $dirName = if ($group.Name) { $group.Name } else { "root" }
        $output += "## $dirName"
        $output += ""
        $output += "| File | Size |"
        $output += "|------|------|"

        foreach ($file in $group.Group | Sort-Object Name) {
            $sizeKB = [math]::Round($file.Size / 1KB, 1)
            $output += "| $($file.Name) | ${sizeKB} KB |"
        }
        $output += ""
    }

    return $output -join "`r`n"
}

# Main
Write-Host "Analyzing project structure..." -ForegroundColor Cyan

$files = Get-ProjectFiles
Write-Host "Found $($files.Count) files" -ForegroundColor Green

# Format output
$result = switch ($Format.ToLower()) {
    "markdown" { Format-Markdown -Files $files }
    "md" { Format-Markdown -Files $files }
    default { Format-Tree -Files $files }
}

# Save or display
if ($Output) {
    # Check if file exists
    if (Test-Path $Output) {
        Write-Host "File already exists: $Output" -ForegroundColor Yellow
        $confirm = Read-Host "Overwrite? (y/n)"
        if ($confirm -ne 'y') {
            Write-Host "Cancelled" -ForegroundColor Red
            return
        }
    }

    # Force overwrite
    $result | Out-File -FilePath $Output -Encoding UTF8 -Force
    Write-Host "Saved to: $Output" -ForegroundColor Green

    # Ask to open
    $open = Read-Host "Open file? (y/n)"
    if ($open -eq 'y') {
        Start-Process $Output
    }
} else {
    Write-Output $result
}

```

---

### `scripts/export-working-files.ps1` (5.59 KB)

```powershell
# export-working-files.ps1
# Экспорт минимального списка рабочих файлов проекта

param(
    [string]$OutputFile = "working-files.md"
)

# Что включаем (только код и конфиги)
$includePatterns = @(
    "*.js",      # JavaScript код
    "*.ps1",     # PowerShell скрипты
    "*.json",    # Конфигурации и данные
    "*.toml",    # Wrangler config
    "*.yml",     # CI/CD configs
    "*.yaml",    # Configs
    ".gitignore" # Git config
)

# Что исключаем
$excludePatterns = @(
    "*node_modules*",
    "*.wrangler*",
    "*dist*",
    "*build*",
    "package-lock.json",  # Большой файл зависимостей
    "chat_*.md",          # Чат-логи
    "*.md",               # Документация
    "*.log",
    "*.tmp",
    "*.bak"
)

# Получаем файлы
function Get-WorkingFiles {
    $files = @()

    Get-ChildItem -Recurse -File | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
        $include = $false

        # Проверяем исключения
        foreach ($pattern in $excludePatterns) {
            if ($relativePath -like $pattern) {
                return
            }
        }

        # Проверяем включения
        foreach ($pattern in $includePatterns) {
            if ($_.Name -like $pattern) {
                $include = $true
                break
            }
        }

        if ($include) {
            $files += $relativePath
        }
    }

    return $files | Sort-Object
}

# Группируем файлы по категориям
function Group-FilesByCategory {
    param($Files)

    $categories = @{
        "API Core" = @()
        "API Handlers" = @()
        "API Services" = @()
        "API Utils" = @()
        "API Config" = @()
        "Scripts" = @()
        "Course Content" = @()
        "Project Config" = @()
        "Other" = @()
    }

    foreach ($file in $Files) {
        $added = $false

        # API файлы
        if ($file -like "*workers\api\src\*") {
            if ($file -like "*\handlers\*") {
                $categories["API Handlers"] += $file
                $added = $true
            }
            elseif ($file -like "*\services\*") {
                $categories["API Services"] += $file
                $added = $true
            }
            elseif ($file -like "*\utils\*") {
                $categories["API Utils"] += $file
                $added = $true
            }
            elseif ($file -like "*\config\*") {
                $categories["API Config"] += $file
                $added = $true
            }
            elseif ($file -match "worker.*\.js$") {
                $categories["API Core"] += $file
                $added = $true
            }
        }
        # Скрипты
        elseif ($file -like "*.ps1") {
            $categories["Scripts"] += $file
            $added = $true
        }
        # Контент курсов
        elseif ($file -like "*content\*" -or $file -match "lesson\d+\.json") {
            $categories["Course Content"] += $file
            $added = $true
        }
        # Конфиги проекта
        elseif ($file -match "^(package\.json|wrangler\.toml|\.gitignore|.*\.yml)$") {
            $categories["Project Config"] += $file
            $added = $true
        }

        if (-not $added) {
            $categories["Other"] += $file
        }
    }

    return $categories
}

# Создаем MD файл
function New-MarkdownFile {
    param($Categories)

    $output = @()
    $output += "# Working Files - MasterMarat"
    $output += ""
    $output += "*Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')*"
    $output += ""

    $totalFiles = 0
    foreach ($category in $Categories.GetEnumerator()) {
        $totalFiles += $category.Value.Count
    }
    $output += "**Total: $totalFiles files**"
    $output += ""

    # Выводим категории
    foreach ($category in $Categories.GetEnumerator() | Sort-Object Name) {
        if ($category.Value.Count -gt 0) {
            $output += "## $($category.Name) ($($category.Value.Count))"
            $output += ""

            foreach ($file in $category.Value | Sort-Object) {
                # Укороченный путь для читаемости
                $displayPath = $file
                if ($file -like "*workers\api\src\*") {
                    $displayPath = $file.Substring($file.IndexOf("workers\api\src\"))
                }

                $output += "- ``$displayPath``"
            }
            $output += ""
        }
    }

    return $output -join "`r`n"
}

# Main
Write-Host "Scanning project files..." -ForegroundColor Cyan

$files = Get-WorkingFiles
Write-Host "Found $($files.Count) working files" -ForegroundColor Green

$categories = Group-FilesByCategory -Files $files

$markdown = New-MarkdownFile -Categories $categories

# Save
$markdown | Out-File -FilePath $OutputFile -Encoding UTF8 -Force
Write-Host "Saved to: $OutputFile" -ForegroundColor Green

# Show summary
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
foreach ($cat in $categories.GetEnumerator() | Sort-Object Name) {
    if ($cat.Value.Count -gt 0) {
        Write-Host "  $($cat.Name): $($cat.Value.Count) files" -ForegroundColor White
    }
}

# Ask to open
$open = Read-Host "`nOpen file? (y/n)"
if ($open -eq 'y') {
    Start-Process $OutputFile
}

```

---

### `scripts/export-working-files-with-content.ps1` (6.69 KB)

```powershell
# Export Working Files with Content - MasterMarat Project
# This script exports all important project files with their content to a markdown file
#.\scripts\export-working-files-with-content.ps1

$projectRoot = Get-Location
$outputFile = "working-files-content.md"

# File categories configuration
$categories = @{
    "API Config" = @("workers\api\src\config\*.js")
    "API Core" = @("workers\api\src\templates\*.js", "workers\api\src\worker*.js")
    "API Handlers" = @("workers\api\src\handlers\*.js")
    "API Services" = @("workers\api\src\services\*.js")
    "API Utils" = @("workers\api\src\utils\*.js")
    "Course Content" = @("temp_upload\content\**\*.json")
    "Scripts" = @("scripts\*.ps1", "scripts\*.js", "temp_upload\scripts\*.ps1")
    "Project Config" = @("package.json", ".gitignore", "*.json", "*.toml", "*.config.js", ".eslintrc.js")
    "Documentation" = @("docs\*.md", "*.md")
    "Tests" = @("tests\*.js", "**\test*.js")
}

# File extensions to treat as text
$textExtensions = @(
    ".js", ".json", ".md", ".txt", ".ps1", ".sh", ".bat", ".cmd",
    ".html", ".css", ".scss", ".less", ".yaml", ".yml", ".xml",
    ".toml", ".ini", ".conf", ".config", ".env", ".gitignore",
    ".eslintrc", ".prettierrc", ".editorconfig", ".dockerignore"
)

# Binary file extensions to skip
$binaryExtensions = @(
    ".exe", ".dll", ".so", ".dylib", ".bin", ".dat",
    ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".ico", ".svg",
    ".mp4", ".avi", ".mov", ".mkv", ".mp3", ".wav", ".flac",
    ".zip", ".rar", ".7z", ".tar", ".gz", ".pdf", ".doc", ".docx",
    ".xls", ".xlsx", ".ppt", ".pptx", ".db", ".sqlite"
)

# Function to check if file is text
function Is-TextFile {
    param([string]$filePath)

    $extension = [System.IO.Path]::GetExtension($filePath).ToLower()

    # Check by extension
    if ($textExtensions -contains $extension) {
        return $true
    }
    if ($binaryExtensions -contains $extension) {
        return $false
    }

    # For unknown extensions, try to detect by content
    try {
        $bytes = [System.IO.File]::ReadAllBytes($filePath) | Select-Object -First 8000
        $nullCount = ($bytes | Where-Object { $_ -eq 0 }).Count

        # If more than 10% null bytes, probably binary
        return ($nullCount / $bytes.Count) -lt 0.1
    }
    catch {
        return $false
    }
}

# Function to get file content safely
function Get-SafeFileContent {
    param([string]$filePath)

    try {
        if (Is-TextFile $filePath) {
            $content = Get-Content -Path $filePath -Raw -ErrorAction Stop

            # Handle empty files
            if ($null -eq $content) {
                return "[EMPTY FILE]"
            }

            # Limit content size to 100KB
            if ($content.Length -gt 102400) {
                $content = $content.Substring(0, 102400) + "`n`n... [CONTENT TRUNCATED - FILE TOO LARGE] ..."
            }

            return $content
        }
        else {
            return "[BINARY FILE - CONTENT NOT DISPLAYED]"
        }
    }
    catch {
        return "[ERROR READING FILE: $($_.Exception.Message)]"
    }
}

# Collect all files
$allFiles = @{}
$excludedDirs = @("node_modules", ".git", "dist", "build", ".next", ".cache", "coverage")

foreach ($category in $categories.Keys) {
    $files = @()
    foreach ($pattern in $categories[$category]) {
        $foundFiles = Get-ChildItem -Path $pattern -Recurse -File -ErrorAction SilentlyContinue |
            Where-Object {
                $pathParts = $_.DirectoryName -split '\\'
                $excluded = $false
                foreach ($part in $pathParts) {
                    if ($excludedDirs -contains $part) {
                        $excluded = $true
                        break
                    }
                }
                -not $excluded
            }
        $files += $foundFiles
    }

    if ($files.Count -gt 0) {
        $allFiles[$category] = $files | Select-Object -Unique
    }
}

# Generate output
$output = @"
# Working Files with Content - MasterMarat Project

*Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm")*

**Total: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count) files**

---

"@

foreach ($category in $allFiles.Keys | Sort-Object) {
    $files = $allFiles[$category] | Sort-Object FullName

    $output += "`n## $category ($($files.Count))`n"

    foreach ($file in $files) {
        $relativePath = $file.FullName.Replace("$projectRoot\", "").Replace("\", "/")
        $fileSize = [math]::Round($file.Length / 1KB, 2)

        $output += "`n### ``$relativePath`` ($fileSize KB)`n"

        # Get file content
        $content = Get-SafeFileContent -filePath $file.FullName

        # Determine language for syntax highlighting
        $extension = $file.Extension.TrimStart('.')
        $language = switch ($extension) {
            "js" { "javascript" }
            "ps1" { "powershell" }
            "json" { "json" }
            "md" { "markdown" }
            "toml" { "toml" }
            "xml" { "xml" }
            "html" { "html" }
            "css" { "css" }
            "yml" { "yaml" }
            "yaml" { "yaml" }
            default { $extension }
        }

        # Add content with syntax highlighting
        if ($null -eq $content) {
            $output += "`n[FILE IS EMPTY OR COULD NOT BE READ]`n"
        }
        elseif ($content -eq "[BINARY FILE - CONTENT NOT DISPLAYED]" -or
                $content.StartsWith("[ERROR READING FILE:")) {
            $output += "`n$content`n"
        }
        else {
            $output += "`n``````$language`n$content`n```````n"
        }

        $output += "`n---`n"
    }
}

# Add summary at the end
$totalSize = ($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique |
    Measure-Object -Property Length -Sum).Sum / 1MB

$output += @"

## Summary

- **Total Files**: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count)
- **Total Size**: $([math]::Round($totalSize, 2)) MB
- **Categories**: $($allFiles.Keys.Count)
- **Generated**: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

"@

# Save to file
$output | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "Export completed! File saved to: $outputFile" -ForegroundColor Green
Write-Host "Total files exported: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count)" -ForegroundColor Yellow
Write-Host "Total size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Yellow

# Optionally open the file
$openFile = Read-Host "Do you want to open the file? (Y/N)"
if ($openFile -eq 'Y' -or $openFile -eq 'y') {
    Start-Process $outputFile
}

```

---

### `scripts/generate-raw-links.ps1` (6.21 KB)

```powershell
# generate-raw-links.ps1
# Генератор GitHub RAW ссылок для проекта

param(
    [string]$OutputFile = "GITHUB_RAW_LINKS.md"
)

# Получаем информацию о репозитории
function Get-GitHubInfo {
    $remoteUrl = git remote get-url origin 2>$null
    if (-not $remoteUrl) {
        Write-Host "Error: Git remote not found" -ForegroundColor Red
        return $null
    }

    # Парсим URL репозитория
    if ($remoteUrl -match "github\.com[:/]([^/]+)/([^\.]+)") {
        $owner = $matches[1]
        $repo = $matches[2]

        # Получаем текущую ветку
        $branch = git branch --show-current

        return @{
            Owner = $owner
            Repo = $repo
            Branch = $branch
            BaseUrl = "https://raw.githubusercontent.com/$owner/$repo/$branch"
        }
    }

    return $null
}

# Получаем список файлов
function Get-ProjectFiles {
    $files = @{
        "API Core" = @()
        "Configuration" = @()
        "Handlers" = @()
        "Services" = @()
        "Utils" = @()
        "Scripts" = @()
        "Documentation" = @()
        "Project Config" = @()
    }

    # API файлы
    Get-ChildItem -Path "workers/api/src" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')

        if ($_.Name -match "worker") {
            $files["API Core"] += @{Path = $relativePath; Name = $_.Name}
        }
    }

    # Handlers
    Get-ChildItem -Path "workers/api/src/handlers" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Handlers"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Services
    Get-ChildItem -Path "workers/api/src/services" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Services"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Utils
    Get-ChildItem -Path "workers/api/src/utils" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Utils"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Config
    Get-ChildItem -Path "workers/api/src/config" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Configuration"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Scripts
    Get-ChildItem -Path "scripts" -Filter "*.ps1" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Scripts"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Project configs
    @("package.json", "wrangler.toml", ".gitignore", "README.md") | ForEach-Object {
        if (Test-Path $_) {
            $files["Project Config"] += @{Path = $_; Name = $_}
        }
    }

    # Docs
    Get-ChildItem -Path "docs" -Filter "*.md" -File -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Documentation"] += @{Path = $relativePath; Name = $_.Name}
    }

    return $files
}

# Генерация MD файла
function Generate-RawLinksFile {
    param($GitInfo, $Files)

    $output = @()
    $output += "# GitHub RAW Links - $($GitInfo.Repo)"
    $output += ""
    $output += "> Direct links to project files on GitHub"
    $output += ""
    $output += "**Repository**: https://github.com/$($GitInfo.Owner)/$($GitInfo.Repo)"
    $output += "**Branch**: $($GitInfo.Branch)"
    $output += "**Generated**: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    $output += ""

    foreach ($category in $Files.GetEnumerator() | Sort-Object Name) {
        if ($category.Value.Count -gt 0) {
            $output += "## $($category.Name)"
            $output += ""

            foreach ($file in $category.Value | Sort-Object Name) {
                $rawUrl = "$($GitInfo.BaseUrl)/$($file.Path)"
                $output += "- [$($file.Name)]($rawUrl)"
            }
            $output += ""
        }
    }

    # Примеры использования
    $output += "## Usage Examples"
    $output += ""
    $output += '```powershell'
    $output += '# Download file'
    $output += '$url = "' + $GitInfo.BaseUrl + '/workers/api/src/worker-new.js"'
    $output += 'Invoke-WebRequest -Uri $url -OutFile "worker-new.js"'
    $output += ''
    $output += '# View content'
    $output += 'Invoke-RestMethod -Uri $url'
    $output += '```'

    return $output -join "`r`n"
}

# Main
Write-Host "Generating GitHub RAW links..." -ForegroundColor Cyan

# Получаем информацию о репозитории
$gitInfo = Get-GitHubInfo
if (-not $gitInfo) {
    Write-Host "Failed to get repository info" -ForegroundColor Red
    return
}

Write-Host "Repository: $($gitInfo.Owner)/$($gitInfo.Repo)" -ForegroundColor Green
Write-Host "Branch: $($gitInfo.Branch)" -ForegroundColor Green

# Получаем файлы
$files = Get-ProjectFiles

# Генерируем файл
$content = Generate-RawLinksFile -GitInfo $gitInfo -Files $files

# Сохраняем
$content | Out-File -FilePath $OutputFile -Encoding UTF8 -Force
Write-Host "Saved to: $OutputFile" -ForegroundColor Green

# Показываем первые несколько ссылок для проверки
Write-Host "`nSample links:" -ForegroundColor Yellow
$sampleUrls = $content -split "`n" | Where-Object { $_ -match '\[.*\]\(https://.*\)' } | Select-Object -First 3
foreach ($url in $sampleUrls) {
    Write-Host $url -ForegroundColor White
}

# Открываем файл
$open = Read-Host "`nOpen file? (y/n)"
if ($open -eq 'y') {
    Start-Process $OutputFile
}

```

---

### `scripts/lesson-converter.ps1` (16.41 KB)

```powershell
# lesson-converter.ps1
# Конвертер уроков из простого текстового формата в JSON

param(
    [string]$Action = "menu",
    [string]$InputFile = "",
    [string]$CourseId = "",
    [string]$LessonId = ""
)

# Структура папок
$projectRoot = Split-Path -Parent $PSScriptRoot
$tempUploadPath = Join-Path $projectRoot "temp_upload"
$contentPath = Join-Path $tempUploadPath "content"
$templatesPath = Join-Path $tempUploadPath "templates"

# Создаем структуру папок если не существует
function Initialize-Folders {
    $folders = @(
        $tempUploadPath,
        $contentPath,
        $templatesPath,
        (Join-Path $contentPath "course01"),
        (Join-Path $contentPath "course02"),
        (Join-Path $contentPath "course03"),
        (Join-Path $contentPath "course04"),
        (Join-Path $contentPath "course05"),
        (Join-Path $contentPath "course06"),
        (Join-Path $contentPath "course07"),
        (Join-Path $contentPath "course08")
    )
    
    foreach ($folder in $folders) {
        if (-not (Test-Path $folder)) {
            New-Item -ItemType Directory -Force -Path $folder | Out-Null
        }
    }
    
    # Создаем шаблон если не существует
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    if (-not (Test-Path $templateFile)) {
        $template = @"
# Шаблон урока MasterMarat
# Заполните данные ниже

## TITLE: [Название урока]

## VIDEO: [имя_файла.mp4]

## THUMBNAIL: [имя_файла.jpg]

## CONTENT_POINTS:
- [Основной пункт 1]
- [Основной пункт 2]
- [Основной пункт 3]

## IMPORTANT_NOTES:
- [Важная заметка 1]
- [Важная заметка 2]

## ADDITIONAL_INFO:
- [Дополнительная информация 1]
- [Дополнительная информация 2]

## MATERIALS:
[PDF] filename.pdf | Описание материала
[LINK] https://example.com | Описание ссылки

## NOTES:
[Любые заметки для себя - не попадут в JSON]
"@
        $template | Out-File -FilePath $templateFile -Encoding UTF8
        Write-Host "✅ Создан шаблон: $templateFile" -ForegroundColor Green
    }
}

# Парсинг текстового файла
function Parse-LessonFile {
    param([string]$FilePath)
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "❌ Файл не найден: $FilePath" -ForegroundColor Red
        return $null
    }
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    $lesson = @{
        title = ""
        video_file = ""
        thumbnail_file = ""
        content_points = @()
        important_notes = @()
        additional_info = @()
        materials = @()
    }
    
    # Парсим секции
    if ($content -match '## TITLE:\s*(.+)') {
        $lesson.title = $matches[1].Trim()
    }
    
    if ($content -match '## VIDEO:\s*(.+)') {
        $lesson.video_file = $matches[1].Trim()
    }
    
    if ($content -match '## THUMBNAIL:\s*(.+)') {
        $lesson.thumbnail_file = $matches[1].Trim()
    }
    
    # Парсим списки
    $sections = @{
        'CONTENT_POINTS' = 'content_points'
        'IMPORTANT_NOTES' = 'important_notes'
        'ADDITIONAL_INFO' = 'additional_info'
    }
    
    foreach ($section in $sections.Keys) {
        if ($content -match "## $section\s*:\s*\n((?:- .+\n?)+)") {
            $items = $matches[1] -split '\n' | 
                Where-Object { $_ -match '^-\s*(.+)' } | 
                ForEach-Object { $matches[1].Trim() }
            $lesson[$sections[$section]] = @($items)
        }
    }
    
    # Парсим материалы
    if ($content -match '## MATERIALS:\s*\n((?:\[.+\].+\n?)+)') {
        $materialLines = $matches[1] -split '\n' | Where-Object { $_ -match '\[(.+)\]\s*(.+?)\s*\|\s*(.+)' }
        foreach ($line in $materialLines) {
            if ($line -match '\[(.+)\]\s*(.+?)\s*\|\s*(.+)') {
                $type = $matches[1].Trim().ToLower()
                $fileOrUrl = $matches[2].Trim()
                $title = $matches[3].Trim()
                
                $material = @{
                    type = $type
                    title = $title
                }
                
                # Определяем правильное имя поля
                if ($type -eq 'pdf') {
                    $material['file'] = $fileOrUrl
                } elseif ($type -eq 'link') {
                    $material['url'] = $fileOrUrl
                }
                
                $lesson.materials += $material
            }
        }
    }
    
    return $lesson
}

# Конвертация одного файла
function Convert-SingleLesson {
    param(
        [string]$InputPath,
        [string]$CourseId,
        [string]$LessonId
    )
    
    Write-Host "`n📄 Конвертация урока..." -ForegroundColor Cyan
    
    # Парсим файл
    $lesson = Parse-LessonFile -FilePath $InputPath
    if (-not $lesson) {
        return
    }
    
    # Создаем выходной путь
    $outputDir = Join-Path $contentPath $CourseId
    $outputFile = Join-Path $outputDir "$LessonId.json"
    
    # Конвертируем в JSON
    $jsonContent = $lesson | ConvertTo-Json -Depth 10
    $jsonContent | Out-File -FilePath $outputFile -Encoding UTF8
    
    Write-Host "✅ Создан файл: $outputFile" -ForegroundColor Green
    Write-Host "`n📋 Содержимое:" -ForegroundColor Yellow
    Write-Host "   Название: $($lesson.title)" -ForegroundColor White
    Write-Host "   Видео: $($lesson.video_file)" -ForegroundColor White
    Write-Host "   Превью: $($lesson.thumbnail_file)" -ForegroundColor White
    Write-Host "   Пунктов: $($lesson.content_points.Count)" -ForegroundColor Gray
    Write-Host "   Заметок: $($lesson.important_notes.Count)" -ForegroundColor Gray
    Write-Host "   Доп.инфо: $($lesson.additional_info.Count)" -ForegroundColor Gray
    Write-Host "   Материалов: $($lesson.materials.Count)" -ForegroundColor Gray
    
    return $outputFile
}

# Интерактивный режим
function Interactive-Convert {
    Clear-Host
    Write-Host "🎓 Конвертер уроков MasterMarat" -ForegroundColor Cyan
    Write-Host "===============================" -ForegroundColor Cyan
    
    # Показываем существующие txt файлы
    Write-Host "`n📁 Найденные файлы уроков:" -ForegroundColor Yellow
    $txtFiles = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -Recurse | 
                Where-Object { $_.Name -ne "lesson_template.txt" }
    
    if ($txtFiles.Count -eq 0) {
        Write-Host "   Нет файлов для конвертации" -ForegroundColor Gray
        Write-Host "`n💡 Создайте файл урока на основе шаблона:" -ForegroundColor Yellow
        Write-Host "   $templatesPath\lesson_template.txt" -ForegroundColor White
    } else {
        $i = 1
        foreach ($file in $txtFiles) {
            Write-Host "   $i. $($file.Name) - $($file.DirectoryName)" -ForegroundColor White
            $i++
        }
    }
    
    Write-Host "`n" -NoNewline
    
    # Выбор файла
    if ($txtFiles.Count -gt 0) {
        $fileChoice = Read-Host "Выберите файл (1-$($txtFiles.Count)) или путь к файлу"
        
        if ($fileChoice -match '^\d+$' -and [int]$fileChoice -le $txtFiles.Count) {
            $selectedFile = $txtFiles[[int]$fileChoice - 1].FullName
        } else {
            $selectedFile = $fileChoice
        }
    } else {
        $selectedFile = Read-Host "Введите путь к файлу урока"
    }
    
    if (-not (Test-Path $selectedFile)) {
        Write-Host "❌ Файл не найден!" -ForegroundColor Red
        return
    }
    
    # Выбор курса
    Write-Host "`n📚 Выберите курс:" -ForegroundColor Yellow
    Write-Host "   1. course01 - Механика здоровья" -ForegroundColor White
    Write-Host "   2. course02 - Суставная гимнастика" -ForegroundColor White
    Write-Host "   3. course03 - Остеопатия для спортсменов" -ForegroundColor White
    Write-Host "   4. course04 - Женское здоровья" -ForegroundColor White
    Write-Host "   5. course05 - Детская остеопатия" -ForegroundColor White
    Write-Host "   6. course06 - Антистресс и релаксация" -ForegroundColor White
    Write-Host "   7. course07 - Питание и остеопатия" -ForegroundColor White
    Write-Host "   8. course08 - Мастер-курс (VIP)" -ForegroundColor White
    
    $courseChoice = Read-Host "`nВыберите номер курса (1-8)"
    $courseId = "course0$courseChoice"
    
    # Автоопределение номера урока
    $existingLessons = Get-ChildItem -Path (Join-Path $contentPath $courseId) -Filter "lesson*.json" -ErrorAction SilentlyContinue |
                       Where-Object { $_.Name -match 'lesson(\d+)\.json' } |
                       ForEach-Object { [int]$matches[1] }
    
    $nextNumber = 1
    if ($existingLessons.Count -gt 0) {
        $nextNumber = ($existingLessons | Measure-Object -Maximum).Maximum + 1
    }
    
    $suggestedId = "lesson{0:D3}" -f $nextNumber
    Write-Host "`nСледующий номер урока: $suggestedId" -ForegroundColor Cyan
    $lessonId = Read-Host "ID урока (Enter для $suggestedId)"
    if ([string]::IsNullOrEmpty($lessonId)) {
        $lessonId = $suggestedId
    }
    
    # Конвертируем
    $outputFile = Convert-SingleLesson -InputPath $selectedFile -CourseId $courseId -LessonId $lessonId
    
    if ($outputFile) {
        Write-Host "`n✅ Успешно сконвертировано!" -ForegroundColor Green
        
        # Предлагаем открыть файл
        $openFile = Read-Host "`nОткрыть JSON файл? (y/n)"
        if ($openFile -eq 'y') {
            Start-Process notepad.exe $outputFile
        }
    }
}

# Пакетная конвертация
function Batch-Convert {
    Write-Host "`n📦 Пакетная конвертация" -ForegroundColor Cyan
    Write-Host "Ищем все .txt файлы в папке temp_upload..." -ForegroundColor Yellow
    
    $files = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -Recurse |
             Where-Object { $_.Name -match '^(course\d+)_(lesson\d+)\.txt$' }
    
    if ($files.Count -eq 0) {
        Write-Host "❌ Не найдено файлов с форматом courseXX_lessonXXX.txt" -ForegroundColor Red
        return
    }
    
    Write-Host "Найдено файлов: $($files.Count)" -ForegroundColor Green
    
    foreach ($file in $files) {
        if ($file.Name -match '^(course\d+)_(lesson\d+)\.txt$') {
            $courseId = $matches[1]
            $lessonId = $matches[2]
            
            Write-Host "`n📄 $($file.Name) -> $courseId/$lessonId.json" -ForegroundColor Cyan
            Convert-SingleLesson -InputPath $file.FullName -CourseId $courseId -LessonId $lessonId
        }
    }
    
    Write-Host "`n✅ Пакетная конвертация завершена!" -ForegroundColor Green
}

# Создание нового урока из шаблона
function Create-NewLesson {
    Write-Host "`n📝 Создание нового урока" -ForegroundColor Cyan
    
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    $template = Get-Content $templateFile -Raw
    
    # Выбор курса
    Write-Host "`nДля какого курса создаем урок?" -ForegroundColor Yellow
    Write-Host "1-8 для course01-course08" -ForegroundColor Gray
    $courseNum = Read-Host "Номер курса"
    
    # Определяем следующий номер урока
    $courseId = "course0$courseNum"
    $coursePath = Join-Path $contentPath $courseId
    
    $existingFiles = Get-ChildItem -Path $tempUploadPath -Filter "${courseId}_lesson*.txt" -ErrorAction SilentlyContinue
    $nextNumber = 1
    if ($existingFiles.Count -gt 0) {
        $numbers = $existingFiles | ForEach-Object {
            if ($_.Name -match 'lesson(\d+)\.txt$') {
                [int]$matches[1]
            }
        }
        if ($numbers) {
            $nextNumber = ($numbers | Measure-Object -Maximum).Maximum + 1
        }
    }
    
    $fileName = "${courseId}_lesson{0:D3}.txt" -f $nextNumber
    $filePath = Join-Path $tempUploadPath $fileName
    
    # Создаем файл с базовыми данными
    $newContent = $template -replace '\[Название урока\]', "Урок $nextNumber"
    $newContent = $newContent -replace '\[имя_файла\.mp4\]', "lesson{0:D3}.mp4" -f $nextNumber
    $newContent = $newContent -replace '\[имя_файла\.jpg\]', "lesson{0:D3}.jpg" -f $nextNumber
    
    $newContent | Out-File -FilePath $filePath -Encoding UTF8
    
    Write-Host "✅ Создан файл: $filePath" -ForegroundColor Green
    
    # Открываем в блокноте
    Start-Process notepad.exe $filePath
    
    Write-Host "`n💡 Отредактируйте файл и запустите конвертацию" -ForegroundColor Yellow
}

# Главное меню
function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Host "🎓 Конвертер уроков MasterMarat" -ForegroundColor Cyan
        Write-Host "===============================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. 📝 Создать новый урок из шаблона" -ForegroundColor Yellow
        Write-Host "2. 🔄 Конвертировать один файл" -ForegroundColor Yellow
        Write-Host "3. 📦 Пакетная конвертация" -ForegroundColor Yellow
        Write-Host "4. 📁 Открыть папку temp_upload" -ForegroundColor Yellow
        Write-Host "5. 📋 Показать структуру файлов" -ForegroundColor Yellow
        Write-Host "0. ❌ Выход" -ForegroundColor Red
        Write-Host ""
        
        $choice = Read-Host "Выберите действие"
        
        switch ($choice) {
            "1" { 
                Create-NewLesson
                Read-Host "`nНажмите Enter для продолжения"
            }
            "2" { 
                Interactive-Convert
                Read-Host "`nНажмите Enter для продолжения"
            }
            "3" { 
                Batch-Convert
                Read-Host "`nНажмите Enter для продолжения"
            }
            "4" {
                Start-Process explorer.exe $tempUploadPath
            }
            "5" {
                Write-Host "`n📁 Структура файлов:" -ForegroundColor Cyan
                Get-ChildItem -Path $tempUploadPath -Recurse -ErrorAction SilentlyContinue | 
                    Where-Object { -not $_.PSIsContainer } |
                    ForEach-Object {
                        $relativePath = $_.FullName.Substring($tempUploadPath.Length + 1)
                        Write-Host "   $relativePath" -ForegroundColor White
                    }
                Read-Host "`nНажмите Enter для продолжения"
            }
            "0" { 
                Write-Host "`n👋 До свидания!" -ForegroundColor Green
                return 
            }
            default { 
                Write-Host "❌ Неверный выбор!" -ForegroundColor Red
                Start-Sleep -Seconds 1
            }
        }
    }
}

# Инициализация
Initialize-Folders

# Запуск
if ($Action -eq "menu") {
    Show-Menu
} elseif ($Action -eq "convert" -and $InputFile) {
    if ($CourseId -and $LessonId) {
        Convert-SingleLesson -InputPath $InputFile -CourseId $CourseId -LessonId $LessonId
    } else {
        Write-Host "❌ Укажите CourseId и LessonId" -ForegroundColor Red
    }
}
```

---

### `scripts/simple-lesson-converter.ps1` (6.99 KB)

```powershell
# simple-lesson-converter.ps1
# Простой конвертер уроков из текста в JSON

# Структура папок
$projectRoot = Split-Path -Parent $PSScriptRoot
$tempUploadPath = Join-Path $projectRoot "temp_upload"
$contentPath = Join-Path $tempUploadPath "content"
$templatesPath = Join-Path $tempUploadPath "templates"

# Создаем папки
function Initialize-Folders {
    @($tempUploadPath, $contentPath, $templatesPath) | ForEach-Object {
        if (-not (Test-Path $_)) {
            New-Item -ItemType Directory -Force -Path $_ | Out-Null
        }
    }
    
    # Создаем папки для курсов
    1..8 | ForEach-Object {
        $courseFolder = Join-Path $contentPath "course0$_"
        if (-not (Test-Path $courseFolder)) {
            New-Item -ItemType Directory -Force -Path $courseFolder | Out-Null
        }
    }
    
    Write-Host "✅ Структура папок создана" -ForegroundColor Green
}

# Создание шаблона
function Create-Template {
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    if (-not (Test-Path $templateFile)) {
        @"
# Шаблон урока MasterMarat

## TITLE: Название урока

## VIDEO: lesson001.mp4

## THUMBNAIL: lesson001.jpg

## CONTENT_POINTS:
- Основной пункт 1
- Основной пункт 2
- Основной пункт 3

## IMPORTANT_NOTES:
- Важная заметка 1
- Важная заметка 2

## ADDITIONAL_INFO:
- Дополнительная информация 1
- Дополнительная информация 2
"@ | Out-File -FilePath $templateFile -Encoding UTF8
        Write-Host "✅ Шаблон создан: $templateFile" -ForegroundColor Green
    }
}

# Парсинг файла урока
function Parse-Lesson {
    param([string]$FilePath)
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "❌ Файл не найден" -ForegroundColor Red
        return $null
    }
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    
    # Базовая структура
    $lesson = @{
        title = ""
        video_file = ""
        thumbnail_file = ""
        content_points = @()
        important_notes = @()
        additional_info = @()
    }
    
    # Извлекаем данные
    if ($content -match '## TITLE:\s*(.+)') {
        $lesson.title = $matches[1].Trim()
    }
    
    if ($content -match '## VIDEO:\s*(.+)') {
        $lesson.video_file = $matches[1].Trim()
    }
    
    if ($content -match '## THUMBNAIL:\s*(.+)') {
        $lesson.thumbnail_file = $matches[1].Trim()
    }
    
    # Извлекаем списки
    if ($content -match '## CONTENT_POINTS:\s*\n((?:- .+\n?)+)') {
        $lesson.content_points = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    if ($content -match '## IMPORTANT_NOTES:\s*\n((?:- .+\n?)+)') {
        $lesson.important_notes = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    if ($content -match '## ADDITIONAL_INFO:\s*\n((?:- .+\n?)+)') {
        $lesson.additional_info = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    return $lesson
}

# Конвертация файла
function Convert-File {
    Write-Host "`n📄 КОНВЕРТАЦИЯ ФАЙЛА" -ForegroundColor Cyan
    
    # Показываем доступные файлы
    $files = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -File | 
             Where-Object { $_.Name -ne "lesson_template.txt" }
    
    if ($files.Count -eq 0) {
        Write-Host "Нет файлов для конвертации в $tempUploadPath" -ForegroundColor Yellow
        return
    }
    
    Write-Host "`nНайденные файлы:" -ForegroundColor Yellow
    for ($i = 0; $i -lt $files.Count; $i++) {
        Write-Host "$($i+1). $($files[$i].Name)" -ForegroundColor White
    }
    
    $choice = Read-Host "`nВыберите номер файла"
    $selectedFile = $files[[int]$choice - 1].FullName
    
    # Выбор курса
    Write-Host "`nВыберите курс (1-8):" -ForegroundColor Yellow
    $courseNum = Read-Host "Номер курса"
    $courseId = "course0$courseNum"
    
    # ID урока
    $lessonId = Read-Host "ID урока (например: lesson001)"
    
    # Парсим и конвертируем
    $lesson = Parse-Lesson -FilePath $selectedFile
    if ($lesson) {
        $outputPath = Join-Path $contentPath $courseId "$lessonId.json"
        $lesson | ConvertTo-Json -Depth 10 | Out-File $outputPath -Encoding UTF8
        
        Write-Host "`n✅ Создан: $outputPath" -ForegroundColor Green
        Write-Host "Название: $($lesson.title)" -ForegroundColor White
    }
}

# Создание нового урока
function Create-New {
    Write-Host "`n📝 СОЗДАНИЕ НОВОГО УРОКА" -ForegroundColor Cyan
    
    $courseNum = Read-Host "Номер курса (1-8)"
    $lessonNum = Read-Host "Номер урока (например: 001)"
    
    $fileName = "course0${courseNum}_lesson${lessonNum}.txt"
    $filePath = Join-Path $tempUploadPath $fileName
    
    # Копируем шаблон
    $templatePath = Join-Path $templatesPath "lesson_template.txt"
    Copy-Item $templatePath $filePath
    
    # Заменяем номера в шаблоне
    $content = Get-Content $filePath -Raw
    $content = $content -replace "lesson001", "lesson$lessonNum"
    $content | Out-File $filePath -Encoding UTF8
    
    Write-Host "✅ Создан: $filePath" -ForegroundColor Green
    Start-Process notepad.exe $filePath
}

# Главное меню
function Main-Menu {
    Initialize-Folders
    Create-Template
    
    while ($true) {
        Clear-Host
        Write-Host "🎓 КОНВЕРТЕР УРОКОВ" -ForegroundColor Cyan
        Write-Host "==================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Создать новый урок" -ForegroundColor Yellow
        Write-Host "2. Конвертировать файл" -ForegroundColor Yellow
        Write-Host "3. Открыть папку" -ForegroundColor Yellow
        Write-Host "0. Выход" -ForegroundColor Red
        Write-Host ""
        
        $choice = Read-Host "Выбор"
        
        switch ($choice) {
            "1" { Create-New }
            "2" { Convert-File }
            "3" { Start-Process explorer.exe $tempUploadPath }
            "0" { return }
        }
        
        if ($choice -ne "3" -and $choice -ne "0") {
            Read-Host "`nEnter для продолжения"
        }
    }
}

# Запуск
Main-Menu
```

---

### `scripts/test-api.js` (40.39 KB)

```javascript
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS headers РґР»СЏ РІСЃРµС… РѕС‚РІРµС‚РѕРІ
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Range',
      'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
    };

    // РћР±СЂР°Р±РѕС‚РєР° OPTIONS РґР»СЏ CORS
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // HTML РїР»РµРµСЂ РІРёРґРµРѕ
    if (url.pathname === '/player/' || url.pathname === '/player') {
      return handlePlayerRequest(request, env, corsHeaders);
    }

    // РЎРїРµС†РёР°Р»СЊРЅС‹Р№ РїР»РµРµСЂ РґР»СЏ Telegram
    if (url.pathname === '/telegram-player/' || url.pathname === '/telegram-player') {
      return handleTelegramPlayer(request, env, corsHeaders);
    }

    // РџСѓР±Р»РёС‡РЅС‹Рµ thumbnails (Р‘Р•Р— С‚РѕРєРµРЅР°) - РїСЂСЏРјРѕ РёР· R2
    if (url.pathname.startsWith('/thumbnails/')) {
      const thumbnailPath = url.pathname.replace('/thumbnails/', '');

      try {
        const object = await env.R2.get(`thumbnails/${thumbnailPath}`);

        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Thumbnail not found',
              path: thumbnailPath
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

        // Р’РѕР·РІСЂР°С‰Р°РµРј РёР·РѕР±СЂР°Р¶РµРЅРёРµ
        return new Response(object.body, {
          headers: {
            'Content-Type': object.httpMetadata?.contentType || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400',
            'ETag': object.httpEtag,
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

    // Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ СЃ РїРѕРґРґРµСЂР¶РєРѕР№ Range requests РґР»СЏ СЃС‚СЂРёРјРёРЅРіР°
    if (url.pathname.startsWith('/video/')) {
      const videoPath = url.pathname.replace('/video/', '');
      const token = url.searchParams.get('token');

      if (!token) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Token required',
            message: 'Р”РѕР±Р°РІСЊС‚Рµ ?token=РІР°С€_С‚РѕРєРµРЅ Рє URL',
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

      // РџСЂРѕСЃС‚Р°СЏ РїСЂРѕРІРµСЂРєР° С‚РѕРєРµРЅР° (РїРѕР·Р¶Рµ СѓСЃР»РѕР¶РЅРёРј)
      if (token.length < 3) {
        return new Response(
          JSON.stringify({
            status: 'error',
            error: 'Invalid token',
            message: 'РўРѕРєРµРЅ СЃР»РёС€РєРѕРј РєРѕСЂРѕС‚РєРёР№'
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

      try {
        // РЎРЅР°С‡Р°Р»Р° РїРѕР»СѓС‡Р°РµРј РјРµС‚Р°РґР°РЅРЅС‹Рµ Рѕ С„Р°Р№Р»Рµ
        const object = await env.R2.head(`videos/${videoPath}`);
        
        if (!object) {
          return new Response(
            JSON.stringify({
              status: 'error',
              error: 'Video not found',
              path: videoPath
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

        // Р•СЃР»Рё Р±СЂР°СѓР·РµСЂ Р·Р°РїСЂР°С€РёРІР°РµС‚ РєРѕРЅРєСЂРµС‚РЅС‹Р№ РґРёР°РїР°Р·РѕРЅ (РґР»СЏ СЃС‚СЂРёРјРёРЅРіР°)
        if (range) {
          const parts = range.replace(/bytes=/, '').split('-');
          const start = parseInt(parts[0], 10);
          const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
          const chunkSize = end - start + 1;

          // РџРѕР»СѓС‡Р°РµРј С‚РѕР»СЊРєРѕ РЅСѓР¶РЅСѓСЋ С‡Р°СЃС‚СЊ РІРёРґРµРѕ
          const rangedObject = await env.R2.get(`videos/${videoPath}`, {
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

          // Р’РѕР·РІСЂР°С‰Р°РµРј С‡Р°СЃС‚РёС‡РЅС‹Р№ РєРѕРЅС‚РµРЅС‚
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

        // Р•СЃР»Рё РЅРµС‚ range Р·Р°РїСЂРѕСЃР°, РѕС‚РґР°РµРј РІРµСЃСЊ С„Р°Р№Р»
        const fullObject = await env.R2.get(`videos/${videoPath}`);

        return new Response(fullObject.body, {
          headers: {
            'Content-Type': 'video/mp4',
            'Content-Length': fileSize.toString(),
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'no-cache',
            'ETag': object.httpEtag,
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

    // Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ
    if (url.pathname === '/webhook/purchase' && request.method === 'POST') {
      try {
        const webhook = await request.json();

        // Р—РґРµСЃСЊ Р±СѓРґРµС‚ Р»РѕРіРёРєР° СЃРѕР·РґР°РЅРёСЏ С‚РѕРєРµРЅР° РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ
        const userToken = generateSimpleToken(
          webhook.email || 'test@example.com'
        );

        return new Response(
          JSON.stringify({
            status: 'success',
            message: 'Webhook РїРѕР»СѓС‡РµРЅ! РўРѕРєРµРЅ СЃРѕР·РґР°РЅ.',
            user_token: userToken,
            received_data: webhook,
            note: 'РўРѕРєРµРЅ Р±СѓРґРµС‚ РѕС‚РїСЂР°РІР»РµРЅ РІ РїРµСЂРІРѕРј email РєСѓСЂСЃР°'
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

    // Р“Р»Р°РІРЅР°СЏ СЃС‚СЂР°РЅРёС†Р° API
    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'MasterMarat API СЃ R2 РёРЅС‚РµРіСЂР°С†РёРµР№ Рё РїР»РµРµСЂРѕРј СЂР°Р±РѕС‚Р°РµС‚!',
        worker_url: 'https://api.mastermarat.com',
        r2_connected: env.R2 ? 'Yes' : 'No',
        endpoints: {
          'GET /': 'Р­С‚Р° СЃС‚СЂР°РЅРёС†Р°',
          'GET /player/?lesson=X&token=Y&email=Z': 'HTML РІРёРґРµРѕРїР»РµРµСЂ',
          'GET /telegram-player/?lesson=X&token=Y': 'РЎРїРµС†РёР°Р»СЊРЅС‹Р№ РїР»РµРµСЂ РґР»СЏ Telegram',
          'GET /thumbnails/{filename}': 'РџСѓР±Р»РёС‡РЅС‹Рµ РїСЂРµРІСЊСЋ РІРёРґРµРѕ РёР· R2',
          'GET /video/{filename}?token=xxx': 'Р—Р°С‰РёС‰РµРЅРЅС‹Рµ РІРёРґРµРѕ РёР· R2 СЃ РїРѕРґРґРµСЂР¶РєРѕР№ streaming',
          'POST /webhook/purchase': 'Webhook РѕС‚ SendPulse РїСЂРё РїРѕРєСѓРїРєРµ'
        },
        test_links: {
          thumbnail: 'https://api.mastermarat.com/thumbnails/test_thumb.jpg',
          video_no_token: 'https://api.mastermarat.com/video/test_video.mp4',
          video_with_token: 'https://api.mastermarat.com/video/test_video.mp4?token=test123',
          player_demo: 'https://api.mastermarat.com/player/?lesson=test_video&token=demo123&email=demo@mastermarat.com',
          telegram_player: 'https://api.mastermarat.com/telegram-player/?lesson=test_video&token=demo123'
        },
        file_structure: {
          thumbnails: 'R2://mastermarat-videos/thumbnails/',
          videos: 'R2://mastermarat-videos/videos/'
        },
        features: {
          streaming: 'HTTP Range requests РїРѕРґРґРµСЂР¶РёРІР°СЋС‚СЃСЏ РґР»СЏ Р±С‹СЃС‚СЂРѕРіРѕ СЃС‚Р°СЂС‚Р° РІРёРґРµРѕ',
          fullscreen: 'РџРѕР»РЅР°СЏ РїРѕРґРґРµСЂР¶РєР° fullscreen РЅР° РјРѕР±РёР»СЊРЅС‹С… СѓСЃС‚СЂРѕР№СЃС‚РІР°С…',
          telegram: 'РЎРїРµС†РёР°Р»СЊРЅР°СЏ РїРѕРґРґРµСЂР¶РєР° РґР»СЏ Telegram Browser'
        },
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

// РЎРїРµС†РёР°Р»СЊРЅС‹Р№ РїР»РµРµСЂ РґР»СЏ Telegram Browser
async function handleTelegramPlayer(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'test_video';
  const token = url.searchParams.get('token') || 'demo-token-123';
  
  const telegramPlayerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${lesson} - MasterMarat</title>
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        body { 
            background: #000; 
            overflow: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
        }
        
        video {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            object-fit: contain;
            background: #000;
        }
        
        .controls {
            position: fixed;
            top: 10px;
            right: 10px;
            z-index: 1000;
            display: flex;
            gap: 10px;
        }
        
        .btn {
            background: rgba(0,0,0,0.7);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        
        .exit-btn {
            background: rgba(255,0,0,0.8);
            border: none;
        }
        
        .info {
            position: fixed;
            bottom: 20px;
            left: 20px;
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 14px;
            max-width: 70%;
        }
        
        .loading {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 18px;
            text-align: center;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="loading" id="loading">
        <div class="spinner"></div>
        <div>Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ...</div>
    </div>
    
    <video id="video" controls autoplay playsinline webkit-playsinline style="display: none;">
        <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
    </video>
    
    <div class="controls">
        <button class="btn" onclick="location.href='/player/?lesson=${lesson}&token=${token}'">
            в†©пёЏ РћР±С‹С‡РЅС‹Р№ РІРёРґ
        </button>
        <button class="btn exit-btn" onclick="window.close()">
            вњ• Р—Р°РєСЂС‹С‚СЊ
        </button>
    </div>
    
    <div class="info">
        рџЋЇ РЈСЂРѕРє: ${lesson}<br>
        рџ’Ў РСЃРїРѕР»СЊР·СѓР№С‚Рµ СЌР»РµРјРµРЅС‚С‹ СѓРїСЂР°РІР»РµРЅРёСЏ РІРёРґРµРѕ РґР»СЏ РїР°СѓР·С‹ Рё РїРµСЂРµРјРѕС‚РєРё
    </div>
    
    <script>
        const video = document.getElementById('video');
        const loading = document.getElementById('loading');
        
        video.addEventListener('loadedmetadata', function() {
            loading.style.display = 'none';
            video.style.display = 'block';
            video.focus();
        });
        
        video.addEventListener('error', function(e) {
            loading.innerHTML = '<div style="color: #ff6b6b;">вљ пёЏ РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ</div>';
        });
        
        // РџСЂРµРґРѕС‚РІСЂР°С‰Р°РµРј СЃР»СѓС‡Р°Р№РЅРѕРµ Р·Р°РєСЂС‹С‚РёРµ
        window.addEventListener('beforeunload', function (e) {
            if (video.currentTime > 0 && !video.paused && !video.ended) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    </script>
</body>
</html>`;

  return new Response(telegramPlayerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

// РћР±СЂР°Р±РѕС‚РєР° HTML РїР»РµРµСЂР° СЃ СѓР»СѓС‡С€РµРЅРЅРѕР№ РїРѕРґРґРµСЂР¶РєРѕР№ fullscreen Рё Telegram
async function handlePlayerRequest(request, env, corsHeaders) {
  const url = new URL(request.url);
  const lesson = url.searchParams.get('lesson') || 'test_video';
  const token = url.searchParams.get('token') || 'demo-token-123';
  const email = url.searchParams.get('email') || 'demo@mastermarat.com';

  // HTML РєРѕРґ РїР»РµРµСЂР° СЃ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРѕР№ fullscreen
  const playerHTML = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>MasterMarat - РЈСЂРѕРє: ${lesson}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #000;
            color: #fff;
            overflow-x: hidden;
            -webkit-user-select: none;
            user-select: none;
        }
        
        .header {
            background: linear-gradient(135deg, #2E8B57 0%, #3D968C 100%);
            padding: 15px 20px;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .header h1 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            color: #fff;
        }
        
        .header .progress {
            margin-top: 8px;
            font-size: 14px;
            opacity: 0.9;
            color: #E6F3F0;
        }
        
        .video-container {
            position: relative;
            width: 100%;
            background: #000;
        }
        
        .video-wrapper {
            position: relative;
            width: 100%;
            height: 250px;
            background: #111;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: visible !important;
        }
        
        video {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #000;
            -webkit-media-controls-start-playback-button: revert;
        }
        
        /* Р¤РѕСЂСЃРёСЂСѓРµРј РїРѕРєР°Р· РєРЅРѕРїРєРё fullscreen */
        video::-webkit-media-controls-fullscreen-button {
            display: inline-block !important;
            opacity: 1 !important;
            pointer-events: auto !important;
        }
        
        video::-webkit-media-controls-panel {
            display: flex !important;
        }
        
        video::-webkit-media-controls {
            visibility: visible !important;
            opacity: 1 !important;
        }

        /* Fullscreen СЂРµР¶РёРјС‹ РґР»СЏ СЂР°Р·РЅС‹С… Р±СЂР°СѓР·РµСЂРѕРІ */
        video:fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-webkit-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-moz-full-screen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }

        video:-ms-fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-width: none !important;
            max-height: none !important;
            object-fit: contain !important;
            z-index: 9999 !important;
            background: #000;
        }
        
        /* РЎРєСЂС‹РІР°РµРј watermark РІ fullscreen */
        video:-webkit-full-screen ~ .watermark,
        video:fullscreen ~ .watermark {
            display: none;
        }
        
        /* Telegram РїСЃРµРІРґРѕ-fullscreen СЃС‚РёР»Рё */
        .telegram-fullscreen {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 999999 !important;
            background: #000 !important;
            object-fit: contain !important;
        }
        
        .watermark {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: rgba(255,255,255,0.8);
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 10px;
            z-index: 10;
            pointer-events: none;
        }
        
        .loading {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 20;
        }
        
        .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.3);
            border-top: 3px solid #2E8B57;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 15px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .content {
            padding: 20px;
            background: #1a1a1a;
            min-height: calc(100vh - 300px);
        }
        
        .lesson-title {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 10px;
            color: #fff;
        }
        
        .lesson-meta {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            flex-wrap: wrap;
        }
        
        .lesson-description {
            background: #2a2a2a;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-left: 4px solid #2E8B57;
        }
        
        .lesson-description h3 {
            color: #2E8B57;
            font-size: 16px;
            margin-bottom: 10px;
        }
        
        .lesson-description ul {
            list-style: none;
            padding: 0;
        }
        
        .lesson-description li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            color: #ddd;
            font-size: 14px;
            line-height: 1.4;
        }
        
        .lesson-description li:before {
            content: "вЂў";
            color: #2E8B57;
            position: absolute;
            left: 0;
        }
        
        .homework {
            background: linear-gradient(135deg, #F59B3A 0%, #E8851C 100%);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .homework h3 {
            color: #fff;
            font-size: 16px;
            margin-bottom: 8px;
        }
        
        .homework p {
            color: #fff;
            font-size: 14px;
            margin: 0;
            line-height: 1.4;
        }
        
        .telegram-notice {
            background: #2E8B57;
            color: white;
            padding: 15px;
            margin: 10px;
            border-radius: 8px;
            text-align: center;
        }
        
        .telegram-fullscreen-btn {
            background: #F59B3A;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 10px;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
        }
        
        .navigation {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        
        .nav-button {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            text-align: center;
        }
        
        .nav-button.primary {
            background: #2E8B57;
            color: #fff;
        }
        
        .nav-button.primary:hover {
            background: #3D968C;
        }
        
        .nav-button.secondary {
            background: #333;
            color: #ccc;
        }
        
        .nav-button.secondary:hover {
            background: #444;
        }
        
        .footer {
            background: #111;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #333;
        }
        
        .footer p {
            color: #666;
            font-size: 12px;
            margin: 0;
        }
        
        /* Fallback РєРЅРѕРїРєР° fullscreen РґР»СЏ СѓСЃС‚СЂРѕР№СЃС‚РІ Р±РµР· native РїРѕРґРґРµСЂР¶РєРё */
        .fullscreen-button {
            position: absolute;
            bottom: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            z-index: 15;
            display: none;
        }
        
        @media (max-width: 375px) {
            .video-wrapper {
                height: 220px;
            }
            
            .content {
                padding: 15px;
            }
            
            .lesson-title {
                font-size: 18px;
            }
        }
        
        /* РџРѕРєР°Р·С‹РІР°РµРј fallback РєРЅРѕРїРєСѓ РЅР° СѓСЃС‚СЂРѕР№СЃС‚РІР°С… Р±РµР· native fullscreen */
        @media (hover: none) and (pointer: coarse) {
            .fullscreen-button {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>рџЋЇ РўРµС…РЅРёРєР° СЃРЅСЏС‚РёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ РІ С€РµРµ</h1>
        <div class="progress">РЈСЂРѕРє ${lesson} вЂў РљСѓСЂСЃ 1: РћСЃРЅРѕРІС‹ РѕСЃС‚РµРѕРїР°С‚РёРё</div>
    </div>
    
    <div class="video-container">
        <div class="video-wrapper">
            <div class="watermark">${email}</div>
            
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <div style="color: #ccc; font-size: 14px;">Р—Р°РіСЂСѓР·РєР° РІРёРґРµРѕ...</div>
            </div>
            
            <video 
                id="videoPlayer"
                controls
                playsinline
                webkit-playsinline="true"
                x-webkit-airplay="allow"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="landscape|portrait"
                preload="auto"
                style="display: none;"
            >
                <source src="https://api.mastermarat.com/video/${lesson}.mp4?token=${token}" type="video/mp4">
                Р’Р°С€ Р±СЂР°СѓР·РµСЂ РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ РІРёРґРµРѕ HTML5.
            </video>
            
            <button class="fullscreen-button" id="fullscreenBtn">
                в›¶ РџРѕР»РЅС‹Р№ СЌРєСЂР°РЅ
            </button>
        </div>
        
        <div id="telegramNotice" style="display: none;"></div>
    </div>
    
    <div class="content">
        <h2 class="lesson-title">РЈСЂРѕРє: ${lesson}</h2>
        <div class="lesson-meta">
            <span>вЏ±пёЏ 4 РјРёРЅ 30 СЃРµРє</span>
            <span>рџ‘ЃпёЏ РџСЂРѕСЃРјРѕС‚СЂРµРЅРѕ 127 СЂР°Р·</span>
            <span>в­ђ 4.8/5</span>
        </div>
        
        <div class="lesson-description">
            <h3>рџ”Ќ Р§С‚Рѕ РІС‹ РёР·СѓС‡РёС‚Рµ РІ СЌС‚РѕРј СѓСЂРѕРєРµ:</h3>
            <ul>
                <li>РљР°Рє РїСЂР°РІРёР»СЊРЅРѕ РѕРїСЂРµРґРµР»РёС‚СЊ С‚РѕС‡РєРё РјР°РєСЃРёРјР°Р»СЊРЅРѕРіРѕ РЅР°РїСЂСЏР¶РµРЅРёСЏ</li>
                <li>РўРµС…РЅРёРєСѓ РјСЏРіРєРѕРіРѕ РѕСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРѕРіРѕ РІРѕР·РґРµР№СЃС‚РІРёСЏ</li>
                <li>РџРѕСЃР»РµРґРѕРІР°С‚РµР»СЊРЅРѕСЃС‚СЊ РґРІРёР¶РµРЅРёР№ РґР»СЏ СЃРЅСЏС‚РёСЏ СЃРїР°Р·РјР°</li>
                <li>РџСЂРѕС„РёР»Р°РєС‚РёРєСѓ РїРѕРІС‚РѕСЂРЅРѕРіРѕ РІРѕР·РЅРёРєРЅРѕРІРµРЅРёСЏ РЅР°РїСЂСЏР¶РµРЅРёСЏ</li>
            </ul>
        </div>
        
        <div class="homework">
            <h3>рџ’Ў Р”РѕРјР°С€РЅРµРµ Р·Р°РґР°РЅРёРµ</h3>
            <p>Р’С‹РїРѕР»РЅРёС‚Рµ РёР·СѓС‡РµРЅРЅСѓСЋ С‚РµС…РЅРёРєСѓ 2 СЂР°Р·Р° РІ РґРµРЅСЊ РІ С‚РµС‡РµРЅРёРµ РЅРµРґРµР»Рё. Р—Р°РїРёСЃС‹РІР°Р№С‚Рµ РІР°С€Рё РѕС‰СѓС‰РµРЅРёСЏ РІ РґРЅРµРІРЅРёРє Р·РґРѕСЂРѕРІСЊСЏ.</p>
        </div>
        
        <div class="navigation">
            <button class="nav-button secondary" onclick="alert('Р”РµРјРѕ: РїСЂРµРґС‹РґСѓС‰РёР№ СѓСЂРѕРє')">
                в†ђ РџСЂРµРґС‹РґСѓС‰РёР№ СѓСЂРѕРє
            </button>
            <button class="nav-button primary" onclick="alert('Р”РµРјРѕ: СЃР»РµРґСѓСЋС‰РёР№ СѓСЂРѕРє')">
                РЎР»РµРґСѓСЋС‰РёР№ СѓСЂРѕРє в†’
            </button>
        </div>
    </div>
    
    <div class="footer">
        <p>В© 2025 MasterMarat вЂў РћСЃС‚РµРѕРїР°С‚РёС‡РµСЃРєРёРµ С‚РµС…РЅРёРєРё вЂў РџРѕРґРїРёСЃРєР° Р°РєС‚РёРІРЅР° РґРѕ 15.09.2025</p>
    </div>

    <script>
        // РћС‚РєР»СЋС‡Р°РµРј РєРѕРЅС‚РµРєСЃС‚РЅРѕРµ РјРµРЅСЋ Рё РІС‹РґРµР»РµРЅРёРµ
        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('selectstart', e => e.preventDefault());
        
        // Р‘Р»РѕРєРёСЂСѓРµРј РіРѕСЂСЏС‡РёРµ РєР»Р°РІРёС€Рё
        document.addEventListener('keydown', function(e) {
            if (e.keyCode === 123 || 
                (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
                (e.ctrlKey && e.keyCode === 85) ||
                (e.ctrlKey && e.keyCode === 83)) {
                e.preventDefault();
                return false;
            }
        });
        
        // РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ РїР»РµРµСЂР°
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('videoPlayer');
            const loading = document.getElementById('loading');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            const videoWrapper = document.querySelector('.video-wrapper');
            const header = document.querySelector('.header');
            const content = document.querySelector('.content');
            const footer = document.querySelector('.footer');
            const telegramNotice = document.getElementById('telegramNotice');
            
            // РћРїСЂРµРґРµР»СЏРµРј Telegram Browser
            const isTelegram = /Telegram/i.test(navigator.userAgent) || 
                              window.Telegram !== undefined ||
                              /TelegramWebview/i.test(navigator.userAgent);
            
            console.log('Is Telegram:', isTelegram, 'UA:', navigator.userAgent);
            
            if (isTelegram) {
                // РџРѕРєР°Р·С‹РІР°РµРј СЃРїРµС†РёР°Р»СЊРЅРѕРµ СѓРІРµРґРѕРјР»РµРЅРёРµ РґР»СЏ Telegram
                telegramNotice.style.display = 'block';
                telegramNotice.className = 'telegram-notice';
                telegramNotice.innerHTML = `
                    <div>'рџ“± Р’С‹ РёСЃРїРѕР»СЊР·СѓРµС‚Рµ Telegram Р±СЂР°СѓР·РµСЂ'<div>
                    <a href="/telegram-player/?lesson=${lesson}&token=${token}" class="telegram-fullscreen-btn">
                        рџЋ¬ РћС‚РєСЂС‹С‚СЊ РІ РїРѕР»РЅРѕСЌРєСЂР°РЅРЅРѕРј СЂРµР¶РёРјРµ
                    </a>
                `;
                
                // РџРѕРєР°Р·С‹РІР°РµРј РєРЅРѕРїРєСѓ РїСЃРµРІРґРѕ-fullscreen
                fullscreenBtn.style.display = 'block';
                fullscreenBtn.style.fontSize = '16px';
                fullscreenBtn.style.padding = '10px 15px';
                
                // Telegram РїСЃРµРІРґРѕ-fullscreen
                let isFullscreen = false;
                
                fullscreenBtn.addEventListener('click', function() {
                    if (!isFullscreen) {
                        // РЎРѕС…СЂР°РЅСЏРµРј РѕСЂРёРіРёРЅР°Р»СЊРЅС‹Рµ СЃС‚РёР»Рё
                        const originalStyles = {
                            video: video.style.cssText,
                            wrapper: videoWrapper.style.cssText,
                            body: document.body.style.cssText
                        };
                        
                        // РЎРєСЂС‹РІР°РµРј РІСЃРµ РєСЂРѕРјРµ РІРёРґРµРѕ
                        header.style.display = 'none';
                        content.style.display = 'none';
                        footer.style.display = 'none';
                        telegramNotice.style.display = 'none';
                        document.querySelector('.watermark').style.display = 'none';
                        
                        // Р Р°СЃС‚СЏРіРёРІР°РµРј РІРёРґРµРѕ РЅР° РІРµСЃСЊ СЌРєСЂР°РЅ
                        videoWrapper.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999999; background: #000;';
                        video.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain;';
                        document.body.style.cssText = 'overflow: hidden; position: fixed; width: 100%; height: 100%;';
                        
                        // РњРµРЅСЏРµРј РєРЅРѕРїРєСѓ
                        fullscreenBtn.textContent = 'вњ• Р’С‹Р№С‚Рё';
                        fullscreenBtn.style.cssText = 'display: block; position: fixed; top: 20px; right: 20px; z-index: 1000000; background: rgba(255,0,0,0.8); color: white; border: none; padding: 15px 20px; border-radius: 8px; font-size: 18px; font-weight: bold;';
                        
                        isFullscreen = true;
                        
                        // Р¤РѕСЂСЃРёСЂСѓРµРј С„РѕРєСѓСЃ РЅР° РІРёРґРµРѕ
                        video.focus();
                        
                    } else {
                        // Р’РѕСЃСЃС‚Р°РЅР°РІР»РёРІР°РµРј РІСЃРµ РѕР±СЂР°С‚РЅРѕ
                        header.style.display = 'block';
                        content.style.display = 'block';
                        footer.style.display = 'block';
                        telegramNotice.style.display = 'block';
                        document.querySelector('.watermark').style.display = 'block';
                        
                        videoWrapper.style.cssText = '';
                        video.style.cssText = '';
                        document.body.style.cssText = '';
                        
                        fullscreenBtn.textContent = 'в›¶ РџРѕР»РЅС‹Р№ СЌРєСЂР°РЅ';
                        fullscreenBtn.style.cssText = 'display: block; position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 10px 15px; border-radius: 4px; font-size: 16px; cursor: pointer; z-index: 15;';
                        
                        isFullscreen = false;
                    }
                });
                
                // Р”РІРѕР№РЅРѕР№ РєР»РёРє РїРѕ РІРёРґРµРѕ С‚РѕР¶Рµ РІРєР»СЋС‡Р°РµС‚ fullscreen
                video.addEventListener('dblclick', function() {
                    fullscreenBtn.click();
                });
                
            } else {
                // РћР±С‹С‡РЅС‹Рµ Р±СЂР°СѓР·РµСЂС‹ - СЃС‚Р°РЅРґР°СЂС‚РЅС‹Р№ fullscreen
                if (!video.requestFullscreen) {
                    video.requestFullscreen = video.webkitRequestFullscreen || 
                                             video.mozRequestFullScreen || 
                                             video.msRequestFullscreen ||
                                             video.webkitEnterFullscreen ||
                                             function() {
                                                 if (video.webkitSupportsFullscreen) {
                                                     video.webkitEnterFullscreen();
                                                 }
                                             };
                }
                
                if (!document.exitFullscreen) {
                    document.exitFullscreen = document.webkitExitFullscreen || 
                                            document.mozCancelFullScreen || 
                                            document.msExitFullscreen ||
                                            document.webkitCancelFullScreen;
                }
                
                fullscreenBtn.addEventListener('click', function() {
                    if (video.requestFullscreen) {
                        video.requestFullscreen();
                    } else if (video.webkitRequestFullscreen) {
                        video.webkitRequestFullscreen();
                    } else if (video.webkitEnterFullscreen) {
                        video.webkitEnterFullscreen();
                    } else if (video.mozRequestFullScreen) {
                        video.mozRequestFullScreen();
                    } else if (video.msRequestFullscreen) {
                        video.msRequestFullscreen();
                    } else {
                        alert('РџРѕР»РЅРѕСЌРєСЂР°РЅРЅС‹Р№ СЂРµР¶РёРј РЅРµ РїРѕРґРґРµСЂР¶РёРІР°РµС‚СЃСЏ РЅР° РІР°С€РµРј СѓСЃС‚СЂРѕР№СЃС‚РІРµ');
                    }
                });
                
                // Р¤РѕСЂСЃРёСЂСѓРµРј РїРѕРєР°Р· РєРѕРЅС‚СЂРѕР»РѕРІ РЅР° touch СѓСЃС‚СЂРѕР№СЃС‚РІР°С…
                if ('ontouchstart' in window) {
                    video.setAttribute('controls', 'controls');
                }
            }
            
            // РџРѕРєР°Р·С‹РІР°РµРј РІРёРґРµРѕ РєРѕРіРґР° Р·Р°РіСЂСѓР·РёР»РёСЃСЊ РјРµС‚Р°РґР°РЅРЅС‹Рµ (Р±С‹СЃС‚СЂРµРµ С‡РµРј loadeddata)
            video.addEventListener('loadedmetadata', function() {
                loading.style.display = 'none';
                video.style.display = 'block';
                console.log('Video metadata loaded, ready to play');
            });
            
            // РњРѕР¶РЅРѕ РЅР°С‡Р°С‚СЊ РІРѕСЃРїСЂРѕРёР·РІРµРґРµРЅРёРµ
            video.addEventListener('canplay', function() {
                console.log('Video can start playing');
            });
            
            // РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє Р·Р°РіСЂСѓР·РєРё
            video.addEventListener('error', function(e) {
                loading.innerHTML = '<div style="color: #ff6b6b; font-size: 14px;">вљ пёЏ РћС€РёР±РєР° Р·Р°РіСЂСѓР·РєРё РІРёРґРµРѕ<br><small>' + 
                                   (e.target.error ? e.target.error.message : 'РќРµРёР·РІРµСЃС‚РЅР°СЏ РѕС€РёР±РєР°') + '</small></div>';
                console.error('Video loading error:', e);
            });
            
            // iOS specific fullscreen events
            video.addEventListener('webkitbeginfullscreen', function() {
                console.log('iOS fullscreen started');
            });
            
            video.addEventListener('webkitendfullscreen', function() {
                console.log('iOS fullscreen ended');
            });
            
            // РџСЂРѕСЃС‚Р°СЏ Р°РЅР°Р»РёС‚РёРєР°
            video.addEventListener('play', function() {
                console.log('Video started:', '${lesson}');
            });
            
            video.addEventListener('ended', function() {
                console.log('Video completed:', '${lesson}');
            });
            
            // Р›РѕРіРёСЂРѕРІР°РЅРёРµ РїСЂРѕРіСЂРµСЃСЃР° Р±СѓС„РµСЂРёР·Р°С†РёРё
            video.addEventListener('progress', function() {
                if (video.buffered.length > 0) {
                    const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                    const duration = video.duration;
                    if (duration > 0) {
                        console.log('Buffered: ' + Math.round((bufferedEnd / duration) * 100) + '%');
                    }
                }
            });
        });
    </script>
</body>
</html>`;

  return new Response(playerHTML, {
    headers: {
      'Content-Type': 'text/html;charset=UTF-8',
      'Cache-Control': 'no-cache',
      ...corsHeaders
    }
  });
}

// РџСЂРѕСЃС‚Р°СЏ С„СѓРЅРєС†РёСЏ РіРµРЅРµСЂР°С†РёРё С‚РѕРєРµРЅР°
function generateSimpleToken(email) {
  const timestamp = Date.now().toString();
  const emailHash = btoa(email)
    .replace(/[^a-zA-Z0-9]/g, '')
    .substring(0, 8);
  return `${emailHash}_${timestamp.substring(-8)}`;
}
```

---

### `scripts/upload_content_to_r2.js` (8.45 KB)

```javascript
/**
 * upload_content_to_r2.js
 * РЎРєСЂРёРїС‚ РґР»СЏ Р·Р°РіСЂСѓР·РєРё РєРѕРЅС‚РµРЅС‚Р° РєСѓСЂСЃРѕРІ РІ Cloudflare R2
 *
 * РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ:
 * node scripts/upload_content_to_r2.js [--env dev|prod] [--course course1] [--dry-run]
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// РљРѕРЅС„РёРіСѓСЂР°С†РёСЏ
const CONFIG = {
  R2_BUCKET_NAME: 'mastermarat-videos',
  BASE_UPLOAD_DIR: path.join(__dirname, '..', 'temp_upload', 'content'),
  SUPPORTED_FILE_TYPES: ['.json', '.mp4', '.jpg', '.jpeg', '.png'],
  MAX_PARALLEL_UPLOADS: 3
};

// РЎС‚СЂСѓРєС‚СѓСЂР° РєСѓСЂСЃРѕРІ - РѕР±РЅРѕРІР»СЏРµС‚СЃСЏ РІСЂСѓС‡РЅСѓСЋ РїСЂРё РґРѕР±Р°РІР»РµРЅРёРё РЅРѕРІС‹С… СѓСЂРѕРєРѕРІ
const COURSE_STRUCTURE = {
  course01: {
    name: 'РњРµС…Р°РЅРёРєР° Р·РґРѕСЂРѕРІСЊСЏ',
    lessons: [
      'lesson001' // РџРѕРєР° С‚РѕР»СЊРєРѕ РѕРґРёРЅ СѓСЂРѕРє Р·Р°РіСЂСѓР¶РµРЅ
    ]
  },
  course02: {
    name: 'РљСѓСЂСЃ 2',
    lessons: [] // РџРѕРєР° РїСѓСЃС‚Рѕ
  },
  course03: {
    name: 'РљСѓСЂСЃ 3',
    lessons: []
  },
  course04: {
    name: 'РљСѓСЂСЃ 4',
    lessons: []
  },
  course05: {
    name: 'РљСѓСЂСЃ 5',
    lessons: []
  },
  course06: {
    name: 'РљСѓСЂСЃ 6',
    lessons: []
  },
  course07: {
    name: 'РљСѓСЂСЃ 7',
    lessons: []
  },
  course08: {
    name: 'РљСѓСЂСЃ 8',
    lessons: []
  }
};

// РџР°СЂСЃРёРЅРі Р°СЂРіСѓРјРµРЅС‚РѕРІ РєРѕРјР°РЅРґРЅРѕР№ СЃС‚СЂРѕРєРё
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    env: 'dev',
    course: null,
    dryRun: false,
    verbose: false
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--env':
        options.env = args[++i] || 'dev';
        break;
      case '--course':
        options.course = args[++i];
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--verbose':
        options.verbose = true;
        break;
      case '--help':
        showHelp();
        process.exit(0);
    }
  }

  return options;
}

// РџРѕРєР°Р·Р°С‚СЊ СЃРїСЂР°РІРєСѓ
function showHelp() {
  console.log(`
рџ“¤ Upload Content to R2 - MasterMarat Project

Usage: node scripts/upload_content_to_r2.js [options]

Options:
  --env <env>      Environment (dev|prod), default: dev
  --course <id>    Upload specific course only
  --dry-run        Show what would be uploaded without uploading
  --verbose        Show detailed output
  --help           Show this help

Examples:
  node scripts/upload_content_to_r2.js --env dev
  node scripts/upload_content_to_r2.js --course course1 --dry-run
  node scripts/upload_content_to_r2.js --env prod --verbose
  `);
}

// РџСЂРѕРІРµСЂРєР° СЃСѓС‰РµСЃС‚РІРѕРІР°РЅРёСЏ С„Р°Р№Р»Р°
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// РџРѕР»СѓС‡РёС‚СЊ СЂР°Р·РјРµСЂ С„Р°Р№Р»Р°
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024 / 1024).toFixed(2) + ' MB';
  } catch (error) {
    return 'Unknown';
  }
}

// Р—Р°РіСЂСѓР·РёС‚СЊ РѕРґРёРЅ С„Р°Р№Р» РІ R2
async function uploadFileToR2(localPath, r2Path, options) {
  const { env, dryRun, verbose } = options;

  if (!fileExists(localPath)) {
    console.error(`вќЊ File not found: ${localPath}`);
    return false;
  }

  const fileSize = getFileSize(localPath);
  console.log(`рџ“¦ Uploading: ${r2Path} (${fileSize})`);

  if (dryRun) {
    console.log(`   [DRY RUN] Would upload: ${localPath} в†’ ${r2Path}`);
    return true;
  }

  try {
    const envFlag = env === 'prod' ? '' : `--env ${env}`;
    const command = `wrangler r2 object put "${CONFIG.R2_BUCKET_NAME}/${r2Path}" --file="${localPath.replace(/\\/g, '/')}" ${envFlag}`;

    if (verbose) {
      console.log(`   Command: ${command}`);
    }

    execSync(command, { stdio: verbose ? 'inherit' : 'pipe' });
    console.log(`   вњ… Success: ${r2Path}`);
    return true;
  } catch (error) {
    console.error(`   вќЊ Failed: ${error.message}`);
    return false;
  }
}

// РќР°Р№С‚Рё РІСЃРµ С„Р°Р№Р»С‹ РґР»СЏ Р·Р°РіСЂСѓР·РєРё
function findFilesToUpload(courseId, lessonId) {
  const files = [];
  const courseDir = path.join(CONFIG.BASE_UPLOAD_DIR, courseId);

  // JSON С„Р°Р№Р» СѓСЂРѕРєР° (lesson001.json)
  const jsonFile = path.join(courseDir, `${lessonId}.json`);
  if (fileExists(jsonFile)) {
    files.push({
      local: jsonFile,
      r2: `content/${courseId}/${lessonId}.json`,
      type: 'metadata'
    });
  }

  // Р’РёРґРµРѕ С„Р°Р№Р» (lesson001.mp4)
  const videoFile = path.join(courseDir, `${lessonId}.mp4`);
  if (fileExists(videoFile)) {
    files.push({
      local: videoFile,
      r2: `videos/${courseId}/${lessonId}.mp4`,
      type: 'video'
    });
  }

  // Thumbnail (lesson001.jpg)
  const thumbFile = path.join(courseDir, `${lessonId}.jpg`);
  if (fileExists(thumbFile)) {
    files.push({
      local: thumbFile,
      r2: `thumbnails/${courseId}/${lessonId}.jpg`,
      type: 'thumbnail'
    });
  }

  // РђР»СЊС‚РµСЂРЅР°С‚РёРІРЅС‹Р№ thumbnail СЃ _thumb
  const thumbAltFile = path.join(courseDir, `${lessonId}_thumb.jpg`);
  if (!fileExists(thumbFile) && fileExists(thumbAltFile)) {
    files.push({
      local: thumbAltFile,
      r2: `thumbnails/${courseId}/${lessonId}.jpg`,
      type: 'thumbnail'
    });
  }

  return files;
}

// РћСЃРЅРѕРІРЅР°СЏ С„СѓРЅРєС†РёСЏ Р·Р°РіСЂСѓР·РєРё
async function uploadContentToR2() {
  const options = parseArgs();

  console.log('рџљЂ MasterMarat R2 Content Uploader');
  console.log('==================================');
  console.log(`Environment: ${options.env}`);
  console.log(`Bucket: ${CONFIG.R2_BUCKET_NAME}`);
  console.log(`Mode: ${options.dryRun ? 'DRY RUN' : 'LIVE'}`);
  console.log('');

  // РћРїСЂРµРґРµР»СЏРµРј РєР°РєРёРµ РєСѓСЂСЃС‹ Р·Р°РіСЂСѓР¶Р°С‚СЊ
  const coursesToUpload = options.course
    ? { [options.course]: COURSE_STRUCTURE[options.course] }
    : COURSE_STRUCTURE;

  if (options.course && !COURSE_STRUCTURE[options.course]) {
    console.error(`вќЊ Course "${options.course}" not found!`);
    console.log(
      `Available courses: ${Object.keys(COURSE_STRUCTURE).join(', ')}`
    );
    process.exit(1);
  }

  let totalFiles = 0;
  let successCount = 0;
  const startTime = Date.now();

  // Р—Р°РіСЂСѓР¶Р°РµРј РїРѕ РєСѓСЂСЃР°Рј
  for (const [courseId, courseData] of Object.entries(coursesToUpload)) {
    console.log(`\nрџ“љ Course: ${courseId} - ${courseData.name}`);
    console.log('в”Ђ'.repeat(50));

    for (const lessonId of courseData.lessons) {
      console.log(`\nрџ“– Lesson: ${lessonId}`);

      const files = findFilesToUpload(courseId, lessonId);

      if (files.length === 0) {
        console.log(`   вљ пёЏ  No files found for this lesson`);
        continue;
      }

      for (const file of files) {
        totalFiles++;
        const success = await uploadFileToR2(file.local, file.r2, options);
        if (success) successCount++;
      }
    }
  }

  // РС‚РѕРіРѕРІР°СЏ СЃС‚Р°С‚РёСЃС‚РёРєР°
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log('\n' + '='.repeat(50));
  console.log('рџ“Љ Upload Summary:');
  console.log(`   Total files: ${totalFiles}`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Failed: ${totalFiles - successCount}`);
  console.log(`   Duration: ${duration}s`);
  console.log(
    `   Status: ${successCount === totalFiles ? 'вњ… All files uploaded!' : 'вљ пёЏ  Some files failed'}`
  );

  // РџСЂРѕРІРµСЂРєР° Р·Р°РіСЂСѓР¶РµРЅРЅС‹С… С„Р°Р№Р»РѕРІ
  if (!options.dryRun && successCount > 0) {
    console.log('\nрџ”Ќ Verifying uploads...');
    try {
      const envFlag = options.env === 'prod' ? '' : `--env ${options.env}`;
      const listCommand = `wrangler r2 object list ${CONFIG.R2_BUCKET_NAME} ${envFlag}`;

      if (options.verbose) {
        console.log(`Command: ${listCommand}`);
        execSync(listCommand, { stdio: 'inherit' });
      } else {
        const output = execSync(listCommand, { encoding: 'utf8' });
        const uploadedCount =
          output.split('\n').filter(line => line.trim()).length - 1;
        console.log(`   вњ… Found ${uploadedCount} objects in R2 bucket`);
      }
    } catch (error) {
      console.log(`   вљ пёЏ  Could not verify uploads: ${error.message}`);
    }
  }

  process.exit(successCount === totalFiles ? 0 : 1);
}

// РћР±СЂР°Р±РѕС‚РєР° РѕС€РёР±РѕРє
process.on('unhandledRejection', error => {
  console.error('вќЊ Unhandled error:', error);
  process.exit(1);
});

// Р—Р°РїСѓСЃРє
if (require.main === module) {
  uploadContentToR2();
}

module.exports = { uploadContentToR2, COURSE_STRUCTURE };

```

---

### `scripts/upload-single-content.ps1` (4.52 KB)

```powershell
# upload-single-content.ps1
# Скрипт загрузки одного видео и thumbnail в R2

param(
    [Parameter(Mandatory=$true)]
    [string]$LessonName,  # Например: week1_lesson1

    [string]$CourseId = "course01",
    [string]$VideoPath = "",
    [string]$ThumbnailPath = "",
    [switch]$TestMode = $false
)

# Если пути не указаны, ищем файлы по имени урока
if (-not $VideoPath) {
    $VideoPath = ".\$LessonName.mp4"
}
if (-not $ThumbnailPath) {
    $ThumbnailPath = ".\$LessonName.jpg"
}

# Проверяем наличие файлов
$errors = @()
if (-not (Test-Path $VideoPath)) {
    $errors += "❌ Видео не найдено: $VideoPath"
}
if (-not (Test-Path $ThumbnailPath)) {
    $errors += "❌ Thumbnail не найден: $ThumbnailPath"
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "`n📦 Загрузка контента для урока: $LessonName" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "📚 Курс: $CourseId" -ForegroundColor White
Write-Host "🎬 Видео: $VideoPath" -ForegroundColor White
Write-Host "🖼️  Thumbnail: $ThumbnailPath" -ForegroundColor White

# R2 paths
$r2VideoPath = "videos/$CourseId/$LessonName.mp4"
$r2ThumbnailPath = "thumbnails/$CourseId/$LessonName.jpg"

Write-Host "`n📤 Загрузка в R2..." -ForegroundColor Yellow

# Команды для загрузки
$commands = @(
    @{
        Type = "Video"
        LocalPath = $VideoPath
        R2Path = $r2VideoPath
        ContentType = "video/mp4"
    },
    @{
        Type = "Thumbnail"
        LocalPath = $ThumbnailPath
        R2Path = $r2ThumbnailPath
        ContentType = "image/jpeg"
    }
)

foreach ($cmd in $commands) {
    Write-Host "`n📌 Загрузка $($cmd.Type)..." -ForegroundColor Cyan

    if ($TestMode) {
        Write-Host "   [TEST MODE] Команда:" -ForegroundColor Gray
        Write-Host "   wrangler r2 object put mastermarat-content/$($cmd.R2Path) --file=""$($cmd.LocalPath)"" --content-type=""$($cmd.ContentType)""" -ForegroundColor Yellow
    } else {
        try {
            # Выполняем загрузку
            $result = wrangler r2 object put "mastermarat-content/$($cmd.R2Path)" `
                --file="$($cmd.LocalPath)" `
                --content-type="$($cmd.ContentType)" 2>&1

            if ($LASTEXITCODE -eq 0) {
                Write-Host "   ✅ Успешно загружено: $($cmd.R2Path)" -ForegroundColor Green

                # Получаем информацию о файле
                $fileInfo = Get-Item $cmd.LocalPath
                $sizeMB = [math]::Round($fileInfo.Length / 1MB, 2)
                Write-Host "   📊 Размер: $sizeMB MB" -ForegroundColor Gray
            } else {
                Write-Host "   ❌ Ошибка загрузки!" -ForegroundColor Red
                Write-Host "   $result" -ForegroundColor Red
            }
        } catch {
            Write-Host "   ❌ Ошибка: $_" -ForegroundColor Red
        }
    }
}

Write-Host "`n📋 Итоговые пути в R2:" -ForegroundColor Cyan
Write-Host "   Видео: $r2VideoPath" -ForegroundColor White
Write-Host "   Thumbnail: $r2ThumbnailPath" -ForegroundColor White

Write-Host "`n🔗 URL для проверки:" -ForegroundColor Cyan
Write-Host "   Thumbnail: https://api.mastermarat.com/thumbnails/$CourseId/$LessonName.jpg" -ForegroundColor White
Write-Host "   Видео: https://api.mastermarat.com/video/$CourseId/$LessonName.mp4?token=demo123" -ForegroundColor White

Write-Host "`n✅ Готово!" -ForegroundColor Green

# Примеры использования
Write-Host "`n💡 Примеры использования:" -ForegroundColor Yellow
Write-Host @"
   # Простая загрузка (файлы в текущей папке)
   .\upload-single-content.ps1 -LessonName week1_lesson1

   # С указанием путей
   .\upload-single-content.ps1 -LessonName week1_lesson1 -VideoPath "C:\Videos\lesson1.mp4" -ThumbnailPath "C:\Thumbs\lesson1.jpg"

   # Тестовый режим (только показать команды)
   .\upload-single-content.ps1 -LessonName week1_lesson1 -TestMode

   # Для другого курса
   .\upload-single-content.ps1 -LessonName intro -CourseId course00
"@ -ForegroundColor Gray

```

---

### `temp_upload/scripts/git_upload.ps1` (0.58 KB)

```powershell
param(
    [string]$CommitMessage
)

if ([string]::IsNullOrEmpty($CommitMessage)) {
    Write-Host "РСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ: .\git_upload.ps1 -CommitMessage \"Р’Р°С€Рµ СЃРѕРѕР±С‰РµРЅРёРµ РєРѕРјРјРёС‚Р°\""
    exit 1
}

Write-Host "Р”РѕР±Р°РІР»РµРЅРёРµ РІСЃРµС… РёР·РјРµРЅРµРЅРёР№ РІ РёРЅРґРµРєСЃ..."
git add .

Write-Host "РЎРѕР·РґР°РЅРёРµ РєРѕРјРјРёС‚Р° СЃ СЃРѕРѕР±С‰РµРЅРёРµРј: \"$CommitMessage\""
git commit -m "$CommitMessage"

Write-Host "РћС‚РїСЂР°РІРєР° РёР·РјРµРЅРµРЅРёР№ РІ СѓРґР°Р»РµРЅРЅС‹Р№ СЂРµРїРѕР·РёС‚РѕСЂРёР№..."
git push

Write-Host "РћРїРµСЂР°С†РёСЏ Р·Р°РІРµСЂС€РµРЅР°."


```

---

## Summary

- **Total Files**: 69
- **Total Size**: 1.91 MB
- **Categories**: 8
- **Generated**: 2025-07-08 09:46:50

