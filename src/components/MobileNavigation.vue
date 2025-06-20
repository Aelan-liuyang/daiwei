<template>
  <div class="mobile-navigation">
    <!-- 移动端菜单按钮 -->
    <button
      v-if="isMobile"
      class="mobile-menu-button"
      :class="{ 'active': isMenuOpen }"
      @click="toggleMenu"
      aria-label="切换菜单"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- 移动端菜单遮罩 -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen && isMobile"
        class="mobile-menu-overlay"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- 移动端菜单 -->
    <Transition name="slide-right">
      <nav
        v-if="isMenuOpen && isMobile"
        class="mobile-menu"
        role="navigation"
        aria-label="主导航菜单"
      >
        <div class="mobile-menu-header">
          <div class="mobile-menu-logo">
            <img src="/images/logo.png" alt="岱威管业" />
            <span>岱威管业</span>
          </div>
          <button
            class="mobile-menu-close"
            @click="closeMenu"
            aria-label="关闭菜单"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div class="mobile-menu-content">
          <ul class="mobile-menu-list">
            <li
              v-for="item in menuItems"
              :key="item.key"
              class="mobile-menu-item"
            >
              <router-link
                :to="item.path"
                class="mobile-menu-link"
                :class="{ 'active': isActiveRoute(item.path) }"
                @click="closeMenu"
              >
                <component :is="item.icon" v-if="item.icon" class="menu-icon" />
                <span>{{ item.label }}</span>
                <svg
                  v-if="item.children"
                  class="menu-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </router-link>

              <!-- 子菜单 -->
              <ul v-if="item.children" class="mobile-submenu">
                <li
                  v-for="child in item.children"
                  :key="child.key"
                  class="mobile-submenu-item"
                >
                  <router-link
                    :to="child.path"
                    class="mobile-submenu-link"
                    @click="closeMenu"
                  >
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- 联系信息 -->
          <div class="mobile-menu-contact">
            <h3>联系我们</h3>
            <p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 3h12l-6 4-6-4z" fill="currentColor"/>
                <path d="M2 3v10h12V3" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
              info@daiwei-pipes.com
            </p>
            <p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2h3l1 3-2 2c1 2 3 4 5 5l2-2 3 1v3c0 1-1 2-2 2C7 14 2 9 2 4c0-1 1-2 2-2z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              </svg>
              400-xxx-xxxx
            </p>
          </div>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useResponsive } from '@/composables/useResponsive'

interface MenuItem {
  key: string
  label: string
  path: string
  icon?: any
  children?: MenuItem[]
}

const props = defineProps<{
  menuItems: MenuItem[]
}>()

const route = useRoute()
const { isMobile } = useResponsive()

const isMenuOpen = ref(false)

// 切换菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 关闭菜单
const closeMenu = () => {
  isMenuOpen.value = false
}

// 检查是否为活跃路由
const isActiveRoute = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}

// 监听路由变化，自动关闭菜单
watch(() => route.path, () => {
  closeMenu()
})

// 监听设备类型变化
watch(isMobile, (newValue) => {
  if (!newValue) {
    closeMenu()
  }
})

// 防止菜单打开时页面滚动
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-navigation {
  position: relative;
}

/* 移动端菜单按钮 */
.mobile-menu-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.mobile-menu-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background-color: white;
  margin: 2px 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-button.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-button.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* 遮罩层 */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* 移动端菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  max-width: 85vw;
  height: 100vh;
  background-color: white;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  z-index: 999;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #003366;
  color: white;
}

.mobile-menu-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-menu-logo img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.mobile-menu-logo span {
  font-size: 18px;
  font-weight: 600;
}

.mobile-menu-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.mobile-menu-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu-content {
  flex: 1;
  padding: 20px 0;
}

.mobile-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-item {
  border-bottom: 1px solid #f0f0f0;
}

.mobile-menu-link {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: #333;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease;
}

.mobile-menu-link:hover,
.mobile-menu-link.active {
  background-color: #f8f9fa;
  color: #003366;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  color: #666;
}

.menu-arrow {
  margin-left: auto;
  color: #999;
}

.mobile-submenu {
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #f8f9fa;
}

.mobile-submenu-link {
  display: block;
  padding: 12px 20px 12px 52px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
}

.mobile-submenu-link:hover {
  background-color: #e9ecef;
  color: #003366;
}

.mobile-menu-contact {
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e5e5e5;
}

.mobile-menu-contact h3 {
  margin: 0 0 12px 0;
  font-size: 16px;
  color: #333;
}

.mobile-menu-contact p {
  display: flex;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
  color: #666;
}

.mobile-menu-contact svg {
  margin-right: 8px;
  color: #999;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

/* 响应式调整 */
@media (max-width: 480px) {
  .mobile-menu {
    width: 100vw;
    max-width: 100vw;
  }
}
</style>
