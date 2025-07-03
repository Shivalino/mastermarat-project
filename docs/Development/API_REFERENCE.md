# API Reference - MasterMarat

> Полная документация по всем endpoints API v1.0

## 📋 Содержание

- [Базовая информация](#базовая-информация)
- [Аутентификация](#аутентификация)
- [Endpoints](#endpoints)
  - [GET / - API Documentation](#get---api-documentation)
  - [GET /test - Token Testing](#get-test---token-testing)
  - [GET /player/{courseId}/{lessonId} - Learning Player](#get-playercourseidlessonid---learning-player)
  - [GET /archive/{courseId} - Archive Player](#get-archivecourseid---archive-player)
  - [GET /thumbnails/{courseId}/{filename} - Thumbnails](#get-thumbnailscourseidfilename---thumbnails)
  - [GET /video/{courseId}/{filename} - Video Streaming](#get-videocourseidfilename---video-streaming)
  - [POST /webhook/purchase - Purchase Webhook](#post-webhookpurchase---purchase-webhook)
- [Коды ошибок](#коды-ошибок)
- [Rate Limiting](#rate-limiting)
- [Примеры использования](#примеры-использования)

---

## 🌐 Базовая информация

### Base URLs
- **Production**: `https://api.mastermarat.com`
- **Development**: `https://api-dev.mastermarat.com`
- **Local**: `http://localhost:8787`

### Общие заголовки

Все ответы включают следующие CORS заголовки:
```http
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
Форматы ответов
Успешные ответы (JSON):
json{
  "status": "success",
  "data": { ... }
}
Ошибки (JSON):
json{
  "status": "error",
  "message": "Error description",
  "details": { ... }
}

🔐 Аутентификация
Методы аутентификации
API использует токен-based аутентификацию через query параметры:
httpGET /video/course1/video.mp4?token=YOUR_TOKEN_HERE
Типы токенов
ТипФорматПримерПрава доступаTest TokenСтатичная строкаsuperuser_mastermarat_2025Определены в конфигеUser Token{emailHash}_{courseId}_{timestamp}aGVsbG8_course1_lqr5n8kНа основе подпискиDemo Tokendemo{number}demo123Ограниченный доступ
Проверка токена
bash# Проверить валидность токена
curl "https://api.mastermarat.com/test"

📚 Endpoints
GET / - API Documentation
Возвращает документацию API и список всех endpoints.
Request:
httpGET /
Response:
json{
  "status": "success",
  "message": "MasterMarat API для курса \"Механика здоровья\"",
  "version": "1.0.0",
  "worker_url": "https://api.mastermarat.com",
  "r2_connected": "Yes",
  "endpoints": {
    "GET /": "Документация API",
    "GET /test": "Тестовая страница с токенами",
    "GET /player/{courseId}/{lessonId}?token=XXX": "Плеер для обучения",
    "GET /archive/{courseId}?token=XXX": "Плеер-архив с навигацией",
    "GET /thumbnails/{courseId}/{filename}": "Публичные превью",
    "GET /video/{courseId}/{filename}?token=XXX": "Защищенные видео",
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
Интерактивная страница для тестирования токенов.
Request:
httpGET /test
Response:
httpContent-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML страница с формой тестирования токенов -->
</html>
Функции страницы:

Отображение всех тестовых токенов
Проверка прав доступа для каждого токена
Прямые ссылки на тестирование endpoints


GET /player/{courseId}/{lessonId} - Learning Player
HTML плеер для просмотра урока в режиме обучения (без навигации).
Request:
httpGET /player/{courseId}/{lessonId}?token={token}
Path Parameters:
ПараметрТипОписаниеПримерcourseIdstringID курсаcourse1lessonIdstringID урокаweek1_lesson1
Query Parameters:
ПараметрТипОбязательныйОписаниеtokenstringДаТокен доступа
Response (Success):
httpHTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML плеер с видео и дополнительным контентом -->
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
HTML страница со всеми уроками курса для просмотра в режиме архива.
Request:
httpGET /archive/{courseId}?token={token}
Path Parameters:
ПараметрТипОписаниеПримерcourseIdstringID курсаcourse1
Query Parameters:
ПараметрТипОбязательныйОписаниеtokenstringДаТокен с правами на архив
Response (Success):
httpHTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8

<!DOCTYPE html>
<html>
  <!-- HTML страница с сеткой всех уроков курса -->
</html>
Features:

Сетка превью всех уроков
Прямые ссылки на каждый урок
Информация о прогрессе (TODO)


GET /thumbnails/{courseId}/{filename} - Thumbnails
Публичный доступ к превью изображениям уроков.
Request:
httpGET /thumbnails/{courseId}/{filename}
Path Parameters:
ПараметрТипОписаниеПримерcourseIdstringID курсаcourse1filenamestringИмя файла или ID урокаweek1_lesson1.jpg
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
Особенности:

Не требует токен (публичный доступ)
Кеширование на 1 час
Поддержка обращения по lessonId


GET /video/{courseId}/{filename} - Video Streaming
Защищенный стриминг видео с поддержкой HTTP Range requests.
Request:
httpGET /video/{courseId}/{filename}?token={token}
Range: bytes=0-1048575
Path Parameters:
ПараметрТипОписаниеПримерcourseIdstringID курсаcourse1filenamestringИмя видео файлаweek1_lesson1.mp4
Query Parameters:
ПараметрТипОбязательныйОписаниеtokenstringДаТокен доступа
Headers:
HeaderОписаниеПримерRangeЗапрос части файлаbytes=0-1048575
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
Webhook endpoint для обработки покупок от SendPulse.
Request:
httpPOST /webhook/purchase
Content-Type: application/json
X-Webhook-Signature: {signature}

{
  "email": "user@example.com",
  "name": "Иван Иванов",
  "subscription_type": "standard",
  "payment_amount": 150.00,
  "currency": "USD",
  "order_id": "SP123456",
  "courses": ["course1"],
  "valid_until": "2025-10-01"
}
Headers:
HeaderОбязательныйОписаниеX-Webhook-SignatureДаHMAC подпись для валидации
Request Body:
ПолеТипОписаниеemailstringEmail покупателяnamestringИмя покупателяsubscription_typestringТип подписки (basic/standard/vip)payment_amountnumberСумма платежаcurrencystringВалюта (USD/EUR/UAH)order_idstringID заказа в SendPulsecoursesarrayСписок доступных курсовvalid_untilstringДата окончания подписки
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

❌ Коды ошибок
HTTP Status Codes
КодНазваниеОписание200OKУспешный запрос206Partial ContentЧастичный контент (видео streaming)400Bad RequestНеверные параметры запроса401UnauthorizedОтсутствует или неверный токен404Not FoundРесурс не найден405Method Not AllowedМетод не поддерживается500Internal Server ErrorВнутренняя ошибка сервера
Структура ошибок
json{
  "status": "error",
  "message": "Human-readable error message",
  "details": {
    "code": "ERROR_CODE",
    "field": "field_name",
    "value": "invalid_value"
  }
}
Коды ошибок приложения
КодОписаниеINVALID_TOKENНеверный формат токенаTOKEN_EXPIREDТокен истекNO_ACCESSНет доступа к ресурсуCOURSE_NOT_FOUNDКурс не найденLESSON_NOT_FOUNDУрок не найденVIDEO_NOT_FOUNDВидео файл не найденINVALID_SIGNATUREНеверная подпись webhook

⚡ Rate Limiting
Лимиты по умолчанию
EndpointЛимитОкно/video/*100 запросов1 минута/player/*50 запросов1 минута/webhook/*10 запросов1 минутаОстальные200 запросов1 минута
Headers ответа
httpX-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1625097600
Превышение лимита
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

💡 Примеры использования
JavaScript (Fetch API)
javascript// Получение документации API
const response = await fetch('https://api.mastermarat.com/');
const data = await response.json();
console.log(data);

// Загрузка плеера с токеном
const token = 'superuser_mastermarat_2025';
const playerUrl = `https://api.mastermarat.com/player/course1/week1_lesson1?token=${token}`;
window.location.href = playerUrl;

// Стриминг видео
const video = document.querySelector('video');
video.src = `https://api.mastermarat.com/video/course1/video.mp4?token=${token}`;
cURL
bash# Документация API
curl https://api.mastermarat.com/

# Плеер с токеном
curl "https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123"

# Скачивание видео (первые 10MB)
curl -H "Range: bytes=0-10485760" \
  "https://api.mastermarat.com/video/course1/video.mp4?token=demo123" \
  -o video_part.mp4

# Webhook тест
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

# Базовый URL
BASE_URL = "https://api.mastermarat.com"
TOKEN = "demo123"

# Получить документацию
response = requests.get(f"{BASE_URL}/")
print(response.json())

# Загрузить превью (публичное)
thumbnail = requests.get(f"{BASE_URL}/thumbnails/course1/week1_lesson1.jpg")
with open("thumbnail.jpg", "wb") as f:
    f.write(thumbnail.content)

# Стриминг видео по частям
headers = {"Range": "bytes=0-1048575"}
video_response = requests.get(
    f"{BASE_URL}/video/course1/video.mp4?token={TOKEN}",
    headers=headers,
    stream=True
)
print(f"Status: {video_response.status_code}")
print(f"Content-Range: {video_response.headers.get('Content-Range')}")
Интеграция в HTML
html<!DOCTYPE html>
<html>
<head>
  <title>MasterMarat Player Integration</title>
</head>
<body>
  <!-- Встраивание плеера через iframe -->
  <iframe 
    src="https://api.mastermarat.com/player/course1/week1_lesson1?token=demo123"
    width="100%" 
    height="600"
    frameborder="0"
    allowfullscreen>
  </iframe>

  <!-- Прямая загрузка видео -->
  <video controls width="100%">
    <source 
      src="https://api.mastermarat.com/video/course1/video.mp4?token=demo123" 
      type="video/mp4">
  </video>

  <!-- Превью изображение -->
  <img 
    src="https://api.mastermarat.com/thumbnails/course1/week1_lesson1.jpg" 
    alt="Lesson preview"
    width="320">
</body>
</html>

🔒 Безопасность
Рекомендации

Никогда не передавайте токены в URL на публичных страницах
Используйте HTTPS для всех запросов
Не кешируйте ответы с персональными данными
Валидируйте webhook подписи на стороне сервера

CORS политика
API поддерживает CORS для всех origin:
httpAccess-Control-Allow-Origin: *
Для production рекомендуется ограничить список разрешенных доменов.

📞 Поддержка

Технические вопросы: Создайте issue в GitHub
API ключи: Обратитесь к администратору
Срочные проблемы: support@mastermarat.com


API Version: 1.0.0 | Последнее обновление: 01.07.2025