# export-working-files.ps1
# Экспорт минимального списка рабочих файлов проекта

param(
    [string]$OutputFile = "working-files.md"
)

# Что включаем (только код и конфиги)
$includePatterns = @(
    "*.js",      # JavaScript код
    "*.ps1",     # PowerShell скрипты
    "*.json",    # Конфигурации и данные
    "*.toml",    # Wrangler config
    "*.yml",     # CI/CD configs
    "*.yaml",    # Configs
    ".gitignore" # Git config
)

# Что исключаем
$excludePatterns = @(
    "*node_modules*",
    "*.wrangler*",
    "*dist*",
    "*build*",
    "package-lock.json",  # Большой файл зависимостей
    "chat_*.md",          # Чат-логи
    "*.md",               # Документация
    "*.log",
    "*.tmp",
    "*.bak"
)

# Получаем файлы
function Get-WorkingFiles {
    $files = @()

    Get-ChildItem -Recurse -File | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
        $include = $false

        # Проверяем исключения
        foreach ($pattern in $excludePatterns) {
            if ($relativePath -like $pattern) {
                return
            }
        }

        # Проверяем включения
        foreach ($pattern in $includePatterns) {
            if ($_.Name -like $pattern) {
                $include = $true
                break
            }
        }

        if ($include) {
            $files += $relativePath
        }
    }

    return $files | Sort-Object
}

# Группируем файлы по категориям
function Group-FilesByCategory {
    param($Files)

    $categories = @{
        "API Core" = @()
        "API Handlers" = @()
        "API Services" = @()
        "API Utils" = @()
        "API Config" = @()
        "Scripts" = @()
        "Course Content" = @()
        "Project Config" = @()
        "Other" = @()
    }

    foreach ($file in $Files) {
        $added = $false

        # API файлы
        if ($file -like "*workers\api\src\*") {
            if ($file -like "*\handlers\*") {
                $categories["API Handlers"] += $file
                $added = $true
            }
            elseif ($file -like "*\services\*") {
                $categories["API Services"] += $file
                $added = $true
            }
            elseif ($file -like "*\utils\*") {
                $categories["API Utils"] += $file
                $added = $true
            }
            elseif ($file -like "*\config\*") {
                $categories["API Config"] += $file
                $added = $true
            }
            elseif ($file -match "worker.*\.js$") {
                $categories["API Core"] += $file
                $added = $true
            }
        }
        # Скрипты
        elseif ($file -like "*.ps1") {
            $categories["Scripts"] += $file
            $added = $true
        }
        # Контент курсов
        elseif ($file -like "*content\*" -or $file -match "lesson\d+\.json") {
            $categories["Course Content"] += $file
            $added = $true
        }
        # Конфиги проекта
        elseif ($file -match "^(package\.json|wrangler\.toml|\.gitignore|.*\.yml)$") {
            $categories["Project Config"] += $file
            $added = $true
        }

        if (-not $added) {
            $categories["Other"] += $file
        }
    }

    return $categories
}

# Создаем MD файл
function New-MarkdownFile {
    param($Categories)

    $output = @()
    $output += "# Working Files - MasterMarat"
    $output += ""
    $output += "*Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')*"
    $output += ""

    $totalFiles = 0
    foreach ($category in $Categories.GetEnumerator()) {
        $totalFiles += $category.Value.Count
    }
    $output += "**Total: $totalFiles files**"
    $output += ""

    # Выводим категории
    foreach ($category in $Categories.GetEnumerator() | Sort-Object Name) {
        if ($category.Value.Count -gt 0) {
            $output += "## $($category.Name) ($($category.Value.Count))"
            $output += ""

            foreach ($file in $category.Value | Sort-Object) {
                # Укороченный путь для читаемости
                $displayPath = $file
                if ($file -like "*workers\api\src\*") {
                    $displayPath = $file.Substring($file.IndexOf("workers\api\src\"))
                }

                $output += "- ``$displayPath``"
            }
            $output += ""
        }
    }

    return $output -join "`r`n"
}

# Main
Write-Host "Scanning project files..." -ForegroundColor Cyan

$files = Get-WorkingFiles
Write-Host "Found $($files.Count) working files" -ForegroundColor Green

$categories = Group-FilesByCategory -Files $files

$markdown = New-MarkdownFile -Categories $categories

# Save
$markdown | Out-File -FilePath $OutputFile -Encoding UTF8 -Force
Write-Host "Saved to: $OutputFile" -ForegroundColor Green

# Show summary
Write-Host ""
Write-Host "Summary:" -ForegroundColor Yellow
foreach ($cat in $categories.GetEnumerator() | Sort-Object Name) {
    if ($cat.Value.Count -gt 0) {
        Write-Host "  $($cat.Name): $($cat.Value.Count) files" -ForegroundColor White
    }
}

# Ask to open
$open = Read-Host "`nOpen file? (y/n)"
if ($open -eq 'y') {
    Start-Process $OutputFile
}
