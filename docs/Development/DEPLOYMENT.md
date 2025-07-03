# Руководство по развертыванию MasterMarat API

> Пошаговая инструкция по деплою на Cloudflare Workers

## 📋 Содержание

- [Требования](#требования)
- [Подготовка окружения](#подготовка-окружения)
- [Настройка Cloudflare](#настройка-cloudflare)
- [Локальная разработка](#локальная-разработка)
- [Деплой на Dev](#деплой-на-dev)
- [Деплой на Production](#деплой-на-production)
- [Проверка деплоя](#проверка-деплоя)
- [Откат изменений](#откат-изменений)
- [Мониторинг](#мониторинг)
- [Troubleshooting](#troubleshooting)

---

## ✅ Требования

### Системные требования
- **OS**: Windows 10/11, macOS, Linux
- **Node.js**: 18.0.0 или выше
- **npm**: 8.0.0 или выше
- **Git**: 2.30.0 или выше

### Аккаунты и доступы
- [ ] Cloudflare аккаунт с добавленным доменом mastermarat.com
- [ ] GitHub доступ к репозиторию
- [ ] SendPulse API credentials (для webhooks)
- [ ] Доступ к R2 bucket `mastermarat-videos`

### CLI инструменты
```bash
# Установка Wrangler CLI
npm install -g wrangler@latest

# Проверка версии
wrangler --version
# Должно быть: ⛅️ wrangler 3.0.0 или выше

# Авторизация в Cloudflare
wrangler login

🛠️ Подготовка окружения
1. Клонирование репозитория
bash# Клонирование
git clone https://github.com/Shivalino/mastermarat-project.git
cd mastermarat-project/workers/api

# Проверка ветки
git branch
# Должно показать: * main
2. Установка зависимостей
bash# Установка пакетов
npm install

# Проверка установки
npm list
3. Настройка переменных окружения
Создайте файл .dev.vars для локальной разработки:
env# SendPulse credentials
SENDPULSE_ID=your_sendpulse_id
SENDPULSE_SECRET=your_sendpulse_secret

# Environment
ENVIRONMENT=development

# Webhook secret
WEBHOOK_SECRET=your_webhook_secret_key
4. Проверка конфигурации
Убедитесь, что wrangler.toml настроен правильно:
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

☁️ Настройка Cloudflare
1. Создание R2 bucket
bash# Создание bucket (если еще не создан)
wrangler r2 bucket create mastermarat-videos

# Проверка
wrangler r2 bucket list
2. Загрузка тестового контента
bash# Загрузка тестового видео
wrangler r2 object put mastermarat-videos/content/course1/test_video.mp4 \
  --file ./content/test_video.mp4

# Загрузка превью
wrangler r2 object put mastermarat-videos/content/course1/week1_lesson1.jpg \
  --file ./content/thumbnails/week1_lesson1.jpg

# Проверка загруженных файлов
wrangler r2 object list mastermarat-videos --prefix content/
3. Настройка DNS записей
В Cloudflare Dashboard:

Перейдите в DNS настройки домена
Добавьте/проверьте записи:

TypeNameContentProxyCNAMEapimastermarat-api.workers.dev✅CNAMEapi-devmastermarat-api-dev.workers.dev✅

💻 Локальная разработка
Запуск локального сервера
bash# Запуск с hot-reload
npm run dev

# Вывод:
# ⎔ Starting local server...
# [wrangler:info] Ready on http://127.0.0.1:8787
Тестирование локально
bash# Проверка API
curl http://localhost:8787/

# Тестовая страница
open http://localhost:8787/test

# Плеер с токеном
open "http://localhost:8787/player/course1/week1_lesson1?token=superuser_mastermarat_2025"
Отладка
bash# Просмотр логов в реальном времени
wrangler tail

# В браузере нажмите [d] для Chrome DevTools

🔵 Деплой на Dev
1. Проверка перед деплоем
bash# Линтинг кода
npm run lint

# Проверка типов (если используется TypeScript)
npm run typecheck

# Проверка конфигурации
wrangler whoami
2. Деплой на dev окружение
bash# Деплой
npm run deploy:dev

# Или напрямую
wrangler deploy --env dev

# Вывод:
# Total Upload: 50.23 KiB / gzip: 12.45 KiB
# Uploaded mastermarat-api-dev (1.25 sec)
# Published mastermarat-api-dev (0.35 sec)
#   https://api-dev.mastermarat.com
3. Установка секретов для dev
bash# SendPulse credentials
echo "your_sendpulse_id" | wrangler secret put SENDPULSE_ID --env dev
echo "your_sendpulse_secret" | wrangler secret put SENDPULSE_SECRET --env dev
echo "your_webhook_secret" | wrangler secret put WEBHOOK_SECRET --env dev
4. Проверка dev деплоя
bash# API работает
curl https://api-dev.mastermarat.com/

# Тестовая страница
open https://api-dev.mastermarat.com/test

# Проверка логов
wrangler tail --env dev

🟢 Деплой на Production
⚠️ Предварительные проверки
bash# 1. Убедитесь, что dev версия работает корректно
curl https://api-dev.mastermarat.com/

# 2. Проверьте текущую production версию
curl https://api.mastermarat.com/

# 3. Создайте бекап текущего кода
git tag -a "backup-$(date +%Y%m%d-%H%M%S)" -m "Backup before production deploy"
git push --tags
1. Деплой на production
bash# Запрос подтверждения
read -p "Deploy to PRODUCTION? (yes/no): " confirm
if [ "$confirm" = "yes" ]; then
    npm run deploy
fi

# Или с подтверждением
wrangler deploy --env production
2. Установка production секретов
bash# ВАЖНО: Используйте production credentials!
echo "PROD_sendpulse_id" | wrangler secret put SENDPULSE_ID --env production
echo "PROD_sendpulse_secret" | wrangler secret put SENDPULSE_SECRET --env production
echo "PROD_webhook_secret" | wrangler secret put WEBHOOK_SECRET --env production
3. Проверка production
bash# Основные проверки
curl https://api.mastermarat.com/
curl "https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg"

# Мониторинг логов (первые 5 минут)
wrangler tail --env production

✅ Проверка деплоя
Автоматические тесты
Создайте файл scripts/test-deployment.sh:
bash#!/bin/bash
API_URL=${1:-"https://api-dev.mastermarat.com"}

echo "Testing deployment at: $API_URL"

# Test 1: API Documentation
echo -n "1. API Documentation: "
curl -s "$API_URL/" | grep -q "MasterMarat API" && echo "✅ PASS" || echo "❌ FAIL"

# Test 2: Test page
echo -n "2. Test page: "
curl -s "$API_URL/test" | grep -q "Token Testing" && echo "✅ PASS" || echo "❌ FAIL"

# Test 3: Thumbnail (public)
echo -n "3. Public thumbnail: "
curl -s -o /dev/null -w "%{http_code}" "$API_URL/thumbnails/course1/week1_lesson1.jpg" | grep -q "200" && echo "✅ PASS" || echo "❌ FAIL"

# Test 4: Video requires token
echo -n "4. Video auth check: "
curl -s -o /dev/null -w "%{http_code}" "$API_URL/video/course1/test_video.mp4" | grep -q "401" && echo "✅ PASS" || echo "❌ FAIL"

# Test 5: Player with token
echo -n "5. Player with token: "
curl -s "$API_URL/player/course1/week1_lesson1?token=demo123" | grep -q "video" && echo "✅ PASS" || echo "❌ FAIL"
Запуск тестов
bash# Для dev
./scripts/test-deployment.sh https://api-dev.mastermarat.com

# Для production
./scripts/test-deployment.sh https://api.mastermarat.com

↩️ Откат изменений
Быстрый откат к предыдущей версии
bash# Просмотр истории деплоев
wrangler deployments list --env production

# Откат к предыдущей версии
wrangler rollback --env production

# Или к конкретной версии
wrangler rollback <deployment-id> --env production
Откат через Git
bash# Найти последний рабочий коммит
git log --oneline -10

# Откатиться к коммиту
git checkout <commit-hash>

# Задеплоить откаченную версию
wrangler deploy --env production

# Вернуться к актуальной ветке
git checkout main

📊 Мониторинг
Cloudflare Analytics

Откройте Cloudflare Dashboard
Workers & Pages → mastermarat-api
Проверьте метрики:

Requests per second
CPU time
Errors rate
Response times



Логирование в реальном времени
bash# Все логи
wrangler tail --env production

# Фильтр по ошибкам
wrangler tail --env production --search "error"

# Фильтр по IP
wrangler tail --env production --ip-address 1.2.3.4
Алерты (настройка)
В Cloudflare Dashboard:

Workers → ваш worker → Settings → Alerts
Настройте уведомления для:

Error rate > 1%
CPU time > 50ms (p99)
Requests > 10k/min




🔧 Troubleshooting
Частые проблемы и решения
1. Worker не отвечает (Error 522)
bash# Проверка статуса
wrangler tail --env production

# Проверка роутов
wrangler route list

# Передеплой
wrangler deploy --env production
2. R2 bucket недоступен
bash# Проверка binding
cat wrangler.toml | grep r2_buckets -A 3

# Проверка содержимого
wrangler r2 object list mastermarat-videos

# Проверка прав
wrangler r2 bucket info mastermarat-videos
3. Ошибки CORS
javascript// Проверьте utils/cors.js
export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};
4. Токены не работают
bash# Проверка секретов
wrangler secret list --env production

# Тест токена
curl "https://api.mastermarat.com/test"
Диагностические команды
bash# Полная диагностика
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
Контакты поддержки

Технические вопросы: Вячеслав (CTO)
Cloudflare Support: support.cloudflare.com
Срочные проблемы: Создать issue с тегом urgent


📝 Чеклист деплоя
Pre-deployment

 Код прошел code review
 Тесты пройдены локально
 Обновлена документация
 Создан git tag

Deployment

 Deploy на dev окружение
 Тесты на dev пройдены
 Deploy на production
 Production тесты пройдены

Post-deployment

 Мониторинг первые 30 минут
 Уведомление команды о деплое
 Обновление статуса в README
 Закрытие связанных issues


Документ обновлен: 01.07.2025
