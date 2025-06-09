<template>
  <a-layout-header class="header" :class="{ fixed: isFixed }">
    <div class="logo" @click="router.push('/')">山东岱威创新管业</div>
    <nav class="menu-bar">
      <div
        v-for="item in menuList"
        :key="item.key"
        ref="menuRefs"
        :class="['menu-item', { active: selectedMenu === item.key }]"
        @click="handleMenuClick(item.key)">
        <span class="menu-label">{{ item.label }}</span>
        <span
          v-if="selectedMenu === item.key"
          class="active-underline"
          :style="getUnderlineStyle(item.key)"></span>
      </div>
    </nav>
  </a-layout-header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isFixed = ref(false)

const menuList = [
  { key: 'home', label: '首页', path: '/' },
  { key: 'products', label: '产品服务', path: '/products' },
  { key: 'cases', label: '工程案例', path: '/cases' },
  { key: 'news', label: '新闻中心', path: '/news' },
  { key: 'about', label: '关于我们', path: '/about' },
  { key: 'contact', label: '联系我们', path: '/contact' }
]

// 用于存储每个菜单项的宽度
const menuRefs = ref([]) // 这里存放元素引用
const underlineWidths = ref({})

// 计算下划线样式
const getUnderlineStyle = key => {
  let width = underlineWidths.value[key]
  if (!width) width = 0
  return {
    width: width + 'px'
  }
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

const handleMenuClick = (key) => {
  selectedMenu.value = key
  const item = menuList.find(i => i.key === key)
  if (item && item.path) {
    router.push(item.path)
  }
}

onMounted(() => {
  const pathToKey = {
    '/': 'home',
    '/products': 'products',
    '/cases': 'cases',
    '/news': 'news',
    '/about': 'about',
    '/contact': 'contact',
    '/productDetail': 'productDetail',
    '/newsDetail': 'newsDetail'
  }
  selectedMenu.value = pathToKey[route.path] || 'home'
  window.addEventListener('scroll', handleScroll)
  updateUnderlineWidths()
  window.addEventListener('resize', updateUnderlineWidths)
})

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
  background: #001529;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: box-shadow 0.2s;
  padding: 0 48px;
  min-height: 64px;
}

.header.fixed {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);
}

.logo {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 40px;
  line-height: 64px;
}

.menu-bar {
  display: flex;
  gap: 36px;
}

.menu-item {
  position: relative;
  color: #cfd8dc;
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.21s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-item:hover {
  color: #fff;
}

.menu-item.active {
  color: #fff;
  font-weight: 700;
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
  background: linear-gradient(90deg, #1677ff 60%, #56cbf9 100%);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: width 0.22s cubic-bezier(.4, 1.3, .7, 1), background 0.22s;
  z-index: 0;
  pointer-events: none;
}

@media (max-width: 800px) {
  .header {
    flex-direction: column;
    padding: 0 10px;
    min-height: 55px;
  }

  .logo {
    font-size: 18px;
    line-height: 50px;
    margin-bottom: 2px;
  }

  .menu-bar {
    gap: 12px;
  }

  .menu-item {
    font-size: 15px;
    padding: 0 4px;
    line-height: 36px;
  }

  .active-underline {
    height: 2px;
    bottom: 5px;
  }
}
</style>