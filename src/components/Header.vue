<template>
  <a-layout-header class="header" :class="{ fixed: isFixed }">
    <div class="header-content">
      <div class="logo" @click="router.push('/')">山东岱威创新管业</div>

      <!-- 移动端菜单切换按钮 -->
      <button
        class="mobile-menu-toggle"
        @click="toggleMobileMenu"
        :class="{ active: showMobileMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav class="menu-bar" :class="{ 'mobile-open': showMobileMenu }">
      <div
        v-for="item in menuList"
        :key="item.key"
        ref="menuRefs"
        :class="['menu-item', { active: selectedMenu === item.key }]"
        @click="handleMenuClick(item.key)"
      >
        <span class="menu-label">{{ item.label }}</span>
        <span
          v-if="selectedMenu === item.key"
          class="active-underline"
          :style="getUnderlineStyle(item.key)"
        ></span>
      </div>
    </nav>
  </a-layout-header>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isFixed = ref(false)
const showMobileMenu = ref(false)

const menuList = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'products', label: '产品服务', path: '/products' },
  { key: 'cases', label: '工程案例', path: '/cases' },
  { key: 'news', label: '新闻中心', path: '/news' },
  { key: 'about', label: '关于我们', path: '/about' },
  { key: 'contact', label: '联系我们', path: '/contact' }
]

// 用于存储每个菜单项的宽度
const menuRefs = ref([])
const underlineWidths = ref({})

// 计算下划线样式
const getUnderlineStyle = key => {
  let width = underlineWidths.value[key]
  if (!width) width = 0
  return {
    width: width + 'px'
  }
}

// 路径和菜单key的映射，支持详情页高亮
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

const updateUnderlineWidths = () => {
  nextTick(() => {
    underlineWidths.value = {}
    menuList.forEach((item, idx) => {
      const el = menuRefs.value[idx]?.querySelector('.menu-label')
      underlineWidths.value[item.key] = el ? el.offsetWidth : 0
    })
  })
}

const handleScroll = () => {
  isFixed.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const handleMenuClick = key => {
  selectedMenu.value = key
  showMobileMenu.value = false // 点击菜单项后关闭移动端菜单
  const item = menuList.find(i => i.key === key)
  if (item && item.path) {
    router.push(item.path)
  }
}

const syncMenuWithRoute = () => {
  selectedMenu.value = getMenuKeyByPath(route.path)
}

onMounted(() => {
  syncMenuWithRoute()
  window.addEventListener('scroll', handleScroll)
  updateUnderlineWidths()
  window.addEventListener('resize', updateUnderlineWidths)
})

// 监听路由变化，确保新闻详情页等也高亮新闻中心
watch(
  () => route.path,
  () => {
    syncMenuWithRoute()
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateUnderlineWidths)
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #001529 0%, #0f1419 100%);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 48px;
  min-height: 70px;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.menu-bar {
  display: flex;
  gap: 36px;
}

/* 移动端菜单切换按钮 - PC端隐藏 */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

/* PC端确保header-content不影响布局 */
@media (min-width: 801px) {
  .header-content {
    display: contents;
  }
}

.mobile-menu-toggle span {
  width: 100%;
  height: 3px;
  background: #ffffff;
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.header.fixed {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  background: rgba(0, 21, 41, 0.95);
  backdrop-filter: blur(20px);
}

.logo {
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 40px;
  line-height: 70px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transform: scale(1.02);
}

/* PC端Logo样式确保 */
@media (min-width: 801px) {
  .logo {
    margin-right: 40px;
    line-height: 70px;
  }
}

.menu-bar {
  display: flex;
  gap: 36px;
}

.menu-item {
  position: relative;
  color: #cbd5e1;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  line-height: 70px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.menu-item:hover {
  color: #ffffff;
  transform: translateY(-1px);
}

.menu-item:hover::before {
  opacity: 1;
}

.menu-item.active {
  color: #ffffff;
  font-weight: 600;
  background: rgba(22, 119, 255, 0.15);
}

.menu-label {
  display: inline-block;
  position: relative;
  z-index: 1;
  padding: 0 2px;
}

.active-underline {
  display: block;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  position: absolute;
  left: 50%;
  bottom: 8px;
  transform: translateX(-50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.4);
}

/* 平板端样式 */
@media (max-width: 1024px) {
  .header {
    padding: 0 30px;
  }

  .menu-bar {
    gap: 24px;
  }
}

/* 移动端样式 */
@media (max-width: 800px) {
  .header {
    flex-direction: column;
    padding: 0;
    min-height: 60px;
    background: #001529 !important;
    border-bottom: 2px solid rgba(22, 119, 255, 0.3);
  }

  .header.fixed {
    background: #001529 !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .header-content {
    padding: 12px 20px;
    min-height: 60px;
    width: 100%;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .logo {
    font-size: 20px;
    line-height: 1.2;
    margin-right: 0;
    padding: 0;
    color: #ffffff !important;
    background: none !important;
    -webkit-background-clip: unset !important;
    -webkit-text-fill-color: unset !important;
    background-clip: unset !important;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    font-weight: 800;
  }

  .logo:hover {
    color: #1677ff !important;
    background: none !important;
    -webkit-background-clip: unset !important;
    -webkit-text-fill-color: unset !important;
    background-clip: unset !important;
    transform: none;
  }

  .menu-bar {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #001529;
    border-top: 1px solid rgba(22, 119, 255, 0.2);
    padding: 20px;
    gap: 8px;
    flex-direction: column;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .menu-bar.mobile-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .menu-item {
    font-size: 16px;
    padding: 16px 20px;
    line-height: 1.2;
    border-radius: 12px;
    color: #ffffff !important;
    background: rgba(22, 119, 255, 0.1) !important;
    border: 1px solid rgba(22, 119, 255, 0.2);
    font-weight: 600;
    text-align: center;
    width: 100%;
    margin-bottom: 8px;
    transition: all 0.3s ease;
  }

  .menu-item:hover {
    color: #ffffff !important;
    background: rgba(22, 119, 255, 0.25) !important;
    border-color: rgba(22, 119, 255, 0.4);
    transform: translateX(4px);
  }

  .menu-item.active {
    color: #ffffff !important;
    background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
    border-color: #1677ff;
    box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
  }

  .menu-item::before {
    display: none;
  }

  .menu-label {
    position: relative;
    z-index: 2;
  }

  .active-underline {
    display: none;
  }
}

/* 小屏手机样式 */
@media (max-width: 480px) {
  .header {
    min-height: 50px;
  }

  .header-content {
    padding: 10px 16px;
    min-height: 50px;
  }

  .logo {
    font-size: 18px !important;
    line-height: 1.2 !important;
  }

  .mobile-menu-toggle {
    width: 26px;
    height: 26px;
  }

  .mobile-menu-toggle span {
    height: 2px;
  }

  .menu-bar {
    padding: 16px;
  }

  .menu-item {
    font-size: 15px;
    padding: 14px 16px;
    margin-bottom: 6px;
  }
}
</style>
