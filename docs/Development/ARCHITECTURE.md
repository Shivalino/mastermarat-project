# Архитектура MasterMarat API

> Детальное описание модульной архитектуры после рефакторинга от 01.07.2025

## 📋 Содержание

- [Обзор архитектуры](#обзор-архитектуры)
- [Структура проекта](#структура-проекта)
- [Основные компоненты](#основные-компоненты)
- [Поток данных](#поток-данных)
- [Модули и их назначение](#модули-и-их-назначение)
- [Интеграции](#интеграции)
- [Безопасность](#безопасность)
- [Масштабирование](#масштабирование)

---

## 🎯 Обзор архитектуры

### Технологический стек
- **Runtime**: Cloudflare Workers (V8 Isolates)
- **Хранилище**: Cloudflare R2 (S3-совместимое)
- **Email**: SendPulse Automation 360
- **Платежи**: Fondy (UAH) + Monobank
- **CDN**: Cloudflare Global Network
- **Домены**: mastermarat.com + поддомены

### Архитектурные принципы
1. **Serverless-first** - нет серверов для управления
2. **Edge Computing** - выполнение кода ближе к пользователю
3. **Модульность** - разделение ответственности
4. **Безопасность** - токены вместо сессий
5. **Масштабируемость** - автоматическое масштабирование

---

## 📁 Структура проекта
mastermarat-project/
├── workers/
│   └── api/
│       ├── src/
│       │   ├── worker-new.js          # Точка входа (роутер)
│       │   ├── config/                # Конфигурации
│       │   ├── handlers/              # HTTP обработчики
│       │   ├── services/              # Бизнес-логика
│       │   └── utils/                 # Утилиты
│       ├── wrangler.toml              # Конфигурация Cloudflare
│       └── package.json               # Зависимости
├── content/                           # Локальный контент для тестов
├── docs/                              # Документация
└── scripts/                           # Скрипты деплоя

---

## 🔧 Основные компоненты

### 1. Worker Router (worker-new.js)
```javascript
// Минималистичный роутер - 30 строк
// Только маршрутизация запросов к handlers
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Маршрутизация по pathname
    if (url.pathname === '/') return handleApiDocumentation(...)
    if (url.pathname.startsWith('/player/')) return handlePlayerLearning(...)
    // ...
  }
}
2. Handlers (обработчики запросов)
Каждый handler отвечает за свой endpoint:
HandlerEndpointФункцияapi.jsGET /Документация APItest.jsGET /testТестирование токеновthumbnails.jsGET /thumbnails/*Публичные превьюvideo.jsGET /video/*Защищенный стримингplayer-learning.jsGET /player/*Плеер обученияplayer-archive.jsGET /archive/*Плеер архиваwebhooks.jsPOST /webhook/*SendPulse интеграция
3. Services (бизнес-логика)
Переиспользуемая логика:

auth.js - проверка токенов и прав доступа
sendpulse.js - работа с SendPulse API
content.js - загрузка контента из R2

4. Utils (утилиты)
Вспомогательные функции:

cors.js - CORS заголовки и обертки
errors.js - стандартизированные ошибки
token.js - генерация и валидация токенов

5. Config (конфигурация)
Статические данные:

courses.js - структура курсов и уроков
constants.js - токены, URL, настройки


🔄 Поток данных
Обработка запроса на просмотр видео
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
Webhook обработка покупки
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

📦 Модули и их назначение
/config/courses.js
Структура курсов с метаданными:
javascript{
  "course1": {
    title: "Механика здоровья",
    lessons: {
      "week1_lesson1": {
        title: "Введение в биомеханику",
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
Поддержка HTTP Range requests для стриминга:
javascript// Обработка частичных запросов видео
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
Многоуровневая система доступа:
javascript{
  superuser: ['*'],          // Все курсы и функции
  vip: ['course1', 'course2', 'consultation'],
  standard: ['course1', 'archive'],
  basic: ['course1'],        // Только плеер
  demo: ['course1']          // Ограниченный доступ
}

🔌 Интеграции
Cloudflare R2

Bucket: mastermarat-videos
Структура: /content/{courseId}/{fileName}
Доступ: Через Worker API, прямой доступ закрыт
Кеширование: 1 час для видео, 24 часа для превью

SendPulse API

Адресная книга: Хранение данных пользователей
Переменные: purchase_date, subscription_type, courses_access
Автоматизации: Email последовательности по событиям
Webhooks: Покупка, отмена, продление

Платежные системы

Fondy: Международные платежи (USD/EUR)
Monobank: Локальные платежи (UAH)
Webhook flow: Payment → SendPulse → Worker → Access


🔐 Безопасность
Токены доступа
javascript// Формат: {emailHash}_{courseId}_{timestamp}
// Пример: aGVsbG8_course1_lqr5n8k

// Проверка:
1. Валидация формата
2. Проверка в SendPulse (TODO)
3. Проверка прав на курс
4. Проверка срока действия
CORS политика
javascript{
  'Access-Control-Allow-Origin': '*',  // Для публичного API
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}
Защита контента

Видео доступны только через API с токеном
Нет прямых ссылок на R2
Токены с ограниченным сроком действия
Rate limiting на уровне Cloudflare


📈 Масштабирование
Текущие возможности

Запросов: 100,000/день (бесплатный план)
CPU время: 10ms/запрос
Пользователей: ~1,000 одновременно
География: 200+ PoP Cloudflare

Оптимизации

Кеширование: Агрессивное для статики
Lazy loading: Подгрузка по требованию
Edge computing: Минимум обращений к origin
Compression: Brotli для HTML/JS

План масштабирования
ПользователейПланСтоимостьИзменения< 1,000Free$0Текущая архитектура1,000-10,000Paid$5/месWorkers Paid план10,000+EnterpriseCustomKV для сессий, Durable Objects

🎯 Архитектурные решения
Почему Cloudflare Workers?

Глобальная сеть - низкая задержка
Автомасштабирование - нет управления серверами
Стоимость - оплата за использование
Простота - JavaScript/TypeScript
Интеграция - R2, KV, Durable Objects

Почему модульная архитектура?

Читаемость - каждый модуль < 200 строк
Тестируемость - изолированная логика
Поддержка - легко найти и исправить
Расширяемость - новые features = новые модули

Почему без базы данных?

Простота - SendPulse как "база данных"
Стоимость - нет затрат на БД
Скорость - нет запросов к БД
Надежность - меньше точек отказа


🔮 Будущие улучшения
Краткосрочные (1-2 месяца)

 Интеграция SendPulse API
 Аналитика просмотров
 A/B тестирование плееров
 Оптимизация загрузки видео

Долгосрочные (3-6 месяцев)

 KV Storage для кеша пользователей
 Durable Objects для real-time features
 WebRTC для live консультаций
 PWA мобильное приложение


Документ обновлен: 01.07.2025
