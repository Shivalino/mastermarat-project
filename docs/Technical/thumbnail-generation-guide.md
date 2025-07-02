# Руководство по генерации Thumbnail для MasterMarat

## 📋 Общие требования
- **Размер**: 1280x720 (16:9)
- **Формат**: JPEG
- **Качество**: -q:v 2 (высокое)
- **Целевой размер**: 100-300 KB

## 🎬 Шаблоны команд

### 1️⃣ Для ВЕРТИКАЛЬНЫХ видео (9:16)
Создаем горизонтальные thumbnail с размытым фоном:

```bash
# Вариант на 5 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:05 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_5s.jpg

# Вариант на 10 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:10 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_10s.jpg

# Вариант на 15 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:15 -vframes 1 \
  -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" \
  -q:v 2 OUTPUT_15s.jpg
```

### 2️⃣ Для ГОРИЗОНТАЛЬНЫХ видео (16:9)
Простое масштабирование:

```bash
# Вариант на 5 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:05 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_5s.jpg

# Вариант на 10 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:10 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_10s.jpg

# Вариант на 15 секунде
ffmpeg -i INPUT_VIDEO.mp4 -ss 00:00:15 -vframes 1 \
  -vf "scale=1280:720" \
  -q:v 2 OUTPUT_15s.jpg
```

## 📝 Примеры для конкретных файлов

### week1_lesson1.mp4 (вертикальное видео)
```bash
# Генерируем 3 варианта
ffmpeg -i week1_lesson1.mp4 -ss 00:00:05 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v1.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:10 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v2.jpg

ffmpeg -i week1_lesson1.mp4 -ss 00:00:15 -vframes 1 -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" -q:v 2 week1_lesson1_v3.jpg
```

### week1_lesson2.mp4 (горизонтальное видео)
```bash
# Генерируем 3 варианта
ffmpeg -i week1_lesson2.mp4 -ss 00:00:05 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v1.jpg

ffmpeg -i week1_lesson2.mp4 -ss 00:00:10 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v2.jpg

ffmpeg -i week1_lesson2.mp4 -ss 00:00:15 -vframes 1 -vf "scale=1280:720" -q:v 2 week1_lesson2_v3.jpg
```

## 🔧 Дополнительные параметры

### Изменение степени размытия
```bash
# Меньше размытия (10:10)
-vf "split[a][b];[a]scale=1280:720,boxblur=10:10[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2"

# Больше размытия (30:30)
-vf "split[a][b];[a]scale=1280:720,boxblur=30:30[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2"
```

### Добавление резкости
```bash
# С фильтром резкости для четкости
-vf "scale=1280:720,unsharp=5:5:1.0:5:5:0.0"
```

### Изменение качества
```bash
# Высокое качество (больше размер)
-q:v 1

# Среднее качество (меньше размер)
-q:v 5
```

## ✅ Критерии выбора лучшего thumbnail
1. **Марат хорошо виден** - лицо не обрезано, выражение приятное
2. **Нет размытия от движения** - кадр четкий
3. **Хорошая композиция** - сбалансированное изображение
4. **Информативность** - понятно, что это обучающее видео

## 🚀 Быстрый старт (PowerShell)
```powershell
# Создаем папку для thumbnail
New-Item -ItemType Directory -Force -Path "thumbnails"

# Генерируем все варианты одной командой
@(5,10,15) | ForEach-Object {
    # Для вертикального видео
    ffmpeg -i week1_lesson1.mp4 -ss "00:00:$_" -vframes 1 `
      -vf "split[a][b];[a]scale=1280:720,boxblur=20:20[bg];[b]scale=405:720[fg];[bg][fg]overlay=(W-w)/2:(H-h)/2" `
      -q:v 2 "thumbnails/week1_lesson1_$($_)s.jpg"
    
    # Для горизонтального видео
    ffmpeg -i week1_lesson2.mp4 -ss "00:00:$_" -vframes 1 `
      -vf "scale=1280:720" `
      -q:v 2 "thumbnails/week1_lesson2_$($_)s.jpg"
}
```

## 📁 Итоговая структура файлов
```
thumbnails/
├── week1_lesson1.jpg    (выбранный лучший вариант)
├── week1_lesson1_5s.jpg
├── week1_lesson1_10s.jpg
├── week1_lesson1_15s.jpg
├── week1_lesson2.jpg    (выбранный лучший вариант)
├── week1_lesson2_5s.jpg
├── week1_lesson2_10s.jpg
└── week1_lesson2_15s.jpg
```

После генерации выберите лучшие варианты и переименуйте их в `week1_lesson1.jpg` и `week1_lesson2.jpg` для загрузки в R2.