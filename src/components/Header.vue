<template>
  <a-layout-header class="header" :class="{ fixed: isFixed, 'is-scrolled': isScrolled }">
    <div class="header-content">
      <!-- Logo -->
      <div class="logo" @click="router.push('/')">
        <div class="logo-icon">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span class="logo-text">岱威管业</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <div
          v-for="item in menuList"
          :key="item.key"
          ref="menuRefs"
          :class="['nav-item', { active: selectedMenu === item.key }]"
          @click="handleMenuClick(item.key)"
        >
          <span class="nav-label">{{ item.label }}</span>
          <span v-if="selectedMenu === item.key" class="nav-indicator"></span>
        </div>
      </nav>

      <!-- Right Actions -->
      <div class="header-actions">
        <!-- Phone Button -->
        <a
          href="tel:18663761618"
          class="phone-btn"
          @click.prevent="showPhoneTooltip = !showPhoneTooltip"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
          <span class="phone-number">186-6376-1618</span>
        </a>

        <!-- Phone Tooltip -->
        <Transition name="tooltip">
          <div
            v-if="showPhoneTooltip"
            class="phone-tooltip"
            v-click-outside="() => (showPhoneTooltip = false)"
          >
            <div class="tooltip-header">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <span>联系我们</span>
            </div>
            <a href="tel:0531-87357881" class="tooltip-item">
              <span class="item-label">服务热线</span>
              <span class="item-value">0531-87357881</span>
            </a>
            <a href="tel:18663761618" class="tooltip-item">
              <span class="item-label">业务咨询</span>
              <span class="item-value">186-6376-1618</span>
            </a>
          </div>
        </Transition>

        <!-- CTA Button -->
        <button class="cta-btn" @click="router.push('/contact')">在线咨询</button>

        <!-- Mobile Menu Toggle -->
        <button
          class="menu-toggle"
          @click="toggleMobileMenu"
          :class="{ active: showMobileMenu }"
          aria-label="切换菜单"
        >
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
          <span class="toggle-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="overlay">
      <div v-if="showMobileMenu" class="mobile-overlay" @click="toggleMobileMenu"></div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="menu">
      <nav v-if="showMobileMenu" class="mobile-nav">
        <div class="mobile-nav-header">
          <span class="mobile-title">导航菜单</span>
          <button class="mobile-close" @click="toggleMobileMenu">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="mobile-nav-items">
          <div
            v-for="(item, index) in menuList"
            :key="item.key"
            :class="['mobile-nav-item', { active: selectedMenu === item.key }]"
            :style="{ animationDelay: `${index * 50}ms` }"
            @click="handleMenuClick(item.key)"
          >
            <span class="mobile-nav-label">{{ item.label }}</span>
            <svg
              class="mobile-nav-arrow"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        <div class="mobile-nav-footer">
          <div class="mobile-contact">
            <span class="contact-label">服务热线</span>
            <a href="tel:18663761618" class="contact-phone">186-6376-1618</a>
          </div>
          <button class="mobile-cta" @click="handleMenuClick('contact')">立即咨询</button>
        </div>
      </nav>
    </Transition>
  </a-layout-header>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isFixed = ref(false)
const isScrolled = ref(false)
const showMobileMenu = ref(false)
const showPhoneTooltip = ref(false)

const menuList = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'products', label: '产品服务', path: '/products' },
  { key: 'cases', label: '工程案例', path: '/cases' },
  { key: 'news', label: '新闻中心', path: '/news' },
  { key: 'about', label: '关于我们', path: '/about' },
  { key: 'contact', label: '联系我们', path: '/contact' }
]

// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = event => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
}

// Menu refs for underline width
const menuRefs = ref([])
const underlineWidths = ref({})

const getUnderlineStyle = key => {
  const width = underlineWidths.value[key] || 0
  return { width: width + 'px' }
}

const updateUnderlineWidths = () => {
  nextTick(() => {
    underlineWidths.value = {}
    menuList.forEach((item, idx) => {
      const el = menuRefs.value[idx]?.querySelector('.nav-label')
      underlineWidths.value[item.key] = el ? el.offsetWidth : 0
    })
  })
}

// Path to menu key mapping
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
  const scrollY = window.scrollY
  isFixed.value = scrollY > 50
  isScrolled.value = scrollY > 10
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  // Prevent body scroll when menu is open
  document.body.style.overflow = showMobileMenu.value ? 'hidden' : ''
}

const handleMenuClick = key => {
  selectedMenu.value = key
  showMobileMenu.value = false
  showPhoneTooltip.value = false
  document.body.style.overflow = ''

  const item = menuList.find(i => i.key === key)
  if (item?.path) {
    router.push(item.path)
  }
}

const syncMenuWithRoute = () => {
  selectedMenu.value = getMenuKeyByPath(route.path)
}

onMounted(() => {
  syncMenuWithRoute()
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateUnderlineWidths()
  window.addEventListener('resize', updateUnderlineWidths)
})

watch(
  () => route.path,
  () => {
    syncMenuWithRoute()
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateUnderlineWidths)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Base Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.header.is-scrolled {
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.header.fixed {
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-icon {
  width: 42px;
  height: 42px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 15px rgba(8, 145, 255, 0.4);
}

.logo-text {
  font-size: 22px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-item {
  position: relative;
  padding: 10px 18px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.nav-item:hover {
  color: #ffffff;
  background: rgba(8, 145, 255, 0.15);
  box-shadow: 0 4px 15px rgba(8, 145, 255, 0.2);
}

.nav-item.active {
  color: #ffffff;
  background: linear-gradient(135deg, rgba(8, 145, 255, 0.25) 0%, rgba(8, 145, 255, 0.1) 100%);
  box-shadow:
    0 4px 20px rgba(8, 145, 255, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.nav-indicator {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 3px;
  background: linear-gradient(90deg, #60a5fa, #0891ff);
  border-radius: 3px;
  box-shadow:
    0 0 15px rgba(8, 145, 255, 0.8),
    0 0 30px rgba(8, 145, 255, 0.4);
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

/* Phone Button */
.phone-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  color: #0891ff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.phone-btn:hover {
  background: #ffffff;
  border-color: #0891ff;
  box-shadow: 0 6px 20px rgba(8, 145, 255, 0.35);
  transform: translateY(-2px);
}

.phone-btn svg {
  transition: transform 0.3s ease;
}

.phone-btn:hover svg {
  transform: rotate(15deg) scale(1.1);
}

/* Phone Tooltip */
.phone-tooltip {
  position: absolute;
  top: calc(100% + 16px);
  right: 80px;
  background: white;
  border-radius: 14px;
  padding: 20px;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  min-width: 240px;
  z-index: 100;
  border: 2px solid rgba(8, 145, 255, 0.1);
}

.tooltip-header {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0891ff;
  font-weight: 600;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
}

.tooltip-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.tooltip-item:hover {
  background: #f1f5f9;
}

.item-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.item-value {
  font-size: 15px;
  color: #0f172a;
  font-weight: 600;
}

.tooltip-enter-active,
.tooltip-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* CTA Button */
.cta-btn {
  padding: 12px 28px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 20px rgba(8, 145, 255, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 30px rgba(8, 145, 255, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
  border-color: rgba(255, 255, 255, 0.5);
}

/* Menu Toggle */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.toggle-line {
  width: 20px;
  height: 2.5px;
  background: white;
  border-radius: 2px;
  margin: 0 auto;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.menu-toggle.active .toggle-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active .toggle-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .toggle-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 998;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 85vw;
  height: 100vh;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4);
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-title {
  color: white;
  font-size: 18px;
  font-weight: 600;
}

.mobile-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.mobile-nav-items {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: slideIn 0.4s ease backwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
}

.mobile-nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(8, 145, 255, 0.3);
  color: white;
}

.mobile-nav-item.active {
  background: linear-gradient(135deg, rgba(8, 145, 255, 0.2) 0%, rgba(8, 145, 255, 0.1) 100%);
  border-color: rgba(8, 145, 255, 0.4);
  color: white;
}

.mobile-nav-label {
  font-size: 16px;
  font-weight: 500;
}

.mobile-nav-arrow {
  opacity: 0.5;
  transition: all 0.3s ease;
}

.mobile-nav-item:hover .mobile-nav-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.mobile-nav-footer {
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.2);
}

.mobile-contact {
  margin-bottom: 16px;
}

.contact-label {
  display: block;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.contact-phone {
  font-size: 20px;
  font-weight: 700;
  color: #0891ff;
  text-decoration: none;
}

.mobile-cta {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(8, 145, 255, 0.3);
}

.mobile-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(8, 145, 255, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 24px;
  }

  .phone-number {
    display: none;
  }

  .cta-btn {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .desktop-nav {
    display: none;
  }

  .phone-tooltip {
    right: 60px;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 16px;
    height: 64px;
  }

  .logo-icon {
    width: 38px;
    height: 38px;
  }

  .logo-text {
    font-size: 18px;
  }

  .phone-btn {
    padding: 8px;
  }

  .phone-btn span {
    display: none;
  }

  .phone-tooltip {
    right: 16px;
    left: 16px;
    min-width: auto;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .header,
  .nav-item,
  .phone-btn,
  .cta-btn,
  .mobile-nav-item {
    transition: all 0.2s ease;
  }

  .mobile-nav-item {
    animation: none;
  }
}
</style>
