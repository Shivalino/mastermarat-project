#!/bin/bash

# create-r2-multilang-structure.sh
# Создает структуру папок для многоязычного контента в temp_upload

echo "🌐 Создание многоязычной структуры для R2 Storage..."

# Базовая директория
BASE_DIR="temp_upload"

# Языки и курсы
LANGUAGES=("ru" "ua" "en")
COURSES=(1 2 3 4 5 6 7 8)

# Очистка существующей структуры (опционально)
read -p "Очистить существующую структуру temp_upload? (y/n): " clear_existing
if [[ "$clear_existing" == "y" ]]; then
    if [[ -d "$BASE_DIR" ]]; then
        rm -rf "$BASE_DIR"
        echo "🗑️  Старая структура удалена"
    fi
fi

# Создаем базовую директорию
mkdir -p "$BASE_DIR"

# Счетчики для статистики
dirs_created=0
files_created=0

# Создаем структуру для каждого языка
for lang in "${LANGUAGES[@]}"; do
    echo -e "\n📂 Создание структуры для языка: $lang"

    # CONTENT - основные видео
    echo "  📹 Content..."

    # Демо-курс
    demo_path="$BASE_DIR/content/$lang/demo"
    mkdir -p "$demo_path"
    ((dirs_created++))

    if [[ "$lang" == "ru" ]]; then
        # Для русского создаем файлы-заглушки с описанием
        cat > "$demo_path/intro.mp4.README.md" << 'EOF'
# Приветственное видео (3-5 минут)
- Знакомство с Маратом
- О чем курс
- Что получите
EOF
        ((files_created++))

        cat > "$demo_path/lesson1.mp4.README.md" << 'EOF'
# Урок 1: Основы остеопатии (7-10 минут)
- Как работает тело
- Базовые принципы
- Первое упражнение
EOF
        ((files_created++))

        cat > "$demo_path/lesson2.mp4.README.md" << 'EOF'
# Урок 2: Простые техники (7-10 минут)
- Техника для спины
- Демонстрация
- Домашнее задание
EOF
        ((files_created++))

        cat > "$demo_path/lesson3.mp4.README.md" << 'EOF'
# Урок 3: Результаты (5-7 минут)
- Отзывы учеников
- Ваши возможности
- Специальное предложение
EOF
        ((files_created++))
    else
        # Для других языков - просто placeholder
        touch "$demo_path/.placeholder"
        ((files_created++))
    fi

    # Основные курсы
    for course in "${COURSES[@]}"; do
        course_path="$BASE_DIR/content/$lang/course$course"
        mkdir -p "$course_path"
        ((dirs_created++))

        if [[ "$lang" == "ru" && "$course" == "1" ]]; then
            # Для первого русского курса создаем описания уроков
            cat > "$course_path/week1.mp4.README.md" << 'EOF'
# Неделя 1: Введение в здоровье
- Философия здоровья
- Основные принципы
- План курса
EOF
            ((files_created++))

            cat > "$course_path/week2.mp4.README.md" << 'EOF'
# Неделя 2: Дыхание
- Правильное дыхание
- Упражнения
- Ежедневная практика
EOF
            ((files_created++))

            cat > "$course_path/week3.mp4.README.md" << 'EOF'
# Неделя 3: Осанка
- Анализ осанки
- Коррекция
- Упражнения для спины
EOF
            ((files_created++))

            cat > "$course_path/week4.mp4.README.md" << 'EOF'
# Неделя 4: Движение
- Биомеханика
- Правильная ходьба
- Интеграция знаний
EOF
            ((files_created++))
        else
            # Для остальных - placeholder
            touch "$course_path/.placeholder"
            ((files_created++))
        fi
    done

    # THUMBNAILS - превью
    echo "  🖼️  Thumbnails..."

    # Демо превью
    thumb_demo_path="$BASE_DIR/thumbnails/$lang/demo"
    mkdir -p "$thumb_demo_path"
    ((dirs_created++))

    if [[ "$lang" == "ru" ]]; then
        for thumb in intro.jpg lesson1.jpg lesson2.jpg lesson3.jpg; do
            touch "$thumb_demo_path/$thumb"
            ((files_created++))
        done
    else
        touch "$thumb_demo_path/.placeholder"
        ((files_created++))
    fi

    # Превью курсов
    for course in "${COURSES[@]}"; do
        thumb_course_path="$BASE_DIR/thumbnails/$lang/course$course"
        mkdir -p "$thumb_course_path"
        ((dirs_created++))

        if [[ "$lang" == "ru" && "$course" == "1" ]]; then
            for thumb in week1.jpg week2.jpg week3.jpg week4.jpg; do
                touch "$thumb_course_path/$thumb"
                ((files_created++))
            done
        else
            touch "$thumb_course_path/.placeholder"
            ((files_created++))
        fi
    done

    # MATERIALS - дополнительные материалы
    echo "  📚 Materials..."

    for course in "${COURSES[@]}"; do
        materials_path="$BASE_DIR/materials/$lang/course$course"
        mkdir -p "$materials_path"
        ((dirs_created++))

        if [[ "$lang" == "ru" && "$course" == "1" ]]; then
            cat > "$materials_path/workbook.pdf.README.md" << 'EOF'
# Рабочая тетрадь курса 1
Содержит упражнения и задания
EOF
            ((files_created++))

            cat > "$materials_path/checklist.pdf.README.md" << 'EOF'
# Чек-лист здоровых привычек
Ежедневный трекер
EOF
            ((files_created++))

            cat > "$materials_path/exercises.pdf.README.md" << 'EOF'
# Комплекс упражнений
Иллюстрированное руководство
EOF
            ((files_created++))
        else
            touch "$materials_path/.placeholder"
            ((files_created++))
        fi
    done

    # PROMO - промо материалы
    echo "  🎬 Promo..."

    # Основная промо папка
    promo_path="$BASE_DIR/promo/$lang"
    mkdir -p "$promo_path"
    ((dirs_created++))

    # Подпапки промо
    promo_dirs=("testimonials" "free-lessons")
    for dir in "${promo_dirs[@]}"; do
        sub_path="$promo_path/$dir"
        mkdir -p "$sub_path"
        ((dirs_created++))

        if [[ "$lang" == "ru" ]]; then
            if [[ "$dir" == "testimonials" ]]; then
                for review in review1.mp4 review2.mp4 review3.mp4; do
                    cat > "$sub_path/${review}.README.md" << 'EOF'
# Отзыв клиента
Видео-отзыв о результатах
EOF
                    ((files_created++))
                done
            elif [[ "$dir" == "free-lessons" ]]; then
                cat > "$sub_path/back-pain.mp4.README.md" << 'EOF'
# Избавление от боли в спине
Бесплатный мини-урок
EOF
                ((files_created++))

                cat > "$sub_path/neck-stretch.mp4.README.md" << 'EOF'
# Растяжка для шеи
Быстрая техника
EOF
                ((files_created++))

                cat > "$sub_path/breathing.mp4.README.md" << 'EOF'
# Правильное дыхание
Базовое упражнение
EOF
                ((files_created++))
            fi
        else
            touch "$sub_path/.placeholder"
            ((files_created++))
        fi
    done
done

# Создаем README для структуры
current_date=$(date '+%Y-%m-%d %H:%M')
cat > "$BASE_DIR/README-STRUCTURE.md" << EOF
# 📁 Структура R2 Storage - MasterMarat

Дата создания: $current_date

## 📊 Статистика
- Языков: ${#LANGUAGES[@]}
- Курсов: ${#COURSES[@]}
- Папок создано: $dirs_created
- Файлов создано: $files_created

## 🌐 Языки
- **ru** - Русский (основной контент)
- **ua** - Украинский (заглушки)
- **en** - Английский (заглушки)

## 📹 Готовность контента

### Русский (ru)
- ✅ demo/ - Описания для 4 видео
- ✅ course1/ - Описания для 4 видео
- ⏳ course2-8/ - Заглушки

### Украинский (ua)
- ⏳ Все папки с заглушками

### Английский (en)
- ⏳ Все папки с заглушками

## 🚀 Следующие шаги

1. Загрузить реальные видео в папки:
   - temp_upload/content/ru/demo/
   - temp_upload/content/ru/course1/

2. Создать превью (thumbnails):
   - temp_upload/thumbnails/ru/demo/
   - temp_upload/thumbnails/ru/course1/

3. Загрузить в R2:
   \`\`\`bash
   npm run upload
   \`\`\`

## 📝 Примечания

- Файлы .README.md - это описания того, что должно быть в видео
- Файлы .placeholder - заглушки для будущего контента
- При загрузке в R2 эти файлы игнорируются
EOF

# Создаем скрипт для быстрой проверки
cat > "$BASE_DIR/check-structure.sh" << 'EOF'
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
EOF

chmod +x "$BASE_DIR/check-structure.sh"

echo -e "\n✅ Структура создана успешно!"
echo "📁 Расположение: $BASE_DIR"
echo "📊 Статистика:"
echo "   - Папок создано: $dirs_created"
echo "   - Файлов создано: $files_created"

echo -e "\n💡 Следующие шаги:"
echo "1. Загрузите видео в:"
echo "   - temp_upload/content/ru/demo/*.mp4"
echo "   - temp_upload/content/ru/course1/*.mp4"
echo "2. Загрузите превью в:"
echo "   - temp_upload/thumbnails/ru/demo/*.jpg"
echo "   - temp_upload/thumbnails/ru/course1/*.jpg"
echo "3. Запустите загрузку в R2:"
echo "   npm run upload"

echo -e "\n📝 Для проверки структуры запустите:"
echo "   cd temp_upload && ./check-structure.sh"