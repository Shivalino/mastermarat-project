# MasterMarat.com - EdTech Platform

> Email-курсы остеопатических практик для самопомощи от Марата Малиева

[![Status](https://img.shields.io/badge/Status-Development-yellow)](https://github.com/Shivalino/mastermarat-project)
[![API](https://img.shields.io/badge/API-Cloudflare_Workers-orange)](https://api.mastermarat.com)
[![Architecture](https://img.shields.io/badge/Architecture-Modular-green)](./ARCHITECTURE.md)

---

## 🎯 О проекте

**MasterMarat.com** - платформа email-курсов практических техник для здоровья от остеопата с 20-летним опытом Марата Малиева. Проект специализируется на обучении простым техникам оздоровления и самопомощи через структурированные email-рассылки с видео-уроками.

### Ключевые особенности
- 📧 **Email-первый подход** - обучение через еженедельные рассылки SendPulse
- 🎥 **Видео-контент** - вертикальные видео 9:16 для мобильных устройств
- 🔐 **Защищенный доступ** - токенизированная система с разными уровнями
- 🌍 **Многоязычность** - RU/UA/EN версии (через AI-переводы HeyGen)
- 💰 **Подписочная модель** - 3 тарифа с разным уровнем поддержки

---

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- Wrangler CLI 3.0+
- Доступ к Cloudflare аккаунту
- R2 bucket `mastermarat-videos`

### Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# Установка зависимостей
npm install

# Локальная разработка
npm run dev                    # http://localhost:8787

# Деплой в окружения
npm run deploy:dev            # api-dev.mastermarat.com
npm run deploy                # api.mastermarat.com

🏗️ Архитектура проекта
Текущий статус: МОДУЛЬНАЯ АРХИТЕКТУРА ✅
После рефакторинга от 01.07.2025:

✅ Разбили монолитный worker.js (500+ строк) на модули
✅ Создали чистую структуру handlers/utils/services
✅ Реализовали два типа видеоплеера
✅ Добавили систему тестовых токенов

workers/api/src/
├── worker-new.js              # Главный роутер (30 строк)
├── config/
│   ├── courses.js            # Структура курсов и уроков
│   └── constants.js          # Токены и константы
├── handlers/                  # HTTP обработчики
│   ├── api.js               # GET / - документация
│   ├── test.js              # GET /test - тестирование токенов
│   ├── thumbnails.js        # GET /thumbnails/* - превью
│   ├── video.js             # GET /video/* - видео стриминг
│   ├── player-learning.js   # GET /player/* - режим обучения
│   ├── player-archive.js    # GET /archive/* - режим архива
│   └── webhooks.js          # POST /webhook/* - SendPulse
├── services/                  # Бизнес-логика
│   ├── auth.js              # Проверка токенов
│   ├── sendpulse.js         # API SendPulse
│   └── content.js           # Работа с R2
└── utils/                     # Вспомогательные функции
    ├── cors.js              # CORS заголовки
    ├── errors.js            # Обработка ошибок
    └── token.js             # Генерация токенов
Подробнее см. ARCHITECTURE.md

🔐 Система авторизации
Тестовые токены для разработки
ТокенТипОписаниеДоступsuperuser_mastermarat_2025SuperUserПолный доступВсе функции + админкаvip_test_token_2025VIPVIP подпискаВсе курсы + консультацииstandard_test_token_2025StandardСтандартная подпискаКурс + архивbasic_test_token_2025BasicБазовая подпискаТолько плеерdemo123DemoДемо доступОграниченный просмотр
Проверка токенов
Откройте http://localhost:8787/test для интерактивной проверки всех токенов.

📡 API Endpoints
Основные маршруты
МетодEndpointОписаниеТребует токенGET/Документация API❌GET/testТестирование токенов❌GET/player/{courseId}/{lessonId}Плеер для обучения✅GET/archive/{courseId}Архив всех уроков✅GET/thumbnails/{courseId}/{file}Превью видео❌GET/video/{courseId}/{file}Защищенное видео✅POST/webhook/purchaseWebhook от SendPulse🔑
Примеры использования
bash# Документация API
curl https://api-dev.mastermarat.com/

# Плеер с SuperUser токеном
curl "https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=superuser_mastermarat_2025"

# Архив курса
curl "https://api-dev.mastermarat.com/archive/course1?token=vip_test_token_2025"

# Защищенное видео
curl "https://api-dev.mastermarat.com/video/course1/test_video.mp4?token=standard_test_token_2025"
Полная документация API: API_REFERENCE.md

💼 Бизнес-модель
Тарифные планы (подписка на 3 месяца)
ПланЦена/месОсобенностиБазовый$30Email-курс с видео урокамиСтандартный ⭐$50+ Персональная поддержка в чатеVIP$150+ Консультации с Маратом (1 раз/мес)
Структура курса "Механика здоровья"

8 уроков (4 недели по 2 урока)
Длительность урока: 15-30 минут
Формат: Вертикальное видео 9:16
Дополнительно: Текстовые материалы под каждым видео


👥 Команда
РольУчастникОтветственностьДоляCEOМаратЭксперт-остеопат, контент, VIP-консультации35%PM & ContentАмираУправление проектом, поддержка клиентов35%CTOВячеславТехническая реализация, DevOps, ФОП30%

🛠️ Разработка
Полезные команды
bash# Линтинг кода
npm run lint

# Форматирование
npm run format

# Логи Cloudflare
wrangler tail

# Проверка R2 bucket
wrangler r2 object list mastermarat-videos
Переменные окружения
Создайте .dev.vars для локальной разработки:
envSENDPULSE_ID=your_id_here
SENDPULSE_SECRET=your_secret_here
ENVIRONMENT=development
Отладка

Откройте http://localhost:8787/test для проверки токенов
Используйте wrangler tail для просмотра логов
Chrome DevTools доступны через [d] в консоли wrangler


📊 Текущий прогресс
✅ Завершено (Июль 2025)

 Модульная архитектура API
 Два типа видеоплеера (learning/archive)
 Система тестовых токенов
 Интеграция с R2 Storage
 HTTP Range requests для видео
 Адаптивный дизайн плееров

🔄 В процессе

 SendPulse API интеграция
 Загрузка реального контента
 Email автоматизации
 Платежная интеграция Fondy

📅 Планируется

 Украинская версия (ua.mastermarat.com)
 Английская версия (en.mastermarat.com)
 Мобильное приложение
 Расширенная аналитика

Детальный статус: DEVELOPMENT_STATUS.md

🚀 Деплой
Инструкции по развертыванию: DEPLOYMENT.md
Быстрый деплой
bash# Проверка конфигурации
npm run check

# Деплой на dev
npm run deploy:dev

# Деплой на production (требует подтверждения)
npm run deploy

📞 Контакты и поддержка

GitHub Issues: Создать issue
Техническая поддержка: Вячеслав (CTO)
Вопросы по контенту: Амира (PM)
Email: support@mastermarat.com


📄 Лицензия
Proprietary - Все права защищены © 2025 MasterMarat

Последнее обновление: 01.07.2025 - Модульная архитектура
