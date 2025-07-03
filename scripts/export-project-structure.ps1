# export-project-structure.ps1
# Экспорт значимой структуры проекта MasterMarat

param(
    [string]$OutputFormat = "tree",  # tree, markdown, json
    [string]$OutputFile = "",
    [switch]$ShowContent = $false,
    [switch]$IncludeGitInfo = $false
)

# Конфигурация: что включать в экспорт
$includePatterns = @(
    # Конфигурационные файлы
    "*.json",
    "*.toml",
    "*.yml",
    "*.yaml",
    ".gitignore",
    ".gitattributes",
    ".env.example",

    # Код
    "*.js",
    "*.ps1",
    "*.sh",
    "*.bat",

    # Документация
    "*.md",
    "README*",
    "LICENSE*",

    # Структурные файлы
    ".gitkeep"
)

# Папки для включения
$includeFolders = @(
    "workers",
    "scripts",
    "docs",
    "data",
    "content",
    "temp_upload"
)

# Что исключать
$excludePatterns = @(
    # Системные
    ".git",
    ".wrangler",
    "node_modules",
    ".vscode",

    # Временные
    "*.log",
    "*.tmp",
    "*.temp",
    "*.bak",
    "*.backup",

    # Медиа (большие файлы)
    "*.mp4",
    "*.mov",
    "*.avi",
    "*.jpg",
    "*.jpeg",
    "*.png",
    "*.gif",

    # Данные
    "*.db",
    "*.sqlite",

    # Приватные
    ".env",
    ".dev.vars",
    "*.pem",
    "*.key",

    # Кеш
    "dist",
    "build",
    ".cache"
)

# Получение структуры проекта
function Get-ProjectStructure {
    param([string]$Path = ".")

    $items = @()

    # Получаем все файлы и папки
    Get-ChildItem -Path $Path -Recurse | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
        $include = $false

        # Проверяем исключения
        foreach ($pattern in $excludePatterns) {
            if ($relativePath -like "*$pattern*") {
                return
            }
        }

        # Для файлов проверяем паттерны включения
        if (-not $_.PSIsContainer) {
            foreach ($pattern in $includePatterns) {
                if ($_.Name -like $pattern) {
                    $include = $true
                    break
                }
            }
        } else {
            # Для папок проверяем, входят ли они в список
            foreach ($folder in $includeFolders) {
                if ($relativePath -like "$folder*") {
                    $include = $true
                    break
                }
            }
        }

        if ($include) {
            $item = @{
                Path = $relativePath
                Name = $_.Name
                IsDirectory = $_.PSIsContainer
                Size = if (-not $_.PSIsContainer) { $_.Length } else { 0 }
                LastModified = $_.LastWriteTime
            }

            # Добавляем Git информацию если нужно
            if ($IncludeGitInfo -and -not $_.PSIsContainer) {
                $gitStatus = git status --porcelain $_.FullName 2>$null
                if ($gitStatus) {
                    $item.GitStatus = $gitStatus.Substring(0, 2).Trim()
                }
            }

            $items += $item
        }
    }

    return $items | Sort-Object Path
}

# Вывод в формате дерева
function Export-AsTree {
    param($Items)

    $tree = @()
    $tree += "MasterMarat Project Structure"
    $tree += "=" * 30
    $tree += ""

    $lastDepth = 0
    foreach ($item in $Items) {
        $parts = $item.Path.Split('\')
        $depth = $parts.Count - 1
        $indent = "  " * $depth
        $prefix = if ($item.IsDirectory) { "📁" } else { "📄" }

        $line = "$indent$prefix $($item.Name)"

        if (-not $item.IsDirectory -and $item.Size -gt 0) {
            $sizeKB = [math]::Round($item.Size / 1KB, 2)
            $line += " ($sizeKB KB)"
        }

        if ($item.GitStatus) {
            $statusIcon = switch ($item.GitStatus) {
                "M" { "✏️" }
                "A" { "➕" }
                "D" { "➖" }
                "??" { "❓" }
                default { "📝" }
            }
            $line += " $statusIcon"
        }

        $tree += $line
    }

    return $tree -join "`n"
}

# Вывод в формате Markdown
function Export-AsMarkdown {
    param($Items)

    $md = @()
    $md += "# MasterMarat Project Structure"
    $md += ""
    $md += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    $md += ""

    # Статистика
    $fileCount = ($Items | Where-Object { -not $_.IsDirectory }).Count
    $folderCount = ($Items | Where-Object { $_.IsDirectory }).Count
    $totalSize = ($Items | Where-Object { -not $_.IsDirectory } | Measure-Object -Property Size -Sum).Sum

    $md += "## Statistics"
    $md += "- Total files: $fileCount"
    $md += "- Total folders: $folderCount"
    $md += "- Total size: $([math]::Round($totalSize / 1MB, 2)) MB"
    $md += ""

    # Структура по папкам
    $md += "## Project Structure"
    $md += ""

    # Группируем по корневым папкам
    $rootFolders = $Items | ForEach-Object {
        $_.Path.Split('\')[0]
    } | Select-Object -Unique

    foreach ($folder in $rootFolders) {
        $md += "### 📁 $folder/"
        $md += ""

        $folderItems = $Items | Where-Object { $_.Path -like "$folder*" }

        # Создаем таблицу для файлов
        $files = $folderItems | Where-Object { -not $_.IsDirectory }
        if ($files) {
            $md += "| File | Size | Modified |"
            $md += "|------|------|----------|"

            foreach ($file in $files) {
                $relativePath = $file.Path.Substring($folder.Length + 1)
                $sizeKB = [math]::Round($file.Size / 1KB, 2)
                $modified = $file.LastModified.ToString('yyyy-MM-dd')
                $md += "| $relativePath | $sizeKB KB | $modified |"
            }
            $md += ""
        }
    }

    # Важные файлы
    $md += "## Key Files"
    $md += ""

    $keyFiles = @(
        @{Pattern = "worker*.js"; Description = "API Workers"},
        @{Pattern = "*.ps1"; Description = "PowerShell Scripts"},
        @{Pattern = "courses*.js"; Description = "Course Configuration"},
        @{Pattern = "wrangler.toml"; Description = "Cloudflare Config"}
    )

    foreach ($key in $keyFiles) {
        $files = $Items | Where-Object { $_.Name -like $key.Pattern -and -not $_.IsDirectory }
        if ($files) {
            $md += "### $($key.Description)"
            foreach ($file in $files) {
                $md += "- `$($file.Path)`"
            }
            $md += ""
        }
    }

    return $md -join "`n"
}

# Вывод в формате JSON
function Export-AsJson {
    param($Items)

    $structure = @{
        project = "MasterMarat"
        generated = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
        statistics = @{
            files = ($Items | Where-Object { -not $_.IsDirectory }).Count
            folders = ($Items | Where-Object { $_.IsDirectory }).Count
            totalSizeMB = [math]::Round((($Items | Where-Object { -not $_.IsDirectory } | Measure-Object -Property Size -Sum).Sum) / 1MB, 2)
        }
        structure = @{}
    }

    # Строим иерархическую структуру
    foreach ($item in $Items) {
        $parts = $item.Path.Split('\')
        $current = $structure.structure

        for ($i = 0; $i -lt $parts.Count - 1; $i++) {
            if (-not $current.ContainsKey($parts[$i])) {
                $current[$parts[$i]] = @{}
            }
            $current = $current[$parts[$i]]
        }

        if (-not $item.IsDirectory) {
            $current[$parts[-1]] = @{
                size = $item.Size
                modified = $item.LastModified.ToString('yyyy-MM-dd HH:mm:ss')
            }
            if ($item.GitStatus) {
                $current[$parts[-1]].gitStatus = $item.GitStatus
            }
        }
    }

    return $structure | ConvertTo-Json -Depth 10
}

# Основная функция
function Main {
    Write-Host "🔍 Анализ структуры проекта MasterMarat..." -ForegroundColor Cyan

    # Получаем структуру
    $items = Get-ProjectStructure

    Write-Host "📊 Найдено: $($items.Count) элементов" -ForegroundColor Green

    # Экспорт в нужном формате
    $output = switch ($OutputFormat.ToLower()) {
        "tree" { Export-AsTree -Items $items }
        "markdown" { Export-AsMarkdown -Items $items }
        "md" { Export-AsMarkdown -Items $items }
        "json" { Export-AsJson -Items $items }
        default { Export-AsTree -Items $items }
    }

    # Сохранение или вывод
    if ($OutputFile) {
        $output | Out-File -FilePath $OutputFile -Encoding UTF8
        Write-Host "✅ Сохранено в: $OutputFile" -ForegroundColor Green

        # Предлагаем открыть
        $open = Read-Host "Открыть файл? (y/n)"
        if ($open -eq 'y') {
            Start-Process $OutputFile
        }
    } else {
        # Выводим в консоль
        Write-Host ""
        Write-Output $output
    }

    # Показываем содержимое важных файлов если нужно
    if ($ShowContent) {
        Write-Host "`n✅ Содержимое ключевых файлов:" -ForegroundColor Yellow

        $keyFiles = @("wrangler.toml", "package.json", ".gitignore")
        foreach ($fileName in $keyFiles) {
            $file = $items | Where-Object { $_.Name -eq $fileName } | Select-Object -First 1
            if ($file) {
                Write-Host "`n--- $($file.Path) ---" -ForegroundColor Cyan
                Get-Content $file.Path -ErrorAction SilentlyContinue | Select-Object -First 20
            }
        }
    }
}

# Запуск
Main
