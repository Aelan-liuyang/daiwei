<template>
  <a-layout class="case-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑导航 -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- 标题与项目元信息 -->
      <div class="case-head">
        <div class="case-head-main">
          <div class="case-badge">
            <span class="badge-icon">🏆</span>
            <span>成功案例</span>
          </div>
          <div class="case-title">{{ caseData.title }}</div>
          <div class="case-subtitle">{{ caseData.desc }}</div>
          <div class="case-meta">
            <div class="meta-item">
              <span class="meta-icon">🏭</span>
              <span class="meta-label">行业：</span>
              <span class="meta-value">{{ caseData.industry }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📍</span>
              <span class="meta-label">地区：</span>
              <span class="meta-value">{{ caseData.region }}</span>
            </div>
            <div class="meta-item">
              <span class="meta-icon">📅</span>
              <span class="meta-label">时间：</span>
              <span class="meta-value">{{ caseData.date }}</span>
            </div>
          </div>
          <div class="case-tags">
            <span class="case-tag" v-for="tag in caseData.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="case-head-image" @click="openImageModal">
          <img :src="caseData.img" class="case-head-img" :alt="caseData.title" />
          <div class="image-overlay">
            <div class="overlay-content">
              <span class="view-icon">🔍</span>
              <span>查看大图</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 详情主体 -->
      <section class="case-content">
        <div class="case-content-main">
          <h2 class="section-title">项目概况</h2>
          <p class="case-desc">{{ caseData.desc }}</p>

          <h2 class="section-title">客户需求</h2>
          <ul class="case-list">
            <li v-for="d in caseData.demands" :key="d">{{ d }}</li>
          </ul>

          <h2 class="section-title">解决方案</h2>
          <div class="case-solution">
            <img :src="caseData.solutionImg" class="solution-img" v-if="caseData.solutionImg" />
            <div>
              <p v-for="(sol, i) in caseData.solution" :key="i">{{ sol }}</p>
            </div>
          </div>

          <h2 class="section-title">项目成果</h2>
          <ul class="case-list">
            <li v-for="r in caseData.results" :key="r">{{ r }}</li>
          </ul>

          <div class="case-gallery" v-if="caseData.gallery && caseData.gallery.length">
            <h2 class="section-title">现场图片</h2>
            <div class="gallery-grid">
              <img
                v-for="(img, idx) in caseData.gallery"
                :key="idx"
                :src="img"
                :alt="caseData.title + ' - 图' + (idx + 1)"
              />
            </div>
          </div>
        </div>
        <!-- 侧边栏 -->
        <aside class="case-content-side">
          <div class="side-block project-info">
            <div class="side-title">
              <span class="title-icon">📊</span>
              项目信息
            </div>
            <div class="info-grid">
              <div class="info-item">
                <span class="info-icon">👥</span>
                <div class="info-content">
                  <span class="info-label">客户</span>
                  <span class="info-value">{{ caseData.customer }}</span>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">🏭</span>
                <div class="info-content">
                  <span class="info-label">行业</span>
                  <span class="info-value">{{ caseData.industry }}</span>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📅</span>
                <div class="info-content">
                  <span class="info-label">项目时间</span>
                  <span class="info-value">{{ caseData.date }}</span>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">📍</span>
                <div class="info-content">
                  <span class="info-label">地区</span>
                  <span class="info-value">{{ caseData.region }}</span>
                </div>
              </div>
              <div class="info-item">
                <span class="info-icon">🔧</span>
                <div class="info-content">
                  <span class="info-label">主要产品</span>
                  <span class="info-value">{{ caseData.products }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="side-block stats-block">
            <div class="side-title">
              <span class="title-icon">📈</span>
              项目成效
            </div>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">3x</div>
                <div class="stat-label">寿命提升</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">30%</div>
                <div class="stat-label">成本节省</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">客户满意</div>
              </div>
            </div>
          </div>

          <div class="side-block contact-block">
            <div class="side-title">
              <span class="title-icon">💬</span>
              获取专属方案
            </div>
            <div class="contact-desc">如需了解更多行业案例或定制解决方案，欢迎联系我们。</div>
            <div class="contact-actions">
              <a-button
                type="primary"
                size="large"
                class="contact-btn primary"
                @click="goToContact"
              >
                <span class="btn-icon">📞</span>
                在线咨询
              </a-button>
              <a-button size="large" class="contact-btn secondary" @click="downloadCaseReport">
                <span class="btn-icon">📄</span>
                下载资料
              </a-button>
            </div>
          </div>
        </aside>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>

  <!-- 图片查看模态框 -->
  <a-modal
    v-model:open="imageModalVisible"
    :footer="null"
    :width="800"
    centered
    class="image-modal"
  >
    <div class="image-modal-content">
      <img :src="caseData.img" :alt="caseData.title" class="modal-image" />
      <h3 class="modal-title">{{ caseData.title }}</h3>
    </div>
  </a-modal>
</template>

<script setup>
import anli1 from '@/assets/images/anli1.jpg'
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import anli5 from '@/assets/images/anli5.jpg'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { setSEO } = useSEO()
const router = useRouter()

// 图片模态框
const imageModalVisible = ref(false)

const allCases = [
  {
    id: 1,
    title: '水泥厂耐磨管道升级项目',
    desc: '为知名水泥厂设计并安装全新耐磨管道系统，提升生产线运行可靠性与效率。',
    img: anli2,
    tags: ['水泥', '耐磨', '升级'],
    date: '2024-11-12',
    industry: '水泥制造',
    customer: '山东某水泥集团',
    region: '山东 济南',
    products: '碳化硅陶瓷管、弯头、三通',
    demands: ['耐磨管道需适应高强度砂浆输送', '降低停机检修频率', '节省维护成本，提升管道寿命'],
    solutionImg: anli3,
    solution: [
      '针对水泥生产中磨损点，采用高性能碳化硅陶瓷管，适配原有工艺流程。',
      '为弯头、三通等高冲刷位置定制加厚陶瓷内衬。',
      '全程现场指导安装，确保系统无缝衔接。'
    ],
    results: [
      '管道寿命提高3倍以上，年节省维护成本30%',
      '大幅减少生产线非计划停机次数',
      '获得客户高度认可'
    ],
    gallery: [anli2, anli3, anli5]
  },
  {
    id: 2,
    title: '化工厂耐磨管道改造',
    desc: '为化工厂高温高压环境量身定制双金属耐磨管道，提高安全性。',
    img: anli1,
    tags: ['化工', '耐磨', '管道'],
    date: '2024-07-04',
    industry: '化工',
    customer: '山东某化工企业',
    region: '山东 淄博',
    products: '双金属耐磨管',
    demands: ['耐受高温、强腐蚀性介质', '确保长期稳定运行'],
    solutionImg: anli1,
    solution: [
      '采用复合材料结构，内层耐磨合金，外层碳钢，兼顾强度和耐腐蚀。',
      '特殊工艺焊接，确保密封性和长期稳定。'
    ],
    results: ['运行两年无重大故障，远超客户预期', '安全生产水平提升'],
    gallery: [anli1, anli4]
  },
  {
    id: 3,
    title: '智能管网系统集成',
    desc: '为大型化工企业部署智能管网，实现生产数据实时监控与远程管理。',
    img: anli3,
    tags: ['智能', '化工', '管网'],
    date: '2023-12-15',
    industry: '化工',
    customer: '大型化工集团',
    region: '江苏 南京',
    products: '智能管网系统、传感器',
    demands: ['需实现管道状态实时监测', '提升远程管理与数据分析能力'],
    solutionImg: anli4,
    solution: [
      '部署高精度传感器，实时采集流量、压力和温度数据。',
      '搭建云平台，支持移动端远程监控和报警。'
    ],
    results: ['管网运行效率提升15%', '远程巡检率提升，节省人力成本'],
    gallery: [anli3, anli5]
  }
]

const route = useRoute()
const caseId = Number(route.params.id)
const caseData = allCases.find(c => c.id === caseId) || allCases[0]

// 面包屑数据
const breadcrumbItems = [
  { path: '/cases', text: '工程案例', icon: '🏗️' },
  { text: caseData.title, icon: '📋' }
]

// 导航函数
const goToContact = () => {
  router.push('/contact')
}

const downloadCaseReport = () => {
  console.log('下载案例报告')
}

// 图片查看功能
const openImageModal = () => {
  imageModalVisible.value = true
}

onMounted(() => {
  // 设置SEO
  setSEO({
    title: caseData.title,
    description: caseData.desc,
    keywords: `${caseData.tags.join(',')},工程案例,${caseData.industry},岱威管业`
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<style scoped>
.case-detail-layout {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.main-content {
  background: transparent;
  min-height: 480px;
  padding-bottom: 40px;
}

/* 顶部信息块 */
.case-head {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  max-width: 1180px;
  margin: 40px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
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

.case-head-main {
  flex: 1;
}

.case-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  border: 1px solid rgba(22, 119, 255, 0.2);
  border-radius: 25px;
  padding: 6px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #1677ff;
}

.badge-icon {
  font-size: 16px;
}

.case-title {
  font-size: 32px;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.case-subtitle {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 24px;
  line-height: 1.6;
}

.case-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  border-left: 3px solid #1677ff;
}

.meta-icon {
  font-size: 16px;
}

.meta-label {
  color: #64748b;
  font-weight: 500;
  min-width: 60px;
}

.meta-value {
  color: #1e293b;
  font-weight: 600;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.case-tag {
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  color: #1677ff;
  font-size: 12px;
  border-radius: 15px;
  padding: 4px 12px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
}

.case-tag:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  transform: translateY(-2px);
}

.case-head-image {
  position: relative;
  width: 400px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.15);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.case-head-image:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(22, 119, 255, 0.2);
}

.case-head-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-head-image:hover .case-head-img {
  transform: scale(1.05);
}

.image-overlay {
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

.case-head-image:hover .image-overlay {
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

/* 详情主体 */
.case-content {
  max-width: 1280px;
  margin: 28px auto 0 auto;
  display: flex;
  z-index: 3;
  position: relative;
  gap: 38px;
  padding: 0 16px;
}

.case-content-main {
  flex: 1 1 0;
  background: #fff;
  border-radius: 17px;
  box-shadow: 0 2px 14px rgba(22, 119, 255, 0.08);
  padding: 48px 48px 38px 48px;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.14rem;
  color: #1677ff;
  font-weight: 700;
  margin: 32px 0 16px 0;
  letter-spacing: 1px;
}

.section-title:first-child {
  margin-top: 0;
}

.case-desc {
  font-size: 16.5px;
  color: #222;
  margin-bottom: 14px;
  line-height: 1.8;
  font-weight: 500;
}

.case-list {
  font-size: 15px;
  color: #444;
  padding-left: 21px;
  margin-bottom: 0;
}

.case-list li {
  margin-bottom: 7px;
  line-height: 1.7;
}

.case-solution {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 10px;
}

.solution-img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.07);
  flex-shrink: 0;
}

.case-solution p {
  margin-bottom: 8px;
}

.case-gallery {
  margin-top: 32px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 18px;
  margin-top: 12px;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 9px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
}

/* 侧边栏 */
.case-content-side {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 180px;
}

.side-block {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
  padding: 20px 18px 14px 18px;
  margin-bottom: 0;
}

.side-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 16px;
  letter-spacing: 1px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-icon {
  font-size: 16px;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  padding: 4px;
  border-radius: 8px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 项目信息样式 */
.info-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  border-left: 3px solid #1677ff;
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(22, 119, 255, 0.05);
  transform: translateX(4px);
}

.info-icon {
  font-size: 16px;
  color: #1677ff;
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
}

.info-value {
  font-size: 14px;
  color: #1e293b;
  font-weight: 600;
}

/* 统计样式 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.stat-item {
  text-align: center;
  padding: 16px 8px;
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.05) 0%, rgba(67, 198, 172, 0.05) 100%);
  border-radius: 12px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
}

.stat-number {
  font-size: 20px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
}

/* 联系区块样式 */
.contact-block {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%) !important;
  border: 1px solid rgba(22, 119, 255, 0.1) !important;
}

.contact-desc {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 20px;
  line-height: 1.6;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  border-radius: 12px !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.contact-btn.primary {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%) !important;
  border: none !important;
}

.contact-btn.primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 6px 16px rgba(22, 119, 255, 0.4) !important;
}

.contact-btn.secondary {
  background: rgba(22, 119, 255, 0.1) !important;
  color: #1677ff !important;
  border: 1px solid rgba(22, 119, 255, 0.2) !important;
}

.contact-btn.secondary:hover {
  background: rgba(22, 119, 255, 0.2) !important;
  transform: translateY(-2px) !important;
}

.btn-icon {
  font-size: 16px;
}

/* 图片模态框样式 */
.image-modal :deep(.ant-modal-content) {
  padding: 0;
  overflow: hidden;
  border-radius: 16px;
}

.image-modal-content {
  text-align: center;
}

.modal-image {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  background: #f8fafc;
}

.modal-title {
  padding: 20px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .case-head {
    margin: 20px auto;
    padding: 32px;
  }

  .case-head-image {
    width: 350px;
    height: 240px;
  }
}

@media (max-width: 900px) {
  .breadcrumb-container {
    padding: 0 16px;
  }

  .case-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px 16px;
    margin: 16px auto;
  }

  .case-head-image {
    width: 100%;
    height: 200px;
    margin: 0 auto;
  }

  .case-meta {
    gap: 8px;
  }

  .meta-item {
    padding: 8px 10px;
  }

  .case-content {
    flex-direction: column;
    gap: 16px;
    padding: 0 16px;
    margin-top: 16px;
  }

  .case-content-main {
    padding: 24px 16px;
  }

  .case-content-side {
    flex-direction: row;
    gap: 12px;
    min-width: 0;
    width: 100%;
  }

  .side-block {
    min-width: 150px;
    flex: 1 1 200px;
    padding: 16px 12px;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .stat-item {
    padding: 12px 6px;
  }

  .stat-number {
    font-size: 16px;
  }

  .stat-label {
    font-size: 10px;
  }

  .contact-actions {
    gap: 8px;
  }

  .case-title {
    font-size: 24px;
  }

  .gallery-grid {
    gap: 12px;
  }
}

@media (max-width: 600px) {
  .breadcrumb-container {
    padding: 0 12px;
  }

  .case-head {
    padding: 20px 12px;
    margin: 12px auto;
  }

  .case-title {
    font-size: 20px;
  }

  .case-subtitle {
    font-size: 14px;
  }

  .case-head-image {
    height: 160px;
  }

  .case-content {
    padding: 0 12px;
  }

  .case-content-main {
    padding: 16px 12px;
  }

  .case-content-side {
    flex-direction: column;
    gap: 12px;
  }

  .side-block {
    min-width: 0;
    flex: none;
    padding: 16px;
  }

  .info-grid {
    gap: 8px;
  }

  .info-item {
    padding: 8px;
    gap: 8px;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }

  .stat-item {
    padding: 8px 4px;
  }

  .stat-number {
    font-size: 14px;
  }

  .stat-label {
    font-size: 9px;
  }

  .contact-btn {
    padding: 12px 16px !important;
    font-size: 14px !important;
  }
}
</style>
