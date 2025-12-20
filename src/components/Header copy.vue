<template>
  <a-layout-header class="nav-header" :class="{ 'is-scrolled': isFixed }">
    <div class="scroll-progress" :style="{ width: scrollPercent + '%' }"></div>

    <div class="nav-container">
      <div class="nav-logo" @click="router.push('/')">
        <div class="logo-icon-wrap">
          <div class="icon-glow"></div>
          <span class="icon-text">DW</span>
        </div>
        <div class="logo-text-group">
          <span class="logo-main">山东岱威创新管业</span>
          <span class="logo-sub">DAIWEI INNOVATION</span>
        </div>
      </div>

      <nav class="nav-desktop">
        <div
          v-for="item in menuList"
          :key="item.key"
          :class="['nav-link', { 'is-active': selectedMenu === item.key }]"
          @click="handleMenuClick(item.key)"
        >
          <div class="link-bg"></div>
          <span class="link-text">{{ item.label }}</span>
          <div class="link-dot"></div>
        </div>
      </nav>

      <div class="nav-actions">
        <button
          class="menu-trigger"
          :class="{ 'is-active': showMobileMenu }"
          @click="toggleMobileMenu"
        >
          <div class="trigger-box">
            <span class="line t"></span>
            <span class="line m"></span>
            <span class="line b"></span>
          </div>
        </button>
      </div>
    </div>

    <transition name="menu-stagger">
      <div v-if="showMobileMenu" class="mobile-nav-panel">
        <div class="panel-bg-decor"></div>
        <div class="mobile-nav-content">
          <div
            v-for="(item, index) in menuList"
            :key="item.key"
            class="mobile-nav-item"
            :class="{ 'is-active': selectedMenu === item.key }"
            :style="{ '--delay': index }"
            @click="handleMenuClick(item.key)"
          >
            <div class="item-inner">
              <span class="item-no">0{{ index + 1 }}</span>
              <span class="item-label">{{ item.label }}</span>
              <div class="item-icon">
                <ArrowRightOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </a-layout-header>
</template>

<script setup>
import { ArrowRightOutlined } from '@ant-design/icons-vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isFixed = ref(false)
const showMobileMenu = ref(false)
const scrollPercent = ref(0)

const menuList = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'products', label: '产品服务', path: '/products' },
  { key: 'cases', label: '工程案例', path: '/cases' },
  { key: 'news', label: '新闻中心', path: '/news' },
  { key: 'about', label: '关于我们', path: '/about' },
  { key: 'contact', label: '联系我们', path: '/contact' }
]

const handleScroll = () => {
  const scrolled = window.scrollY
  isFixed.value = scrolled > 50

  // 计算进度条
  const winHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollPercent.value = (scrolled / winHeight) * 100
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : ''
}

const handleMenuClick = key => {
  selectedMenu.value = key
  const item = menuList.find(i => i.key === key)
  if (item) router.push(item.path)
  if (showMobileMenu.value) toggleMobileMenu()
}

const syncMenu = () => {
  const path = route.path
  const found = menuList.find(m => path === m.path || (m.path !== '/' && path.startsWith(m.path)))
  selectedMenu.value = found ? found.key : 'home'
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  syncMenu()
})

watch(() => route.path, syncMenu)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 核心动画变量 */
:root {
  --primary: #1677ff;
  --accent: #43c6ac;
  --nav-height: 80px;
}

.nav-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--nav-height);
  background: transparent;
  padding: 0;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-header.is-scrolled {
  height: 70px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(22, 119, 255, 0.1);
}

/* 页面滚动条动画 */
.scroll-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #1677ff, #43c6ac);
  transition: width 0.1s ease;
  z-index: 1001;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

/* --- Logo 动画 --- */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}

.logo-icon-wrap {
  width: 44px;
  height: 44px;
  background: #0f172a;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.icon-glow {
  position: absolute;
  width: 150%;
  height: 150%;
  background: conic-gradient(from 0deg, transparent, #1677ff, #43c6ac, transparent);
  animation: rotateGlow 4s linear infinite;
}

@keyframes rotateGlow {
  to {
    transform: rotate(360deg);
  }
}

.icon-text {
  position: relative;
  color: #fff;
  font-weight: 800;
  z-index: 2;
  font-size: 15px;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(90deg, #0f172a, #1677ff, #0f172a);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}

.logo-sub {
  font-size: 10px;
  letter-spacing: 2px;
  color: #94a3b8;
  font-weight: 600;
}

/* --- PC 导航项动画 --- */
.nav-desktop {
  display: flex;
  gap: 8px;
  background: rgba(241, 245, 249, 0.5);
  padding: 6px;
  border-radius: 100px;
}

.nav-link {
  position: relative;
  padding: 10px 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.link-bg {
  position: absolute;
  inset: 0;
  background: #fff;
  border-radius: 100px;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-link:hover .link-bg {
  opacity: 1;
  transform: scale(1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.link-text {
  position: relative;
  z-index: 1;
  font-size: 15px;
  font-weight: 600;
  color: #64748b;
  transition: color 0.3s;
}

.nav-link:hover .link-text,
.nav-link.is-active .link-text {
  color: #1677ff;
}

.link-dot {
  width: 4px;
  height: 4px;
  background: #1677ff;
  border-radius: 50%;
  margin-top: 4px;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.3s ease;
}

.nav-link.is-active .link-dot {
  opacity: 1;
  transform: translateY(0);
}

/* --- 移动端触发器 --- */
.menu-trigger {
  width: 48px;
  height: 48px;
  border: none;
  background: #f1f5f9;
  border-radius: 14px;
  cursor: pointer;
  display: none;
}

.trigger-box {
  position: relative;
  width: 20px;
  height: 14px;
  margin: 0 auto;
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #0f172a;
  border-radius: 2px;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.line.t {
  top: 0;
}
.line.m {
  top: 50%;
  transform: translateY(-50%);
}
.line.b {
  bottom: 0;
}

.menu-trigger.is-active .line.t {
  transform: rotate(45deg);
  top: 6px;
}
.menu-trigger.is-active .line.m {
  opacity: 0;
  transform: translateX(10px);
}
.menu-trigger.is-active .line.b {
  transform: rotate(-45deg);
  bottom: 6px;
}

/* --- 移动端面板动画 --- */
.mobile-nav-panel {
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 40px;
}

.panel-bg-decor {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(circle at 80% 20%, rgba(22, 119, 255, 0.05), transparent);
}

.mobile-nav-item {
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);
}

.menu-stagger-enter-active .mobile-nav-item {
  animation: staggerIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--delay) * 0.1s);
}

@keyframes staggerIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.item-inner {
  display: flex;
  align-items: center;
  padding: 25px;
  background: #f8fafc;
  border-radius: 20px;
  transition: 0.3s;
}

.mobile-nav-item.is-active .item-inner {
  background: #1677ff;
  color: #fff;
}

.item-no {
  font-family: monospace;
  margin-right: 15px;
  opacity: 0.5;
}
.item-label {
  font-size: 20px;
  font-weight: 700;
}
.item-icon {
  margin-left: auto;
  transition: 0.3s;
}

.mobile-nav-item:hover .item-icon {
  transform: translateX(5px);
}

/* 响应式 */
@media (max-width: 1024px) {
  .nav-desktop {
    display: none;
  }
  .menu-trigger {
    display: block;
  }
}

@media (max-width: 576px) {
  .nav-container {
    padding: 0 20px;
  }
  .logo-main {
    font-size: 18px;
  }
  .mobile-nav-panel {
    padding: 20px;
  }
}
</style>
