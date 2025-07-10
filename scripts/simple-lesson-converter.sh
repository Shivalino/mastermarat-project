#!/bin/bash

# simple-lesson-converter.sh
# Простой конвертер уроков - тестовая версия

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Структура папок
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
TEMP_UPLOAD_PATH="$PROJECT_ROOT/temp_upload"
CONTENT_PATH="$TEMP_UPLOAD_PATH/content"
TEMPLATES_PATH="$TEMP_UPLOAD_PATH/templates"

# Поддерживаемые языки
SUPPORTED_LANGUAGES=("ru" "ua" "en")

# Создание папок
initialize_folders() {
    echo -e "${GREEN}✅ Инициализация структуры папок...${NC}"
    
    # Создаем базовые папки
    mkdir -p "$TEMP_UPLOAD_PATH"
    mkdir -p "$CONTENT_PATH"
    mkdir -p "$TEMPLATES_PATH"
    
    # Создаем папки для каждого языка
    for lang in "${SUPPORTED_LANGUAGES[@]}"; do
        # Демо папка
        mkdir -p "$CONTENT_PATH/$lang/demo"
        
        # Папки для курсов
        for course in {1..8}; do
            mkdir -p "$CONTENT_PATH/$lang/course$course"
        done
    done
    
    echo -e "${GREEN}✅ Структура папок создана для языков: ${SUPPORTED_LANGUAGES[*]}${NC}"
}

# Создание шаблонов
create_templates() {
    # Создание шаблона для video[i].md
    local video_template_file="$TEMPLATES_PATH/video_template.md"
    if [[ ! -f "$video_template_file" ]]; then
        cat > "$video_template_file" << 'EOF'
# Урок [LESSON_NUMBER]: [TITLE]

## 📹 Видео информация
- **Файл**: video[VIDEO_NUMBER].mp4
- **Превью**: video[VIDEO_NUMBER].jpg
- **Язык**: [LANGUAGE]
- **Курс**: [COURSE]
- **Продолжительность**: [DURATION]

## 🎯 Основные темы
- [TOPIC_1]
- [TOPIC_2]
- [TOPIC_3]

## 🔑 Ключевые моменты
- [KEY_POINT_1]
- [KEY_POINT_2]
- [KEY_POINT_3]

## 📝 Домашнее задание
- [HOMEWORK_1]
- [HOMEWORK_2]

## 🔗 Дополнительные материалы
- [ADDITIONAL_LINK_1]
- [ADDITIONAL_LINK_2]

## 💡 Советы и рекомендации
- [TIP_1]
- [TIP_2]

---
*Создано: [DATE]*
*Обновлено: [DATE]*
EOF
        echo -e "${GREEN}✅ Шаблон video[i].md создан: $video_template_file${NC}"
    fi
}

# Создание нового видео урока
create_video_lesson() {
    echo -e "\n${CYAN}🎬 СОЗДАНИЕ НОВОГО ВИДЕО УРОКА${NC}"
    
    # Выбор языка
    echo -e "\n${YELLOW}Выберите язык:${NC}"
    for i in "${!SUPPORTED_LANGUAGES[@]}"; do
        local lang_code="${SUPPORTED_LANGUAGES[$i]}"
        local lang_name
        case "$lang_code" in
            "ru") lang_name="Русский" ;;
            "ua") lang_name="Украинский" ;;
            "en") lang_name="Английский" ;;
        esac
        echo -e "${WHITE}$((i+1)). $lang_code - $lang_name${NC}"
    done
    
    read -p "Номер языка (1-${#SUPPORTED_LANGUAGES[@]}): " lang_choice
    local selected_lang="${SUPPORTED_LANGUAGES[$((lang_choice-1))]}"
    
    # Выбор типа контента
    echo -e "\n${YELLOW}Выберите тип контента:${NC}"
    echo -e "${WHITE}1. demo - Демо урок${NC}"
    echo -e "${WHITE}2. course - Основной курс${NC}"
    
    read -p "Тип контента (1-2): " content_type
    
    if [[ "$content_type" == "1" ]]; then
        content_folder="demo"
        course_display="Демо"
    else
        read -p "Номер курса (1-8): " course_num
        content_folder="course$course_num"
        course_display="Курс $course_num"
    fi
    
    # Номер видео
    read -p "Номер видео (например: 1, 2, 3...): " video_num
    
    # Название урока
    read -p "Название урока: " lesson_title
    
    # Создаем папку если не существует
    local target_folder="$CONTENT_PATH/$selected_lang/$content_folder"
    mkdir -p "$target_folder"
    
    # Создаем файл video[i].md
    local video_file_name="video$video_num.md"
    local video_file_path="$target_folder/$video_file_name"
    
    # Копируем шаблон и заменяем плейсхолдеры
    local template_path="$TEMPLATES_PATH/video_template.md"
    local content=$(cat "$template_path")
    
    local current_date=$(date '+%Y-%m-%d %H:%M')
    local language_name
    case "$selected_lang" in
        "ru") language_name="Русский" ;;
        "ua") language_name="Украинский" ;;
        "en") language_name="Английский" ;;
    esac
    
    # Заменяем плейсхолдеры
    content="${content//\[LESSON_NUMBER\]/$video_num}"
    content="${content//\[TITLE\]/$lesson_title}"
    content="${content//\[VIDEO_NUMBER\]/$video_num}"
    content="${content//\[LANGUAGE\]/$language_name ($selected_lang)}"
    content="${content//\[COURSE\]/$course_display}"
    content="${content//\[DURATION\]/00:00}"
    content="${content//\[TOPIC_1\]/Основная тема 1}"
    content="${content//\[TOPIC_2\]/Основная тема 2}"
    content="${content//\[TOPIC_3\]/Основная тема 3}"
    content="${content//\[KEY_POINT_1\]/Ключевой момент 1}"
    content="${content//\[KEY_POINT_2\]/Ключевой момент 2}"
    content="${content//\[KEY_POINT_3\]/Ключевой момент 3}"
    content="${content//\[HOMEWORK_1\]/Задание 1}"
    content="${content//\[HOMEWORK_2\]/Задание 2}"
    content="${content//\[ADDITIONAL_LINK_1\]/Дополнительный материал 1}"
    content="${content//\[ADDITIONAL_LINK_2\]/Дополнительный материал 2}"
    content="${content//\[TIP_1\]/Совет 1}"
    content="${content//\[TIP_2\]/Совет 2}"
    content="${content//\[DATE\]/$current_date}"
    
    echo "$content" > "$video_file_path"
    
    echo -e "\n${GREEN}✅ Создан видео урок:${NC}"
    echo -e "${WHITE}   Файл: $video_file_path${NC}"
    echo -e "${WHITE}   Язык: $language_name ($selected_lang)${NC}"
    echo -e "${WHITE}   Контент: $course_display${NC}"
    echo -e "${WHITE}   Название: $lesson_title${NC}"
    
    # Открываем файл в редакторе (если доступен)
    if command -v code &> /dev/null; then
        code "$video_file_path"
    elif command -v nano &> /dev/null; then
        nano "$video_file_path"
    else
        echo -e "${YELLOW}Файл создан, откройте его в редакторе: $video_file_path${NC}"
    fi
}

# Главное меню
main_menu() {
    initialize_folders
    create_templates
    
    while true; do
        clear
        echo -e "${CYAN}🎓 КОНВЕРТЕР УРОКОВ${NC}"
        echo -e "${CYAN}==================${NC}"
        echo ""
        echo -e "${GREEN}1. Создать видео урок (многоязычный)${NC}"
        echo -e "${YELLOW}2. Открыть папку${NC}"
        echo -e "${RED}0. Выход${NC}"
        echo ""
        echo -e "${CYAN}Поддерживаемые языки: ${SUPPORTED_LANGUAGES[*]}${NC}"
        echo ""
        
        read -p "Выбор: " choice
        
        case "$choice" in
            "1") create_video_lesson ;;
            "2") 
                if command -v xdg-open &> /dev/null; then
                    xdg-open "$TEMP_UPLOAD_PATH"
                elif command -v open &> /dev/null; then
                    open "$TEMP_UPLOAD_PATH"
                else
                    echo -e "${YELLOW}Откройте папку: $TEMP_UPLOAD_PATH${NC}"
                fi
                ;;
            "0") return ;;
        esac
        
        if [[ "$choice" != "2" && "$choice" != "0" ]]; then
            read -p "Enter для продолжения..."
        fi
    done
}

# Запуск
main_menu