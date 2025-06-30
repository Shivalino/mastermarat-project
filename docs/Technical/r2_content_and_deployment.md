# Инструкции по структуре контента R2 и деплою

После обновления логики воркера для поддержки нескольких курсов и уроков, необходимо выполнить следующие шаги:

## 1. Загрузка видео и миниатюр в R2

Видео и миниатюры теперь должны быть загружены в R2 бакет `mastermarat-videos` в соответствии с новой структурой папок:

- **Для видео:** `videos/{course_id}/{video_file_name}`
- **Для миниатюр:** `thumbnails/{course_id}/{thumbnail_file_name}`

**Примеры:**
- `videos/course1/course1_week1_lesson1.mp4`
- `thumbnails/course1/course1_week1_lesson1.jpg`

Убедитесь, что `course_id` соответствует идентификаторам курсов, определенным в `COURSE_DATA` в `src/worker.js`.

## 2. Развертывание воркера в dev-окружение

После загрузки файлов и любых дальнейших изменений в коде воркера, разверните его в dev-окружение, используя следующую команду в терминале (из директории `mastermarat-project/workers/api`):

```bash
cd C:/Projects/mastermaratcom/mastermarat-project/workers/api
npm run deploy --env dev
```

## 3. Тестирование новых ссылок

После успешного развертывания вы можете протестировать доступ к видео и плееру, используя новые форматы URL:

- **Плеер:** `https://api-dev.mastermarat.com/player/{course_id}/{lesson_id}?token=demo123`
  *Пример:* `https://api-dev.mastermarat.com/player/course1/week1_lesson1?token=demo123`

- **Миниатюра:** `https://api-dev.mastermarat.com/thumbnails/{course_id}/{thumbnail_file_name}`
  *Пример:* `https://api-dev.mastermarat.com/thumbnails/course1/week1_lesson1.jpg`

- **Видео:** `https://api-dev.mastermarat.com/video/{course_id}/{video_file_name}?token=demo123`
  *Пример:* `https://api-dev.mastermarat.com/video/course1/week1_lesson1.mp4?token=demo123`

**Примечание:** `demo123` - это временный токен для тестирования. В реальной системе токены будут генерироваться после покупки курса.