<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">

      <!-- ====== HERO 首屏 ====== -->
      <section class="hero-section">
        <div class="hero-bg">
          <LazyImage :src="bannerImage" alt="岱威管业工厂" image-class="hero-img-full" />
          <div class="hero-overlay"></div>
          <!-- 装饰几何线条 -->
          <div class="hero-deco-lines">
            <div class="deco-line line-1"></div>
            <div class="deco-line line-2"></div>
          </div>
        </div>
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            山东岱威创新管业有限公司
          </div>
          <h1 class="hero-title">
            工业管道<span class="hero-title-accent">整体解决</span>方案专家
          </h1>
          <p class="hero-desc">
            集研发、生产、销售为一体，专业提供碳化硅聚合陶瓷管、<br class="hero-br"/>
            双金属耐磨管等各类耐磨管道及异形件，服务超过1000个工业项目。
          </p>
          <div class="hero-actions">
            <button class="btn-gold" @click="navigateTo('/products')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              查看产品中心
            </button>
            <button class="btn-outline-white" @click="navigateTo('/contact')">
              联系我们获取报价
            </button>
          </div>
          <!-- 认证标签 -->
          <div class="hero-certs">
            <span class="cert-item">✓ ISO9001认证</span>
            <span class="cert-item">✓ 15年行业经验</span>
            <span class="cert-item">✓ 200+专利技术</span>
          </div>
        </div>
        <!-- 向下滚动指示 -->
        <div class="hero-scroll-hint">
          <div class="scroll-dot"></div>
        </div>
      </section>

      <!-- ====== 数据统计条 ====== -->
      <section class="stats-bar">
        <div class="container stats-inner">
          <div class="stat-item" v-for="(stat, index) in animatedStats" :key="index">
            <div class="stat-num">{{ stat.value }}<span class="stat-suffix">{{ stat.suffix }}</span></div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div class="stats-divider"></div>
          <div class="stats-tagline">
            <strong>山东省济南市 · 自主研发生产</strong>
            <span>全国服务覆盖，出口海外多国</span>
          </div>
        </div>
      </section>

      <!-- ====== 核心产品 · 碳化硅聚合陶瓷管 (深蓝底) ====== -->
      <section class="feature-section dark-blue">
        <div class="container feature-split">
          <div class="feature-text">
            <span class="section-tag">核心产品</span>
            <h2 class="feature-h2">碳化硅聚合<br/>陶瓷管</h2>
            <p class="feature-desc">
              适用于电力、水泥、化工行业中高温粉料输送工况。独特的聚合工艺使其耐磨寿命远超普通钢管，大幅降低更换频率与停产风险。
            </p>
            <ul class="feature-list">
              <li>超高硬度 HRC 85+，耐磨寿命延长 5-10 倍</li>
              <li>耐温 1200°C，适用高温粉料输送</li>
              <li>抗腐蚀，化工强酸碱环境稳定运行</li>
            </ul>
            <button class="btn-gold-outline" @click="navigateTo('/products')">
              了解详情 <span>→</span>
            </button>
          </div>
          <div class="feature-image">
            <LazyImage :src="featuredProducts[0].img" alt="碳化硅聚合陶瓷管" image-class="feature-img" />
            <div class="img-badge-wrap">
              <div class="img-badge">核心产品</div>
            </div>
          </div>
        </div>
      </section>

      <!-- ====== 核心产品 · 双金属耐磨管 (白底) ====== -->
      <section class="feature-section white-bg">
        <div class="container feature-split reverse">
          <div class="feature-image">
            <LazyImage :src="featuredProducts[1].img" alt="双金属耐磨管" image-class="feature-img" />
            <div class="img-badge-wrap">
              <div class="img-badge blue">金属合金</div>
            </div>
          </div>
          <div class="feature-text dark-text">
            <span class="section-tag blue">双金属结构</span>
            <h2 class="feature-h2 dark">双金属耐磨管</h2>
            <p class="feature-desc dark">
              外层碳钢抗冲击，内层高铬合金耐磨损。离心铸造工艺确保双层完美结合，适用于矿山、钢铁厂等高强度工况，延长设备使用周期。
            </p>
            <ul class="feature-list dark">
              <li>离心铸造工艺，内外层冶金结合</li>
              <li>高铬合金内层，硬度 HRC 58-65</li>
              <li>适用矿山、选煤、钢铁等高磨损工况</li>
            </ul>
            <button class="btn-blue-outline" @click="navigateTo('/products')">
              了解详情 <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- ====== 全系产品矩阵 (浅灰底) ====== -->
      <section class="products-matrix">
        <div class="container">
          <div class="matrix-header">
            <span class="section-tag center">全系产品</span>
            <h2 class="matrix-title">全系工业级解决方案</h2>
            <p class="matrix-subtitle">涵盖从输送、分流到防护的所有重载需求，提供定制化选型服务</p>
          </div>
          <div class="matrix-grid">
            <div
              v-for="product in featuredProducts.slice(2)"
              :key="product.id"
              class="matrix-card"
              @click="navigateToProduct(product)"
            >
              <div class="matrix-img-wrap">
                <LazyImage :src="product.img" :alt="product.title" image-class="matrix-img" />
                <div class="matrix-overlay">
                  <span class="matrix-view-btn">查看详情 →</span>
                </div>
              </div>
              <div class="matrix-info">
                <span class="matrix-category">{{ product.category }}</span>
                <h3 class="matrix-name">{{ product.title }}</h3>
                <p class="matrix-desc">{{ product.description }}</p>
              </div>
            </div>
          </div>
          <div class="matrix-footer">
            <button class="btn-blue" @click="navigateTo('/products')">查看全部产品系列</button>
          </div>
        </div>
      </section>

      <!-- ====== 服务优势 (深蓝底) ====== -->
      <section class="services-section">
        <div class="container">
          <div class="services-header">
            <span class="section-tag light">服务保障</span>
            <h2 class="services-title">全生命周期保障</h2>
            <p class="services-subtitle">从选型咨询到售后服务，我们始终与您同行</p>
          </div>
          <div class="services-grid">
            <div class="service-card" v-for="(service, index) in services" :key="index">
              <div class="service-num">0{{ index + 1 }}</div>
              <div class="service-icon">{{ serviceIcons[index] }}</div>
              <h3 class="service-name">{{ service.title }}</h3>
              <p class="service-desc">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ====== CTA 行动号召 (金色渐变底) ====== -->
      <section class="cta-section">
        <div class="cta-bg-pattern"></div>
        <div class="container cta-inner">
          <div class="cta-text">
            <h2 class="cta-title">有选型或技术方面的问题？</h2>
            <p class="cta-desc">我们的工程师团队随时为您提供专业的管道解决方案咨询</p>
          </div>
          <div class="cta-actions">
            <button class="btn-cta-primary" @click="navigateTo('/contact')">
              立即咨询
            </button>
            <a href="tel:18663761618" class="btn-cta-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.93 19.79 19.79 0 0 1 1.61 5.35C1.06 3.38 2.5 1.61 4.48 1.61h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              18663761618
            </a>
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
import LazyImage from '@/components/LazyImage.vue'
import { useSEO } from '@/composables/useSEO'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// 图片导入
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import factoryImg from '@/assets/images/factory.jpg'
import gaonai from '@/assets/images/gaonai.png'
import guijia1 from '@/assets/images/guijia1.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import taoci from '@/assets/images/taoci.jpg'
import zuran1 from '@/assets/images/zuran1.jpg'

const router = useRouter()
const { setSEO } = useSEO()

const bannerImage = factoryImg

const animatedStats = ref([
  { value: 0, target: 15, suffix: '+', label: '年专注耐磨管道' },
  { value: 0, target: 200, suffix: '+', label: '专利及认证' },
  { value: 0, target: 1000, suffix: '+', label: '项目案例' }
])

const featuredProducts = [
  {
    id: 1,
    title: '碳化硅聚合陶瓷管',
    category: '聚合陶瓷系列',
    description: '优异的耐磨耐腐蚀性能，广泛应用于电力、化工行业的粉料输送。',
    img: tanhuahe,
    tags: ['耐高温', '高硬度', '防腐蚀']
  },
  {
    id: 2,
    title: '双金属耐磨管',
    category: '金属合金系列',
    description: '高铬合金内层与碳钢外层结合，具备极高的耐磨性与抗冲击强度。',
    img: shuangjin,
    tags: ['离心铸造', '高强度', '长寿命']
  },
  {
    id: 3,
    title: '反应阻燃型-碳化硅聚合陶瓷涂抹',
    category: '阻燃涂抹系列',
    description: '特殊的反应阻燃型工艺，施工便捷，能够快速修补或大面积涂抹防腐耐磨层。',
    img: zuran1,
    tags: ['阻燃', '便捷施工', '抗冲击']
  },
  {
    id: 4,
    title: '陶瓷内衬复合钢管',
    category: '刚玉陶瓷系列',
    description: '内衬刚玉陶瓷，外层碳钢结构，特别适用于高磨损、高压工况。',
    img: taoci,
    tags: ['刚玉内衬', '高压适配', '标准接口']
  },
  {
    id: 5,
    title: '陶瓷贴片耐磨管',
    category: '陶瓷贴片系列',
    description: '采用高强度陶瓷贴片与钢管内壁紧密贴合，具有良好的耐磨性和抗冲击性能。',
    img: gaonai,
    tags: ['陶瓷贴片', '坚固耐用', '抗冲击']
  },
  {
    id: 6,
    title: '龟甲网耐磨陶瓷管',
    category: '龟甲网系列',
    description: '内部焊接龟甲网并填充耐磨陶瓷材料，极大提升了整体防脱落与耐磨损能力。',
    img: guijia1,
    tags: ['防脱落', '龟甲网骨架', '超强耐磨']
  }
]

const services = [
  {
    title: '实力品牌，一站式服务商',
    description: '集研发、生产、经营为一体，专业提供耐磨、耐腐蚀、耐热复合管及各种异形件综合服务。',
  },
  {
    title: '按需定制，行业整体解决方案',
    description: '拥有丰富经验的技术团队，专业为电力、矿山、钢铁、石化、水泥等行业提供一体化解决方案。',
  },
  {
    title: '市场导向，满足客户需求',
    description: '践行"以人为本，唯实求真"理念，提供安全、实用、高效的高性能产品，为安全生产护航。',
  },
  {
    title: '用心服务，售前售后全程跟踪',
    description: '2小时内响应维护服务。若需现场指导，专业人员会在12-24小时内到达指定地点，彻底解决后顾之忧。',
  }
]

const serviceIcons = ['🏭', '🔧', '🎯', '🤝']

const animateNumber = (stat: any, duration = 2000) => {
  const start = Date.now()
  const startValue = stat.value
  const endValue = stat.target
  const animate = () => {
    const now = Date.now()
    const progress = Math.min((now - start) / duration, 1)
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    stat.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
    if (progress < 1) requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)
}

const navigateTo = (path: string) => router.push(path)
const navigateToProduct = (product: any) =>
  router.push({
    path: `/products/${encodeURIComponent(product.title)}`,
    query: { category: product.category, image: product.img }
  })

onMounted(() => {
  setSEO({
    title: '山东岱威创新管业有限公司-工业管道整体解决方案专家',
    description:
      '专业生产碳化硅聚合陶瓷管、双金属耐磨管、陶瓷内衬复合钢管等，致力于为全球工业领域提供高品质管道产品与运维服务。',
    keywords: '耐磨管道, 碳化硅管, 陶瓷管, 岱威管业, 管道解决方案'
  })

  window.scrollTo({ top: 0, behavior: 'smooth' })

  setTimeout(() => {
    animatedStats.value.forEach((stat, index) => {
      setTimeout(() => animateNumber(stat), index * 200)
    })
  }, 600)
})
</script>

<style scoped>
/* ==================== 全局布局 ==================== */
.home-layout {
  background: #ffffff;
  min-height: 100vh;
}
.main-content {
  background: #ffffff;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 48px;
}

/* ==================== 通用标签 ==================== */
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #f0a500;
  background: rgba(240, 165, 0, 0.12);
  border: 1px solid rgba(240, 165, 0, 0.3);
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.section-tag.blue {
  color: #1e3a5f;
  background: rgba(30, 58, 95, 0.08);
  border-color: rgba(30, 58, 95, 0.2);
}
.section-tag.light {
  color: rgba(240, 165, 0, 0.9);
  background: rgba(240, 165, 0, 0.1);
  border-color: rgba(240, 165, 0, 0.25);
}
.section-tag.center {
  display: block;
  width: fit-content;
  margin: 0 auto 20px;
}

/* ==================== 通用按钮 ==================== */
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #f0a500;
  color: #0a1628;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
}
.btn-gold:hover {
  background: #f5c842;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 165, 0, 0.4);
}
.btn-outline-white {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  background: transparent;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-outline-white:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.7);
}
.btn-gold-outline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  background: transparent;
  color: #f0a500;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #f0a500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-gold-outline:hover {
  background: #f0a500;
  color: #0a1628;
}
.btn-blue-outline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
  background: transparent;
  color: #1e3a5f;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid #1e3a5f;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-blue-outline:hover {
  background: #1e3a5f;
  color: #fff;
}
.btn-blue {
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  background: #1e3a5f;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-blue:hover {
  background: #0a1628;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(30, 58, 95, 0.4);
}

/* ==================== HERO 首屏 ==================== */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: #0a1628;
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
:deep(.hero-img-full) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10, 22, 40, 0.75) 0%,
    rgba(30, 58, 95, 0.55) 50%,
    rgba(10, 22, 40, 0.65) 100%
  );
}

/* 装饰线条 */
.hero-deco-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.deco-line {
  position: absolute;
  background: rgba(240, 165, 0, 0.15);
}
.line-1 {
  top: 20%;
  left: 0;
  right: 0;
  height: 1px;
  transform: rotate(-3deg);
}
.line-2 {
  bottom: 25%;
  left: 0;
  right: 0;
  height: 1px;
  transform: rotate(-3deg);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 860px;
  padding: 0 32px;
  animation: heroFadeUp 1s ease both;
}

@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 28px;
  letter-spacing: 0.05em;
}
.badge-dot {
  width: 6px;
  height: 6px;
  background: #f0a500;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero-title {
  color: #ffffff;
  font-size: 58px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
  letter-spacing: -1px;
}
.hero-title-accent {
  color: #f0a500;
}
.hero-desc {
  color: rgba(255, 255, 255, 0.72);
  font-size: 17px;
  line-height: 1.75;
  margin-bottom: 36px;
}
.hero-br { display: block; }
.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
}
.hero-certs {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}
.cert-item {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.03em;
}

.hero-scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.scroll-dot {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
  margin: 0 auto;
  animation: scrollHint 2s ease-in-out infinite;
}
@keyframes scrollHint {
  0%, 100% { opacity: 0.3; transform: scaleY(0.5); transform-origin: top; }
  50% { opacity: 0.8; transform: scaleY(1); transform-origin: top; }
}

/* ==================== 数据统计条 ==================== */
.stats-bar {
  background: #0a1628;
  padding: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.stats-inner {
  display: flex;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 44px;
  gap: 0;
}
.stat-item {
  flex: 1;
  text-align: center;
  padding: 0 32px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.stat-item:last-of-type {
  border-right: none;
}
.stat-num {
  font-size: 44px;
  font-weight: 800;
  color: #f0a500;
  line-height: 1;
  margin-bottom: 6px;
}
.stat-suffix {
  font-size: 22px;
  color: rgba(240, 165, 0, 0.7);
}
.stat-label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.03em;
}
.stats-divider {
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 40px;
}
.stats-tagline {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}
.stats-tagline strong {
  font-size: 15px;
  color: #ffffff;
  font-weight: 600;
}
.stats-tagline span {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
}

/* ==================== 特色产品区 ==================== */
.feature-section {
  padding: 120px 0;
}
.dark-blue { background: #1e3a5f; }
.white-bg { background: #ffffff; }

.feature-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.feature-split.reverse {
  direction: rtl;
}
.feature-split.reverse > * {
  direction: ltr;
}

.feature-text {
  display: flex;
  flex-direction: column;
}
.feature-h2 {
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}
.feature-h2.dark {
  color: #0a1628;
}
.feature-desc {
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.72);
  margin-bottom: 24px;
}
.feature-desc.dark {
  color: #4a6278;
}
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.feature-list li {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  padding-left: 20px;
  position: relative;
}
.feature-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  background: #f0a500;
  border-radius: 50%;
}
.feature-list.dark li {
  color: #4a6278;
}
.feature-list.dark li::before {
  background: #1e3a5f;
}
.dark-text {}

.feature-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.3);
}
:deep(.feature-img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.feature-image:hover :deep(.feature-img) {
  transform: scale(1.04);
}
.img-badge-wrap {
  position: absolute;
  top: 16px;
  right: 16px;
}
.img-badge {
  background: #f0a500;
  color: #0a1628;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.img-badge.blue {
  background: #1e3a5f;
  color: #ffffff;
}

/* ==================== 产品矩阵 ==================== */
.products-matrix {
  background: #f4f7fb;
  padding: 100px 0;
}
.matrix-header {
  text-align: center;
  margin-bottom: 60px;
}
.matrix-title {
  font-size: 38px;
  font-weight: 800;
  color: #0a1628;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}
.matrix-subtitle {
  font-size: 16px;
  color: #6e8fa3;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

.matrix-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-bottom: 48px;
}
.matrix-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(10, 22, 40, 0.06);
  border: 1px solid rgba(10, 22, 40, 0.06);
}
.matrix-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(10, 22, 40, 0.12);
  border-color: rgba(30, 58, 95, 0.15);
}
.matrix-img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}
:deep(.matrix-img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.matrix-card:hover :deep(.matrix-img) {
  transform: scale(1.05);
}
.matrix-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 22, 40, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.matrix-card:hover .matrix-overlay {
  opacity: 1;
}
.matrix-view-btn {
  color: #f0a500;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.05em;
  border: 2px solid #f0a500;
  padding: 8px 20px;
  border-radius: 6px;
}
.matrix-info {
  padding: 20px 24px 24px;
}
.matrix-category {
  font-size: 11px;
  font-weight: 700;
  color: #f0a500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 8px;
}
.matrix-name {
  font-size: 18px;
  font-weight: 700;
  color: #0a1628;
  margin-bottom: 8px;
}
.matrix-desc {
  font-size: 13px;
  color: #6e8fa3;
  line-height: 1.6;
}

.matrix-footer {
  text-align: center;
}

/* ==================== 服务区 ==================== */
.services-section {
  background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}
.services-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(240, 165, 0, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.services-header {
  text-align: center;
  margin-bottom: 60px;
}
.services-title {
  font-size: 38px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}
.services-subtitle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
}
.service-card {
  background: rgba(255, 255, 255, 0.04);
  padding: 48px 44px;
  transition: background 0.3s ease;
  position: relative;
}
.service-card:hover {
  background: rgba(255, 255, 255, 0.08);
}
.service-num {
  font-size: 12px;
  font-weight: 700;
  color: #f0a500;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}
.service-icon {
  font-size: 32px;
  margin-bottom: 16px;
}
.service-name {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 14px;
  line-height: 1.3;
}
.service-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.75;
}

/* ==================== CTA 区 ==================== */
.cta-section {
  background: #0a1628;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(240, 165, 0, 0.2);
}
.cta-bg-pattern {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 40px,
    rgba(240, 165, 0, 0.02) 40px,
    rgba(240, 165, 0, 0.02) 80px
  );
}
.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  position: relative;
  z-index: 1;
}
.cta-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}
.cta-desc {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.6;
}
.cta-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
.btn-cta-primary {
  padding: 14px 32px;
  background: #f0a500;
  color: #0a1628;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-cta-primary:hover {
  background: #f5c842;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(240, 165, 0, 0.4);
}
.btn-cta-phone {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;
}
.btn-cta-phone:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.06);
}

/* ==================== 响应式 ==================== */
@media (max-width: 1024px) {
  .container { padding: 0 32px; }
  .hero-title { font-size: 48px; }
  .feature-split { gap: 48px; }
  .stats-inner { flex-wrap: wrap; }
  .stats-tagline { display: none; }
  .stats-divider { display: none; }
}

@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .hero-title { font-size: 36px; }
  .hero-br { display: none; }
  .hero-actions { flex-direction: column; align-items: center; }
  .feature-section { padding: 72px 0; }
  .feature-split, .feature-split.reverse { grid-template-columns: 1fr; gap: 36px; direction: ltr; }
  .feature-h2 { font-size: 32px; }
  .feature-image { grid-row: 1; }
  .stats-inner { padding-top: 32px; padding-bottom: 32px; gap: 16px; }
  .stat-item { flex: 1 1 calc(33% - 16px); border-right: none; padding: 0 16px; }
  .stat-num { font-size: 36px; }
  .matrix-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .service-card { padding: 32px 28px; }
  .cta-inner { flex-direction: column; text-align: center; }
  .cta-actions { flex-wrap: wrap; justify-content: center; }
  .cta-title { font-size: 26px; }
  .products-matrix { padding: 64px 0; }
}
</style>