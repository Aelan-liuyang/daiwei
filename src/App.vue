<script setup lang="ts">
import OnlineChat from '@/components/OnlineChat.vue'
</script>
<template>
  <div class="app-container">
    <router-view></router-view>
    <OnlineChat />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
}
</style>