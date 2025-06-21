#!/bin/bash

echo "🚀 开始构建和启动本地服务器..."
echo ""

# 检查是否存在 dist 目录
if [ ! -d "dist" ]; then
    echo "📦 dist 目录不存在，开始构建..."
    npm run build
else
    echo "📦 发现 dist 目录，是否重新构建？(y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        echo "🔄 重新构建中..."
        npm run build
    fi
fi

echo ""
echo "🌐 启动本地服务器..."
echo "📱 请在浏览器中访问: http://localhost:8080"
echo "⏹️  按 Ctrl+C 停止服务器"
echo ""

# 启动服务器
node serve-dist.js
