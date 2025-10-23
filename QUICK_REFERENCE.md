# 🚀 样式系统快速参考

## 📋 常用工具类速查表

### 🎨 颜色

```css
/* 文本颜色 */
.text-primary        /* 主色文字 */
.text-secondary      /* 辅助色文字 */
.text-gray-500/700/900
.text-white

/* 背景颜色 */
.bg-primary
.bg-secondary
.bg-gray-50/100
.bg-white
.bg-transparent

/* 渐变背景 */
.bg-gradient-primary  /* 主题渐变 */
.bg-gradient-secondary

/* 渐变文字 */
.text-gradient        /* 渐变色文字效果 */
```

### 📏 布局

```css
/* Flex */
.flex                 /* display: flex */
.flex-col            /* 垂直布局 */
.flex-wrap           /* 允许换行 */
.items-center        /* 垂直居中 */
.items-start/end
.justify-center      /* 水平居中 */
.justify-between     /* 两端对齐 */
.justify-around
.gap-1/2/3/4/6/8    /* 间距 */

/* Grid */
.grid
.grid-cols-1/2/3/4/5/6

/* 容器 */
.container           /* 最大宽度 1280px，自动居中 */
```

### 📐 间距

```css
/* Padding */
.p-0/1/2/3/4/6/8     /* 所有方向 */
.pt-*/pb-*/pl-*/pr-* /* 单个方向 */

/* Margin */
.m-0/1/2/3/4/6/8
.mt-*/mb-*/ml-*/mr-*
.m-auto              /* 水平居中 */
```

### 🔤 文字

```css
/* 大小 */
.text-xs/sm/base/lg/xl/2xl/3xl/4xl/5xl

/* 字重 */
.font-thin/light/normal/medium/semibold/bold/extrabold

/* 对齐 */
.text-left/center/right/justify

/* 截断 */
.truncate            /* 单行省略 */
.line-clamp-1/2/3   /* 多行省略 */
```

### 🎭 视觉效果

```css
/* 圆角 */
.rounded-none/sm/md/lg/xl/2xl/full

/* 阴影 */
.shadow-none/sm/md/lg/xl/2xl
.shadow-primary      /* 彩色阴影 */

/* 边框 */
.border/border-2/border-4
```

### ✨ 动画

#### 入场动画

```css
.animate-fade-in          /* 渐显 */
.animate-fade-in-up       /* 从下渐显 */
.animate-fade-in-down     /* 从上渐显 */
.animate-slide-up         /* 滑入 */
.animate-scale-in         /* 缩放渐显 */
.animate-zoom-in          /* 放大渐显 */
```

#### 循环动画

```css
.animate-pulse            /* 脉冲 */
.animate-pulse-ring       /* 脉冲圆环 */
.animate-float            /* 浮动 */
.animate-spin             /* 旋转 */
.animate-bounce           /* 弹跳 */
.animate-glow             /* 发光 */
```

#### 悬停效果

```css
.hover-lift               /* 上浮 + 阴影 */
.hover-scale              /* 放大 */
.hover-glow               /* 发光 */
.hover-rotate             /* 旋转 */
.hover-tilt               /* 3D倾斜 */
```

#### 滚动触发

```css
.scroll-reveal            /* 滚动渐显 */
.scroll-reveal-left       /* 从左滚动渐显 */
.scroll-reveal-right      /* 从右滚动渐显 */
.scroll-reveal-scale      /* 缩放滚动渐显 */
```

#### 延迟和时长

```css
.delay-100/200/300/500
.duration-100/200/300/500
```

### 🎁 组件类

```css
/* 按钮 */
.btn                      /* 基础按钮 */
.btn-primary              /* 主要按钮 */
.btn-secondary            /* 次要按钮 */
.btn-ghost                /* 幽灵按钮 */
.btn-sm/lg                /* 尺寸 */

/* 卡片 */
.card                     /* 标准卡片 */
.card-glass               /* 玻璃态卡片 */
.card-bordered            /* 带边框卡片 */

/* 徽章 */
.badge                    /* 基础徽章 */
.badge-success/warning/error

/* 链接 */
.link                     /* 美化链接 */
```

## 🎨 设计令牌常用变量

### 颜色

```css
var(--color-primary-600)      /* 主色 */
var(--color-secondary-400)    /* 辅助色 */
var(--color-gray-500)         /* 灰色 */

/* 渐变 */
var(--gradient-primary)
var(--gradient-secondary)
```

### 间距

```css
var(--space-1)   /* 4px */
var(--space-2)   /* 8px */
var(--space-4)   /* 16px */
var(--space-6)   /* 24px */
var(--space-8)   /* 32px */
```

### 字体

```css
var(--text-sm)   /* 14px */
var(--text-base) /* 16px */
var(--text-lg)   /* 18px */
var(--text-xl)   /* 20px */
```

### 效果

```css
var(--radius-md)          /* 8px */
var(--radius-lg)          /* 12px */
var(--shadow-md)          /* 中等阴影 */
var(--duration-normal)    /* 250ms */
var(--ease-smooth)        /* 缓动函数 */
```

## 💡 使用模式

### 1. 标准卡片

```vue
<div class="card p-6 hover-lift">
  <h3 class="text-xl font-bold mb-4">标题</h3>
  <p class="text-gray-600 mb-4">内容</p>
  <button class="btn btn-primary">按钮</button>
</div>
```

### 2. 玻璃态卡片

```vue
<div class="card-glass p-6 rounded-xl">
  内容
</div>
```

### 3. 渐变按钮

```vue
<button class="btn btn-primary hover-lift">
  点击我
</button>
```

### 4. 网格布局

```vue
<div class="grid grid-cols-3 gap-6">
  <div class="card">卡片1</div>
  <div class="card">卡片2</div>
  <div class="card">卡片3</div>
</div>
```

### 5. Flex 居中

```vue
<div class="flex items-center justify-center">
  居中内容
</div>
```

### 6. 带动画的元素

```vue
<div class="animate-fade-in-up delay-200 hover-lift">
  内容
</div>
```

### 7. 滚动触发动画

```vue
<template>
  <div class="scroll-reveal">滚动到此处时出现</div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  })

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el)
  })
})
</script>
```

## 📱 响应式类

```css
.hidden-mobile     /* 移动端隐藏 */
.hidden-desktop    /* 桌面端隐藏 */
.visible-mobile    /* 仅移动端显示 */
```

## 🎯 最佳实践

### ✅ 推荐

```vue
<!-- 使用工具类 -->
<div class="flex items-center gap-4 p-6 rounded-xl shadow-lg"></div>
```

### ❌ 不推荐

```vue
<!-- 避免硬编码 -->
<div style="padding: 24px; color: #1677ff;"></div>
```

## 🔗 相关资源

- 📖 [完整文档](./STYLE_OPTIMIZATION.md)
- 🎨 [示例组件](./src/components/StyleExample.vue)
- 💻 [设计令牌](./src/styles/tokens.css)
- 🛠️ [工具类](./src/styles/utilities.css)
- ✨ [动画库](./src/styles/animations.css)

## 🆘 常见问题

### Q: 如何自定义颜色？

A: 在 `tokens.css` 中添加新的颜色变量，然后在 `utilities.css`
中创建对应的工具类。

### Q: 如何创建自定义动画？

A: 在 `animations.css` 中添加 `@keyframes` 和对应的类。

### Q: 响应式断点是什么？

A:

- sm: 576px
- md: 768px
- lg: 992px
- xl: 1200px
- 2xl: 1600px

### Q: 如何优化性能？

A:

1. 优先使用 transform 和 opacity 做动画
2. 使用 will-change 提示浏览器
3. 避免在大列表中使用复杂动画
4. 使用 CSS 而不是 JS 动画

---

**快速开始**: 复制上面的代码模式，替换成你的内容即可！
