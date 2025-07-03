# generate-raw-links.ps1
# Генератор GitHub RAW ссылок для проекта

param(
    [string]$OutputFile = "GITHUB_RAW_LINKS.md"
)

# Получаем информацию о репозитории
function Get-GitHubInfo {
    $remoteUrl = git remote get-url origin 2>$null
    if (-not $remoteUrl) {
        Write-Host "Error: Git remote not found" -ForegroundColor Red
        return $null
    }

    # Парсим URL репозитория
    if ($remoteUrl -match "github\.com[:/]([^/]+)/([^\.]+)") {
        $owner = $matches[1]
        $repo = $matches[2]

        # Получаем текущую ветку
        $branch = git branch --show-current

        return @{
            Owner = $owner
            Repo = $repo
            Branch = $branch
            BaseUrl = "https://raw.githubusercontent.com/$owner/$repo/$branch"
        }
    }

    return $null
}

# Получаем список файлов
function Get-ProjectFiles {
    $files = @{
        "API Core" = @()
        "Configuration" = @()
        "Handlers" = @()
        "Services" = @()
        "Utils" = @()
        "Scripts" = @()
        "Documentation" = @()
        "Project Config" = @()
    }

    # API файлы
    Get-ChildItem -Path "workers/api/src" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')

        if ($_.Name -match "worker") {
            $files["API Core"] += @{Path = $relativePath; Name = $_.Name}
        }
    }

    # Handlers
    Get-ChildItem -Path "workers/api/src/handlers" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Handlers"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Services
    Get-ChildItem -Path "workers/api/src/services" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Services"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Utils
    Get-ChildItem -Path "workers/api/src/utils" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Utils"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Config
    Get-ChildItem -Path "workers/api/src/config" -Filter "*.js" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Configuration"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Scripts
    Get-ChildItem -Path "scripts" -Filter "*.ps1" -File -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Scripts"] += @{Path = $relativePath; Name = $_.Name}
    }

    # Project configs
    @("package.json", "wrangler.toml", ".gitignore", "README.md") | ForEach-Object {
        if (Test-Path $_) {
            $files["Project Config"] += @{Path = $_; Name = $_}
        }
    }

    # Docs
    Get-ChildItem -Path "docs" -Filter "*.md" -File -Recurse -ErrorAction SilentlyContinue | ForEach-Object {
        $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
        $files["Documentation"] += @{Path = $relativePath; Name = $_.Name}
    }

    return $files
}

# Генерация MD файла
function Generate-RawLinksFile {
    param($GitInfo, $Files)

    $output = @()
    $output += "# GitHub RAW Links - $($GitInfo.Repo)"
    $output += ""
    $output += "> Direct links to project files on GitHub"
    $output += ""
    $output += "**Repository**: https://github.com/$($GitInfo.Owner)/$($GitInfo.Repo)"
    $output += "**Branch**: $($GitInfo.Branch)"
    $output += "**Generated**: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    $output += ""

    foreach ($category in $Files.GetEnumerator() | Sort-Object Name) {
        if ($category.Value.Count -gt 0) {
            $output += "## $($category.Name)"
            $output += ""

            foreach ($file in $category.Value | Sort-Object Name) {
                $rawUrl = "$($GitInfo.BaseUrl)/$($file.Path)"
                $output += "- [$($file.Name)]($rawUrl)"
            }
            $output += ""
        }
    }

    # Примеры использования
    $output += "## Usage Examples"
    $output += ""
    $output += '```powershell'
    $output += '# Download file'
    $output += '$url = "' + $GitInfo.BaseUrl + '/workers/api/src/worker-new.js"'
    $output += 'Invoke-WebRequest -Uri $url -OutFile "worker-new.js"'
    $output += ''
    $output += '# View content'
    $output += 'Invoke-RestMethod -Uri $url'
    $output += '```'

    return $output -join "`r`n"
}

# Main
Write-Host "Generating GitHub RAW links..." -ForegroundColor Cyan

# Получаем информацию о репозитории
$gitInfo = Get-GitHubInfo
if (-not $gitInfo) {
    Write-Host "Failed to get repository info" -ForegroundColor Red
    return
}

Write-Host "Repository: $($gitInfo.Owner)/$($gitInfo.Repo)" -ForegroundColor Green
Write-Host "Branch: $($gitInfo.Branch)" -ForegroundColor Green

# Получаем файлы
$files = Get-ProjectFiles

# Генерируем файл
$content = Generate-RawLinksFile -GitInfo $gitInfo -Files $files

# Сохраняем
$content | Out-File -FilePath $OutputFile -Encoding UTF8 -Force
Write-Host "Saved to: $OutputFile" -ForegroundColor Green

# Показываем первые несколько ссылок для проверки
Write-Host "`nSample links:" -ForegroundColor Yellow
$sampleUrls = $content -split "`n" | Where-Object { $_ -match '\[.*\]\(https://.*\)' } | Select-Object -First 3
foreach ($url in $sampleUrls) {
    Write-Host $url -ForegroundColor White
}

# Открываем файл
$open = Read-Host "`nOpen file? (y/n)"
if ($open -eq 'y') {
    Start-Process $OutputFile
}
