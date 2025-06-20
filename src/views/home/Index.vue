<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- Banner大图+动画 -->
      <section class="banner">
        <div class="banner-bg-anim"></div>
        <div class="banner-particles"></div>
        <div class="banner-text animate-on-scroll">
          <div class="banner-badge">
            <span class="badge-icon">🚀</span>
            <span>行业领先的管道解决方案</span>
          </div>
          <h1 class="main-title">
            <span class="title-highlight">智慧管道</span>
            <br />设计与解决方案
          </h1>
          <p class="main-desc">
            提供先进的工业管道设计、施工与运维一站式服务，助力企业高效安全生产
          </p>
          <div class="banner-actions">
            <a-button
              type="primary"
              size="large"
              class="cta-button primary"
              @click="navigateTo('/products')"
            >
              <span>探索产品</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a-button>
            <a-button size="large" class="cta-button secondary" @click="navigateTo('/contact')">
              联系我们
            </a-button>
          </div>
        </div>
        <div class="banner-scroll-indicator">
          <div class="scroll-arrow"></div>
        </div>
      </section>

      <!-- 公司简介 横向铺满 -->
      <section class="about-row animated fadeInUp">
        <div class="about-content">
          <h2>公司介绍 <span class="about-en">COMPANY INTRODUCTION</span></h2>
          <h3 class="about-title">山东岱威创新管业有限公司</h3>
          <p>
            山东岱威创新管业有限公司，是国内领先的工业管道系统整体解决方案提供商。我们致力于工业管道设计、智能制造、安装施工以及智能运维服务，拥有自主研发的智能管道设计软件和一支经验丰富的工程技术团队。
            公司集研发、生产、经营为一体，是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商。公司产品广泛应用于电力、矿山、化工、冶金、环保、食品等行业，助力客户实现高效、安全、智能生产。
            拥有多项自主知识产权，获得“高新技术企业”等多项荣誉，与多家知名企业建立了长期合作关系。
          </p>
          <div class="about-stats-row">
            <div
              v-for="(stat, index) in animatedStats"
              :key="index"
              class="stat-item animate-on-scroll"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <div class="stat-num">{{ stat.value }}{{ stat.suffix }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
        <div class="about-img-wrap">
          <img class="about-img big" :src="factoryImg" alt="公司办公环境" />
          <div class="about-img-mask"></div>
        </div>
      </section>

      <!-- 产品优势 横向铺满 -->
      <section class="products-row">
        <h2 class="section-title">产品优势</h2>
        <div class="products-features-row">
          <div class="feature-col" v-for="item in products" :key="item.title">
            <img :src="item.img" class="feature-img" />
            <div class="feature-info">
              <div class="feature-title">{{ item.title }}</div>
              <div class="feature-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 产品轮播 居中大图（swiper实现） -->
      <section class="animate-on-scroll">
        <ProductFocusCarousel />
      </section>

      <!-- 特色服务 -->
      <section class="services-section animate-on-scroll">
        <div class="container">
          <div class="section-header">
            <h2>我们的服务优势</h2>
            <p>专业团队，专业服务，为您提供全方位的管道解决方案</p>
          </div>
          <div class="services-grid">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="service-card animate-on-scroll"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="service-icon">
                <div class="icon-wrapper" v-html="service.icon"></div>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <div class="service-features">
                <span v-for="feature in service.features" :key="feature" class="feature-tag">
                  {{ feature }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 工程案例 横向分栏 -->
      <section class="cases-row">
        <h2 class="section-title">工程案例</h2>
        <div class="cases-features-row">
          <div class="case-col" v-for="c in cases" :key="c.title">
            <img :src="c.img" class="case-img-row" />
            <div class="case-info-row">
              <div class="case-title-row">{{ c.title }}</div>
              <div class="case-desc-row">{{ c.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 客户&合作伙伴 -->
      <section class="partners-row">
        <h2 class="section-title">合作伙伴</h2>
        <div class="partners-list">
          <img v-for="(logo, i) in partners" :key="i" :src="logo" class="partner-logo" />
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import ProductFocusCarousel from '@/components/ProductFocusCarousel.vue'
import { useSEO } from '@/composables/useSEO'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// 图片导入
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import dianzi from '@/assets/images/dianzi.jpg'
import factoryImg from '@/assets/images/factory.jpg'
import adv1 from '@/assets/images/factory1.jpg'
import adv2 from '@/assets/images/factory2.jpg'
import adv3 from '@/assets/images/factory3.jpg'
import adv4 from '@/assets/images/factory4.jpg'

// 路由和SEO
const router = useRouter()
const { setSEO } = useSEO()

// 动画控制
const isVisible = ref(false)

const products = [
  {
    title: '技术创新',
    desc: '拥有多项国家专利技术，持续创新研发，推动行业进步。',
    img: adv1
  },
  {
    title: '品质保证',
    desc: '严格的质量管理体系，确保每一件产品高品质交付。',
    img: adv2
  },
  {
    title: '专业团队',
    desc: '资深技术专家，经验丰富的工程团队，服务更专业。',
    img: adv3
  },
  {
    title: '服务支持',
    desc: '完善的售后服务及技术支持体系，解决客户后顾之忧。',
    img: adv4
  }
]
const productCarousel = [
  {
    title: '智能管道设计平台',
    desc: '自主研发的智能设计平台，支持三维建模与仿真，提升设计效率和精度。',
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '高精度管道制造',
    desc: '采用先进设备，严格检测流程，确保每一根管道精准可靠。',
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '智能运维系统',
    desc: '实现管道远程监控与智能预警，保障生产安全无忧。',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  }
]
const cases = [
  {
    title: '水泥厂耐磨管道',
    desc: '为知名水泥厂提供耐磨管道，保障生产安全。',
    img: anli2
  },
  {
    title: '化工厂耐磨管道',
    desc: '为省内化工厂提供双金属耐磨管，承受高温高压环境。',
    img: anli3
  },
  {
    title: '钢铁厂管道',
    desc: '为钢铁厂提供耐磨管道，延长设备使用寿命。',
    img: anli4
  },
  {
    title: '电子脱销管道',
    desc: '为电子脱销企业提供耐磨管道，延长设备使用寿命。',
    img: dianzi
  }
]
const partners = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png'
]
// 数字动画
const animatedStats = ref([
  { value: 0, target: 15, suffix: '+', label: '年行业经验' },
  { value: 0, target: 200, suffix: '+', label: '专利技术' },
  { value: 0, target: 1000, suffix: '+', label: '合作客户' }
])

// 服务数据
const services = ref([
  // {
  //   title: '专业设计',
  //   description: '拥有专业的设计团队，提供个性化的管道系统设计方案',
  //   icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 8h32v32H8V8z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M16 16h16v16H16V16z" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="24" cy="24" r="4" fill="#1677ff"/></svg>',
  //   features: ['3D建模', 'CAD设计', '仿真分析']
  // },
  {
    title: '精密制造',
    description: '采用先进的生产工艺和设备，确保产品质量和精度',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M12 12h24v24H12V12z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M18 18h12v12H18V18z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#1677ff" stroke-width="2"/></svg>',
    features: ['精密加工', '质量检测', 'ISO认证']
  },
  {
    title: '快速交付',
    description: '完善的供应链管理，确保项目按时交付',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 16h32l-4 20H12L8 16z" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="16" cy="40" r="4" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="32" cy="40" r="4" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M8 16L6 8H2" stroke="#1677ff" stroke-width="2"/></svg>',
    features: ['库存充足', '物流配送', '及时响应']
  },
  {
    title: '售后服务',
    description: '提供全方位的售后服务和技术支持',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 4L8 12v16c0 10 16 16 16 16s16-6 16-16V12L24 4z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M18 24l6 6 12-12" stroke="#1677ff" stroke-width="2"/></svg>',
    features: ['技术支持', '维护保养', '培训服务']
  }
])

// 数字动画函数
const animateNumber = (stat: any, duration = 2000) => {
  const start = Date.now()
  const startValue = stat.value
  const endValue = stat.target

  const animate = () => {
    const now = Date.now()
    const progress = Math.min((now - start) / duration, 1)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)

    stat.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

// 导航到其他页面
const navigateTo = (path: string) => {
  router.push(path)
}

onMounted(async () => {
  // 设置SEO
  setSEO({
    title: '首页',
    description:
      '山东岱威创新管业专注于提供高品质的管道系统解决方案，包括管件、阀门、智能管网系统等产品。',
    keywords: '管道系统,管件,阀门,智能管网,岱威管业'
  })

  // 将页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  isVisible.value = true

  // 延迟启动数字动画
  setTimeout(() => {
    animatedStats.value.forEach((stat, index) => {
      setTimeout(() => animateNumber(stat), index * 200)
    })
  }, 1000)

  // 添加滚动动画监听
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  // 观察所有需要动画的元素
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
@import 'swiper/swiper-bundle.css';

/* 动画样式 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.stat-item {
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.home-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  background: #f7f9fb;
  padding: 0;
}

.banner {
  position: relative;
  height: 620px;
  background: #131a22;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-bg-anim {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* background: linear-gradient(120deg, #1677ff 0%, #43c6ac 100%);
  opacity: 0.18;
  z-index: 0;
  animation: bannerBgMove 8s linear infinite alternate; */
  /* background-image: url('@/assets/images/productBg.jpg'); */
  background-image: url(https://www.victaulic.com/wp-content/uploads/2024/09/009V-Homepage.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  border-top-width: 1px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
}

@keyframes bannerBgMove {
  0% {
    filter: blur(0px) brightness(1);
  }

  100% {
    filter: blur(2px) brightness(1.09);
  }
}

/* Banner 粒子效果 */
.banner-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 80%, rgba(22, 119, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(67, 198, 172, 0.1) 0%, transparent 50%);
  z-index: 1;
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

.banner-text {
  position: relative;
  z-index: 3;
  margin-left: 60px;
  width: 100%;
  max-width: 570px;
  color: #fff;
}

/* Banner 徽章 */
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

.main-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 2px;
  line-height: 1.1;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);
}

.title-highlight {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  margin-bottom: 100px;
}

.title-highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 2px;
  animation: underlineGrow 2s ease-out 0.5s both;
}

@keyframes underlineGrow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.main-desc {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 32px;
  color: #eaf6ff;
  text-shadow: 0 2px 9px rgba(22, 119, 255, 0.09);
}

/* Banner 按钮样式 */
.banner-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 32px;
}

.cta-button {
  border-radius: 50px !important;
  height: 50px !important;
  padding: 0 32px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border: none !important;
  position: relative !important;
  overflow: hidden !important;
}

.cta-button.primary {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
  box-shadow: 0 4px 20px rgba(22, 119, 255, 0.4) !important;
}

.cta-button.primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 30px rgba(22, 119, 255, 0.6) !important;
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-2px) !important;
}

/* 滚动指示器 */
.banner-scroll-indicator {
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

/* 服务部分样式 */
.services-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
}

.services-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23e2e8f0" fill-opacity="0.3"><circle cx="30" cy="30" r="1"/></g></svg>')
    repeat;
  opacity: 0.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  position: relative;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  border-radius: 2px;
}

.section-header p {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(22, 119, 255, 0.15);
}

.service-icon {
  margin-bottom: 24px;
}

.icon-wrapper {
  display: inline-block;
  padding: 20px;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1);
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.2) 0%, rgba(67, 198, 172, 0.2) 100%);
}

.service-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.service-card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.feature-tag {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* 公司简介 */
.about-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin: 0 auto 32px auto;
  max-width: 100vw;
  min-width: 0;
  padding: 30px 0 20px 0;
}

.about-content {
  flex: 2.1;
  min-width: 320px;
  padding: 0 42px 0 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-en {
  color: #1677ff;
  font-size: 13px;
  letter-spacing: 2px;
  margin-left: 14px;
  vertical-align: middle;
}

.about-title {
  font-size: 1.24rem;
  font-weight: 700;
  margin: 22px 0 10px 0;
  color: #222;
  letter-spacing: 1px;
}

.about-content > p {
  color: #444;
  font-size: 15.5px;
  margin-bottom: 18px;
  line-height: 1.8;
}

.about-stats-row {
  display: flex;
  gap: 34px;
  margin-top: 14px;
}

.about-stats-row > div {
  text-align: center;
}

.stat-num {
  font-size: 2rem;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 6px;
  white-space: nowrap;
}

.stat-label {
  color: #888;
  font-size: 14px;
}

.about-img-wrap {
  flex: 1.3;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 48px 0 0;
  position: relative;
}

.about-img {
  width: 430px;
  max-width: 96vw;
  border-radius: 17px;
  box-shadow: 0 6px 32px rgba(64, 158, 255, 0.11);
  z-index: 2;
  position: relative;
  transition: transform 0.4s cubic-bezier(0.4, 2, 0.7, 0.4);
}

.about-img.big {
  width: 480px;
  max-width: 99vw;
}

.about-img-mask {
  position: absolute;
  left: 14px;
  top: 18px;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #1677ff33 0%, #43c6ac22 100%);
  border-radius: 17px;
  z-index: 1;
  filter: blur(22px);
  pointer-events: none;
  opacity: 0.28;
}

/* 产品优势 */
.products-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fafdff;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 18px;
  text-align: left;
  margin-left: 6vw;
  letter-spacing: 2px;
}

.products-features-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 0 auto;
  gap: 0;
}

.feature-col {
  display: flex;
  align-items: center;
  flex: 1 1 210px;
  min-width: 210px;
  max-width: 340px;
  padding: 30px 16px 30px 46px;
  background: none;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
}

.feature-col:first-child {
  border-left: none;
}

.feature-col:last-child {
  border-right: none;
}

.feature-img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  background: #e6f0ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.feature-info {
  flex: 1;
}

.feature-title {
  font-size: 17px;
  font-weight: 600;
  color: #1677ff;
  margin-bottom: 7px;
}

.feature-desc {
  color: #444;
  font-size: 15px;
  min-height: 30px;
  line-height: 1.6;
}

/* 案例横向 */
.cases-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fafdff;
}

.cases-features-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 0 auto;
  gap: 0;
}

.case-col {
  display: flex;
  align-items: center;
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 400px;
  padding: 30px 18px 30px 46px;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  background: none;
}

.case-col:first-child {
  border-left: none;
}

.case-col:last-child {
  border-right: none;
}

.case-img-row {
  width: 74px;
  height: 74px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 24px;
  background: #e6f0ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.case-info-row {
  flex: 1;
}

.case-title-row {
  font-size: 16px;
  font-weight: 600;
  color: #1677ff;
  margin-bottom: 7px;
}

.case-desc-row {
  color: #444;
  font-size: 15px;
  min-height: 30px;
  line-height: 1.6;
}

/* 合作伙伴 */
.partners-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fff;
}

.partners-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding-bottom: 10px;
}

.partner-logo {
  width: 110px;
  max-width: 32vw;
  object-fit: contain;
  background: #fafbff;
  border-radius: 8px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.04);
  padding: 6px 10px;
  transition: transform 0.15s;
  filter: grayscale(0.13);
}

.partner-logo:hover {
  transform: scale(1.09);
  filter: grayscale(0);
}

/* 响应式优化 */
@media (max-width: 1200px) {
  .about-content {
    padding: 0 20px 0 20px;
  }

  .about-img-wrap {
    padding: 0 8px 0 0;
  }

  .section-title {
    margin-left: 20px;
  }

  .products-features-row,
  .cases-features-row {
    max-width: 98vw;
  }

  .carousel-center-inner {
    width: 99vw;
  }

  .carousel-img-center {
    max-width: 98vw;
  }
}

@media (max-width: 900px) {
  .about-row {
    flex-direction: column;
    padding: 10px 0 10px 0;
  }

  .about-content {
    padding: 0 10px;
  }

  .about-img-wrap {
    justify-content: center;
    padding: 0;
  }

  .about-img,
  .about-img.big {
    width: 98vw;
    max-width: 98vw;
  }

  .philo-content {
    flex-direction: column;
    gap: 16px;
  }

  .products-features-row,
  .cases-features-row {
    flex-direction: column;
  }

  .feature-col,
  .case-col {
    border: none;
    padding: 18px 4vw;
  }

  .carousel-row,
  .products-row,
  .cases-row {
    padding: 0;
  }

  .carousel-center-inner {
    border-radius: 8px;
  }

  .carousel-slide-center {
    min-height: 120px;
  }

  .carousel-img-center {
    max-width: 99vw;
    min-height: 120px;
  }

  .partners-list {
    gap: 14px;
  }

  .partner-logo {
    width: 84px;
  }
}

@media (max-width: 600px) {
  .banner-text {
    margin-left: 11px;
    text-align: center;
  }

  .banner {
    height: 120px;
  }

  .main-title {
    font-size: 1.3rem;
    color: #ffffff !important;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
  }

  .title-highlight {
    color: #ffffff !important;
    background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
  }

  .main-desc {
    font-size: 13px;
    color: #f1f5f9 !important;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3) !important;
  }

  .banner-badge {
    background: rgba(255, 255, 255, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    color: #ffffff !important;
  }

  .about-content > p,
  .feature-desc,
  .case-desc-row,
  .carousel-caption-center p {
    font-size: 13px;
    color: #374151 !important;
  }

  .stat-num {
    font-size: 1.3rem;
    color: #1677ff !important;
  }

  .stat-label {
    color: #6b7280 !important;
  }

  .section-title {
    font-size: 1.1rem;
    margin-bottom: 18px;
    color: #1f2937 !important;
  }

  .products-features-row,
  .cases-features-row {
    gap: 0;
  }

  .feature-col,
  .case-col {
    padding: 10px 2vw;
  }

  .feature-img,
  .case-img-row {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }

  .contact-bar-row {
    font-size: 14px;
    gap: 10px;
  }

  .carousel-img-center {
    border-radius: 6px;
  }

  /* 新增的移动端动画样式 */
  .banner-actions {
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  .cta-button {
    width: 100% !important;
    justify-content: center !important;
    height: 40px !important;
    font-size: 13px !important;
  }

  .banner-badge {
    font-size: 11px;
    padding: 4px 10px;
  }

  .title-highlight::after {
    height: 2px;
  }

  .about-stats-row {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  .stat-item {
    text-align: center;
    padding: 16px 12px;
    background: rgba(22, 119, 255, 0.1) !important;
    border-radius: 12px;
    border: 1px solid rgba(22, 119, 255, 0.2) !important;
    box-shadow: 0 2px 8px rgba(22, 119, 255, 0.1);
  }

  .stat-item .stat-num {
    color: #1677ff !important;
    font-weight: 700;
  }

  .stat-item .stat-label {
    color: #4b5563 !important;
    font-weight: 500;
  }

  .banner-scroll-indicator {
    display: none;
  }
}
</style>
