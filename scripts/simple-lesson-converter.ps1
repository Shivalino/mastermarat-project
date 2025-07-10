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

# Проверка наличия необходимых файлов для урока
function Check-Content-Files {
    param(
        [string]$Language,
        [string]$ContentType,
        [string]$VideoFileName
    )
    
    $results = @{
        video = $false
        thumbnail = $false
        description = $false
        videoPath = ""
        thumbnailPath = ""
        descriptionPath = ""
    }
    
    $basePath = Join-Path $contentPath "$Language/$ContentType"
    $thumbnailBasePath = Join-Path $tempUploadPath "thumbnails/$Language/$ContentType"
    
    # Проверяем видео файл
    $videoPath = Join-Path $basePath "$VideoFileName.mp4"
    if (Test-Path $videoPath) {
        $results.video = $true
        $results.videoPath = $videoPath
    }
    
    # Проверяем thumbnail
    $thumbnailPath = Join-Path $thumbnailBasePath "$VideoFileName.jpg"
    if (Test-Path $thumbnailPath) {
        $results.thumbnail = $true
        $results.thumbnailPath = $thumbnailPath
    }
    
    # Проверяем описание (.md файл)
    $descriptionPath = Join-Path $basePath "$VideoFileName.md"
    if (Test-Path $descriptionPath) {
        $results.description = $true
        $results.descriptionPath = $descriptionPath
    }
    
    return $results
}

# Аплоад контента в R2
function Upload-Content-To-R2 {
    Write-Host "`n☁️  АПЛОАД КОНТЕНТА В R2" -ForegroundColor Cyan
    
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
    
    $targetFolder = Join-Path $contentPath "$selectedLang/$contentFolder"
    
    # Найти все видео файлы в папке
    if (-not (Test-Path $targetFolder)) {
        Write-Host "❌ Папка не найдена: $targetFolder" -ForegroundColor Red
        return
    }
    
    $videoFiles = Get-ChildItem -Path $targetFolder -Filter "*.mp4" -File
    $mdFiles = Get-ChildItem -Path $targetFolder -Filter "*.md" -File
    
    if ($videoFiles.Count -eq 0 -and $mdFiles.Count -eq 0) {
        Write-Host "❌ В папке нет видео файлов или описаний (.md)" -ForegroundColor Red
        return
    }
    
    Write-Host "`n📋 ПРОВЕРКА КОНТЕНТА" -ForegroundColor Cyan
    Write-Host "Папка: $targetFolder" -ForegroundColor White
    Write-Host "Язык: $selectedLang" -ForegroundColor White
    Write-Host "Тип: $courseDisplay" -ForegroundColor White
    
    $allFiles = @()
    $readyToUpload = 0
    
    # Проверяем каждый md файл
    foreach ($mdFile in $mdFiles) {
        $baseName = [System.IO.Path]::GetFileNameWithoutExtension($mdFile.Name)
        if ($baseName -match '^video\d+$') {
            $results = Check-Content-Files -Language $selectedLang -ContentType $contentFolder -VideoFileName $baseName
            
            Write-Host "`n📄 $baseName" -ForegroundColor Yellow
            Write-Host "   Видео: $(if ($results.video) { '✅' } else { '❌' }) $($results.videoPath)" -ForegroundColor $(if ($results.video) { 'Green' } else { 'Red' })
            Write-Host "   Превью: $(if ($results.thumbnail) { '✅' } else { '❌' }) $($results.thumbnailPath)" -ForegroundColor $(if ($results.thumbnail) { 'Green' } else { 'Red' })
            Write-Host "   Описание: $(if ($results.description) { '✅' } else { '❌' }) $($results.descriptionPath)" -ForegroundColor $(if ($results.description) { 'Green' } else { 'Red' })
            
            $allFiles += @{
                baseName = $baseName
                results = $results
                isReady = ($results.video -and $results.thumbnail -and $results.description)
            }
            
            if ($results.video -and $results.thumbnail -and $results.description) {
                $readyToUpload++
            }
        }
    }
    
    if ($allFiles.Count -eq 0) {
        Write-Host "`n❌ Не найдено файлов для аплоада" -ForegroundColor Red
        return
    }
    
    Write-Host "`n📊 СТАТИСТИКА:" -ForegroundColor Cyan
    Write-Host "   Всего уроков: $($allFiles.Count)" -ForegroundColor White
    Write-Host "   Готовы к аплоаду: $readyToUpload" -ForegroundColor $(if ($readyToUpload -gt 0) { 'Green' } else { 'Red' })
    Write-Host "   Не готовы: $($allFiles.Count - $readyToUpload)" -ForegroundColor $(if (($allFiles.Count - $readyToUpload) -gt 0) { 'Yellow' } else { 'Green' })
    
    if ($readyToUpload -eq 0) {
        Write-Host "`n❌ Нет готовых к аплоаду файлов" -ForegroundColor Red
        return
    }
    
    # Выбор режима
    Write-Host "`nВыберите действие:" -ForegroundColor Yellow
    Write-Host "1. Сухой прогон (показать что будет загружено)" -ForegroundColor White
    Write-Host "2. Загрузить в DEV среду" -ForegroundColor White
    Write-Host "3. Загрузить в PROD среду" -ForegroundColor White
    Write-Host "0. Отмена" -ForegroundColor Red
    
    $uploadChoice = Read-Host "Ваш выбор"
    
    if ($uploadChoice -eq "0") {
        Write-Host "Операция отменена" -ForegroundColor Yellow
        return
    }
    
    $isDryRun = ($uploadChoice -eq "1")
    $environment = if ($uploadChoice -eq "3") { "prod" } else { "dev" }
    
    Write-Host "`n🚀 НАЧИНАЕМ АПЛОАД" -ForegroundColor Cyan
    Write-Host "Режим: $(if ($isDryRun) { 'DRY RUN' } else { $environment.ToUpper() })" -ForegroundColor $(if ($isDryRun) { 'Yellow' } else { 'Green' })
    
    $uploadedCount = 0
    
    foreach ($fileSet in $allFiles) {
        if ($fileSet.isReady) {
            Write-Host "`n📤 Загружаем: $($fileSet.baseName)" -ForegroundColor Green
            
            # Подготавливаем пути в R2
            $r2VideoPath = "content/$selectedLang/$contentFolder/$($fileSet.baseName).mp4"
            $r2ThumbnailPath = "thumbnails/$selectedLang/$contentFolder/$($fileSet.baseName).jpg"
            $r2DescriptionPath = "content/$selectedLang/$contentFolder/$($fileSet.baseName).md"
            
            if ($isDryRun) {
                Write-Host "   [DRY RUN] Видео: $($fileSet.results.videoPath) → $r2VideoPath" -ForegroundColor Gray
                Write-Host "   [DRY RUN] Превью: $($fileSet.results.thumbnailPath) → $r2ThumbnailPath" -ForegroundColor Gray
                Write-Host "   [DRY RUN] Описание: $($fileSet.results.descriptionPath) → $r2DescriptionPath" -ForegroundColor Gray
                $uploadedCount++
            } else {
                try {
                    # Вызываем Node.js скрипт для аплоада
                    $nodeCommand = "node scripts/upload_content_to_r2.js --env $environment --course $contentFolder --language $selectedLang --verbose"
                    
                    Write-Host "   Выполняем: $nodeCommand" -ForegroundColor Gray
                    $result = Start-Process -FilePath "node" -ArgumentList "scripts/upload_content_to_r2.js", "--env", $environment, "--course", $contentFolder, "--language", $selectedLang, "--verbose" -WorkingDirectory $projectRoot -Wait -PassThru -NoNewWindow
                    
                    if ($result.ExitCode -eq 0) {
                        Write-Host "   ✅ Успешно загружено: $($fileSet.baseName)" -ForegroundColor Green
                        $uploadedCount++
                    } else {
                        Write-Host "   ❌ Ошибка загрузки: $($fileSet.baseName)" -ForegroundColor Red
                    }
                } catch {
                    Write-Host "   ❌ Ошибка: $($_.Exception.Message)" -ForegroundColor Red
                }
            }
        }
    }
    
    Write-Host "`n✅ АПЛОАД ЗАВЕРШЕН" -ForegroundColor Green
    Write-Host "   Обработано: $uploadedCount из $readyToUpload готовых файлов" -ForegroundColor White
    
    if (-not $isDryRun -and $uploadedCount -gt 0) {
        Write-Host "`n🔗 Проверить загруженные файлы:" -ForegroundColor Cyan
        Write-Host "   https://api.mastermarat.com/video/$selectedLang/$contentFolder/" -ForegroundColor Blue
    }
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
        Write-Host "3. Аплоад контента в R2" -ForegroundColor Magenta
        Write-Host "4. Конвертировать файл" -ForegroundColor Yellow
        Write-Host "5. Открыть папку" -ForegroundColor Yellow
        Write-Host "0. Выход" -ForegroundColor Red
        Write-Host ""
        Write-Host "Поддерживаемые языки: $($supportedLanguages -join ', ')" -ForegroundColor Cyan
        Write-Host ""
        
        $choice = Read-Host "Выбор"
        
        switch ($choice) {
            "1" { Create-New }
            "2" { Create-Video-Lesson }
            "3" { Upload-Content-To-R2 }
            "4" { Convert-File }
            "5" { Start-Process explorer.exe $tempUploadPath }
            "0" { return }
        }
        
        if ($choice -ne "5" -and $choice -ne "0") {
            Read-Host "`nEnter для продолжения"
        }
    }
}

# Запуск
Main-Menu