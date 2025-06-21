<template>
  <a-layout class="contact-layout">
    <Header />
    <a-layout-content class="main-content">
      <div class="location-banner">
        <div class="banner-bg">
          <img src="@/assets/images/diqiu1.jpeg" alt="地球" class="banner-earth" />
        </div>
        <div class="banner-content">
          <h1>我们在哪里</h1>
          <div class="banner-subtitle">The Location</div>
        </div>
      </div>
      <section class="contact-section">
        <div class="contact-content-wide">
          <div class="contact-info-box">
            <h2 class="contact-title">山东岱威创新管业有限公司</h2>
            <ul class="contact-list">
              <li>
                <span class="label">联系地址：</span>
                山东省济南市长清区双龙路1006号
              </li>
              <li>
                <span class="label">手机：</span>
                18663761618
              </li>
              <li>
                <span class="label">传真：</span>
                0531-87357881
              </li>
              <li>
                <span class="label">电话：</span>
                0531-87357881
              </li>
              <li>
                <span class="label">电子邮箱：</span>
                sddwcxgy@126.com
              </li>
            </ul>
          </div>
          <div class="contact-map-box">
            <!-- 使用长清区双龙路的正确坐标 -->
            <iframe
              src="https://ditu.amap.com/search?query=山东省济南市长清区双龙路1006号&city=370113&zoom=16"
              frameborder="0"
              allowfullscreen
              class="map-iframe"
              referrerpolicy="no-referrer-when-downgrade"
              title="山东省济南市长清区双龙路1006号地图"
            ></iframe>
            <div class="map-tip">山东省济南市长清区双龙路1006号</div>
          </div>
        </div>
      </section>

      <!-- 联系表单部分 -->
      <section class="contact-form-section">
        <div class="form-container">
          <div class="form-header">
            <h2>联系我们</h2>
            <p>请填写以下信息，我们会尽快与您联系</p>
          </div>

          <a-form
            ref="formRef"
            :model="formData"
            :rules="formRules"
            layout="vertical"
            class="contact-form"
            @finish="handleSubmit"
          >
            <a-row :gutter="24">
              <a-col :xs="24" :sm="12">
                <a-form-item label="姓名" name="name" required>
                  <a-input
                    v-model:value="formData.name"
                    placeholder="请输入您的姓名"
                    size="large"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="公司名称" name="company">
                  <a-input
                    v-model:value="formData.company"
                    placeholder="请输入公司名称"
                    size="large"
                  />
                </a-form-item>
              </a-col>
            </a-row>

            <a-row :gutter="24">
              <a-col :xs="24" :sm="12">
                <a-form-item label="联系电话" name="phone" required>
                  <a-input
                    v-model:value="formData.phone"
                    placeholder="请输入联系电话"
                    size="large"
                  />
                </a-form-item>
              </a-col>
              <a-col :xs="24" :sm="12">
                <a-form-item label="邮箱地址" name="email" required>
                  <a-input
                    v-model:value="formData.email"
                    placeholder="请输入邮箱地址"
                    size="large"
                  />
                </a-form-item>
              </a-col>
            </a-row>

            <a-form-item label="咨询类型" name="inquiryType">
              <a-select
                v-model:value="formData.inquiryType"
                placeholder="请选择咨询类型"
                size="large"
              >
                <a-select-option value="product">产品咨询</a-select-option>
                <a-select-option value="cooperation">合作洽谈</a-select-option>
                <a-select-option value="technical">技术支持</a-select-option>
                <a-select-option value="after-sales">售后服务</a-select-option>
                <a-select-option value="other">其他</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="详细需求" name="message" required>
              <a-textarea
                v-model:value="formData.message"
                placeholder="请详细描述您的需求或问题"
                :rows="6"
                size="large"
              />
            </a-form-item>

            <a-form-item>
              <a-button
                type="primary"
                html-type="submit"
                size="large"
                :loading="submitting"
                class="submit-btn"
              >
                提交咨询
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </section>
    </a-layout-content>
    <Footer />

    <!-- 联系方式弹窗 -->
    <a-modal
      v-model:visible="contactModalVisible"
      :footer="null"
      :width="500"
      :centered="true"
      :closable="false"
      class="contact-modal"
    >
      <div class="contact-modal-content">
        <div class="modal-header">
          <div class="success-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#10B981" />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3>咨询信息已收到！</h3>
          <p>感谢您的咨询，为了更快响应您的需求，请通过以下方式直接联系我们：</p>
        </div>

        <div class="contact-methods">
          <div class="contact-method" @click="copyToClipboard('18663761618', '手机号码')">
            <div class="method-icon phone-icon">📱</div>
            <div class="method-info">
              <div class="method-label">手机号码</div>
              <div class="method-value">18663761618</div>
              <div class="method-tip">点击复制</div>
            </div>
          </div>

          <div class="contact-method" @click="copyToClipboard('sddwcxgy@126.com', '邮箱地址')">
            <div class="method-icon email-icon">📧</div>
            <div class="method-info">
              <div class="method-label">邮箱地址</div>
              <div class="method-value">sddwcxgy@126.com</div>
              <div class="method-tip">点击复制</div>
            </div>
          </div>

          <div class="contact-method wechat-method">
            <div class="method-icon wechat-icon">💬</div>
            <div class="method-info">
              <div class="method-label">微信咨询</div>
              <div class="method-value">扫码添加微信</div>
              <div class="method-tip">更快响应</div>
            </div>
            <div class="qr-code">
              <div class="qr-placeholder">
                <div class="qr-text">微信二维码</div>
                <div class="qr-sub">请扫码添加</div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <a-button type="primary" size="large" @click="closeContactModal" class="close-btn">
            我知道了
          </a-button>
        </div>
      </div>
    </a-modal>
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { message } from 'ant-design-vue'
import { reactive, ref } from 'vue'

// 表单引用
const formRef = ref()

// 提交状态
const submitting = ref(false)

// 表单数据
const formData = reactive({
  name: '',
  company: '',
  phone: '',
  email: '',
  inquiryType: '',
  message: ''
})

// 表单验证规则
const formRules = {
  name: [
    { required: true, message: '请输入您的姓名', trigger: 'blur' },
    { min: 2, max: 20, message: '姓名长度应在2-20个字符之间', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入联系电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  message: [
    { required: true, message: '请输入详细需求', trigger: 'blur' },
    { min: 10, max: 500, message: '需求描述应在10-500个字符之间', trigger: 'blur' }
  ]
}

// 联系方式弹窗状态
const contactModalVisible = ref(false)

// 提交表单
const handleSubmit = async (values: any) => {
  try {
    submitting.value = true

    // 模拟提交请求
    await new Promise(resolve => setTimeout(resolve, 1500))

    // 这里可以调用实际的API
    console.log('提交的表单数据:', values)

    // 显示联系方式弹窗而不是简单的成功提示
    submitting.value = false
    contactModalVisible.value = true

    // 重置表单
    formRef.value?.resetFields()
    Object.assign(formData, {
      name: '',
      company: '',
      phone: '',
      email: '',
      inquiryType: '',
      message: ''
    })
  } catch (error) {
    console.error('提交失败:', error)
    message.error('提交失败，请稍后重试。')
    submitting.value = false
  }
}

// 复制联系方式到剪贴板
const copyToClipboard = async (text: string, type: string) => {
  try {
    await navigator.clipboard.writeText(text)
    message.success(`${type}已复制到剪贴板`)
  } catch (error) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    message.success(`${type}已复制到剪贴板`)
  }
}

// 关闭弹窗
const closeContactModal = () => {
  contactModalVisible.value = false
}
</script>

<style scoped>
.contact-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

.contact-layout::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(22, 119, 255, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(67, 198, 172, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

.main-content {
  background: transparent;
  min-height: 500px;
  padding-bottom: 60px;
  position: relative;
  z-index: 1;
}

/* Banner 优化样式 */
.location-banner {
  width: 100vw;
  max-width: 100vw;
  min-height: 280px;
  height: 32vw;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.banner-bg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 110%;
  height: 110%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 1;
  border-radius: 0;
}

.banner-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.15) 0%,
    rgba(67, 198, 172, 0.1) 50%,
    rgba(22, 119, 255, 0.05) 100%
  );
  z-index: 2;
}

.banner-earth {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  filter: brightness(0.7) contrast(1.1) saturate(1.2);
  transform: scale(1.15);
  animation: bannerZoomIn 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes bannerZoomIn {
  0% {
    transform: scale(1.15);
    filter: brightness(0.5) contrast(1.1) saturate(1.2);
  }
  100% {
    transform: scale(1.05);
    filter: brightness(0.7) contrast(1.1) saturate(1.2);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-content {
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.banner-content h1 {
  font-size: 3.2rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  letter-spacing: 8px;
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 8px 16px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.banner-content h1::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 2px;
}

.banner-subtitle {
  font-size: 1.4rem;
  color: #cbd5e1;
  letter-spacing: 6px;
  margin-top: 24px;
  font-weight: 300;
  text-transform: uppercase;
  opacity: 0.9;
}

/* 联系信息区域优化 */
.contact-section {
  background: none;
  box-shadow: none;
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 20px 0;
  position: relative;
}

.contact-content-wide {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 64px 80px 56px;
  max-width: 95%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.contact-content-wide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1677ff 0%, #43c6ac 50%, #1677ff 100%);
  border-radius: 32px 32px 0 0;
}

.contact-info-box {
  flex: 1.1;
  min-width: 320px;
  max-width: 450px;
  padding-right: 32px;
  position: relative;
}

.contact-title {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 40px;
  letter-spacing: 2px;
  position: relative;
  line-height: 1.2;
}

.contact-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 2px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  font-size: 18px;
  color: #334155;
  margin-bottom: 28px;
  line-height: 1.8;
  letter-spacing: 0.5px;
  padding: 16px 12px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  border-left: 4px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.contact-list li:hover {
  background: rgba(22, 119, 255, 0.05);
  transform: translateX(8px);
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.1);
}

.contact-list li:hover::before {
  transform: scaleY(1);
}

.contact-list .label {
  color: #64748b;
  font-weight: 600;
  display: inline-block;
  min-width: 100px;
  font-size: 16px;
}

.contact-map-box {
  flex: 1.8;
  min-width: 380px;
  max-width: 750px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08);
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.map-iframe {
  width: 100%;
  height: 450px;
  border: none;
  display: block;
  border-radius: 24px;
  filter: contrast(1.1) saturate(1.1);
  transition: all 0.3s ease;
}

.map-iframe:hover {
  filter: contrast(1.2) saturate(1.2);
}

.map-tip {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(22, 119, 255, 0.95);
  backdrop-filter: blur(10px);
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 20px;
  border-radius: 16px;
  opacity: 0.95;
  pointer-events: none;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 1s ease-out 1s both;
}

/* 响应式设计优化 */
@media (max-width: 1400px) {
  .contact-content-wide {
    gap: 40px;
    padding: 48px 60px 40px;
  }

  .contact-section {
    padding: 60px 20px 0;
  }
}

@media (max-width: 1200px) {
  .contact-content-wide {
    flex-direction: column;
    gap: 40px;
    padding: 40px 30px 32px;
    border-radius: 24px;
  }

  .contact-info-box {
    padding-right: 0;
    max-width: 100%;
    min-width: 0;
  }

  .contact-map-box {
    min-width: 0;
    max-width: 100%;
  }

  .map-iframe {
    height: 350px;
  }

  .banner-content h1 {
    font-size: 2.8rem;
    letter-spacing: 6px;
  }

  .banner-subtitle {
    font-size: 1.2rem;
    letter-spacing: 4px;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 40px 16px 0;
  }

  .contact-content-wide {
    padding: 32px 20px 24px;
    border-radius: 20px;
    gap: 32px;
  }

  .location-banner {
    height: 200px;
    min-height: 180px;
  }

  .banner-content h1 {
    font-size: 2.2rem;
    letter-spacing: 4px;
  }

  .banner-subtitle {
    font-size: 1rem;
    letter-spacing: 3px;
  }

  .contact-title {
    font-size: 26px;
    margin-bottom: 32px;
  }

  .contact-list li {
    font-size: 16px;
    margin-bottom: 20px;
    padding: 14px 16px;
  }

  .contact-list .label {
    min-width: 80px;
    font-size: 15px;
  }

  .map-iframe {
    height: 280px;
    border-radius: 16px;
  }

  .contact-map-box {
    border-radius: 16px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 30px 12px 0;
  }

  .contact-content-wide {
    padding: 24px 16px 20px;
    border-radius: 16px;
    gap: 24px;
  }

  .location-banner {
    height: 160px;
    min-height: 140px;
  }

  .banner-content h1 {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }

  .banner-subtitle {
    font-size: 0.9rem;
    letter-spacing: 2px;
  }

  .contact-title {
    font-size: 22px;
    margin-bottom: 24px;
  }

  .contact-list li {
    font-size: 15px;
    margin-bottom: 16px;
    padding: 12px 14px;
    border-radius: 12px;
  }

  .contact-list .label {
    min-width: 70px;
    font-size: 14px;
    display: block;
    margin-bottom: 4px;
  }

  .map-iframe {
    height: 220px;
    border-radius: 12px;
  }

  .contact-map-box {
    border-radius: 12px;
    min-width: 0;
  }

  .map-tip {
    bottom: 12px;
    left: 12px;
    font-size: 13px;
    padding: 8px 12px;
    border-radius: 8px;
  }
}

/* 联系表单样式优化 */
.contact-form-section {
  max-width: 1200px;
  margin: 100px auto 0;
  padding: 0 20px;
  position: relative;
}

.form-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  box-shadow:
    0 16px 64px rgba(0, 0, 0, 0.1),
    0 4px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 80px 60px;
  margin-bottom: 60px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.form-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1677ff 0%, #43c6ac 50%, #1677ff 100%);
  border-radius: 32px 32px 0 0;
}

.form-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
}

.form-header h2 {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  letter-spacing: 2px;
  position: relative;
}

.form-header h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 2px;
}

.form-header p {
  font-size: 18px;
  color: #64748b;
  line-height: 1.6;
  margin-top: 24px;
}

.contact-form {
  max-width: 900px;
  margin: 0 auto;
}

.contact-form .ant-form-item-label > label {
  font-size: 17px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
}

.contact-form .ant-input,
.contact-form .ant-select-selector,
.contact-form .ant-input-affix-wrapper {
  border-radius: 16px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  font-size: 16px;
  padding: 12px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.contact-form .ant-input:focus,
.contact-form .ant-select-focused .ant-select-selector,
.contact-form .ant-input-affix-wrapper:focus {
  border-color: #1677ff;
  box-shadow:
    0 0 0 4px rgba(22, 119, 255, 0.1),
    0 4px 16px rgba(22, 119, 255, 0.1);
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

.contact-form .ant-input:hover,
.contact-form .ant-select:hover .ant-select-selector,
.contact-form .ant-input-affix-wrapper:hover {
  border-color: #1677ff;
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.08);
}

.contact-form .ant-form-item {
  margin-bottom: 32px;
}

.submit-btn {
  width: 240px;
  height: 56px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 28px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 50%, #1677ff 100%);
  background-size: 200% 100%;
  border: none;
  box-shadow:
    0 8px 24px rgba(22, 119, 255, 0.3),
    0 4px 12px rgba(67, 198, 172, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  margin: 40px auto 0;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.submit-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 12px 32px rgba(22, 119, 255, 0.4),
    0 6px 16px rgba(67, 198, 172, 0.3);
  background-position: 100% 0;
}

.submit-btn:hover::before {
  left: 100%;
}

.submit-btn:active {
  transform: translateY(-1px) scale(1.01);
}

.submit-btn:disabled {
  opacity: 0.7;
  transform: none;
  cursor: not-allowed;
}

/* 表单响应式设计 */
@media (max-width: 1200px) {
  .contact-form-section {
    margin-top: 80px;
  }

  .form-container {
    padding: 60px 40px;
  }
}

@media (max-width: 768px) {
  .form-container {
    padding: 40px 24px;
    border-radius: 20px;
    margin-bottom: 40px;
  }

  .form-header h2 {
    font-size: 28px;
  }

  .form-header {
    margin-bottom: 40px;
  }

  .form-header p {
    font-size: 16px;
  }

  .contact-form-section {
    margin-top: 60px;
    padding: 0 16px;
  }

  .contact-form .ant-form-item {
    margin-bottom: 24px;
  }

  .contact-form .ant-form-item-label > label {
    font-size: 16px;
  }

  .contact-form .ant-input,
  .contact-form .ant-select-selector,
  .contact-form .ant-input-affix-wrapper {
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 15px;
  }

  .submit-btn {
    width: 100%;
    margin-top: 32px;
    height: 52px;
    font-size: 17px;
    border-radius: 26px;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 32px 20px;
    border-radius: 16px;
  }

  .form-header h2 {
    font-size: 24px;
    letter-spacing: 1px;
  }

  .form-header {
    margin-bottom: 32px;
  }

  .form-header p {
    font-size: 15px;
  }

  .contact-form-section {
    margin-top: 40px;
    padding: 0 12px;
  }

  .contact-form .ant-form-item {
    margin-bottom: 20px;
  }

  .contact-form .ant-form-item-label > label {
    font-size: 15px;
  }

  .contact-form .ant-input,
  .contact-form .ant-select-selector,
  .contact-form .ant-input-affix-wrapper {
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 14px;
  }

  .submit-btn {
    height: 48px;
    font-size: 16px;
    border-radius: 24px;
    margin-top: 24px;
  }
}

/* 联系方式弹窗样式 */
.contact-modal :deep(.ant-modal-content) {
  border-radius: 24px;
  overflow: hidden;
  padding: 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.contact-modal :deep(.ant-modal-body) {
  padding: 0;
}

.contact-modal-content {
  padding: 0;
}

.modal-header {
  text-align: center;
  padding: 40px 40px 32px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: white;
  position: relative;
}

.modal-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
}

.success-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  animation: successPulse 0.6s ease-out;
}

@keyframes successPulse {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-icon svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.modal-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: white;
}

.modal-header p {
  font-size: 16px;
  margin: 0;
  opacity: 0.9;
  line-height: 1.5;
}

.contact-methods {
  padding: 32px 40px;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 16px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.contact-method::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(22, 119, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.contact-method:hover {
  background: rgba(22, 119, 255, 0.05);
  border-color: rgba(22, 119, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.15);
}

.contact-method:hover::before {
  left: 100%;
}

.contact-method:last-child {
  margin-bottom: 0;
}

.wechat-method {
  flex-direction: column;
  align-items: stretch;
  cursor: default;
}

.wechat-method:hover {
  transform: none;
}

.method-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: white;
  flex-shrink: 0;
}

.wechat-method .method-icon {
  margin-right: 0;
  margin-bottom: 16px;
  align-self: flex-start;
}

.method-info {
  flex: 1;
}

.method-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 4px;
}

.method-value {
  font-size: 18px;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 4px;
}

.method-tip {
  font-size: 12px;
  color: #1677ff;
  font-weight: 500;
}

.qr-code {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.qr-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.qr-text {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
  margin-bottom: 4px;
}

.qr-sub {
  font-size: 12px;
  color: #94a3b8;
}

.modal-footer {
  padding: 24px 40px 40px;
  text-align: center;
}

.close-btn {
  width: 160px;
  height: 48px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  border: none;
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.3);
  transition: all 0.3s ease;
}

.close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(22, 119, 255, 0.4);
}

/* 弹窗响应式设计 */
@media (max-width: 768px) {
  .contact-modal :deep(.ant-modal) {
    margin: 20px;
    max-width: calc(100vw - 40px);
  }

  .modal-header {
    padding: 32px 24px 24px;
  }

  .modal-header h3 {
    font-size: 20px;
  }

  .modal-header p {
    font-size: 14px;
  }

  .contact-methods {
    padding: 24px 24px;
  }

  .contact-method {
    padding: 16px;
  }

  .method-icon {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-right: 12px;
  }

  .method-value {
    font-size: 16px;
  }

  .modal-footer {
    padding: 20px 24px 32px;
  }

  .close-btn {
    width: 100%;
  }
}

.footer-bottom {
  text-align: center;
  color: #888;
  background: #181e29;
  padding: 18px 0 14px 0;
  font-size: 14px;
  margin-top: 36px;
}
</style>
