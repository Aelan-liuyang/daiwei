<template>
  <a-layout class="cyber-contact-layout">
    <Header />

    <a-layout-content class="cyber-content">
      <section class="cyber-banner">
        <div class="banner-scanner"></div>
        <div class="earth-wrap">
          <img src="@/assets/images/diqiu1.jpeg" alt="Global" class="earth-img" />
          <div class="orbit-lines"></div>
        </div>
        <div class="banner-title-box">
          <div class="cyber-tag">GLOBAL CONNECTION</div>
          <h1 class="main-title">全域链接 <span>共创未来</span></h1>
          <p class="sub-title">Shandong Daiwei · Specialized Pipe Solution Provider</p>
        </div>
      </section>

      <section class="terminal-section">
        <div class="terminal-container">
          <div class="cyber-grid-bg"></div>

          <div class="contact-terminal">
            <div class="terminal-header">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="terminal-title">CONTACT_INFO.SYS</span>
            </div>

            <div class="terminal-body">
              <div class="info-nodes">
                <div
                  v-for="(item, index) in contactItems"
                  :key="index"
                  class="node-card"
                  @click="handleAction(item)"
                >
                  <div class="node-icon">{{ item.icon }}</div>
                  <div class="node-content">
                    <label>{{ item.label }}</label>
                    <div class="value">{{ item.value }}</div>
                  </div>
                  <div class="node-scan-line"></div>
                </div>
              </div>

              <div class="map-terminal">
                <div class="map-inner">
                  <iframe
                    src="https://ditu.amap.com/search?query=山东省济南市长清区双龙路1006号&city=370113&zoom=15"
                    frameborder="0"
                    class="cyber-map"
                  ></iframe>
                  <div class="map-overlay">
                    <div class="loc-tag"><EnvironmentOutlined /> 济南 · 双龙路1006号</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="inquiry-section">
        <div class="form-cyber-wrap">
          <div class="form-decor-tl"></div>
          <div class="form-decor-br"></div>

          <div class="inquiry-header">
            <h2 class="glow-text">INQUIRY_咨询反馈</h2>
            <p>请录入您的需求，我们的系统将为您匹配专属工程师</p>
          </div>

          <a-form
            ref="formRef"
            :model="formData"
            :rules="formRules"
            layout="vertical"
            @finish="handleSubmit"
            class="custom-cyber-form"
          >
            <a-row :gutter="32">
              <a-col :xs="24" :sm="12">
                <a-form-item label="USER_NAME 姓名" name="name">
                  <a-input v-model:value="formData.name" placeholder="Input Name..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="CORP_NAME 公司" name="company">
                  <a-input v-model:value="formData.company" placeholder="Input Company..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="MOBILE_PHONE 手机" name="phone">
                  <a-input v-model:value="formData.phone" placeholder="Input Phone Number..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="EMAIL_ADDR 邮箱" name="email">
                  <a-input v-model:value="formData.email" placeholder="Input Email..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24">
                <a-form-item label="MESSAGE 详细需求" name="message">
                  <a-textarea
                    v-model:value="formData.message"
                    :rows="4"
                    placeholder="Description of needs..."
                  />
                </a-form-item>
              </a-col>
            </a-row>

            <div class="submit-area">
              <button class="cyber-btn" :disabled="submitting">
                <span class="btn-content">
                  {{ submitting ? 'SYNCING...' : 'CONFIRM_SUBMIT 确认提交' }}
                </span>
                <div class="btn-glitch"></div>
              </button>
            </div>
          </a-form>
        </div>
      </section>
    </a-layout-content>

    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { EnvironmentOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { reactive, ref } from 'vue'

const submitting = ref(false)
const contactItems = [
  { icon: '📍', label: 'ADDRESS_地址', value: '济南市长清区双龙路1006号', key: 'addr' },
  { icon: '📱', label: 'MOBILE_手机', value: '18663761618', key: 'phone' },
  { icon: '📠', label: 'FAX_传真', value: '0531-87357881', key: 'fax' },
  { icon: '📧', label: 'EMAIL_邮箱', value: 'sddwcxgy@126.com', key: 'email' }
]

const formData = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
})

const formRules = {
  name: [{ required: true, message: 'Required' }],
  phone: [{ required: true, pattern: /^1[3-9]\d{9}$/, message: 'Invalid Phone' }],
  message: [{ required: true, message: 'Required' }]
}

const handleAction = (item: any) => {
  navigator.clipboard.writeText(item.value)
  message.success(`${item.label} 已复制`)
}

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  message.success('数据同步成功，我们将尽快联系您')
}
</script>

<style scoped>
/* --- 全局暗色背景 --- */
.cyber-contact-layout {
  background: #020617;
  color: #e2e8f0;
  min-height: 100vh;
}

/* --- 1. Cyber Banner --- */
.cyber-banner {
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 100%);
}

.earth-wrap {
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  height: 600px;
  opacity: 0.6;
}

.earth-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: hue-rotate(180deg) brightness(0.8);
  animation: rotateEarth 60s linear infinite;
}

@keyframes rotateEarth {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.banner-title-box {
  position: relative;
  z-index: 5;
  text-align: left;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
}

.main-title {
  font-size: 64px;
  font-weight: 900;
  color: #fff;
  letter-spacing: -2px;
}

.main-title span {
  background: linear-gradient(90deg, #22d3ee, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cyber-tag {
  color: #22d3ee;
  font-weight: 800;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-family: monospace;
}

/* --- 2. Terminal Section --- */
.terminal-section {
  padding: 80px 0;
  position: relative;
}

.cyber-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(34, 211, 238, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34, 211, 238, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
}

.contact-terminal {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(34, 211, 238, 0.3);
  border-radius: 8px;
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.terminal-header {
  background: #1e293b;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid rgba(34, 211, 238, 0.2);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #334155;
}
.terminal-title {
  color: #94a3b8;
  font-family: monospace;
  font-size: 13px;
  margin-left: 10px;
}

.terminal-body {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding: 40px;
  gap: 40px;
}

.info-nodes {
  display: grid;
  gap: 20px;
}

.node-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(34, 211, 238, 0.1);
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.node-card:hover {
  background: rgba(34, 211, 238, 0.1);
  border-color: #22d3ee;
  transform: scale(1.02);
}

.node-icon {
  font-size: 24px;
}
.node-card label {
  color: #22d3ee;
  font-size: 11px;
  font-family: monospace;
  display: block;
}
.node-card .value {
  font-size: 16px;
  font-weight: 600;
}

.node-scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.1), transparent);
  animation: scan 3s infinite;
}

@keyframes scan {
  to {
    left: 100%;
  }
}

.map-terminal {
  border: 1px solid rgba(34, 211, 238, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.cyber-map {
  width: 100%;
  height: 100%;
  min-height: 350px;
  filter: invert(90%) hue-rotate(180deg) brightness(0.9);
}

/* --- 3. Inquiry Form --- */
.inquiry-section {
  padding: 100px 0;
  max-width: 900px;
  margin: 0 auto;
}

.form-cyber-wrap {
  background: #0f172a;
  padding: 60px;
  border-radius: 4px;
  border: 1px solid rgba(34, 211, 238, 0.2);
  position: relative;
}

.glow-text {
  font-size: 32px;
  font-weight: 800;
  text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
  color: #fff;
}

/* 修改 Ant Design 输入框样式 */
.custom-cyber-form :deep(.ant-form-item-label > label) {
  color: #22d3ee !important;
  font-family: monospace;
}
.custom-cyber-form :deep(.ant-input),
.custom-cyber-form :deep(.ant-input-affix-wrapper) {
  background: #1e293b !important;
  border: 1px solid #334155 !important;
  color: #fff !important;
  border-radius: 0;
}

.custom-cyber-form :deep(.ant-input:focus) {
  border-color: #22d3ee !important;
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.4) !important;
}

/* 赛博风格按钮 */
.cyber-btn {
  width: 100%;
  height: 60px;
  background: #22d3ee;
  border: none;
  color: #020617;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  transition: 0.3s;
}

.cyber-btn:hover {
  background: #fff;
  letter-spacing: 2px;
}

/* 移动端适配 */
@media (max-width: 992px) {
  .terminal-body {
    grid-template-columns: 1fr;
  }
  .main-title {
    font-size: 40px;
  }
  .form-cyber-wrap {
    padding: 30px;
  }
}
</style>
