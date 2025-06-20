# 山东岱威创新管业官网

> 专业的管道系统解决方案提供商

## 📋 项目简介

山东岱威创新管业有限公司官方网站，采用现代化的前端技术栈构建，为用户提供优质的管道产品展示和企业信息服务。

## 🚀 技术栈

- **前端框架**: Vue 3.4+ (Composition API)
- **开发语言**: TypeScript 5.0+
- **构建工具**: Vite 5.0+
- **UI 组件库**: Ant Design Vue 4.0+
- **CSS 框架**: Tailwind CSS 3.0+
- **状态管理**: Pinia
- **路由管理**: Vue Router 4
- **轮播组件**: Swiper.js
- **代码规范**: ESLint + Prettier

## 🏗️ 项目结构

```
daiwei/
├── public/                 # 静态资源
│   ├── sitemap.xml        # 网站地图
│   └── robots.txt         # 搜索引擎爬虫配置
├── src/
│   ├── assets/            # 资源文件
│   │   ├── css/          # 样式文件
│   │   └── images/       # 图片资源
│   ├── components/        # 公共组件
│   │   ├── Header.vue    # 头部导航
│   │   ├── Footer.vue    # 底部信息
│   │   ├── LazyImage.vue # 图片懒加载
│   │   ├── LoadingSpinner.vue # 加载动画
│   │   ├── Toast.vue     # 消息提示
│   │   ├── ResponsiveGrid.vue # 响应式网格
│   │   ├── ResponsiveContainer.vue # 响应式容器
│   │   └── MobileNavigation.vue # 移动端导航
│   ├── composables/       # 组合式函数
│   │   ├── useSEO.ts     # SEO 管理
│   │   └── useResponsive.ts # 响应式工具
│   ├── router/           # 路由配置
│   ├── stores/           # 状态管理
│   ├── styles/           # 全局样式
│   │   └── design-system.css # 设计系统
│   ├── utils/            # 工具函数
│   │   ├── performance.ts # 性能监控
│   │   └── seo-checker.ts # SEO 检查
│   └── views/            # 页面组件
│       └── home/         # 主要页面
│           ├── Index.vue     # 首页
│           ├── About.vue     # 关于我们
│           ├── Products.vue  # 产品服务
│           ├── Cases.vue     # 工程案例
│           ├── News.vue      # 新闻中心
│           └── Contact.vue   # 联系我们
├── .vscode/              # VS Code 配置
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.js    # Tailwind 配置
├── .eslintrc.js          # ESLint 配置
└── .prettierrc           # Prettier 配置
```

## ✨ 主要功能

### 🎨 现代化 UI/UX

- 响应式设计，完美适配各种设备
- 现代化的设计系统和组件库
- 流畅的动画效果和交互体验
- 深色模式支持

### 🔍 SEO 优化

- 完整的 SEO 元数据管理
- 结构化数据支持
- 自动生成 sitemap.xml
- 搜索引擎友好的 URL 结构

### ⚡ 性能优化

- 图片懒加载
- 代码分割和按需加载
- 资源压缩和缓存策略
- 性能监控和分析

### 📱 移动端优化

- 移动端专用导航
- 触摸友好的交互设计
- 自适应布局和字体大小

### 🌐 国际化准备

- 多语言支持架构
- 灵活的内容管理系统

## 🛠️ 开发环境

### 环境要求

- Node.js 18.0+
- npm 9.0+ 或 yarn 1.22+

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

### 类型检查

```bash
npm run type-check
```

## 📊 性能指标

- **首屏加载时间**: < 2s
- **Lighthouse 评分**: 95+
- **Core Web Vitals**: 优秀
- **SEO 评分**: 100

## 🔧 配置说明

### 环境变量

创建 `.env` 文件配置环境变量：

```env
VITE_PORT=3000
VITE_API_URL=https://api.daiwei-pipes.com
```

### 构建优化

- 自动代码分割
- 资源压缩 (Gzip/Brotli)
- 缓存策略优化
- 图片格式优化

## 📞 联系信息

**山东岱威创新管业有限公司**

- 📍 地址：山东省济南市长清区双龙路1006号
- 📱 手机：18663761618
- 📞 电话：0531-87357881
- 📠 传真：0531-87357881
- 📧 邮箱：sddwcxgy@126.com

## 📄 许可证

Copyright © 2024 山东岱威创新管业有限公司. All rights reserved.

---

_Built with ❤️ using Vue 3 + TypeScript + Vite_
