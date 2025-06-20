<template>
  <a-layout-footer>
    <footer class="footer">
      <!-- 主要内容区域 -->
      <div class="footer-main">
        <div class="footer-container">
          <!-- 公司信息 -->
          <div class="footer-section company-info">
            <div class="company-logo">
              <img src="@/assets/images/logo.png" alt="岱威管业" class="logo-img" />
              <div class="company-name">
                <h3>山东岱威创新管业</h3>
                <p>专业管道系统解决方案提供商</p>
              </div>
            </div>
            <p class="company-desc">
              致力于为客户提供高品质的管道产品和专业的技术服务，
              在管道行业拥有丰富的经验和卓越的技术实力。
            </p>
            <div class="company-stats">
              <div class="stat-item">
                <span class="stat-number">15+</span>
                <span class="stat-label">年经验</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">200+</span>
                <span class="stat-label">专利</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1000+</span>
                <span class="stat-label">客户</span>
              </div>
            </div>
          </div>

          <!-- 产品中心 -->
          <div class="footer-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 7h14l-1 8H4L3 7z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
                <path d="M3 7L2 3H1" stroke="currentColor" stroke-width="1.5" />
                <circle cx="6" cy="17" r="1" stroke="currentColor" stroke-width="1.5" fill="none" />
                <circle
                  cx="15"
                  cy="17"
                  r="1"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
              </svg>
              产品中心
            </h3>
            <ul>
              <li @click="navigateTo('/products')" class="nav-link">
                <span>碳化硅聚合陶瓷管件</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/products')" class="nav-link">
                <span>陶瓷内衬复合钢管</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/products')" class="nav-link">
                <span>双金属耐磨管及衬板</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/products')" class="nav-link">
                <span>查看全部产品</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <!-- 服务支持 -->
          <div class="footer-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L3 7v9c0 5 7 7 7 7s7-2 7-7V7l-7-5z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
                <path d="M8 11l2 2 4-4" stroke="currentColor" stroke-width="1.5" />
              </svg>
              服务支持
            </h3>
            <ul>
              <li @click="navigateTo('/about')" class="nav-link">
                <span>技术支持</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/contact')" class="nav-link">
                <span>售后服务</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/contact')" class="nav-link">
                <span>在线咨询</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/cases')" class="nav-link">
                <span>工程案例</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <!-- 联系方式 -->
          <div class="footer-section contact-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14l-7 7L3 5z" stroke="currentColor" stroke-width="1.5" fill="none" />
                <path d="M3 5v10h14V5" stroke="currentColor" stroke-width="1.5" fill="none" />
              </svg>
              联系我们
            </h3>
            <ul class="contact-list">
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2h3l1 3-2 2c1 2 3 4 5 5l2-2 3 1v3c0 1-1 2-2 2C7 14 2 9 2 4c0-1 1-2 2-2z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">电话</span>
                  <span class="contact-value">18663761618</span>
                </div>
              </li>
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3h12l-6 4-6-4z" fill="currentColor" />
                  <path d="M2 3v10h12V3" stroke="currentColor" stroke-width="1.5" fill="none" />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">邮箱</span>
                  <span class="contact-value">sddwcxgy@126.com</span>
                </div>
              </li>
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2C6 2 4 4 4 6c0 4 4 8 4 8s4-4 4-8c0-2-2-4-4-4z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                  <circle
                    cx="8"
                    cy="6"
                    r="1"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">地址</span>
                  <span class="contact-value">山东省济南市长清区双龙路1006号</span>
                </div>
              </li>
            </ul>

            <!-- 社交媒体 -->
            <div class="social-section">
              <h4>关注我们</h4>
              <div class="social-icons">
                <div class="social-item" @click="toggleWechat">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.5 12c-.83 0-1.5-.67-1.5-1.5S7.67 9 8.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 9 15.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.12.23-2.18.65-3.15C6.26 7.32 8.92 6 12 6s5.74 1.32 7.35 2.85c.42.97.65 2.03.65 3.15 0 4.41-3.59 8-8 8z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>微信</span>
                </div>
                <div class="social-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>企业QQ</span>
                </div>
              </div>

              <!-- 微信二维码 -->
              <Transition name="qrcode">
                <div v-if="showWx" class="wechat-qrcode">
                  <div class="qrcode-header">
                    <span>微信扫码关注</span>
                    <button @click="showWx = false" class="close-btn">×</button>
                  </div>
                  <div class="qrcode-placeholder">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <rect width="80" height="80" rx="8" fill="#f0f0f0" />
                      <path d="M20 20h40v40H20V20z" stroke="#ccc" stroke-width="2" fill="none" />
                      <rect x="25" y="25" width="8" height="8" fill="#333" />
                      <rect x="47" y="25" width="8" height="8" fill="#333" />
                      <rect x="25" y="47" width="8" height="8" fill="#333" />
                    </svg>
                    <p>二维码占位符</p>
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
          <div class="copyright">
            <span>© 2025 山东岱威创新管业有限公司</span>
            <span class="separator">|</span>
            <span>版权所有</span>
            <span class="separator">|</span>
            <span>鲁ICP备xxxxxxxx号</span>
          </div>
          <div class="footer-links">
            <span @click="navigateTo('/about')" class="footer-link">关于我们</span>
            <span @click="navigateTo('/contact')" class="footer-link">联系我们</span>
            <span @click="navigateTo('/news')" class="footer-link">新闻中心</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- 返回顶部按钮 -->
    <a-back-top>
      <div class="back-top-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4l-6 6h4v6h4v-6h4l-6-6z" fill="currentColor" />
        </svg>
      </div>
    </a-back-top>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showWx = ref(false)

// 导航到指定页面
const navigateTo = (path: string) => {
  router.push(path)
}

// 切换微信二维码显示
const toggleWechat = () => {
  showWx.value = !showWx.value
}
</script>

<style scoped>
.ant-layout-footer {
  padding: 0;
}

.footer {
  background: linear-gradient(135deg, #1a1f2e 0%, #16213e 100%);
  color: #cbd5e1;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23334155" fill-opacity="0.1"><circle cx="30" cy="30" r="1"/></g></svg>')
    repeat;
  opacity: 0.3;
}

.footer-main {
  position: relative;
  z-index: 1;
  padding: 80px 0 40px 0;
}

.footer-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 60px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 公司信息区域 */
.company-info {
  max-width: 400px;
}

.company-logo {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.logo-img {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.2);
}

.company-name h3 {
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.company-name p {
  color: #94a3b8;
  font-size: 0.9rem;
  margin: 0;
}

.company-desc {
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 32px;
  font-size: 0.95rem;
}

.company-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  text-align: center;
  padding: 16px 12px;
  background: rgba(22, 119, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(22, 119, 255, 0.15);
  transform: translateY(-2px);
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* 通用区域样式 */
.footer-section {
  min-width: 0;
}

.footer-section h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 24px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(22, 119, 255, 0.2);
}

.footer-section h3 svg {
  color: #1677ff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 12px;
}

/* 导航链接样式 */
.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #94a3b8;
  font-size: 0.9rem;
}

.nav-link:hover {
  background: rgba(22, 119, 255, 0.1);
  color: #ffffff;
  transform: translateX(4px);
}

.nav-link svg {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover svg {
  opacity: 1;
}

/* 联系方式样式 */
.contact-section {
  max-width: 350px;
}

.contact-list {
  margin-bottom: 32px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item svg {
  color: #1677ff;
  margin-top: 2px;
  flex-shrink: 0;
}

.contact-info {
  flex: 1;
}

.contact-label {
  display: block;
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 2px;
}

.contact-value {
  display: block;
  color: #e2e8f0;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* 社交媒体样式 */
.social-section h4 {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.social-icons {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  background: rgba(22, 119, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(22, 119, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 60px;
}

.social-item:hover {
  background: rgba(22, 119, 255, 0.2);
  transform: translateY(-2px);
}

.social-item svg {
  color: #1677ff;
}

.social-item span {
  font-size: 0.75rem;
  color: #94a3b8;
}

/* 微信二维码样式 */
.wechat-qrcode {
  position: absolute;
  bottom: 100%;
  left: 0;
  background: white;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  z-index: 10;
  min-width: 200px;
  margin-bottom: 10px;
}

.qrcode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #1e293b;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.qrcode-placeholder {
  text-align: center;
  color: #64748b;
}

.qrcode-placeholder p {
  margin: 12px 0 0 0;
  font-size: 0.8rem;
}

/* 二维码动画 */
.qrcode-enter-active,
.qrcode-leave-active {
  transition: all 0.3s ease;
}

.qrcode-enter-from,
.qrcode-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

/* 底部版权样式 */
.footer-bottom {
  background: rgba(15, 23, 42, 0.8);
  border-top: 1px solid rgba(148, 163, 184, 0.1);
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
  gap: 16px;
}

.copyright {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.85rem;
}

.separator {
  color: #475569;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  color: #94a3b8;
  font-size: 0.85rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #1677ff;
}

/* 返回顶部按钮样式 */
.back-top-button {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 20px rgba(22, 119, 255, 0.3);
  transition: all 0.3s ease;
}

.back-top-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(22, 119, 255, 0.4);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 30px;
  }

  .company-info {
    grid-column: 1 / -1;
    max-width: none;
  }

  .company-stats {
    justify-content: flex-start;
  }
}

@media (max-width: 768px) {
  .footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  }

  .footer-main {
    padding: 60px 0 30px 0;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 0 20px;
  }

  .company-logo {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .company-name h3 {
    color: #ffffff !important;
    font-size: 1.3rem;
  }

  .company-name p {
    color: #cbd5e1 !important;
  }

  .company-desc {
    color: #cbd5e1 !important;
  }

  .company-stats {
    justify-content: center;
    gap: 16px;
  }

  .stat-item {
    padding: 12px 8px;
    background: rgba(22, 119, 255, 0.2) !important;
    border: 1px solid rgba(22, 119, 255, 0.3) !important;
  }

  .footer-section h3 {
    color: #ffffff !important;
    border-bottom-color: rgba(22, 119, 255, 0.3) !important;
  }

  .nav-link {
    color: #cbd5e1 !important;
  }

  .nav-link:hover {
    color: #ffffff !important;
    background: rgba(22, 119, 255, 0.2) !important;
  }

  .contact-value {
    color: #ffffff !important;
  }

  .contact-label {
    color: #94a3b8 !important;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .footer-bottom {
    background: rgba(15, 23, 42, 0.95) !important;
  }

  .copyright {
    color: #94a3b8 !important;
  }

  .footer-link {
    color: #cbd5e1 !important;
  }

  .footer-links {
    justify-content: center;
  }

  .wechat-qrcode {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }
}

@media (max-width: 480px) {
  .footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
  }

  .footer-main {
    padding: 40px 0 20px 0;
  }

  .footer-container {
    padding: 0 16px;
    gap: 30px;
  }

  .company-name h3 {
    color: #ffffff !important;
    font-size: 1.2rem !important;
  }

  .company-name p {
    color: #e2e8f0 !important;
  }

  .company-desc {
    color: #e2e8f0 !important;
    font-size: 0.9rem;
  }

  .company-stats {
    flex-direction: column;
    gap: 12px;
  }

  .stat-item {
    padding: 10px;
    background: rgba(22, 119, 255, 0.25) !important;
    border: 1px solid rgba(22, 119, 255, 0.4) !important;
  }

  .stat-number {
    color: #60a5fa !important;
  }

  .stat-label {
    color: #cbd5e1 !important;
  }

  .footer-section h3 {
    color: #ffffff !important;
    font-size: 1rem !important;
  }

  .nav-link {
    color: #e2e8f0 !important;
    font-size: 0.85rem;
  }

  .nav-link:hover {
    color: #ffffff !important;
    background: rgba(22, 119, 255, 0.25) !important;
  }

  .contact-value {
    color: #ffffff !important;
    font-size: 0.85rem;
  }

  .contact-label {
    color: #cbd5e1 !important;
  }

  .social-icons {
    justify-content: center;
  }

  .social-item span {
    color: #cbd5e1 !important;
  }

  .contact-item {
    padding: 8px 0;
  }

  .footer-bottom-content {
    padding: 16px;
  }

  .footer-bottom {
    background: rgba(15, 23, 42, 0.98) !important;
  }

  .copyright {
    flex-direction: column;
    gap: 4px;
    text-align: center;
    color: #cbd5e1 !important;
  }

  .footer-link {
    color: #e2e8f0 !important;
  }

  .footer-links {
    gap: 16px;
  }
}
</style>
