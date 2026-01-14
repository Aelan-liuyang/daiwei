<template>
  <div 
    ref="imageContainer" 
    class="lazy-image-container"
    :class="{ 'loaded': isLoaded, 'loading': isLoading }"
  >
    <img
      v-if="shouldLoad"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onLoad"
      @error="onError"
    />
    <div v-if="!isLoaded && !hasError" class="lazy-placeholder">
      <div class="lazy-spinner" v-if="isLoading"></div>
      <div v-else class="lazy-placeholder-content">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="4" fill="#f0f0f0"/>
          <path d="M12 16L16 12L24 20L28 16V28H12V16Z" fill="#d9d9d9"/>
        </svg>
      </div>
    </div>
    <div v-if="hasError" class="lazy-error">
      <span>图片加载失败</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  src: string
  alt?: string
  imageClass?: string
  rootMargin?: string
  threshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  imageClass: '',
  rootMargin: '50px',
  threshold: 0.1
})

const imageContainer = ref<HTMLElement>()
const shouldLoad = ref(false)
const isLoaded = ref(false)
const isLoading = ref(false)
const hasError = ref(false)

let observer: IntersectionObserver | null = null

const onLoad = () => {
  isLoading.value = false
  isLoaded.value = true
}

const onError = () => {
  isLoading.value = false
  hasError.value = true
}

const startLoading = () => {
  if (!shouldLoad.value) {
    shouldLoad.value = true
    isLoading.value = true
  }
}

onMounted(() => {
  if ('IntersectionObserver' in window && imageContainer.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startLoading()
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: props.rootMargin,
        threshold: props.threshold
      }
    )
    
    observer.observe(imageContainer.value)
  } else {
    // 降级处理：直接加载图片
    startLoading()
  }
})

onUnmounted(() => {
  if (observer && imageContainer.value) {
    observer.unobserve(imageContainer.value)
  }
})
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  transition: all 0.3s ease;
}

.lazy-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.lazy-image-container.loaded img {
  opacity: 1;
}

.lazy-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.lazy-placeholder-content {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
}

.lazy-spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e1e1e1;
  border-top: 2px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.lazy-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  color: #999;
  font-size: 12px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .lazy-spinner {
    width: 20px;
    height: 20px;
  }
}
</style>
