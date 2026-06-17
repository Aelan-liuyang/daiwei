<template>
  <header class="global-nav" :class="{ 'is-scrolled': isScrolled, 'is-menu-open': showMobileMenu }">
    <div class="nav-inner">
      <!-- Logo -->
      <a href="/" class="nav-logo" @click.prevent="router.push('/')">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#f0a500"/>
            <path d="M7 14 L14 7 L21 14 L14 21 Z" fill="white" opacity="0.9"/>
            <circle cx="14" cy="14" r="3.5" fill="#0a1628"/>
          </svg>
        </div>
        <div class="logo-text-wrap">
          <span class="logo-main">岱威管业</span>
          <span class="logo-sub">工业管道整体解决方案</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <a
          v-for="item in menuList"
          :key="item.key"
          :href="item.path"
          class="nav-link"
          :class="{ active: selectedMenu === item.key }"
          @click.prevent="handleMenuClick(item.key)"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Desktop CTA -->
      <div class="nav-actions">
        <a href="tel:0531-87357881" class="nav-phone">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.93 19.79 19.79 0 0 1 1.61 5.35C1.06 3.38 2.5 1.61 4.48 1.61h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          0531-87357881
        </a>
        <a href="/contact" class="nav-cta" @click.prevent="router.push('/contact')">
          获取报价
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button
        class="menu-toggle"
        @click="toggleMobileMenu"
        :aria-expanded="showMobileMenu"
        aria-label="Toggle menu"
      >
        <span class="toggle-line top"></span>
        <span class="toggle-line middle"></span>
        <span class="toggle-line bottom"></span>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': showMobileMenu }">
      <nav class="mobile-nav-links">
        <a
          v-for="item in menuList"
          :key="item.key"
          :href="item.path"
          class="mobile-nav-link"
          :class="{ active: selectedMenu === item.key }"
          @click.prevent="handleMenuClick(item.key)"
        >
          <span class="mobile-link-label">{{ item.label }}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
        <div class="mobile-nav-divider"></div>
        <a href="tel:0531-87357881" class="mobile-nav-link contact-link">
          <span class="mobile-link-label">📞 0531-87357881</span>
        </a>
        <a href="/contact" class="mobile-cta" @click.prevent="handleMenuClick('contact')">
          获取报价
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isScrolled = ref(false)
const showMobileMenu = ref(false)

const menuList = [
  { key: 'products', label: '产品与服务', path: '/products' },
  { key: 'cases', label: '工程案例', path: '/cases' },
  { key: 'news', label: '新闻动态', path: '/news' },
  { key: 'about', label: '关于我们', path: '/about' }
]

const pathToKey = [
  { pattern: /^\/$/, key: 'home' },
  { pattern: /^\/products(\/.*)?$/, key: 'products' },
  { pattern: /^\/cases(\/.*)?$/, key: 'cases' },
  { pattern: /^\/news(\/.*)?$/, key: 'news' },
  { pattern: /^\/about(\/.*)?$/, key: 'about' },
  { pattern: /^\/contact(\/.*)?$/, key: 'contact' }
]

const getMenuKeyByPath = path => {
  for (const item of pathToKey) {
    if (item.pattern.test(path)) return item.key
  }
  return 'home'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : ''
}

const handleMenuClick = key => {
  selectedMenu.value = key
  if (showMobileMenu.value) {
    showMobileMenu.value = false
    document.body.style.overflow = ''
  }

  const item = menuList.find(i => i.key === key)
  if (item?.path) {
    router.push(item.path)
  } else if (key === 'home') {
    router.push('/')
  } else if (key === 'contact') {
    router.push('/contact')
  }
}

const syncMenuWithRoute = () => {
  selectedMenu.value = getMenuKeyByPath(route.path)
}

onMounted(() => {
  syncMenuWithRoute()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

watch(
  () => route.path,
  () => {
    syncMenuWithRoute()
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ========== 导航栏基础 ========== */
.global-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 1000;
  background: #0a1628;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.global-nav.is-scrolled {
  background: rgba(10, 22, 40, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  border-bottom-color: rgba(240, 165, 0, 0.2);
}

.global-nav.is-menu-open {
  background: #0a1628;
}

.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

/* ========== Logo ========== */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity 0.2s;
}
.nav-logo:hover { opacity: 0.9; }

.logo-icon {
  flex-shrink: 0;
}

.logo-text-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.logo-sub {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.5px;
  margin-top: 3px;
  font-weight: 400;
}

/* ========== 桌面导航链接 ========== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-link.active {
  color: #f0a500;
  background: rgba(240, 165, 0, 0.1);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: #f0a500;
  border-radius: 1px;
}

/* ========== 桌面右侧操作 ========== */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-phone:hover { color: rgba(255, 255, 255, 0.9); }

.nav-cta {
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: #f0a500;
  color: #0a1628;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}
.nav-cta:hover {
  background: #f5c842;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(240, 165, 0, 0.4);
  color: #0a1628;
}

/* ========== 移动汉堡菜单 ========== */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  gap: 5px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
  background: rgba(255,255,255,0.06);
}
.menu-toggle:hover { background: rgba(255,255,255,0.12); }

.toggle-line {
  display: block;
  width: 20px;
  height: 2px;
  background: #f5f5f7;
  border-radius: 1px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
  transform-origin: center;
}

.is-menu-open .toggle-line.top {
  transform: translateY(7px) rotate(45deg);
}
.is-menu-open .toggle-line.middle {
  opacity: 0;
  transform: scaleX(0);
}
.is-menu-open .toggle-line.bottom {
  transform: translateY(-7px) rotate(-45deg);
}

/* ========== 移动菜单 ========== */
.mobile-menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  height: calc(100vh - 72px);
  background: #0a1628;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-12px);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu.is-open {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.mobile-nav-links {
  padding: 32px 40px 40px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.3px;
  text-decoration: none;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: color 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  color: #f0a500;
}

.mobile-nav-link svg {
  opacity: 0.4;
  flex-shrink: 0;
}

.mobile-nav-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 16px 0;
}

.mobile-cta {
  display: block;
  margin-top: 24px;
  padding: 16px;
  background: #f0a500;
  color: #0a1628;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;
}
.mobile-cta:hover { background: #f5c842; color: #0a1628; }

/* ========== 响应式 ========== */
@media (max-width: 1024px) {
  .nav-inner { padding: 0 24px; }
  .nav-phone { display: none; }
}

@media (max-width: 834px) {
  .nav-links, .nav-actions { display: none; }
  .menu-toggle { display: flex; }
}

@media (max-width: 480px) {
  .logo-sub { display: none; }
  .nav-inner { padding: 0 20px; }
}
</style>
