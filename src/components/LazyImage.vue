<template>
  <div 
    ref="imageContainer" 
    class="lazy-image-container"
    :class="{ 'loaded': isLoaded, 'loading': isLoading, 'error': hasError }"
    :style="containerStyle"
  >
    <!-- 响应式图片 -->
    <picture v-if="shouldLoad">
      <!-- WebP 格式支持 -->
      <source 
        v-if="webpSrc" 
        :srcset="webpSrc" 
        type="image/webp"
      />
      <!-- 响应式图片 -->
      <source 
        v-if="srcSet" 
        :srcset="srcSet"
        :sizes="sizes"
      />
      <!--  fallback -->
      <img
        :src="optimizedSrc"
        :alt="alt"
        :class="imageClass"
        :loading="preload ? 'eager' : 'lazy'"
        :decoding="decoding"
        :crossorigin="crossorigin"
        @load="onLoad"
        @error="onError"
      />
    </picture>
    
    <!-- 加载占位符 -->
    <div v-if="!isLoaded && !hasError" class="lazy-placeholder">
      <div class="lazy-spinner" v-if="isLoading"></div>
      <div v-else class="lazy-placeholder-content">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="4" fill="#f0f0f0"/>
          <path d="M12 16L16 12L24 20L28 16V28H12V16Z" fill="#d9d9d9"/>
        </svg>
      </div>
    </div>
    
    <!-- 错误状态 -->
    <div v-if="hasError" class="lazy-error">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="4" fill="#fef2f2"/>
        <path d="M20 10L15 25H25L20 10Z" fill="#f87171"/>
        <circle cx="20" cy="32" r="2" fill="#f87171"/>
      </svg>
      <span v-if="showErrorText">图片加载失败</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  src: string
  alt?: string
  imageClass?: string
  rootMargin?: string
  threshold?: number
  preload?: boolean
  aspectRatio?: string
  webpSrc?: string
  srcSet?: string
  sizes?: string
  decoding?: 'async' | 'sync' | 'auto'
  crossorigin?: string
  showErrorText?: boolean
  blurPlaceholder?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  imageClass: '',
  rootMargin: '50px',
  threshold: 0.1,
  preload: false,
  aspectRatio: '',
  webpSrc: '',
  srcSet: '',
  sizes: '',
  decoding: 'async',
  crossorigin: '',
  showErrorText: true,
  blurPlaceholder: false
})

const imageContainer = ref<HTMLElement>()
const shouldLoad = ref(false)
const isLoaded = ref(false)
const isLoading = ref(false)
const hasError = ref(false)

let observer: IntersectionObserver | null = null

// 计算容器样式
const containerStyle = computed(() => {
  const styles: Record<string, string> = {}
  if (props.aspectRatio) {
    styles.paddingBottom = props.aspectRatio
  }
  return styles
})

// 优化图片 URL
const optimizedSrc = computed(() => {
  // 这里可以添加图片优化的逻辑，比如添加压缩参数
  return props.src
})

// WebP 图片 URL
const webpSrc = computed(() => {
  return props.webpSrc || ''
})

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
  // 如果需要预加载，直接加载
  if (props.preload) {
    startLoading()
    return
  }
  
  // 使用 IntersectionObserver 懒加载
  if ('IntersectionObserver' in window && imageContainer.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startLoading()
            // 只观察一次
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
  background-color: var(--color-gray-100);
  border-radius: var(--radius-md);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}

/* 保持图片比例 */
.lazy-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: scale(1.05);
}

/* 加载完成状态 */
.lazy-image-container.loaded img {
  opacity: 1;
  transform: scale(1);
  box-shadow: var(--shadow-md);
}

/* 加载占位符 */
.lazy-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-gray-100) 100%);
  transition: opacity 0.4s ease;
  border-radius: var(--radius-md);
}

.lazy-image-container.loaded .lazy-placeholder {
  opacity: 0;
  pointer-events: none;
}

.lazy-placeholder-content {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.3s ease;
  padding: 20px;
}

/* 加载动画 */
.lazy-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--color-gray-200);
  border-top: 3px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(22, 119, 255, 0.1);
}

/* 错误状态 */
.lazy-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
  color: var(--color-error);
  font-size: 14px;
  gap: 12px;
  transition: all 0.4s ease;
  border-radius: var(--radius-md);
  padding: 20px;
  text-align: center;
  border: 1px solid var(--color-error-light);
}

.lazy-error svg {
  opacity: 0.8;
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.lazy-error:hover svg {
  transform: scale(1.2);
}

/* 模糊占位符效果 */
.lazy-image-container.blur-placeholder .lazy-placeholder {
  background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-gray-200) 100%);
  backdrop-filter: blur(8px);
}

/* 动画 */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 响应式优化 */
@media (max-width: 768px) {
  .lazy-spinner {
    width: 24px;
    height: 24px;
    border-width: 2px;
  }
  
  .lazy-placeholder-content svg,
  .lazy-error svg {
    width: 40px;
    height: 40px;
  }
  
  .lazy-error span {
    font-size: 12px;
  }
  
  .lazy-placeholder-content {
    padding: 15px;
  }
  
  .lazy-error {
    padding: 15px;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .lazy-spinner {
    width: 20px;
    height: 20px;
  }
  
  .lazy-placeholder-content svg,
  .lazy-error svg {
    width: 32px;
    height: 32px;
  }
  
  .lazy-error span {
    font-size: 11px;
  }
  
  .lazy-placeholder-content {
    padding: 10px;
  }
  
  .lazy-error {
    padding: 10px;
  }
}

/* 高性能动画 */
@media (prefers-reduced-motion: reduce) {
  .lazy-spinner {
    animation: none;
    border: 2px solid var(--color-primary);
    border-radius: 50%;
  }
  
  .lazy-image-container img {
    transition: opacity 0.4s ease;
    transform: none;
  }
  
  .lazy-placeholder,
  .lazy-error {
    transition: opacity 0.3s ease;
  }
}

/* 悬停效果 */
.lazy-image-container:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

/* 加载中状态的悬停效果 */
.lazy-image-container.loading:hover {
  transform: none;
  box-shadow: var(--shadow-sm);
}
</style>
