<template>
  <a-layout class="news-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 顶部Banner -->
      <div class="news-banner">
        <img src="@/assets/images/newBanner1.jpeg" alt="新闻中心"
          class="banner-bg-img" />
      </div>

      <!-- 新闻内容区 -->
      <div class="news-container">
        <!-- 左侧新闻列表 -->
        <div class="news-list">
          <!-- 分类标签 -->
          <div class="category-tabs">
            <a-tabs v-model:activeKey="activeCategory"
              @change="handleCategoryChange">
              <a-tab-pane key="all" tab="全部"></a-tab-pane>
              <a-tab-pane key="tech" tab="技术动态"></a-tab-pane>
              <a-tab-pane key="industry" tab="行业资讯"></a-tab-pane>
              <a-tab-pane key="company" tab="企业新闻"></a-tab-pane>
            </a-tabs>
          </div>

          <!-- 新闻列表 -->
          <div class="news-items">
            <div v-for="item in pagedNews"
              :key="item.id"
              class="news-item"
              @click="goToDetail(item.id)">
              <div class="news-item-image">
                <img :src="item.coverImage" :alt="item.title" />
                <div class="news-category">{{ item.category }}</div>
              </div>
              <div class="news-item-content">
                <h3 class="news-title">{{ item.title }}</h3>
                <p class="news-desc">{{ item.description }}</p>
                <div class="news-meta">
                  <span class="meta-item">
                    <calendar-outlined />
                    {{ formatDate(item.date) }}
                  </span>
                  <span class="meta-item">
                    <eye-outlined />
                    {{ formatNumber(item.views) }} 阅读
                  </span>
                  <span class="meta-item">
                    <tag-outlined />
                    <a-tag v-for="tag in item.tags.slice(0, 2)"
                      :key="tag"
                      color="blue">{{ tag }}</a-tag>
                  </span>
                </div>
              </div>
            </div>
            <div v-if="pagedNews.length === 0" class="no-news">暂无新闻</div>
          </div>

          <!-- 分页 -->
          <div class="pagination">
            <a-pagination
              :current="currentPage"
              :total="filteredNews.length"
              :pageSize="pageSize"
              show-quick-jumper
              @change="handlePageChange" />
          </div>
        </div>

        <!-- 右侧边栏 -->
        <div class="news-sidebar">
          <!-- 搜索框 -->
          <div class="search-box">
            <a-input-search
              v-model:value="searchQuery"
              placeholder="搜索新闻..."
              @search="handleSearch" />
          </div>

          <!-- 热门标签 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">热门标签</h3>
            <div class="tag-cloud">
              <a-tag v-for="tag in hotTags"
                :key="tag.name"
                :color="tag.color"
                @click="handleTagClick(tag.name)">
                {{ tag.name }}
                <span class="tag-count">({{ tag.count }})</span>
              </a-tag>
            </div>
          </div>

          <!-- 热门新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">热门新闻</h3>
            <ul class="hot-news">
              <li v-for="(item, index) in hotNews"
                :key="item.id"
                @click="goToDetail(item.id)">
                <div class="hot-news-item">
                  <span class="hot-news-rank"
                    :class="{ 'top-rank': index < 3 }">
                    {{ index + 1 }}
                  </span>
                  <span class="hot-news-title">{{ item.title }}</span>
                </div>
              </li>
            </ul>
          </div>

          <!-- 归档 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">新闻归档</h3>
            <ul class="archive-list">
              <li v-for="archive in archives" :key="archive.date">
                <a @click="handleArchiveClick(archive.date)">
                  {{ archive.date }}
                  <span class="archive-count">({{ archive.count }})</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  CalendarOutlined,
  EyeOutlined,
  TagOutlined
} from '@ant-design/icons-vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()

// 状态管理
const activeCategory = ref('all')
const currentPage = ref(1)
const pageSize = ref(10)
const searchQuery = ref('')

// 模拟新闻数据
const newsList = ref([
  {
    id: 1,
    title: '碳化硅陶瓷管的新型应用案例分享',
    description: '随着工业技术的不断发展，碳化硅陶瓷管在多个领域展现出独特的优势。本文将详细介绍几个典型的应用案例...',
    date: new Date('2024-03-15'),
    views: 1234,
    category: '技术动态',
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    tags: ['碳化硅', '陶瓷管', '应用案例']
  },
  {
    id: 2,
    title: '2024年工业管道技术发展趋势分析',
    description: '随着环保要求的不断提高和工业技术的快速发展，工业管道行业正面临着新的机遇与挑战...',
    date: new Date('2024-03-12'),
    views: 986,
    category: '行业资讯',
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    tags: ['行业趋势', '技术发展', '市场分析']
  },
  {
    id: 3,
    title: '公司成功举办2024年技术研讨会',
    description: '近日，我公司成功举办了2024年技术研讨会，来自全国各地的行业专家和技术人员共同探讨了最新技术发展...',
    date: new Date('2024-03-10'),
    views: 756,
    category: '企业新闻',
    coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
    tags: ['技术研讨', '企业动态']
  }
  // 可以添加更多新闻数据
])

// 热门标签
const hotTags = ref([
  { name: '碳化硅', count: 28, color: 'blue' },
  { name: '陶瓷管', count: 25, color: 'green' },
  { name: '技术创新', count: 20, color: 'orange' },
  { name: '行业动态', count: 18, color: 'purple' },
  { name: '应用案例', count: 15, color: 'cyan' },
  { name: '市场分析', count: 12, color: 'magenta' }
])

// 热门新闻
const hotNews = ref([
  { id: 1, title: '碳化硅陶瓷管技术创新研讨会成功举办' },
  { id: 2, title: '新型碳化硅陶瓷管材料研发取得突破' },
  { id: 3, title: '碳化硅陶瓷管在环保领域的应用前景' },
  { id: 4, title: '碳化硅陶瓷管生产工艺优化升级' },
  { id: 5, title: '碳化硅陶瓷管市场需求分析报告' }
])

// 归档数据
const archives = ref([
  { date: '2024年3月', count: 12 },
  { date: '2024年2月', count: 15 },
  { date: '2024年1月', count: 10 },
  { date: '2023年12月', count: 8 }
])

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
    filtered = filtered.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
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
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 格式化数字
const formatNumber = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : num
}

// 事件处理函数
const handleCategoryChange = (key) => {
  activeCategory.value = key
}

const handlePageChange = (page) => {
  currentPage.value = page
}

const handleSearch = (value) => {
  searchQuery.value = value
}

const handleTagClick = (tag) => {
  searchQuery.value = tag
}

const handleArchiveClick = (date) => {
  // 实现归档筛选逻辑
  console.log('Archive clicked:', date)
}

const goToDetail = (id) => {
  router.push(`/news/${id}`)
}
</script>

<style scoped>
.news-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  padding-bottom: 40px;
}

.news-banner {
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
  background: rgba(0, 0, 0, 0.4);
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

.category-tabs {
  margin-bottom: 24px;
  background: #fff;
  padding: 0 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.news-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
}

.news-item:hover {
  transform: translateY(-4px);
}

.news-item-image {
  width: 280px;
  position: relative;
  flex-shrink: 0;
}

.news-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(22, 119, 255, 0.9);
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
}

.news-item-content {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.news-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
}

.news-desc {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
  flex: 1;
}

.news-meta {
  display: flex;
  gap: 24px;
  color: #999;
  font-size: 13px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pagination {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

.no-news {
  color: #bbb;
  text-align: center;
  padding: 40px 0 20px 0;
  font-size: 16px;
}

.news-sidebar {
  width: 300px;
  flex-shrink: 0;
}

.search-box {
  margin-bottom: 24px;
}

.sidebar-block {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 24px;
}

.sidebar-title {
  font-size: 18px;
  color: #1677ff;
  margin-bottom: 16px;
  font-weight: 600;
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-count {
  font-size: 12px;
  opacity: 0.8;
}

.hot-news {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hot-news-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
  transition: transform 0.2s;
}

.hot-news-item:hover {
  transform: translateX(4px);
}

.hot-news-rank {
  width: 20px;
  height: 20px;
  background: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666;
}

.hot-news-rank.top-rank {
  background: #1677ff;
  color: #fff;
}

.hot-news-title {
  flex: 1;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.archive-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.archive-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.archive-list li:last-child {
  border-bottom: none;
}

.archive-list a {
  color: #666;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.archive-list a:hover {
  color: #1677ff;
}

.archive-count {
  color: #999;
  font-size: 12px;
}

@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-sidebar {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .news-banner {
    height: 180px;
  }

  .news-item {
    flex-direction: column;
  }

  .news-item-image {
    width: 100%;
    height: 200px;
  }

  .news-meta {
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style>