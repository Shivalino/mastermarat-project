#!/bin/bash

# check-structure.sh
# Проверка структуры папок

echo "📊 Проверка структуры R2..."

total_dirs=$(find . -type d | wc -l)
total_files=$(find . -type f | wc -l)
readme_files=$(find . -name "*.README.md" | wc -l)
placeholders=$(find . -name ".placeholder" | wc -l)
ru_content=$(find content/ru -type f ! -name ".placeholder" 2>/dev/null | wc -l)

echo -e "\nСтатистика:"
echo "  TotalDirs: $total_dirs"
echo "  TotalFiles: $total_files"
echo "  ReadmeFiles: $readme_files"
echo "  Placeholders: $placeholders"
echo "  RuContent: $ru_content"

echo -e "\nГотовность русского контента:"
if [[ -d "content/ru" ]]; then
    for dir in content/ru/*/; do
        if [[ -d "$dir" ]]; then
            dirname=$(basename "$dir")
            file_count=$(find "$dir" -type f ! -name ".placeholder" | wc -l)
            if [[ $file_count -gt 0 ]]; then
                echo "  ✅ $dirname: $file_count файлов"
            else
                echo "  ⏳ $dirname: $file_count файлов"
            fi
        fi
    done
fi
