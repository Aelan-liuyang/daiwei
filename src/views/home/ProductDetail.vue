<template>
  <a-layout class="product-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑 -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- 产品主图和简介 -->
      <div class="product-main">
        <div class="product-image-block">
          <div
            class="main-image-container"
            @mouseenter="handleImageZoom"
            @mousemove="handleImageZoom"
            @mouseleave="resetZoom"
            @click="handlePreview(product.mainImage)"
          >
            <img :src="product.mainImage" class="main-img" />
            <div class="image-zoom-overlay" v-if="showZoom" :style="zoomStyle"></div>
            <div class="image-preview-hint">
              <zoom-in-outlined />
              <span>点击查看大图</span>
            </div>
          </div>
          <div class="thumbs-row">
            <div
              v-for="(img, i) in product.images"
              :key="i"
              class="thumb-container"
              @click="setMainImage(img)"
            >
              <img
                :src="img"
                :class="['thumb-img', { active: img === product.mainImage }]"
                @mouseenter="preloadImage(img)"
              />
            </div>
          </div>
          <!-- 产品动态数据 -->
          <div class="product-stats">
            <div class="stat-item">
              <eye-outlined />
              <span>浏览量: {{ formatNumber(productStats.views) }}</span>
            </div>
            <div class="stat-item">
              <download-outlined />
              <span>下载量: {{ formatNumber(productStats.downloads) }}</span>
            </div>
            <div class="stat-item">
              <star-outlined />
              <span>收藏: {{ formatNumber(productStats.favorites) }}</span>
            </div>
            <div class="stat-item">
              <clock-circle-outlined />
              <span>更新: {{ formatDate(productStats.lastUpdated) }}</span>
            </div>
          </div>
        </div>
        <div class="product-info-block">
          <h1 class="product-title">{{ product.name }}</h1>
          <div class="product-code" v-if="product.code">产品编号：{{ product.code }}</div>
          <ul class="product-features">
            <li v-for="(item, i) in product.features" :key="i">
              <check-circle-outlined class="feature-icon" />
              {{ item }}
            </li>
          </ul>
          <div class="product-specs" v-if="product.specs">
            <h3>产品规格</h3>
            <div class="specs-grid">
              <div v-for="(spec, key) in product.specs" :key="key" class="spec-item">
                <span class="spec-label">{{ key }}：</span>
                <span class="spec-value">{{ spec }}</span>
              </div>
            </div>
          </div>

          <!-- 产品详细内容 -->
          <div class="product-detail-content" v-if="product.detailContent">
            <h3>产品详情</h3>
            <div class="detail-content" v-html="product.detailContent"></div>
          </div>

          <!-- 产品标签 -->
          <div class="product-tags" v-if="product.tags && product.tags.length">
            <h3>产品标签</h3>
            <div class="tags-container">
              <span v-for="tag in product.tags" :key="tag" class="product-tag">{{ tag }}</span>
            </div>
          </div>

          <!-- 发布信息 -->
          <div class="product-meta" v-if="product.publishDate">
            <div class="meta-item">
              <span class="meta-label">发布时间：</span>
              <span class="meta-value">{{ formatDate(product.publishDate) }}</span>
            </div>
            <div class="meta-item" v-if="product.code">
              <span class="meta-label">产品编号：</span>
              <span class="meta-value">{{ product.code }}</span>
            </div>
          </div>

          <div class="product-btns">
            <a-button type="primary" @click="handleConsult">
              <message-outlined />
              技术咨询
            </a-button>
            <a-button @click="handleDownload">
              <download-outlined />
              下载资料
            </a-button>
            <a-button @click="handleShare">
              <share-alt-outlined />
              分享
            </a-button>
          </div>
        </div>
      </div>

      <!-- 联系咨询区域 -->
      <div class="contact-section">
        <div class="contact-card">
          <div class="contact-header">
            <h3>产品咨询</h3>
            <p>如需了解更多产品信息，请联系我们</p>
          </div>
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-text">
                <div class="contact-label">服务热线</div>
                <div class="contact-value">0531-87357881</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📱</div>
              <div class="contact-text">
                <div class="contact-label">手机号码</div>
                <div class="contact-value">18663761618</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <div class="contact-label">邮箱地址</div>
                <div class="contact-value">sddwcxgy@126.com</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <div class="contact-label">公司地址</div>
                <div class="contact-value">山东省济南市长清区双龙路1006号</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🌐</div>
              <div class="contact-text">
                <div class="contact-label">公司网址</div>
                <div class="contact-value">www.sddwcxgy.cn</div>
              </div>
            </div>
          </div>
          <div class="contact-actions">
            <a-button type="primary" size="large" @click="handleConsult">
              <message-outlined />
              立即咨询
            </a-button>
            <a-button size="large" @click="handleDownload">
              <download-outlined />
              下载资料
            </a-button>
          </div>
        </div>
      </div>
    </a-layout-content>
    <Footer />

    <!-- 图片预览弹窗 -->
    <a-modal
      v-model:visible="previewVisible"
      :footer="null"
      :width="800"
      :destroyOnClose="true"
      class="image-preview-modal"
    >
      <div class="preview-container">
        <img :src="previewImage" class="preview-image" />
      </div>
    </a-modal>
  </a-layout>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import {
  findProductByTitle,
  getProductFeatures,
  getProductSpecs
} from '@/composables/useProductData'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  EyeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  StarOutlined,
  ZoomInOutlined
} from '@ant-design/icons-vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 获取当前产品数据
const currentProduct = computed(() => {
  const productTitle = decodeURIComponent(route.params.id)
  return findProductByTitle(productTitle)
})

// 当前显示的主图
const currentMainImage = ref(route.query.image)

// 图片预览状态
const previewVisible = ref(false)
const previewImage = ref('')

// 产品动态数据
const productStats = ref({
  views: Math.floor(Math.random() * 1000) + 500,
  downloads: Math.floor(Math.random() * 100) + 50,
  favorites: Math.floor(Math.random() * 200) + 100,
  lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000)
})

// 从路由参数获取产品数据
const productData = computed(() => {
  const product = currentProduct.value
  if (!product) {
    // 如果没有找到产品，返回默认数据
    return {
      name: decodeURIComponent(route.params.id),
      category: route.query.category || '产品',
      mainImage: currentMainImage.value || route.query.image,
      images: [route.query.image].filter(Boolean),
      features: getProductFeatures(route.query.category, decodeURIComponent(route.params.id)),
      specs: getProductSpecs(route.query.category, decodeURIComponent(route.params.id)),
      code: 'N/A',
      publishDate: new Date(),
      tags: [],
      detailContent: '<p>产品详情加载中...</p>'
    }
  }

  return {
    name: product.title,
    category: product.category,
    mainImage: currentMainImage.value || product.img,
    images: product.images || [product.img, product.img, product.img, product.img],
    features: getProductFeatures(product.category, product.title),
    specs: getProductSpecs(product.category, product.title),
    code: product.code,
    publishDate: product.publishDate,
    tags: product.tags || [],
    detailContent: product.detailContent || '<p>产品详情</p>'
  }
})

// 状态管理
const showZoom = ref(false)
const zoomStyle = ref({})

// 使用计算属性获取产品数据
const product = computed(() => productData.value)

// 面包屑数据
const breadcrumbItems = computed(() => [
  { path: '/products', text: '产品服务', icon: '🔧' },
  { text: product.value.name, icon: '📦' }
])

// 图片切换功能
const setMainImage = img => {
  currentMainImage.value = img
}

// 图片预加载
const preloadImage = src => {
  const img = new Image()
  img.src = src
}

// 图片缩放功能
const handleImageZoom = e => {
  const container = e.currentTarget
  const rect = container.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  zoomStyle.value = {
    backgroundImage: `url(${product.value.mainImage})`,
    backgroundPosition: `${-x * 2}px ${-y * 2}px`,
    opacity: '1'
  }
  showZoom.value = true
}

const resetZoom = () => {
  showZoom.value = false
}

// 下载功能
const handleDownload = () => {
  // 实现下载逻辑
  console.log('下载产品资料')
}

// 咨询功能
const handleConsult = () => {
  // 实现咨询逻辑
  console.log('联系技术咨询')
}

// 分享功能
const handleShare = () => {
  // 实现分享逻辑
  console.log('分享产品')
}

// 图片预览功能
const handlePreview = img => {
  previewImage.value = img
  previewVisible.value = true
}

// 格式化日期
const formatDate = date => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 格式化数字
const formatNumber = num => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num
}

// 生命周期钩子
onMounted(() => {
  // 初始化逻辑
})

onBeforeUnmount(() => {
  // 清理逻辑
})
</script>

<style scoped>
.product-detail-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.product-main {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 40px auto;
  max-width: 1200px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  padding: 40px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.main-content {
  background: transparent;
  padding: 0 20px 40px 20px;
  min-height: 800px;
}

.product-image-block {
  flex: 1.05;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-image-container {
  position: relative;
  width: 400px;
  height: 400px;
  cursor: zoom-in;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 2px solid rgba(22, 119, 255, 0.1);
  transition: all 0.3s ease;
}

.main-image-container:hover {
  border-color: rgba(22, 119, 255, 0.3);
  box-shadow: 0 8px 30px rgba(22, 119, 255, 0.15);
  transform: translateY(-2px);
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
  transition: transform 0.4s ease;
}

.main-image-container:hover .main-img {
  transform: scale(1.05);
}

.image-zoom-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 200%;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}

.thumbs-row {
  display: flex;
  gap: 10px;
  margin-top: 22px;
}

.thumb-container {
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
}

.thumb-container:hover {
  transform: translateY(-2px);
}

.thumb-img {
  width: 54px;
  height: 54px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid #eee;
  cursor: pointer;
  background: #fff;
  transition: all 0.18s;
}

.thumb-img.active,
.thumb-img:hover {
  border-color: #1677ff;
  transform: translateY(-2px);
}

.product-info-block {
  flex: 1.6;
  min-width: 280px;
  padding-left: 18px;
}

.product-title {
  font-size: 2rem;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1px;
  line-height: 1.3;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-code {
  display: inline-block;
  background: rgba(22, 119, 255, 0.1);
  color: #1677ff;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
}

.product-features {
  margin-bottom: 28px;
  color: #374151;
  font-size: 15px;
  line-height: 1.8;
  list-style: none;
  padding-left: 0;
}

.product-features li {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  border-left: 3px solid #1677ff;
  transition: all 0.3s ease;
}

.product-features li:hover {
  background: rgba(22, 119, 255, 0.05);
  transform: translateX(4px);
}

.feature-icon {
  color: #1677ff;
  margin-right: 12px;
  font-size: 16px;
  font-weight: bold;
}

.product-specs {
  margin-bottom: 32px;
  padding: 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  box-shadow: 0 2px 12px rgba(22, 119, 255, 0.05);
}

.product-specs h3 {
  font-size: 18px;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.product-specs h3::before {
  content: '📊';
  font-size: 16px;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid rgba(22, 119, 255, 0.05);
}

.spec-label {
  color: #64748b;
  font-weight: 500;
}

.spec-value {
  color: #1e293b;
  font-weight: 600;
}

/* 产品详细内容样式 */
.product-detail-content {
  margin-bottom: 28px;
}

.product-detail-content h3 {
  font-size: 18px;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 600;
  border-bottom: 2px solid rgba(22, 119, 255, 0.1);
  padding-bottom: 8px;
}

.detail-content {
  color: #374151;
  line-height: 1.8;
  font-size: 15px;
}

.detail-content h2 {
  font-size: 16px;
  color: #1e293b;
  margin: 20px 0 12px 0;
  font-weight: 600;
}

.detail-content h3 {
  font-size: 15px;
  color: #374151;
  margin: 16px 0 8px 0;
  font-weight: 600;
}

.detail-content ul {
  margin: 12px 0;
  padding-left: 20px;
}

.detail-content li {
  margin-bottom: 8px;
  color: #374151;
}

.detail-content p {
  margin-bottom: 12px;
}

/* 产品标签样式 */
.product-tags {
  margin-bottom: 28px;
}

.product-tags h3 {
  font-size: 18px;
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 600;
  border-bottom: 2px solid rgba(22, 119, 255, 0.1);
  padding-bottom: 8px;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.product-tag {
  display: inline-block;
  background: rgba(22, 119, 255, 0.1);
  color: #1677ff;
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 16px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
}

.product-tag:hover {
  background: rgba(22, 119, 255, 0.15);
  transform: translateY(-1px);
}

/* 产品元信息样式 */
.product-meta {
  margin-bottom: 28px;
  padding: 16px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  border-left: 3px solid #1677ff;
}

.meta-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.meta-item:last-child {
  margin-bottom: 0;
}

.meta-label {
  font-weight: 600;
  color: #374151;
  margin-right: 8px;
  min-width: 80px;
}

.meta-value {
  color: #1677ff;
  font-weight: 500;
}

.product-btns {
  display: flex;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.product-btns .ant-btn {
  border-radius: 25px !important;
  height: 45px !important;
  padding: 0 24px !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.3s ease !important;
  border: none !important;
}

.product-btns .ant-btn-primary {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
  box-shadow: 0 4px 15px rgba(22, 119, 255, 0.3) !important;
}

.product-btns .ant-btn-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(22, 119, 255, 0.4) !important;
}

.product-btns .ant-btn-default {
  background: rgba(22, 119, 255, 0.1) !important;
  color: #1677ff !important;
  border: 1px solid rgba(22, 119, 255, 0.2) !important;
}

.product-btns .ant-btn-default:hover {
  background: rgba(22, 119, 255, 0.2) !important;
  transform: translateY(-2px) !important;
}

/* 联系咨询区域样式 */
.contact-section {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}

.contact-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  border: 1px solid rgba(22, 119, 255, 0.1);
  animation: slideInUp 0.6s ease-out;
}

.contact-header {
  text-align: center;
  margin-bottom: 32px;
}

.contact-header h3 {
  font-size: 24px;
  color: #1e293b;
  margin-bottom: 8px;
  font-weight: 700;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-header p {
  color: #64748b;
  font-size: 16px;
  margin: 0;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 12px;
  border-left: 4px solid #1677ff;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(22, 119, 255, 0.05);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(22, 119, 255, 0.1);
}

.contact-icon {
  font-size: 24px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 12px;
  color: white;
  flex-shrink: 0;
}

.contact-text {
  flex: 1;
}

.contact-label {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 4px;
  font-weight: 500;
}

.contact-value {
  font-size: 16px;
  color: #1e293b;
  font-weight: 600;
}

.contact-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-actions .ant-btn {
  border-radius: 25px !important;
  height: 50px !important;
  padding: 0 32px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.3s ease !important;
  border: none !important;
  min-width: 160px !important;
}

.contact-actions .ant-btn-primary {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
  box-shadow: 0 4px 15px rgba(22, 119, 255, 0.3) !important;
}

.contact-actions .ant-btn-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 20px rgba(22, 119, 255, 0.4) !important;
}

.contact-actions .ant-btn-default {
  background: rgba(22, 119, 255, 0.1) !important;
  color: #1677ff !important;
  border: 1px solid rgba(22, 119, 255, 0.2) !important;
}

.contact-actions .ant-btn-default:hover {
  background: rgba(22, 119, 255, 0.2) !important;
  transform: translateY(-2px) !important;
}

/* 响应式优化 */
@media (max-width: 1200px) {
  .product-main,
  .contact-section {
    max-width: 98vw;
    padding: 20px;
  }

  .contact-info {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 800px) {
  .product-main {
    flex-direction: column;
    gap: 24px;
    margin: 20px auto;
    padding: 24px 20px;
  }

  .main-image-container {
    width: 100%;
    max-width: 350px;
    height: 350px;
    margin: 0 auto 20px auto;
  }

  .product-info-block {
    padding-left: 0;
    text-align: center;
  }

  .product-title {
    font-size: 1.6rem;
  }

  .specs-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .product-btns {
    justify-content: center;
    gap: 8px;
  }

  .product-btns .ant-btn {
    flex: 1;
    min-width: 120px;
  }

  .contact-section {
    margin: 20px auto;
    padding: 0 16px;
  }

  .contact-card {
    padding: 24px 20px;
  }

  .contact-info {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .contact-actions {
    flex-direction: column;
    gap: 12px;
  }

  .contact-actions .ant-btn {
    width: 100% !important;
  }
}

@media (max-width: 600px) {
  .breadcrumb {
    padding: 12px 16px;
    font-size: 13px;
  }

  .product-main {
    margin: 16px auto;
    padding: 20px 16px;
  }

  .main-image-container {
    width: 100%;
    max-width: 280px;
    height: 280px;
  }

  .product-title {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }

  .product-features {
    font-size: 14px;
  }

  .product-features li {
    padding: 6px 10px;
    margin-bottom: 8px;
  }

  .product-specs {
    padding: 16px;
    margin-bottom: 24px;
  }

  .product-specs h3 {
    font-size: 16px;
  }

  .spec-item {
    padding: 8px 12px;
    font-size: 13px;
  }

  .product-btns {
    flex-direction: column;
    gap: 8px;
  }

  .product-btns .ant-btn {
    width: 100% !important;
    margin: 0 !important;
    height: 40px !important;
    font-size: 13px !important;
  }
}

.image-preview-hint {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  opacity: 0;
  transition: opacity 0.3s;
}

.main-image-container:hover .image-preview-hint {
  opacity: 1;
}

.product-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  font-size: 13px;
}

.stat-item .anticon {
  color: #1677ff;
  font-size: 16px;
}

.image-preview-modal :deep(.ant-modal-content) {
  background: #000;
  padding: 0;
}

.preview-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.preview-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

/* 优化缩略图样式 */
.thumbs-row {
  display: flex;
  gap: 12px;
  margin-top: 16px;
  padding: 4px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #1677ff #f0f0f0;
}

.thumbs-row::-webkit-scrollbar {
  height: 6px;
}

.thumbs-row::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 3px;
}

.thumbs-row::-webkit-scrollbar-thumb {
  background: #1677ff;
  border-radius: 3px;
}

.thumb-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.thumb-img.active {
  border-color: #1677ff;
  transform: scale(1.05);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .product-stats {
    flex-wrap: wrap;
    gap: 12px;
  }

  .stat-item {
    flex: 1 1 40%;
    justify-content: center;
  }

  .thumbs-row {
    gap: 8px;
  }

  .thumb-img {
    width: 60px;
    height: 60px;
  }
}
</style>
