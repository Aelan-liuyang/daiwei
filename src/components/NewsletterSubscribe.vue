<template>
  <div class="newsletter-subscribe">
    <div class="newsletter-content">
      <!-- 装饰图标 -->
      <div class="newsletter-icon">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      </div>

      <h3 class="newsletter-title">{{ title }}</h3>
      <p class="newsletter-description">{{ description }}</p>

      <form @submit.prevent="handleSubmit" class="newsletter-form">
        <!-- 成功状态 -->
        <div v-if="successMessage" class="success-state">
          <div class="success-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <span class="success-text">{{ successMessage }}</span>
        </div>

        <!-- 表单内容 -->
        <template v-else>
          <div class="form-group">
            <div class="input-wrapper" :class="{ error: errorMessage }">
              <svg
                class="input-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                v-model="email"
                type="email"
                placeholder="请输入您的邮箱地址"
                class="newsletter-input"
                required
                @input="clearError"
              />
            </div>
            <button
              type="submit"
              class="newsletter-button"
              :disabled="isSubmitting"
              :class="{ loading: isSubmitting }"
            >
              <span v-if="!isSubmitting" class="btn-content">
                <span>{{ buttonText }}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
              <span v-else class="loading-content">
                <svg class="loading-spinner" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-dasharray="60"
                    stroke-dashoffset="60"
                    class="spin"
                  />
                </svg>
                提交中...
              </span>
            </button>
          </div>

          <!-- 错误消息 -->
          <Transition name="slide-down">
            <p v-if="errorMessage" class="error-message">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {{ errorMessage }}
            </p>
          </Transition>

          <!-- 隐私协议 -->
          <div class="newsletter-privacy" v-if="showPrivacy">
            <label class="privacy-checkbox-wrapper">
              <input v-model="privacyConsent" type="checkbox" class="privacy-checkbox" required />
              <span class="checkbox-custom">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span class="privacy-label"> 我同意接收岱威管业的新闻和产品更新信息 </span>
            </label>
          </div>
        </template>
      </form>
    </div>

    <!-- 背景装饰 -->
    <div class="bg-decoration">
      <div class="bg-circle circle-1"></div>
      <div class="bg-circle circle-2"></div>
      <div class="bg-circle circle-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  title?: string
  description?: string
  buttonText?: string
  showPrivacy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '订阅我们的动态',
  description: '第一时间获取公司新闻、产品更新和行业资讯',
  buttonText: '立即订阅',
  showPrivacy: true
})

const emit = defineEmits<{
  (e: 'subscribe', email: string): void
  (e: 'success'): void
  (e: 'error', message: string): void
}>()

const email = ref('')
const privacyConsent = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const clearError = () => {
  errorMessage.value = ''
}

const handleSubmit = async () => {
  if (!validateEmail(email.value)) {
    errorMessage.value = '请输入有效的邮箱地址'
    return
  }

  if (props.showPrivacy && !privacyConsent.value) {
    errorMessage.value = '请同意隐私协议以继续'
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 触发订阅事件
    emit('subscribe', email.value)
    emit('success')

    // 显示成功消息
    successMessage.value = '订阅成功！感谢您的关注。'
    email.value = ''
    privacyConsent.value = false

    // 5秒后清除成功消息，恢复表单
    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : '订阅失败，请稍后重试'
    errorMessage.value = errorMsg
    emit('error', errorMsg)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* 容器 */
.newsletter-subscribe {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border-radius: 24px;
  padding: 48px;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(8, 145, 255, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 背景装饰 */
.bg-decoration {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation: float 10s ease-in-out infinite reverse;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 30%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

/* 内容区 */
.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
}

/* 图标 */
.newsletter-icon {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
}

.newsletter-icon svg {
  color: white;
}

/* 标题 */
.newsletter-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
  color: white;
}

/* 描述 */
.newsletter-description {
  font-size: 16px;
  margin-bottom: 32px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

/* 表单 */
.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 成功状态 */
.success-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  background: rgba(16, 185, 129, 0.2);
  border: 1px solid rgba(16, 185, 129, 0.4);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  animation: successPop 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes successPop {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.success-icon {
  width: 32px;
  height: 32px;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.success-text {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

/* 表单组 */
.form-group {
  display: flex;
  gap: 12px;
  align-items: stretch;
}

/* 输入框包装器 */
.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  border-radius: 12px;
  padding: 4px 4px 4px 16px;
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.input-wrapper:focus-within {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.15),
    0 0 0 4px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.input-wrapper.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.input-wrapper.error .input-icon {
  color: #ef4444;
}

.input-icon {
  color: #64748b;
  flex-shrink: 0;
  transition: color 0.3s ease;
}

.input-wrapper:focus-within .input-icon {
  color: #0891ff;
}

.newsletter-input {
  flex: 1;
  padding: 14px 12px 14px 0;
  border: none;
  background: transparent;
  font-size: 15px;
  outline: none;
  color: #0f172a;
  min-width: 0;
}

.newsletter-input::placeholder {
  color: #94a3b8;
}

/* 按钮 */
.newsletter-button {
  padding: 14px 28px;
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  min-width: 140px;
}

.newsletter-button:hover:not(:disabled) {
  background: #1e293b;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.newsletter-button:active:not(:disabled) {
  transform: translateY(0);
}

.newsletter-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* 加载动画 */
.loading-spinner {
  animation: rotate 1s linear infinite;
}

.loading-spinner .spin {
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 60;
  }
  50% {
    stroke-dashoffset: 15;
  }
  100% {
    stroke-dashoffset: 60;
  }
}

/* 错误消息 */
.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 10px;
  font-size: 14px;
  color: #fee2e2;
  backdrop-filter: blur(8px);
}

/* 过渡动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* 隐私协议 */
.newsletter-privacy {
  margin-top: 8px;
}

.privacy-checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.privacy-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.checkbox-custom svg {
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s ease;
  color: white;
}

.privacy-checkbox:checked + .checkbox-custom {
  background: #0f172a;
  border-color: #0f172a;
}

.privacy-checkbox:checked + .checkbox-custom svg {
  opacity: 1;
  transform: scale(1);
}

.privacy-checkbox-wrapper:hover .checkbox-custom {
  border-color: rgba(255, 255, 255, 0.8);
}

.privacy-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  user-select: none;
  transition: color 0.3s ease;
}

.privacy-checkbox-wrapper:hover .privacy-label {
  color: white;
}

/* 响应式 */
@media (max-width: 640px) {
  .newsletter-subscribe {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .newsletter-title {
    font-size: 22px;
  }

  .newsletter-description {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .form-group {
    flex-direction: column;
  }

  .input-wrapper {
    width: 100%;
  }

  .newsletter-button {
    width: 100%;
    padding: 14px;
  }

  .newsletter-icon {
    width: 56px;
    height: 56px;
  }

  .success-state {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .newsletter-subscribe {
    padding: 28px 20px;
  }

  .newsletter-title {
    font-size: 20px;
  }

  .privacy-label {
    font-size: 13px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .bg-circle,
  .loading-spinner,
  .loading-spinner .spin {
    animation: none;
  }

  .success-state {
    animation: none;
  }

  .newsletter-button,
  .input-wrapper {
    transition: all 0.2s ease;
  }
}
</style>
