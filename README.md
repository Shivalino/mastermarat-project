# MasterMarat.com - EdTech Platform

> Email-курсы остеопатических практик для самопомощи от Марата Малиева

[![Status](https://img.shields.io/badge/Status-Development-yellow)](https://github.com/Shivalino/mastermarat-project)
[![API](https://img.shields.io/badge/API-Cloudflare_Workers-orange)](https://api.mastermarat.com)

---

## 🎯 О проекте

**MasterMarat.com** - платформа email-курсов практических техник для здоровья от остеопата с 20-летним опытом Марата Малиева. Проект специализируется на обучении простым техникам оздоровления и самопомощи через структурированные email-рассылки с видео-уроками.

### Ключевые особенности
- 📧 **Email-первый подход** - обучение через еженедельные рассылки
- 🎥 **Видео-контент** - вертикальные видео 9:16 для мобильных устройств
- 🔐 **Защищенный доступ** - токенизированная система доступа к контенту
- 🌍 **Многоязычность** - русский, украинский, английский (через AI-переводы)
- 💰 **Подписочная модель** - 3 тарифа с разным уровнем поддержки

---

## 👥 Команда

| Роль | Участник | Ответственность |
|------|----------|----------------|
| **CEO (35%)** | Марат | Остеопат-эксперт, создание и утверждение контента, VIP-консультации |
| **PM & Content (35%)** | Амира | Управление проектом, утверждение контента, клиентская поддержка |
| **CTO (30%)** | Вячеслав | Техническая реализация, ФОП, AI-переводы, DevOps |

---

## 🏗️ Техническая архитектура - МОДУЛЬНАЯ ✅

**После рефакторинга от 01.07.2025:**
- ✅ Разбили worker.js (500+ строк) на модули
- ✅ Создали handlers/ для каждого endpoint  
- ✅ Добавили utils/ для переиспользуемого кода
- ✅ Подготовили два типа плеера

```
workers/api/src/
├── worker-new.js              # Новый роутер (30 строк)
├── config/                    # Конфигурации
├── handlers/                  # HTTP обработчики
├── utils/                     # Утилиты (CORS, токены, ошибки)
└── services/                  # Бизнес-логика (TODO)
```

### Инфраструктура
┌─────────────────────────────────────────────────────────────┐
│ mastermarat.com (Cloudflare Pages + SendPulse)             │
│ ├── Лендинг с lead-магнитом                                 │
│ └── Email-форма → SendPulse Automation 360                 │
└─────────────────────────────────────────────────────────────┘
↓
┌─────────────────────────────────────────────────────────────┐
│ api.mastermarat.com (Cloudflare Workers)                   │
│ ├── Модульная архитектура (handlers, services, utils)      │
│ ├── Защищенное видео с HTTP Range requests                 │
│ ├── Два типа плеера (learning/archive)                     │
│ └── SendPulse webhook интеграция                           │
└─────────────────────────────────────────────────────────────┘
↓
┌─────────────────────────────────────────────────────────────┐
│ R2 Object Storage (mastermarat-videos)                     │
│ ├── /videos/ → защищенные MP4 файлы курсов                 │
│ ├── /thumbnails/ → публичные превью                        │
│ └── /content/ → JSON метаданные уроков                     │
└─────────────────────────────────────────────────────────────┘

### Домены и окружения
- **Production**: `mastermarat.com`, `api.mastermarat.com`
- **Development**: `api-dev.mastermarat.com`
- **Email**: Zoho Mail (`mastermarat.com`)
- **Marketing**: SendPulse Automation 360

---

## 💰 Бизнес-модель

### Тарифные планы (месячная подписка × 3 месяца)
| Тариф | Цена | Описание |
|-------|------|----------|
| **Базовый** | $30/мес | Email-курс с видео-уроками |
| **Стандартный** ⭐ | $50/мес | + персональная поддержка через Telegram |
| **VIP** | $150/мес | + персональные консультации с Маратом |

### Два типа плеера (новая фича)
1. **Learning Mode** (`/player/{courseId}/{lessonId}`) - из email, без навигации
2. **Archive Mode** (`/archive/{courseId}`) - после курса, с полной навигацией

### Продуктовая линейка
- **8 курсов** по 3-4 недели каждый
- **58 видео-уроков** общей продолжительностью
- **Многоязычная локализация** (RU → UA → EN)
- **Прогрессивное открытие контента** по расписанию

---

## 📂 Структура проекта
mastermarat-project/
├── .github/workflows/          # CI/CD конфигурации (TODO)
├── docs/                       # Проектная документация
├── scripts/                    # Утилиты и скрипты
│   ├── test-api.js            # Тестирование API endpoints
│   └── upload_content_to_r2.js # Загрузка контента в R2
├── temp_upload/               # Временные файлы для загрузки
│   └── content/course1/       # JSON файлы контента уроков
└── workers/api/               # Cloudflare Workers API
├── src/
│   ├── config/           # Конфигурации и константы
│   │   ├── courses.js    # Структура курсов
│   │   └── constants.js  # API константы
│   ├── handlers/         # HTTP request handlers
│   │   ├── api.js        # GET / - документация API
│   │   ├── thumbnails.js # GET /thumbnails/* - публичные превью
│   │   ├── video.js      # GET /video/* - защищенные видео
│   │   ├── player-learning.js # GET /player/* - плеер для обучения
│   │   ├── player-archive.js  # GET /archive/* - плеер-архив
│   │   └── webhooks.js   # POST /webhook/* - SendPulse integration
│   ├── services/         # Бизнес-логика (TODO)
│   │   ├── auth.js       # Аутентификация и авторизация
│   │   ├── sendpulse.js  # SendPulse API интеграция
│   │   └── content.js    # Работа с контентом из R2
│   ├── templates/        # HTML шаблоны (TODO)
│   │   ├── base.js       # Базовые HTML компоненты
│   │   ├── player-learning.js # Шаблон плеера для обучения
│   │   └── player-archive.js  # Шаблон плеера-архива
│   ├── utils/            # Вспомогательные утилиты
│   │   ├── cors.js       # CORS headers и helpers
│   │   ├── errors.js     # Обработка ошибок
│   │   └── token.js      # Генерация и валидация токенов
│   ├── worker.js         # Legacy monolithic worker (500+ строк)
│   └── worker-new.js     # Новый модульный роутер (30 строк)
├── package.json          # Зависимости и скрипты
├── wrangler.toml         # Cloudflare Workers конфигурация
└── node_modules/         # Установленные зависимости

---

## 🚀 Текущий статус проекта

### ✅ Завершено (Production Ready)
- [x] **Cloudflare Workers API** развернут на `api.mastermarat.com` и `api-dev.mastermarat.com`
- [x] **R2 Object Storage** настроен (`mastermarat-videos` bucket)
- [x] **Custom domains** и SSL сертификаты
- [x] **DNS конфигурация** через Cloudflare
- [x] **Zoho Mail** для корпоративной почты
- [x] **SendPulse лендинг** создан и настроен
- [x] **Модульная архитектура** - рефакторинг с 500+ строк на компоненты
- [x] **GitHub репозиторий** с VS Code workspace
- [x] **Линтеры и форматтеры** (ESLint + Prettier)

### 🔄 В разработке (Sprint 1)
- [ ] **Создание сервисов** (`services/auth.js`, `services/sendpulse.js`)
- [ ] **HTML шаблоны** для плееров (`templates/`)
- [ ] **SendPulse webhook интеграция** - автоматическая генерация токенов
- [ ] **Загрузка реального контента** в R2 (видео + JSON метаданные)
- [ ] **Два типа плеера**:
  - Learning mode (из email, без навигации)
  - Archive mode (после курса, с полной навигацией)

### 📋 Запланировано (Sprint 2-3)
- [ ] **SendPulse API интеграция** - хранение подписок в адресной книге
- [ ] **Украинская локализация** (`ua.mastermarat.com`)
- [ ] **AI-переводы видео** через HeyGen AI
- [ ] **Custom domain** для лендинга
- [ ] **Email автоматизации** (Welcome + Course sequences)
- [ ] **Telegram интеграция** для поддержки клиентов

---

## 🛠️ Разработка

### Требования к окружению
- **Node.js** ≥18.0.0
- **npm** ≥8.0.0
- **Wrangler CLI** (Cloudflare Workers)
- **Git** для version control

### Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# Установка зависимостей
npm install

# Локальная разработка
npm run dev                    # http://localhost:8787

# Деплой
npm run deploy:dev            # на api-dev.mastermarat.com
npm run deploy                # на api.mastermarat.com (production)

# Тестирование
npm run test                  # запуск API тестов
npm run lint                  # проверка кода ESLint
npm run format                # форматирование Prettier
Полезные команды
bash# Просмотр логов Workers
npm run logs                  # production logs
npm run logs:dev              # development logs

# Работа с R2 Storage
wrangler r2 object list mastermarat-videos
wrangler r2 object put mastermarat-videos/videos/course1/lesson1.mp4 --file="lesson1.mp4"

# Работа с контентом
node scripts/upload_content_to_r2.js    # загрузка JSON контента
node scripts/test-api.js                # тестирование endpoints

🔗 API Documentation
Базовый URL

Production: https://api.mastermarat.com
Development: https://api-dev.mastermarat.com

Endpoints
Общие

GET / - Документация API и статус системы

Контент

GET /thumbnails/{courseId}/{filename} - Публичные превью видео
GET /video/{courseId}/{filename}?token=xxx - Защищенные видео с streaming
GET /player/{courseId}/{lessonId}?token=xxx&email=xxx - Плеер для обучения
GET /archive/{courseId}?token=xxx - Плеер-архив с навигацией

Интеграции

POST /webhook/purchase - Webhook от SendPulse при покупке

Примеры запросов
bash# Документация API
curl https://api.mastermarat.com/

# Публичный thumbnail
curl https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg

# Защищенное видео (требует токен)
curl "https://api.mastermarat.com/video/course1/week1_lesson1.mp4?token=demo123"

# Плеер для обучения
curl "https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123&email=student@example.com"

📊 Мониторинг и аналитика
Метрики производительности

Free Tier лимиты: до 38 пользователей без доплат
Paid Worker: $5/мес для снятия лимитов
R2 Storage: бесплатный egress для видео
Целевая нагрузка: 100-1000 активных пользователей

Ключевые метрики

Конверсия лендинга: >3% (цель 5%)
Открываемость email: >25%
Завершение курса: >60%
Customer LTV: $150 (3 месяца × $50)
CAC: <$20 через organic + email


🤝 Вклад в проект
Роли и ответственности

Марат: Создание контента, экспертная оценка, VIP-консультации
Амира: Project management, content approval, customer support
Вячеслав: Technical development, DevOps, system administration

Workflow

Issues создаются в GitHub для новых фич и багов
Branches создаются от main для каждой фичи
Pull Requests для code review перед merge
Deployment через Wrangler CLI на dev → production
Testing через automated scripts и manual QA


📞 Контакты и поддержка
Техническая поддержка

GitHub Issues: создать issue
Email: tech@mastermarat.com
Development: Вячеслав (System Administrator)

Бизнес-вопросы

Email: hello@mastermarat.com
Project Management: Амира
Expertise: Марат Малиев (остеопат)


📄 Лицензия
Проект является частной собственностью команды MasterMarat. Все права защищены.

📈 Roadmap 2025
Q2 2025 (MVP)

 Техническая инфраструктура
 Первый курс на русском языке
 100 первых клиентов
 Email автоматизации

Q4 2025 (Локализация)

 Украинская версия (ua.mastermarat.com)
 AI-переводы видео контента
 Telegram-поддержка для Standard/VIP
 500 активных пользователей

2026 (Масштабирование)

 Английская версия (en.mastermarat.com)
 Дополнительные курсы
 Партнерская программа
 1000+ пользователей, $50k+ MRR

