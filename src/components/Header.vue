<template>
  <a-layout-header class="header" :class="{ fixed: isFixed }">
    <div class="logo">山东岱威创新管业</div>
    <a-menu
      mode="horizontal"
      theme="dark"
      :selectedKeys="[selectedMenu]"
      @click="handleMenuClick">
      <a-menu-item key="home">首页</a-menu-item>
      <a-menu-item key="products">产品服务</a-menu-item>
      <a-menu-item key="cases">工程案例</a-menu-item>
      <a-menu-item key="about">关于我们</a-menu-item>
      <a-menu-item key="contact">联系我们</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const selectedMenu = ref('home')
const isFixed = ref(false)

const menuToRoute = {
  home: '/',
  products: '/products',
  cases: '/cases',
  about: '/about',
  contact: '/contact'
}

const handleScroll = () => {
  isFixed.value = window.scrollY > 50
}

const handleMenuClick = (e) => {
  selectedMenu.value = e.key
  // 跳转路由
  const path = menuToRoute[e.key]
  if (path) {
    if (path.startsWith('/#')) {
      // 锚点跳转
      const id = path.split('#')[1]
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push('/').then(() => {
          setTimeout(() => {
            const el2 = document.getElementById(id)
            if (el2) el2.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        })
      }
    } else {
      router.push(path)
    }
  }
}

onMounted(() => {
  // 根据当前路由设置选中菜单
  if (route.path === '/') selectedMenu.value = 'home'
  else if (route.path === '/about') selectedMenu.value = 'about'
  else if (route.path === '/products') selectedMenu.value = 'products'
  else if (route.path === '/cases') selectedMenu.value = 'cases'
  else if (route.path === '/contact') selectedMenu.value = 'contact'
  else selectedMenu.value = 'home'
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
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
}

.header.fixed {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-right: 32px;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
}
</style>