# 🗂️ Структура R2 Storage - MasterMarat

## 📋 Общая структура

```
mastermarat-videos/
├── 🌐 content/
│   ├── ru/                     # Русский контент (ОСНОВНОЙ)
│   │   ├── demo/               # Демо-курс (открытый доступ)
│   │   │   ├── intro.mp4       # Приветственное видео
│   │   │   ├── lesson1.mp4     # Урок 1: Основы остеопатии
│   │   │   ├── lesson2.mp4     # Урок 2: Простые техники
│   │   │   └── lesson3.mp4     # Урок 3: Результаты
│   │   │
│   │   ├── course1/            # Курс 1: Основы здоровья
│   │   │   ├── week1.mp4       # Неделя 1: Введение
│   │   │   ├── week2.mp4       # Неделя 2: Дыхание
│   │   │   ├── week3.mp4       # Неделя 3: Осанка
│   │   │   └── week4.mp4       # Неделя 4: Движение
│   │   │
│   │   ├── course2/            # Курс 2: Работа с позвоночником
│   │   │   ├── week1.mp4
│   │   │   ├── week2.mp4
│   │   │   ├── week3.mp4
│   │   │   └── week4.mp4
│   │   │
│   │   ├── course3/            # Курс 3: Шея и плечи
│   │   ├── course4/            # Курс 4: Суставы
│   │   ├── course5/            # Курс 5: Внутренние органы
│   │   ├── course6/            # Курс 6: Психосоматика
│   │   ├── course7/            # Курс 7: Продвинутые техники
│   │   └── course8/            # Курс 8: Интеграция
│   │
│   ├── ua/                     # Украинский (ЗАГЛУШКИ)
│   │   ├── demo/               # Демо-курс
│   │   │   └── .placeholder    # Пустой файл
│   │   ├── course1/
│   │   │   └── .placeholder
│   │   └── ...                 # Остальные курсы
│   │
│   └── en/                     # Английский (ЗАГЛУШКИ)
│       ├── demo/
│       │   └── .placeholder
│       ├── course1/
│       │   └── .placeholder
│       └── ...
│
├── 🖼️ thumbnails/               # Превью для всех языков
│   ├── ru/
│   │   ├── demo/
│   │   │   ├── intro.jpg
│   │   │   ├── lesson1.jpg
│   │   │   ├── lesson2.jpg
│   │   │   └── lesson3.jpg
│   │   ├── course1/
│   │   │   ├── week1.jpg
│   │   │   ├── week2.jpg
│   │   │   ├── week3.jpg
│   │   │   └── week4.jpg
│   │   └── ...
│   ├── ua/
│   │   └── .placeholder
│   └── en/
│       └── .placeholder
│
├── 📚 materials/                # Дополнительные материалы
│   ├── ru/
│   │   ├── course1/
│   │   │   ├── workbook.pdf    # Рабочая тетрадь
│   │   │   ├── checklist.pdf   # Чек-листы
│   │   │   └── exercises.pdf   # Упражнения
│   │   └── ...
│   ├── ua/
│   │   └── .placeholder
│   └── en/
│       └── .placeholder
│
└── 🎬 promo/                    # Промо-материалы (публичные)
    ├── ru/
    │   ├── trailer.mp4          # Трейлер курса
    │   ├── testimonials/        # Отзывы
    │   │   ├── review1.mp4
    │   │   ├── review2.mp4
    │   │   └── review3.mp4
    │   └── free-lessons/        # Бесплатные уроки для лендинга
    │       ├── back-pain.mp4
    │       ├── neck-stretch.mp4
    │       └── breathing.mp4
    ├── ua/
    │   └── .placeholder
    └── en/
        └── .placeholder
```

## 🔐 Правила доступа

### Публичный доступ (без токена):
```javascript
// Демо-контент
/content/{lang}/demo/*
/thumbnails/{lang}/demo/*

// Промо-материалы
/promo/{lang}/*
/thumbnails/{lang}/course*/week*.jpg  // Превью для лендинга
```

### Защищенный доступ (требуется токен):
```javascript
// Основные курсы
/content/{lang}/course{1-8}/*
/materials/{lang}/course{1-8}/*

// Специальные правила для VIP
/content/{lang}/course{7-8}/*  // Только VIP тариф
```

## 🌍 URL структура в API

```javascript
// Примеры URL для видео:
GET /video/ru/demo/intro.mp4          // Демо (публичный)
GET /video/ru/course1/week1.mp4?token=XXX  // Защищенный

// Примеры URL для превью:
GET /thumbnails/ru/course1/week1.jpg   // Публичный
GET /thumbnails/ru/demo/lesson1.jpg    // Публичный

// Примеры URL для материалов:
GET /materials/ru/course1/workbook.pdf?token=XXX  // Защищенный
```

## 📝 Демо-курс (содержание)

### Русская версия (готова к загрузке):
1. **intro.mp4** (3-5 мин)
   - Приветствие от Марата
   - О чем курс
   - Что получите

2. **lesson1.mp4** (7-10 мин)
   - Основы остеопатии
   - Как работает тело
   - Первое упражнение

3. **lesson2.mp4** (7-10 мин)
   - Простая техника для спины
   - Демонстрация
   - Домашнее задание

4. **lesson3.mp4** (5-7 мин)
   - Результаты учеников
   - Призыв к действию
   - Специальное предложение

## 🚀 План реализации

### Фаза 1: MVP (сейчас)
```bash
# Создаем структуру в R2
content/
  ru/
    demo/          # Загружаем 4 видео
    course1/       # Загружаем 4 видео
    course2-8/     # Пустые папки
  ua/              # Только .placeholder
  en/              # Только .placeholder

thumbnails/
  ru/
    demo/          # 4 превью
    course1/       # 4 превью
```

### Фаза 2: Расширение (через 3 месяца)
- Добавляем course2-4 на русском
- Начинаем переводы демо-курса на UA/EN

### Фаза 3: Полная локализация (через 6 месяцев)
- Все 8 курсов на русском
- Демо + Course1 на украинском
- Демо на английском

## 🔧 PowerShell скрипт для создания структуры

```powershell
# create-r2-structure.ps1
$languages = @('ru', 'ua', 'en')
$courses = 1..8

foreach ($lang in $languages) {
    # Content
    New-Item -ItemType Directory -Path "r2-upload/content/$lang/demo" -Force
    foreach ($course in $courses) {
        New-Item -ItemType Directory -Path "r2-upload/content/$lang/course$course" -Force
    }
    
    # Thumbnails
    New-Item -ItemType Directory -Path "r2-upload/thumbnails/$lang/demo" -Force
    foreach ($course in $courses) {
        New-Item -ItemType Directory -Path "r2-upload/thumbnails/$lang/course$course" -Force
    }
    
    # Materials
    foreach ($course in $courses) {
        New-Item -ItemType Directory -Path "r2-upload/materials/$lang/course$course" -Force
    }
    
    # Promo
    New-Item -ItemType Directory -Path "r2-upload/promo/$lang/testimonials" -Force
    New-Item -ItemType Directory -Path "r2-upload/promo/$lang/free-lessons" -Force
    
    # Placeholders for non-Russian
    if ($lang -ne 'ru') {
        Get-ChildItem -Path "r2-upload/*/$lang" -Recurse -Directory | ForEach-Object {
            New-Item -ItemType File -Path "$($_.FullName)/.placeholder" -Force
        }
    }
}

Write-Host "✅ Структура создана в папке r2-upload/"
```

## 💡 Демо-токены для тестирования

```javascript
// В config/constants.js
export const DEMO_TOKENS = {
  ru: 'demo-ru-2025',
  ua: 'demo-ua-2025',
  en: 'demo-en-2025'
};

// Проверка в auth.js
if (token.startsWith('demo-')) {
  const lang = token.split('-')[1];
  return {
    valid: true,
    demo: true,
    language: lang,
    courses: ['demo']
  };
}
```