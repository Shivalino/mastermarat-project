# 📘 Мини-мануал: Работа с Cloudflare R2 через `wrangler`

## 🔧 Подготовка

1. Проверка установленного `wrangler`:
   ```bash
   wrangler --version
   ```

2. Авторизация:
   ```bash
   wrangler login
   ```

3. Убедись, что создан R2 bucket (например: `mastermarat-videos`) в Cloudflare Dashboard.

---

## 📂 Просмотр содержимого R2-бакета

```bash
wrangler r2 object list mastermarat-videos
```

Фильтрация по "папке" (префиксу):
```bash
wrangler r2 object list mastermarat-videos --prefix="videos/course1/"
```

---

## 📤 Загрузка файла

```bash
wrangler r2 object put mastermarat-videos/videos/course1/lesson1.mp4 --file="lesson1.mp4"
```

- Префиксы (`videos/course1/`) выступают как "директории"
- Создание "папок" происходит автоматически при заливке

---

## 🧹 Удаление файла

```bash
wrangler r2 object delete mastermarat-videos/videos/course1/lesson1.mp4
```

---

## 📦 Загрузка всех файлов из папки (PowerShell)

```powershell
Get-ChildItem "videos/course1" | ForEach-Object {
  wrangler r2 object put mastermarat-videos/videos/course1/$($_.Name) --file=$_.FullName
}
```

---

## 🧠 Полезно знать

- R2 — это объектное хранилище: "директории" — это просто ключи с префиксами.
- Повторный `put` перезаписывает файл.
- Можно использовать `--prefix` для логической структуры, как в обычной файловой системе.