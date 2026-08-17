# build_and_pack.ps1
$logFile = "build_log.txt"
"=========================================" | Out-File -FilePath $logFile
"Starting build at $(Get-Date)" | Out-File -FilePath $logFile -Append
"=========================================" | Out-File -FilePath $logFile -Append

Write-Host "1. Building Jekyll site..." -ForegroundColor Cyan
"1. Building Jekyll site..." | Out-File -FilePath $logFile -Append

# Запускаем Jekyll и ждём завершения
$process = Start-Process -FilePath "bundle" -ArgumentList "exec jekyll build" -Wait -PassThru -NoNewWindow
if ($process.ExitCode -ne 0) {
    Write-Host "Jekyll build failed with code $($process.ExitCode)" -ForegroundColor Red
    "Jekyll build failed with code $($process.ExitCode)" | Out-File -FilePath $logFile -Append
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "Jekyll build completed successfully." -ForegroundColor Green
"Jekyll build completed successfully." | Out-File -FilePath $logFile -Append

Write-Host "`n2. Checking if _site folder exists..." -ForegroundColor Cyan
"2. Checking if _site folder exists..." | Out-File -FilePath $logFile -Append

if (-not (Test-Path "_site")) {
    Write-Host "_site folder not found!" -ForegroundColor Red
    "_site folder not found!" | Out-File -FilePath $logFile -Append
    Read-Host "Press Enter to exit"
    exit
}

Write-Host "_site folder exists." -ForegroundColor Green
"_site folder exists." | Out-File -FilePath $logFile -Append

Write-Host "`n3. Cleaning up unnecessary files from _site..." -ForegroundColor Cyan
"3. Cleaning up unnecessary files from _site..." | Out-File -FilePath $logFile -Append

# Удаляем файлы скриптов и логов из папки _site
Remove-Item -Path "_site\*.ps1" -ErrorAction SilentlyContinue
Remove-Item -Path "_site\*.bat" -ErrorAction SilentlyContinue
Remove-Item -Path "_site\build_log.txt" -ErrorAction SilentlyContinue

Write-Host "Cleanup complete." -ForegroundColor Green
"Cleanup complete." | Out-File -FilePath $logFile -Append

Write-Host "`n4. Creating ZIP archive..." -ForegroundColor Cyan
"4. Creating ZIP archive..." | Out-File -FilePath $logFile -Append

Set-Location "_site"

if (Test-Path "site.zip") {
    Remove-Item "site.zip" -Force
}

# Используем ту же команду, которая работает вручную
Compress-Archive -Path * -DestinationPath "site.zip" -Force

if ($LASTEXITCODE -ne 0) {
    Write-Host "Archive creation failed!" -ForegroundColor Red
    "Archive creation failed!" | Out-File -FilePath $logFile -Append
} else {
    Write-Host "`nDone! Archive created: _site\site.zip" -ForegroundColor Green
    "Done! Archive created: _site\site.zip" | Out-File -FilePath $logFile -Append
}

Set-Location ..

Write-Host "`nLog saved to: $logFile" -ForegroundColor Yellow
Read-Host "Press Enter to exit"