# lesson-converter.ps1
# Конвертер уроков из простого текстового формата в JSON

param(
    [string]$Action = "menu",
    [string]$InputFile = "",
    [string]$CourseId = "",
    [string]$LessonId = ""
)

# Структура папок
$projectRoot = Split-Path -Parent $PSScriptRoot
$tempUploadPath = Join-Path $projectRoot "temp_upload"
$contentPath = Join-Path $tempUploadPath "content"
$templatesPath = Join-Path $tempUploadPath "templates"

# Создаем структуру папок если не существует
function Initialize-Folders {
    $folders = @(
        $tempUploadPath,
        $contentPath,
        $templatesPath,
        (Join-Path $contentPath "course01"),
        (Join-Path $contentPath "course02"),
        (Join-Path $contentPath "course03"),
        (Join-Path $contentPath "course04"),
        (Join-Path $contentPath "course05"),
        (Join-Path $contentPath "course06"),
        (Join-Path $contentPath "course07"),
        (Join-Path $contentPath "course08")
    )
    
    foreach ($folder in $folders) {
        if (-not (Test-Path $folder)) {
            New-Item -ItemType Directory -Force -Path $folder | Out-Null
        }
    }
    
    # Создаем шаблон если не существует
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    if (-not (Test-Path $templateFile)) {
        $template = @"
# Шаблон урока MasterMarat
# Заполните данные ниже

## TITLE: [Название урока]

## VIDEO: [имя_файла.mp4]

## THUMBNAIL: [имя_файла.jpg]

## CONTENT_POINTS:
- [Основной пункт 1]
- [Основной пункт 2]
- [Основной пункт 3]

## IMPORTANT_NOTES:
- [Важная заметка 1]
- [Важная заметка 2]

## ADDITIONAL_INFO:
- [Дополнительная информация 1]
- [Дополнительная информация 2]

## MATERIALS:
[PDF] filename.pdf | Описание материала
[LINK] https://example.com | Описание ссылки

## NOTES:
[Любые заметки для себя - не попадут в JSON]
"@
        $template | Out-File -FilePath $templateFile -Encoding UTF8
        Write-Host "✅ Создан шаблон: $templateFile" -ForegroundColor Green
    }
}

# Парсинг текстового файла
function Parse-LessonFile {
    param([string]$FilePath)
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "❌ Файл не найден: $FilePath" -ForegroundColor Red
        return $null
    }
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    $lesson = @{
        title = ""
        video_file = ""
        thumbnail_file = ""
        content_points = @()
        important_notes = @()
        additional_info = @()
        materials = @()
    }
    
    # Парсим секции
    if ($content -match '## TITLE:\s*(.+)') {
        $lesson.title = $matches[1].Trim()
    }
    
    if ($content -match '## VIDEO:\s*(.+)') {
        $lesson.video_file = $matches[1].Trim()
    }
    
    if ($content -match '## THUMBNAIL:\s*(.+)') {
        $lesson.thumbnail_file = $matches[1].Trim()
    }
    
    # Парсим списки
    $sections = @{
        'CONTENT_POINTS' = 'content_points'
        'IMPORTANT_NOTES' = 'important_notes'
        'ADDITIONAL_INFO' = 'additional_info'
    }
    
    foreach ($section in $sections.Keys) {
        if ($content -match "## $section\s*:\s*\n((?:- .+\n?)+)") {
            $items = $matches[1] -split '\n' | 
                Where-Object { $_ -match '^-\s*(.+)' } | 
                ForEach-Object { $matches[1].Trim() }
            $lesson[$sections[$section]] = @($items)
        }
    }
    
    # Парсим материалы
    if ($content -match '## MATERIALS:\s*\n((?:\[.+\].+\n?)+)') {
        $materialLines = $matches[1] -split '\n' | Where-Object { $_ -match '\[(.+)\]\s*(.+?)\s*\|\s*(.+)' }
        foreach ($line in $materialLines) {
            if ($line -match '\[(.+)\]\s*(.+?)\s*\|\s*(.+)') {
                $type = $matches[1].Trim().ToLower()
                $fileOrUrl = $matches[2].Trim()
                $title = $matches[3].Trim()
                
                $material = @{
                    type = $type
                    title = $title
                }
                
                # Определяем правильное имя поля
                if ($type -eq 'pdf') {
                    $material['file'] = $fileOrUrl
                } elseif ($type -eq 'link') {
                    $material['url'] = $fileOrUrl
                }
                
                $lesson.materials += $material
            }
        }
    }
    
    return $lesson
}

# Конвертация одного файла
function Convert-SingleLesson {
    param(
        [string]$InputPath,
        [string]$CourseId,
        [string]$LessonId
    )
    
    Write-Host "`n📄 Конвертация урока..." -ForegroundColor Cyan
    
    # Парсим файл
    $lesson = Parse-LessonFile -FilePath $InputPath
    if (-not $lesson) {
        return
    }
    
    # Создаем выходной путь
    $outputDir = Join-Path $contentPath $CourseId
    $outputFile = Join-Path $outputDir "$LessonId.json"
    
    # Конвертируем в JSON
    $jsonContent = $lesson | ConvertTo-Json -Depth 10
    $jsonContent | Out-File -FilePath $outputFile -Encoding UTF8
    
    Write-Host "✅ Создан файл: $outputFile" -ForegroundColor Green
    Write-Host "`n📋 Содержимое:" -ForegroundColor Yellow
    Write-Host "   Название: $($lesson.title)" -ForegroundColor White
    Write-Host "   Видео: $($lesson.video_file)" -ForegroundColor White
    Write-Host "   Превью: $($lesson.thumbnail_file)" -ForegroundColor White
    Write-Host "   Пунктов: $($lesson.content_points.Count)" -ForegroundColor Gray
    Write-Host "   Заметок: $($lesson.important_notes.Count)" -ForegroundColor Gray
    Write-Host "   Доп.инфо: $($lesson.additional_info.Count)" -ForegroundColor Gray
    Write-Host "   Материалов: $($lesson.materials.Count)" -ForegroundColor Gray
    
    return $outputFile
}

# Интерактивный режим
function Interactive-Convert {
    Clear-Host
    Write-Host "🎓 Конвертер уроков MasterMarat" -ForegroundColor Cyan
    Write-Host "===============================" -ForegroundColor Cyan
    
    # Показываем существующие txt файлы
    Write-Host "`n📁 Найденные файлы уроков:" -ForegroundColor Yellow
    $txtFiles = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -Recurse | 
                Where-Object { $_.Name -ne "lesson_template.txt" }
    
    if ($txtFiles.Count -eq 0) {
        Write-Host "   Нет файлов для конвертации" -ForegroundColor Gray
        Write-Host "`n💡 Создайте файл урока на основе шаблона:" -ForegroundColor Yellow
        Write-Host "   $templatesPath\lesson_template.txt" -ForegroundColor White
    } else {
        $i = 1
        foreach ($file in $txtFiles) {
            Write-Host "   $i. $($file.Name) - $($file.DirectoryName)" -ForegroundColor White
            $i++
        }
    }
    
    Write-Host "`n" -NoNewline
    
    # Выбор файла
    if ($txtFiles.Count -gt 0) {
        $fileChoice = Read-Host "Выберите файл (1-$($txtFiles.Count)) или путь к файлу"
        
        if ($fileChoice -match '^\d+$' -and [int]$fileChoice -le $txtFiles.Count) {
            $selectedFile = $txtFiles[[int]$fileChoice - 1].FullName
        } else {
            $selectedFile = $fileChoice
        }
    } else {
        $selectedFile = Read-Host "Введите путь к файлу урока"
    }
    
    if (-not (Test-Path $selectedFile)) {
        Write-Host "❌ Файл не найден!" -ForegroundColor Red
        return
    }
    
    # Выбор курса
    Write-Host "`n📚 Выберите курс:" -ForegroundColor Yellow
    Write-Host "   1. course01 - Механика здоровья" -ForegroundColor White
    Write-Host "   2. course02 - Суставная гимнастика" -ForegroundColor White
    Write-Host "   3. course03 - Остеопатия для спортсменов" -ForegroundColor White
    Write-Host "   4. course04 - Женское здоровья" -ForegroundColor White
    Write-Host "   5. course05 - Детская остеопатия" -ForegroundColor White
    Write-Host "   6. course06 - Антистресс и релаксация" -ForegroundColor White
    Write-Host "   7. course07 - Питание и остеопатия" -ForegroundColor White
    Write-Host "   8. course08 - Мастер-курс (VIP)" -ForegroundColor White
    
    $courseChoice = Read-Host "`nВыберите номер курса (1-8)"
    $courseId = "course0$courseChoice"
    
    # Автоопределение номера урока
    $existingLessons = Get-ChildItem -Path (Join-Path $contentPath $courseId) -Filter "lesson*.json" -ErrorAction SilentlyContinue |
                       Where-Object { $_.Name -match 'lesson(\d+)\.json' } |
                       ForEach-Object { [int]$matches[1] }
    
    $nextNumber = 1
    if ($existingLessons.Count -gt 0) {
        $nextNumber = ($existingLessons | Measure-Object -Maximum).Maximum + 1
    }
    
    $suggestedId = "lesson{0:D3}" -f $nextNumber
    Write-Host "`nСледующий номер урока: $suggestedId" -ForegroundColor Cyan
    $lessonId = Read-Host "ID урока (Enter для $suggestedId)"
    if ([string]::IsNullOrEmpty($lessonId)) {
        $lessonId = $suggestedId
    }
    
    # Конвертируем
    $outputFile = Convert-SingleLesson -InputPath $selectedFile -CourseId $courseId -LessonId $lessonId
    
    if ($outputFile) {
        Write-Host "`n✅ Успешно сконвертировано!" -ForegroundColor Green
        
        # Предлагаем открыть файл
        $openFile = Read-Host "`nОткрыть JSON файл? (y/n)"
        if ($openFile -eq 'y') {
            Start-Process notepad.exe $outputFile
        }
    }
}

# Пакетная конвертация
function Batch-Convert {
    Write-Host "`n📦 Пакетная конвертация" -ForegroundColor Cyan
    Write-Host "Ищем все .txt файлы в папке temp_upload..." -ForegroundColor Yellow
    
    $files = Get-ChildItem -Path $tempUploadPath -Filter "*.txt" -Recurse |
             Where-Object { $_.Name -match '^(course\d+)_(lesson\d+)\.txt$' }
    
    if ($files.Count -eq 0) {
        Write-Host "❌ Не найдено файлов с форматом courseXX_lessonXXX.txt" -ForegroundColor Red
        return
    }
    
    Write-Host "Найдено файлов: $($files.Count)" -ForegroundColor Green
    
    foreach ($file in $files) {
        if ($file.Name -match '^(course\d+)_(lesson\d+)\.txt$') {
            $courseId = $matches[1]
            $lessonId = $matches[2]
            
            Write-Host "`n📄 $($file.Name) -> $courseId/$lessonId.json" -ForegroundColor Cyan
            Convert-SingleLesson -InputPath $file.FullName -CourseId $courseId -LessonId $lessonId
        }
    }
    
    Write-Host "`n✅ Пакетная конвертация завершена!" -ForegroundColor Green
}

# Создание нового урока из шаблона
function Create-NewLesson {
    Write-Host "`n📝 Создание нового урока" -ForegroundColor Cyan
    
    $templateFile = Join-Path $templatesPath "lesson_template.txt"
    $template = Get-Content $templateFile -Raw
    
    # Выбор курса
    Write-Host "`nДля какого курса создаем урок?" -ForegroundColor Yellow
    Write-Host "1-8 для course01-course08" -ForegroundColor Gray
    $courseNum = Read-Host "Номер курса"
    
    # Определяем следующий номер урока
    $courseId = "course0$courseNum"
    $coursePath = Join-Path $contentPath $courseId
    
    $existingFiles = Get-ChildItem -Path $tempUploadPath -Filter "${courseId}_lesson*.txt" -ErrorAction SilentlyContinue
    $nextNumber = 1
    if ($existingFiles.Count -gt 0) {
        $numbers = $existingFiles | ForEach-Object {
            if ($_.Name -match 'lesson(\d+)\.txt$') {
                [int]$matches[1]
            }
        }
        if ($numbers) {
            $nextNumber = ($numbers | Measure-Object -Maximum).Maximum + 1
        }
    }
    
    $fileName = "${courseId}_lesson{0:D3}.txt" -f $nextNumber
    $filePath = Join-Path $tempUploadPath $fileName
    
    # Создаем файл с базовыми данными
    $newContent = $template -replace '\[Название урока\]', "Урок $nextNumber"
    $newContent = $newContent -replace '\[имя_файла\.mp4\]', "lesson{0:D3}.mp4" -f $nextNumber
    $newContent = $newContent -replace '\[имя_файла\.jpg\]', "lesson{0:D3}.jpg" -f $nextNumber
    
    $newContent | Out-File -FilePath $filePath -Encoding UTF8
    
    Write-Host "✅ Создан файл: $filePath" -ForegroundColor Green
    
    # Открываем в блокноте
    Start-Process notepad.exe $filePath
    
    Write-Host "`n💡 Отредактируйте файл и запустите конвертацию" -ForegroundColor Yellow
}

# Главное меню
function Show-Menu {
    while ($true) {
        Clear-Host
        Write-Host "🎓 Конвертер уроков MasterMarat" -ForegroundColor Cyan
        Write-Host "===============================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. 📝 Создать новый урок из шаблона" -ForegroundColor Yellow
        Write-Host "2. 🔄 Конвертировать один файл" -ForegroundColor Yellow
        Write-Host "3. 📦 Пакетная конвертация" -ForegroundColor Yellow
        Write-Host "4. 📁 Открыть папку temp_upload" -ForegroundColor Yellow
        Write-Host "5. 📋 Показать структуру файлов" -ForegroundColor Yellow
        Write-Host "0. ❌ Выход" -ForegroundColor Red
        Write-Host ""
        
        $choice = Read-Host "Выберите действие"
        
        switch ($choice) {
            "1" { 
                Create-NewLesson
                Read-Host "`nНажмите Enter для продолжения"
            }
            "2" { 
                Interactive-Convert
                Read-Host "`nНажмите Enter для продолжения"
            }
            "3" { 
                Batch-Convert
                Read-Host "`nНажмите Enter для продолжения"
            }
            "4" {
                Start-Process explorer.exe $tempUploadPath
            }
            "5" {
                Write-Host "`n📁 Структура файлов:" -ForegroundColor Cyan
                Get-ChildItem -Path $tempUploadPath -Recurse -ErrorAction SilentlyContinue | 
                    Where-Object { -not $_.PSIsContainer } |
                    ForEach-Object {
                        $relativePath = $_.FullName.Substring($tempUploadPath.Length + 1)
                        Write-Host "   $relativePath" -ForegroundColor White
                    }
                Read-Host "`nНажмите Enter для продолжения"
            }
            "0" { 
                Write-Host "`n👋 До свидания!" -ForegroundColor Green
                return 
            }
            default { 
                Write-Host "❌ Неверный выбор!" -ForegroundColor Red
                Start-Sleep -Seconds 1
            }
        }
    }
}

# Инициализация
Initialize-Folders

# Запуск
if ($Action -eq "menu") {
    Show-Menu
} elseif ($Action -eq "convert" -and $InputFile) {
    if ($CourseId -and $LessonId) {
        Convert-SingleLesson -InputPath $InputFile -CourseId $CourseId -LessonId $LessonId
    } else {
        Write-Host "❌ Укажите CourseId и LessonId" -ForegroundColor Red
    }
}