# create-r2-multilang-structure.ps1
# Создает структуру папок для многоязычного контента в temp_upload

Write-Host "🌐 Создание многоязычной структуры для R2 Storage..." -ForegroundColor Cyan

# Базовая директория
$baseDir = "temp_upload"

# Языки и курсы
$languages = @('ru', 'ua', 'en')
$courses = 1..8

# Очистка существующей структуры (опционально)
$clearExisting = Read-Host "Очистить существующую структуру temp_upload? (y/n)"
if ($clearExisting -eq 'y') {
    if (Test-Path $baseDir) {
        Remove-Item -Path $baseDir -Recurse -Force
        Write-Host "🗑️  Старая структура удалена" -ForegroundColor Yellow
    }
}

# Создаем базовую директорию
New-Item -ItemType Directory -Path $baseDir -Force | Out-Null

# Счетчики для статистики
$dirsCreated = 0
$filesCreated = 0

# Создаем структуру для каждого языка
foreach ($lang in $languages) {
    Write-Host "`n📂 Создание структуры для языка: $lang" -ForegroundColor Green

    # CONTENT - основные видео
    Write-Host "  📹 Content..." -ForegroundColor White

    # Демо-курс
    $demoPath = "$baseDir/content/$lang/demo"
    New-Item -ItemType Directory -Path $demoPath -Force | Out-Null
    $dirsCreated++

    if ($lang -eq 'ru') {
        # Для русского создаем файлы-заглушки с описанием
        @(
            @{name="intro.mp4"; desc="# Приветственное видео (3-5 минут)`n- Знакомство с Маратом`n- О чем курс`n- Что получите"},
            @{name="lesson1.mp4"; desc="# Урок 1: Основы остеопатии (7-10 минут)`n- Как работает тело`n- Базовые принципы`n- Первое упражнение"},
            @{name="lesson2.mp4"; desc="# Урок 2: Простые техники (7-10 минут)`n- Техника для спины`n- Демонстрация`n- Домашнее задание"},
            @{name="lesson3.mp4"; desc="# Урок 3: Результаты (5-7 минут)`n- Отзывы учеников`n- Ваши возможности`n- Специальное предложение"}
        ) | ForEach-Object {
            $readmePath = "$demoPath/$($_.name).README.md"
            $_.desc | Out-File -FilePath $readmePath -Encoding UTF8
            $filesCreated++
        }
    } else {
        # Для других языков - просто placeholder
        New-Item -ItemType File -Path "$demoPath/.placeholder" -Force | Out-Null
        $filesCreated++
    }

    # Основные курсы
    foreach ($course in $courses) {
        $coursePath = "$baseDir/content/$lang/course$course"
        New-Item -ItemType Directory -Path $coursePath -Force | Out-Null
        $dirsCreated++

        if ($lang -eq 'ru' -and $course -eq 1) {
            # Для первого русского курса создаем описания уроков
            @(
                @{name="week1.mp4"; desc="# Неделя 1: Введение в здоровье`n- Философия здоровья`n- Основные принципы`n- План курса"},
                @{name="week2.mp4"; desc="# Неделя 2: Дыхание`n- Правильное дыхание`n- Упражнения`n- Ежедневная практика"},
                @{name="week3.mp4"; desc="# Неделя 3: Осанка`n- Анализ осанки`n- Коррекция`n- Упражнения для спины"},
                @{name="week4.mp4"; desc="# Неделя 4: Движение`n- Биомеханика`n- Правильная ходьба`n- Интеграция знаний"}
            ) | ForEach-Object {
                $readmePath = "$coursePath/$($_.name).README.md"
                $_.desc | Out-File -FilePath $readmePath -Encoding UTF8
                $filesCreated++
            }
        } else {
            # Для остальных - placeholder
            New-Item -ItemType File -Path "$coursePath/.placeholder" -Force | Out-Null
            $filesCreated++
        }
    }

    # THUMBNAILS - превью
    Write-Host "  🖼️  Thumbnails..." -ForegroundColor White

    # Демо превью
    $thumbDemoPath = "$baseDir/thumbnails/$lang/demo"
    New-Item -ItemType Directory -Path $thumbDemoPath -Force | Out-Null
    $dirsCreated++

    if ($lang -eq 'ru') {
        @("intro.jpg", "lesson1.jpg", "lesson2.jpg", "lesson3.jpg") | ForEach-Object {
            New-Item -ItemType File -Path "$thumbDemoPath/$_" -Force | Out-Null
            $filesCreated++
        }
    } else {
        New-Item -ItemType File -Path "$thumbDemoPath/.placeholder" -Force | Out-Null
        $filesCreated++
    }

    # Превью курсов
    foreach ($course in $courses) {
        $thumbCoursePath = "$baseDir/thumbnails/$lang/course$course"
        New-Item -ItemType Directory -Path $thumbCoursePath -Force | Out-Null
        $dirsCreated++

        if ($lang -eq 'ru' -and $course -eq 1) {
            @("week1.jpg", "week2.jpg", "week3.jpg", "week4.jpg") | ForEach-Object {
                New-Item -ItemType File -Path "$thumbCoursePath/$_" -Force | Out-Null
                $filesCreated++
            }
        } else {
            New-Item -ItemType File -Path "$thumbCoursePath/.placeholder" -Force | Out-Null
            $filesCreated++
        }
    }

    # MATERIALS - дополнительные материалы
    Write-Host "  📚 Materials..." -ForegroundColor White

    foreach ($course in $courses) {
        $materialsPath = "$baseDir/materials/$lang/course$course"
        New-Item -ItemType Directory -Path $materialsPath -Force | Out-Null
        $dirsCreated++

        if ($lang -eq 'ru' -and $course -eq 1) {
            @(
                @{name="workbook.pdf"; desc="# Рабочая тетрадь курса 1`nСодержит упражнения и задания"},
                @{name="checklist.pdf"; desc="# Чек-лист здоровых привычек`nЕжедневный трекер"},
                @{name="exercises.pdf"; desc="# Комплекс упражнений`nИллюстрированное руководство"}
            ) | ForEach-Object {
                $readmePath = "$materialsPath/$($_.name).README.md"
                $_.desc | Out-File -FilePath $readmePath -Encoding UTF8
                $filesCreated++
            }
        } else {
            New-Item -ItemType File -Path "$materialsPath/.placeholder" -Force | Out-Null
            $filesCreated++
        }
    }

    # PROMO - промо материалы
    Write-Host "  🎬 Promo..." -ForegroundColor White

    # Основная промо папка
    $promoPath = "$baseDir/promo/$lang"
    New-Item -ItemType Directory -Path $promoPath -Force | Out-Null
    $dirsCreated++

    # Подпапки промо
    $promoDirs = @("testimonials", "free-lessons")
    foreach ($dir in $promoDirs) {
        $subPath = "$promoPath/$dir"
        New-Item -ItemType Directory -Path $subPath -Force | Out-Null
        $dirsCreated++

        if ($lang -eq 'ru') {
            if ($dir -eq 'testimonials') {
                @("review1.mp4", "review2.mp4", "review3.mp4") | ForEach-Object {
                    $desc = "# Отзыв клиента`nВидео-отзыв о результатах"
                    "$desc" | Out-File -FilePath "$subPath/$_.README.md" -Encoding UTF8
                    $filesCreated++
                }
            } elseif ($dir -eq 'free-lessons') {
                @(
                    @{name="back-pain.mp4"; desc="# Избавление от боли в спине`nБесплатный мини-урок"},
                    @{name="neck-stretch.mp4"; desc="# Растяжка для шеи`nБыстрая техника"},
                    @{name="breathing.mp4"; desc="# Правильное дыхание`nБазовое упражнение"}
                ) | ForEach-Object {
                    $_.desc | Out-File -FilePath "$subPath/$($_.name).README.md" -Encoding UTF8
                    $filesCreated++
                }
            }
        } else {
            New-Item -ItemType File -Path "$subPath/.placeholder" -Force | Out-Null
            $filesCreated++
        }
    }
}

# Создаем README для структуры
$readmeContent = @"
# 📁 Структура R2 Storage - MasterMarat

Дата создания: $(Get-Date -Format "yyyy-MM-dd HH:mm")

## 📊 Статистика
- Языков: $($languages.Count)
- Курсов: $($courses.Count)
- Папок создано: $dirsCreated
- Файлов создано: $filesCreated

## 🌐 Языки
- **ru** - Русский (основной контент)
- **ua** - Украинский (заглушки)
- **en** - Английский (заглушки)

## 📹 Готовность контента

### Русский (ru)
- ✅ demo/ - Описания для 4 видео
- ✅ course1/ - Описания для 4 видео
- ⏳ course2-8/ - Заглушки

### Украинский (ua)
- ⏳ Все папки с заглушками

### Английский (en)
- ⏳ Все папки с заглушками

## 🚀 Следующие шаги

1. Загрузить реальные видео в папки:
   - temp_upload/content/ru/demo/
   - temp_upload/content/ru/course1/

2. Создать превью (thumbnails):
   - temp_upload/thumbnails/ru/demo/
   - temp_upload/thumbnails/ru/course1/

3. Загрузить в R2:
   ```powershell
   npm run upload
   ```

## 📝 Примечания

- Файлы .README.md - это описания того, что должно быть в видео
- Файлы .placeholder - заглушки для будущего контента
- При загрузке в R2 эти файлы игнорируются
"@

$readmeContent | Out-File -FilePath "$baseDir/README-STRUCTURE.md" -Encoding UTF8

# Создаем скрипт для быстрой проверки
$checkScript = @'
# check-structure.ps1
# Проверка структуры папок

Write-Host "📊 Проверка структуры R2..." -ForegroundColor Cyan

$stats = @{
    TotalDirs = (Get-ChildItem -Path "." -Recurse -Directory).Count
    TotalFiles = (Get-ChildItem -Path "." -Recurse -File).Count
    ReadmeFiles = (Get-ChildItem -Path "." -Recurse -Filter "*.README.md").Count
    Placeholders = (Get-ChildItem -Path "." -Recurse -Filter ".placeholder").Count
    RuContent = (Get-ChildItem -Path "content/ru" -Recurse -File | Where-Object {$_.Name -ne ".placeholder"}).Count
}

Write-Host "`nСтатистика:" -ForegroundColor Green
$stats.GetEnumerator() | ForEach-Object {
    Write-Host "  $($_.Key): $($_.Value)" -ForegroundColor White
}

Write-Host "`nГотовность русского контента:" -ForegroundColor Yellow
Get-ChildItem -Path "content/ru" -Directory | ForEach-Object {
    $files = (Get-ChildItem -Path $_.FullName -File | Where-Object {$_.Name -ne ".placeholder"}).Count
    $status = if ($files -gt 0) { "✅" } else { "⏳" }
    Write-Host "  $status $($_.Name): $files файлов" -ForegroundColor White
}
'@

$checkScript | Out-File -FilePath "$baseDir/check-structure.ps1" -Encoding UTF8

Write-Host "`n✅ Структура создана успешно!" -ForegroundColor Green
Write-Host "📁 Расположение: $baseDir" -ForegroundColor White
Write-Host "📊 Статистика:" -ForegroundColor Yellow
Write-Host "   - Папок создано: $dirsCreated" -ForegroundColor White
Write-Host "   - Файлов создано: $filesCreated" -ForegroundColor White

Write-Host "`n💡 Следующие шаги:" -ForegroundColor Cyan
Write-Host "1. Загрузите видео в:" -ForegroundColor White
Write-Host "   - temp_upload/content/ru/demo/*.mp4" -ForegroundColor Gray
Write-Host "   - temp_upload/content/ru/course1/*.mp4" -ForegroundColor Gray
Write-Host "2. Загрузите превью в:" -ForegroundColor White
Write-Host "   - temp_upload/thumbnails/ru/demo/*.jpg" -ForegroundColor Gray
Write-Host "   - temp_upload/thumbnails/ru/course1/*.jpg" -ForegroundColor Gray
Write-Host "3. Запустите загрузку в R2:" -ForegroundColor White
Write-Host "   npm run upload" -ForegroundColor Gray

Write-Host "`n📝 Для проверки структуры запустите:" -ForegroundColor Yellow
Write-Host "   cd temp_upload && .\check-structure.ps1" -ForegroundColor Gray
