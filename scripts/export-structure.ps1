# export-structure.ps1
# Simple project structure export

param(
    [string]$Format = "tree",
    [string]$Output = ""
)

# Config
$includeFiles = @("*.js", "*.ps1", "*.json", "*.toml", "*.md", "*.yml", "*.yaml", ".gitignore")
$excludeDirs = @(".git", "node_modules", ".wrangler", "dist", "build")
$excludeFiles = @("*.mp4", "*.jpg", "*.png", "*.log", "*.tmp")

# Get files
function Get-ProjectFiles {
    $files = @()

    Get-ChildItem -Recurse -File | ForEach-Object {
        $include = $false
        $exclude = $false

        # Check excludes
        foreach ($pattern in $excludeFiles) {
            if ($_.Name -like $pattern) {
                $exclude = $true
                break
            }
        }

        foreach ($dir in $excludeDirs) {
            if ($_.FullName -like "*\$dir\*") {
                $exclude = $true
                break
            }
        }

        # Check includes
        if (-not $exclude) {
            foreach ($pattern in $includeFiles) {
                if ($_.Name -like $pattern) {
                    $include = $true
                    break
                }
            }
        }

        if ($include) {
            $relativePath = $_.FullName.Substring((Get-Location).Path.Length + 1)
            $files += @{
                Path = $relativePath
                Name = $_.Name
                Size = $_.Length
                Dir = Split-Path $relativePath -Parent
            }
        }
    }

    return $files | Sort-Object Path
}

# Tree format
function Format-Tree {
    param($Files)

    $output = @()
    $output += "PROJECT STRUCTURE"
    $output += "================="
    $output += ""

    $currentDir = ""
    foreach ($file in $Files) {
        if ($file.Dir -ne $currentDir) {
            $currentDir = $file.Dir
            if ($currentDir) {
                $output += ""
                $output += "$currentDir\"
            }
        }

        $indent = "  "
        if ($currentDir) {
            $depth = ($currentDir.Split('\').Count)
            $indent = "  " * ($depth + 1)
        }

        $sizeKB = [math]::Round($file.Size / 1KB, 1)
        $output += "${indent}$($file.Name) (${sizeKB}KB)"
    }

    return $output -join "`r`n"
}

# Markdown format
function Format-Markdown {
    param($Files)

    $output = @()
    $output += "# Project Structure"
    $output += ""
    $output += "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    $output += ""

    # Stats
    $fileCount = $Files.Count
    $totalSize = 0
    if ($Files) {
        $totalSize = ($Files | ForEach-Object { $_.Size } | Measure-Object -Sum).Sum
    }
    $output += "## Statistics"
    $output += "- Files: $fileCount"
    if ($totalSize -gt 0) {
        $output += "- Total size: $([math]::Round($totalSize / 1MB, 2)) MB"
    }
    $output += ""

    # Group by directory
    $dirs = $Files | Group-Object Dir

    foreach ($group in $dirs | Sort-Object Name) {
        $dirName = if ($group.Name) { $group.Name } else { "root" }
        $output += "## $dirName"
        $output += ""
        $output += "| File | Size |"
        $output += "|------|------|"

        foreach ($file in $group.Group | Sort-Object Name) {
            $sizeKB = [math]::Round($file.Size / 1KB, 1)
            $output += "| $($file.Name) | ${sizeKB} KB |"
        }
        $output += ""
    }

    return $output -join "`r`n"
}

# Main
Write-Host "Analyzing project structure..." -ForegroundColor Cyan

$files = Get-ProjectFiles
Write-Host "Found $($files.Count) files" -ForegroundColor Green

# Format output
$result = switch ($Format.ToLower()) {
    "markdown" { Format-Markdown -Files $files }
    "md" { Format-Markdown -Files $files }
    default { Format-Tree -Files $files }
}

# Save or display
if ($Output) {
    # Check if file exists
    if (Test-Path $Output) {
        Write-Host "File already exists: $Output" -ForegroundColor Yellow
        $confirm = Read-Host "Overwrite? (y/n)"
        if ($confirm -ne 'y') {
            Write-Host "Cancelled" -ForegroundColor Red
            return
        }
    }

    # Force overwrite
    $result | Out-File -FilePath $Output -Encoding UTF8 -Force
    Write-Host "Saved to: $Output" -ForegroundColor Green

    # Ask to open
    $open = Read-Host "Open file? (y/n)"
    if ($open -eq 'y') {
        Start-Process $Output
    }
} else {
    Write-Output $result
}
