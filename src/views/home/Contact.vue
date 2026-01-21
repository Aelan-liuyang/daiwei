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
          <div class="cyber-tag">全球连接</div>
          <h1 class="main-title">全域链接 <span>共创未来</span></h1>
          <p class="sub-title">山东岱威 · 专业管道解决方案提供商</p>
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
              <span class="terminal-title">联系信息</span>
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
            <h2 class="glow-text">咨询反馈</h2>
            <p>请录入您的需求,我们的系统将为您匹配专属工程师</p>
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
                <a-form-item label="姓名" name="name">
                  <a-input v-model:value="formData.name" placeholder="请输入姓名..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="公司" name="company">
                  <a-input v-model:value="formData.company" placeholder="请输入公司名称..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="手机" name="phone">
                  <a-input v-model:value="formData.phone" placeholder="请输入手机号..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="邮箱" name="email">
                  <a-input v-model:value="formData.email" placeholder="请输入邮箱..." />
                </a-form-item>
              </a-col>
              <a-col :xs="24">
                <a-form-item label="详细需求" name="message">
                  <a-textarea
                    v-model:value="formData.message"
                    :rows="4"
                    placeholder="请描述您的需求..."
                  />
                </a-form-item>
              </a-col>
            </a-row>

            <div class="submit-area">
              <button class="cyber-btn" :disabled="submitting">
                <span class="btn-content">
                  {{ submitting ? '提交中...' : '确认提交' }}
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
  { icon: '📍', label: '地址', value: '济南市长清区双龙路1006号', key: 'addr' },
  { icon: '📱', label: '手机', value: '18663761618', key: 'phone' },
  { icon: '📠', label: '传真', value: '0531-87357881', key: 'fax' },
  { icon: '📧', label: '邮箱', value: 'sddwcxgy@126.com', key: 'email' }
]

const formData = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  message: ''
})

const formRules = {
  name: [{ required: true, message: '请输入姓名' }],
  phone: [{ required: true, pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }],
  message: [{ required: true, message: '请输入需求描述' }]
}

const handleAction = (item: any) => {
  navigator.clipboard.writeText(item.value)
  message.success(`${item.label} 已复制`)
}

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  message.success('数据同步成功,我们将尽快联系您')
}
</script>

<style scoped>
/* --- 全局明亮背景 --- */
.cyber-contact-layout {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #1a202c;
  min-height: 100vh;
}

/* --- 1. 明亮渐变 Banner --- */
.cyber-banner {
  height: 500px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
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
  filter: brightness(1.2) saturate(1.3);
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
  background: linear-gradient(90deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cyber-tag {
  color: #fbbf24;
  font-weight: 800;
  letter-spacing: 4px;
  margin-bottom: 10px;
  font-family: 'Microsoft YaHei', sans-serif;
}

.sub-title {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 10px;
}

/* --- 2. Terminal Section --- */
.terminal-section {
  padding: 80px 0;
  position: relative;
  background: #f8fafc;
}

.cyber-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(102, 126, 234, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.08) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 0;
}

.terminal-container {
  position: relative;
  padding: 0 20px;
}

.contact-terminal {
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #e0e7ff;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.terminal-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 25px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: none;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}

.terminal-title {
  color: #ffffff;
  font-family: 'Microsoft YaHei', sans-serif;
  font-size: 16px;
  font-weight: 600;
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
  background: #f8fafc;
  border: 2px solid #e0e7ff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: 0.3s;
}

.node-card:hover {
  background: #eef2ff;
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.node-icon {
  font-size: 28px;
}

.node-content {
  flex: 1;
}

.node-card label {
  color: #667eea;
  font-size: 13px;
  font-family: 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
}

.node-card .value {
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
}

.node-scan-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.15), transparent);
  animation: scan 3s infinite;
}

@keyframes scan {
  to {
    left: 100%;
  }
}

.map-terminal {
  border: 2px solid #e0e7ff;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
}

.map-inner {
  position: relative;
  height: 100%;
}

.cyber-map {
  width: 100%;
  height: 100%;
  min-height: 350px;
  filter: none;
}

.map-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
}

.loc-tag {
  background: rgba(102, 126, 234, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* --- 3. 明亮表单 --- */
.inquiry-section {
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;
  background: #f8fafc;
}

.form-cyber-wrap {
  background: #ffffff;
  padding: 60px;
  border-radius: 12px;
  border: 2px solid #e0e7ff;
  position: relative;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
}

.inquiry-header {
  margin-bottom: 40px;
  text-align: center;
}

.glow-text {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
}

.inquiry-header p {
  color: #64748b;
  margin-top: 10px;
  font-size: 15px;
}

/* 修改 Ant Design 输入框样式 */
.custom-cyber-form :deep(.ant-form-item-label > label) {
  color: #667eea !important;
  font-family: 'Microsoft YaHei', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.custom-cyber-form :deep(.ant-input),
.custom-cyber-form :deep(.ant-input-affix-wrapper),
.custom-cyber-form :deep(.ant-input-textarea-show-count .ant-input) {
  background: #f8fafc !important;
  border: 2px solid #e0e7ff !important;
  color: #1e293b !important;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px 16px;
}

.custom-cyber-form :deep(.ant-input:focus),
.custom-cyber-form :deep(.ant-input-focused),
.custom-cyber-form :deep(.ant-input:hover) {
  border-color: #667eea !important;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
}

.custom-cyber-form :deep(.ant-input::placeholder) {
  color: #94a3b8;
}

/* 现代渐变按钮 */
.submit-area {
  margin-top: 20px;
}

.cyber-btn {
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  transition: 0.3s;
  border-radius: 8px;
  letter-spacing: 1px;
}

.cyber-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.3);
}

.cyber-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-content {
  position: relative;
  z-index: 1;
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
    padding: 30px 20px;
  }

  .earth-wrap {
    width: 400px;
    height: 400px;
    right: -10%;
  }

  .banner-title-box {
    padding: 0 20px;
  }
}

@media (max-width: 576px) {
  .main-title {
    font-size: 32px;
  }

  .cyber-tag {
    font-size: 12px;
    letter-spacing: 2px;
  }

  .sub-title {
    font-size: 14px;
  }

  .terminal-body {
    padding: 20px;
  }

  .glow-text {
    font-size: 24px;
  }
}
</style>
