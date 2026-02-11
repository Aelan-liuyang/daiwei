<template>
  <div class="online-chat-container" :class="{ 'chat-open': isOpen }">
    <!-- 聊天按钮 -->
    <button
      class="chat-toggle-btn"
      @click="toggleChat"
      :class="{ active: isOpen, 'has-unread': unreadCount > 0 }"
      aria-label="在线咨询"
    >
      <div class="btn-icon">
        <svg
          v-if="!isOpen"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6L18 18" />
        </svg>
      </div>
      <span class="chat-badge" v-if="unreadCount > 0">{{ unreadCount }}</span>
      <div class="btn-pulse-ring" v-if="!isOpen && unreadCount > 0"></div>
    </button>

    <!-- 聊天窗口 -->
    <Transition name="chat-window">
      <div class="chat-window" v-if="isOpen">
        <!-- 聊天头部 -->
        <div class="chat-header">
          <div class="header-left">
            <div class="avatar-wrap">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#ffffff" />
                <path
                  d="M12 24V12C12 10.8954 12.8954 10 14 10H22C23.1046 10 24 10.8954 24 12V24"
                  stroke="#0891ff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path d="M10 26H26" stroke="#0891ff" stroke-width="2" stroke-linecap="round" />
                <circle cx="18" cy="17" r="3" fill="#0891ff" />
              </svg>
              <span class="online-indicator"></span>
            </div>
            <div class="header-info">
              <div class="chat-title">在线客服</div>
              <div class="chat-subtitle">岱威管业 · 专业顾问</div>
            </div>
          </div>
          <div class="header-actions">
            <button class="header-btn" @click="clearChat" title="清空对话">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14"
                />
              </svg>
            </button>
            <button class="header-btn close-btn" @click="toggleChat" title="关闭">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6L18 18" />
              </svg>
            </button>
          </div>
        </div>

        <!-- 聊天消息区 -->
        <div class="chat-messages" ref="messagesContainer">
          <!-- 欢迎消息 -->
          <div class="welcome-message" v-if="messages.length === 0">
            <div class="welcome-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="24" fill="#e0f2fe" />
                <path
                  d="M16 32V20C16 18.8954 16.8954 18 18 18H30C31.1046 18 32 18.8954 32 20V32"
                  stroke="#0891ff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path d="M14 34H34" stroke="#0891ff" stroke-width="2" stroke-linecap="round" />
                <circle cx="24" cy="25" r="4" fill="#0891ff" />
              </svg>
            </div>
            <div class="welcome-content">
              <h4>您好，欢迎咨询！</h4>
              <p>我是岱威管业的智能客服助手，很高兴为您服务。请问有什么可以帮助您的？</p>
              <div class="welcome-features">
                <span class="feature-tag">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  产品咨询
                </span>
                <span class="feature-tag">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  技术支持
                </span>
                <span class="feature-tag">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  获取报价
                </span>
              </div>
            </div>
          </div>

          <!-- 消息列表 -->
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="message"
            :class="{
              'user-message': message.type === 'user',
              'system-message': message.type === 'system'
            }"
          >
            <div class="message-avatar" v-if="message.type === 'system'">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#e0f2fe" />
                <path
                  d="M12 24V12C12 10.8954 12.8954 10 14 10H22C23.1046 10 24 10.8954 24 12V24"
                  stroke="#0891ff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path d="M10 26H26" stroke="#0891ff" stroke-width="2" stroke-linecap="round" />
                <circle cx="18" cy="17" r="3" fill="#0891ff" />
              </svg>
            </div>
            <div class="message-avatar user-avatar" v-else>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#0891ff" />
                <path
                  d="M18 10C20.2091 10 22 8.20914 22 6C22 3.79086 20.2091 2 18 2C15.7909 2 14 3.79086 14 6C14 8.20914 15.7909 10 18 10Z"
                  fill="white"
                />
                <path
                  d="M18 22C21.3137 22 24 19.3137 24 16C24 12.6863 21.3137 10 18 10C14.6863 10 12 12.6863 12 16C12 19.3137 14.6863 22 18 22Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <p>{{ message.content }}</p>
              </div>
              <div class="message-time">{{ message.time }}</div>
            </div>
          </div>

          <!-- 加载状态 -->
          <div class="message loading-message" v-if="isLoading">
            <div class="message-avatar">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="#e0f2fe" />
                <path
                  d="M12 24V12C12 10.8954 12.8954 10 14 10H22C23.1046 10 24 10.8954 24 12V24"
                  stroke="#0891ff"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path d="M10 26H26" stroke="#0891ff" stroke-width="2" stroke-linecap="round" />
                <circle cx="18" cy="17" r="3" fill="#0891ff" />
              </svg>
            </div>
            <div class="message-wrapper">
              <div class="message-content loading">
                <div class="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 快捷问题 -->
        <div class="quick-questions" v-if="!inputMessage && messages.length < 3">
          <div class="quick-questions-header">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>常见问题</span>
          </div>
          <div class="quick-questions-list">
            <button
              v-for="(question, index) in quickQuestions"
              :key="index"
              class="quick-question-btn"
              @click="selectQuickQuestion(question)"
            >
              {{ question }}
            </button>
          </div>
        </div>

        <!-- 聊天输入区 -->
        <div class="chat-input-area">
          <div class="input-wrapper">
            <input
              v-model="inputMessage"
              type="text"
              placeholder="请输入您的问题..."
              class="chat-input"
              @keyup.enter="sendMessage"
            />
            <button
              class="send-btn"
              @click="sendMessage"
              :disabled="!canSend"
              aria-label="发送消息"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <div class="input-footer">
            <span class="input-hint">按 Enter 发送</span>
            <span class="contact-phone">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              18663761618
            </span>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, onMounted, onUnmounted } from 'vue'

interface Message {
  type: 'user' | 'system'
  content: string
  time: string
}

const isOpen = ref(false)
const inputMessage = ref('')
const messages = ref<Message[]>([])
const isLoading = ref(false)
const unreadCount = ref(0)
const messagesContainer = ref<HTMLElement>()

// 快捷问题
const quickQuestions = [
  '你们有哪些主要产品？',
  '产品使用寿命多久？',
  '提供安装服务吗？',
  '如何获取报价？'
]

// 自动回复
const autoReplies: Record<string, string> = {
  '你们有哪些主要产品？':
    '我们的主要产品包括：碳化硅聚合陶瓷管、双金属耐磨管、陶瓷内衬复合钢管、陶瓷贴片耐磨管、龟甲网耐磨陶瓷管等。适用于电力、矿山、化工、冶金等行业。',
  '产品使用寿命多久？':
    '根据不同产品类型和使用环境，我们的产品使用寿命一般在5-10年以上。陶瓷系列产品可达8-15年，双金属耐磨管5-8年。具体可根据您的实际工况提供更详细的评估。',
  '提供安装服务吗？':
    '是的，我们提供专业的安装指导和技术支持服务。对于大型项目，我们可以安排技术人员现场指导安装，确保工程质量。',
  '如何获取报价？':
    '您可以通过以下方式获取报价：\n1. 拨打服务热线：18663761618\n2. 填写网站联系表单\n3. 直接在此留下您的需求和联系方式\n我们的销售人员会尽快与您联系。',
  '产品是否有质保期？':
    '是的，我们的产品提供12个月的质保期。在质保期内如出现质量问题，我们会及时处理和解决，确保您的权益。'
}

// 计算属性
const canSend = computed(() => {
  return inputMessage.value.trim().length > 0
})

// 切换聊天窗口
const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    unreadCount.value = 0
    nextTick(() => {
      scrollToBottom()
    })
  }
}

// 清空对话
const clearChat = () => {
  messages.value = []
}

// 滚动到底部
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// 发送消息
const sendMessage = () => {
  const message = inputMessage.value.trim()
  if (!message) return

  // 添加用户消息
  messages.value.push({
    type: 'user',
    content: message,
    time: getCurrentTime()
  })

  inputMessage.value = ''
  scrollToBottom()

  // 模拟加载
  isLoading.value = true

  // 模拟回复延迟
  setTimeout(
    () => {
      isLoading.value = false

      // 生成自动回复
      const reply = generateReply(message)
      messages.value.push({
        type: 'system',
        content: reply,
        time: getCurrentTime()
      })

      scrollToBottom()
    },
    800 + Math.random() * 400
  )
}

// 生成回复
const generateReply = (message: string): string => {
  // 检查是否有匹配的快捷问题
  for (const [question, reply] of Object.entries(autoReplies)) {
    if (message.includes(question.replace(/[？?]/g, '')) || question.includes(message)) {
      return reply
    }
  }

  // 通用回复
  return '感谢您的咨询。为了给您提供更准确的解答，建议：\n\n1. 拨打服务热线：18663761618\n2. 留下您的联系方式，我们会安排专业顾问与您联系\n\n您也可以继续描述您的具体需求。'
}

// 选择快捷问题
const selectQuickQuestion = (question: string) => {
  inputMessage.value = question
  sendMessage()
}

// 获取当前时间
const getCurrentTime = (): string => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

onMounted(() => {
  // 模拟收到消息
  setTimeout(() => {
    if (!isOpen.value) {
      unreadCount.value = 1
    }
  }, 8000)
})

onUnmounted(() => {
  // 清理逻辑
})
</script>

<style scoped>
/* 在线咨询容器 */
.online-chat-container {
  position: fixed;
  bottom: 100px;
  right: 32px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

/* 聊天切换按钮 */
.chat-toggle-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border: 3px solid white;
  color: white;
  cursor: pointer;
  box-shadow:
    0 8px 32px rgba(8, 145, 255, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.chat-toggle-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chat-toggle-btn:hover::before {
  opacity: 1;
}

.chat-toggle-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow:
    0 12px 40px rgba(8, 145, 255, 0.5),
    0 6px 16px rgba(0, 0, 0, 0.2);
}

.chat-toggle-btn.active {
  background: linear-gradient(135deg, #64748b 0%, #475569 100%);
  box-shadow:
    0 8px 24px rgba(100, 116, 139, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.chat-toggle-btn:hover .btn-icon {
  transform: scale(1.1);
}

/* 未读消息徽章 */
.chat-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5);
  border: 2px solid white;
  padding: 0 6px;
}

/* 脉冲动画环 */
.btn-pulse-ring {
  position: absolute;
  inset: -8px;
  border: 2px solid #0891ff;
  border-radius: 50%;
  opacity: 0;
  animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

/* 聊天窗口 */
.chat-window {
  width: 400px;
  max-height: 600px;
  background: white;
  border-radius: 24px;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.25),
    0 10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

/* 聊天头部 */
.chat-header {
  padding: 20px 24px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 14px;
}

.avatar-wrap {
  position: relative;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #0891ff;
  animation: online-pulse 2s ease-in-out infinite;
}

@keyframes online-pulse {
  0%,
  100% {
    box-shadow:
      0 0 0 2px #0891ff,
      0 0 0 4px rgba(34, 197, 94, 0.3);
  }
  50% {
    box-shadow:
      0 0 0 2px #0891ff,
      0 0 0 8px rgba(34, 197, 94, 0);
  }
}

.header-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.chat-title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.3px;
}

.chat-subtitle {
  font-size: 13px;
  opacity: 0.9;
  font-weight: 500;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.header-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.header-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.header-btn.close-btn:hover {
  background: rgba(239, 68, 68, 0.8);
}

/* 聊天消息区 */
.chat-messages {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f8fafc;
  min-height: 300px;
  max-height: 350px;
}

/* 欢迎消息 */
.welcome-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  animation: fadeIn 0.5s ease;
}

.welcome-icon {
  margin-bottom: 20px;
}

.welcome-content h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.welcome-content p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 280px;
}

.welcome-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.feature-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  font-size: 13px;
  color: #475569;
  font-weight: 500;
}

.feature-tag svg {
  color: #22c55e;
}

/* 消息 */
.message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  animation: messageSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes messageSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user-message {
  flex-direction: row-reverse;
}

.message.user-message .message-wrapper {
  align-items: flex-end;
}

/* 消息头像 */
.message-avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.user-avatar {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
}

/* 消息包装器 */
.message-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 75%;
}

/* 消息内容 */
.message-content {
  padding: 14px 18px;
  border-radius: 18px;
  background: white;
  border: 1px solid #e2e8f0;
  line-height: 1.6;
  font-size: 14px;
  color: #334155;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.message-content p {
  margin: 0;
  white-space: pre-line;
}

.message.user-message .message-content {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(8, 145, 255, 0.3);
}

.message-content.loading {
  padding: 18px 22px;
}

/* 消息时间 */
.message-time {
  font-size: 11px;
  color: #94a3b8;
  font-weight: 500;
}

.message.user-message .message-time {
  text-align: right;
}

/* 加载动画 */
.loading-dots {
  display: flex;
  gap: 6px;
  align-items: center;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0891ff;
  animation: loadingBounce 1.4s ease-in-out infinite both;
}

.loading-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dots span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes loadingBounce {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 快捷问题 */
.quick-questions {
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
}

.quick-questions-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 12px;
}

.quick-questions-header svg {
  color: #0891ff;
}

.quick-questions-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.quick-question-btn {
  padding: 10px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  background: #f8fafc;
  font-size: 13px;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

.quick-question-btn:hover {
  background: #0891ff;
  border-color: #0891ff;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(8, 145, 255, 0.3);
}

/* 聊天输入区 */
.chat-input-area {
  padding: 16px 20px;
  background: white;
  border-top: 1px solid #e2e8f0;
  flex-shrink: 0;
}

.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  background: #f1f5f9;
  border-radius: 24px;
  padding: 6px 6px 6px 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  background: white;
  border-color: #0891ff;
  box-shadow: 0 0 0 4px rgba(8, 145, 255, 0.1);
}

.chat-input {
  flex: 1;
  padding: 10px 0;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  color: #0f172a;
}

.chat-input::placeholder {
  color: #94a3b8;
}

.send-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(8, 145, 255, 0.3);
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(8, 145, 255, 0.4);
}

.send-btn:disabled {
  background: #cbd5e1;
  cursor: not-allowed;
  box-shadow: none;
}

.input-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 0 4px;
}

.input-hint {
  font-size: 12px;
  color: #94a3b8;
}

.contact-phone {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #0891ff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-phone:hover {
  color: #0066cc;
}

/* 动画 */
.chat-window-enter-active,
.chat-window-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-window-enter-from,
.chat-window-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 滚动条样式 */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .online-chat-container {
    bottom: 80px;
    right: 20px;
  }

  .chat-toggle-btn {
    width: 56px;
    height: 56px;
  }

  .chat-window {
    width: calc(100vw - 40px);
    max-width: 380px;
    max-height: 520px;
  }

  .chat-messages {
    padding: 16px;
    max-height: 300px;
  }

  .message-wrapper {
    max-width: 80%;
  }

  .quick-questions {
    padding: 12px 16px;
  }

  .quick-question-btn {
    padding: 8px 12px;
    font-size: 12px;
  }

  .chat-input-area {
    padding: 12px 16px;
  }
}

@media (max-width: 480px) {
  .online-chat-container {
    right: 16px;
    bottom: 70px;
  }

  .chat-window {
    width: calc(100vw - 32px);
    max-height: 480px;
  }

  .chat-header {
    padding: 16px 20px;
  }

  .chat-title {
    font-size: 16px;
  }

  .chat-messages {
    max-height: 280px;
  }

  .message-content {
    padding: 12px 14px;
    font-size: 13px;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .chat-toggle-btn,
  .message,
  .send-btn,
  .quick-question-btn {
    transition: all 0.2s ease;
  }

  .chat-window {
    animation: fadeIn 0.3s ease;
  }

  .loading-dots span {
    animation: none;
    opacity: 0.7;
  }

  .online-indicator {
    animation: none;
  }
}
</style>
