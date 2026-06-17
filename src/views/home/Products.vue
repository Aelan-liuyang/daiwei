<template>
  <a-layout class="products-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 顶部大Banner -->
      <div class="products-banner">



        <div class="products-banner-text">
          <h1 data-aos="fade-up" data-aos-delay="400">
            <span class="title-main">产品服务</span>
          </h1>
          <p class="mobile-hidden" data-aos="fade-up" data-aos-delay="600">
            致力于为客户提供高质量、多样化的管道产品与全方位服务
          </p>
          <div class="banner-stats mobile-hidden" data-aos="fade-up" data-aos-delay="800">
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="1000">
              <span class="stat-number">200+</span>
              <span class="stat-label">产品型号</span>
            </div>
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="1200">
              <span class="stat-number">15+</span>
              <span class="stat-label">年经验</span>
            </div>
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="1400">
              <span class="stat-number">1000+</span>
              <span class="stat-label">成功案例</span>
            </div>
          </div>
        </div>
      </div>
      <section class="products-section">
        <div class="product-detail-modern">
          <!-- 顶部面包屑 -->
          <Breadcrumb :items="breadcrumbItems" />
          <div class="product-detail-content">
            <!-- 左侧信息区 -->
            <aside class="side-info-panel">
              <section class="side-block product-category">
                <div class="side-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 7h14l-1 8H4L3 7z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path d="M3 7L2 3H1" stroke="currentColor" stroke-width="1.5" />
                  </svg>
                  产品分类
                </div>
                <ul>
                  <li
                    v-for="(cat, index) in categories"
                    :key="cat"
                    :class="{ active: cat === currentCategory }"
                    @click="selectCategory(cat)"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    <span class="category-icon">{{ getCategoryIcon(cat) }}</span>
                    <span class="category-text">{{ cat }}</span>
                    <span class="category-count">({{ getProductCount(cat) }})</span>
                  </li>
                </ul>
              </section>

              <section class="side-block news mobile-hidden">
                <div class="side-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 3h14v14H3V3z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path d="M7 7h6M7 11h4" stroke="currentColor" stroke-width="1.5" />
                  </svg>
                  新闻中心
                </div>
                <ul>
                  <li
                    v-for="(news, i) in newsList"
                    :key="i"
                    class="news-item"
                    @click="goToNews(news.id)"
                  >
                    <span class="news-dot"></span>
                    <span class="news-text">{{ news.title }}</span>
                  </li>
                </ul>
              </section>

              <section class="side-block keywords mobile-hidden">
                <div class="side-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9 9l-3-3m0 0l-3 3m3-3v12" stroke="currentColor" stroke-width="1.5" />
                    <path
                      d="M15 4h4l-4 4-4-4h4z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="currentColor"
                    />
                  </svg>
                  热门关键词
                </div>
                <div class="keywords-list">
                  <span v-for="(kw, i) in keywords" :key="i" class="keyword-tag">
                    {{ kw }}
                  </span>
                </div>
              </section>

              <!-- 新增联系卡片 -->
              <section class="side-block contact-card mobile-hidden">
                <div class="side-title">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M3 5h14l-7 7L3 5z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      fill="none"
                    />
                    <path d="M3 5v10h14V5" stroke="currentColor" stroke-width="1.5" fill="none" />
                  </svg>
                  联系我们
                </div>
                <div class="contact-info">
                  <div class="contact-item">
                    <span class="contact-icon">📞</span>
                    <span>18663761618</span>
                  </div>
                  <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <span>sddwcxgy@126.com</span>
                  </div>
                  <button class="contact-btn" @click="$router.push('/contact')">立即咨询</button>
                </div>
              </section>
            </aside>
            <!-- 右侧产品区 -->
            <main class="product-gallery-panel">
              <div class="product-header">
                <div class="header-content">
                  <h2 class="product-title-modern">
                    <span class="title-icon">{{ getCategoryIcon(currentCategory) }}</span>
                    {{ currentCategory }}及配件
                  </h2>
                  <p class="product-subtitle">共 {{ filteredProductList.length }} 款产品</p>
                </div>
                <div class="view-controls mobile-hidden">
                  <button
                    :class="['view-btn', { active: viewMode === 'grid' }]"
                    @click="viewMode = 'grid'"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect
                        x="1"
                        y="1"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        fill="none"
                      />
                      <rect
                        x="9"
                        y="1"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        fill="none"
                      />
                      <rect
                        x="1"
                        y="9"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        fill="none"
                      />
                      <rect
                        x="9"
                        y="9"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <button
                    :class="['view-btn', { active: viewMode === 'list' }]"
                    @click="viewMode = 'list'"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M1 4h14M1 8h14M1 12h14" stroke="currentColor" stroke-width="1.5" />
                    </svg>
                  </button>
                </div>
              </div>

              <div :class="['product-gallery-grid', viewMode]">
                <div
                  v-for="(item, index) in filteredProductList"
                  :key="item.title"
                  class="gallery-item"
                  @click="goDetail(item)"
                  :style="{ animationDelay: `${index * 0.1}s` }"
                >
                  <div class="img-wrap">
                    <img :src="item.img" :alt="item.title" />
                    <div class="img-overlay">
                      <div class="overlay-content">
                        <span class="view-icon">👁️</span>
                        <span>查看详情</span>
                      </div>
                    </div>
                  </div>
                  <div class="item-content">
                    <div class="img-title">{{ item.title }}</div>
                    <div class="item-category">{{ item.category }}</div>
                    <div class="item-description" v-if="item.description">
                      {{ item.description }}
                    </div>
                    <div class="item-actions">
                      <button class="action-btn primary" @click.stop="goDetail(item)">
                        查看详情
                      </button>
                      <button class="action-btn secondary" @click.stop="$router.push('/contact')">
                        立即咨询
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 空状态 -->
              <div v-if="filteredProductList.length === 0" class="empty-state">
                <div class="empty-icon">📦</div>
                <h3>暂无产品</h3>
                <p>该分类下暂时没有产品，请选择其他分类查看</p>
              </div>
            </main>
          </div>
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import {
  categories as sharedCategories,
  allProductList as sharedProductList
} from '@/composables/useProductData'
import { useSEO } from '@/composables/useSEO'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { setSEO } = useSEO()

// 使用共享的分类数据
const categories = sharedCategories
const currentCategory = ref(categories[0])
function selectCategory(cat) {
  currentCategory.value = cat
}

// 新闻 - 对应News.vue中的新闻数据
const newsList = [
  { id: 8, title: '耐磨陶瓷贴片怎么安装？' },
  { id: 9, title: '衬瓷管道安装技术要求' },
  { id: 5, title: '陶瓷耐磨管的制造工艺与材料有何差异？' },
  { id: 6, title: '耐磨管可以在哪些领域应用？' },
  { id: 11, title: '耐磨陶瓷管的优势和用途' },
  { id: 7, title: '双金属耐磨管：对于耐磨材料的选用有哪些要求？' }
]

// 关键词
const keywords = [
  '真空皮带脱水机配件',
  '耐磨陶瓷弯头',
  '耐磨陶瓷贴片',
  '陶瓷内衬弯管',
  '耐磨耐腐蚀管道',
  '高铝球',
  '陶瓷内衬复合钢管',
  '碳化硅衬瓷三通',
  '龟甲网耐磨陶瓷管',
  '刚玉陶瓷复合管',
  '陶瓷耐磨片',
  '高耐磨陶瓷贴片'
]

// 使用共享的产品数据
const allProductList = sharedProductList

const filteredProductList = computed(() =>
  allProductList.filter(item => item.category === currentCategory.value)
)

// 视图模式 - 移动端强制使用网格模式
const viewMode = ref('grid')

// 检测是否为移动端
const isMobile = ref(false)
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
  // 移动端强制使用网格模式
  if (isMobile.value) {
    viewMode.value = 'grid'
  }
}

// 获取分类图标
const getCategoryIcon = category => {
  const iconMap = {
    碳化硅聚合陶瓷管: '🔧',
    '反应阻燃型-碳化硅聚合陶瓷涂抹': '🔥',
    双金属耐磨管: '⚙️',
    陶瓷内衬复合钢管: '🏗️',
    陶瓷贴片耐磨管: '🛡️',
    龟甲网耐磨陶瓷管: '🐢'
  }
  return iconMap[category] || '📦'
}

// 获取产品数量
const getProductCount = category => {
  return allProductList.filter(item => item.category === category).length
}

// 面包屑数据
const breadcrumbItems = computed(() => [
  { text: '产品服务', icon: '🔧' },
  { text: currentCategory.value, icon: '📦' }
])

const router = useRouter()
function goDetail(item) {
  // 将产品数据作为路由参数传递
  router.push({
    path: `/products/${encodeURIComponent(item.title)}`,
    query: {
      category: item.category,
      image: item.img
    }
  })
}

// 跳转到新闻详情页面
function goToNews(newsId) {
  router.push(`/news/${newsId}`)
}

// 获取route实例
const route = useRoute()

// 处理分类参数的函数
function handleCategoryParam() {
  const categoryParam = route.query.category
  if (categoryParam && categories.includes(categoryParam)) {
    currentCategory.value = categoryParam
  }
}

onMounted(() => {
  // 设置SEO
  setSEO({
    title: '产品中心 - 山东岱威创新管业有限公司',
    description:
      '山东岱威创新管业专业生产碳化硅聚合陶瓷管、双金属耐磨管、陶瓷内衬复合钢管、陶瓷贴片耐磨管、龟甲网耐磨陶瓷管等系列产品，广泛应用于电力、化工、矿山、水泥等行业。',
    keywords:
      '碳化硅聚合陶瓷管,双金属耐磨管,陶瓷内衬复合钢管,陶瓷贴片耐磨管,龟甲网耐磨陶瓷管,耐磨管道,岱威管业'
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  // 检测移动端并设置视图模式
  checkMobile()
  window.addEventListener('resize', checkMobile)

  // 初始处理分类参数
  handleCategoryParam()

  // 监听路由变化
  router.afterEach(() => {
    // 路由变化后重新处理分类参数
    setTimeout(() => {
      handleCategoryParam()
    }, 100)
  })
})
</script>

<style scoped>
.products-layout {
  min-height: 100vh;

  background: #fbfbfd;
  overflow-x: hidden;
}

.main-content {
  background: #f7f9fb;
  min-height: 550px;
  padding-bottom: 40px;
}

.products-banner {
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 40px;
  color: #fff;
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 60%, #0a1628 100%);
  padding-top: 64px;
  box-sizing: border-box;
}

.banner-bg-img {
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

.products-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.banner-bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.banner-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 80%, rgba(22, 119, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(67, 198, 172, 0.1) 0%, transparent 50%);
  z-index: 2;
  animation: particleFloat 6s ease-in-out infinite alternate;
}

@keyframes particleFloat {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.products-banner-text {
  position: relative;
  z-index: 3;
  text-align: center;
  color: #fff;
  max-width: 800px;
  padding: 0 20px;
  animation: bannerTextFadeIn 1.5s ease-out;
}

@keyframes bannerTextFadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 30px;
  padding: 6px 16px;
  margin-bottom: 24px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  animation:
    badgeGlow 3s ease-in-out infinite,
    badgeSlideDown 1s ease-out 0.2s both;
  transform: translateY(-20px);
  opacity: 0;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: #43c6ac;
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(67, 198, 172, 0.8);
}

/* 移动端Banner Badge优化 */
@media (max-width: 768px) {
  .banner-badge {
    font-size: 12px;
    padding: 6px 12px;
    margin-bottom: 20px;
    gap: 6px;
  }
}

@media (max-width: 480px) {
  .banner-badge {
    font-size: 11px;
    padding: 5px 10px;
    margin-bottom: 16px;
    gap: 4px;
  }
}

@media (max-width: 360px) {
  .banner-badge {
    font-size: 10px;
    padding: 4px 8px;
    margin-bottom: 12px;
    gap: 3px;
  }
}

@keyframes badgeSlideDown {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}



.products-banner-text h1 {
  margin-bottom: 16px;
  animation: titleSlideUp 1.2s ease-out 0.4s both;
  transform: translateY(30px);
  opacity: 0;
}

/* 移动端Products Banner标题优化 */
@media (max-width: 768px) {
  .products-banner-text h1 {
    margin-bottom: 12px;
  }
}

@media (max-width: 480px) {
  .products-banner-text h1 {
    margin-bottom: 10px;
  }
}

@keyframes titleSlideUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.title-main {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

/* 移动端主标题优化 */
@media (max-width: 768px) {
  .title-main {
    font-size: 2.2rem;
    margin-bottom: 6px;
  }
}

@media (max-width: 480px) {
  .title-main {
    font-size: 1.8rem;
    margin-bottom: 5px;
  }
}

@media (max-width: 360px) {
  .title-main {
    font-size: 1.5rem;
    margin-bottom: 4px;
  }
}

@keyframes titleGlow {
  0% {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  100% {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }
}

.title-sub {
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: #a1a1a6;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: subtitleFadeIn 1s ease-out 0.8s both;
  opacity: 0;
}

/* 移动端副标题优化 */
@media (max-width: 768px) {
  .title-sub {
    font-size: 1rem;
    letter-spacing: 1px;
  }
}

@media (max-width: 480px) {
  .title-sub {
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 360px) {
  .title-sub {
    font-size: 0.75rem;
    letter-spacing: 0.3px;
  }
}

@keyframes subtitleFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.products-banner-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 24px 0 32px 0;
  color: #cbd5e1;
  animation: descriptionFadeIn 1.2s ease-out 0.6s both;
  transform: translateY(20px);
  opacity: 0;
}

/* 移动端描述文字优化 */
@media (max-width: 768px) {
  .products-banner-text p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 20px 0 24px 0;
  }
}

@media (max-width: 480px) {
  .products-banner-text p {
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 16px 0 20px 0;
  }
}

@media (max-width: 360px) {
  .products-banner-text p {
    font-size: 0.75rem;
    line-height: 1.3;
    margin: 12px 0 16px 0;
  }
}

@keyframes descriptionFadeIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.banner-stats {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px 0;
  animation: statsSlideUp 1.5s ease-out 0.8s both;
  transform: translateY(40px);
  opacity: 0;
}

@keyframes statsSlideUp {
  0% {
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 48px;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  animation: statItemZoom 0.8s ease-out both;
  transform: scale(0.8);
  opacity: 0;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:nth-child(1) {
  animation-delay: 1s;
}

.stat-item:nth-child(2) {
  animation-delay: 1.2s;
}

.stat-item:nth-child(3) {
  animation-delay: 1.4s;
}

@keyframes statItemZoom {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.stat-item:hover {
  transform: scale(1.05);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

/* 移动端统计数字优化 */
@media (max-width: 768px) {
  .stat-number {
    font-size: 1.6rem;
    margin-bottom: 3px;
  }
}

@media (max-width: 480px) {
  .stat-number {
    font-size: 1.3rem;
    margin-bottom: 2px;
  }
}

@media (max-width: 360px) {
  .stat-number {
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
}

@keyframes numberPulse {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  100% {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: #cbd5e1;
  animation: labelFadeIn 0.8s ease-out both;
  opacity: 0;
}

/* 移动端统计标签优化 */
@media (max-width: 768px) {
  .stat-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .stat-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 360px) {
  .stat-label {
    font-size: 0.6rem;
  }
}

.stat-item:nth-child(1) .stat-label {
  animation-delay: 1.2s;
}

.stat-item:nth-child(2) .stat-label {
  animation-delay: 1.4s;
}

.stat-item:nth-child(3) .stat-label {
  animation-delay: 1.6s;
}

@keyframes labelFadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-arrow {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  animation: scrollBounce 2s infinite;
}

@keyframes scrollBounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateY(-10px) rotate(-45deg);
  }
  60% {
    transform: translateY(-5px) rotate(-45deg);
  }
}

.products-section {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4px;
}

.product-detail-modern {
  background: #f7f9fb;
  min-height: 100vh;
  font-family: 'Inter', 'HarmonyOS Sans', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

.product-detail-content {
  display: flex;
  align-items: flex-start;
  max-width: 1380px;
  margin: 32px auto 0 auto;
  gap: 32px;
  padding: 0 12px;
}

/* 左侧侧边栏 */
.side-info-panel {
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 200px;
}

/* 侧边栏区块 */
.side-block {
  background: #fff;
  border-radius: 4px;
  box-shadow: none;
  padding: 20px 16px 13px 18px;
  margin-bottom: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.side-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  color: #0a1628;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.side-title svg {
  color: #0a1628;
}

/* 分类 */
.product-category ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-category li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #374151;
  padding: 12px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 8px;
  white-space: normal;
  word-break: break-all;
  border: 1px solid transparent;
  animation: slideInLeft 0.5s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.category-icon {
  font-size: 16px;
  flex-shrink: 0;
}

.category-text {
  flex: 1;
  font-weight: 500;
}

.category-count {
  font-size: 12px;
  color: #86868b;
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 500;
}

.product-category li:hover {
  background: #f5f5f7;
  color: #0a1628;
  transform: translateX(4px);
  border-color: rgba(0, 0, 0, 0.1);
}

.product-category li.active {
  background: #1e3a5f;
  color: #ffffff;
  font-weight: 600;
  border-color: #1e3a5f;
}

.product-category li.active .category-count {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

/* 新闻中心 */
.news ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.news-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
}

.news-item:hover {
  background: rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  padding: 8px 8px;
  margin: 0 -8px 12px -8px;
}

.news-dot {
  width: 4px;
  height: 4px;
  background: #86868b;
  border-radius: 50%;
  margin-top: 8px;
  flex-shrink: 0;
}

.news-text {
  color: #6e6e73;
  font-size: 13px;
  line-height: 1.6;
  cursor: pointer;
}

.news-text:hover {
  color: #0a1628;
}

/* 关键词 */
.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.keyword-tag {
  background: #f5f5f7;
  color: #0a1628;
  border-radius: 20px;
  font-size: 12px;
  padding: 5px 12px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
}

.keyword-tag:hover {
  background: #1e3a5f;
  color: #ffffff;
  transform: translateY(-1px);
}

/* 联系卡片 */
.contact-card {
  background: #f5f5f7 !important;
  border: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  font-size: 13px;
  color: #374151;
}

.contact-icon {
  font-size: 14px;
}

.contact-btn {
  background: #f0a500;
  color: #0a1628;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  width: 100%;
}

.contact-btn:hover {
  background: #f5c842;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(240, 165, 0, 0.4);
}

/* 右侧产品展示区 */
.product-gallery-panel {
  flex: 1 1 0;
  background: #fff;
  border-radius: 14px;
  box-shadow: none;
  padding: 32px 22px 24px 22px;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

/* 产品头部 */
.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.header-content {
  flex: 1;
}

.product-title-modern {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  color: #0a1628;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.title-icon {
  font-size: 1.5rem;
  background: #1e3a5f;
  padding: 8px;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-subtitle {
  color: #a1a1a6;
  font-size: 0.9rem;
  margin: 0;
}

.view-controls {
  display: flex;
  gap: 4px;
  background: #f5f5f7;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.view-btn {
  padding: 7px 12px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  color: #86868b;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-btn:hover {
  background: rgba(0, 0, 0, 0.06);
  color: #0a1628;
}

.view-btn.active {
  background: #1e3a5f;
  color: #ffffff;
}

/* 产品网格 */
.product-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-gallery-grid.list {
  grid-template-columns: 1fr;
  gap: 16px;
}

.product-gallery-grid.list .gallery-item {
  flex-direction: row;
  text-align: left;
}

.product-gallery-grid.list .img-wrap {
  width: 200px;
  flex-shrink: 0;
}

.product-gallery-grid.list .item-content {
  flex: 1;
  padding-left: 20px;
}

/* 产品卡片 */
.gallery-item {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: none;
  padding: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.gallery-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border-color: rgba(0, 0, 0, 0.15);
}

.img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1.2 / 1;
  background: #fbfbfd;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img-wrap img {
  width: 90%;
  height: 90%;
  object-fit: contain;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-item:hover .img-wrap img {
  transform: scale(1.05);
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .img-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

.view-icon {
  font-size: 24px;
}

.item-content {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.img-title {
  font-size: 16px;
  color: #0a1628;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
  word-break: break-all;
}

.item-category {
  font-size: 11px;
  color: #86868b;
  background: #f5f5f7;
  padding: 3px 8px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 12px;
  font-weight: 500;
  letter-spacing: 0.3px;
}

.item-description {
  font-size: 13px;
  color: #a1a1a6;
  line-height: 1.5;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item-actions {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.action-btn {
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn.primary {
  background: #1e3a5f;
  color: #ffffff;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: none;
}

.action-btn.secondary {
  background: #f5f5f7;
  color: #0a1628;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.action-btn.secondary:hover {
  background: rgba(22, 119, 255, 0.2);
  transform: translateY(-2px);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #a1a1a6;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 1.2rem;
  color: #374151;
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 0.9rem;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .banner-stats {
    gap: 20px;
  }

  .stat-item {
    padding: 12px 16px;
  }

  .product-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
}

@media (max-width: 1100px) {
  .product-detail-content {
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
  }

  .side-info-panel {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    min-width: 0;
    width: 100%;
  }

  .side-block {
    min-width: 200px;
    flex: 1 1 250px;
    padding: 20px 16px;
  }

  .product-gallery-panel {
    padding: 24px 20px;
  }

  .product-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .view-controls {
    align-self: flex-end;
  }
}

/* 移动端内容隐藏 */
@media (max-width: 768px) {
  /* 隐藏新闻中心、热门关键词、联系我们、视图切换 */
  .mobile-hidden {
    display: none !important;
  }

  /* 优化移动端banner文字显示 */
  .products-banner-text {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .products-banner-text h1 {
    margin-bottom: 0;
    text-align: center;
  }

  .title-main {
    font-size: 1.8rem !important;
    margin-bottom: 0 !important;
    line-height: 1.2;
  }

  /* 强制使用网格模式 */
  .product-gallery-grid {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 20px;
  }

  .product-gallery-grid.list {
    display: grid !important;
    grid-template-columns: 1fr !important;
  }

  /* 简化侧边栏，只保留产品分类 */
  .side-info-panel {
    margin-bottom: 20px;
  }

  .side-block.product-category {
    margin-bottom: 0;
  }
}

@media (max-width: 900px) {
  .products-banner {
    height: 300px;
    background: #1e3a5f;
}

  .title-main {
    font-size: 2.2rem;
  }

  .banner-stats {
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }

  .stat-item {
    width: 200px;
  }

  .product-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }

  .side-info-panel {
    gap: 12px;
  }

  .side-block {
    min-width: 150px;
    flex: 1 1 200px;
    padding: 16px 12px;
  }

  .product-title-modern {
    font-size: 1.4rem;
  }
}

@media (max-width: 600px) {
  .products-banner {
    height: 180px; /* 进一步减小到180px */
    background: #1e3a5f;
}
}

@media (max-width: 480px) {
  .products-banner {
    height: 160px;
    background: #1e3a5f;
}

  .title-main {
    font-size: 1.5rem !important;
  }
}

@media (max-width: 360px) {
  .products-banner {
    height: 120px; /* 超小屏幕进一步减小到120px */
    background: #1e3a5f;
}

  .title-main {
    font-size: 1.3rem !important;
  }

  .products-banner-text {
    padding: 0 16px;
  }

  .title-main {
    font-size: 1.8rem;
  }

  .title-sub {
    font-size: 1rem;
  }

  .products-banner-text p {
    font-size: 1rem;
  }

  .banner-stats {
    flex-direction: row;
    gap: 12px;
    justify-content: space-around;
  }

  .stat-item {
    padding: 8px 12px;
    width: auto;
    min-width: 80px;
  }

  .stat-number {
    font-size: 1.4rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .product-detail-content {
    padding: 0 16px;
    gap: 16px;
  }

  .side-info-panel {
    flex-direction: column;
    gap: 12px;
  }

  .side-block {
    min-width: 0;
    flex: none;
    padding: 16px;
  }

  .product-gallery-panel {
    padding: 20px 16px;
  }

  .product-header {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .view-controls {
    align-self: center;
  }

  .product-title-modern {
    font-size: 1.2rem;
    margin-bottom: 8px;
    justify-content: center;
  }

  .product-gallery-grid {
    grid-template-columns: 1fr !important;
    gap: 16px;
  }

  /* 移动端强制网格模式，简化布局 */
  .product-gallery-grid.list .gallery-item,
  .product-gallery-grid .gallery-item {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: none;
  }

  .product-gallery-grid.list .img-wrap,
  .product-gallery-grid .img-wrap {
    width: 100%;
    height: 200px;
  }

  .product-gallery-grid.list .item-content,
  .product-gallery-grid .item-content {
    padding: 16px;
    flex: 1;
  }

  .item-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .action-btn {
    flex: 1;
    padding: 10px 12px;
    font-size: 13px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .action-btn.primary {
    background: #1e3a5f;
    color: white;
  }

  .action-btn.secondary {
    background: #fbfbfd;
    color: #a1a1a6;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
}
</style>
