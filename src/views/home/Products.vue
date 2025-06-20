<template>
  <a-layout class="products-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 顶部大Banner -->
      <div class="products-banner">
        <div class="banner-bg-overlay"></div>
        <img src="@/assets/images/product2.jpeg" alt="产品服务" class="banner-bg-img" />
        <div class="banner-particles"></div>
        <div class="products-banner-text">
          <div class="banner-badge">
            <span class="badge-icon">🏭</span>
            <span>专业管道解决方案</span>
          </div>
          <h1>
            <span class="title-main">产品服务</span>
            <span class="title-sub">Product Services</span>
          </h1>
          <p>致力于为客户提供高质量、多样化的管道产品与全方位服务</p>
          <div class="banner-stats">
            <div class="stat-item">
              <span class="stat-number">200+</span>
              <span class="stat-label">产品型号</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">年经验</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">1000+</span>
              <span class="stat-label">成功案例</span>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <div class="scroll-arrow"></div>
        </div>
      </div>
      <section class="products-section">
        <div class="product-detail-modern">
          <!-- 顶部面包屑 -->
          <div class="product-breadcrumb">
            <a-breadcrumb>
              <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
              <a-breadcrumb-item>
                <a href="/products">产品服务</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item>{{ currentCategory }}</a-breadcrumb-item>
            </a-breadcrumb>
          </div>
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

              <section class="side-block news">
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
                  <li v-for="(news, i) in newsList" :key="i" class="news-item">
                    <span class="news-dot"></span>
                    <span class="news-text">{{ news }}</span>
                  </li>
                </ul>
              </section>

              <section class="side-block keywords">
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
              <section class="side-block contact-card">
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
                <div class="view-controls">
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
import chenci from '@/assets/images/chenci.jpg'
import chenjiao from '@/assets/images/chenjiao.jpg'
import daibeibao from '@/assets/images/daibeibao.jpg'
import daituo from '@/assets/images/daituo.jpg'
import duihan from '@/assets/images/duihan.jpg'
import gangsu from '@/assets/images/gangsu.jpg'
import gaonai from '@/assets/images/gaonai.png'
import guijia1 from '@/assets/images/guijia1.jpg'
import guijia2 from '@/assets/images/guijia2.jpg'
import jusi from '@/assets/images/jusi.jpg'
import penzui from '@/assets/images/penzui.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import tanhua from '@/assets/images/tanhua.jpg'
import tanhuada from '@/assets/images/tanhuada.jpg'
import tanhuaduo from '@/assets/images/tanhuaduo.jpg'
import tanhuaguan from '@/assets/images/tanhuaguan.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import tanhuayi from '@/assets/images/tanhuayi.jpg'
import tanhuazhi from '@/assets/images/tanhuazhi.jpg'
import taoci from '@/assets/images/taoci.jpg'
import taocifu from '@/assets/images/taocifu.png'
import taocinai from '@/assets/images/taocinai.jpg'
import taociwan from '@/assets/images/taociwan.jpg'
import xiangjiao from '@/assets/images/xiangjiao.jpg'
import zhenkong from '@/assets/images/zhenkong.jpg'
import zuran1 from '@/assets/images/zuran1.jpg'
import zuran2 from '@/assets/images/zuran2.jpg'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { setSEO } = useSEO()

// 分类
const categories = [
  '碳化硅聚合陶瓷管',
  '反应阻燃型-碳化硅聚合陶瓷涂抹',
  '双金属耐磨管',
  '陶瓷内衬复合钢管',
  '陶瓷贴片耐磨管',
  '龟甲网耐磨陶瓷管'
]
const currentCategory = ref(categories[0])
function selectCategory(cat) {
  currentCategory.value = cat
}

// 新闻
const newsList = [
  '碳化硅陶瓷管的新型应用案例',
  '几种常见耐磨管道对比',
  '反应阻燃型陶瓷管道技术更新',
  '工业管道选型小知识',
  '陶瓷贴片耐磨管安装方法'
]

// 关键词
const keywords = [
  '脱硫管道',
  '耐磨陶瓷管',
  '陶瓷贴片耐磨管',
  '龟甲网耐磨陶瓷管',
  'SIC陶瓷涂抹',
  '真空带式脱水机',
  '碳化硅陶瓷喷嘴'
]

// 产品图片和标题（每个分类一组，演示可适当复用图片）
const allProductList = [
  { category: '碳化硅聚合陶瓷管', img: zhenkong, title: '真空皮带脱水机及配件' },
  { category: '碳化硅聚合陶瓷管', img: duihan, title: '堆焊耐磨衬板管件' },
  { category: '碳化硅聚合陶瓷管', img: xiangjiao, title: '橡胶膨胀节' },
  { category: '碳化硅聚合陶瓷管', img: penzui, title: '烧结碳化硅陶瓷管件.喷嘴' },
  { category: '碳化硅聚合陶瓷管', img: jusi, title: '聚四氟内衬管件' },
  { category: '碳化硅聚合陶瓷管', img: gangsu, title: '钢塑复合管件' },
  { category: '碳化硅聚合陶瓷管', img: chenjiao, title: '衬胶管件' },
  { category: '碳化硅聚合陶瓷管', img: tanhua, title: ' 碳化硅聚合陶瓷直管' },
  { category: '碳化硅聚合陶瓷管', img: chenci, title: '衬瓷弯管' },
  { category: '碳化硅聚合陶瓷管', img: tanhuaduo, title: '碳化硅聚合三（多）通' },
  { category: '碳化硅聚合陶瓷管', img: daituo, title: '带托座衬瓷弯头' },
  { category: '碳化硅聚合陶瓷管', img: tanhuada, title: '碳化硅聚合陶瓷大小头' },
  { category: '碳化硅聚合陶瓷管', img: tanhuahe, title: '碳化硅聚合陶瓷管' },
  { category: '碳化硅聚合陶瓷管', img: tanhuayi, title: '碳化硅聚合陶瓷大小头异型件' },
  { category: '碳化硅聚合陶瓷管', img: tanhuaguan, title: '碳化硅衬瓷管件' },
  { category: '碳化硅聚合陶瓷管', img: tanhuazhi, title: '碳化硅直管' },

  { category: '反应阻燃型-碳化硅聚合陶瓷涂抹', img: zuran1, title: '阻燃型碳化硅衬瓷材料' },
  { category: '反应阻燃型-碳化硅聚合陶瓷涂抹', img: zuran2, title: '阻燃型碳化硅陶瓷衬材' },
  { category: '双金属耐磨管', img: shuangjin, title: '双金属耐磨管及异形件' },

  { category: '陶瓷内衬复合钢管', img: taoci, title: '陶瓷内衬复合钢管' },
  { category: '陶瓷内衬复合钢管', img: taociwan, title: '陶瓷耐磨弯管' },
  { category: '陶瓷内衬复合钢管', img: taocinai, title: '陶瓷耐磨直管' },
  { category: '陶瓷内衬复合钢管', img: daibeibao, title: '带背包耐磨陶瓷管件' },
  { category: '陶瓷内衬复合钢管', img: taocifu, title: '陶瓷复合钢管' },

  { category: '陶瓷贴片耐磨管', img: gaonai, title: '碳化硅陶瓷耐磨管道' },
  { category: '龟甲网耐磨陶瓷管', img: guijia1, title: '龟甲网耐磨陶瓷管' },
  { category: '龟甲网耐磨陶瓷管', img: guijia2, title: '龟甲网刚玉喷涂耐磨管' }
]

const filteredProductList = computed(() =>
  allProductList.filter(item => item.category === currentCategory.value)
)

// 视图模式
const viewMode = ref('grid')

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

onMounted(() => {
  // 设置SEO
  setSEO({
    title: '产品服务',
    description:
      '山东岱威创新管业专业提供碳化硅聚合陶瓷管、双金属耐磨管、陶瓷内衬复合钢管等多种管道产品。',
    keywords: '碳化硅陶瓷管,双金属耐磨管,陶瓷内衬管,管道产品,岱威管业'
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  // 处理从其他页面跳转过来的分类参数
  const route = useRoute()
  const categoryParam = route.query.category
  if (categoryParam && categories.includes(categoryParam)) {
    currentCategory.value = categoryParam
  }
})
</script>

<style scoped>
.products-layout {
  min-height: 100vh;
  background: #f7f9fb;
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
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 8px 16px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
  animation: badgeGlow 3s ease-in-out infinite;
}

@keyframes badgeGlow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(22, 119, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(22, 119, 255, 0.5);
  }
}

.badge-icon {
  font-size: 16px;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.products-banner-text h1 {
  margin-bottom: 16px;
}

.title-main {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.title-sub {
  display: block;
  font-size: 1.2rem;
  font-weight: 400;
  color: #94a3b8;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.products-banner-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 24px 0 32px 0;
  color: #cbd5e1;
}

.banner-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 32px;
}

.stat-item {
  text-align: center;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.15);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
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

/* 面包屑 */
.product-breadcrumb {
  background: #fff;
  border-radius: 0 0 14px 14px;
  box-shadow: 0 1px 8px rgba(22, 119, 255, 0.04);
  padding: 24px 32px 12px 32px;
  margin-bottom: 0;
  font-size: 16px;
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
  border-radius: 13px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
  padding: 20px 16px 13px 18px;
  margin-bottom: 0;
}

.side-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 16px;
  letter-spacing: 1px;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(22, 119, 255, 0.1);
}

.side-title svg {
  color: #1677ff;
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
  border-radius: 12px;
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
  color: #9ca3af;
  background: rgba(22, 119, 255, 0.1);
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: 500;
}

.product-category li:hover {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  color: #1677ff;
  transform: translateX(4px);
  border-color: rgba(22, 119, 255, 0.2);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.1);
}

.product-category li.active {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  font-weight: 600;
  border-color: #1677ff;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
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
  border-bottom: 1px solid rgba(22, 119, 255, 0.05);
  transition: all 0.3s ease;
}

.news-item:hover {
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 0 -12px 12px -12px;
}

.news-dot {
  width: 6px;
  height: 6px;
  background: #1677ff;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.news-text {
  color: #4b5563;
  font-size: 13px;
  line-height: 1.6;
  cursor: pointer;
}

.news-text:hover {
  color: #1677ff;
}

/* 关键词 */
.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.keyword-tag {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  color: #1677ff;
  border-radius: 20px;
  font-size: 12px;
  padding: 6px 12px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.keyword-tag:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(22, 119, 255, 0.3);
}

/* 联系卡片 */
.contact-card {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
  border: 1px solid rgba(22, 119, 255, 0.1) !important;
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
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.4);
}

/* 右侧产品展示区 */
.product-gallery-panel {
  flex: 1 1 0;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 14px rgba(22, 119, 255, 0.06);
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
  border-bottom: 2px solid rgba(22, 119, 255, 0.1);
}

.header-content {
  flex: 1;
}

.product-title-modern {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
}

.title-icon {
  font-size: 1.5rem;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  padding: 8px;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-subtitle {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0;
}

.view-controls {
  display: flex;
  gap: 8px;
  background: #f8fafc;
  padding: 4px;
  border-radius: 12px;
  border: 1px solid rgba(22, 119, 255, 0.1);
}

.view-btn {
  padding: 8px 12px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  color: #64748b;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-btn:hover {
  background: rgba(22, 119, 255, 0.1);
  color: #1677ff;
}

.view-btn.active {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
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
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(22, 119, 255, 0.1);
  animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-item:hover {
  box-shadow: 0 12px 40px rgba(22, 119, 255, 0.15);
  transform: translateY(-8px);
  border-color: rgba(22, 119, 255, 0.3);
}

.img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 1.2 / 1;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
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
  background: rgba(22, 119, 255, 0.9);
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
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 1.4;
  word-break: break-all;
}

.item-category {
  font-size: 12px;
  color: #64748b;
  background: rgba(22, 119, 255, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
  margin-bottom: 16px;
  font-weight: 500;
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
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.4);
}

.action-btn.secondary {
  background: rgba(22, 119, 255, 0.1);
  color: #1677ff;
  border: 1px solid rgba(22, 119, 255, 0.2);
}

.action-btn.secondary:hover {
  background: rgba(22, 119, 255, 0.2);
  transform: translateY(-2px);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
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

@media (max-width: 900px) {
  .products-banner {
    height: 300px;
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
    height: 250px;
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

  .product-breadcrumb {
    padding: 12px 16px;
    font-size: 14px;
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
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .product-gallery-grid.list .gallery-item {
    flex-direction: column;
  }

  .product-gallery-grid.list .img-wrap {
    width: 100%;
  }

  .product-gallery-grid.list .item-content {
    padding-left: 0;
    padding-top: 16px;
  }

  .item-actions {
    flex-direction: column;
    gap: 8px;
  }

  .action-btn {
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>
