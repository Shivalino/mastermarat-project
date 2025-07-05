# Export Working Files with Content - MasterMarat Project
# This script exports all important project files with their content to a markdown file
#.\scripts\export-working-files-with-content.ps1

$projectRoot = Get-Location
$outputFile = "working-files-content.md"

# File categories configuration
$categories = @{
    "API Config" = @("workers\api\src\config\*.js")
    "API Core" = @("workers\api\src\templates\*.js", "workers\api\src\worker*.js")
    "API Handlers" = @("workers\api\src\handlers\*.js")
    "API Services" = @("workers\api\src\services\*.js")
    "API Utils" = @("workers\api\src\utils\*.js")
    "Course Content" = @("temp_upload\content\**\*.json")
    "Scripts" = @("scripts\*.ps1", "scripts\*.js", "temp_upload\scripts\*.ps1")
    "Project Config" = @("package.json", ".gitignore", "*.json", "*.toml", "*.config.js", ".eslintrc.js")
    "Documentation" = @("docs\*.md", "*.md")
    "Tests" = @("tests\*.js", "**\test*.js")
}

# File extensions to treat as text
$textExtensions = @(
    ".js", ".json", ".md", ".txt", ".ps1", ".sh", ".bat", ".cmd",
    ".html", ".css", ".scss", ".less", ".yaml", ".yml", ".xml",
    ".toml", ".ini", ".conf", ".config", ".env", ".gitignore",
    ".eslintrc", ".prettierrc", ".editorconfig", ".dockerignore"
)

# Binary file extensions to skip
$binaryExtensions = @(
    ".exe", ".dll", ".so", ".dylib", ".bin", ".dat",
    ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".ico", ".svg",
    ".mp4", ".avi", ".mov", ".mkv", ".mp3", ".wav", ".flac",
    ".zip", ".rar", ".7z", ".tar", ".gz", ".pdf", ".doc", ".docx",
    ".xls", ".xlsx", ".ppt", ".pptx", ".db", ".sqlite"
)

# Function to check if file is text
function Is-TextFile {
    param([string]$filePath)

    $extension = [System.IO.Path]::GetExtension($filePath).ToLower()

    # Check by extension
    if ($textExtensions -contains $extension) {
        return $true
    }
    if ($binaryExtensions -contains $extension) {
        return $false
    }

    # For unknown extensions, try to detect by content
    try {
        $bytes = [System.IO.File]::ReadAllBytes($filePath) | Select-Object -First 8000
        $nullCount = ($bytes | Where-Object { $_ -eq 0 }).Count

        # If more than 10% null bytes, probably binary
        return ($nullCount / $bytes.Count) -lt 0.1
    }
    catch {
        return $false
    }
}

# Function to get file content safely
function Get-SafeFileContent {
    param([string]$filePath)

    try {
        if (Is-TextFile $filePath) {
            $content = Get-Content -Path $filePath -Raw -ErrorAction Stop

            # Handle empty files
            if ($null -eq $content) {
                return "[EMPTY FILE]"
            }

            # Limit content size to 100KB
            if ($content.Length -gt 102400) {
                $content = $content.Substring(0, 102400) + "`n`n... [CONTENT TRUNCATED - FILE TOO LARGE] ..."
            }

            return $content
        }
        else {
            return "[BINARY FILE - CONTENT NOT DISPLAYED]"
        }
    }
    catch {
        return "[ERROR READING FILE: $($_.Exception.Message)]"
    }
}

# Collect all files
$allFiles = @{}
$excludedDirs = @("node_modules", ".git", "dist", "build", ".next", ".cache", "coverage")

foreach ($category in $categories.Keys) {
    $files = @()
    foreach ($pattern in $categories[$category]) {
        $foundFiles = Get-ChildItem -Path $pattern -Recurse -File -ErrorAction SilentlyContinue |
            Where-Object {
                $pathParts = $_.DirectoryName -split '\\'
                $excluded = $false
                foreach ($part in $pathParts) {
                    if ($excludedDirs -contains $part) {
                        $excluded = $true
                        break
                    }
                }
                -not $excluded
            }
        $files += $foundFiles
    }

    if ($files.Count -gt 0) {
        $allFiles[$category] = $files | Select-Object -Unique
    }
}

# Generate output
$output = @"
# Working Files with Content - MasterMarat Project

*Generated: $(Get-Date -Format "yyyy-MM-dd HH:mm")*

**Total: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count) files**

---

"@

foreach ($category in $allFiles.Keys | Sort-Object) {
    $files = $allFiles[$category] | Sort-Object FullName

    $output += "`n## $category ($($files.Count))`n"

    foreach ($file in $files) {
        $relativePath = $file.FullName.Replace("$projectRoot\", "").Replace("\", "/")
        $fileSize = [math]::Round($file.Length / 1KB, 2)

        $output += "`n### ``$relativePath`` ($fileSize KB)`n"

        # Get file content
        $content = Get-SafeFileContent -filePath $file.FullName

        # Determine language for syntax highlighting
        $extension = $file.Extension.TrimStart('.')
        $language = switch ($extension) {
            "js" { "javascript" }
            "ps1" { "powershell" }
            "json" { "json" }
            "md" { "markdown" }
            "toml" { "toml" }
            "xml" { "xml" }
            "html" { "html" }
            "css" { "css" }
            "yml" { "yaml" }
            "yaml" { "yaml" }
            default { $extension }
        }

        # Add content with syntax highlighting
        if ($null -eq $content) {
            $output += "`n[FILE IS EMPTY OR COULD NOT BE READ]`n"
        }
        elseif ($content -eq "[BINARY FILE - CONTENT NOT DISPLAYED]" -or
                $content.StartsWith("[ERROR READING FILE:")) {
            $output += "`n$content`n"
        }
        else {
            $output += "`n``````$language`n$content`n```````n"
        }

        $output += "`n---`n"
    }
}

# Add summary at the end
$totalSize = ($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique |
    Measure-Object -Property Length -Sum).Sum / 1MB

$output += @"

## Summary

- **Total Files**: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count)
- **Total Size**: $([math]::Round($totalSize, 2)) MB
- **Categories**: $($allFiles.Keys.Count)
- **Generated**: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

"@

# Save to file
$output | Out-File -FilePath $outputFile -Encoding UTF8

Write-Host "Export completed! File saved to: $outputFile" -ForegroundColor Green
Write-Host "Total files exported: $(($allFiles.Values | ForEach-Object { $_ } | Select-Object -Unique).Count)" -ForegroundColor Yellow
Write-Host "Total size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Yellow

# Optionally open the file
$openFile = Read-Host "Do you want to open the file? (Y/N)"
if ($openFile -eq 'Y' -or $openFile -eq 'y') {
    Start-Process $outputFile
}
