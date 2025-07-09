param(
    [string]$CommitMessage
)

if ([string]::IsNullOrEmpty($CommitMessage)) {
    Write-Host "Использование: .\git_upload.ps1 -CommitMessage \"Ваше сообщение коммита\""
    exit 1
}

Write-Host "Добавление всех изменений в индекс..."
git add .

Write-Host "Создание коммита с сообщением: \"$CommitMessage\""
git commit -m "$CommitMessage"

Write-Host "Отправка изменений в удаленный репозиторий..."
git push

Write-Host "Операция завершена."

