# MasterMarat API Worker

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

**MasterMarat.com** - EdTech платформа email-курсов практик для самопомощи (питание, массаж, телесные практики) от Марата Малиеева (остеопат с 20-летним опытом).

- **Основная задача**: Защищенная доставка видео-контента подписчикам
- **Технологии**: Cloudflare Workers, R2 Storage, SendPulse
- **Бизнес-модель**: Месячные подписки (Базовый $30, Стандарт $50, VIP $150)
- **Аудитория**: 90% женщины 35+ с проблемами со здоровьем

## Architecture Overview

This is a **Cloudflare Worker** that serves as the API backend for MasterMarat.com. The worker handles protected video streaming, user authentication, and webhook integrations.

### Directory Structure
```
src/
├── handlers/         # HTTP обработчики для каждого эндпоинта
│   ├── api.js       # Документация API
│   ├── video.js     # Стриминг видео с проверкой прав
│   ├── player-*.js  # Плееры для разных режимов
│   └── webhooks.js  # Интеграция с SendPulse
├── services/        # Бизнес-логика
│   ├── auth.js      # Валидация токенов
│   ├── content.js   # Работа с R2 Storage
│   └── sendpulse.js # API SendPulse (TODO)
├── utils/           # Вспомогательные функции
│   ├── token.js     # Парсинг и проверка токенов
│   ├── errors.js    # Стандартизированные ошибки
│   └── cors.js      # CORS заголовки
└── config/          # Конфигурация
    ├── constants.js # Токены, права, настройки
    └── courses.js   # Структура курсов
```

## Development Commands

### Core Commands
```bash
# Разработка
npm run dev              # Локальный сервер (http://localhost:8787)
npm run dev:remote       # Dev сервер с remote environment

# Тестирование и качество кода
npm run test            # Запуск тестов API
npm run lint            # Проверка ESLint
npm run format          # Форматирование Prettier

# Деплой
npm run deploy:dev      # Deploy в dev (api-dev.mastermarat.com)
npm run deploy          # Deploy в production (api.mastermarat.com)

# Отладка
npm run logs:dev        # Логи development
npm run logs            # Логи production
wrangler tail          # Real-time логи
```

## Key Components & Code Locations

### Authentication System
- **Главная логика**: `src/services/auth.js:4-35` - функция `checkTokenAccess()`
- **Парсинг токенов**: `src/utils/token.js:15-45` - функция `parseToken()`
- **Проверка прав**: `src/utils/token.js:70-120` - функция `hasAccess()`
- **Конфигурация**: `src/config/constants.js:21-65` - объекты `TEST_TOKENS` и `SUBSCRIPTION_TIERS`

### Video Protection
- **Обработчик видео**: `src/handlers/video.js` - поддержка range requests
- **Проверка доступа**: Строка 25-40 - валидация токена перед отдачей видео
- **Путь к файлам**: `content/{courseId}/{filename}` в R2 bucket

### Test Tokens
```javascript
// Defined in src/config/constants.js
superuser_mastermarat_2025  // Полный доступ ко всему
vip_test_token_2025        // VIP подписка - все курсы + архив
standard_test_token_2025   // Стандарт - ограниченные курсы
basic_test_token_2025      // Базовый - минимальный доступ
demo123                    // Демо доступ к course00
```

## Common Tasks

### 1. Добавить новый API эндпоинт
```javascript
// 1. Создать handler в src/handlers/my-endpoint.js
export async function handleMyEndpoint(request, env) {
  // Логика обработки
  return new Response(JSON.stringify({ success: true }));
}

// 2. Добавить роут в src/worker-new.js (строка ~30)
router.get('/api/my-endpoint', (request) => handleMyEndpoint(request, env));

// 3. Обновить документацию в src/handlers/api.js
```

### 2. Добавить новый тестовый токен
```javascript
// В src/config/constants.js добавить в TEST_TOKENS:
export const TEST_TOKENS = {
  // ... существующие токены
  'my_new_token_2025': {
    email: 'test@example.com',
    courses: ['course1', 'course2'],
    tier: 'standard',
    features: {
      player: true,
      archive: false,
      download: false
    }
  }
};
```

### 3. Добавить новый курс
```javascript
// В src/config/courses.js:
export const COURSES = {
  // ... существующие курсы
  course3: {
    id: 'course3',
    title: 'Название курса',
    description: 'Описание',
    lessons: [
      { id: 'intro', title: 'Введение', duration: '5:30' },
      { id: 'lesson1', title: 'Урок 1', duration: '15:45' }
    ]
  }
};
```

### 4. Изменить CORS политику
```javascript
// В src/utils/cors.js:
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'https://mastermarat.com', // Вместо '*'
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};
```

## Testing Guide

### Локальное тестирование
```bash
# 1. Запустить dev сервер
npm run dev
# Обратите внимание на порт в выводе:
# [wrangler:inf] Ready on http://localhost:XXXX

# 2. Проверить основные эндпоинты (замените XXXX на актуальный порт)
curl http://localhost:8787/test
curl http://localhost:8787/api
curl "http://localhost:8787/video/course1/test.mp4?token=demo123"
curl "http://localhost:8787/player/course1/lesson1?token=standard_test_token_2025"

# 3. Проверить ошибки
curl http://localhost:8787/video/course1/test.mp4  # Без токена - должна быть 401

# 4. Если порт 8787 занят, wrangler выберет другой
# Смотрите вывод: Ready on http://localhost:45941 (например)
```

### Тестирование на dev окружении
```bash
# Deploy в dev
npm run deploy:dev

# Тестировать на api-dev.mastermarat.com
curl https://api-dev.mastermarat.com/test
```

## Troubleshooting

### "Token invalid or expired" (401 Unauthorized)
```bash
# Проверить формат токена
# Должен быть: email_hash + course_id + timestamp
# Или один из TEST_TOKENS

# Debug токена:
curl "http://localhost:8787/test" # Покажет все тестовые токены
```

### "Video not found" (404)
```bash
# Проверить путь в R2:
wrangler r2 object list mastermarat-videos --prefix="content/course1/"

# Правильный путь: content/{courseId}/{filename}
# Например: content/course1/week1_lesson1.mp4
```

### "CORS blocked"
```javascript
// Проверить что CORS headers добавлены
// В src/utils/cors.js должно быть:
response.headers.set('Access-Control-Allow-Origin', '*');
```

### Ошибки R2 binding
```toml
# Проверить wrangler.toml:
[[r2_buckets]]
binding = "R2"
bucket_name = "mastermarat-videos"
```

### SendPulse webhook не работает
```javascript
// Проверить секретный ключ в .dev.vars:
SENDPULSE_WEBHOOK_SECRET=your_secret_key

// В production установить через:
wrangler secret put SENDPULSE_WEBHOOK_SECRET --env production
```

## Environment Variables

### Development (.dev.vars)
```env
# SendPulse
SENDPULSE_ID=your_id
SENDPULSE_SECRET=your_secret
SENDPULSE_WEBHOOK_SECRET=webhook_secret

# Environment
ENVIRONMENT=development
API_BASE_URL=http://localhost:8787

# Test settings
DEV_MODE=true
DEBUG_LEVEL=verbose
```

### Production (wrangler secrets)
```bash
# Установить секреты для production:
wrangler secret put SENDPULSE_ID --env production
wrangler secret put SENDPULSE_SECRET --env production
wrangler secret put SENDPULSE_WEBHOOK_SECRET --env production
```

## Project Structure Context

```
mastermarat-project/
├── workers/
│   └── api/                # Этот Worker
│       ├── src/           # Исходный код
│       ├── wrangler.toml  # Конфигурация Cloudflare
│       ├── package.json   # Зависимости
│       └── CLAUDE.md      # Этот файл
├── scripts/               # Общие скрипты
│   └── test-api.js       # Тесты API
├── docs/                 # Документация проекта
└── README.md            # Общее описание проекта
```

## Important Notes / Best Practices

### Security
- ⚠️ **Все видео требуют токен** (кроме демо курса course00)
- ⚠️ **Проверяйте права доступа** перед отдачей контента
- ⚠️ **Не логируйте токены** в production
- ⚠️ **CORS в production** должен быть ограничен доменом

### Performance
- 💡 Используйте **streaming** для видео (уже реализовано)
- 💡 Кешируйте **thumbnails** через Cache API
- 💡 Минимизируйте **R2 запросы**

### Development
- 💡 Используйте `wrangler tail` для **real-time отладки**
- 💡 Тестируйте с разными **токенами и правами**
- 💡 Проверяйте **edge cases** (нет токена, неверный токен, истекший токен)
- 💡 Документируйте **новые эндпоинты** в api.js

### Monitoring
- 📊 Проверяйте **Cloudflare Analytics** для ошибок
- 📊 Настройте **алерты** на high error rate
- 📊 Мониторьте **R2 usage** для контроля расходов

## Quick Debug Commands

```bash
# Посмотреть все файлы в R2
wrangler r2 object list mastermarat-videos

# Проверить конкретный файл
wrangler r2 object get mastermarat-videos/content/course1/test.mp4

# Real-time логи
wrangler tail --env production

# Проверить деплой
wrangler deployments list

# Откатиться на предыдущую версию
wrangler rollback --env production
```

## External Documentation & Resources

### Cloudflare Workers
- **Official Docs**: https://developers.cloudflare.com/workers/
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/
- **R2 Storage**: https://developers.cloudflare.com/r2/
- **Workers Examples**: https://developers.cloudflare.com/workers/examples/
- **KV Storage**: https://developers.cloudflare.com/kv/ (для будущего кеширования)
- **Durable Objects**: https://developers.cloudflare.com/durable-objects/ (для real-time features)

### SendPulse API
- **API Documentation**: https://sendpulse.com/api
- **Webhooks Guide**: https://sendpulse.com/knowledge-base/email-service/automation/webhooks
- **API Console**: https://sendpulse.com/integrations/api/console
- **Node.js SDK**: https://github.com/sendpulse/sendpulse-rest-api-node.js

### Other Integrations
- **Monobank API**: https://api.monobank.ua/docs/
- **Zoho Mail**: https://www.zoho.com/mail/help/api/
- **HeyGen AI** (для переводов): https://www.heygen.com/api-docs

## Local Development Ports

При запуске `npm run dev`, Wrangler может использовать разные порты:

```bash
# Основной API Worker
http://localhost:8787       # Стандартный порт
http://localhost:8788       # Альтернативный, если 8787 занят
http://localhost:[random]   # Случайный порт (показывается в консоли)

# Инспектор Wrangler (для отладки)
http://localhost:9229       # Chrome DevTools inspector

# Другие сервисы проекта (если запущены)
http://localhost:3000       # SendPulse лендинг (если локально)
http://localhost:5173       # Vite dev server (для будущего фронтенда)
```

### Проверка занятых портов
```bash
# Windows
netstat -ano | findstr :8787

# Linux/Mac
lsof -i :8787

# Убить процесс на порту (Linux/Mac)
kill -9 $(lsof -t -i:8787)
```

## Useful Browser Extensions

Для разработки и тестирования API:
- **ModHeader**: Добавление custom headers (токены)
- **JSON Viewer**: Форматирование JSON ответов
- **CORS Unblock**: Тестирование CORS locally
- **Postman**: Комплексное тестирование API

## Contact & Support

- **Техническая поддержка**: Вячеслав (CTO)
- **Контент и курсы**: Амира (PM)
- **GitHub Issues**: https://github.com/Shivalino/mastermarat-project/issues
- **Срочные проблемы**: Создать issue с тегом `urgent`

---

*Последнее обновление: Июль 2025*
