<template>
  <Teleport to="body">
    <div class="toast-container" :class="positionClass">
      <TransitionGroup name="toast" tag="div">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast"
          :class="getToastClass(toast)"
          @click="removeToast(toast.id)">
          <div class="toast-icon">
            <component :is="getIcon(toast.type)" />
          </div>

          <div class="toast-content">
            <div v-if="toast.title" class="toast-title">{{ toast.title }}</div>
            <div class="toast-message">{{ toast.message }}</div>
          </div>

          <button
            v-if="toast.closable !== false"
            class="toast-close"
            @click.stop="removeToast(toast.id)"
            aria-label="关闭通知">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <div
            v-if="toast.duration && toast.duration > 0"
            class="toast-progress"
            :style="{ animationDuration: `${toast.duration}ms` }"></div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// 临时的 toast 管理
const toasts = ref<any[]>([])
const removeToast = (id: string) => {
  const index = toasts.value.findIndex((t: any) => t.id === id)
  if (index > -1) {
    toasts.value.splice(index, 1)
  }
}

interface Props {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'top-right'
})

const positionClass = computed(() => `toast-container--${props.position}`)

const getToastClass = (toast: any) => ({
  [`toast--${toast.type}`]: true,
  'toast--with-title': !!toast.title
})

const getIcon = (type: string) => {
  const icons = {
    success: 'CheckCircleIcon',
    error: 'XCircleIcon',
    warning: 'ExclamationTriangleIcon',
    info: 'InformationCircleIcon'
  }
  return icons[type as keyof typeof icons] || 'InformationCircleIcon'
}

// 图标组件
const CheckCircleIcon = {
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
    </svg>
  `
}

const XCircleIcon = {
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
    </svg>
  `
}

const ExclamationTriangleIcon = {
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
    </svg>
  `
}

const InformationCircleIcon = {
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>
  `
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 100%;
}

.toast-container--top-right {
  top: 20px;
  right: 20px;
}

.toast-container--top-left {
  top: 20px;
  left: 20px;
}

.toast-container--bottom-right {
  bottom: 20px;
  right: 20px;
}

.toast-container--bottom-left {
  bottom: 20px;
  left: 20px;
}

.toast-container--top-center {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toast-container--bottom-center {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-left: 4px solid;
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  max-width: 100%;
  word-wrap: break-word;
}

.toast:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.toast--success {
  border-left-color: #10b981;
}

.toast--error {
  border-left-color: #ef4444;
}

.toast--warning {
  border-left-color: #f59e0b;
}

.toast--info {
  border-left-color: #3b82f6;
}

.toast-icon {
  flex-shrink: 0;
  margin-top: 2px;
}

.toast--success .toast-icon {
  color: #10b981;
}

.toast--error .toast-icon {
  color: #ef4444;
}

.toast--warning .toast-icon {
  color: #f59e0b;
}

.toast--info .toast-icon {
  color: #3b82f6;
}

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-weight: 600;
  font-size: 14px;
  color: #1f2937;
  margin-bottom: 4px;
  line-height: 1.4;
}

.toast-message {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
}

.toast-close {
  flex-shrink: 0;
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  transition: all 0.2s ease;
  margin-top: 2px;
}

.toast-close:hover {
  color: #6b7280;
  background-color: #f3f4f6;
}

.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1));
  animation: toastProgress linear forwards;
}

.toast--success .toast-progress {
  background: linear-gradient(90deg, #10b981, rgba(16, 185, 129, 0.3));
}

.toast--error .toast-progress {
  background: linear-gradient(90deg, #ef4444, rgba(239, 68, 68, 0.3));
}

.toast--warning .toast-progress {
  background: linear-gradient(90deg, #f59e0b, rgba(245, 158, 11, 0.3));
}

.toast--info .toast-progress {
  background: linear-gradient(90deg, #3b82f6, rgba(59, 130, 246, 0.3));
}

@keyframes toastProgress {
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
}

/* 动画 */
.toast-enter-active {
  transition: all 0.3s ease;
}

.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .toast-container {
    left: 10px !important;
    right: 10px !important;
    max-width: none;
    transform: none !important;
  }

  .toast {
    padding: 12px;
    gap: 8px;
  }

  .toast-title,
  .toast-message {
    font-size: 13px;
  }
}

/* 深色模式支持 */
@media (prefers-color-scheme: dark) {
  .toast {
    background: #1f2937;
    color: #f9fafb;
  }

  .toast-title {
    color: #f9fafb;
  }

  .toast-message {
    color: #d1d5db;
  }

  .toast-close {
    color: #9ca3af;
  }

  .toast-close:hover {
    color: #d1d5db;
    background-color: #374151;
  }
}
</style>