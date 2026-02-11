<template>
  <a-layout class="cases-layout">
    <Header />
    <a-layout-content class="main-content">
      <div class="cases-banner">
        <LazyImage 
          :src="gcAnli" 
          alt="工程案例" 
          image-class="banner-bg-img"
          preload
        />
      </div>
      <div class="cases-banner-text">
        <h1>工程案例</h1>
        <div class="cases-banner-sub">Project Cases</div>
      </div>

      <!-- 案例筛选器 -->
      <section class="case-filter-section">
        <div class="filter-container">
          <div class="filter-title">
            <span class="filter-icon">🔍</span>
            案例筛选
          </div>
          <div class="filter-tabs">
            <button
              v-for="category in categories"
              :key="category"
              :class="['filter-tab', { active: selectedCategory === category }]"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </section>

      <!-- 案例统计 -->
      <section class="case-stats-section mobile-hidden">
        <div class="stats-container">
          <div class="stat-item">
            <div class="stat-number">{{ filteredCases.length }}</div>
            <div class="stat-label">项目案例</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{{ uniqueIndustries.length }}</div>
            <div class="stat-label">服务行业</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">成功率</div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <div class="case-grid">
          <div v-for="c in filteredCases" :key="c.id" class="case-card" @click="goDetail(c)">
            <div class="case-img-wrap">
              <LazyImage
                :src="c.img"
                :alt="c.title"
                image-class="case-img"
                aspect-ratio="62.5%"
              />
              <div class="case-overlay">
                <div class="overlay-content">
                  <span class="view-icon">👁️</span>
                  <span>查看详情</span>
                </div>
              </div>
            </div>
            <div class="case-card-body">
              <div class="case-meta">
                <span class="case-industry">{{ c.industry }}</span>
                <span class="case-date">{{ c.date }}</span>
              </div>
              <h3 class="case-title">{{ c.title }}</h3>
              <div class="case-desc">{{ c.desc }}</div>
              <div class="case-tags">
                <span
                  class="case-tag"
                  v-for="(tag, index) in c.tags"
                  :key="tag"
                  :class="{ 'mobile-hidden': index > 1 }"
                  >{{ tag }}</span
                >
              </div>
              <div class="case-actions">
                <button class="action-btn primary">查看详情</button>
                <button class="action-btn secondary mobile-hidden">了解更多</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import anli1 from '@/assets/images/anli1.jpg'
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import anli5 from '@/assets/images/anli5.jpg'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import LazyImage from '@/components/LazyImage.vue'
import gcAnli from '@/assets/images/gcAnli.jpeg'
import { useSEO } from '@/composables/useSEO'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { setSEO } = useSEO()

// 筛选分类
const selectedCategory = ref('全部')
const categories = ['全部', '水泥行业', '化工行业', '钢铁行业', '电力行业', '环保行业']
// 案例数据
const cases = [
  {
    id: 1,
    title: '某大型水泥厂耐磨管道系统',
    desc: '为知名水泥厂提供碳化硅聚合陶瓷管道系统，有效解决了粉料输送过程中的磨损问题，延长设备使用寿命3倍以上。',
    img: anli2,
    industry: '水泥行业',
    date: '2023-08',
    tags: ['碳化硅陶瓷管', '耐磨', '粉料输送'],
    category: '水泥行业'
  },
  {
    id: 2,
    title: '化工园区管道防腐工程',
    desc: '为省内大型化工园区提供双金属耐磨管及防腐解决方案，承受高温高压腐蚀性介质环境，运行稳定可靠。',
    img: anli1,
    industry: '化工行业',
    date: '2023-06',
    tags: ['双金属耐磨管', '防腐', '高温高压'],
    category: '化工行业'
  },
  {
    id: 3,
    title: '智能化工厂管网监控系统',
    desc: '为大型化工企业部署智能管网监控系统，实现管道状态实时监测、数据可视化与远程运维管理。',
    img: anli3,
    industry: '化工行业',
    date: '2023-05',
    tags: ['智能监控', '数据可视化', '远程运维'],
    category: '化工行业'
  },
  {
    id: 4,
    title: '钢铁厂高温管道改造项目',
    desc: '为省内知名钢铁厂提供陶瓷内衬复合钢管，解决高温烟气输送管道的耐热耐磨问题，大幅降低维护成本。',
    img: anli4,
    industry: '钢铁行业',
    date: '2023-04',
    tags: ['陶瓷内衬管', '高温烟气', '耐热耐磨'],
    category: '钢铁行业'
  },
  {
    id: 5,
    title: '电厂脱硫脱硝管道系统',
    desc: '为电力企业提供脱硫脱硝专用管道系统，采用先进的陶瓷贴片技术，有效抵抗腐蚀性介质侵蚀。',
    img: anli5,
    industry: '电力行业',
    date: '2023-03',
    tags: ['脱硫脱硝', '陶瓷贴片', '防腐蚀'],
    category: '电力行业'
  },
  {
    id: 6,
    title: '污水处理厂管道升级工程',
    desc: '为市政污水处理厂提供耐腐蚀管道系统，采用特殊防腐涂层技术，确保长期稳定运行。',
    img: anli1,
    industry: '环保行业',
    date: '2023-02',
    tags: ['污水处理', '防腐涂层', '环保'],
    category: '环保行业'
  }
]

// 筛选后的案例
const filteredCases = computed(() => {
  if (selectedCategory.value === '全部') {
    return cases
  }
  return cases.filter(c => c.category === selectedCategory.value)
})

// 独特行业数量
const uniqueIndustries = computed(() => {
  return [...new Set(cases.map(c => c.industry))]
})
const router = useRouter()

function goDetail(c) {
  router.push(`/cases/${c.id}`)
}

onMounted(() => {
  // 设置SEO
  setSEO({
    title: '工程案例',
    description:
      '山东岱威创新管业工程案例展示，涵盖水泥、化工、钢铁、电力等多个行业的管道系统解决方案。',
    keywords: '工程案例,管道工程,水泥厂管道,化工管道,钢铁厂管道,岱威管业'
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<style scoped>
.cases-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.header {
  display: flex;
  align-items: center;
  background: #001529;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-right: 32px;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
}

.main-content {
  background: transparent;
  min-height: 480px;
  padding-bottom: 40px;
}

/* 筛选器样式 */
.case-filter-section {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(22, 119, 255, 0.1);
}

.filter-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
}

.filter-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 16px;
}

.filter-icon {
  font-size: 16px;
}

.filter-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 8px 20px;
  border: 2px solid rgba(22, 119, 255, 0.2);
  background: rgba(22, 119, 255, 0.05);
  color: #1677ff;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 14px;
}

.filter-tab:hover {
  background: rgba(22, 119, 255, 0.1);
  transform: translateY(-2px);
}

.filter-tab.active {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  border-color: #1677ff;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
}

/* 统计部分样式 */
.case-stats-section {
  padding: 30px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  margin-bottom: 40px;
}

.stats-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  gap: 60px;
}

.stat-item {
  text-align: center;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  transition: all 0.3s ease;
  min-width: 120px;
}

.stat-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.15);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

.cases-banner {
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

.cases-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.cases-banner-text {
  z-index: 2;
  color: #333;
  text-align: center;
  width: 100%;
}

.cases-banner-text h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 5px;
  text-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.cases-banner-sub {
  font-size: 1.13rem;
  color: #1677ff;
  letter-spacing: 4px;
  margin-top: 10px;
  font-weight: 400;
}

.case-section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 24px 0 24px;
  background: none;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
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

.case-card {
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
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

.case-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 48px rgba(22, 119, 255, 0.2);
  border-color: rgba(22, 119, 255, 0.3);
}

.case-img-wrap {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-card:hover .case-img {
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

.case-card-body {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.case-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.case-industry {
  background: rgba(22, 119, 255, 0.1);
  color: #1677ff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.case-date {
  color: #64748b;
  font-size: 12px;
  font-weight: 500;
}

.case-title {
  font-size: 18px;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.4;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.case-desc {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.6;
  flex: 1;
}

.case-tags {
  margin-bottom: 16px;
}

.case-tag {
  display: inline-block;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  color: #1677ff;
  font-size: 12px;
  border-radius: 15px;
  padding: 4px 12px;
  margin-right: 8px;
  margin-bottom: 6px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
}

.case-tag:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  transform: translateY(-2px);
}

.case-actions {
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

.footer-bottom {
  text-align: center;
  color: #888;
  background: #181e29;
  padding: 18px 0 14px 0;
  font-size: 14px;
  margin-top: 36px;
}

/* 移动端内容隐藏 */
@media (max-width: 768px) {
  .mobile-hidden {
    display: none !important;
  }
}

/* 响应式优化 */
@media (max-width: 1200px) {
  .stats-container {
    gap: 40px;
  }

  .case-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 1100px) {
  .case-section {
    padding: 20px 16px 0 16px;
  }

  .filter-container {
    padding: 0 16px;
  }

  .stats-container {
    padding: 0 16px;
    gap: 30px;
  }
}

@media (max-width: 800px) {
  .filter-tabs {
    gap: 8px;
  }

  .filter-tab {
    padding: 6px 16px;
    font-size: 13px;
  }

  .stats-container {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .stat-item {
    width: 200px;
  }

  .case-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .cases-banner {
    height: 200px;
  }

  .cases-banner-text {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .cases-banner-text h1 {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  .cases-banner-sub {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cases-banner {
    height: 160px;
  }

  .cases-banner-text h1 {
    font-size: 1.5rem;
  }

  .cases-banner-sub {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .cases-banner {
    height: 140px;
  }

  .cases-banner-text h1 {
    font-size: 1.3rem;
  }

  .cases-banner-sub {
    font-size: 0.8rem;
  }

  .case-filter-section {
    padding: 16px 0;
  }

  .filter-title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .case-stats-section {
    padding: 20px 0;
  }

  .case-section {
    padding: 16px 12px 0 12px;
  }

  .case-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .case-card-body {
    padding: 16px;
  }

  .case-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .case-desc {
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  .case-tags {
    margin-bottom: 12px;
  }

  .case-tag {
    font-size: 11px;
    padding: 3px 8px;
    margin-right: 4px;
    margin-bottom: 4px;
  }

  .case-actions {
    display: flex;
    gap: 8px;
  }

  .action-btn {
    flex: 1;
    padding: 10px 12px;
    font-size: 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .action-btn.primary {
    background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
    color: white;
  }

  .action-btn.secondary {
    background: #f8fafc;
    color: #64748b;
    border: 1px solid #e2e8f0;
  }
}
</style>
