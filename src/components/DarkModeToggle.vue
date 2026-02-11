<template>
  <button
    class="dark-mode-toggle"
    @click="toggleDarkMode"
    :class="{ 'dark': isDarkMode }"
    :aria-label="isDarkMode ? '切换到亮色模式' : '切换到暗色模式'"
    title="切换主题模式"
  >
    <svg v-if="!isDarkMode" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C12.3882 2.5 14.5 4.6118 14.5 7C14.5 7.27614 14.4811 7.54689 14.444 7.80897C15.3956 8.15955 16.2337 8.67534 16.93 9.31C17.1315 9.49758 17.3192 9.69236 17.4911 9.8908C17.5 10 17.5 10 17.5 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 2V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 16V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 10H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 10H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.63604 5.63604L6.34315 6.34315" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.6569 13.6569L14.364 14.364" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.63604 14.364L6.34315 13.6569" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.6569 6.34315L14.364 5.63604" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span class="toggle-text">{{ isDarkMode ? '亮色' : '暗色' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const emit = defineEmits<{
  (e: 'toggle', isDark: boolean): void
}>()

const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  updateDarkMode(isDarkMode.value)
  emit('toggle', isDarkMode.value)
}

const updateDarkMode = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

const loadDarkMode = () => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    isDarkMode.value = savedMode === 'true'
  } else {
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDarkMode(isDarkMode.value)
}

onMounted(() => {
  loadDarkMode()
  
  // 监听系统主题变化
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    isDarkMode.value = e.matches
    updateDarkMode(isDarkMode.value)
    emit('toggle', isDarkMode.value)
  })
})
</script>

<style scoped>
/* 暗色模式切换按钮 */
.dark-mode-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--color-surface-variant);
  border: 2px solid var(--color-outline);
  border-radius: var(--radius-full);
  color: var(--color-on-surface);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(4px);
}

/* 按钮背景渐变效果 */
.dark-mode-toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(22, 119, 255, 0.1), transparent);
  transition: left 0.6s ease;
  z-index: 1;
}

.dark-mode-toggle:hover::before {
  left: 100%;
}

/* 悬停效果 */
.dark-mode-toggle:hover {
  background: var(--color-surface-hover);
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

/* 激活状态 */
.dark-mode-toggle.dark {
  background: var(--gradient-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-primary);
}

.dark-mode-toggle.dark:hover {
  background: var(--gradient-primary-hover);
  box-shadow: var(--shadow-primary-lg);
  transform: translateY(-2px) scale(1.02);
}

/* 切换文本 */
.toggle-text {
  white-space: nowrap;
  font-weight: 600;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

/* 图标样式 */
.dark-mode-toggle svg {
  width: 20px;
  height: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

/* 悬停时的图标动画 */
.dark-mode-toggle:hover svg {
  transform: rotate(180deg) scale(1.1);
}

/* 激活状态的图标动画 */
.dark-mode-toggle.dark svg {
  transform: scale(1.1);
}

/* 点击效果 */
.dark-mode-toggle:active {
  transform: translateY(0) scale(0.98);
  transition: all 0.1s ease;
}

.dark-mode-toggle.dark:active {
  transform: translateY(0) scale(0.98);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .dark-mode-toggle {
    padding: 8px 16px;
    font-size: 12px;
    gap: 8px;
  }
  
  .toggle-text {
    display: none;
  }
  
  .dark-mode-toggle svg {
    width: 18px;
    height: 18px;
  }
  
  .dark-mode-toggle:hover svg {
    transform: rotate(180deg) scale(1.05);
  }
}

@media (max-width: 480px) {
  .dark-mode-toggle {
    padding: 6px 12px;
  }
  
  .dark-mode-toggle svg {
    width: 16px;
    height: 16px;
  }
}

/* 高性能动画 */
@media (prefers-reduced-motion: reduce) {
  .dark-mode-toggle::before {
    transition: none;
  }
  
  .dark-mode-toggle,
  .dark-mode-toggle svg {
    transition: all 0.2s ease;
  }
  
  .dark-mode-toggle:hover svg {
    transform: none;
  }
}

/* 焦点状态 */
.dark-mode-toggle:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(22, 119, 255, 0.2);
}

.dark-mode-toggle.dark:focus {
  box-shadow: 0 0 0 4px rgba(22, 119, 255, 0.4);
}
</style>