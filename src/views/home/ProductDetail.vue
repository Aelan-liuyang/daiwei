<template>
  <a-layout class="product-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑 -->
      <div class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
          <a-breadcrumb-item>
            <a href="/products">产品服务</a>
          </a-breadcrumb-item>
          <a-breadcrumb-item>{{ product.name }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>

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

      <!-- 视频及相关内容推荐 -->
      <div class="product-video-section">
        <div class="video-left">
          <div class="video-player" @click="playVideo">
            <img :src="product.videoCover" class="video-cover" />
            <div class="video-play-btn">
              <play-circle-outlined />
            </div>
            <div class="video-duration" v-if="product.videoDuration">
              {{ product.videoDuration }}
            </div>
          </div>
          <div class="video-info">
            <h3>{{ product.videoTitle || '产品演示视频' }}</h3>
            <p>{{ product.videoDesc }}</p>
          </div>
        </div>
        <div class="video-right">
          <div class="video-recommend-title">相关视频</div>
          <ul class="video-recommend-list">
            <li v-for="(item, i) in product.relatedVideos" :key="i" @click="playRelatedVideo(item)">
              <div class="video-thumb-container">
                <img :src="item.img" class="video-thumb" />
                <div class="video-play-icon">
                  <play-circle-outlined />
                </div>
                <div class="video-duration-small" v-if="item.duration">{{ item.duration }}</div>
              </div>
              <div class="video-info-small">
                <div class="video-title">{{ item.title }}</div>
                <div class="video-desc" v-if="item.desc">{{ item.desc }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- 资料下载区域 -->
      <div class="product-resource-section">
        <div class="section-header">
          <h2>产品资料</h2>
          <div class="section-actions">
            <a-button type="link" @click="downloadAll">
              <download-outlined />
              下载全部
            </a-button>
          </div>
        </div>
        <div class="resource-tabs">
          <a-tabs v-model:activeKey="tabKey">
            <a-tab-pane key="all" tab="所有资源">
              <ResourceTable :resources="product.resources" @download="handleResourceDownload" />
            </a-tab-pane>
            <a-tab-pane key="software" tab="软件">
              <SoftwareTable :softwares="product.softwares" @download="handleSoftwareDownload" />
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>

      <!-- 相关系统/产品推荐 -->
      <div class="product-systems-section">
        <div class="section-header">
          <h2>相关系统</h2>
          <a-button type="link" @click="viewAllSystems">
            查看全部
            <right-outlined />
          </a-button>
        </div>
        <div class="systems-row">
          <div
            v-for="(item, i) in product.systems"
            :key="i"
            class="system-block"
            @click="viewSystem(item)"
          >
            <div class="system-img-container">
              <img :src="item.img" alt="" class="system-img" />
              <div class="system-overlay">
                <eye-outlined />
              </div>
            </div>
            <div class="system-caption">
              <div class="system-name">{{ item.name }}</div>
              <div class="system-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </a-layout-content>
    <Footer />

    <!-- 视频播放弹窗 -->
    <a-modal
      v-model:visible="videoModalVisible"
      :footer="null"
      :width="800"
      :destroyOnClose="true"
      class="video-modal"
    >
      <div class="video-container">
        <video ref="videoPlayer" controls :src="currentVideoUrl" class="video-player-full"></video>
      </div>
    </a-modal>

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
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import ResourceTable from '@/components/ResourceTable.vue'
import SoftwareTable from '@/components/SoftwareTable.vue'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  DownloadOutlined,
  EyeOutlined,
  MessageOutlined,
  PlayCircleOutlined,
  RightOutlined,
  ShareAltOutlined,
  StarOutlined,
  ZoomInOutlined
} from '@ant-design/icons-vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)

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
const productData = computed(() => ({
  name: decodeURIComponent(route.params.id),
  category: route.query.category,
  mainImage: currentMainImage.value,
  images: [
    route.query.image,
    route.query.image.replace('.jpg', '_1.jpg'),
    route.query.image.replace('.jpg', '_2.jpg'),
    route.query.image.replace('.jpg', '_3.jpg'),
    route.query.image.replace('.jpg', '_4.jpg')
  ].filter(Boolean), // 过滤掉无效的图片路径
  features: [
    '一体式管件，安装更便捷，可靠性高',
    '安装效率比传统方式提升4倍',
    '比螺纹连接快5倍',
    '适用管径：1"~2½"（32~65 mm, 76.1 mm）'
  ],
  specs: {
    材质: '碳钢',
    表面处理: '镀锌',
    工作压力: '16 bar',
    工作温度: '-10°C ~ +80°C',
    认证: 'UL, FM, CE'
  },
  videoCover: route.query.image,
  videoTitle: `${decodeURIComponent(route.params.id)} 产品演示`,
  videoDesc: `了解${decodeURIComponent(route.params.id)}的安装优势和创新特性`,
  videoDuration: '3:45',
  relatedVideos: [
    {
      img: route.query.image,
      title: `${decodeURIComponent(route.params.id)} 安装演示`,
      link: '#',
      duration: '2:30',
      desc: '详细安装步骤演示'
    },
    {
      img: route.query.image,
      title: '产品对比讲解',
      link: '#',
      duration: '4:15',
      desc: '与传统产品对比分析'
    },
    {
      img: route.query.image,
      title: '系统案例',
      link: '#',
      duration: '5:20',
      desc: '实际工程应用案例'
    }
  ],
  resources: [
    {
      name: `${decodeURIComponent(route.params.id)} 产品样本`,
      number: '10.06',
      download: '#',
      collection: '#'
    },
    {
      name: '安装说明书',
      number: '101,103',
      download: '#',
      collection: '#'
    },
    {
      name: '应用指南',
      number: 'AN-001',
      download: '#',
      collection: '#'
    }
  ],
  softwares: [
    { name: 'Revit ELS-GLOBAL - 10.06', download: '#' },
    { name: 'Revit Europe - 10.06', download: '#' },
    { name: 'AutoCAD 10.06', download: '#' }
  ],
  systems: [
    {
      img: route.query.image,
      name: `${decodeURIComponent(route.params.id)}`,
      desc: '创新的一体式设计'
    },
    {
      img: route.query.image,
      name: '相关系统',
      desc: '提升效率的解决方案'
    }
  ]
}))

// 状态管理
const showZoom = ref(false)
const zoomStyle = ref({})
const videoModalVisible = ref(false)
const currentVideoUrl = ref('')
const tabKey = ref('all')

// 使用计算属性获取产品数据
const product = computed(() => productData.value)

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

// 视频播放功能
const playVideo = () => {
  currentVideoUrl.value = product.value.videoUrl
  videoModalVisible.value = true
}

const playRelatedVideo = video => {
  currentVideoUrl.value = video.link
  videoModalVisible.value = true
}

// 下载功能
const handleDownload = () => {
  // 实现下载逻辑
}

const downloadAll = () => {
  // 实现批量下载逻辑
}

const handleResourceDownload = resource => {
  // 实现资源下载逻辑
}

const handleSoftwareDownload = software => {
  // 实现软件下载逻辑
}

// 咨询功能
const handleConsult = () => {
  // 实现咨询逻辑
}

// 分享功能
const handleShare = () => {
  // 实现分享逻辑
}

// 查看系统详情
const viewSystem = system => {
  // 实现查看系统详情逻辑
}

const viewAllSystems = () => {
  router.push('/systems')
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

.breadcrumb {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  margin: 0;
  padding: 20px 40px;
  border-bottom: 1px solid rgba(22, 119, 255, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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

/* 视频区样式优化 */
.product-video-section {
  display: flex;
  max-width: 1080px;
  margin: 0 auto 36px auto;
  gap: 32px;
}

.video-left {
  flex: 1.5;
}

.video-player {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  cursor: pointer;
  transition: transform 0.2s;
}

.video-player:hover {
  transform: translateY(-2px);
}

.video-cover {
  width: 100%;
  border-radius: 12px;
}

.video-play-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.video-duration {
  position: absolute;
  right: 12px;
  bottom: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.video-info {
  margin-top: 16px;
}

.video-info h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.video-info p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.video-right {
  flex: 1.1;
  padding-top: 12px;
}

.video-recommend-title {
  font-size: 17px;
  color: #1677ff;
  font-weight: 600;
  margin-bottom: 16px;
}

.video-recommend-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.video-recommend-list li {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;
  transition: transform 0.2s;
}

.video-recommend-list li:hover {
  transform: translateX(4px);
}

.video-thumb-container {
  position: relative;
  width: 120px;
  height: 68px;
  margin-right: 12px;
}

.video-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
}

.video-play-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 24px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.video-duration-small {
  position: absolute;
  right: 4px;
  bottom: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 2px 4px;
  border-radius: 2px;
  font-size: 10px;
}

.video-info-small {
  flex: 1;
}

.video-title {
  color: #333;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
}

.video-desc {
  color: #666;
  font-size: 12px;
}

/* 资源下载区样式优化 */
.product-resource-section {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 16px rgba(22, 119, 255, 0.06);
  padding: 24px;
  max-width: 1080px;
  margin: 0 auto 46px auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 18px;
  color: #1677ff;
  margin: 0;
}

/* 相关系统样式优化 */
.product-systems-section {
  max-width: 1080px;
  margin: 0 auto 36px auto;
}

.systems-row {
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: stretch;
}

.system-block {
  background: linear-gradient(120deg, #eaf6ff 0%, #fafdff 100%);
  border-radius: 12px;
  box-shadow: 0 2px 11px rgba(22, 119, 255, 0.05);
  padding: 20px;
  flex: 1;
  cursor: pointer;
  transition: all 0.3s;
}

.system-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 20px rgba(22, 119, 255, 0.1);
}

.system-img-container {
  position: relative;
  width: 100%;
  height: 160px;
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
}

.system-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.system-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.system-overlay .anticon {
  color: #fff;
  font-size: 32px;
}

.system-block:hover .system-img {
  transform: scale(1.05);
}

.system-block:hover .system-overlay {
  opacity: 1;
}

.system-caption {
  text-align: center;
}

.system-name {
  font-size: 16px;
  font-weight: 600;
  color: #1677ff;
  margin-bottom: 8px;
}

.system-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

/* 视频弹窗样式 */
.video-modal :deep(.ant-modal-content) {
  background: #000;
  padding: 0;
}

.video-container {
  width: 100%;
  padding-top: 56.25%; /* 16:9 比例 */
  position: relative;
}

.video-player-full {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 响应式优化 */
@media (max-width: 1200px) {
  .product-main,
  .product-video-section,
  .product-resource-section,
  .product-systems-section {
    max-width: 98vw;
    padding: 20px;
  }
}

@media (max-width: 800px) {
  .breadcrumb {
    padding: 16px 20px;
  }

  .product-main,
  .product-video-section {
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

  .systems-row {
    flex-direction: column;
  }

  .system-block {
    margin-bottom: 16px;
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

  .video-thumb-container {
    width: 100px;
    height: 56px;
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
