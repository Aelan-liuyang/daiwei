<template>
  <a-layout class="news-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 面包屑导航 -->
      <Breadcrumb :items="breadcrumbItems" />

      <!-- 新闻内容区 -->
      <div class="news-container">
        <div class="news-content">
          <!-- 文章头部 -->
          <div class="article-header">
            <div class="article-category">
              <span class="category-badge">{{ newsData.category }}</span>
              <span class="reading-time">预计阅读 {{ readingTime }} 分钟</span>
            </div>
            <h1 class="article-title">{{ newsData.title }}</h1>
            <div class="article-summary" v-if="newsData.summary">
              {{ newsData.summary }}
            </div>
            <div class="article-meta">
              <div class="meta-left">
                <span class="meta-item">
                  <calendar-outlined />
                  {{ formatDate(newsData.date) }}
                </span>
                <span class="meta-item">
                  <eye-outlined />
                  {{ formatNumber(newsData.views) }} 阅读
                </span>
                <span class="meta-item">
                  <user-outlined />
                  {{ newsData.author || '岱威管业' }}
                </span>
              </div>
              <div class="meta-right">
                <div class="article-actions">
                  <button class="action-btn like-btn" @click="handleLike">
                    <heart-outlined />
                    {{ newsData.likes || 0 }}
                  </button>
                  <button class="action-btn share-btn" @click="showShareModal">
                    <share-alt-outlined />
                    分享
                  </button>
                </div>
              </div>
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
            <div class="article-tags" v-if="newsData.tags && newsData.tags.length">
              <div class="tags-title">
                <tag-outlined />
                相关标签
              </div>
              <div class="tags-list">
                <span v-for="tag in newsData.tags" :key="tag" class="article-tag">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="article-actions-footer">
              <div class="action-stats">
                <div class="stat-item">
                  <heart-outlined />
                  <span>{{ newsData.likes || 0 }} 点赞</span>
                </div>
                <div class="stat-item">
                  <eye-outlined />
                  <span>{{ formatNumber(newsData.views) }} 阅读</span>
                </div>
                <div class="stat-item">
                  <share-alt-outlined />
                  <span>{{ newsData.shares || 0 }} 分享</span>
                </div>
              </div>

              <div class="article-share">
                <span class="share-label">分享到：</span>
                <div class="share-buttons">
                  <button class="share-btn weixin" @click="handleShare('weixin')">
                    <wechat-outlined />
                    微信
                  </button>
                  <button class="share-btn weibo" @click="handleShare('weibo')">
                    <weibo-outlined />
                    微博
                  </button>
                  <button class="share-btn link" @click="handleShare('link')">
                    <link-outlined />
                    链接
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 侧边栏 -->
        <div class="news-sidebar">
          <!-- 相关新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">相关新闻</h3>
            <ul class="related-news">
              <li v-for="item in relatedNews" :key="item.id" @click="goToNews(item.id)">
                <div class="related-news-item">
                  <img :src="item.coverImage" :alt="item.title" />
                  <div class="related-news-info">
                    <div class="related-news-title">{{ item.title }}</div>
                    <div class="related-news-date">{{ formatDate(item.date) }}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- 热门新闻 -->
          <div class="sidebar-block">
            <h3 class="sidebar-title">热门新闻</h3>
            <ul class="hot-news">
              <li v-for="(item, index) in hotNews" :key="item.id" @click="goToNews(item.id)">
                <div class="hot-news-item">
                  <span class="hot-news-rank" :class="{ 'top-rank': index < 3 }">{{
                    index + 1
                  }}</span>
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
import Breadcrumb from '@/components/Breadcrumb.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import {
  CalendarOutlined,
  EyeOutlined,
  HeartOutlined,
  LinkOutlined,
  ShareAltOutlined,
  TagOutlined,
  UserOutlined,
  WechatOutlined,
  WeiboOutlined
} from '@ant-design/icons-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import chenci from '@/assets/images/chenci.jpg'
import factory from '@/assets/images/factory.jpg'
import gaonai from '@/assets/images/gaonai.png'
import rongyu4 from '@/assets/images/rongyu4.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import tanhuada from '@/assets/images/tanhuada.jpg'
import tanhuaguan from '@/assets/images/tanhuaguan.jpg'
import taoci from '@/assets/images/taoci.jpg'
import taocifu from '@/assets/images/taocifu.png'
import taocinai from '@/assets/images/taocinai.jpg'
import taociwan from '@/assets/images/taociwan.jpg'

const { setSEO } = useSEO()

const route = useRoute()
const router = useRouter()
const newsId = Number(route.params.id)

// 所有新闻数据（与News.vue保持一致）
const allNewsData = [
  {
    id: 1,
    title: '陶瓷耐磨管制造商如何保证产品质量？',
    summary:
      '陶瓷耐磨管制造商保证产品质量的方法有很多，包括原材料质量控制、生产工艺优化、质量检测体系建设等多个方面。',
    date: new Date('2023-12-01'),
    views: 2156,
    likes: 45,
    shares: 12,
    author: '岱威技术部',
    category: '技术动态',
    priority: '重要',
    coverImage: taoci,
    content: `
      <p>陶瓷耐磨管制造商保证产品质量的方法有很多，以下是一些常见的措施。</p>

      <h2>1. 原材料质量控制</h2>
      <p>首先，陶瓷耐磨管制造商需要确保原材料的质量。由于陶瓷耐磨管的生产过程需要使用一定的原材料，如陶瓷粉末、粘结剂等，这些原材料的质量直接影响到最终产品的性能。因此，制造商需要建立严格的原材料采购标准，选择优质的供应商，并对每批原材料进行质量检测。</p>

      <h2>2. 生产工艺优化</h2>
      <p>其次，制造商需要不断优化生产工艺。陶瓷耐磨管的生产工艺包括配料、成型、烧结等多个环节，每个环节都需要严格控制工艺参数。制造商需要根据产品的具体要求，调整工艺参数，确保产品的性能达到设计要求。</p>

      <h2>3. 质量检测体系</h2>
      <p>建立完善的质量检测体系是保证产品质量的重要手段。制造商需要配备先进的检测设备，建立完善的检测流程，对产品的各项性能指标进行全面检测。包括硬度测试、耐磨性测试、抗冲击性测试等。</p>

      <h2>4. 质量管理体系认证</h2>
      <p>通过ISO9001等国际质量管理体系认证，建立标准化的质量管理流程，确保产品质量的稳定性和可靠性。同时，定期进行内部审核和管理评审，持续改进质量管理体系。</p>

      <h2>5. 客户反馈与持续改进</h2>
      <p>重视客户反馈，建立客户满意度调查机制，根据客户的使用情况和反馈意见，不断改进产品设计和生产工艺，提升产品质量和客户满意度。</p>
    `,
    tags: ['陶瓷耐磨管', '质量保证', '制造工艺', '产品质量', '质量管理']
  },
  {
    id: 2,
    title: '哪些行业能够受益于耐磨管？',
    summary:
      '耐磨管是一种使用特殊材料制成的管道，具有良好的耐磨性能。它在很多行业中能够发挥重要作用，包括矿业、电力、化工等多个领域。',
    date: new Date('2023-09-22'),
    views: 1876,
    likes: 38,
    shares: 15,
    author: '岱威技术部',
    category: '行业资讯',
    coverImage: shuangjin,
    content: `
      <p>耐磨管是一种使用特殊材料制成的管道，具有良好的耐磨性能。它在很多行业中能够发挥重要作用，下面我将详细介绍几个主要受益于耐磨管的行业。</p>

      <h2>1. 矿业</h2>
      <p>矿业是耐磨管的主要应用领域之一。在矿物开采和处理过程中，需要输送大量的矿石、矿浆等磨蚀性物料。传统的钢管在这种环境下很容易被磨损，而耐磨管能够有效抵抗磨损，延长使用寿命，降低维护成本。</p>

      <h2>2. 电力行业</h2>
      <p>在火力发电厂中，需要输送煤粉、灰渣等磨蚀性物料。耐磨管在这些应用中表现出色，能够承受高温、高压和强磨损的工作环境，确保电厂的稳定运行。</p>

      <h2>3. 化工行业</h2>
      <p>化工行业中经常需要输送各种腐蚀性和磨蚀性的化学物质。耐磨管不仅具有优异的耐磨性能，还具有良好的耐腐蚀性能，能够满足化工行业的特殊要求。</p>

      <h2>4. 水泥行业</h2>
      <p>水泥生产过程中需要输送水泥粉、石灰石粉等磨蚀性物料。耐磨管能够有效抵抗这些物料的磨损，保证生产线的连续稳定运行。</p>
    `,
    tags: ['耐磨管', '行业应用', '矿业', '电力', '化工']
  },
  {
    id: 3,
    title: '陶瓷耐磨管的热传导特性如何？',
    summary:
      '陶瓷耐磨管是一种特殊的陶瓷制品，具有优异的耐磨性能和高温稳定性。它广泛应用于工业领域中对耐磨性和导热性要求较高的场合。',
    date: new Date('2023-09-15'),
    views: 1543,
    likes: 32,
    shares: 8,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: tanhuaguan,
    content: `
      <p>陶瓷耐磨管是一种特殊的陶瓷制品，具有优异的耐磨性能和高温稳定性。它广泛应用于工业领域中对耐磨性和导热性要求较高的场合，比如煤矿、钢铁、电力等行业中的输送和处理磨料介质的管道系统。</p>

      <h2>1. 热传导机理</h2>
      <p>陶瓷耐磨管的热传导主要通过晶格振动（声子）进行。由于陶瓷材料的晶体结构相对稳定，声子的传播路径较为规整，因此具有良好的热传导性能。</p>

      <h2>2. 导热系数</h2>
      <p>陶瓷耐磨管的导热系数通常在20-200 W/(m·K)之间，具体数值取决于陶瓷的成分和制备工艺。相比于金属材料，陶瓷的导热系数较低，但在高温环境下表现更加稳定。</p>

      <h2>3. 温度稳定性</h2>
      <p>陶瓷耐磨管具有优异的高温稳定性，能够在1000°C以上的高温环境下保持稳定的性能。这使得它在高温工业应用中具有独特的优势。</p>

      <h2>4. 应用优势</h2>
      <p>在实际应用中，陶瓷耐磨管的热传导特性使其能够有效地传递热量，同时保持结构稳定，这对于需要温度控制的工业过程非常重要。</p>
    `,
    tags: ['陶瓷耐磨管', '热传导', '高温稳定性', '技术特性']
  },
  {
    id: 4,
    title: '耐磨管适用于哪些高温环境？',
    summary: '耐磨管适用于高温环境的主要原因是其材料具有优异的高温耐受性和良好的抗磨损性能。',
    date: new Date('2023-08-10'),
    views: 1324,
    likes: 28,
    shares: 6,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: gaonai,
    content: `
      <p>耐磨管适用于高温环境的主要原因是其材料具有优异的高温耐受性和良好的抗磨损性能。下面将介绍几种常见的高温环境，耐磨管的应用和优势。</p>

      <h2>1. 炉窑行业</h2>
      <p>炉窑是温度较高的工业设备，耐磨管在其中发挥重要作用。在水泥窑、石灰窑等设备中，耐磨管能够承受1000°C以上的高温，同时抵抗物料的磨损。</p>

      <h2>2. 钢铁冶炼</h2>
      <p>在钢铁冶炼过程中，需要输送高温的铁水、钢水等物质。耐磨管能够在这种极端高温环境下保持稳定的性能，确保生产安全。</p>

      <h2>3. 电力行业</h2>
      <p>火力发电厂的锅炉系统中，耐磨管用于输送高温烟气和灰渣。其优异的耐高温性能确保了电厂的稳定运行。</p>
    `,
    tags: ['耐磨管', '高温环境', '炉窑', '工业应用']
  },
  {
    id: 5,
    title: '陶瓷耐磨管的制造工艺与材料有何差异？',
    summary:
      '陶瓷耐磨管是一种具有高耐磨性能的管道材料，广泛应用于各个领域如冶金、化工、矿山、电力等。',
    date: new Date('2023-07-24'),
    views: 1198,
    likes: 25,
    shares: 9,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: taocinai,
    content: `
      <p>陶瓷耐磨管是一种具有高耐磨性能的管道材料，广泛应用于各个领域如冶金、化工、矿山、电力等。它主要用于输送高温、高压、酸碱和腐蚀介质的管道系统中，能够长时间保持较高的耐磨性能和稳定性。</p>

      <h2>1. 制造工艺差异</h2>
      <p>陶瓷耐磨管的制造工艺主要包括原料配制、成型、干燥、烧结等步骤。不同厂家在工艺参数控制上存在差异，如烧结温度、保温时间、升温速率等，这些都会影响最终产品的性能。</p>

      <h2>2. 材料组成差异</h2>
      <p>陶瓷耐磨管的主要材料包括氧化铝、碳化硅、氮化硅等。不同材料的配比和纯度会直接影响产品的耐磨性、耐腐蚀性和机械强度。</p>

      <h2>3. 结构设计差异</h2>
      <p>陶瓷耐磨管的结构设计包括内衬厚度、外壳材料、连接方式等。合理的结构设计能够充分发挥陶瓷材料的优势，提高产品的整体性能。</p>
    `,
    tags: ['陶瓷耐磨管', '制造工艺', '材料科学', '技术创新']
  },
  {
    id: 6,
    title: '耐磨管可以在哪些领域应用？',
    summary:
      '耐磨管是一种具有高耐磨性能的管材，广泛应用于多个领域，包括工业、交通运输、能源、建筑等。',
    date: new Date('2023-07-06'),
    views: 1087,
    likes: 22,
    shares: 7,
    author: '岱威技术部',
    category: '行业资讯',
    coverImage: factory,
    content: `
      <p>耐磨管是一种具有高耐磨性能的管材，广泛应用于多个领域，包括工业、交通运输、能源、建筑等。在工业生产中，耐磨管常用于输送具有磨蚀性的物料，如矿石、煤炭、水泥等。</p>

      <h2>1. 工业生产领域</h2>
      <p>在钢铁、有色金属、化工、建材等工业生产中，耐磨管用于输送各种磨蚀性物料，如矿粉、煤粉、水泥等，能够有效延长管道使用寿命。</p>

      <h2>2. 电力行业</h2>
      <p>火力发电厂中，耐磨管用于输送煤粉、飞灰等物料，在脱硫、除尘等环保设备中也有广泛应用。</p>

      <h2>3. 矿山开采</h2>
      <p>在矿山开采和选矿过程中，耐磨管用于输送矿浆、尾矿等高磨蚀性物料，是矿山生产不可缺少的设备。</p>
    `,
    tags: ['耐磨管', '应用领域', '工业生产', '交通运输']
  },
  {
    id: 7,
    title: '双金属耐磨管：对于耐磨材料的选用有哪些要求？',
    summary:
      '双金属耐磨管是一种磨损和腐蚀性能较强的管道材料，广泛应用于输送具有高腐蚀度、高磨损度物料的行业。',
    date: new Date('2023-05-09'),
    views: 956,
    likes: 19,
    shares: 5,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: tanhuada,
    content: `
      <p>双金属耐磨管是一种磨损和腐蚀性能较强的管道材料，广泛应用于输送具有高腐蚀度、高磨损度物料的行业，例如矿山、电站、化工、冶金等领域。对于耐磨材料的选用，需要满足以下几个方面的要求。</p>

      <h2>1. 硬度要求</h2>
      <p>耐磨材料必须具有足够的硬度，通常要求硬度达到HRC58以上，以抵抗物料的磨蚀作用。</p>

      <h2>2. 韧性要求</h2>
      <p>在保证硬度的同时，材料还需要具有一定的韧性，以防止在冲击载荷下发生脆性断裂。</p>

      <h2>3. 耐腐蚀性要求</h2>
      <p>根据输送介质的化学性质，选择具有相应耐腐蚀性能的材料，确保管道在腐蚀性环境下的长期稳定运行。</p>
    `,
    tags: ['双金属耐磨管', '材料选用', '耐磨性能', '工程应用']
  },
  {
    id: 8,
    title: '耐磨陶瓷贴片怎么安装？',
    summary: '耐磨陶瓷贴片是一种常用于室内地面铺装的材料，具有高强度、耐磨损、耐压力等特点。',
    date: new Date('2023-04-15'),
    views: 834,
    likes: 16,
    shares: 4,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: taocifu,
    content: `
      <p>耐磨陶瓷贴片是一种常用于室内地面铺装的材料，具有高强度、耐磨损、耐压力等特点，广泛应用于商业建筑、公共场所、机场、火车站等场所。安装时需要注意以下几点：</p>

      <h2>1. 准备工作</h2>
      <p>安装前需要对基层进行清理，确保表面平整、干燥、无油污。检查陶瓷贴片的质量，确保无裂纹、缺角等缺陷。</p>

      <h2>2. 基层处理</h2>
      <p>对基层进行打磨处理，增加表面粗糙度，提高粘接强度。清除表面的灰尘和杂物。</p>

      <h2>3. 施工工艺</h2>
      <p>使用专用胶粘剂进行粘接，确保胶层厚度均匀。按照设计要求进行排列，注意接缝的处理。</p>
    `,
    tags: ['陶瓷贴片', '安装工艺', '施工技术', '应用指南']
  },
  {
    id: 9,
    title: '衬瓷管道安装技术要求',
    summary: '衬瓷管道是一种常用的管道，广泛应用于化工、冶金、电力、航空航天、医药等领域。',
    date: new Date('2023-03-22'),
    views: 723,
    likes: 14,
    shares: 3,
    author: '岱威技术部',
    category: '技术动态',
    coverImage: chenci,
    content: `
      <p>衬瓷管道是一种常用的管道，广泛应用于化工、冶金、电力、航空航天、医药等领域。它具备耐腐蚀、耐磨损等优异的性能，因此在含有强酸、强碱、高温等恶劣环境下作业时，衬瓷管道是首选的管道材料。</p>

      <h2>1. 安装前准备</h2>
      <p>检查管道及配件的质量，确保符合设计要求。准备必要的安装工具和材料。</p>

      <h2>2. 安装技术要求</h2>
      <p>管道安装应按照设计图纸进行，确保管道走向正确。连接处应密封良好，防止泄漏。</p>

      <h2>3. 质量控制</h2>
      <p>安装过程中应严格控制质量，进行必要的检测和试验，确保安装质量符合要求。</p>
    `,
    tags: ['衬瓷管道', '安装技术', '技术要求', '工程规范']
  },
  {
    id: 11,
    title: '耐磨陶瓷管的优势和用途',
    summary: '传统的合金钢管、不锈钢管等寿命短，长时间使用会腐蚀，给企业造成一定的损失。',
    date: new Date('2023-02-24'),
    views: 567,
    likes: 11,
    shares: 3,
    author: '岱威技术部',
    category: '行业资讯',
    coverImage: taociwan,
    content: `
      <p>传统的合金钢管、不锈钢管等寿命短，长时间使用会腐蚀，给企业造成一定的损失。随着技术的日新月异，取而代之的是耐磨陶瓷管，耐磨陶瓷管不仅耐磨、耐高温、抗腐蚀、寿命长，而且性价比高。</p>

      <h2>1. 主要优势</h2>
      <p>耐磨陶瓷管具有优异的耐磨性能，使用寿命比普通钢管长5-10倍。同时具有良好的耐腐蚀性和耐高温性能。</p>

      <h2>2. 应用用途</h2>
      <p>广泛应用于电力、冶金、矿山、化工、建材等行业，用于输送各种磨蚀性物料。</p>

      <h2>3. 经济效益</h2>
      <p>虽然初期投资较高，但由于使用寿命长，维护成本低，总体经济效益显著。</p>
    `,
    tags: ['耐磨陶瓷管', '产品优势', '应用用途', '性价比']
  },
  {
    id: 12,
    title: '岱威创新管业荣获"山东省专精特新企业"称号',
    summary:
      '近日，山东岱威创新管业有限公司凭借在耐磨管道领域的技术创新和市场表现，成功获得"山东省专精特新企业"荣誉称号。',
    date: new Date('2024-01-15'),
    views: 2345,
    likes: 56,
    shares: 18,
    author: '岱威管业',
    category: '企业新闻',
    priority: '重要',
    coverImage: rongyu4,
    content: `
      <p>近日，山东岱威创新管业有限公司凭借在耐磨管道领域的技术创新和市场表现，成功获得"山东省专精特新企业"荣誉称号。这一荣誉的获得，标志着公司在专业化、精细化、特色化、新颖化发展道路上取得了重要成果。</p>

      <h2>1. 技术创新成果</h2>
      <p>公司在陶瓷耐磨管、双金属耐磨管等产品的研发和生产方面取得了重大突破，拥有多项自主知识产权，产品技术水平达到国内领先水平。</p>

      <h2>2. 市场表现优异</h2>
      <p>公司产品广泛应用于电力、化工、矿山、水泥等行业，获得了客户的一致好评，市场占有率不断提升。</p>

      <h2>3. 未来发展规划</h2>
      <p>公司将继续加大研发投入，不断提升产品质量和技术水平，为客户提供更优质的产品和服务，努力成为行业领军企业。</p>
    `,
    tags: ['企业荣誉', '专精特新', '技术创新', '岱威创新']
  }
]

// 根据ID获取当前新闻数据
const newsData = ref(allNewsData.find(news => news.id === newsId) || allNewsData[0])

// 面包屑数据
const breadcrumbItems = computed(() => [
  { path: '/news', text: '新闻中心', icon: '📰' },
  { text: newsData.value.title, icon: '📄' }
])

// 计算阅读时间
const readingTime = computed(() => {
  const wordsPerMinute = 200
  const wordCount = newsData.value.content.replace(/<[^>]*>/g, '').length
  return Math.ceil(wordCount / wordsPerMinute)
})

// 相关新闻 - 动态生成，排除当前新闻
const relatedNews = computed(() => {
  return allNewsData
    .filter(news => news.id !== newsData.value.id)
    .slice(0, 4)
    .map(news => ({
      id: news.id,
      title: news.title,
      date: news.date,
      coverImage: news.coverImage
    }))
})

// 热门新闻 - 按阅读量排序，排除当前新闻
const hotNews = computed(() => {
  return allNewsData
    .filter(news => news.id !== newsData.value.id)
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
    .map(news => ({
      id: news.id,
      title: news.title,
      views: news.views
    }))
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

// 跳转到新闻详情
const goToNews = id => {
  router.push(`/news/${id}`)
}

// 点赞功能
const handleLike = () => {
  newsData.value.likes = (newsData.value.likes || 0) + 1
  console.log('点赞成功')
}

// 显示分享模态框
const showShareModal = () => {
  console.log('显示分享模态框')
}

// 分享功能
const handleShare = platform => {
  newsData.value.shares = (newsData.value.shares || 0) + 1
  console.log('分享到:', platform)
}

// 监听路由变化，更新新闻数据
const updateNewsData = () => {
  const currentNewsId = Number(route.params.id)
  const foundNews = allNewsData.find(news => news.id === currentNewsId)
  if (foundNews) {
    newsData.value = foundNews

    // 更新SEO
    setSEO({
      title: foundNews.title,
      description: foundNews.summary || foundNews.content.substring(0, 150),
      keywords: `${foundNews.tags.join(',')},新闻,岱威管业`
    })

    // 页面滚动到顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    console.log('新闻数据已更新:', foundNews.title)
  } else {
    console.warn('未找到ID为', currentNewsId, '的新闻')
  }
}

// 监听路由参数变化
watch(() => route.params.id, updateNewsData, { immediate: false })

onMounted(() => {
  updateNewsData()
})
</script>

<style scoped>
.news-detail-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.main-content {
  padding: 0 0 40px;
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
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.1);
  padding: 40px;
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

.article-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(22, 119, 255, 0.1);
}

.article-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.category-badge {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.reading-time {
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
}

.article-title {
  font-size: 32px;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.3;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.article-summary {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
  padding: 16px;
  background: rgba(22, 119, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #1677ff;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748b;
  font-size: 14px;
}

.meta-left {
  display: flex;
  gap: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

.meta-right {
  display: flex;
  gap: 12px;
}

.article-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid rgba(22, 119, 255, 0.2);
  background: rgba(22, 119, 255, 0.05);
  color: #1677ff;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  transform: translateY(-2px);
}

.article-cover {
  margin: 32px 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.15);
}

.article-cover img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-cover:hover img {
  transform: scale(1.02);
}

.article-content {
  font-size: 16px;
  line-height: 1.8;
  color: #374151;
  margin: 32px 0;
}

.article-content h2 {
  font-size: 22px;
  margin: 40px 0 20px;
  color: #1e293b;
  font-weight: 700;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-left: 16px;
  border-left: 4px solid #1677ff;
}

.article-content p {
  margin-bottom: 20px;
  text-align: justify;
}

.article-footer {
  margin-top: 48px;
  padding: 32px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  border: 1px solid rgba(22, 119, 255, 0.1);
}

.article-tags {
  margin-bottom: 24px;
}

.tags-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 12px;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.article-tag {
  background: linear-gradient(135deg, rgba(22, 119, 255, 0.1) 0%, rgba(67, 198, 172, 0.1) 100%);
  color: #1677ff;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
}

.article-tag:hover {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
  transform: translateY(-2px);
}

.article-actions-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.action-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
}

.article-share {
  display: flex;
  align-items: center;
  gap: 12px;
}

.share-label {
  color: #64748b;
  font-weight: 600;
}

.share-buttons {
  display: flex;
  gap: 8px;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.share-btn.weixin {
  background: #07c160;
  color: #ffffff;
}

.share-btn.weibo {
  background: #e6162d;
  color: #ffffff;
}

.share-btn.link {
  background: #64748b;
  color: #ffffff;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.news-sidebar {
  width: 320px;
  flex-shrink: 0;
}

.sidebar-block {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(22, 119, 255, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid rgba(22, 119, 255, 0.1);
  transition: all 0.3s ease;
}

.sidebar-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(22, 119, 255, 0.15);
}

.sidebar-title {
  font-size: 16px;
  color: #1e293b;
  margin-bottom: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.related-news {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.related-news-item {
  display: flex;
  gap: 12px;
  padding: 12px;
  background: rgba(22, 119, 255, 0.02);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.related-news-item:hover {
  background: rgba(22, 119, 255, 0.05);
  border-left-color: #1677ff;
  transform: translateX(4px);
}

.related-news-item img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.related-news-info {
  flex: 1;
  min-width: 0;
}

.related-news-title {
  font-size: 13px;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 6px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.related-news-date {
  font-size: 11px;
  color: #94a3b8;
  font-weight: 500;
}

.hot-news {
  list-style: none;
  padding: 0;
  margin: 0;
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
  background: #f1f5f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  flex-shrink: 0;
}

.hot-news-rank.top-rank {
  background: linear-gradient(135deg, #1677ff 0%, #43c6ac 100%);
  color: #ffffff;
}

.hot-news-title {
  flex: 1;
  font-size: 13px;
  color: #1e293b;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .news-sidebar {
    width: 280px;
  }

  .news-content {
    padding: 32px;
  }
}

@media (max-width: 1024px) {
  .news-container {
    flex-direction: column;
  }

  .news-sidebar {
    width: 100%;
  }

  .article-actions-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .action-stats {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .news-container {
    padding: 0 16px;
  }

  .news-content {
    padding: 24px;
  }

  .article-title {
    font-size: 24px;
  }

  .article-summary {
    font-size: 14px;
    padding: 12px;
  }

  .article-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .meta-left {
    gap: 12px;
  }

  .article-content h2 {
    font-size: 20px;
    margin: 32px 0 16px;
  }

  .article-footer {
    padding: 24px;
  }

  .share-buttons {
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .news-content {
    padding: 16px;
  }

  .article-title {
    font-size: 20px;
  }

  .article-category {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .meta-left {
    flex-direction: column;
    gap: 8px;
  }

  .article-actions {
    flex-direction: column;
    gap: 8px;
  }

  .action-btn {
    width: 100%;
    justify-content: center;
  }

  .article-footer {
    padding: 16px;
  }

  .action-stats {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
