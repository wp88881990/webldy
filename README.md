# 项目部署指南：Cloudflare Pages

## 将React项目部署到Cloudflare Pages的详细教程

### 前提条件
- 拥有Cloudflare账户（如无，需先在[Cloudflare官网](https://www.cloudflare.com/)注册）
- 项目已托管在GitHub、GitLab或Bitbucket等Git仓库
- 本地已安装Node.js和pnpm

### 准备工作

1. **确保项目可以正常构建**
   在本地执行构建命令，确保没有错误：
   ```bash
   pnpm build
   ```
   
   构建成功后，项目文件将生成在`dist/static`目录下（根据您项目的`package.json`配置）

2. **将项目推送到Git仓库**
   确保所有更改已提交并推送到远程仓库：
   ```bash
   git add .
   git commit -m "准备部署到Cloudflare Pages"
   git push
   ```

### 部署步骤

1. **登录Cloudflare账户**
   访问[Cloudflare Pages](https://pages.cloudflare.com/)并登录您的账户

2. **创建新项目**
   - 点击"Create a project"按钮
   - 选择"Connect to Git"
   - 授权Cloudflare访问您的Git仓库
   - 选择您的项目仓库

3. **配置构建设置**
   在项目设置页面，配置以下选项：
   - **框架预设**: 选择"Vite"
   - **构建命令**: `pnpm build`
   - **构建输出目录**: `dist/static`
   - **根目录**: 保持默认(/)

4. **环境变量配置** (如需要)
   如果项目需要环境变量，可以在"Environment variables"部分添加

5. **开始部署**
   点击"Save and Deploy"按钮开始部署过程

6. **等待部署完成**
   Cloudflare Pages将自动拉取代码、安装依赖并执行构建命令
   部署完成后，您将看到部署成功的消息和项目的URL

### 后续操作

1. **访问您的网站**
   通过Cloudflare提供的`.pages.dev`域名访问您的网站

2. **自定义域名设置** (可选)
   如果需要使用自定义域名：
   - 在项目设置中点击"Custom domains"
   - 点击"Set up a custom domain"
   - 输入您的域名并按照指示完成DNS配置

3. **持续部署**
   Cloudflare Pages将自动监听您的Git仓库，当您推送到主分支时，将自动触发新的部署

### 故障排除

- **构建失败**: 检查构建日志，确保所有依赖已正确安装，构建命令正确
- **页面空白**: 检查构建输出目录是否正确设置为`dist/static`
- **资源加载问题**: 确保项目中使用相对路径引用资源

如需更多帮助，请参考[Cloudflare Pages官方文档](https://developers.cloudflare.com/pages/)