# 项目部署指南

## 项目介绍
这是一个基于React、TypeScript和Vite构建的单页应用，使用Tailwind CSS进行样式设计。本指南将帮助您将项目成功部署到Cloudflare Pages。

## 环境要求
- Node.js v18+
- pnpm v8+
- Git

## 本地开发
1. 克隆仓库
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

4. 构建项目
```bash
pnpm build
```

## Cloudflare Pages部署步骤

### 准备工作
1. 确保您的代码已推送到GitHub仓库
2. 创建Cloudflare账户并登录：https://dash.cloudflare.com/
3. 在Cloudflare控制台中选择"Pages"

### 部署流程
1. 点击"连接到Git"
2. 选择您的项目仓库
3. 在构建设置中配置：
   - 框架预设：**None**（不要选择Vite，我们需要自定义配置）
   - 构建命令：`pnpm install --no-frozen-lockfile && pnpm build`
   - 输出目录：`dist/static`
   - 根目录：留空（使用默认值）

4. 环境变量（可选）：
   如果项目需要环境变量，可以在此处添加

5. 点击"保存并部署"

## 解决常见部署问题

### 锁文件不匹配错误
如果遇到`ERR_PNPM_OUTDATED_LOCKFILE`错误：

1. 确保本地环境已安装最新依赖：
```bash
pnpm install
```

2. 提交更新后的锁文件：
```bash
git add pnpm-lock.yaml
git commit -m "Update lockfile"
git push
```

3. 或者在Cloudflare构建命令中使用：
```bash
pnpm install --no-frozen-lockfile && pnpm build
```

### 构建命令配置
在Cloudflare Pages设置中，确保构建命令设置为：
```bash
pnpm install --no-frozen-lockfile && pnpm build
```

这将禁用CI环境中的锁文件检查，解决大多数依赖安装问题。

## 故障排除

### 依赖安装失败
- 确保Node.js版本兼容（项目推荐v22+）
- 检查网络连接，确保可以访问npm仓库

### 构建失败
- 检查是否有编译错误：在本地运行`pnpm build`测试
- 确保所有环境变量都已正确设置
- 检查输出目录是否与vite.config.ts中的配置一致

## 项目结构说明
- `src/` - 源代码目录
- `public/` - 静态资源
- `dist/` - 构建输出目录（部署目标）

## 联系方式
如有部署问题，请联系项目维护者获取支持。