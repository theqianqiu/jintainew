# 🚀 腾讯云轻量应用服务器部署指南

## 📋 前置要求

1. **腾讯云轻量应用服务器**（CentOS/Ubuntu）
2. **服务器已开放端口**：
   - 3000（Next.js 应用）
   - 或配置 Nginx 反向代理到 80/443 端口

## 🎯 方案一：自动部署（推荐）

### 使用一键部署脚本

```bash
# 在本地项目目录执行
./deploy.sh [服务器IP] [用户名]

# 例如：
./deploy.sh 123.456.789.0 root
```

脚本会自动：
- ✅ 上传项目文件到服务器
- ✅ 安装 Node.js、pnpm、PM2
- ✅ 安装项目依赖
- ✅ 启动应用
- ✅ 配置开机自启

部署完成后访问：`http://[服务器IP]:3000`

---

## 🔧 方案二：手动部署

### 步骤 1：连接到服务器

```bash
ssh root@[服务器IP]
```

### 步骤 2：安装 Node.js 18+

```bash
# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | bash -
yum install -y nodejs

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs
```

### 步骤 3：安装 pnpm 和 PM2

```bash
npm install -g pnpm pm2
```

### 步骤 4：上传项目

**在本地执行：**

```bash
# 方法 1：使用 rsync
rsync -avz --exclude 'node_modules' \
    --exclude '.git' \
    ./ root@[服务器IP]:/var/www/jintai-app/

# 方法 2：使用 Git
# 在服务器上执行：
cd /var/www
git clone https://github.com/theqianqiu/jintainew.git jintai-app
```

### 步骤 5：在服务器上安装依赖

```bash
cd /var/www/jintai-app
pnpm install --prod
```

### 步骤 6：启动应用

```bash
# 使用 PM2 启动
pm2 start ecosystem.config.js

# 保存 PM2 配置
pm2 save

# 配置开机自启
pm2 startup
```

### 步骤 7：配置防火墙

```bash
# CentOS/RHEL (firewalld)
firewall-cmd --permanent --add-port=3000/tcp
firewall-cmd --reload

# Ubuntu/Debian (ufw)
ufw allow 3000/tcp
```

---

## 🌐 配置域名访问（可选）

### 安装 Nginx

```bash
# CentOS/RHEL
yum install -y nginx

# Ubuntu/Debian
apt-get install -y nginx
```

### 配置 Nginx 反向代理

创建配置文件 `/etc/nginx/conf.d/jintai.conf`：

```nginx
server {
    listen 80;
    server_name your-domain.com;  # 替换为您的域名

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

重启 Nginx：

```bash
nginx -t                # 测试配置
systemctl restart nginx # 重启 Nginx
systemctl enable nginx  # 开机自启
```

### 配置 HTTPS（使用 Let's Encrypt）

```bash
# 安装 Certbot
yum install -y certbot python3-certbot-nginx  # CentOS
apt-get install -y certbot python3-certbot-nginx  # Ubuntu

# 获取证书
certbot --nginx -d your-domain.com

# 自动续期
certbot renew --dry-run
```

---

## 📝 常用运维命令

### PM2 管理

```bash
# 查看应用状态
pm2 status

# 查看日志
pm2 logs jintai-app

# 实时日志
pm2 logs jintai-app --lines 100

# 重启应用
pm2 restart jintai-app

# 停止应用
pm2 stop jintai-app

# 删除应用
pm2 delete jintai-app

# 监控
pm2 monit
```

### 更新应用

```bash
# 在本地推送到 Git
cd /Users/qimingyang/github/code
git add .
git commit -m "update"
git push

# 在服务器上拉取并重启
ssh root@[服务器IP]
cd /var/www/jintai-app
git pull
pnpm install --prod
pm2 restart jintai-app
```

或使用自动部署脚本：

```bash
./deploy.sh [服务器IP]
```

---

## 🐛 故障排查

### 应用无法访问

1. **检查应用是否运行：**
   ```bash
   pm2 status
   pm2 logs jintai-app
   ```

2. **检查端口是否监听：**
   ```bash
   netstat -tulpn | grep 3000
   ```

3. **检查防火墙：**
   ```bash
   firewall-cmd --list-ports  # CentOS
   ufw status                  # Ubuntu
   ```

4. **检查腾讯云安全组：**
   - 登录腾讯云控制台
   - 轻量应用服务器 → 防火墙
   - 确保开放了 3000 端口

### 内存不足

```bash
# 减少 PM2 实例数量
# 编辑 ecosystem.config.js，设置 instances: 1
pm2 restart jintai-app
```

### 查看系统资源

```bash
# CPU 和内存使用
top

# 磁盘使用
df -h
```

---

## 📊 性能优化

### 1. 启用 Nginx 缓存

在 Nginx 配置中添加：

```nginx
# 静态资源缓存
location /_next/static {
    proxy_pass http://localhost:3000;
    proxy_cache_valid 200 60m;
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. 启用 Gzip 压缩

在 Nginx 配置中添加：

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_min_length 1000;
```

### 3. 配置 CDN

使用腾讯云 CDN 加速静态资源：
- 登录腾讯云 CDN 控制台
- 添加加速域名
- 配置源站为您的服务器 IP

---

## 🔒 安全建议

1. **修改 SSH 端口**
2. **使用密钥登录，禁用密码登录**
3. **配置防火墙，只开放必要端口**
4. **定期更新系统和软件**
5. **使用 HTTPS**
6. **配置日志监控和备份**

---

## 📞 技术支持

如有问题，请查看：
- PM2 文档：https://pm2.keymetrics.io/
- Nginx 文档：https://nginx.org/
- Next.js 文档：https://nextjs.org/

