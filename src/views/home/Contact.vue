<template>
  <a-layout class="contact-layout">
    <Header />

    <a-layout-content>
      <!-- Hero Banner - 工业科技风格 -->
      <section class="contact-hero">
        <div class="hero-pattern"></div>
        <div class="hero-glow"></div>
        <div class="hero-content">
          <div class="hero-badge">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <span>24小时服务热线</span>
          </div>
          <h1 class="hero-title">
            联系我们
            <span class="title-highlight">合作共赢</span>
          </h1>
          <p class="hero-subtitle">专业团队随时为您提供管道解决方案咨询与技术支持</p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">15+</span>
              <span class="stat-label">年行业经验</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">2小时</span>
              <span class="stat-label">快速响应</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">1000+</span>
              <span class="stat-label">成功案例</span>
            </div>
          </div>
        </div>
        <div class="hero-decorations">
          <div class="deco-circle circle-1"></div>
          <div class="deco-circle circle-2"></div>
          <div class="deco-line"></div>
        </div>
      </section>

      <!-- 主要内容区 - 上面：地图和联系方式 -->
      <section class="contact-info-section">
        <div class="container">
          <div class="section-header-center">
            <h2>联系我们</h2>
            <p>多种方式，随时为您服务</p>
          </div>

          <div class="info-grid">
            <!-- 左侧：地图 -->
            <div class="map-panel">
              <div class="map-container-large">
                <iframe
                  src="https://map.baidu.com/search/山东省济南市长清区双龙路1006号"
                  frameborder="0"
                  class="map-frame"
                ></iframe>
                <div class="map-overlay">
                  <div class="location-tag">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>山东省济南市长清区</span>
                  </div>
                </div>
              </div>

              <div class="address-info">
                <div class="address-row">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>山东省济南市长清区双龙路1006号</span>
                </div>
                <div class="address-row">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>周一至周六 8:00 - 18:00</span>
                </div>
              </div>
            </div>

            <!-- 右侧：联系方式列表 -->
            <div class="contact-list-panel">
              <div class="contact-list">
                <div
                  v-for="(item, index) in contactCards"
                  :key="index"
                  class="contact-item-large"
                  :class="{ 'is-primary': index === 0 }"
                  @click="handleCardClick(item)"
                >
                  <div class="item-icon-large" v-html="item.icon"></div>
                  <div class="item-content-large">
                    <span class="item-label-large">{{ item.label }}</span>
                    <span class="item-value-large">{{ item.value }}</span>
                  </div>
                  <div class="item-action">
                    <svg
                      v-if="index === 0"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                      />
                    </svg>
                    <svg
                      v-else
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- 快速操作按钮 -->
              <div class="quick-actions">
                <a href="tel:18663761618" class="action-btn primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                  立即拨打
                </a>
                <a href="mailto:sddwcxgy@126.com" class="action-btn secondary">
                  <svg
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
                  发送邮件
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 下面：在线咨询表单 -->
      <section class="contact-form-section">
        <div class="container">
          <div class="section-header-center">
            <h2>在线咨询</h2>
            <p>填写您的需求，我们将尽快与您联系</p>
          </div>

          <div class="form-panel-full">
            <a-form
              ref="formRef"
              :model="formData"
              :rules="formRules"
              layout="vertical"
              @finish="handleSubmit"
              class="contact-form"
            >
              <div class="form-row">
                <a-form-item label="您的姓名" name="name" class="form-item">
                  <a-input v-model:value="formData.name" placeholder="请输入姓名" size="large" />
                </a-form-item>
                <a-form-item label="公司名称" name="company" class="form-item">
                  <a-input
                    v-model:value="formData.company"
                    placeholder="请输入公司名称"
                    size="large"
                  />
                </a-form-item>
              </div>

              <div class="form-row">
                <a-form-item label="联系电话" name="phone" class="form-item">
                  <a-input v-model:value="formData.phone" placeholder="请输入手机号" size="large" />
                </a-form-item>
                <a-form-item label="电子邮箱" name="email" class="form-item">
                  <a-input v-model:value="formData.email" placeholder="请输入邮箱" size="large" />
                </a-form-item>
              </div>

              <a-form-item label="咨询内容" name="message">
                <a-textarea
                  v-model:value="formData.message"
                  :rows="4"
                  placeholder="请详细描述您的需求，包括产品类型、使用场景、数量等信息..."
                  size="large"
                />
              </a-form-item>

              <div class="form-footer">
                <div class="form-privacy">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>我们承诺保护您的隐私信息</span>
                </div>
                <button type="submit" class="submit-btn" :disabled="submitting">
                  <span v-if="!submitting" class="btn-content">
                    <span>提交咨询</span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </span>
                  <span v-else class="btn-loading">
                    <svg
                      class="loading-icon"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-dasharray="60"
                        stroke-dashoffset="60"
                      />
                    </svg>
                    提交中...
                  </span>
                </button>
              </div>
            </a-form>
          </div>
        </div>
      </section>

      <!-- 服务承诺 -->
      <section class="service-promise">
        <div class="container">
          <div class="promise-grid">
            <div v-for="(item, index) in promises" :key="index" class="promise-item">
              <div class="promise-icon" v-html="item.icon"></div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </a-layout-content>

    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { message } from 'ant-design-vue'
import { reactive, ref } from 'vue'

const submitting = ref(false)
const formRef = ref()

const contactCards = [
  {
    label: '服务热线',
    value: '0531-87357881',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    action: 'tel:0531-87357881'
  },
  {
    label: '业务咨询',
    value: '186-6376-1618',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    action: 'tel:18663761618'
  },
  {
    label: '电子邮箱',
    value: 'sddwcxgy@126.com',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    action: 'mailto:sddwcxgy@126.com'
  },
  {
    label: '公司传真',
    value: '0531-87357881',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
    action: 'copy'
  }
]

const promises = [
  {
    title: '专业解答',
    desc: '资深工程师一对一服务',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'
  },
  {
    title: '快速响应',
    desc: '2小时内回复您的咨询',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  },
  {
    title: '技术支持',
    desc: '提供完整的技术方案',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
  },
  {
    title: '售后保障',
    desc: '完善的售后服务体系',
    icon: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="3"/></svg>'
  }
]

const formData = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
})

const formRules = {
  name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
  phone: [
    { required: true, message: '请输入联系电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  message: [{ required: true, message: '请输入咨询内容', trigger: 'blur' }]
}

const handleCardClick = (item: any) => {
  if (item.action === 'copy') {
    navigator.clipboard.writeText(item.value)
    message.success(`${item.label}已复制到剪贴板`)
  } else if (item.action.startsWith('tel:')) {
    window.location.href = item.action
  } else if (item.action.startsWith('mailto:')) {
    window.location.href = item.action
  }
}

const handleSubmit = async () => {
  submitting.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    message.success('提交成功！我们的工作人员会尽快与您联系')
    formRef.value?.resetFields()
  } catch (error) {
    message.error('提交失败，请稍后重试')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
/* 布局 */
.contact-layout {
  
  min-height: 100vh;
  background: #fbfbfd;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Banner */
.contact-hero {
  position: relative;
  height: 480px;
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 60%, #0a1628 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 60%, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
  z-index: 1;
}

.hero-glow {
  display: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 800px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 20px;
  border-radius: 50px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
}

.hero-title {
  font-size: 52px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.title-highlight {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.7em;
  font-weight: 400;
  letter-spacing: 0;
}

.hero-subtitle {
  font-size: 18px;
  color: #a1a1a6;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #a1a1a6;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
}

.hero-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.deco-circle {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}

.circle-1 {
  width: 500px;
  height: 500px;
  top: -150px;
  right: -150px;
}

.circle-2 {
  width: 350px;
  height: 350px;
  bottom: -100px;
  left: -100px;
  border-color: rgba(255, 255, 255, 0.05);
}

.deco-line {
  position: absolute;
  width: 200px;
  height: 2px;
  background: #1d1d1f;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
}

/* Contact Info Section - 上面部分 */
.contact-info-section {
  padding: 80px 0;
  background: #fbfbfd;
}

.section-header-center {
  text-align: center;
  margin-bottom: 48px;
}

.section-header-center h2 {
  font-size: 36px;
  font-weight: 800;
  color: #0a1628;
  margin-bottom: 12px;
}

.section-header-center p {
  font-size: 16px;
  color: #a1a1a6;
}

/* Info Grid - 地图和联系方式左右排列 */
.info-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
}

/* Map Panel */
.map-panel {
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

.map-container-large {
  position: relative;
  height: 400px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.map-frame {
  width: 100%;
  height: 100%;
  border: none;
}

.map-overlay {
  position: absolute;
  top: 16px;
  left: 16px;
}

.location-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(8px);
}

.address-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.address-row {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #86868b;
  font-size: 15px;
  font-weight: 500;
}

.address-row svg {
  color: #86868b;
  flex-shrink: 0;
}

/* Contact List Panel */
.contact-list-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item-large {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-item-large:hover {
  transform: translateX(4px);
  border-color: rgba(0, 0, 0, 0.2);
}

.contact-item-large.is-primary {
  background: #1e3a5f;
  color: white;
  border: none;
}

.contact-item-large.is-primary:hover {
  box-shadow: none;
}

.item-icon-large {
  width: 52px;
  height: 52px;
  background: #e8f0fc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e3a5f;
  flex-shrink: 0;
}

.contact-item-large.is-primary .item-icon-large {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.item-content-large {
  flex: 1;
  min-width: 0;
}

.item-label-large {
  display: block;
  font-size: 13px;
  color: #a1a1a6;
  font-weight: 600;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-item-large.is-primary .item-label-large {
  color: rgba(255, 255, 255, 0.8);
}

.item-value-large {
  display: block;
  font-size: 17px;
  font-weight: 700;
  color: #0a1628;
  line-height: 1.4;
}

.contact-item-large.is-primary .item-value-large {
  color: white;
}

.item-action {
  color: #a1a1a6;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.contact-item-large:hover .item-action {
  color: #1d1d1f;
  transform: scale(1.1);
}

.contact-item-large.is-primary .item-action {
  color: rgba(255, 255, 255, 0.8);
}

/* Quick Actions */
.quick-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-btn.primary {
  background: #1e3a5f;
  color: white;
  box-shadow: none;
}

.action-btn.primary:hover {
  background: #0a1628;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30,58,95,0.3);
}

.action-btn.secondary {
  background: #fbfbfd;
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.action-btn.secondary:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
}

/* Contact Form Section - 下面部分 */
.contact-form-section {
  padding: 80px 0 100px;
  background: #ffffff;
}

.form-panel-full {
  max-width: 900px;
  margin: 0 auto;
  background: #fbfbfd;
  border-radius: 4px;
  padding: 48px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}

/* Form Styles */
.contact-form :deep(.ant-form-item-label > label) {
  font-size: 15px;
  font-weight: 600;
  color: #86868b;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 8px;
}

.form-item {
  margin-bottom: 0;
}

.contact-form :deep(.ant-input),
.contact-form :deep(.ant-input-affix-wrapper),
.contact-form :deep(.ant-input-textarea) {
  background: #ffffff;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  padding: 14px 18px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.contact-form :deep(.ant-input:hover),
.contact-form :deep(.ant-input-affix-wrapper:hover) {
  border-color: #cbd5e1;
}

.contact-form :deep(.ant-input:focus),
.contact-form :deep(.ant-input-focused) {
  border-color: #0891ff;
  box-shadow: none;
}

.contact-form :deep(.ant-input::placeholder) {
  color: #a1a1a6;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.form-privacy {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #a1a1a6;
  font-size: 14px;
}

.form-privacy svg {
  color: #22c55e;
}

.submit-btn {
  padding: 16px 40px;
  background: #1e3a5f;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
}

.submit-btn:hover:not(:disabled) {
  background: #0a1628;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(30,58,95,0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-loading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.loading-icon {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

/* Service Promise */
.service-promise {
  padding: 80px 0;
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%);
}

.promise-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.promise-item {
  text-align: center;
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.promise-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
  border-color: rgba(8, 145, 255, 0.3);
}

.promise-icon {
  width: 64px;
  height: 64px;
  background: rgba(8, 145, 255, 0.15);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: #60a5fa;
}

.promise-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
}

.promise-item p {
  font-size: 14px;
  color: #a1a1a6;
}

/* Responsive */
/* Responsive */
@media (max-width: 1200px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .contact-list-panel {
    flex-direction: row;
  }

  .contact-list {
    flex: 1;
  }

  .quick-actions {
    flex-direction: column;
    width: 200px;
    margin-top: 0;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    height: 400px;
    padding: 60px 0;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 20px;
  }

  .stat-divider {
    display: none;
  }

  .contact-info-section,
  .contact-form-section {
    padding: 60px 0;
  }

  .section-header-center h2 {
    font-size: 28px;
  }

  .map-container-large {
    height: 300px;
  }

  .contact-list-panel {
    flex-direction: column;
  }

  .quick-actions {
    flex-direction: row;
    width: auto;
    margin-top: 8px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-panel-full {
    padding: 32px 24px;
  }

  .form-footer {
    flex-direction: column;
    gap: 20px;
    align-items: stretch;
  }

  .submit-btn {
    width: 100%;
  }

  .promise-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }

  .hero-subtitle {
    font-size: 15px;
  }

  .stat-value {
    font-size: 24px;
  }

  .contact-item-large {
    padding: 16px;
  }

  .item-icon-large {
    width: 44px;
    height: 44px;
  }

  .item-value-large {
    font-size: 15px;
  }

  .quick-actions {
    flex-direction: column;
  }

  .promise-grid {
    grid-template-columns: 1fr;
  }

  .form-panel-full {
    padding: 24px 16px;
  }

  .section-header-center h2 {
    font-size: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-item-large,
  .promise-item,
  .submit-btn {
    transition: all 0.2s ease;
  }

  .loading-icon {
    animation: none;
  }
}
</style>
