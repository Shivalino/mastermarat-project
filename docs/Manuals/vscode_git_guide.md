# VS Code Git Guide - Работа с GitHub в mastermarat-project

## 🔧 Базовые команды Git в VS Code

### **Способ 1: Через VS Code интерфейс (рекомендуемый)**

#### **Source Control панель:**
1. **Ctrl+Shift+G** - открыть Source Control
2. **Staged Changes** - файлы готовые к коммиту
3. **Changes** - измененные файлы
4. **"+"** рядом с файлом - добавить в staging
5. **"-"** рядом с файлом - убрать из staging

#### **Процесс коммита:**
1. **Внесите изменения** в файлы
2. **Source Control** → видите список измененных файлов
3. **"+" у каждого файла** или **"Stage All Changes"**
4. **Введите commit message** в поле сверху
5. **Ctrl+Enter** или кнопка **"Commit"**
6. **Sync Changes** или **"Push"** для отправки на GitHub

### **Способ 2: Через терминал VS Code**

#### **Открытие терминала:**
```bash
Ctrl+` (backtick) - открыть терминал VS Code
```

#### **Основные команды:**
```bash
# Проверка статуса
git status

# Добавление файлов
git add .                    # все файлы
git add workers/api/src/     # конкретная папка
git add package.json         # конкретный файл

# Коммит
git commit -m "Описание изменений"

# Отправка на GitHub
git push origin main

# Получение изменений с GitHub
git pull origin main
```

## 📝 Шаблоны commit messages для проекта

### **Структура сообщения:**
```
[тип]: краткое описание

Детальное описание (если нужно)
```

### **Типы изменений:**
```bash
feat: добавление новой функциональности
fix: исправление ошибок
docs: обновление документации
style: форматирование кода
refactor: рефакторинг без изменения функциональности
test: добавление тестов
chore: технические задачи
```

### **Примеры для mastermarat-project:**
```bash
# Новая функциональность
git commit -m "feat: добавлен endpoint для webhook SendPulse"

# Исправление ошибки  
git commit -m "fix: исправлена генерация токенов пользователей"

# Обновление конфигурации
git commit -m "chore: обновлен package.json с новыми скриптами"

# Документация
git commit -m "docs: добавлен README для API endpoints"

# Настройка инфраструктуры
git commit -m "chore: настроена конфигурация ESLint и Prettier"
```

## 🔄 Рабочий процесс (workflow)

### **Ежедневная работа:**
```bash
1. Начало дня: git pull origin main
2. Работа над задачами
3. Коммит изменений: git add . && git commit -m "описание"
4. Отправка: git push origin main
```

### **При работе с крупными изменениями:**
```bash
1. Создание ветки: git checkout -b feature/новая-функция
2. Работа в ветке
3. Коммиты в ветку
4. Merge в main через Pull Request на GitHub
```

## 🗂️ Структура файлов для коммитов

### **Что коммитить:**
```bash
✅ Исходный код (src/, scripts/)
✅ Конфигурационные файлы (package.json, wrangler.toml)
✅ Документацию (README.md, docs/)
✅ Настройки проекта (.gitignore, .prettierrc)
```

### **Что НЕ коммитить (уже в .gitignore):**
```bash
❌ node_modules/
❌ .wrangler/
❌ .env файлы
❌ Логи (*.log)
❌ Временные файлы
```

## 📋 Частые сценарии

### **Добавление новых файлов:**
```bash
# VS Code
Source Control → "+" рядом с новыми файлами → Commit message → Commit

# Terminal
git add новый-файл.js
git commit -m "feat: добавлен новый файл для обработки платежей"
git push origin main
```

### **Обновление существующих файлов:**
```bash
# VS Code  
Файл изменился → Source Control → Stage → Commit → Push

# Terminal
git add измененный-файл.js
git commit -m "fix: исправлена обработка ошибок R2"
git push origin main
```

### **Массовые изменения:**
```bash
# VS Code
Source Control → "Stage All Changes" → Commit message → Commit → Push

# Terminal
git add .
git commit -m "chore: обновлена структура проекта и добавлены тесты"
git push origin main
```

## 🚀 Специфичные команды для mastermarat-project

### **Деплой Worker:**
```bash
# Локальная разработка
cd workers/api
npm run dev

# Деплой в продакшен
npm run deploy

# Проверка логов
npm run logs
```

### **Обновление зависимостей:**
```bash
cd workers/api
npm update
git add package.json package-lock.json
git commit -m "chore: обновлены зависимости Wrangler"
git push origin main
```

### **Добавление нового контента:**
```bash
# Добавление видео/thumbnails (не в Git, только документируем)
git add docs/content-inventory.md
git commit -m "docs: обновлен список загруженного контента"
```

## 🔧 Настройка VS Code для Git

### **Полезные расширения:**
- **GitLens** - расширенная Git интеграция
- **Git Graph** - визуализация истории
- **GitHub Pull Requests** - работа с PR

### **Настройки VS Code (.vscode/settings.json):**
```json
{
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true
}
```

## ⚠️ Важные правила

### **НЕ коммитить:**
- Секретные ключи и токены
- Личную информацию
- Большие медиа файлы (видео)
- Временные файлы разработки

### **Всегда проверять:**
```bash
git status              # что будет закоммичено
git diff                # какие изменения
git log --oneline -5    # последние коммиты
```

### **При ошибках:**
```bash
# Отмена последнего коммита (локально)
git reset --soft HEAD~1

# Отмена изменений в файле
git checkout -- имя-файла

# Синхронизация с GitHub при конфликтах
git pull origin main
# решить конфликты
git push origin main
```

## 📱 Быстрые клавиши VS Code для Git

```bash
Ctrl+Shift+G    - Source Control панель
Ctrl+Shift+P    - Command Palette
Ctrl+`          - Терминал
Ctrl+Enter      - Коммит в Source Control
F1              - Команды Git через палитру
```

---

**Успешной работы с Git в VS Code! Всегда используйте осмысленные commit messages и регулярно пушьте изменения на GitHub.** 🚀