移动端的
<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- Hero Banner - 简洁优化版 -->
      <section class="hero-banner">
        <div class="hero-bg">
          <img :src="bannerImage" alt="岱威管业" class="hero-bg-img" />
          <div class="hero-overlay"></div>
        </div>
        <!-- 简洁的动画装饰 -->
        <div class="hero-decorations">
          <div class="floating-circle circle-1"></div>
          <div class="floating-circle circle-2"></div>
          <div class="floating-circle circle-3"></div>
        </div>
        <div class="hero-content">
          <div class="hero-badge mobile-hidden">
            <span class="badge-icon">🏭</span>
            <span>专业管道解决方案</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">岱威创新管业</span>
            <span class="title-sub mobile-hidden">耐磨 · 耐腐蚀 · 耐冲击 · 耐热</span>
          </h1>
          <p class="hero-desc mobile-hidden">15年专业经验，为工业领域提供高品质管道产品与服务</p>
          <div class="hero-actions">
            <a-button
              type="primary"
              size="large"
              class="cta-btn primary"
              @click="navigateTo('/products')"
            >
              <span>查看产品</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a-button>
            <a-button
              size="large"
              class="cta-btn secondary mobile-hidden"
              @click="navigateTo('/contact')"
            >
              联系咨询
            </a-button>
          </div>
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

      <!-- 问题解决方案引导 -->
      <section class="problems-section">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <div class="section-badge">
              <span class="badge-icon">❓</span>
              <span>常见问题</span>
            </div>
            <h2>选择防腐耐磨管道时，您是否遇到以下问题？</h2>
            <p>总感觉有些问题没有解决，心里没底？</p>
          </div>
          <div class="problems-grid">
            <div class="problem-item" data-aos="fade-up" data-aos-delay="100">
              <div class="problem-icon">🔍</div>
              <h3>选型难</h3>
              <p>管道种类多，难选择</p>
            </div>
            <div class="problem-item" data-aos="fade-up" data-aos-delay="200">
              <div class="problem-icon">📏</div>
              <h3>更换难</h3>
              <p>尺寸难准确把握</p>
            </div>
            <div class="problem-item" data-aos="fade-up" data-aos-delay="300">
              <div class="problem-icon">⚠️</div>
              <h3>问题多</h3>
              <p>选型不准安全生产难</p>
            </div>
            <div class="problem-item" data-aos="fade-up" data-aos-delay="400">
              <div class="problem-icon">🚚</div>
              <h3>难交付</h3>
              <p>异型备件难交付</p>
            </div>
            <div class="problem-item" data-aos="fade-up" data-aos-delay="500">
              <div class="problem-icon">🛠️</div>
              <h3>服务差</h3>
              <p>现场问题难处理</p>
            </div>
          </div>
          <div class="solution-cta" data-aos="fade-up" data-aos-delay="600">
            <h3>别担心，我们为您解忧</h3>
            <p>选择我们，可现场实际勘测设计，更快安装简便易行</p>
            <a-button type="primary" size="large" @click="navigateTo('/contact')">
              立即咨询解决方案
            </a-button>
          </div>
        </div>
      </section>

      <!-- 核心产品展示 -->
      <section class="products-showcase">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <div class="section-badge">
              <span class="badge-icon">🔧</span>
              <span>核心产品</span>
            </div>
            <h2>我们的产品中心</h2>
            <p>品质源于专业，不断追求创新，以质量的标尺用心制造</p>
          </div>
          <div class="products-grid">
            <div
              v-for="(product, index) in featuredProducts"
              :key="product.id"
              class="product-card"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
              @click="navigateToProduct(product)"
            >
              <div class="product-image">
                <img :src="product.img" :alt="product.title" />
                <div class="product-overlay">
                  <div class="overlay-content">
                    <span class="view-icon">👁️</span>
                    <span>查看详情</span>
                  </div>
                </div>
              </div>
              <div class="product-info">
                <div class="product-category">{{ product.category }}</div>
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-desc">{{ product.description }}</p>
                <div class="product-features">
                  <span v-for="tag in product.tags?.slice(0, 2)" :key="tag" class="feature-tag">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="products-cta" data-aos="fade-up" data-aos-delay="600">
            <a-button type="primary" size="large" @click="navigateTo('/products')">
              查看全部产品
            </a-button>
          </div>
        </div>
      </section>

      <!-- 公司优势 -->
      <section class="advantages-section">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <div class="section-badge">
              <span class="badge-icon">⭐</span>
              <span>核心优势</span>
            </div>
            <h2>为什么选择岱威管业</h2>
            <p>15年专业经验，专注耐磨管道技术创新与产品质量提升</p>
          </div>
          <div class="advantages-grid">
            <div
              v-for="(advantage, index) in companyAdvantages"
              :key="advantage.title"
              class="advantage-card"
              data-aos="fade-up"
              :data-aos-delay="index * 150"
            >
              <div class="advantage-icon">{{ advantage.icon }}</div>
              <div class="advantage-content">
                <h3 class="advantage-title">{{ advantage.title }}</h3>
                <p class="advantage-desc">{{ advantage.desc }}</p>
              </div>
              <div class="advantage-bg">
                <img :src="advantage.img" :alt="advantage.title" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 特色服务 -->
      <section class="services-section animate-on-scroll">
        <div class="container">
          <div class="section-header">
            <h2>我们的服务优势</h2>
            <p>专业团队，专业服务，为您提供全方位的管道解决方案</p>
          </div>
          <div class="services-grid-3">
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

      <!-- 工程案例 -->
      <section class="cases-section">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <div class="section-badge">
              <span class="badge-icon">🏗️</span>
              <span>成功案例</span>
            </div>
            <h2>工程案例展示</h2>
            <p>服务众多知名企业，积累丰富的项目实施经验</p>
          </div>
          <div class="cases-grid-3">
            <div
              v-for="(caseItem, index) in cases"
              :key="caseItem.title"
              class="case-card"
              data-aos="zoom-in"
              :data-aos-delay="index * 100"
              @click="navigateToCase(caseItem)"
            >
              <div class="case-image">
                <img :src="caseItem.img" :alt="caseItem.title" />
                <div class="case-overlay">
                  <div class="overlay-content">
                    <span class="view-icon">🔍</span>
                    <span>查看详情</span>
                  </div>
                </div>
              </div>
              <div class="case-info">
                <h3 class="case-title">{{ caseItem.title }}</h3>
                <p class="case-desc">{{ caseItem.desc }}</p>
                <div class="case-meta">
                  <span class="case-type">{{ caseItem.type || '工程案例' }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cases-cta" data-aos="fade-up" data-aos-delay="600">
            <a-button type="primary" size="large" @click="navigateTo('/cases')">
              查看更多案例
            </a-button>
          </div>
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// 图片导入
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import factoryImg from '@/assets/images/factory.jpg'
import factory1 from '@/assets/images/factory1.jpg'
import factory2 from '@/assets/images/factory2.jpg'
import factory3 from '@/assets/images/factory3.jpg'
import guijia1 from '@/assets/images/guijia1.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import taoci from '@/assets/images/taoci.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import gaonai from '@/assets/images/gaonai.png'
import zuran1 from '@/assets/images/zuran1.jpg'

// 路由和SEO
const router = useRouter()
const { setSEO } = useSEO()

// Hero Banner 数据
const bannerImage = factoryImg

// Hero 统计数据
const heroStats = [
  { number: '15+', label: '年行业经验' },
  { number: '6大', label: '主要产品系列' },
  { number: '500+', label: '服务客户' },
  { number: '24h', label: '响应服务' }
]

// 动画控制
const isVisible = ref(false)

// 移动端检测
const isMobile = ref(false)

// 检测屏幕尺寸
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// 监听窗口大小变化
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// 清理事件监听
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 精选产品数据 - 基于参考网站真实产品（6个产品，2行3列）
const featuredProducts = [
  {
    id: 1,
    title: '碳化硅聚合陶瓷管',
    category: '碳化硅聚合陶瓷管',
    description:
      '采用碳化硅聚合陶瓷材料，具有优异的耐磨、耐腐蚀、耐高温性能，广泛应用于电力、化工等行业的粉料输送。',
    img: tanhuahe,
    tags: ['碳化硅', '聚合陶瓷', '耐高温']
  },
  {
    id: 2,
    title: '双金属耐磨管及异形件',
    category: '双金属耐磨管',
    description:
      '内层采用高铬合金，外层为碳钢，通过离心铸造工艺制成，具有优异的耐磨性能和机械强度。',
    img: shuangjin,
    tags: ['双金属', '离心铸造', '高铬合金']
  },
  {
    id: 3,
    title: '陶瓷内衬复合钢管',
    category: '陶瓷内衬复合钢管',
    description: '内衬刚玉陶瓷，外层碳钢结构，结合了陶瓷的耐磨性和钢管的强度，适用于高磨损工况。',
    img: taoci,
    tags: ['刚玉陶瓷', '复合结构', '高强度']
  },
  {
    id: 4,
    title: '高耐磨陶瓷贴片',
    category: '陶瓷贴片耐磨管',
    description: '采用高强度陶瓷贴片与钢管焊接，具有良好的耐磨性和抗冲击性能，安装维护方便。',
    img: gaonai,
    tags: ['陶瓷贴片', '焊接工艺', '抗冲击']
  },
  {
    id: 5,
    title: '龟甲网耐磨陶瓷管',
    category: '龟甲网耐磨陶瓷管',
    description: '采用龟甲网结构增强陶瓷层与钢管的结合强度，具有优异的抗冲击和耐磨性能。',
    img: guijia1,
    tags: ['龟甲网', '刚玉喷涂', '抗冲击']
  },
  {
    id: 6,
    title: '阻燃型碳化硅衬瓷材料',
    category: '反应阻燃型-碳化硅聚合陶瓷涂抹',
    description: '具有优异的阻燃性能和耐高温特性，适用于脱硫脱硝等特殊工况环境的防护涂层。',
    img: zuran1,
    tags: ['阻燃型', '脱硫脱硝', '防护涂层']
  }
]

// 公司优势数据（3个核心优势）
const companyAdvantages = [
  {
    title: '实力品牌，一站式综合服务商',
    desc: '集研发、生产、经营为一体，是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商。拥有由教授、专家、工程师和熟练技术工人组成的专业团队。',
    img: factory1,
    icon: '🏭'
  },
  {
    title: '按需定制，提供行业整体解决方案',
    desc: '专业为电力、矿山、钢铁、石化、水泥、洗选煤等行业提供适应不同介质环境的一体化解决方案和多种类型管道和管件。',
    img: factory2,
    icon: '⚙️'
  },
  {
    title: '用心服务，全程跟踪',
    desc: '2小时内响应维护服务，12-24小时内安排专业人员现场指导。设立专门的销售服务机构，根据现场使用介质状况准确选择匹配产品。',
    img: factory3,
    icon: '🛠️'
  }
]
const cases = [
  {
    title: '电力行业脱硫脱硝系统',
    desc: '为大型火电厂提供碳化硅聚合陶瓷管道和脱硫脱硝设备用碳化硅喷嘴，有效解决了高温腐蚀性介质输送问题，设备运行稳定，维护成本大幅降低。',
    img: anli2,
    type: '电力行业',
    location: '山东济南'
  },
  {
    title: '矿山选煤厂输送系统',
    desc: '为大型选煤厂提供双金属耐磨管道和真空皮带脱水机配件，解决了煤泥输送中的严重磨损问题，设备使用寿命延长5倍以上。',
    img: anli3,
    type: '矿山行业',
    location: '山西太原'
  },
  {
    title: '钢铁厂高炉输送管道',
    desc: '为钢铁企业提供陶瓷内衬复合钢管和龟甲网刚玉喷涂耐磨管件，有效抵抗高温粉尘和矿渣冲击，确保生产连续性。',
    img: anli4,
    type: '钢铁行业',
    location: '河北唐山'
  }
]
// 数字动画
const animatedStats = ref([
  { value: 0, target: 15, suffix: '+', label: '年行业经验' },
  { value: 0, target: 200, suffix: '+', label: '专利技术' },
  { value: 0, target: 1000, suffix: '+', label: '合作客户' }
])

// 服务数据 - 基于参考网站的服务特色（3个核心服务）
const services = ref([
  {
    title: '安装便捷',
    description: '根据现场设计尺寸，安装方便快捷，现场实际勘测设计',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M12 12h24v24H12V12z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M18 18h12v12H18V18z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M24 6v6M24 36v6M6 24h6M36 24h6" stroke="#1677ff" stroke-width="2"/></svg>',
    features: ['现场勘测', '定制设计', '快速安装']
  },
  {
    title: '品种齐全',
    description: '是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 16h32l-4 20H12L8 16z" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="16" cy="40" r="4" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="32" cy="40" r="4" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M8 16L6 8H2" stroke="#1677ff" stroke-width="2"/></svg>',
    features: ['产品齐全', '异形定制', '一站服务']
  },
  {
    title: '厂家直销',
    description: '自厂一体化设计、生产、销售，现场根据工程量身打造',
    icon: '<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M8 8h32v32H8V8z" stroke="#1677ff" stroke-width="2" fill="none"/><path d="M16 16h16v16H16V16z" stroke="#1677ff" stroke-width="2" fill="none"/><circle cx="24" cy="24" r="4" fill="#1677ff"/></svg>',
    features: ['厂家直销', '成本优化', '量身定制']
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

// 导航到产品详情页
const navigateToProduct = (product: any) => {
  router.push({
    path: `/products/${encodeURIComponent(product.title)}`,
    query: {
      category: product.category,
      image: product.img
    }
  })
}

// 导航到案例详情页
const navigateToCase = (caseItem: any) => {
  router.push({
    path: `/cases/${encodeURIComponent(caseItem.title)}`,
    query: {
      image: caseItem.img
    }
  })
}

onMounted(async () => {
  // 设置SEO
  setSEO({
    title: '山东岱威创新管业有限公司-耐磨耐腐蚀管道专业制造商',
    description:
      '山东岱威创新管业有限公司专业生产碳化硅聚合陶瓷管、双金属耐磨管、陶瓷内衬复合钢管、陶瓷贴片耐磨管、龟甲网耐磨陶瓷管等产品，为电力、矿山、钢铁、石化、水泥、洗选煤等行业提供耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件一体化解决方案。',
    keywords:
      '碳化硅聚合陶瓷管,双金属耐磨管,陶瓷内衬复合钢管,陶瓷贴片耐磨管,龟甲网耐磨陶瓷管,耐磨管道,耐腐蚀管道,岱威管业,山东岱威'
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

/* Hero Banner 样式 - 优化版 */
.hero-banner {
  position: relative;
  height: 60vh;
  min-height: 480px;
  max-height: 580px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}

/* 移动端Hero Banner优化 */
@media (max-width: 768px) {
  .hero-banner {
    height: 55vh;
    min-height: 420px;
    max-height: 500px;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    height: 50vh;
    min-height: 320px;
    max-height: 400px;
  }
}

@media (max-width: 360px) {
  .hero-banner {
    height: 45vh;
    min-height: 280px;
    max-height: 350px;
  }
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.hero-banner:hover .hero-bg-img {
  transform: scale(1.08);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.75) 0%, rgba(67, 198, 172, 0.65) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 0 20px;
}

/* 移动端内容隐藏和Hero优化 */
@media (max-width: 768px) {
  /* 隐藏移动端不重要的内容 */
  .mobile-hidden {
    display: none !important;
  }

  .hero-content {
    max-width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .hero-title {
    margin-bottom: 20px;
  }

  .title-main {
    font-size: 1.8rem !important;
    line-height: 1.3;
    margin-bottom: 0;
  }

  .hero-actions {
    margin-top: 20px;
  }

  .cta-btn {
    width: 200px;
    height: 44px !important;
    font-size: 14px !important;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 0 10px;
  }

  .title-main {
    font-size: 1.5rem !important;
  }

  .cta-btn {
    width: 180px;
    height: 40px !important;
    font-size: 13px !important;
  }
}

@media (max-width: 360px) {
  .title-main {
    font-size: 1.3rem !important;
  }

  .cta-btn {
    width: 160px;
    height: 36px !important;
    font-size: 12px !important;
  }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  padding: 10px 20px;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.hero-badge:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* 移动端Hero Badge优化 */
@media (max-width: 768px) {
  .hero-badge {
    font-size: 12px;
    padding: 8px 16px;
    margin-bottom: 20px;
    gap: 6px;
  }
}

@media (max-width: 480px) {
  .hero-badge {
    font-size: 11px;
    padding: 6px 12px;
    margin-bottom: 15px;
    gap: 4px;
  }
}

.hero-title {
  margin-bottom: 24px;
}

/* 移动端Hero标题容器优化 */
@media (max-width: 768px) {
  .hero-title {
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    margin-bottom: 16px;
  }
}

@media (max-width: 360px) {
  .hero-title {
    margin-bottom: 12px;
  }
}

.title-main {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.title-sub {
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  color: #cbd5e1;
  letter-spacing: 2px;
}

/* 移动端标题优化 */
@media (max-width: 768px) {
  .title-main {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  .title-sub {
    font-size: 1rem;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 480px) {
  .title-main {
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  .title-sub {
    font-size: 0.85rem;
    letter-spacing: 0.3px;
  }
}

@media (max-width: 360px) {
  .title-main {
    font-size: 1.4rem;
    margin-bottom: 6px;
  }

  .title-sub {
    font-size: 0.8rem;
    letter-spacing: 0.2px;
  }
}

.hero-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 50px;
  color: #e2e8f0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

/* 移动端描述和统计优化 */
@media (max-width: 768px) {
  .hero-desc {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 100%;
  }

  .hero-stats {
    gap: 30px;
    margin-bottom: 40px;
  }
}

@media (max-width: 480px) {
  .hero-desc {
    font-size: 0.8rem;
    line-height: 1.5;
    margin-bottom: 25px;
  }

  .hero-stats {
    gap: 20px;
    margin-bottom: 30px;
  }
}

@media (max-width: 360px) {
  .hero-desc {
    font-size: 0.75rem;
    line-height: 1.4;
    margin-bottom: 20px;
  }

  .hero-stats {
    gap: 15px;
    margin-bottom: 25px;
  }
}

.hero-stats .stat-item {
  text-align: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  min-width: 120px;
}

.hero-stats .stat-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.hero-stats .stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 8px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-stats .stat-label {
  font-size: 0.9rem;
  color: #cbd5e1;
  font-weight: 500;
}

/* 移动端统计项优化 */
@media (max-width: 768px) {
  .hero-stats .stat-item {
    padding: 12px;
    min-width: 90px;
  }

  .hero-stats .stat-number {
    font-size: 1.8rem;
    margin-bottom: 6px;
  }

  .hero-stats .stat-label {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-stats .stat-item {
    padding: 10px;
    min-width: 70px;
  }

  .hero-stats .stat-number {
    font-size: 1.3rem;
    margin-bottom: 4px;
  }

  .hero-stats .stat-label {
    font-size: 0.65rem;
  }
}

@media (max-width: 360px) {
  .hero-stats .stat-item {
    padding: 8px;
    min-width: 60px;
  }

  .hero-stats .stat-number {
    font-size: 1.1rem;
    margin-bottom: 3px;
  }

  .hero-stats .stat-label {
    font-size: 0.6rem;
  }
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.cta-btn {
  border-radius: 50px !important;
  height: 56px !important;
  padding: 0 40px !important;
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

/* 移动端按钮优化 */
@media (max-width: 768px) {
  .hero-actions {
    gap: 15px;
  }

  .cta-btn {
    height: 44px !important;
    padding: 0 25px !important;
    font-size: 13px !important;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    height: 40px !important;
    padding: 0 20px !important;
    font-size: 12px !important;
    width: 180px;
  }
}

@media (max-width: 360px) {
  .cta-btn {
    height: 36px !important;
    padding: 0 18px !important;
    font-size: 11px !important;
    width: 160px;
  }
}

.cta-btn.primary {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
  box-shadow: 0 6px 25px rgba(22, 119, 255, 0.4) !important;
}

.cta-btn.primary:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 10px 35px rgba(22, 119, 255, 0.6) !important;
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  color: white !important;
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-3px) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  margin: 0 auto 10px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollWheel 2s infinite;
}

@keyframes scrollWheel {
  0% {
    top: 6px;
    opacity: 1;
  }
  100% {
    top: 24px;
    opacity: 0;
  }
}

.scroll-indicator span {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
}

/* Hero Banner 简洁装饰元素 */
.hero-decorations {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}

.floating-circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: gentleFloat 8s ease-in-out infinite;
}

.circle-1 {
  width: 120px;
  height: 120px;
  top: 15%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 80px;
  height: 80px;
  top: 70%;
  right: 15%;
  animation-delay: -2s;
}

.circle-3 {
  width: 60px;
  height: 60px;
  top: 40%;
  right: 25%;
  animation-delay: -4s;
}

@keyframes gentleFloat {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-20px) scale(1.1);
    opacity: 0.6;
  }
}

/* 移动端装饰优化 */
@media (max-width: 768px) {
  .hero-decorations {
    opacity: 0.6;
  }

  .floating-circle {
    animation-duration: 10s;
  }
}

@media (max-width: 480px) {
  .hero-decorations {
    opacity: 0.4;
  }

  .circle-3 {
    display: none;
  }
}

/* 问题解决方案样式 */
.problems-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #fef7f0 0%, #fff2e6 100%);
  position: relative;
}

/* 移动端section padding优化 */
@media (max-width: 768px) {
  .problems-section,
  .products-showcase,
  .advantages-section,
  .services-section,
  .cases-section {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .problems-section,
  .products-showcase,
  .advantages-section,
  .services-section,
  .cases-section {
    padding: 40px 0;
  }
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

@media (max-width: 1200px) {
  .problems-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .problems-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .problems-grid {
    grid-template-columns: 1fr;
  }
}

.problem-item {
  text-align: center;
  padding: 30px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(255, 107, 0, 0.1);
  border: 2px solid rgba(255, 107, 0, 0.1);
  transition: all 0.3s ease;
}

.problem-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(255, 107, 0, 0.2);
  border-color: rgba(255, 107, 0, 0.3);
}

.problem-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
  animation: problemIconFloat 3s ease-in-out infinite;
}

@keyframes problemIconFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.problem-item h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff6b00;
  margin-bottom: 8px;
}

.problem-item p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

.solution-cta {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.05) 0%, rgba(67, 198, 172, 0.05) 100%);
  border-radius: 20px;
  border: 2px solid rgba(22, 119, 255, 0.1);
}

.solution-cta h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 12px;
}

.solution-cta p {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 24px;
}

.solution-cta .ant-btn {
  height: 48px;
  padding: 0 32px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
}

/* 产品展示区域样式 */
.products-showcase {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

.products-showcase::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23e2e8f0" fill-opacity="0.4"><circle cx="30" cy="30" r="1"/></g></svg>')
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

/* 移动端容器优化 */
@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  border: 1px solid rgba(22, 119, 255, 0.2);
  border-radius: 50px;
  padding: 8px 16px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #1677ff;
}

.section-header h2 {
  font-size: 2.8rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 1.1rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 移动端section标题优化 */
@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 12px;
  }

  .section-header p {
    font-size: 1rem;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .section-header h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  .section-header p {
    font-size: 0.9rem;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}

.product-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(22, 119, 255, 0.1);
  position: relative;
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(22, 119, 255, 0.2);
  border-color: rgba(22, 119, 255, 0.3);
}

.product-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-overlay {
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

.product-card:hover .product-overlay {
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

.product-info {
  padding: 24px;
}

.product-category {
  font-size: 12px;
  color: #1677ff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.product-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.4;
}

.product-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.product-features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.feature-tag {
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  color: #1677ff;
  border: 1px solid rgba(22, 119, 255, 0.2);
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 11px;
  font-weight: 500;
}

.products-cta {
  text-align: center;
}

.products-cta .ant-btn {
  height: 48px;
  padding: 0 32px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
}

/* 公司优势样式 */
.advantages-section {
  padding: 100px 0;
  background: #ffffff;
  position: relative;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

@media (max-width: 1024px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}

.advantage-card {
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.08);
  border: 1px solid rgba(22, 119, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  text-align: center;
}

.advantage-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(22, 119, 255, 0.15);
  border-color: rgba(22, 119, 255, 0.3);
}

.advantage-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.advantage-card:hover .advantage-bg {
  opacity: 0.1;
}

.advantage-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.advantage-icon {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  margin-bottom: 20px;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.advantage-content {
  position: relative;
  z-index: 2;
}

.advantage-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.advantage-desc {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* 工程案例样式 */
.cases-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.case-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(22, 119, 255, 0.1);
  position: relative;
  min-height: 450px;
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(22, 119, 255, 0.2);
  border-color: rgba(22, 119, 255, 0.3);
}

.case-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  flex-shrink: 0;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-card:hover .case-image img {
  transform: scale(1.1);
}

.case-overlay {
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

.case-card:hover .case-overlay {
  opacity: 1;
}

.case-overlay .overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

.case-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.case-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.case-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
}

.case-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.case-type {
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  color: #1677ff;
  border: 1px solid rgba(22, 119, 255, 0.2);
  border-radius: 12px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
}

.cases-cta {
  text-align: center;
}

.cases-cta .ant-btn {
  height: 48px;
  padding: 0 32px;
  border-radius: 24px;
  font-weight: 600;
  font-size: 16px;
}

/* 服务优势3列布局 */
.services-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}

/* 工程案例3列布局 */
.cases-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}

/* 确保在较小屏幕上也保持布局 */
@media (max-width: 1400px) {
  .services-grid-3 {
    gap: 35px;
  }
  .cases-grid-3 {
    gap: 35px;
  }
}

@media (max-width: 1200px) {
  .services-grid-3 {
    gap: 30px;
  }
  .cases-grid-3 {
    gap: 30px;
  }

  .service-card,
  .case-card {
    padding: 20px 15px;
  }
}

@media (max-width: 1024px) {
  .services-grid-3 {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  .cases-grid-3 {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
}

@media (max-width: 768px) {
  .services-grid-3,
  .cases-grid-3 {
    grid-template-columns: 1fr;
    gap: 20px;
  }
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
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  line-height: 1.4;
}

.service-card p {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 1rem;
  flex: 1;
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
