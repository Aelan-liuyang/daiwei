<template>
  <div class="breadcrumb-section">
    <div class="breadcrumb-container">
      <nav class="breadcrumb-nav">
        <router-link to="/" class="breadcrumb-item">
          <span class="breadcrumb-icon">🏠</span>
          首页
        </router-link>
        <span class="breadcrumb-separator">/</span>
        <template v-for="(item, index) in items" :key="item.path || item.text">
          <router-link v-if="item.path" :to="item.path" class="breadcrumb-item">
            <span v-if="item.icon" class="breadcrumb-icon">{{ item.icon }}</span>
            {{ item.text }}
          </router-link>
          <span v-else class="breadcrumb-item current">
            <span v-if="item.icon" class="breadcrumb-icon">{{ item.icon }}</span>
            {{ item.text }}
          </span>
          <span v-if="index < items.length - 1" class="breadcrumb-separator">/</span>
        </template>
      </nav>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
/* 简化的面包屑导航样式 */
.breadcrumb-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.breadcrumb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.breadcrumb-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 2px 4px;
  border-radius: 4px;
}

.breadcrumb-item:hover {
  color: #1677ff;
}

.breadcrumb-item.current {
  color: #1e293b;
  font-weight: 600;
}

.breadcrumb-separator {
  color: #9ca3af;
  font-weight: 400;
  user-select: none;
}

.breadcrumb-icon {
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .breadcrumb-container {
    padding: 0 16px;
  }

  .breadcrumb-nav {
    font-size: 13px;
    gap: 6px;
  }

  .breadcrumb-icon {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .breadcrumb-section {
    padding: 10px 0;
  }

  .breadcrumb-container {
    padding: 0 12px;
  }

  .breadcrumb-nav {
    font-size: 12px;
    gap: 4px;
  }

  .breadcrumb-icon {
    font-size: 10px;
  }
}
</style>
