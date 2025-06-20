<template>
  <a-layout class="case-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb-section">
        <div class="container">
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/">首页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/cases">工程案例</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>{{ caseInfo.title }}</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>

      <!-- 案例详情内容 -->
      <div class="case-detail-content">
        <div class="container">
          <div class="detail-layout">
            <!-- 左侧图片展示 -->
            <div class="case-gallery">
              <div class="main-image">
                <img :src="currentImage" :alt="caseInfo.title" />
                <div class="image-zoom" @click="openImageModal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
              </div>
              <div class="thumbnail-list">
                <div 
                  v-for="(img, index) in caseImages" 
                  :key="index"
                  :class="['thumbnail', { active: currentImage === img }]"
                  @click="currentImage = img"
                >
                  <img :src="img" :alt="`${caseInfo.title} ${index + 1}`" />
                </div>
              </div>
            </div>

            <!-- 右侧案例信息 -->
            <div class="case-info">
              <div class="case-header">
                <div class="case-badge">
                  <span class="badge-icon">🏗️</span>
                  <span>{{ caseInfo.industry }}</span>
                </div>
                <h1 class="case-title">{{ caseInfo.title }}</h1>
                <div class="case-meta-info">
                  <div class="meta-item">
                    <span class="meta-label">项目时间：</span>
                    <span class="meta-value">{{ caseInfo.date }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">项目地点：</span>
                    <span class="meta-value">{{ caseInfo.location }}</span>
                  </div>
                  <div class="meta-item">
                    <span class="meta-label">项目规模：</span>
                    <span class="meta-value">{{ caseInfo.scale }}</span>
                  </div>
                </div>
              </div>

              <div class="case-description">
                <h3>项目概述</h3>
                <p>{{ caseInfo.description }}</p>
              </div>

              <div class="case-highlights">
                <h3>项目亮点</h3>
                <ul class="highlight-list">
                  <li v-for="highlight in caseInfo.highlights" :key="highlight">
                    <span class="highlight-icon">✓</span>
                    <span>{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <div class="case-tags">
                <h3>技术标签</h3>
                <div class="tags-list">
                  <span v-for="tag in caseInfo.tags" :key="tag" class="case-tag">{{ tag }}</span>
                </div>
              </div>

              <div class="case-actions">
                <button class="action-btn primary" @click="contactUs">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 5h14l-7 7L3 5z" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  咨询类似项目
                </button>
                <button class="action-btn secondary" @click="downloadReport">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3v10m0 0l-4-4m4 4l4-4M3 17h14" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  下载案例报告
                </button>
              </div>
            </div>
          </div>

          <!-- 详细信息标签页 -->
          <div class="case-tabs">
            <div class="tab-headers">
              <button 
                v-for="tab in tabs" 
                :key="tab.key"
                :class="['tab-header', { active: activeTab === tab.key }]"
                @click="activeTab = tab.key"
              >
                {{ tab.label }}
              </button>
            </div>
            <div class="tab-content">
              <div v-if="activeTab === 'details'" class="tab-panel">
                <h3>项目详细信息</h3>
                <div class="details-grid">
                  <div v-for="detail in projectDetails" :key="detail.label" class="detail-item">
                    <span class="detail-label">{{ detail.label }}</span>
                    <span class="detail-value">{{ detail.value }}</span>
                  </div>
                </div>
              </div>
              <div v-if="activeTab === 'solution'" class="tab-panel">
                <h3>解决方案</h3>
                <div class="solution-content">
                  <div v-for="solution in solutions" :key="solution.title" class="solution-item">
                    <h4>{{ solution.title }}</h4>
                    <p>{{ solution.description }}</p>
                  </div>
                </div>
              </div>
              <div v-if="activeTab === 'results'" class="tab-panel">
                <h3>项目成果</h3>
                <div class="results-grid">
                  <div v-for="result in projectResults" :key="result.metric" class="result-item">
                    <div class="result-number">{{ result.value }}</div>
                    <div class="result-metric">{{ result.metric }}</div>
                    <div class="result-description">{{ result.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 相关案例推荐 -->
          <div class="related-cases">
            <h3>相关案例推荐</h3>
            <div class="related-grid">
              <div 
                v-for="relatedCase in relatedCases" 
                :key="relatedCase.id"
                class="related-item"
                @click="goToCase(relatedCase)"
              >
                <div class="related-image">
                  <img :src="relatedCase.img" :alt="relatedCase.title" />
                </div>
                <div class="related-info">
                  <h4>{{ relatedCase.title }}</h4>
                  <p>{{ relatedCase.industry }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>

  <!-- 图片放大模态框 -->
  <a-modal 
    v-model:open="imageModalVisible" 
    :footer="null" 
    :width="800"
    centered
    class="image-modal"
  >
    <img :src="currentImage" :alt="caseInfo.title" class="modal-image" />
  </a-modal>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useSEO } from '@/composables/useSEO'

// 路由
const route = useRoute()
const router = useRouter()

// 响应式数据
const currentImage = ref('')
const activeTab = ref('details')
const imageModalVisible = ref(false)

// 案例信息
const caseInfo = ref({
  title: '',
  industry: '',
  date: '',
  location: '',
  scale: '',
  description: '',
  highlights: [],
  tags: []
})

// 案例图片
const caseImages = ref([])

// 项目详细信息
const projectDetails = ref([
  { label: '项目周期', value: '6个月' },
  { label: '管道长度', value: '2000米' },
  { label: '管道规格', value: 'DN200-DN800' },
  { label: '工作压力', value: '1.6MPa' },
  { label: '工作温度', value: '≤200℃' },
  { label: '介质类型', value: '粉料/浆料' }
])

// 解决方案
const solutions = ref([
  {
    title: '材料选择',
    description: '采用碳化硅聚合陶瓷管，具有优异的耐磨性能和化学稳定性。'
  },
  {
    title: '设计方案',
    description: '根据现场工况条件，优化管道布局和支撑结构设计。'
  },
  {
    title: '施工工艺',
    description: '采用专业的安装工艺，确保管道系统的密封性和稳定性。'
  }
])

// 项目成果
const projectResults = ref([
  { value: '300%', metric: '使用寿命提升', description: '相比传统管道' },
  { value: '85%', metric: '维护成本降低', description: '年度维护费用' },
  { value: '99.8%', metric: '系统可靠性', description: '连续运行时间' },
  { value: '0', metric: '安全事故', description: '运行期间' }
])

// 标签页
const tabs = ref([
  { key: 'details', label: '项目详情' },
  { key: 'solution', label: '解决方案' },
  { key: 'results', label: '项目成果' }
])

// 相关案例
const relatedCases = ref([])

const { setSEO } = useSEO()

// 方法
const openImageModal = () => {
  imageModalVisible.value = true
}

const contactUs = () => {
  router.push('/contact')
}

const downloadReport = () => {
  console.log('下载案例报告')
}

const goToCase = (caseItem) => {
  router.push(`/cases/${caseItem.id}`)
}

onMounted(() => {
  // 从路由参数获取案例ID
  const caseId = route.params.id
  
  // 这里应该根据caseId从API获取案例详情
  // 暂时使用模拟数据
  caseInfo.value = {
    title: '某大型水泥厂耐磨管道系统',
    industry: '水泥行业',
    date: '2023年8月',
    location: '山东省济南市',
    scale: '大型工业项目',
    description: '为知名水泥厂提供碳化硅聚合陶瓷管道系统，有效解决了粉料输送过程中的磨损问题，延长设备使用寿命3倍以上，大幅降低了维护成本和停机时间。',
    highlights: [
      '采用先进的碳化硅聚合陶瓷材料',
      '定制化设计方案，完美适配现场工况',
      '专业施工团队，确保工程质量',
      '提供完善的售后服务和技术支持'
    ],
    tags: ['碳化硅陶瓷管', '耐磨', '粉料输送', '水泥行业']
  }

  // 设置案例图片
  caseImages.value = [
    '/src/assets/images/anli2.jpg',
    '/src/assets/images/anli1.jpg',
    '/src/assets/images/anli3.jpg'
  ]
  currentImage.value = caseImages.value[0]

  // 设置SEO
  setSEO({
    title: caseInfo.value.title,
    description: caseInfo.value.description,
    keywords: `${caseInfo.value.tags.join(',')},工程案例,岱威管业`
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<style scoped>
/* 基础样式将在下一步添加 */
</style>
