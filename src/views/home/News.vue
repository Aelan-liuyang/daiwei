<template>
  <a-layout class="news-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 顶部Banner -->
      <div class="news-banner">
        
        <div class="banner-overlay">
          <div class="banner-content">
            <h1 class="banner-title">新闻中心</h1>
            <p class="banner-subtitle">关注行业动态，了解技术前沿</p>
            <div class="banner-stats mobile-hidden">
              <div class="stat-item">
                <div class="stat-number">{{ totalNews }}</div>
                <div class="stat-label">新闻资讯</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ totalViews }}</div>
                <div class="stat-label">总阅读量</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">{{ categoriesCount }}</div>
                <div class="stat-label">分类数量</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 新闻内容区 -->
      <div class="news-container">
        <!-- 左侧新闻列表 -->
        <div class="news-list">
          <!-- 筛选和搜索区 -->
          <div class="news-filter-section">
            <div class="filter-header">
              <h2 class="filter-title">
                <span class="title-icon">📰</span>
                新闻资讯
              </h2>
              <div class="filter-actions">
                <a-input-search
                  v-model:value="searchQuery"
                  placeholder="搜索新闻..."
                  class="search-input"
                  @search="handleSearch"
                />
              </div>
            </div>

            <!-- 分类筛选 -->
            <div class="category-filter">
              <div class="filter-label">分类筛选：</div>
              <div class="category-buttons">
                <button
                  v-for="category in categories"
                  :key="category.key"
                  :class="['category-btn', { active: activeCategory === category.key }]"
                  @click="handleCategoryChange(category.key)"
                >
                  <span class="category-icon">{{ category.icon }}</span>
                  {{ category.label }}
                  <span class="category-count">({{ getCategoryCount(category.key) }})</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 新闻列表 -->
          <div class="news-items">
            <div
              v-for="item in pagedNews"
              :key="item.id"
              class="news-item"
              @click="goToDetail(item.id)"
            >
              <div class="news-item-image">
                <img :src="item.coverImage" :alt="item.title" />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <span class="view-icon">👁️</span>
                    <span>查看详情</span>
                  </div>
                </div>
                <div class="news-category">{{ item.category }}</div>
                <div class="news-date-badge">{{ formatDateShort(item.date) }}</div>
              </div>
              <div class="news-item-content">
                <div class="news-header">
                  <h3 class="news-title">{{ item.title }}</h3>
                  <div class="news-priority" v-if="item.priority">
                    <span class="priority-badge">{{ item.priority }}</span>
                  </div>
                </div>
                <p class="news-desc">{{ item.description }}</p>
                <div class="news-tags">
                  <span
                    v-for="(tag, index) in item.tags.slice(0, 3)"
                    :key="tag"
                    :class="['news-tag', { 'mobile-hidden': index > 1 }]"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="news-meta">
                  <div class="meta-left">
                    <span class="meta-item">
                      <calendar-outlined />
                      {{ formatDate(item.date) }}
                    </span>
                    <span class="meta-item">
                      <eye-outlined />
                      {{ formatNumber(item.views) }}
                    </span>
                  </div>
                  <div class="meta-right">
                    <button class="read-more-btn">
                      阅读全文
                      <right-outlined />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="pagedNews.length === 0" class="no-news">
              <div class="no-news-icon">📰</div>
              <div class="no-news-text">暂无相关新闻</div>
              <div class="no-news-desc">请尝试其他分类或搜索关键词</div>
            </div>
          </div>

          <!-- 分页 -->
          <div class="pagination">
            <a-pagination
              :current="currentPage"
              :total="filteredNews.length"
              :pageSize="pageSize"
              show-quick-jumper
              @change="handlePageChange"
            />
          </div>
        </div>

        <!-- 右侧边栏 -->
        <div class="news-sidebar">
          <!-- 新闻统计 -->
          <div class="sidebar-block stats-block mobile-hidden">
            <h3 class="sidebar-title">
              <span class="title-icon">📊</span>
              新闻统计
            </h3>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">{{ totalNews }}</div>
                <div class="stat-label">总新闻数</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">{{ todayNews }}</div>
                <div class="stat-label">今日更新</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">{{ formatNumber(totalViews) }}</div>
                <div class="stat-label">总阅读量</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">{{ hotTags.length }}</div>
                <div class="stat-label">热门标签</div>
              </div>
            </div>
          </div>

          <!-- 热门标签 -->
          <div class="sidebar-block mobile-hidden">
            <h3 class="sidebar-title">
              <span class="title-icon">🏷️</span>
              热门标签
            </h3>
            <div class="tag-cloud">
              <button
                v-for="tag in hotTags"
                :key="tag.name"
                :class="['tag-item', { active: searchQuery === tag.name }]"
                @click="handleTagClick(tag.name)"
              >
                {{ tag.name }}
                <span class="tag-count">{{ tag.count }}</span>
              </button>
            </div>
          </div>

          <!-- 热门新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">
              <span class="title-icon">🔥</span>
              热门新闻
            </h3>
            <div class="hot-news-list">
              <div
                v-for="(item, index) in hotNews"
                :key="item.id"
                class="hot-news-item"
                @click="goToDetail(item.id)"
              >
                <div class="hot-news-rank" :class="{ 'top-rank': index < 3 }">
                  {{ index + 1 }}
                </div>
                <div class="hot-news-content">
                  <div class="hot-news-title">{{ item.title }}</div>
                  <div class="hot-news-meta">
                    <span class="hot-news-views">{{ formatNumber(item.views || 0) }} 阅读</span>
                    <span class="hot-news-date">{{
                      formatDateShort(item.date || new Date())
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 最新动态 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">
              <span class="title-icon">⚡</span>
              最新动态
            </h3>
            <div class="latest-news">
              <div
                v-for="item in latestNews"
                :key="item.id"
                class="latest-news-item"
                @click="goToDetail(item.id)"
              >
                <div class="latest-news-dot"></div>
                <div class="latest-news-content">
                  <div class="latest-news-title">{{ item.title }}</div>
                  <div class="latest-news-time">{{ getTimeAgo(item.date) }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 归档 -->
          <div class="sidebar-block mobile-hidden">
            <h3 class="sidebar-title">
              <span class="title-icon">📅</span>
              新闻归档
            </h3>
            <div class="archive-list">
              <div
                v-for="archive in archives"
                :key="archive.date"
                class="archive-item"
                @click="handleArchiveClick(archive.date)"
              >
                <div class="archive-date">{{ archive.date }}</div>
                <div class="archive-count">{{ archive.count }} 篇</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import { CalendarOutlined, EyeOutlined, RightOutlined } from '@ant-design/icons-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import chenci from '@/assets/images/chenci.jpg'
import factory from '@/assets/images/factory.jpg'
import gaonai from '@/assets/images/gaonai.png'
import rongyu4 from '@/assets/images/rongyu4.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import tanhuada from '@/assets/images/tanhuada.jpg'
import tanhuaguan from '@/assets/images/tanhuaguan.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import taoci from '@/assets/images/taoci.jpg'
import taocifu from '@/assets/images/taocifu.png'
import taocinai from '@/assets/images/taocinai.jpg'
import taociwan from '@/assets/images/taociwan.jpg'

const { setSEO } = useSEO()
const router = useRouter()

// 状态管理
const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

// 真实新闻数据
const newsList = ref([
  {
    id: 1,
    title: '陶瓷耐磨管制造商如何保证产品质量？',
    description:
      '陶瓷耐磨管制造商保证产品质量的方法有很多，以下是一些常见的措施。首先，陶瓷耐磨管制造商需要确保原材料的质量。由于陶瓷耐磨管的生产过程需要使用一定的原材料，如陶瓷粉末、粘结剂等，这些原材料的质量直接影响到最终产品的性能。',
    date: new Date('2023-12-01'),
    views: 2156,
    likes: 45,
    shares: 12,
    category: '技术动态',
    priority: '重要',
    coverImage: taoci,
    tags: ['陶瓷耐磨管', '质量保证', '制造工艺', '产品质量']
  },
  {
    id: 2,
    title: '哪些行业能够受益于耐磨管？',
    description:
      '耐磨管是一种使用特殊材料制成的管道，具有良好的耐磨性能。它在很多行业中能够发挥重要作用，下面我将详细介绍几个主要受益于耐磨管的行业。首先，矿业是耐磨管的主要应用领域之一。',
    date: new Date('2023-09-22'),
    views: 1876,
    likes: 38,
    shares: 15,
    category: '行业资讯',
    coverImage: shuangjin,
    tags: ['耐磨管', '行业应用', '矿业', '电力']
  },
  {
    id: 3,
    title: '陶瓷耐磨管的热传导特性如何？',
    description:
      '陶瓷耐磨管是一种特殊的陶瓷制品，具有优异的耐磨性能和高温稳定性。它广泛应用于工业领域中对耐磨性和导热性要求较高的场合，比如煤矿、钢铁、电力等行业中的输送和处理磨料介质的管道系统。',
    date: new Date('2023-09-15'),
    views: 1543,
    likes: 32,
    shares: 8,
    category: '技术动态',
    coverImage: tanhuaguan,
    tags: ['陶瓷耐磨管', '热传导', '高温稳定性', '技术特性']
  },
  {
    id: 4,
    title: '耐磨管适用于哪些高温环境？',
    description:
      '耐磨管适用于高温环境的主要原因是其材料具有优异的高温耐受性和良好的抗磨损性能。下面将介绍几种常见的高温环境，耐磨管的应用和优势。炉窑行业：炉窑是温度较高的工业设备，耐磨管在其中发挥重要作用。',
    date: new Date('2023-08-10'),
    views: 1324,
    likes: 28,
    shares: 6,
    category: '技术动态',
    coverImage: gaonai,
    tags: ['耐磨管', '高温环境', '炉窑', '工业应用']
  },
  {
    id: 5,
    title: '陶瓷耐磨管的制造工艺与材料有何差异？',
    description:
      '陶瓷耐磨管是一种具有高耐磨性能的管道材料，广泛应用于各个领域如冶金、化工、矿山、电力等。它主要用于输送高温、高压、酸碱和腐蚀介质的管道系统中，能够长时间保持较高的耐磨性能和稳定性。',
    date: new Date('2023-07-24'),
    views: 1198,
    likes: 25,
    shares: 9,
    category: '技术动态',
    coverImage: taocinai,
    tags: ['陶瓷耐磨管', '制造工艺', '材料科学', '技术创新']
  },
  {
    id: 6,
    title: '耐磨管可以在哪些领域应用？',
    description:
      '耐磨管是一种具有高耐磨性能的管材，广泛应用于多个领域，包括工业、交通运输、能源、建筑等。在工业生产中，耐磨管常用于输送具有磨蚀性的物料，如矿石、煤炭、水泥等。',
    date: new Date('2023-07-06'),
    views: 1087,
    likes: 22,
    shares: 7,
    category: '行业资讯',
    coverImage: factory,
    tags: ['耐磨管', '应用领域', '工业生产', '交通运输']
  },
  {
    id: 7,
    title: '双金属耐磨管：对于耐磨材料的选用有哪些要求？',
    description:
      '双金属耐磨管是一种磨损和腐蚀性能较强的管道材料，广泛应用于输送具有高腐蚀度、高磨损度物料的行业，例如矿山、电站、化工、冶金等领域。对于耐磨材料的选用，需要满足以下几个方面的要求。',
    date: new Date('2023-05-09'),
    views: 956,
    likes: 19,
    shares: 5,
    category: '技术动态',
    coverImage: tanhuada,
    tags: ['双金属耐磨管', '材料选用', '耐磨性能', '工程应用']
  },
  {
    id: 8,
    title: '耐磨陶瓷贴片怎么安装？',
    description:
      '耐磨陶瓷贴片是一种常用于室内地面铺装的材料，具有高强度、耐磨损、耐压力等特点，广泛应用于商业建筑、公共场所、机场、火车站等场所。安装时需要注意以下几点：准备工作、基层处理、施工工艺等。',
    date: new Date('2023-04-15'),
    views: 834,
    likes: 16,
    shares: 4,
    category: '技术动态',
    coverImage: taocifu,
    tags: ['陶瓷贴片', '安装工艺', '施工技术', '应用指南']
  },
  {
    id: 9,
    title: '衬瓷管道安装技术要求',
    description:
      '衬瓷管道是一种常用的管道，广泛应用于化工、冶金、电力、航空航天、医药等领域。它具备耐腐蚀、耐磨损等优异的性能，因此在含有强酸、强碱、高温等恶劣环境下作业时，衬瓷管道是首选的管道材料。',
    date: new Date('2023-03-22'),
    views: 723,
    likes: 14,
    shares: 3,
    category: '技术动态',
    coverImage: chenci,
    tags: ['衬瓷管道', '安装技术', '技术要求', '工程规范']
  },
  {
    id: 10,
    title: '双金属耐磨管材质的相关知识介绍',
    description:
      '今天给大家介绍双金属耐磨管材质的相关知识。双金属耐磨管是什么材质：高耐磨复合管的材质种类至少有3种左右，但是要说的耐磨与耐冲击性能集合的非常不错的复合管材质，应该是双金属耐磨管。',
    date: new Date('2023-03-07'),
    views: 612,
    likes: 12,
    shares: 2,
    category: '技术动态',
    coverImage: tanhuahe,
    tags: ['双金属耐磨管', '材质介绍', '复合材料', '技术知识']
  },
  {
    id: 11,
    title: '耐磨陶瓷管的优势和用途',
    description:
      '传统的合金钢管、不锈钢管等寿命短，长时间使用会腐蚀，给企业造成一定的损失。随着技术的日新月异，取而代之的是耐磨陶瓷管，耐磨陶瓷管不仅耐磨、耐高温、抗腐蚀、寿命长，而且性价比高。',
    date: new Date('2023-02-24'),
    views: 567,
    likes: 11,
    shares: 3,
    category: '行业资讯',
    coverImage: taociwan,
    tags: ['耐磨陶瓷管', '产品优势', '应用用途', '性价比']
  },
  {
    id: 12,
    title: '岱威创新管业荣获"山东省专精特新企业"称号',
    description:
      '近日，山东岱威创新管业有限公司凭借在耐磨管道领域的技术创新和市场表现，成功获得"山东省专精特新企业"荣誉称号。这一荣誉的获得，标志着公司在专业化、精细化、特色化、新颖化发展道路上取得了重要成果。',
    date: new Date('2024-01-15'),
    views: 2345,
    likes: 56,
    shares: 18,
    category: '企业新闻',
    priority: '重要',
    coverImage: rongyu4,
    tags: ['企业荣誉', '专精特新', '技术创新', '岱威创新']
  }
])

// 热门标签
const hotTags = ref([
  { name: '陶瓷耐磨管', count: 35 },
  { name: '双金属耐磨管', count: 28 },
  { name: '技术动态', count: 24 },
  { name: '制造工艺', count: 22 },
  { name: '行业应用', count: 20 },
  { name: '质量保证', count: 18 },
  { name: '工程应用', count: 16 },
  { name: '技术创新', count: 15 },
  { name: '产品优势', count: 14 },
  { name: '安装工艺', count: 12 },
  { name: '材料科学', count: 11 },
  { name: '高温环境', count: 10 }
])

// 热门新闻
const hotNews = ref([
  { id: 1, title: '陶瓷耐磨管制造商如何保证产品质量？', views: 2156, date: new Date('2023-12-01') },
  {
    id: 12,
    title: '岱威创新管业荣获"山东省专精特新企业"称号',
    views: 2345,
    date: new Date('2024-01-15')
  },
  { id: 2, title: '哪些行业能够受益于耐磨管？', views: 1876, date: new Date('2023-09-22') },
  { id: 3, title: '陶瓷耐磨管的热传导特性如何？', views: 1543, date: new Date('2023-09-15') },
  { id: 4, title: '耐磨管适用于哪些高温环境？', views: 1324, date: new Date('2023-08-10') }
])

// 归档数据
const archives = ref([
  { date: '2024年3月', count: 5 },
  { date: '2024年1月', count: 1 },
  { date: '2023年12月', count: 1 },
  { date: '2023年9月', count: 2 },
  { date: '2023年8月', count: 1 },
  { date: '2023年7月', count: 2 },
  { date: '2023年5月', count: 1 },
  { date: '2023年4月', count: 1 },
  { date: '2023年3月', count: 1 },
  { date: '2023年2月', count: 1 }
])

// 分类数据
const categories = ref([
  { key: 'all', label: '全部', icon: '📰' },
  { key: 'tech', label: '技术动态', icon: '🔬' },
  { key: 'industry', label: '行业资讯', icon: '🏭' },
  { key: 'company', label: '企业新闻', icon: '🏢' }
])

// 最新动态数据
const latestNews = ref([
  { id: 13, title: '岱威创新管业参加2024年中国国际管道展览会', date: new Date('2024-03-20') },
  { id: 14, title: '公司新型双金属耐磨管获得国家专利认证', date: new Date('2024-03-18') },
  { id: 15, title: '与山东钢铁集团签署战略合作协议', date: new Date('2024-03-15') },
  { id: 16, title: '陶瓷内衬复合钢管生产线正式投产', date: new Date('2024-03-12') },
  { id: 17, title: '公司通过ISO9001质量管理体系认证', date: new Date('2024-03-10') }
])

// 统计数据
const totalNews = computed(() => newsList.value.length)
const totalViews = computed(() => newsList.value.reduce((sum, item) => sum + item.views, 0))
const categoriesCount = computed(() => categories.value.length - 1) // 排除"全部"
const todayNews = computed(() => {
  const today = new Date()
  return newsList.value.filter(item => {
    const itemDate = new Date(item.date)
    return itemDate.toDateString() === today.toDateString()
  }).length
})

// 过滤后的新闻列表
const filteredNews = computed(() => {
  let filtered = newsList.value

  // 分类过滤
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(item => {
      const categoryMap = {
        tech: '技术动态',
        industry: '行业资讯',
        company: '企业新闻'
      }
      return item.category === categoryMap[activeCategory.value]
    })
  }

  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      item =>
        item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

// 分页后的新闻列表
const pagedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredNews.value.slice(start, start + pageSize.value)
})

// 保证切换分类或搜索时回到第一页
watch([activeCategory, searchQuery], () => {
  currentPage.value = 1
})

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

// 格式化短日期
const formatDateShort = date => {
  return new Date(date).toLocaleDateString('zh-CN', {
    month: 'short',
    day: 'numeric'
  })
}

// 获取时间差
const getTimeAgo = date => {
  const now = new Date()
  const diff = now - new Date(date)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return '今天'
  if (days === 1) return '昨天'
  if (days < 7) return `${days}天前`
  if (days < 30) return `${Math.floor(days / 7)}周前`
  return formatDateShort(date)
}

// 获取分类数量
const getCategoryCount = categoryKey => {
  if (categoryKey === 'all') return newsList.value.length

  const categoryMap = {
    tech: '技术动态',
    industry: '行业资讯',
    company: '企业新闻'
  }

  return newsList.value.filter(item => item.category === categoryMap[categoryKey]).length
}

// 事件处理函数
const handleCategoryChange = key => {
  activeCategory.value = key
}

const handlePageChange = page => {
  currentPage.value = page
}

const handleSearch = value => {
  searchQuery.value = value
}

const handleTagClick = tag => {
  searchQuery.value = tag
}

const handleArchiveClick = date => {
  // 实现归档筛选逻辑
  console.log('Archive clicked:', date)
}

const goToDetail = id => {
  router.push(`/news/${id}`)
}

// 页面初始化
onMounted(() => {
  // 设置SEO
  setSEO({
    title: '新闻中心',
    description: '山东岱威创新管业新闻中心，提供最新的行业资讯、技术动态和企业新闻。',
    keywords: '新闻中心,行业资讯,技术动态,企业新闻,岱威管业'
  })

  // 页面滚动到顶部
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>

<style scoped>
.news-layout {
  min-height: 100vh;
  
  background: #fbfbfd;
  overflow-x: hidden;
}

.main-content {
  padding-bottom: 40px;
}

.news-banner {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 40px;
  color: #fff;
  background: #1e3a5f;
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

.news-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 58, 95, 0.6);
  z-index: 2;
}

.banner-overlay {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 0 24px;
}

.banner-content {
  animation: fadeInUp 1s ease-out;
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

.banner-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.banner-subtitle {
  font-size: 1.2rem;
  margin-bottom: 32px;
  opacity: 0.9;
  font-weight: 300;
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.2);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 32px;
}

.news-list {
  flex: 1;
  min-width: 0;
}

/* 筛选区域样式 */
.news-filter-section {
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: none;
  border: 1px solid rgba(22, 119, 255, 0.1);
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.filter-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #0a1628;
  margin: 0;
}

.title-icon {
  font-size: 18px;
}

.search-input {
  width: 300px;
}

.category-filter {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-label {
  font-weight: 600;
  color: #a1a1a6;
  min-width: 80px;
}

.category-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 2px solid rgba(22, 119, 255, 0.2);
  background: rgba(22, 119, 255, 0.05);
  color: #1677ff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 14px;
}

.category-btn:hover {
  background: rgba(22, 119, 255, 0.1);
  transform: translateY(-2px);
}

.category-btn.active {
  background: #1e3a5f;
  color: #ffffff;
  border-color: #1e3a5f;
  box-shadow: 0 4px 12px rgba(30,58,95,0.3);
}

.category-icon {
  font-size: 14px;
}

.category-count {
  font-size: 12px;
  opacity: 0.8;
}

.news-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-item {
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
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

.news-item:hover {
  transform: translateY(-8px);
  box-shadow: none;
  border-color: rgba(22, 119, 255, 0.3);
}

.news-item-image {
  width: 320px;
  height: 220px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.news-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.news-item:hover .news-item-image img {
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

.news-item:hover .image-overlay {
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

.news-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #1e3a5f;
  color: #fff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  z-index: 2;
}

.news-date-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  color: #1677ff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  z-index: 2;
}

.news-item-content {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.news-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.news-title {
  font-size: 18px;
  color: #0a1628;
  font-weight: 700;
  line-height: 1.4;
  flex: 1;
}

.news-priority {
  margin-left: 12px;
}

.priority-badge {
  background: #1e3a5f;
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 600;
}

.news-desc {
  color: #a1a1a6;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}

.news-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.news-tag {
  background: rgba(30, 58, 95, 0.08);
  color: #1e3a5f;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  border: 1px solid rgba(30, 58, 95, 0.2);
  transition: all 0.3s ease;
}

.news-tag:hover {
  background: #1e3a5f;
  color: #ffffff;
  transform: translateY(-2px);
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #a1a1a6;
  font-size: 13px;
}

.meta-left {
  display: flex;
  gap: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.meta-right {
  margin-left: auto;
}

.read-more-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #1e3a5f;
  color: #ffffff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  transform: translateY(-2px);
  box-shadow: none;
}

.pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.no-news {
  text-align: center;
  padding: 60px 20px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: none;
  border: 1px solid rgba(22, 119, 255, 0.1);
}

.no-news-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.6;
}

.no-news-text {
  font-size: 18px;
  color: #a1a1a6;
  font-weight: 600;
  margin-bottom: 8px;
}

.no-news-desc {
  font-size: 14px;
  color: #a1a1a6;
}

.news-sidebar {
  width: 300px;
  flex-shrink: 0;
}

.search-box {
  margin-bottom: 24px;
}

.sidebar-block {
  background: #ffffff;
  border-radius: 4px;
  box-shadow: none;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  transition: all 0.3s ease;
}

.sidebar-block:hover {
  transform: translateY(-2px);
  box-shadow: none;
}

.sidebar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #0a1628;
  margin-bottom: 20px;
  font-weight: 700;
  background: #1e3a5f;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 统计卡片样式 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat-card {
  text-align: center;
  padding: 16px 12px;
  background: #f8fafc;
  border-radius: 4px;
  border: 1px solid rgba(30, 58, 95, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-2px);
  background: #ffffff;
  border-color: rgba(30, 58, 95, 0.2);
  box-shadow: 0 4px 12px rgba(30,58,95,0.08);
}

.stat-card .stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3a5f;
  margin-bottom: 4px;
}

.stat-card .stat-label {
  font-size: 11px;
  color: #64748b;
  font-weight: 500;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-item {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #f0f4f8;
  color: #1e3a5f;
  border: 1px solid rgba(30, 58, 95, 0.1);
  border-radius: 15px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag-item:hover,
.tag-item.active {
  background: #1e3a5f;
  color: #ffffff;
  border-color: #1e3a5f;
  transform: translateY(-2px);
}

.tag-count {
  font-size: 10px;
  opacity: 0.8;
  background: rgba(30, 58, 95, 0.1);
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 4px;
}

.tag-item:hover .tag-count,
.tag-item.active .tag-count {
  background: rgba(255, 255, 255, 0.2);
}

/* 热门新闻样式 */
.hot-news-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hot-news-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.hot-news-item:hover {
  background: rgba(22, 119, 255, 0.05);
  border-left-color: #1677ff;
  transform: translateX(4px);
}

.hot-news-rank {
  width: 24px;
  height: 24px;
  background: #fbfbfd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #a1a1a6;
  flex-shrink: 0;
}

.hot-news-rank.top-rank {
  background: #1e3a5f;
  color: #ffffff;
}

.hot-news-content {
  flex: 1;
  min-width: 0;
}

.hot-news-title {
  font-size: 13px;
  color: #0a1628;
  font-weight: 600;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hot-news-meta {
  display: flex;
  gap: 8px;
  font-size: 11px;
  color: #a1a1a6;
}

.hot-news-views,
.hot-news-date {
  font-weight: 500;
}

/* 最新动态样式 */
.latest-news {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.latest-news-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.latest-news-item:hover {
  background: rgba(22, 119, 255, 0.05);
}

.latest-news-dot {
  width: 8px;
  height: 8px;
  background: #1e3a5f;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.latest-news-content {
  flex: 1;
  min-width: 0;
}

.latest-news-title {
  font-size: 13px;
  color: #0a1628;
  font-weight: 500;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.latest-news-time {
  font-size: 11px;
  color: #a1a1a6;
  font-weight: 500;
}

/* 归档样式 */
.archive-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.archive-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.archive-item:hover {
  background: rgba(22, 119, 255, 0.05);
  border-left-color: #1677ff;
  transform: translateX(4px);
}

.archive-date {
  font-size: 13px;
  color: #0a1628;
  font-weight: 600;
}

.archive-count {
  font-size: 11px;
  color: #a1a1a6;
  background: rgba(22, 119, 255, 0.1);
  padding: 2px 8px;
  border-radius: 8px;
  font-weight: 500;
}

/* 移动端内容隐藏 */
@media (max-width: 768px) {
  .mobile-hidden {
    display: none !important;
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .banner-stats {
    gap: 24px;
  }

  .stat-item {
    padding: 12px 16px;
  }

  .search-input {
    width: 250px;
  }
}

@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-sidebar {
    width: 100%;
  }

  .filter-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .search-input {
    width: 100%;
  }

  .category-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .news-banner {
    height: 200px;
    background: #1e3a5f;
}

  .banner-content {
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
  }

  .banner-title {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  .banner-subtitle {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .banner-stats {
    flex-direction: column;
    gap: 16px;
  }

  .news-item {
    flex-direction: column;
  }

  .news-item-image {
    width: 100%;
    height: 200px;
  }

  .news-meta {
    flex-direction: column;
    gap: 8px;
  }

  .meta-left {
    gap: 12px;
  }

  .category-buttons {
    gap: 8px;
  }

  .category-btn {
    padding: 6px 12px;
    font-size: 13px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .news-banner {
    height: 160px;
    background: #1e3a5f;
}

  .banner-title {
    font-size: 1.5rem;
  }

  .banner-subtitle {
    font-size: 0.9rem;
  }

  .news-filter-section {
    padding: 16px;
  }

  .filter-title {
    font-size: 18px;
  }

  .news-item-content {
    padding: 16px;
  }

  .news-title {
    font-size: 16px;
    line-height: 1.4;
  }

  .news-desc {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .news-tags {
    margin-bottom: 12px;
  }

  .news-tag {
    font-size: 11px;
    padding: 3px 6px;
  }

  .sidebar-block {
    padding: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}

@media (max-width: 360px) {
  .news-banner {
    height: 140px;
    background: #1e3a5f;
}

  .banner-title {
    font-size: 1.3rem;
  }

  .banner-subtitle {
    font-size: 0.8rem;
  }

  .news-filter-section {
    padding: 12px;
  }

  .filter-title {
    font-size: 16px;
  }

  .news-item-content {
    padding: 12px;
  }

  .news-title {
    font-size: 15px;
  }

  .news-desc {
    font-size: 13px;
  }

  .category-btn {
    padding: 4px 8px;
    font-size: 12px;
  }

  .read-more-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
