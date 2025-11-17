#!/bin/bash

# 腾讯云轻量应用服务器部署脚本
# 使用方法: ./deploy.sh [服务器IP] [用户名]

SERVER_IP=$1
SERVER_USER=${2:-root}
APP_NAME="jintai-app"
REMOTE_PATH="/var/www/$APP_NAME"

if [ -z "$SERVER_IP" ]; then
    echo "❌ 请提供服务器IP地址"
    echo "使用方法: ./deploy.sh [服务器IP] [用户名(默认root)]"
    exit 1
fi

echo "🚀 开始部署到腾讯云服务器..."
echo "📍 服务器: $SERVER_USER@$SERVER_IP"
echo "📁 远程路径: $REMOTE_PATH"
echo ""

# 1. 在服务器上创建目录
echo "📁 创建远程目录..."
ssh $SERVER_USER@$SERVER_IP "mkdir -p $REMOTE_PATH"

# 2. 上传文件
echo "📤 上传文件到服务器..."
rsync -avz --exclude 'node_modules' \
    --exclude '.git' \
    --exclude '.next/cache' \
    --exclude 'cloudbase-framework' \
    ./ $SERVER_USER@$SERVER_IP:$REMOTE_PATH/

# 3. 在服务器上安装依赖和启动
echo "📦 在服务器上安装依赖..."
ssh $SERVER_USER@$SERVER_IP << 'ENDSSH'
cd /var/www/jintai-app

# 安装 Node.js 和 pnpm（如果还没安装）
if ! command -v node &> /dev/null; then
    echo "📥 安装 Node.js..."
    curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi

if ! command -v pnpm &> /dev/null; then
    echo "📥 安装 pnpm..."
    npm install -g pnpm
fi

# 安装 PM2（如果还没安装）
if ! command -v pm2 &> /dev/null; then
    echo "📥 安装 PM2..."
    npm install -g pm2
fi

# 安装项目依赖
echo "📦 安装项目依赖..."
pnpm install --prod

# 重启应用
echo "🔄 重启应用..."
pm2 delete jintai-app 2>/dev/null || true
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# 配置防火墙（如果需要）
echo "🔓 配置防火墙..."
firewall-cmd --permanent --add-port=3000/tcp 2>/dev/null || true
firewall-cmd --reload 2>/dev/null || true

ENDSSH

echo ""
echo "✅ 部署完成！"
echo "🌐 访问地址: http://$SERVER_IP:3000"
echo ""
echo "📝 常用命令："
echo "  查看日志: ssh $SERVER_USER@$SERVER_IP 'pm2 logs jintai-app'"
echo "  重启应用: ssh $SERVER_USER@$SERVER_IP 'pm2 restart jintai-app'"
echo "  停止应用: ssh $SERVER_USER@$SERVER_IP 'pm2 stop jintai-app'"

