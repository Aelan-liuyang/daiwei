@echo off
chcp 65001 >nul

echo 🚀 开始构建和启动本地服务器...
echo.

REM 检查是否存在 dist 目录
if not exist "dist" (
    echo 📦 dist 目录不存在，开始构建...
    call npm run build
) else (
    echo 📦 发现 dist 目录，是否重新构建？(y/n)
    set /p response=
    if /i "%response%"=="y" (
        echo 🔄 重新构建中...
        call npm run build
    )
)

echo.
echo 🌐 启动本地服务器...
echo 📱 请在浏览器中访问: http://localhost:8080
echo ⏹️  按 Ctrl+C 停止服务器
echo.

REM 启动服务器
node serve-dist.js

pause
