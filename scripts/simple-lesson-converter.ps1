# simple-lesson-converter.ps1
# Простой конвертер уроков из текста в JSON

# Структура папок
$projectRoot = Split-Path -Parent $PSScriptRoot
$tempUploadPath = Join-Path $projectRoot "temp_upload"
$contentPath = Join-Path $tempUploadPath "content"
$templatesPath = Join-Path $tempUploadPath "templates"

# Поддерживаемые языки
$supportedLanguages = @("ru", "ua", "en")

# Создаем папки
function Initialize-Folders {
    @($tempUploadPath, $contentPath, $templatesPath) | ForEach-Object {
        if (-not (Test-Path $_)) {
            New-Item -ItemType Directory -Force -Path $_ | Out-Null
        }
    }
    
    # Создаем папки для каждого языка и курса
    foreach ($lang in $supportedLanguages) {
        # Демо папка
        $demoFolder = Join-Path $contentPath "$lang/demo"
        if (-not (Test-Path $demoFolder)) {
            New-Item -ItemType Directory -Force -Path $demoFolder | Out-Null
        }
        
        # Папки для курсов
        1..8 | ForEach-Object {
            $courseFolder = Join-Path $contentPath "$lang/course$_"
            if (-not (Test-Path $courseFolder)) {
                New-Item -ItemType Directory -Force -Path $courseFolder | Out-Null
            }
        }
    }
    
    Write-Host "✅ Структура папок создана для языков: $($supportedLanguages -join ', ')" -ForegroundColor Green
}

# Создание шаблона
function Create-Template {
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    if (-not (Test-Path $templateFile)) {
        @"
# Шаблон урока MasterMarat

## TITLE: Название урока

## VIDEO: lesson001.mp4

## THUMBNAIL: lesson001.jpg

## CONTENT_POINTS:
- Основной пункт 1
- Основной пункт 2
- Основной пункт 3

## IMPORTANT_NOTES:
- Важная заметка 1
- Важная заметка 2

## ADDITIONAL_INFO:
- Дополнительная информация 1
- Дополнительная информация 2
"@ | Out-File -FilePath $templateFile -Encoding UTF8
        Write-Host "✅ Шаблон создан: $templateFile" -ForegroundColor Green
    }
    
    # Создание шаблона для video[i].md
    $videoTemplateFile = Join-Path $templatesPath "video_template.md"
    if (-not (Test-Path $videoTemplateFile)) {
        @"
# Урок [LESSON_NUMBER]: [TITLE]

## 📹 Видео информация
- **Файл**: video[VIDEO_NUMBER].mp4
- **Превью**: video[VIDEO_NUMBER].jpg
- **Язык**: [LANGUAGE]
- **Курс**: [COURSE]
- **Продолжительность**: [DURATION]

## 🎯 Основные темы
- [TOPIC_1]
- [TOPIC_2]
- [TOPIC_3]

## 🔑 Ключевые моменты
- [KEY_POINT_1]
- [KEY_POINT_2]
- [KEY_POINT_3]

## 📝 Домашнее задание
- [HOMEWORK_1]
- [HOMEWORK_2]

## 🔗 Дополнительные материалы
- [ADDITIONAL_LINK_1]
- [ADDITIONAL_LINK_2]

## 💡 Советы и рекомендации
- [TIP_1]
- [TIP_2]

---
*Создано: [DATE]*
*Обновлено: [DATE]*
"@ | Out-File -FilePath $videoTemplateFile -Encoding UTF8
        Write-Host "✅ Шаблон video[i].md создан: $videoTemplateFile" -ForegroundColor Green
    }
}

# Парсинг файла урока
function Parse-Lesson {
    param([string]$FilePath)
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "❌ Файл не найден" -ForegroundColor Red
        return $null
    }
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    
    # Базовая структура
    $lesson = @{
        title = ""
        video_file = ""
        thumbnail_file = ""
        content_points = @()
        important_notes = @()
        additional_info = @()
    }
    
    # Извлекаем данные
    if ($content -match '## TITLE:\s*(.+)') {
        $lesson.title = $matches[1].Trim()
    }
    
    if ($content -match '## VIDEO:\s*(.+)') {
        $lesson.video_file = $matches[1].Trim()
    }
    
    if ($content -match '## THUMBNAIL:\s*(.+)') {
        $lesson.thumbnail_file = $matches[1].Trim()
    }
    
    # Извлекаем списки
    if ($content -match '## CONTENT_POINTS:\s*\n((?:- .+\n?)+)') {
        $lesson.content_points = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    if ($content -match '## IMPORTANT_NOTES:\s*\n((?:- .+\n?)+)') {
        $lesson.important_notes = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    if ($content -match '## ADDITIONAL_INFO:\s*\n((?:- .+\n?)+)') {
        $lesson.additional_info = $matches[1] -split '\n' | 
            Where-Object { $_ -match '^-\s*(.+)' } | 
            ForEach-Object { $matches[1].Trim() }
    }
    
    return $lesson
}

# Конвертация файла
function Convert-File {
    Write-Host "`n📄 КОНВЕРТАЦИЯ ФАЙЛА" -ForegroundColor Cyan
    
    # Показываем доступные файлы
    $files = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -File | 
             Where-Object { $_.Name -ne "lesson_template.txt" }
    
    if ($files.Count -eq 0) {
        Write-Host "Нет файлов для конвертации в $tempUploadPath" -ForegroundColor Yellow
        return
    }
    
    Write-Host "`nНайденные файлы:" -ForegroundColor Yellow
    for ($i = 0; $i -lt $files.Count; $i++) {
        Write-Host "$($i+1). $($files[$i].Name)" -ForegroundColor White
    }
    
    $choice = Read-Host "`nВыберите номер файла"
    $selectedFile = $files[[int]$choice - 1].FullName
    
    # Выбор курса
    Write-Host "`nВыберите курс (1-8):" -ForegroundColor Yellow
    $courseNum = Read-Host "Номер курса"
    $courseId = "course0$courseNum"
    
    # ID урока
    $lessonId = Read-Host "ID урока (например: lesson001)"
    
    # Парсим и конвертируем
    $lesson = Parse-Lesson -FilePath $selectedFile
    if ($lesson) {
        $outputPath = Join-Path $contentPath $courseId "$lessonId.json"
        $lesson | ConvertTo-Json -Depth 10 | Out-File $outputPath -Encoding UTF8
        
        Write-Host "`n✅ Создан: $outputPath" -ForegroundColor Green
        Write-Host "Название: $($lesson.title)" -ForegroundColor White
    }
}

# Создание нового урока
function Create-New {
    Write-Host "`n📝 СОЗДАНИЕ НОВОГО УРОКА" -ForegroundColor Cyan
    
    $courseNum = Read-Host "Номер курса (1-8)"
    $lessonNum = Read-Host "Номер урока (например: 001)"
    
    $fileName = "course0${courseNum}_lesson${lessonNum}.txt"
    $filePath = Join-Path $tempUploadPath $fileName
    
    # Копируем шаблон
    $templatePath = Join-Path $templatesPath "lesson_template.txt"
    Copy-Item $templatePath $filePath
    
    # Заменяем номера в шаблоне
    $content = Get-Content $filePath -Raw
    $content = $content -replace "lesson001", "lesson$lessonNum"
    $content | Out-File $filePath -Encoding UTF8
    
    Write-Host "✅ Создан: $filePath" -ForegroundColor Green
    Start-Process notepad.exe $filePath
}

# Создание нового видео урока с выбором языка и курса
function Create-Video-Lesson {
    Write-Host "`n🎬 СОЗДАНИЕ НОВОГО ВИДЕО УРОКА" -ForegroundColor Cyan
    
    # Выбор языка
    Write-Host "`nВыберите язык:" -ForegroundColor Yellow
    for ($i = 0; $i -lt $supportedLanguages.Count; $i++) {
        $langCode = $supportedLanguages[$i]
        $langName = switch ($langCode) {
            "ru" { "Русский" }
            "ua" { "Украинский" }
            "en" { "Английский" }
        }
        Write-Host "$($i+1). $langCode - $langName" -ForegroundColor White
    }
    
    $langChoice = Read-Host "Номер языка (1-$($supportedLanguages.Count))"
    $selectedLang = $supportedLanguages[[int]$langChoice - 1]
    
    # Выбор типа контента
    Write-Host "`nВыберите тип контента:" -ForegroundColor Yellow
    Write-Host "1. demo - Демо урок" -ForegroundColor White
    Write-Host "2. course - Основной курс" -ForegroundColor White
    
    $contentType = Read-Host "Тип контента (1-2)"
    
    if ($contentType -eq "1") {
        $contentFolder = "demo"
        $courseDisplay = "Демо"
    } else {
        $courseNum = Read-Host "Номер курса (1-8)"
        $contentFolder = "course$courseNum"
        $courseDisplay = "Курс $courseNum"
    }
    
    # Номер видео
    $videoNum = Read-Host "Номер видео (например: 1, 2, 3...)"
    
    # Название урока
    $lessonTitle = Read-Host "Название урока"
    
    # Создаем папку если не существует
    $targetFolder = Join-Path $contentPath "$selectedLang/$contentFolder"
    if (-not (Test-Path $targetFolder)) {
        New-Item -ItemType Directory -Force -Path $targetFolder | Out-Null
    }
    
    # Создаем файл video[i].md
    $videoFileName = "video$videoNum.md"
    $videoFilePath = Join-Path $targetFolder $videoFileName
    
    # Копируем шаблон и заменяем плейсхолдеры
    $templatePath = Join-Path $templatesPath "video_template.md"
    $content = Get-Content $templatePath -Raw -Encoding UTF8
    
    $currentDate = Get-Date -Format "yyyy-MM-dd HH:mm"
    $languageName = switch ($selectedLang) {
        "ru" { "Русский" }
        "ua" { "Украинский" }  
        "en" { "Английский" }
    }
    
    # Заменяем плейсхолдеры
    $content = $content -replace "\[LESSON_NUMBER\]", $videoNum
    $content = $content -replace "\[TITLE\]", $lessonTitle
    $content = $content -replace "\[VIDEO_NUMBER\]", $videoNum
    $content = $content -replace "\[LANGUAGE\]", "$languageName ($selectedLang)"
    $content = $content -replace "\[COURSE\]", $courseDisplay
    $content = $content -replace "\[DURATION\]", "00:00"
    $content = $content -replace "\[TOPIC_1\]", "Основная тема 1"
    $content = $content -replace "\[TOPIC_2\]", "Основная тема 2"
    $content = $content -replace "\[TOPIC_3\]", "Основная тема 3"
    $content = $content -replace "\[KEY_POINT_1\]", "Ключевой момент 1"
    $content = $content -replace "\[KEY_POINT_2\]", "Ключевой момент 2"
    $content = $content -replace "\[KEY_POINT_3\]", "Ключевой момент 3"
    $content = $content -replace "\[HOMEWORK_1\]", "Задание 1"
    $content = $content -replace "\[HOMEWORK_2\]", "Задание 2"
    $content = $content -replace "\[ADDITIONAL_LINK_1\]", "Дополнительный материал 1"
    $content = $content -replace "\[ADDITIONAL_LINK_2\]", "Дополнительный материал 2"
    $content = $content -replace "\[TIP_1\]", "Совет 1"
    $content = $content -replace "\[TIP_2\]", "Совет 2"
    $content = $content -replace "\[DATE\]", $currentDate
    
    $content | Out-File $videoFilePath -Encoding UTF8
    
    Write-Host "`n✅ Создан видео урок:" -ForegroundColor Green
    Write-Host "   Файл: $videoFilePath" -ForegroundColor White
    Write-Host "   Язык: $languageName ($selectedLang)" -ForegroundColor White
    Write-Host "   Контент: $courseDisplay" -ForegroundColor White
    Write-Host "   Название: $lessonTitle" -ForegroundColor White
    
    # Открываем файл в редакторе
    Start-Process notepad.exe $videoFilePath
}

# Главное меню
function Main-Menu {
    Initialize-Folders
    Create-Template
    
    while ($true) {
        Clear-Host
        Write-Host "🎓 КОНВЕРТЕР УРОКОВ" -ForegroundColor Cyan
        Write-Host "==================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Создать новый урок (текстовый)" -ForegroundColor Yellow
        Write-Host "2. Создать видео урок (многоязычный)" -ForegroundColor Green
        Write-Host "3. Конвертировать файл" -ForegroundColor Yellow
        Write-Host "4. Открыть папку" -ForegroundColor Yellow
        Write-Host "0. Выход" -ForegroundColor Red
        Write-Host ""
        Write-Host "Поддерживаемые языки: $($supportedLanguages -join ', ')" -ForegroundColor Cyan
        Write-Host ""
        
        $choice = Read-Host "Выбор"
        
        switch ($choice) {
            "1" { Create-New }
            "2" { Create-Video-Lesson }
            "3" { Convert-File }
            "4" { Start-Process explorer.exe $tempUploadPath }
            "0" { return }
        }
        
        if ($choice -ne "4" -and $choice -ne "0") {
            Read-Host "`nEnter для продолжения"
        }
    }
}

# Запуск
Main-Menu