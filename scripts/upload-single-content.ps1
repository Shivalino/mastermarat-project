# upload-single-content.ps1
# Скрипт загрузки одного видео и thumbnail в R2

param(
    [Parameter(Mandatory=$true)]
    [string]$LessonName,  # Например: week1_lesson1

    [string]$CourseId = "course01",
    [string]$VideoPath = "",
    [string]$ThumbnailPath = "",
    [switch]$TestMode = $false
)

# Если пути не указаны, ищем файлы по имени урока
if (-not $VideoPath) {
    $VideoPath = ".\$LessonName.mp4"
}
if (-not $ThumbnailPath) {
    $ThumbnailPath = ".\$LessonName.jpg"
}

# Проверяем наличие файлов
$errors = @()
if (-not (Test-Path $VideoPath)) {
    $errors += "❌ Видео не найдено: $VideoPath"
}
if (-not (Test-Path $ThumbnailPath)) {
    $errors += "❌ Thumbnail не найден: $ThumbnailPath"
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "`n📦 Загрузка контента для урока: $LessonName" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host "📚 Курс: $CourseId" -ForegroundColor White
Write-Host "🎬 Видео: $VideoPath" -ForegroundColor White
Write-Host "🖼️  Thumbnail: $ThumbnailPath" -ForegroundColor White

# R2 paths
$r2VideoPath = "videos/$CourseId/$LessonName.mp4"
$r2ThumbnailPath = "thumbnails/$CourseId/$LessonName.jpg"

Write-Host "`n📤 Загрузка в R2..." -ForegroundColor Yellow

# Команды для загрузки
$commands = @(
    @{
        Type = "Video"
        LocalPath = $VideoPath
        R2Path = $r2VideoPath
        ContentType = "video/mp4"
    },
    @{
        Type = "Thumbnail"
        LocalPath = $ThumbnailPath
        R2Path = $r2ThumbnailPath
        ContentType = "image/jpeg"
    }
)

foreach ($cmd in $commands) {
    Write-Host "`n📌 Загрузка $($cmd.Type)..." -ForegroundColor Cyan

    if ($TestMode) {
        Write-Host "   [TEST MODE] Команда:" -ForegroundColor Gray
        Write-Host "   wrangler r2 object put mastermarat-content/$($cmd.R2Path) --file=""$($cmd.LocalPath)"" --content-type=""$($cmd.ContentType)""" -ForegroundColor Yellow
    } else {
        try {
            # Выполняем загрузку
            $result = wrangler r2 object put "mastermarat-content/$($cmd.R2Path)" `
                --file="$($cmd.LocalPath)" `
                --content-type="$($cmd.ContentType)" 2>&1

            if ($LASTEXITCODE -eq 0) {
                Write-Host "   ✅ Успешно загружено: $($cmd.R2Path)" -ForegroundColor Green

                # Получаем информацию о файле
                $fileInfo = Get-Item $cmd.LocalPath
                $sizeMB = [math]::Round($fileInfo.Length / 1MB, 2)
                Write-Host "   📊 Размер: $sizeMB MB" -ForegroundColor Gray
            } else {
                Write-Host "   ❌ Ошибка загрузки!" -ForegroundColor Red
                Write-Host "   $result" -ForegroundColor Red
            }
        } catch {
            Write-Host "   ❌ Ошибка: $_" -ForegroundColor Red
        }
    }
}

Write-Host "`n📋 Итоговые пути в R2:" -ForegroundColor Cyan
Write-Host "   Видео: $r2VideoPath" -ForegroundColor White
Write-Host "   Thumbnail: $r2ThumbnailPath" -ForegroundColor White

Write-Host "`n🔗 URL для проверки:" -ForegroundColor Cyan
Write-Host "   Thumbnail: https://api.mastermarat.com/thumbnails/$CourseId/$LessonName.jpg" -ForegroundColor White
Write-Host "   Видео: https://api.mastermarat.com/video/$CourseId/$LessonName.mp4?token=demo123" -ForegroundColor White

Write-Host "`n✅ Готово!" -ForegroundColor Green

# Примеры использования
Write-Host "`n💡 Примеры использования:" -ForegroundColor Yellow
Write-Host @"
   # Простая загрузка (файлы в текущей папке)
   .\upload-single-content.ps1 -LessonName week1_lesson1

   # С указанием путей
   .\upload-single-content.ps1 -LessonName week1_lesson1 -VideoPath "C:\Videos\lesson1.mp4" -ThumbnailPath "C:\Thumbs\lesson1.jpg"

   # Тестовый режим (только показать команды)
   .\upload-single-content.ps1 -LessonName week1_lesson1 -TestMode

   # Для другого курса
   .\upload-single-content.ps1 -LessonName intro -CourseId course00
"@ -ForegroundColor Gray
