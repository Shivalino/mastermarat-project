#!/bin/bash

# test-upload-function.sh
# Тест функции проверки контента и аплоада

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
GRAY='\033[0;37m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# Структура папок
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMP_UPLOAD_PATH="$SCRIPT_DIR/temp_upload"
CONTENT_PATH="$TEMP_UPLOAD_PATH/content"
THUMBNAILS_PATH="$TEMP_UPLOAD_PATH/thumbnails"

# Поддерживаемые языки
SUPPORTED_LANGUAGES=("ru" "ua" "en")

# Функция проверки наличия файлов
check_content_files() {
    local language="$1"
    local content_type="$2"
    local video_filename="$3"
    
    local base_path="$CONTENT_PATH/$language/$content_type"
    local thumbnail_base_path="$THUMBNAILS_PATH/$language/$content_type"
    
    local video_path="$base_path/${video_filename}.mp4"
    local thumbnail_path="$thumbnail_base_path/${video_filename}.jpg"
    local description_path="$base_path/${video_filename}.md"
    
    local has_video=false
    local has_thumbnail=false
    local has_description=false
    
    [[ -f "$video_path" ]] && has_video=true
    [[ -f "$thumbnail_path" ]] && has_thumbnail=true
    [[ -f "$description_path" ]] && has_description=true
    
    echo "$has_video|$has_thumbnail|$has_description|$video_path|$thumbnail_path|$description_path"
}

# Функция аплоада контента
upload_content_to_r2() {
    echo -e "\n${CYAN}☁️  АПЛОАД КОНТЕНТА В R2${NC}"
    
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
    
    local target_folder="$CONTENT_PATH/$selected_lang/$content_folder"
    
    # Проверка существования папки
    if [[ ! -d "$target_folder" ]]; then
        echo -e "${RED}❌ Папка не найдена: $target_folder${NC}"
        return
    fi
    
    # Найти все .md файлы
    local md_files=($(find "$target_folder" -name "*.md" -type f 2>/dev/null))
    
    if [[ ${#md_files[@]} -eq 0 ]]; then
        echo -e "${RED}❌ В папке нет описаний (.md)${NC}"
        return
    fi
    
    echo -e "\n${CYAN}📋 ПРОВЕРКА КОНТЕНТА${NC}"
    echo -e "${WHITE}Папка: $target_folder${NC}"
    echo -e "${WHITE}Язык: $selected_lang${NC}"
    echo -e "${WHITE}Тип: $course_display${NC}"
    
    local ready_to_upload=0
    local all_files=()
    
    # Проверяем каждый md файл
    for md_file in "${md_files[@]}"; do
        local base_name=$(basename "$md_file" .md)
        
        if [[ "$base_name" =~ ^video[0-9]+$ ]]; then
            local results=$(check_content_files "$selected_lang" "$content_folder" "$base_name")
            IFS='|' read -ra RESULT_PARTS <<< "$results"
            
            local has_video="${RESULT_PARTS[0]}"
            local has_thumbnail="${RESULT_PARTS[1]}"
            local has_description="${RESULT_PARTS[2]}"
            local video_path="${RESULT_PARTS[3]}"
            local thumbnail_path="${RESULT_PARTS[4]}"
            local description_path="${RESULT_PARTS[5]}"
            
            echo -e "\n${YELLOW}📄 $base_name${NC}"
            
            if [[ "$has_video" == "true" ]]; then
                echo -e "   ${GREEN}Видео: ✅ $video_path${NC}"
            else
                echo -e "   ${RED}Видео: ❌ $video_path${NC}"
            fi
            
            if [[ "$has_thumbnail" == "true" ]]; then
                echo -e "   ${GREEN}Превью: ✅ $thumbnail_path${NC}"
            else
                echo -e "   ${RED}Превью: ❌ $thumbnail_path${NC}"
            fi
            
            if [[ "$has_description" == "true" ]]; then
                echo -e "   ${GREEN}Описание: ✅ $description_path${NC}"
            else
                echo -e "   ${RED}Описание: ❌ $description_path${NC}"
            fi
            
            local is_ready=false
            if [[ "$has_video" == "true" && "$has_thumbnail" == "true" && "$has_description" == "true" ]]; then
                is_ready=true
                ((ready_to_upload++))
            fi
            
            all_files+=("$base_name|$is_ready|$video_path|$thumbnail_path|$description_path")
        fi
    done
    
    if [[ ${#all_files[@]} -eq 0 ]]; then
        echo -e "\n${RED}❌ Не найдено файлов для аплоада${NC}"
        return
    fi
    
    echo -e "\n${CYAN}📊 СТАТИСТИКА:${NC}"
    echo -e "${WHITE}   Всего уроков: ${#all_files[@]}${NC}"
    if [[ $ready_to_upload -gt 0 ]]; then
        echo -e "${GREEN}   Готовы к аплоаду: $ready_to_upload${NC}"
    else
        echo -e "${RED}   Готовы к аплоаду: $ready_to_upload${NC}"
    fi
    
    local not_ready=$((${#all_files[@]} - ready_to_upload))
    if [[ $not_ready -gt 0 ]]; then
        echo -e "${YELLOW}   Не готовы: $not_ready${NC}"
    else
        echo -e "${GREEN}   Не готовы: $not_ready${NC}"
    fi
    
    if [[ $ready_to_upload -eq 0 ]]; then
        echo -e "\n${RED}❌ Нет готовых к аплоаду файлов${NC}"
        return
    fi
    
    # Выбор режима
    echo -e "\n${YELLOW}Выберите действие:${NC}"
    echo -e "${WHITE}1. Сухой прогон (показать что будет загружено)${NC}"
    echo -e "${WHITE}2. Загрузить в DEV среду${NC}"
    echo -e "${WHITE}3. Загрузить в PROD среду${NC}"
    echo -e "${RED}0. Отмена${NC}"
    
    read -p "Ваш выбор: " upload_choice
    
    if [[ "$upload_choice" == "0" ]]; then
        echo -e "${YELLOW}Операция отменена${NC}"
        return
    fi
    
    local is_dry_run=false
    local environment="dev"
    
    if [[ "$upload_choice" == "1" ]]; then
        is_dry_run=true
    elif [[ "$upload_choice" == "3" ]]; then
        environment="prod"
    fi
    
    echo -e "\n${CYAN}🚀 НАЧИНАЕМ АПЛОАД${NC}"
    if [[ "$is_dry_run" == "true" ]]; then
        echo -e "${YELLOW}Режим: DRY RUN${NC}"
    else
        echo -e "${GREEN}Режим: ${environment^^}${NC}"
    fi
    
    local uploaded_count=0
    
    for file_info in "${all_files[@]}"; do
        IFS='|' read -ra FILE_PARTS <<< "$file_info"
        local base_name="${FILE_PARTS[0]}"
        local is_ready="${FILE_PARTS[1]}"
        local video_path="${FILE_PARTS[2]}"
        local thumbnail_path="${FILE_PARTS[3]}"
        local description_path="${FILE_PARTS[4]}"
        
        if [[ "$is_ready" == "true" ]]; then
            echo -e "\n${GREEN}📤 Загружаем: $base_name${NC}"
            
            # Подготавливаем пути в R2
            local r2_video_path="content/$selected_lang/$content_folder/${base_name}.mp4"
            local r2_thumbnail_path="thumbnails/$selected_lang/$content_folder/${base_name}.jpg"
            local r2_description_path="content/$selected_lang/$content_folder/${base_name}.md"
            
            if [[ "$is_dry_run" == "true" ]]; then
                echo -e "   ${GRAY}[DRY RUN] Видео: $video_path → $r2_video_path${NC}"
                echo -e "   ${GRAY}[DRY RUN] Превью: $thumbnail_path → $r2_thumbnail_path${NC}"
                echo -e "   ${GRAY}[DRY RUN] Описание: $description_path → $r2_description_path${NC}"
                ((uploaded_count++))
            else
                # Реальный аплоад через Node.js скрипт
                echo -e "   ${GRAY}Вызываем: node scripts/upload_content_to_r2.js --env $environment --course $content_folder${NC}"
                
                # Здесь должен быть вызов реального скрипта
                # Пока делаем имитацию
                echo -e "   ${GREEN}✅ [СИМУЛЯЦИЯ] Успешно загружено: $base_name${NC}"
                ((uploaded_count++))
            fi
        fi
    done
    
    echo -e "\n${GREEN}✅ АПЛОАД ЗАВЕРШЕН${NC}"
    echo -e "${WHITE}   Обработано: $uploaded_count из $ready_to_upload готовых файлов${NC}"
    
    if [[ "$is_dry_run" == "false" && $uploaded_count -gt 0 ]]; then
        echo -e "\n${CYAN}🔗 Проверить загруженные файлы:${NC}"
        echo -e "${CYAN}   https://api.mastermarat.com/video/$selected_lang/$content_folder/${NC}"
    fi
}

# Главное меню
main_menu() {
    while true; do
        clear
        echo -e "${CYAN}🎓 ТЕСТ ФУНКЦИИ АПЛОАДА${NC}"
        echo -e "${CYAN}========================${NC}"
        echo ""
        echo -e "${MAGENTA}1. Аплоад контента в R2${NC}"
        echo -e "${YELLOW}2. Показать структуру файлов${NC}"
        echo -e "${RED}0. Выход${NC}"
        echo ""
        echo -e "${CYAN}Поддерживаемые языки: ${SUPPORTED_LANGUAGES[*]}${NC}"
        echo ""
        
        read -p "Выбор: " choice
        
        case "$choice" in
            "1") upload_content_to_r2 ;;
            "2") 
                echo -e "\n${CYAN}📁 Структура temp_upload:${NC}"
                tree "$TEMP_UPLOAD_PATH" -I "*.placeholder" 2>/dev/null || find "$TEMP_UPLOAD_PATH" -type f | head -20
                ;;
            "0") return ;;
        esac
        
        if [[ "$choice" != "0" ]]; then
            read -p "Enter для продолжения..."
        fi
    done
}

# Запуск
main_menu