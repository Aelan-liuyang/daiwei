<template>
  <a-layout-header class="header">
    <div class="logo">山东岱威创新管业</div>
    <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">公司介绍</a-menu-item>
      <a-menu-item key="3">产品优势</a-menu-item>
      <a-menu-item key="4">媒体中心</a-menu-item>
      <a-menu-item key="5">联系我们</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

}

.logo {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}
</style>