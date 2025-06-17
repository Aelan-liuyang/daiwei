<template>
  <a-layout class="news-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="/news">新闻中心</a></a-breadcrumb-item>
          <a-breadcrumb-item>{{ newsData.title }}</a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <!-- 新闻内容区 -->
      <div class="news-container">
        <div class="news-content">
          <!-- 文章头部 -->
          <div class="article-header">
            <h1 class="article-title">{{ newsData.title }}</h1>
            <div class="article-meta">
              <span class="meta-item">
                <calendar-outlined />
                {{ formatDate(newsData.date) }}
              </span>
              <span class="meta-item">
                <eye-outlined />
                {{ formatNumber(newsData.views) }} 阅读
              </span>
              <span class="meta-item">
                <tag-outlined />
                {{ newsData.category }}
              </span>
            </div>
          </div>

          <!-- 文章封面图 -->
          <div class="article-cover" v-if="newsData.coverImage">
            <img :src="newsData.coverImage" :alt="newsData.title" />
          </div>

          <!-- 文章内容 -->
          <div class="article-content" v-html="newsData.content"></div>

          <!-- 文章底部 -->
          <div class="article-footer">
            <div class="article-tags"
              v-if="newsData.tags && newsData.tags.length">
              <tag-outlined />
              <a-tag v-for="tag in newsData.tags" :key="tag"
                color="blue">{{ tag }}</a-tag>
            </div>
            <div class="article-share">
              <span class="share-label">分享到：</span>
              <a-button type="text" @click="handleShare('weixin')">
                <wechat-outlined />
              </a-button>
              <a-button type="text" @click="handleShare('weibo')">
                <weibo-outlined />
              </a-button>
            </div>
          </div>
        </div>

        <!-- 侧边栏 -->
        <div class="news-sidebar">
          <!-- 相关新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">相关新闻</h3>
            <ul class="related-news">
              <li v-for="item in relatedNews" :key="item.id"
                @click="goToNews(item.id)">
                <div class="related-news-item">
                  <img :src="item.coverImage" :alt="item.title" />
                  <div class="related-news-info">
                    <div class="related-news-title">{{ item.title }}</div>
                    <div class="related-news-date">{{ formatDate(item.date) }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- 热门新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">热门新闻</h3>
            <ul class="hot-news">
              <li v-for="item in hotNews" :key="item.id"
                @click="goToNews(item.id)">
                <div class="hot-news-item">
                  <span class="hot-news-rank"
                    :class="{ 'top-rank': index < 3 }">{{ index + 1 }}</span>
                  <span class="hot-news-title">{{ item.title }}</span>
                </div>
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
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  CalendarOutlined,
  EyeOutlined,
  TagOutlined,
  WechatOutlined,
  WeiboOutlined
} from '@ant-design/icons-vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
const router = useRouter()
const newsId = route.params.id

// 模拟新闻数据
const newsData = ref({
  id: newsId,
  title: '碳化硅陶瓷管的新型应用案例分享',
  date: new Date('2024-03-15'),
  views: 1234,
  category: '技术动态',
  coverImage: '/src/assets/images/news-cover.jpg',
  content: `
    <p>随着工业技术的不断发展，碳化硅陶瓷管在多个领域展现出独特的优势。本文将详细介绍几个典型的应用案例。</p>
    <h2>1. 化工行业应用</h2>
    <p>在化工行业中，碳化硅陶瓷管因其优异的耐腐蚀性能，被广泛应用于各类腐蚀性介质的输送系统...</p>
    <h2>2. 电力行业应用</h2>
    <p>在电力行业中，碳化硅陶瓷管主要用于烟气脱硫系统，其耐磨性能显著提升了设备的使用寿命...</p>
    <h2>3. 冶金行业应用</h2>
    <p>在冶金行业中，碳化硅陶瓷管的应用主要集中在高温、高压、强腐蚀等恶劣工况下...</p>
  `,
  tags: ['碳化硅', '陶瓷管', '应用案例', '技术创新']
})

// 相关新闻
const relatedNews = ref([
  {
    id: 1,
    title: '碳化硅陶瓷管技术创新研讨会成功举办',
    date: new Date('2024-03-10'),
    coverImage: '/src/assets/images/news-1.jpg'
  },
  {
    id: 2,
    title: '新型碳化硅陶瓷管材料研发取得突破',
    date: new Date('2024-03-05'),
    coverImage: '/src/assets/images/news-2.jpg'
  },
  {
    id: 3,
    title: '碳化硅陶瓷管在环保领域的应用前景',
    date: new Date('2024-03-01'),
    coverImage: '/src/assets/images/news-3.jpg'
  }
])

// 热门新闻
const hotNews = ref([
  { id: 1, title: '碳化硅陶瓷管技术创新研讨会成功举办' },
  { id: 2, title: '新型碳化硅陶瓷管材料研发取得突破' },
  { id: 3, title: '碳化硅陶瓷管在环保领域的应用前景' },
  { id: 4, title: '碳化硅陶瓷管生产工艺优化升级' },
  { id: 5, title: '碳化硅陶瓷管市场需求分析报告' }
])

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

// 跳转到新闻详情
const goToNews = (id) => {
  router.push(`/news/${id}`)
}

// 分享功能
const handleShare = (platform) => {
  // 实现分享逻辑
  console.log('分享到:', platform)
}

onMounted(() => {
  // 可以在这里加载实际的新闻数据
})
</script>

<style scoped>
.news-detail-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  padding: 24px 0 40px;
}

.breadcrumb {
  max-width: 1200px;
  margin: 0 auto 24px;
  padding: 0 24px;
}

.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 32px;
}

.news-content {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  padding: 32px;
}

.article-header {
  margin-bottom: 24px;
}

.article-title {
  font-size: 28px;
  color: #333;
  font-weight: 600;
  margin-bottom: 16px;
  line-height: 1.4;
}

.article-meta {
  display: flex;
  gap: 24px;
  color: #666;
  font-size: 14px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.article-cover {
  margin: 24px 0;
  border-radius: 8px;
  overflow: hidden;
}

.article-cover img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.article-content {
  font-size: 16px;
  line-height: 1.8;
  color: #333;
}

.article-content h2 {
  font-size: 20px;
  margin: 32px 0 16px;
  color: #1677ff;
}

.article-content p {
  margin-bottom: 16px;
}

.article-footer {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid #eee;
}

.article-tags {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.article-share {
  display: flex;
  align-items: center;
  gap: 12px;
}

.share-label {
  color: #666;
}

.news-sidebar {
  width: 300px;
  flex-shrink: 0;
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

.related-news {
  list-style: none;
  padding: 0;
  margin: 0;
}

.related-news-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  cursor: pointer;
  transition: transform 0.2s;
}

.related-news-item:hover {
  transform: translateX(4px);
}

.related-news-item img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.related-news-info {
  flex: 1;
  min-width: 0;
}

.related-news-title {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.related-news-date {
  font-size: 12px;
  color: #999;
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

@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-sidebar {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .article-title {
    font-size: 24px;
  }

  .article-meta {
    flex-wrap: wrap;
    gap: 16px;
  }

  .news-content {
    padding: 20px;
  }
}
</style>