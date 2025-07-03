# simple-lesson-converter.ps1
# Простой конвертер уроков из текста в JSON

# Структура папок
$projectRoot = Split-Path -Parent $PSScriptRoot
$tempUploadPath = Join-Path $projectRoot "temp_upload"
$contentPath = Join-Path $tempUploadPath "content"
$templatesPath = Join-Path $tempUploadPath "templates"

# Создаем папки
function Initialize-Folders {
    @($tempUploadPath, $contentPath, $templatesPath) | ForEach-Object {
        if (-not (Test-Path $_)) {
            New-Item -ItemType Directory -Force -Path $_ | Out-Null
        }
    }
    
    # Создаем папки для курсов
    1..8 | ForEach-Object {
        $courseFolder = Join-Path $contentPath "course0$_"
        if (-not (Test-Path $courseFolder)) {
            New-Item -ItemType Directory -Force -Path $courseFolder | Out-Null
        }
    }
    
    Write-Host "✅ Структура папок создана" -ForegroundColor Green
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

# Главное меню
function Main-Menu {
    Initialize-Folders
    Create-Template
    
    while ($true) {
        Clear-Host
        Write-Host "🎓 КОНВЕРТЕР УРОКОВ" -ForegroundColor Cyan
        Write-Host "==================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. Создать новый урок" -ForegroundColor Yellow
        Write-Host "2. Конвертировать файл" -ForegroundColor Yellow
        Write-Host "3. Открыть папку" -ForegroundColor Yellow
        Write-Host "0. Выход" -ForegroundColor Red
        Write-Host ""
        
        $choice = Read-Host "Выбор"
        
        switch ($choice) {
            "1" { Create-New }
            "2" { Convert-File }
            "3" { Start-Process explorer.exe $tempUploadPath }
            "0" { return }
        }
        
        if ($choice -ne "3" -and $choice -ne "0") {
            Read-Host "`nEnter для продолжения"
        }
    }
}

# Запуск
Main-Menu