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

// 提交表单
const handleSubmit = async (values: any) => {
  try {
    submitting.value = true

    // 模拟提交请求
    await new Promise(resolve => setTimeout(resolve, 2000))

    // 这里可以调用实际的API
    console.log('提交的表单数据:', values)

    message.success('提交成功！我们会尽快与您联系。')

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
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.header {
  display: flex;
  align-items: center;
  background: #001529;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-right: 32px;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
}

.main-content {
  background: #f7f9fb;
  min-height: 500px;
  padding-bottom: 40px;
}

/* Banner 新样式 - 恢复原来的显示方式 */
.location-banner {
  width: 100vw;
  max-width: 100vw;
  min-height: 240px;
  height: 28vw;
  max-height: 340px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: #0d1d3a;
}

.banner-bg {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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
  /* 动画：初始放大1.12倍，2s内缩小回原大小，ease-out */
  transform: scale(1.12);
  animation: bannerZoomIn 2s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

@keyframes bannerZoomIn {
  from {
    transform: scale(1.12);
  }

  to {
    transform: scale(1);
  }
}

.banner-content {
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: center;
  width: 100%;
  padding-bottom: 28px;
}

.banner-content h1 {
  font-size: 2.7rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 6px;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);
}

.banner-subtitle {
  font-size: 1.2rem;
  color: #d6e5fa;
  letter-spacing: 4px;
  margin-top: 12px;
  font-weight: 400;
}

/* 内容布局更宽、更简约 */
.contact-section {
  background: none;
  box-shadow: none;
  max-width: 1500px;
  margin: 0 auto;
  padding: 64px 0 0 0;
}

.contact-content-wide {
  display: flex;
  gap: 56px;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05);
  padding: 56px 70px 48px 70px;
  max-width: 95%;
  margin: 0 auto;
}

.contact-info-box {
  flex: 1.1;
  min-width: 300px;
  max-width: 400px;
  padding-right: 24px;
}

.contact-title {
  font-size: 27px;
  font-weight: bold;
  color: #1677ff;
  margin-bottom: 28px;
  letter-spacing: 2px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  font-size: 17px;
  color: #333;
  margin-bottom: 22px;
  line-height: 2.1;
  letter-spacing: 1px;
}

.contact-list .label {
  color: #888;
  font-weight: 500;
  display: inline-block;
  min-width: 90px;
}

.contact-map-box {
  flex: 1.8;
  min-width: 340px;
  max-width: 700px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08);
  background: #e8eef4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.map-iframe {
  width: 100%;
  height: 400px;
  border: none;
  display: block;
  border-radius: 16px;
}

.map-tip {
  position: absolute;
  bottom: 10px;
  left: 14px;
  background: rgba(22, 119, 255, 0.87);
  color: #fff;
  font-size: 14px;
  padding: 5px 16px;
  border-radius: 10px;
  opacity: 0.92;
  pointer-events: none;
  letter-spacing: 1px;
}

/* 响应式 */
@media (max-width: 1200px) {
  .contact-content-wide {
    flex-direction: column;
    gap: 32px;
    padding: 30px 10px 28px 10px;
  }

  .contact-info-box {
    padding-right: 0;
    max-width: 100%;
  }

  .contact-map-box {
    min-width: 0;
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .contact-section {
    padding: 18px 0 0 0;
  }

  .contact-content-wide {
    padding: 10px 0 10px 0;
    border-radius: 10px;
  }

  .location-banner {
    height: 90px;
    min-height: 55px;
  }

  .banner-earth {
    width: 100vw;
    min-width: 120px;
  }

  .banner-content {
    padding-bottom: 12px;
  }

  .banner-content h1 {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  .banner-subtitle {
    font-size: 0.82rem;
    letter-spacing: 1.5px;
  }

  .contact-title {
    font-size: 17px;
  }

  .map-iframe {
    height: 170px;
    border-radius: 8px;
  }
}

/* 联系表单样式 */
.contact-form-section {
  max-width: 77%;
  margin: 80px auto 0;
  padding: 0 20px;
}

.form-container {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  padding: 60px;
  margin-bottom: 40px;
}

.form-header {
  text-align: center;
  margin-bottom: 50px;
}

.form-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.form-header p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form .ant-form-item-label > label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.contact-form .ant-input,
.contact-form .ant-select-selector,
.contact-form .ant-input-affix-wrapper {
  border-radius: 8px;
  border: 2px solid #e8e8e8;
  transition: all 0.3s ease;
}

.contact-form .ant-input:focus,
.contact-form .ant-select-focused .ant-select-selector,
.contact-form .ant-input-affix-wrapper:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 4px rgba(22, 119, 255, 0.1);
}

.contact-form .ant-input:hover,
.contact-form .ant-select:hover .ant-select-selector,
.contact-form .ant-input-affix-wrapper:hover {
  border-color: #1677ff;
}

.submit-btn {
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  background: linear-gradient(135deg, #1677ff 0%, #0958d9 100%);
  border: none;
  box-shadow: 0 4px 15px rgba(22, 119, 255, 0.3);
  transition: all 0.3s ease;
  display: block;
  margin: 30px auto 0;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(22, 119, 255, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-container {
    padding: 30px 20px;
    border-radius: 15px;
  }

  .form-header h2 {
    font-size: 24px;
  }

  .form-header {
    margin-bottom: 30px;
  }

  .contact-form-section {
    margin-top: 40px;
    padding: 0 10px;
  }

  .submit-btn {
    width: 100%;
    margin-top: 20px;
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
