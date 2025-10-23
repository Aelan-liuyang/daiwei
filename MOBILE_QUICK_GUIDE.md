# 移动端开发快速参考指南

> 快速查阅移动端开发规范和常用代码片段

---

## 📐 响应式断点

```css
/* 桌面端 */
@media (min-width: 1025px) {
}

/* 平板端 */
@media (max-width: 1024px) {
}

/* 移动端 */
@media (max-width: 800px) {
}

/* 小屏手机 */
@media (max-width: 480px) {
}

/* 超小屏 */
@media (max-width: 375px) {
}
```

---

## 🎨 设计令牌

### 颜色

```css
--color-primary-600: #1677ff;
--color-secondary-400: #43c6ac;
--color-gray-50: #f8fafc;
--color-gray-900: #0f172a;
```

### 间距

```css
--space-4: 16px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
```

### 圆角

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
```

---

## 👆 触摸区域标准

| 元素类型 | 最小尺寸 | 推荐尺寸 |
| -------- | -------- | -------- |
| 按钮     | 44px     | 48-56px  |
| 导航项   | 48px     | 52-60px  |
| 输入框   | 44px     | 48-52px  |
| 图标按钮 | 44px     | 48px     |

---

## 🎬 常用动画

### 淡入

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### 滑入

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### 缩放

```css
.button:active {
  transform: scale(0.98);
}
```

---

## 🖼️ 图片优化

### 响应式图片

```vue
<picture>
  <source
    media="(max-width: 480px)"
    srcset="image-small.jpg"
  >
  <source
    media="(max-width: 768px)"
    srcset="image-medium.jpg"
  >
  <img src="image-large.jpg" alt="描述">
</picture>
```

### 懒加载

```vue
<img
  src="placeholder.jpg"
  data-src="actual-image.jpg"
  loading="lazy"
  alt="描述"
/>
```

---

## 📱 移动端专属

### 禁止用户缩放

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0,
           maximum-scale=1.0, user-scalable=no"
/>
```

### iOS安全区域

```css
padding-bottom: env(safe-area-inset-bottom, 20px);
```

### 拨打电话

```vue
<a href="tel:18663761618">联系我们</a>
```

### 发送邮件

```vue
<a href="mailto:sddwcxgy@126.com">邮件咨询</a>
```

---

## ✨ 常用工具类

### 隐藏元素

```css
/* 移动端隐藏 */
@media (max-width: 800px) {
  .mobile-hidden {
    display: none !important;
  }
}

/* 桌面端隐藏 */
@media (min-width: 801px) {
  .desktop-hidden {
    display: none !important;
  }
}
```

### 截断文本

```css
/* 单行截断 */
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 多行截断 */
.text-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## 🔍 调试技巧

### 显示响应式边框

```css
* {
  outline: 1px solid rgba(255, 0, 0, 0.2);
}
```

### 显示点击区域

```css
* {
  cursor: crosshair !important;
}
```

---

## ⚡ 性能优化

### GPU加速

```css
.accelerated {
  transform: translateZ(0);
  will-change: transform;
}
```

### 减少重绘

```css
/* ✅ 推荐 - 只影响合成 */
.element {
  transform: translateX(10px);
  opacity: 0.5;
}

/* ❌ 避免 - 触发重排 */
.element {
  left: 10px;
  width: 100px;
}
```

---

## 🎯 最佳实践

### 1. 移动端优先

```css
/* 基础样式 - 移动端 */
.element {
  font-size: 14px;
  padding: 10px;
}

/* 桌面端增强 */
@media (min-width: 801px) {
  .element {
    font-size: 16px;
    padding: 20px;
  }
}
```

### 2. 避免固定宽度

```css
/* ❌ 避免 */
.container {
  width: 375px;
}

/* ✅ 推荐 */
.container {
  max-width: 100%;
  padding: 0 15px;
}
```

### 3. 使用相对单位

```css
/* ✅ 推荐 */
font-size: 1rem; /* 相对于根元素 */
padding: 2em; /* 相对于字体大小 */
width: 50%; /* 相对于父元素 */
height: 100vh; /* 相对于视口 */
```

---

## 📋 检查清单

### 发布前检查

- [ ] 所有页面在不同设备上测试
- [ ] 触摸区域不小于44px
- [ ] 字体大小不小于14px
- [ ] 图片已压缩优化
- [ ] 动画流畅 (60fps)
- [ ] 无横向滚动条
- [ ] 表单在移动端可用
- [ ] 加载速度 < 3秒

---

## 🛠️ 常见问题

### Q: iOS下fixed定位闪烁?

**A**: 添加以下代码

```css
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
```

### Q: 移动端300ms点击延迟?

**A**: 添加以下meta标签

```html
<meta name="viewport" content="width=device-width" />
```

或使用CSS

```css
* {
  touch-action: manipulation;
}
```

### Q: 移动端1px边框过粗?

**A**: 使用transform缩放

```css
.border {
  position: relative;
}
.border::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ddd;
  transform: scaleY(0.5);
}
```

---

## 📚 推荐工具

- **Chrome DevTools** - 移动端模拟
- **Responsively** - 多设备预览
- **BrowserStack** - 真机测试
- **Lighthouse** - 性能审计

---

**最后更新**: 2025-10-23 **维护者**: 开发团队
