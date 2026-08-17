@echo off
echo =========================================
echo 1. Сборка сайта Jekyll...
echo =========================================
bundle exec jekyll build

if %errorlevel% neq 0 (
    echo Ошибка при сборке Jekyll. Проверьте вывод выше.
    pause
    exit /b %errorlevel%
)

echo.
echo =========================================
echo 2. Создание ZIP-архива из папки _site...
echo =========================================

:: Переходим в папку _site, чтобы архивировать её содержимое
cd /d "_site"

:: Удаляем старый архив, если он есть
if exist "site.zip" del "site.zip"

:: Создаём новый архив (используем PowerShell для сжатия)
powershell -command "Compress-Archive -Path * -DestinationPath 'site.zip' -Force"

if %errorlevel% neq 0 (
    echo Ошибка при создании ZIP-архива.
    cd ..
    pause
    exit /b %errorlevel%
)

:: Возвращаемся в корневую папку проекта
cd ..

echo.
echo =========================================
echo Готово! Архив создан: _site\site.zip
echo Вы можете загрузить его в Cloudflare Pages.
echo =========================================
pause