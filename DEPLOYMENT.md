# 部署到 Vercel 指南

## 项目信息
- **框架**: Next.js 14.0.3
- **包管理器**: pnpm
- **Node.js 版本**: 18+ (推荐)

## 部署方法

### 方法一：通过 Vercel Dashboard（推荐）

1. **准备工作**
   ```bash
   # 确保代码已提交到 Git
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **在 Vercel 上部署**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New" → "Project"
   - 导入您的 Git 仓库
   - Vercel 会自动检测配置

3. **环境变量（如果需要）**
   - 在 Vercel Dashboard 的 "Settings" → "Environment Variables" 中添加
   - 例如：API keys, Database URLs 等

4. **部署**
   - 点击 "Deploy"
   - 每次推送到主分支会自动部署

### 方法二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **登录**
   ```bash
   vercel login
   ```

3. **部署预览**
   ```bash
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

## 配置说明

### vercel.json
项目包含 `vercel.json` 配置文件，包含：
- 构建命令配置
- 区域设置（香港区域 hkg1 以获得更好的中国大陆访问速度）
- 安全响应头

### next.config.mjs
当前配置：
- TypeScript 错误忽略（建议修复后移除）
- 图片未优化（在 Vercel 上可以启用优化）

## 优化建议

### 1. 启用图片优化
修改 `next.config.mjs`：
```javascript
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // 修复 TS 错误后设为 false
  },
  images: {
    unoptimized: false, // 在 Vercel 上启用优化
    domains: [], // 如果使用外部图片，添加域名
  },
}
```

### 2. 添加环境变量
在 Vercel Dashboard 或创建 `.env.local`（不要提交到 Git）：
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 3. 性能优化
- 使用 Next.js Image 组件优化图片
- 启用 ISR (Incremental Static Regeneration) 如果适用
- 配置缓存策略

## 域名配置

### 自定义域名
1. 在 Vercel Dashboard 进入项目
2. 点击 "Settings" → "Domains"
3. 添加您的自定义域名
4. 按照提示配置 DNS 记录

### DNS 记录示例
```
类型    名称    值
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

## 部署后检查清单

- [ ] 网站可以正常访问
- [ ] 所有页面路由正常工作
- [ ] 图片正确加载
- [ ] 响应式设计在移动端正常
- [ ] 语言切换功能正常
- [ ] 无控制台错误
- [ ] 性能评分良好（使用 Lighthouse）

## 持续部署

Vercel 会自动为每个 Git 分支创建预览部署：
- **main/master 分支** → 生产环境
- **其他分支** → 预览环境
- **Pull Requests** → 自动预览部署

## 回滚

如果新部署有问题：
1. 进入 Vercel Dashboard
2. 点击 "Deployments"
3. 找到之前的成功部署
4. 点击 "..." → "Promote to Production"

## 监控和分析

Vercel 提供：
- 实时分析 (Analytics)
- Web Vitals 监控
- 部署日志
- 性能指标

## 常见问题

### 构建失败
- 检查 TypeScript 错误
- 确保所有依赖已正确安装
- 查看构建日志获取详细信息

### 404 错误
- 确保路由配置正确
- 检查 `app/` 目录结构

### 图片加载失败
- 确保图片在 `public/` 目录
- 检查图片路径（应以 `/` 开头）

## 支持

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [Vercel 社区](https://github.com/vercel/vercel/discussions)

