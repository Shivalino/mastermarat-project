MasterMarat - EdTech Health Management Platform
Email-курс остеопатических техник для самопомощи от Марата Малиева.
🏗️ Архитектура

API: Cloudflare Workers + R2 Storage
Landing: SendPulse Landing Pages
Email: SendPulse Automation 360
Domain: mastermarat.com

🚀 Быстрый старт
Требования

Node.js 18+
Wrangler CLI
Cloudflare аккаунт

Установка
bash# Клонирование репозитория
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project

# Установка зависимостей для Worker
cd workers/api
npm install

# Установка Wrangler CLI глобально
npm install -g wrangler

# Авторизация в Cloudflare
wrangler login

# Локальная разработка
npm run dev
Деплой
bash# Production деплой
npm run deploy

# Staging деплой  
npm run deploy:staging
📊 Статус проекта

✅ Cloudflare Worker API
✅ R2 Object Storage
✅ Custom Domain (api.mastermarat.com)
🔄 SendPulse Integration
📋 Content Upload
📋 Email Automation

🔗 Ссылки

API: https://api.mastermarat.com
Landing: https://draft-404950.sendpulse.website/
Docs: ./docs/

👥 Команда

Марат: Контент и экспертиза
Амира: Проект-менеджмент и контент
Вячеслав: Техническая реализация

🛠️ Разработка
Полезные команды
bash# Проверка API
curl https://api.mastermarat.com/

# Локальная разработка Worker
cd workers/api
npm run dev

# Проверка конфигурации
wrangler whoami
Структура проекта
workers/api/          # Cloudflare Worker API
├── src/worker.js     # Основной код Worker
├── wrangler.toml     # Конфигурация Cloudflare
└── package.json      # Зависимости Node.js
📈 Метрики

API Endpoint: https://api.mastermarat.com
R2 Storage: mastermarat-videos bucket
Thumbnails: Публичный доступ
Videos: Защищенный доступ по токенам