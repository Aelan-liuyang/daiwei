<template>
  <a-layout-footer>
    <footer class="footer">
      <!-- 主要内容区域 -->
      <div class="footer-main">
        <div class="footer-container">
          <!-- 快速导航 -->
          <div class="footer-section quick-nav">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 7h14l-1 8H4L3 7z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
                <path d="M3 7L2 3H1" stroke="currentColor" stroke-width="1.5" />
              </svg>
              快速导航
            </h3>
            <ul>
              <li @click="navigateTo('/')" class="nav-link">
                <span>首页</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/about')" class="nav-link">
                <span>关于我们</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateTo('/news')" class="nav-link">
                <span>新闻中心</span>
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

          <!-- 产品中心 -->
          <div class="footer-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L3 7v9c0 5 7 7 7 7s7-2 7-7V7l-7-5z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
              </svg>
              产品中心
            </h3>
            <ul>
              <li @click="navigateToCategory('碳化硅聚合陶瓷管')" class="nav-link">
                <span>碳化硅聚合陶瓷管</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateToCategory('陶瓷内衬复合钢管')" class="nav-link">
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
              <li @click="navigateToCategory('双金属耐磨管')" class="nav-link">
                <span>双金属耐磨管</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateToCategory('龟甲网耐磨陶瓷管')" class="nav-link">
                <span>龟甲网耐磨陶瓷管</span>
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

          <!-- 热门产品 -->
          <div class="footer-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  fill="none"
                />
              </svg>
              热门产品
            </h3>
            <ul>
              <li @click="navigateToProduct('真空皮带脱水机及配件')" class="nav-link">
                <span>真空皮带脱水机</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateToProduct('烧结碳化硅陶瓷管件·喷嘴')" class="nav-link">
                <span>碳化硅陶瓷喷嘴</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateToProduct('堆焊耐磨衬板管件')" class="nav-link">
                <span>堆焊耐磨衬板</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
              <li @click="navigateToProduct('陶瓷内衬复合钢管')" class="nav-link">
                <span>陶瓷内衬钢管</span>
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
              <li
                class="contact-item clickable"
                @click="copyToClipboard('0531-87357881', '服务热线')"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2h3l1 3-2 2c1 2 3 4 5 5l2-2 3 1v3c0 1-1 2-2 2C7 14 2 9 2 4c0-1 1-2 2-2z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">服务热线</span>
                  <span class="contact-value">0531-87357881</span>
                </div>
                <div class="copy-hint">点击复制</div>
              </li>
              <li
                class="contact-item clickable"
                @click="copyToClipboard('18663761618', '手机号码')"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="3"
                    y="1"
                    width="10"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="1.5"
                    fill="none"
                  />
                  <path
                    d="M7 12h2"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">手机号码</span>
                  <span class="contact-value">18663761618</span>
                </div>
                <div class="copy-hint">点击复制</div>
              </li>
              <li
                class="contact-item clickable"
                @click="copyToClipboard('sddwcxgy@126.com', '邮箱地址')"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3h12l-6 4-6-4z" fill="currentColor" />
                  <path d="M2 3v10h12V3" stroke="currentColor" stroke-width="1.5" fill="none" />
                </svg>
                <div class="contact-info">
                  <span class="contact-label">邮箱地址</span>
                  <span class="contact-value">sddwcxgy@126.com</span>
                </div>
                <div class="copy-hint">点击复制</div>
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
                  <span class="contact-label">公司地址</span>
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
          <div class="footer-links">
            <span @click="navigateTo('/about')" class="footer-link">关于我们</span>
            <span @click="navigateTo('/contact')" class="footer-link">联系我们</span>
            <span @click="navigateTo('/products')" class="footer-link">产品中心</span>
            <span @click="navigateTo('/news')" class="footer-link">新闻中心</span>
          </div>
          <div class="copyright-center">
            <span>© 山东岱威创新管业有限公司</span>
            <span class="separator">|</span>
            <span>鲁ICP备17022491号</span>
          </div>
        </div>
      </div>
    </footer>
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

// 导航到产品详情页
const navigateToProduct = (productTitle: string) => {
  // 跳转到具体的产品详情页，使用正确的路由路径
  router.push(`/products/${encodeURIComponent(productTitle)}`)
}

// 导航到产品分类页面
const navigateToCategory = (category: string) => {
  // 跳转到产品服务页面，并通过query参数传递分类名称
  router.push({
    path: '/products',
    query: { category: category }
  })
}

// 复制联系方式到剪贴板
const copyToClipboard = async (text: string, type: string) => {
  try {
    await navigator.clipboard.writeText(text)
    // 这里需要导入message组件，暂时用console.log代替
    console.log(`${type}已复制到剪贴板`)
  } catch (error) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    console.log(`${type}已复制到剪贴板`)
  }
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
  position: relative;
  transition: all 0.3s ease;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item.clickable {
  cursor: pointer;
  border-radius: 8px;
  padding: 12px 8px;
  margin: 0 -8px;
}

.contact-item.clickable:hover {
  background: rgba(22, 119, 255, 0.1);
  transform: translateX(4px);
}

.copy-hint {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: #1677ff;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(22, 119, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.contact-item.clickable:hover .copy-hint {
  opacity: 1;
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
.wechat-section {
  margin-top: 24px;
  position: relative;
}

.wechat-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(22, 119, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(22, 119, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  color: #e2e8f0;
  font-size: 0.9rem;
}

.wechat-trigger:hover {
  background: rgba(22, 119, 255, 0.2);
  color: #ffffff;
}

.wechat-trigger svg {
  color: #1677ff;
}

.wechat-trigger .arrow {
  margin-left: auto;
  transition: transform 0.3s ease;
}

.wechat-trigger .arrow.rotated {
  transform: rotate(180deg);
}

.wechat-qr {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  margin-bottom: 12px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  text-align: center;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  animation: fadeInUp 0.3s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.qr-placeholder {
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #e2e8f0 100%);
  border: 2px dashed #1677ff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.qr-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(circle at 30% 30%, rgba(22, 119, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(67, 198, 172, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.qr-placeholder:hover {
  border-color: #43c6ac;
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.2);
}

.qr-text {
  font-size: 15px;
  color: #1677ff;
  font-weight: 600;
  margin-bottom: 6px;
  position: relative;
  z-index: 1;
  text-align: center;
}

.qr-sub {
  font-size: 13px;
  color: #64748b;
  font-weight: 500;
  position: relative;
  z-index: 1;
  text-align: center;
}

.qr-placeholder::after {
  content: '📱';
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  opacity: 0.3;
  z-index: 1;
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
  gap: 20px;
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
  padding: 4px 8px;
  border-radius: 4px;
}

.footer-link:hover {
  color: #1677ff;
  background: rgba(22, 119, 255, 0.1);
}

.copyright-center {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 8px 20px;
  background: rgba(22, 119, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(22, 119, 255, 0.1);
}

.separator {
  color: #475569;
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
    gap: 16px;
    text-align: center;
    padding: 20px;
  }

  .footer-links {
    justify-content: center;
  }

  .footer-bottom {
    background: rgba(15, 23, 42, 0.95) !important;
  }

  .copyright-center {
    color: #94a3b8 !important;
  }

  .footer-link {
    color: #cbd5e1 !important;
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
