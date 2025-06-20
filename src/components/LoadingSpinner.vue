<template>
  <div class="loading-spinner" :class="spinnerClasses">
    <div v-if="type === 'dots'" class="dots-spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    
    <div v-else-if="type === 'ring'" class="ring-spinner">
      <div class="ring"></div>
    </div>
    
    <div v-else-if="type === 'pulse'" class="pulse-spinner">
      <div class="pulse"></div>
    </div>
    
    <div v-else-if="type === 'bars'" class="bars-spinner">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    
    <div v-else class="default-spinner">
      <svg class="spinner-svg" viewBox="0 0 50 50">
        <circle
          class="spinner-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-dasharray="31.416"
          stroke-dashoffset="31.416"
        />
      </svg>
    </div>
    
    <span v-if="text" class="loading-text">{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'default' | 'dots' | 'ring' | 'pulse' | 'bars'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'secondary' | 'white'
  text?: string
  overlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'md',
  color: 'primary',
  overlay: false
})

const spinnerClasses = computed(() => ({
  [`loading-spinner--${props.size}`]: true,
  [`loading-spinner--${props.color}`]: true,
  'loading-spinner--overlay': props.overlay,
  'loading-spinner--with-text': !!props.text
}))
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.loading-spinner--overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  backdrop-filter: blur(2px);
}

/* 尺寸变量 */
.loading-spinner--sm {
  --spinner-size: 20px;
  --text-size: 12px;
}

.loading-spinner--md {
  --spinner-size: 32px;
  --text-size: 14px;
}

.loading-spinner--lg {
  --spinner-size: 48px;
  --text-size: 16px;
}

.loading-spinner--xl {
  --spinner-size: 64px;
  --text-size: 18px;
}

/* 颜色变量 */
.loading-spinner--primary {
  --spinner-color: #0070f3;
}

.loading-spinner--secondary {
  --spinner-color: #666;
}

.loading-spinner--white {
  --spinner-color: #fff;
}

/* 默认 SVG 加载器 */
.default-spinner {
  width: var(--spinner-size);
  height: var(--spinner-size);
}

.spinner-svg {
  width: 100%;
  height: 100%;
  animation: rotate 2s linear infinite;
}

.spinner-circle {
  stroke: var(--spinner-color);
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

/* 点状加载器 */
.dots-spinner {
  display: flex;
  gap: 4px;
}

.dot {
  width: calc(var(--spinner-size) / 4);
  height: calc(var(--spinner-size) / 4);
  background-color: var(--spinner-color);
  border-radius: 50%;
  animation: dotBounce 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

@keyframes dotBounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

/* 环形加载器 */
.ring-spinner {
  width: var(--spinner-size);
  height: var(--spinner-size);
}

.ring {
  width: 100%;
  height: 100%;
  border: 3px solid rgba(0, 112, 243, 0.2);
  border-top: 3px solid var(--spinner-color);
  border-radius: 50%;
  animation: ringRotate 1s linear infinite;
}

@keyframes ringRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 脉冲加载器 */
.pulse-spinner {
  width: var(--spinner-size);
  height: var(--spinner-size);
}

.pulse {
  width: 100%;
  height: 100%;
  background-color: var(--spinner-color);
  border-radius: 50%;
  animation: pulseScale 1s ease-in-out infinite;
}

@keyframes pulseScale {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

/* 条形加载器 */
.bars-spinner {
  display: flex;
  gap: 2px;
  align-items: end;
  height: var(--spinner-size);
}

.bar {
  width: calc(var(--spinner-size) / 6);
  background-color: var(--spinner-color);
  animation: barStretch 1.2s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: -1.1s; }
.bar:nth-child(2) { animation-delay: -1.0s; }
.bar:nth-child(3) { animation-delay: -0.9s; }
.bar:nth-child(4) { animation-delay: -0.8s; }

@keyframes barStretch {
  0%, 40%, 100% {
    height: 20%;
  }
  20% {
    height: 100%;
  }
}

/* 加载文本 */
.loading-text {
  font-size: var(--text-size);
  color: var(--spinner-color);
  font-weight: 500;
  text-align: center;
  animation: textFade 2s ease-in-out infinite;
}

@keyframes textFade {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .loading-spinner--overlay {
    backdrop-filter: blur(1px);
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .loading-spinner--overlay {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .loading-spinner--secondary {
    --spinner-color: #ccc;
  }
}

/* 减少动画偏好设置 */
@media (prefers-reduced-motion: reduce) {
  .spinner-svg,
  .dot,
  .ring,
  .pulse,
  .bar,
  .loading-text {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
