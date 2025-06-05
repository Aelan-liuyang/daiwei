<template>
  <a-layout-header class="header">
    <div class="logo">山东岱威创新管业</div>
    <a-menu mode="horizontal" theme="dark" :selectedKeys="[selectedMenu]">
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

const selectedMenu = ref('home')
const isFixed = ref(false)

const handleScroll = () => {
  isFixed.value = window.scrollY > 50
}

const handleMenuClick = (e) => {
  selectedMenu.value = e.key
}

onMounted(() => {
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
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-right: 32px;
  letter-spacing: 2px;
}
</style>