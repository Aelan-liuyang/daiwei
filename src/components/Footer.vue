<template>
  <a-layout-footer>
    <footer class="footer">
      <!-- 波浪装饰顶部 -->
      <div class="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            fill-opacity="0.1"
          />
        </svg>
      </div>

      <!-- 主要内容区域 -->
      <div class="footer-main">
        <div class="footer-container">
          <!-- 公司信息 -->
          <div class="footer-section company-section">
            <div class="company-header">
              <div class="company-logo">
                <div class="logo-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div class="company-title">
                  <h3>山东岱威创新管业</h3>
                  <span>工业管道整体解决方案专家</span>
                </div>
              </div>
            </div>
            <p class="company-desc">
              15年专注工业管道研发与制造，为电力、矿山、化工等行业提供高品质的耐磨管道产品和专业的技术服务。
            </p>
            <div class="company-stats">
              <div class="stat-item">
                <span class="stat-number">15+</span>
                <span class="stat-label">年行业经验</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">200+</span>
                <span class="stat-label">专利技术</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">合作客户</span>
              </div>
            </div>
          </div>

          <!-- 快速导航 -->
          <div class="footer-section">
            <h4 class="section-title">
              <span class="title-line"></span>
              快速导航
            </h4>
            <ul class="nav-list">
              <li
                v-for="item in quickNav"
                :key="item.path"
                @click="navigateTo(item.path)"
                class="nav-link"
              >
                <span class="link-text">{{ item.label }}</span>
                <svg
                  class="link-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </li>
            </ul>
          </div>

          <!-- 产品中心 -->
          <div class="footer-section">
            <h4 class="section-title">
              <span class="title-line"></span>
              核心产品
            </h4>
            <ul class="nav-list">
              <li
                v-for="item in productNav"
                :key="item.category"
                @click="navigateToCategory(item.category)"
                class="nav-link"
              >
                <span class="link-text">{{ item.label }}</span>
                <svg
                  class="link-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </li>
              <li @click="navigateTo('/products')" class="nav-link view-all">
                <span class="link-text">查看全部产品</span>
                <svg
                  class="link-arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </li>
            </ul>
          </div>

          <!-- 联系方式 -->
          <div class="footer-section contact-section">
            <h4 class="section-title">
              <span class="title-line"></span>
              联系我们
            </h4>
            <ul class="contact-list">
              <li
                v-for="item in contactInfo"
                :key="item.type"
                class="contact-item"
                :class="{ clickable: item.copyable }"
                @click="item.copyable && copyToClipboard(item.value, item.type)"
              >
                <div class="contact-icon" v-html="item.icon"></div>
                <div class="contact-detail">
                  <span class="contact-label">{{ item.type }}</span>
                  <span class="contact-value">{{ item.value }}</span>
                </div>
                <div class="copy-badge" v-if="item.copyable">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  复制
                </div>
              </li>
            </ul>

            <!-- 社交媒体 -->
            <div class="social-section">
              <h5 class="social-title">关注我们</h5>
              <div class="social-icons">
                <button
                  v-for="social in socialLinks"
                  :key="social.name"
                  class="social-btn"
                  :class="{ active: social.name === '微信' && showWx }"
                  @click="social.action && social.action()"
                >
                  <div class="social-icon" v-html="social.icon"></div>
                  <span class="social-name">{{ social.name }}</span>
                </button>
              </div>

              <!-- 微信二维码弹窗 -->
              <Transition name="qr-fade">
                <div v-if="showWx" class="wechat-modal" @click.self="showWx = false">
                  <div class="qr-card">
                    <button class="qr-close" @click="showWx = false">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    </button>
                    <div class="qr-content">
                      <div class="qr-placeholder">
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                          <rect width="120" height="120" rx="8" fill="#f1f5f9" />
                          <rect x="20" y="20" width="30" height="30" rx="4" fill="#0891ff" />
                          <rect x="70" y="20" width="30" height="30" rx="4" fill="#0891ff" />
                          <rect x="20" y="70" width="30" height="30" rx="4" fill="#0891ff" />
                          <rect x="60" y="60" width="10" height="10" fill="#334155" />
                          <rect x="80" y="60" width="10" height="10" fill="#334155" />
                          <rect x="60" y="80" width="10" height="10" fill="#334155" />
                          <rect x="90" y="90" width="10" height="10" fill="#334155" />
                        </svg>
                      </div>
                      <p class="qr-text">微信扫码关注</p>
                      <p class="qr-sub">获取最新产品资讯</p>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-nav">
            <button
              v-for="link in bottomLinks"
              :key="link.path"
              class="footer-nav-link"
              @click="navigateTo(link.path)"
            >
              {{ link.label }}
            </button>
          </div>
          <div class="copyright">
            <span class="copyright-text">© 2024 山东岱威创新管业有限公司 版权所有</span>
            <span class="copyright-divider">|</span>
            <span class="copyright-text">鲁ICP备17022491号</span>
          </div>
        </div>
      </div>

      <!-- 回到顶部 -->
      <a-back-top :visibility-height="300" class="custom-backtop">
        <div class="backtop-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </a-back-top>
    </footer>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showWx = ref(false)

// 快速导航
const quickNav = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '产品服务', path: '/products' },
  { label: '工程案例', path: '/cases' },
  { label: '新闻中心', path: '/news' },
  { label: '联系我们', path: '/contact' }
]

// 产品导航
const productNav = [
  { label: '碳化硅聚合陶瓷管', category: '碳化硅聚合陶瓷管' },
  { label: '陶瓷内衬复合钢管', category: '陶瓷内衬复合钢管' },
  { label: '双金属耐磨管', category: '双金属耐磨管' },
  { label: '龟甲网耐磨陶瓷管', category: '龟甲网耐磨陶瓷管' }
]

// 联系信息
const contactInfo = [
  {
    type: '服务热线',
    value: '0531-87357881',
    copyable: true,
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  },
  {
    type: '手机号码',
    value: '18663761618',
    copyable: true,
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
  },
  {
    type: '邮箱地址',
    value: 'sddwcxgy@126.com',
    copyable: true,
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>'
  },
  {
    type: '公司地址',
    value: '山东省济南市长清区双龙路1006号',
    copyable: false,
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  }
]

// 社交媒体
const socialLinks = [
  {
    name: '微信',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8.5 12.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.65-3.15C6.26 7.32 8.92 6 12 6s5.74 1.32 7.35 2.85c.42.97.65 2.03.65 3.15 0 4.41-3.59 8-8 8z"/></svg>',
    action: () => {
      showWx.value = true
    }
  },
  {
    name: '企业QQ',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
    action: null
  }
]

// 底部链接
const bottomLinks = [
  { label: '关于我们', path: '/about' },
  { label: '联系我们', path: '/contact' },
  { label: '产品中心', path: '/products' }
  // { label: '隐私政策', path: '/privacy' }
]

// 导航函数
const navigateTo = (path: string) => {
  router.push(path)
}

const navigateToCategory = (category: string) => {
  router.push({ path: '/products', query: { category } })
}

// 复制到剪贴板
const copyToClipboard = async (text: string, type: string) => {
  try {
    await navigator.clipboard.writeText(text)
    console.log(`${type}已复制: ${text}`)
  } catch (err) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
}
</script>

<style scoped>
/* 基础样式 */
.ant-layout-footer {
  padding: 0;
}

.footer {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #cbd5e1;
  position: relative;
  overflow: hidden;
}

/* 波浪装饰 */
.footer-wave {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  color: #f8fafc;
  overflow: hidden;
  line-height: 0;
}

.footer-wave svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

/* 主要内容区 */
.footer-main {
  position: relative;
  z-index: 1;
  padding: 100px 0 60px 0;
}

.footer-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 公司信息区 */
.company-section {
  max-width: 380px;
}

.company-header {
  margin-bottom: 24px;
}

.company-logo {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo-icon {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 24px rgba(8, 145, 255, 0.3);
}

.company-title h3 {
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  letter-spacing: -0.02em;
}

.company-title span {
  color: #0891ff;
  font-size: 0.85rem;
  font-weight: 500;
}

.company-desc {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 28px;
  font-size: 0.95rem;
}

/* 统计数据 */
.company-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  text-align: center;
  padding: 14px 16px;
  background: rgba(8, 145, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(8, 145, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 80px;
}

.stat-item:hover {
  background: rgba(8, 145, 255, 0.15);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(8, 145, 255, 0.15);
}

.stat-number {
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa 0%, #0891ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
}

/* 区域标题 */
.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.title-line {
  width: 4px;
  height: 20px;
  background: linear-gradient(180deg, #0891ff 0%, #0066cc 100%);
  border-radius: 2px;
}

/* 导航列表 */
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  color: #94a3b8;
}

.nav-link:last-child {
  border-bottom: none;
}

.nav-link:hover {
  color: #ffffff;
  padding-left: 8px;
}

.link-text {
  font-size: 0.9rem;
  font-weight: 500;
}

.link-arrow {
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.3s ease;
  color: #0891ff;
}

.nav-link:hover .link-arrow {
  opacity: 1;
  transform: translateX(0);
}

.nav-link.view-all {
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #0891ff;
  font-weight: 600;
}

.nav-link.view-all:hover {
  color: #60a5fa;
}

/* 联系信息 */
.contact-section {
  max-width: 340px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  transition: all 0.3s ease;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item.clickable {
  cursor: pointer;
  border-radius: 10px;
  padding: 12px;
  margin: 0 -12px;
}

.contact-item.clickable:hover {
  background: rgba(8, 145, 255, 0.1);
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(8, 145, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0891ff;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-icon {
  background: rgba(8, 145, 255, 0.2);
  transform: scale(1.05);
}

.contact-detail {
  flex: 1;
  min-width: 0;
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 3px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  display: block;
  color: #e2e8f0;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
}

.copy-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  background: rgba(8, 145, 255, 0.15);
  border-radius: 20px;
  font-size: 0.7rem;
  color: #0891ff;
  font-weight: 600;
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.3s ease;
}

.contact-item.clickable:hover .copy-badge {
  opacity: 1;
  transform: scale(1);
}

/* 社交媒体 */
.social-section {
  position: relative;
}

.social-title {
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 14px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 72px;
}

.social-btn:hover {
  background: rgba(8, 145, 255, 0.15);
  border-color: rgba(8, 145, 255, 0.3);
  transform: translateY(-3px);
}

.social-btn.active {
  background: rgba(8, 145, 255, 0.2);
  border-color: #0891ff;
}

.social-icon {
  color: #0891ff;
}

.social-name {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
}

/* 微信二维码弹窗 */
.wechat-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.qr-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  position: relative;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
  animation: modalPop 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modalPop {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.qr-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.qr-close:hover {
  background: #e2e8f0;
  color: #334155;
}

.qr-content {
  text-align: center;
}

.qr-placeholder {
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  margin-bottom: 20px;
  border: 2px dashed #cbd5e1;
}

.qr-text {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 6px;
}

.qr-sub {
  font-size: 0.9rem;
  color: #64748b;
}

/* 弹窗动画 */
.qr-fade-enter-active,
.qr-fade-leave-active {
  transition: all 0.3s ease;
}

.qr-fade-enter-from,
.qr-fade-leave-to {
  opacity: 0;
}

.qr-fade-enter-from .qr-card,
.qr-fade-leave-to .qr-card {
  transform: scale(0.9) translateY(20px);
}

/* 底部版权 */
.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
}

.footer-bottom-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-nav {
  display: flex;
  gap: 8px;
}

.footer-nav-link {
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.footer-nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.copyright {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 500;
}

.copyright-divider {
  color: #475569;
}

/* 回到顶部 */
.custom-backtop :deep(.ant-back-top) {
  background: transparent;
  box-shadow: none;
  width: 50px;
  height: 50px;
  right: 32px;
  bottom: 32px;
}

.backtop-btn {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 24px rgba(8, 145, 255, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.backtop-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 12px 32px rgba(8, 145, 255, 0.5);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .company-section {
    grid-column: 1 / -1;
    max-width: none;
  }

  .company-stats {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .footer-wave svg {
    height: 40px;
  }

  .footer-main {
    padding: 70px 0 40px 0;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 24px;
  }

  .company-stats {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    padding: 20px 24px;
  }

  .footer-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .custom-backtop :deep(.ant-back-top) {
    right: 20px;
    bottom: 20px;
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 480px) {
  .company-logo {
    flex-direction: column;
    text-align: center;
  }

  .company-stats {
    flex-wrap: wrap;
  }

  .stat-item {
    flex: 1;
    min-width: 90px;
  }

  .qr-card {
    margin: 20px;
    padding: 24px;
  }

  .footer-nav-link {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .copyright {
    flex-direction: column;
    gap: 8px;
  }

  .copyright-divider {
    display: none;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  .footer-wave,
  .nav-link,
  .contact-item,
  .social-btn,
  .stat-item,
  .backtop-btn {
    transition: all 0.2s ease;
  }

  .qr-card {
    animation: none;
  }
}
</style>
