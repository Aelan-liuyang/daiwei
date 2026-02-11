<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- Hero Banner - 极光渐变工业科技版 -->
      <section class="hero-banner">
        <!-- 动态 Aurora 背景 -->
        <div class="aurora-bg">
          <div class="aurora aurora-1"></div>
          <div class="aurora aurora-2"></div>
          <div class="aurora aurora-3"></div>
        </div>

        <!-- 背景图片层 -->
        <div class="hero-bg">
          <LazyImage :src="bannerImage" alt="岱威管业" image-class="hero-bg-img" preload />
          <div class="hero-overlay"></div>
        </div>

        <!-- 浮动几何装饰 - 增强版 -->
        <div class="hero-decorations">
          <div class="decor-glow"></div>
          <svg class="decor-item item-1" width="500" height="500" viewBox="0 0 500 500" fill="none">
            <circle cx="250" cy="250" r="249" stroke="url(#grad1)" stroke-width="2" />
            <circle
              cx="250"
              cy="250"
              r="180"
              stroke="url(#grad2)"
              stroke-width="1"
              stroke-dasharray="15 15"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #08a5ff; stop-opacity: 0.4" />
                <stop offset="100%" style="stop-color: #00d4ff; stop-opacity: 0.1" />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 0.3" />
                <stop offset="100%" style="stop-color: #08a5ff; stop-opacity: 0.1" />
              </linearGradient>
            </defs>
          </svg>
          <svg class="decor-item item-2" width="300" height="300" viewBox="0 0 300 300" fill="none">
            <rect
              x="75"
              y="75"
              width="150"
              height="150"
              stroke="url(#grad3)"
              stroke-width="2"
              transform="rotate(45 150 150)"
            />
            <rect
              x="100"
              y="100"
              width="100"
              height="100"
              stroke="url(#grad4)"
              stroke-width="1"
              transform="rotate(45 150 150)"
            />
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #08a5ff; stop-opacity: 0.5" />
                <stop offset="100%" style="stop-color: #00ffff; stop-opacity: 0.2" />
              </linearGradient>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color: #ffffff; stop-opacity: 0.4" />
                <stop offset="100%" style="stop-color: #08a5ff; stop-opacity: 0.1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="decor-dot dot-1"></div>
          <div class="decor-dot dot-2"></div>
          <div class="decor-dot dot-3"></div>
        </div>

        <div class="hero-content">
          <!-- 玻璃态徽章 -->
          <div class="hero-badge">
            <div class="badge-glow"></div>
            <svg
              class="badge-icon-svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span>工业管道系统整体解决方案提供商</span>
          </div>

          <h1 class="hero-title">
            <span class="title-main text-balance">
              <span
                class="char-animate"
                v-for="(char, i) in '岱威创新管业'.split('')"
                :key="i"
                :style="{ animationDelay: `${i * 0.1}s` }"
                >{{ char }}</span
              >
            </span>
            <span class="title-sub mobile-hidden">
              <span class="sub-item">耐磨</span>
              <span class="sub-divider">·</span>
              <span class="sub-item">耐腐蚀</span>
              <span class="sub-divider">·</span>
              <span class="sub-item">耐冲击</span>
              <span class="sub-divider">·</span>
              <span class="sub-item">耐热</span>
            </span>
          </h1>

          <p class="hero-desc text-pretty mobile-hidden">
            15年专业经验，致力于工业管道设计、智能制造、安装施工以及智能运维服务，为全球工业领域提供高品质管道产品。
          </p>

          <div class="hero-actions">
            <a-button
              type="primary"
              size="large"
              class="cta-btn primary glow-effect"
              @click="navigateTo('/products')"
            >
              <span>探索产品中心</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a-button>
            <a-button
              size="large"
              class="cta-btn secondary mobile-hidden glass-effect"
              @click="navigateTo('/contact')"
            >
              <span>立即咨询</span>
            </a-button>
          </div>
        </div>

        <!-- 底部渐变遮罩 -->
        <div class="hero-bottom-fade"></div>
      </section>

      <!-- Bento 布局：公司概览与核心优势 - 玻璃态增强 -->
      <section class="bento-overview">
        <div class="aurora-bg-subtle">
          <div class="aurora aurora-subtle-1"></div>
          <div class="aurora aurora-subtle-2"></div>
        </div>
        <div class="container">
          <div class="bento-grid">
            <!-- 介绍大卡片 - 渐变背景 -->
            <div class="bento-item intro-card glass-card">
              <div class="card-shine"></div>
              <div class="bento-content">
                <span class="bento-tag">关于我们</span>
                <h2>致力于管道技术创新</h2>
                <p>
                  山东岱威创新管业有限公司，是国内领先的工业管道系统整体解决方案提供商。我们拥有自主研发的智能管道设计软件和一支经验丰富的工程技术团队，集研发、生产、经营为一体。
                </p>
                <div class="bento-footer">
                  <a-button
                    type="link"
                    @click="navigateTo('/about')"
                    class="read-more magnetic-btn"
                  >
                    了解更多
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a-button>
                </div>
              </div>
            </div>

            <!-- 数据统计卡片 - 发光效果 -->
            <div class="bento-item stats-card glow-card">
              <div class="stats-grid">
                <div v-for="(stat, index) in animatedStats" :key="index" class="stat-box">
                  <div class="stat-icon-wrap">
                    <svg
                      v-if="index === 0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <svg
                      v-else-if="index === 1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <svg
                      v-else
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span class="stat-num">{{ stat.value }}{{ stat.suffix }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>

            <!-- 核心特色 1 - 悬浮卡片 -->
            <div class="bento-item feature-card float-card">
              <div class="feature-icon-wrap pulse-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>品质保障</h3>
              <p>高新技术企业，多项自主知识产权，品质源于专业。</p>
              <div class="feature-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <!-- 核心特色 2 -->
            <div class="bento-item feature-card float-card">
              <div class="feature-icon-wrap pulse-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                  />
                </svg>
              </div>
              <h3>按需定制</h3>
              <p>提供适应不同介质环境的一体化解决方案。</p>
              <div class="feature-arrow">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 问题解决方案 - 信任构建 - 3D卡片效果 -->
      <section class="trust-section">
        <div class="container">
          <div class="section-header">
            <div class="section-badge floating-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>行业痛点</span>
            </div>
            <h2>解决您的管道选型难题</h2>
            <p class="section-subtitle">15年深耕工业管道领域，我们比任何人都懂您的顾虑</p>
          </div>

          <div class="trust-grid">
            <div
              v-for="(item, index) in problemSolutions"
              :key="index"
              class="trust-item tilt-card"
              @mouseenter="handleTiltEnter"
              @mouseleave="handleTiltLeave"
              @mousemove="handleTiltMove"
            >
              <div class="trust-icon-box">
                <component :is="item.icon" />
                <div class="icon-glow"></div>
              </div>
              <div class="trust-text">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
              <div class="card-shine-effect"></div>
            </div>
          </div>

          <div class="trust-cta">
            <div class="cta-glow-bg"></div>
            <div class="cta-inner">
              <h3>定制您的专属解决方案</h3>
              <p>专业技术团队为您提供现场实地勘测与设计服务</p>
              <a-button
                type="primary"
                size="large"
                @click="navigateTo('/contact')"
                class="glow-button pulse-btn"
              >
                <span>立即申请现场勘测</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a-button>
            </div>
          </div>
        </div>
      </section>

      <!-- 产品中心 - 卡片悬浮效果 -->
      <section class="products-modern">
        <div class="container">
          <div class="section-header">
            <div class="section-badge floating-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
              </svg>
              <span>核心产品</span>
            </div>
            <h2>卓越品质 · 工业之选</h2>
            <p class="section-subtitle">采用先进材料工艺，为严苛工况提供持久耐用的管道保障</p>
          </div>

          <div class="modern-product-grid">
            <div
              v-for="(product, index) in featuredProducts"
              :key="product.id"
              class="product-item-modern product-card"
              @click="navigateToProduct(product)"
              @mouseenter="handleCardHover"
              @mouseleave="handleCardLeave"
            >
              <div class="product-media">
                <LazyImage
                  :src="product.img"
                  :alt="product.title"
                  aspect-ratio="75%"
                  image-class="product-media-img"
                />
                <div class="product-tag-float">{{ product.category }}</div>
                <div class="media-overlay">
                  <div class="view-btn">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>查看详情</span>
                  </div>
                </div>
              </div>
              <div class="product-detail">
                <h3>{{ product.title }}</h3>
                <div class="product-tags">
                  <span v-for="tag in product.tags" :key="tag">{{ tag }}</span>
                </div>
                <p>{{ product.description }}</p>
                <div class="product-link">
                  <span>了解更多</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="section-footer-cta">
            <a-button @click="navigateTo('/products')" class="outline-btn glow-outline">
              <span>探索全系产品线</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a-button>
          </div>
        </div>
      </section>

      <!-- 服务优势 - 极简排版 - 极光背景 -->
      <section class="services-modern">
        <div class="services-aurora">
          <div class="aurora aurora-s1"></div>
          <div class="aurora aurora-s2"></div>
        </div>
        <div class="container">
          <div class="section-header light">
            <h2>一站式全生命周期服务</h2>
            <p class="section-subtitle light">
              从设计、制造到安装及后期运维，我们为您提供全方位的专业支持
            </p>
          </div>
          <div class="services-modern-grid">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="service-box-modern service-card"
            >
              <div class="service-number">0{{ index + 1 }}</div>
              <div class="service-icon-modern" v-html="service.icon"></div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul class="service-feature-list">
                <li v-for="feature in service.features" :key="feature">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 工程案例 - 视觉大图 - 视差效果 -->
      <section class="cases-modern">
        <div class="container">
          <div class="section-header">
            <div class="section-badge floating-badge">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
              <span>应用现场</span>
            </div>
            <h2>服务千行百业</h2>
            <p class="section-subtitle">积累了丰富的电力、矿山、化工、冶金等行业实施经验</p>
          </div>
          <div class="cases-row">
            <div
              v-for="(caseItem, index) in cases"
              :key="index"
              class="case-card-modern case-card"
              @click="navigateToCase(caseItem)"
            >
              <div class="case-img-wrap">
                <LazyImage :src="caseItem.img" :alt="caseItem.title" image-class="case-img-full" />
                <div class="case-meta-overlay">
                  <span class="case-tag">{{ caseItem.type }}</span>
                  <h3>{{ caseItem.title }}</h3>
                  <p class="case-desc">{{ caseItem.desc }}</p>
                </div>
                <div class="case-shine"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 订阅与联络 -->
      <section class="newsletter-modern">
        <div class="container">
          <NewsletterSubscribe />
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
import NewsletterSubscribe from '@/components/NewsletterSubscribe.vue'
import { useSEO } from '@/composables/useSEO'
import { h, onMounted, ref } from 'vue'
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

// 路由和SEO
const router = useRouter()
const { setSEO } = useSEO()

// Hero Banner 数据
const bannerImage = factoryImg

// 数字动画数据
const animatedStats = ref([
  { value: 0, target: 15, suffix: '+', label: '年行业经验' },
  { value: 0, target: 200, suffix: '+', label: '专利技术' },
  { value: 0, target: 1000, suffix: '+', label: '合作客户' }
])

// 问题解决方案数据
const problemSolutions = [
  {
    title: '精准选型',
    desc: '针对不同工况环境，提供最匹配的材料与结构方案，解决选型难点。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [
          h('circle', { cx: '11', cy: '11', r: '8' }),
          h('line', { x1: '21', y1: '21', x2: '16.65', y2: '16.65' })
        ]
      )
  },
  {
    title: '实地勘测',
    desc: '现场实际勘测设计，确保尺寸精确无误，彻底解决更换与匹配难题。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [
          h('path', { d: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z' }),
          h('polyline', { points: '13 2 13 9 20 9' })
        ]
      )
  },
  {
    title: '安全生产',
    desc: '严苛的质量控制体系，确保管道长周期稳定运行，保障生产安全。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })]
      )
  },
  {
    title: '高效交付',
    desc: '自厂一体化生产流程，各类异形件快速响应，缩短工程周期。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [
          h('rect', { x: '1', y: '3', width: '15', height: '13' }),
          h('polygon', { points: '16 8 20 8 23 11 23 16 16 16 16 8' }),
          h('circle', { cx: '5.5', cy: '18.5', r: '2.5' }),
          h('circle', { cx: '18.5', cy: '18.5', r: '2.5' })
        ]
      )
  },
  {
    title: '响应服务',
    desc: '2小时内响应，24小时内专业人员到场指导，全程无忧售后。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [h('path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' })]
      )
  },
  {
    title: '成本优化',
    desc: '通过科学的材料选型和系统设计，帮助客户降低总体拥有成本，提升投资回报率。',
    icon: () =>
      h(
        'svg',
        {
          width: '32',
          height: '32',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': '2'
        },
        [
          h('circle', { cx: '12', cy: '12', r: '10' }),
          h('path', { d: 'M16 8h-6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6' }),
          h('path', { d: 'M12 12h.01' })
        ]
      )
  }
]

// 产品数据
const featuredProducts = [
  {
    id: 1,
    title: '碳化硅聚合陶瓷管',
    category: '陶瓷复合系列',
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
    title: '陶瓷内衬复合钢管',
    category: '刚玉陶瓷系列',
    description: '内衬刚玉陶瓷，外层碳钢结构，特别适用于高磨损、高压工况。',
    img: taoci,
    tags: ['刚玉内衬', '高压适配', '标准接口']
  },
  {
    id: 4,
    title: '高耐磨陶瓷贴片',
    category: '陶瓷贴片系列',
    description: '采用高强度陶瓷贴片与钢管焊接，具有良好的耐磨性和抗冲击性能。',
    img: gaonai,
    tags: ['陶瓷贴片', '焊接工艺', '抗冲击']
  },
  {
    id: 5,
    title: '龟甲网耐磨陶瓷管',
    category: '增强结构系列',
    description: '采用龟甲网结构增强陶瓷层结合力，抗冲击性能卓越。',
    img: guijia1,
    tags: ['抗冲击', '大口径', '定制化']
  },
  {
    id: 6,
    title: '阻燃型衬瓷材料',
    category: '防护涂层系列',
    description: '具有优异的阻燃性能和耐高温特性，适用于特殊工况环境的防护。',
    img: zuran1,
    tags: ['阻燃型', '耐高温', '防护涂层']
  }
]

// 服务数据
const services = [
  {
    title: '现场勘测',
    description: '技术团队亲临现场，实际测量工况尺寸，提供精准设计方案。',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>',
    features: ['工况分析', '实地测绘', '风险评估']
  },
  {
    title: '定制生产',
    description: '自有工厂柔性制造，满足各种异形件、非标件定制化需求。',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7h-9L7 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" /><line x1="12" y1="11" x2="12" y2="17" /><line x1="9" y1="14" x2="15" y2="14" /></svg>',
    features: ['非标定制', '工艺研发', '快速打样']
  },
  {
    title: '售后支持',
    description: '提供24小时技术咨询与现场指导服务，确保管道长效运行。',
    icon: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>',
    features: ['技术指导', '定期回访', '备件支持']
  }
]

const cases = [
  {
    title: '电力脱硫脱硝系统项目',
    img: anli2,
    type: '电力行业',
    desc: '解决高温腐蚀性介质输送问题。'
  },
  {
    title: '矿山选煤厂输送工程',
    img: anli3,
    type: '矿山行业',
    desc: '煤泥输送耐磨管道整体更换。'
  },
  {
    title: '钢铁厂高炉输送管道',
    img: anli4,
    type: '钢铁行业',
    desc: '抗冲击、耐高温工况防护。'
  }
]

// 动画函数
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

// 3D Tilt 效果
const handleTiltEnter = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  card.style.transition = 'transform 0.1s ease'
}

const handleTiltLeave = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  card.style.transition = 'transform 0.5s ease'
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
}

const handleTiltMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
}

// 卡片悬浮效果
const handleCardHover = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}

const handleCardLeave = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
}

const navigateTo = (path: string) => router.push(path)
const navigateToProduct = (product: any) =>
  router.push({
    path: `/products/${encodeURIComponent(product.title)}`,
    query: { category: product.category, image: product.img }
  })
const navigateToCase = (caseItem: any) =>
  router.push({
    path: `/cases/${encodeURIComponent(caseItem.title)}`,
    query: { image: caseItem.img }
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
  }, 800)

  // 初始化 AOS 动画
  if (typeof window !== 'undefined' && (window as any).AOS) {
    ;(window as any).AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    })
  }
})
</script>

<style scoped>
/* 基础变量 */
:root {
  --primary-glow: rgba(8, 165, 255, 0.5);
  --secondary-glow: rgba(0, 212, 255, 0.3);
  --accent-glow: rgba(100, 200, 255, 0.4);
}

.home-layout {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  overflow-x: hidden;
}

.main-content {
  padding: 0;
  overflow: hidden;
}

/* ==================== Aurora 极光背景 ==================== */
.aurora-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.aurora {
  position: absolute;
  width: 200%;
  height: 200%;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: aurora-move 20s ease-in-out infinite;
}

.aurora-1 {
  background: radial-gradient(ellipse at center, rgba(8, 145, 255, 0.6) 0%, transparent 70%);
  top: -50%;
  left: -50%;
  animation-delay: 0s;
}

.aurora-2 {
  background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.4) 0%, transparent 70%);
  top: -30%;
  right: -30%;
  animation-delay: -7s;
}

.aurora-3 {
  background: radial-gradient(ellipse at center, rgba(100, 150, 255, 0.3) 0%, transparent 70%);
  bottom: -40%;
  left: 20%;
  animation-delay: -14s;
}

@keyframes aurora-move {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(5%, 5%) rotate(5deg) scale(1.1);
  }
  50% {
    transform: translate(-5%, 10%) rotate(-5deg) scale(1);
  }
  75% {
    transform: translate(10%, -5%) rotate(3deg) scale(1.05);
  }
}

/* ==================== Hero Section ==================== */
.hero-banner {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(135deg, #070d16 0%, #0a1628 50%, #0d1f35 100%);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: heroZoom 30s linear infinite alternate;
  opacity: 0.6;
}

@keyframes heroZoom {
  0% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.05) translate(-1%, -1%);
  }
  100% {
    transform: scale(1.1) translate(-2%, -2%);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 30% 20%, rgba(8, 145, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    linear-gradient(180deg, rgba(5, 12, 25, 0.5) 0%, rgba(5, 12, 25, 0.85) 100%);
  z-index: 2;
}

/* 几何装饰 */
.hero-decorations {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
}

.decor-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(8, 145, 255, 0.2) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: glow-pulse 4s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

.decor-item {
  position: absolute;
  opacity: 0.8;
}

.item-1 {
  top: -150px;
  left: -100px;
  animation: rotate 40s linear infinite;
}

.item-2 {
  bottom: 5%;
  right: 5%;
  animation: float-rotate 15s ease-in-out infinite alternate;
}

.decor-dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(8, 145, 255, 0.8);
}

.dot-1 {
  top: 20%;
  left: 15%;
  animation: dot-float 6s ease-in-out infinite;
}
.dot-2 {
  top: 60%;
  left: 10%;
  animation: dot-float 8s ease-in-out infinite 1s;
}
.dot-3 {
  top: 30%;
  right: 15%;
  animation: dot-float 7s ease-in-out infinite 2s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes float-rotate {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(40px) rotate(20deg);
  }
}

@keyframes dot-float {
  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }
}

/* Hero 内容 */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 24px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(8, 145, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 14px 32px;
  border-radius: 50px;
  border: 2px solid rgba(100, 200, 255, 0.4);
  margin-bottom: 48px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow:
    0 4px 20px rgba(8, 145, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
}

.badge-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.title-main {
  display: block;
  font-size: clamp(3.5rem, 10vw, 6rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 32px;
  text-shadow:
    0 2px 10px rgba(0, 0, 0, 0.5),
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 60px rgba(8, 145, 255, 0.4);
  letter-spacing: -0.02em;
}

.char-animate {
  display: inline-block;
}

.title-sub {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 400;
  letter-spacing: 0.3em;
}

.sub-item {
  color: #4fc3f7;
  font-weight: 600;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  background: rgba(79, 195, 247, 0.15);
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(79, 195, 247, 0.3);
}

.sub-divider {
  color: rgba(255, 255, 255, 0.3);
}

.hero-desc {
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 700px;
  margin: 40px auto 56px;
  line-height: 1.9;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  font-weight: 400;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 24px;
}

/* CTA 按钮 */
.cta-btn {
  height: 64px !important;
  padding: 0 44px !important;
  border-radius: 16px !important;
  font-size: 17px !important;
  font-weight: 600 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative;
  overflow: hidden;
}

.cta-btn.primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%) !important;
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  box-shadow:
    0 10px 40px rgba(8, 145, 255, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset,
    0 4px 0 rgba(2, 132, 199, 0.5) inset !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px;
}

.cta-btn.primary:hover {
  transform: translateY(-4px) scale(1.02);
  background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%) !important;
  box-shadow:
    0 20px 60px rgba(8, 145, 255, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset,
    0 0 80px rgba(8, 145, 255, 0.4) !important;
  border-color: rgba(255, 255, 255, 0.5) !important;
}

.glow-effect::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #0891ff, #00d4ff, #0891ff);
  border-radius: 18px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(10px);
}

.glow-effect:hover::before {
  opacity: 0.6;
  animation: glow-rotate 2s linear infinite;
}

@keyframes glow-rotate {
  0% {
    filter: blur(10px) hue-rotate(0deg);
  }
  100% {
    filter: blur(10px) hue-rotate(360deg);
  }
}

.cta-btn.secondary {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(12px) !important;
  color: white !important;
  font-weight: 700 !important;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2) !important;
}

.cta-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
  transform: translateY(-4px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1) !important;
}

.hero-bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to top, #f8fafc, transparent);
  z-index: 5;
  pointer-events: none;
}

/* ==================== Bento Overview ==================== */
.bento-overview {
  padding: 120px 0;
  background: #f8fafc;
  position: relative;
  overflow: hidden;
}

.aurora-bg-subtle {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.aurora-subtle-1 {
  background: radial-gradient(ellipse at 20% 50%, rgba(8, 145, 255, 0.08) 0%, transparent 60%);
  animation: aurora-move 25s ease-in-out infinite;
}

.aurora-subtle-2 {
  background: radial-gradient(ellipse at 80% 50%, rgba(0, 212, 255, 0.05) 0%, transparent 60%);
  animation: aurora-move 30s ease-in-out infinite reverse;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 28px;
}

.bento-item {
  background: white;
  border-radius: 28px;
  padding: 44px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.bento-item:hover {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(8, 145, 255, 0.1);
  border-color: rgba(8, 145, 255, 0.2);
  transform: translateY(-4px);
}

/* 玻璃态卡片 */
.glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 247, 255, 0.9) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.7s ease;
  pointer-events: none;
}

.glass-card:hover .card-shine {
  left: 100%;
}

.intro-card {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bento-tag {
  font-size: 13px;
  font-weight: 700;
  color: #0891ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  display: block;
}

.intro-card h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  color: #0f172a;
  line-height: 1.2;
}

.intro-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 32px;
}

.read-more {
  color: #0891ff !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  padding: 0 !important;
  height: auto !important;
  display: inline-flex !important;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease !important;
}

.read-more:hover {
  gap: 12px !important;
  color: #0066cc !important;
}

/* 发光统计卡片 */
.stats-card {
  grid-column: span 2;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  position: relative;
}

.stats-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 28px;
  padding: 2px;
  background: linear-gradient(
    135deg,
    rgba(8, 145, 255, 0.5),
    transparent 50%,
    rgba(0, 212, 255, 0.3)
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  align-items: center;
  gap: 24px;
}

.stat-box {
  text-align: center;
  position: relative;
  padding: 20px;
}

.stat-icon-wrap {
  width: 56px;
  height: 56px;
  background: rgba(8, 145, 255, 0.15);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #64c8ff;
  border: 1px solid rgba(100, 200, 255, 0.2);
}

.stat-num {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #64c8ff 0%, #0891ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #94a3b8;
  font-weight: 500;
}

/* 特性卡片 */
.feature-card {
  grid-column: span 1;
  display: flex;
  flex-direction: column;
}

.float-card {
  animation: float-subtle 6s ease-in-out infinite;
}

.float-card:nth-child(4) {
  animation-delay: -3s;
}

@keyframes float-subtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.feature-icon-wrap {
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  color: #0891ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  transition: all 0.4s ease;
  border: 1px solid rgba(8, 145, 255, 0.1);
}

.pulse-icon {
  position: relative;
}

.pulse-icon::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 24px;
  background: rgba(8, 145, 255, 0.2);
  animation: pulse-ring 2s ease-out infinite;
  z-index: -1;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.feature-card:hover .feature-icon-wrap {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  color: white;
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 20px 40px rgba(8, 145, 255, 0.3);
}

.feature-card h3 {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f172a;
}

.feature-card p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
  flex: 1;
}

.feature-arrow {
  margin-top: 20px;
  color: #0891ff;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.feature-card:hover .feature-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ==================== Trust Section ==================== */
.trust-section {
  padding: 140px 0;
  background: #ffffff;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header.light h2,
.section-header.light .section-subtitle {
  color: white;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(8, 145, 255, 0.1);
  color: #0891ff;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  border: 1px solid rgba(8, 145, 255, 0.2);
}

.floating-badge {
  animation: float-badge 3s ease-in-out infinite;
}

@keyframes float-badge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.section-header h2 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 20px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.section-subtitle.light {
  color: rgba(255, 255, 255, 0.7);
}

.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.trust-item {
  display: flex;
  gap: 24px;
  padding: 36px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.tilt-card {
  transform-style: preserve-3d;
}

.trust-item:hover {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(8, 145, 255, 0.15);
}

.card-shine-effect {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
}

.trust-item:hover .card-shine-effect {
  transform: translateX(100%);
}

.trust-icon-box {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  color: white;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(8, 145, 255, 0.3);
}

.icon-glow {
  position: absolute;
  inset: -4px;
  border-radius: 22px;
  background: rgba(8, 145, 255, 0.3);
  filter: blur(15px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.trust-item:hover .icon-glow {
  opacity: 1;
}

.trust-text h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #0f172a;
}

.trust-text p {
  font-size: 15px;
  color: #475569;
  line-height: 1.7;
}

/* CTA 区块 */
.trust-cta {
  margin-top: 100px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 40px;
  padding: 80px 60px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-glow-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 50%, rgba(8, 145, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
  animation: glow-move 8s ease-in-out infinite;
}

@keyframes glow-move {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(30px);
  }
}

.cta-inner {
  position: relative;
  z-index: 1;
}

.trust-cta h3 {
  font-size: 2.75rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #a5d8ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.trust-cta p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 48px;
}

.glow-button {
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%) !important;
  color: #0891ff !important;
  border: none !important;
  height: 64px !important;
  padding: 0 48px !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  border-radius: 16px !important;
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.glow-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(255, 255, 255, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.8) inset !important;
}

.pulse-btn {
  animation: pulse-btn 2s ease-in-out infinite;
}

@keyframes pulse-btn {
  0%,
  100% {
    box-shadow:
      0 10px 40px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  }
  50% {
    box-shadow:
      0 15px 50px rgba(0, 0, 0, 0.25),
      0 0 30px rgba(255, 255, 255, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.8) inset;
  }
}

/* ==================== Products Modern ==================== */
.products-modern {
  padding: 140px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
}

.modern-product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
}

.product-item-modern {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.product-card:hover {
  transform: translateY(-12px);
  box-shadow:
    0 40px 80px -20px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(8, 145, 255, 0.1);
}

.product-media {
  flex: 0 0 260px;
  position: relative;
  overflow: hidden;
}

.product-media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover .product-media-img {
  transform: scale(1.15);
}

.product-tag-float {
  position: absolute;
  top: 24px;
  left: 24px;
  background: linear-gradient(135deg, rgba(8, 145, 255, 0.95) 0%, rgba(0, 102, 204, 0.95) 100%);
  color: white;
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(8, 145, 255, 0.3);
  z-index: 2;
}

.media-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
}

.product-card:hover .media-overlay {
  opacity: 1;
}

.view-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0f172a;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease 0.1s;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.product-card:hover .view-btn {
  transform: translateY(0);
  opacity: 1;
}

.product-detail {
  flex: 1;
  padding: 36px;
  display: flex;
  flex-direction: column;
}

.product-detail h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #0f172a;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.product-tags span {
  font-size: 12px;
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%);
  color: #0891ff;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  border: 1px solid rgba(8, 145, 255, 0.15);
}

.product-detail p {
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: auto;
}

.product-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0891ff;
  font-weight: 700;
  margin-top: 28px;
  font-size: 15px;
  transition: gap 0.3s ease;
}

.product-card:hover .product-link {
  gap: 14px;
}

/* ==================== Services Modern - 极光背景 ==================== */
.services-modern {
  padding: 140px 0;
  background: linear-gradient(135deg, #0a1628 0%, #0d1f35 50%, #0a1628 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.services-aurora {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.aurora-s1 {
  background: radial-gradient(ellipse at 30% 50%, rgba(8, 145, 255, 0.2) 0%, transparent 60%);
  animation: aurora-move 20s ease-in-out infinite;
}

.aurora-s2 {
  background: radial-gradient(ellipse at 70% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 60%);
  animation: aurora-move 25s ease-in-out infinite reverse;
}

.services-modern-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin-top: 80px;
}

.service-box-modern {
  padding: 48px 40px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.service-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(8, 145, 255, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
}

.service-number {
  position: absolute;
  top: 24px;
  right: 28px;
  font-size: 5rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  font-family: 'Poppins', sans-serif;
}

.service-icon-modern {
  width: 88px;
  height: 88px;
  background: linear-gradient(135deg, rgba(8, 145, 255, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
  color: #64c8ff;
  border: 1px solid rgba(100, 200, 255, 0.2);
  transition: all 0.4s ease;
}

.service-card:hover .service-icon-modern {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 20px 40px rgba(8, 145, 255, 0.4);
}

.service-box-modern h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: white;
  margin-bottom: 18px;
}

.service-box-modern p {
  color: #94a3b8;
  line-height: 1.8;
  margin-bottom: 28px;
  font-size: 15px;
}

.service-feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  font-size: 15px;
  color: #cbd5e1;
  transition: all 0.3s ease;
}

.service-card:hover .service-feature-list li {
  color: #e2e8f0;
}

.service-feature-list svg {
  color: #64c8ff;
  flex-shrink: 0;
}

/* ==================== Cases Modern - 视差效果 ==================== */
.cases-modern {
  padding: 140px 0;
  background: #ffffff;
  position: relative;
}

.cases-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 80px;
}

.case-card-modern {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  height: 450px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-card {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.case-img-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

.case-img-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.case-card:hover .case-img-full {
  transform: scale(1.1);
}

.case-meta-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 22, 40, 0.95) 0%,
    rgba(10, 22, 40, 0.5) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  color: white;
  transition: all 0.4s ease;
}

.case-card:hover .case-meta-overlay {
  background: linear-gradient(
    to top,
    rgba(8, 145, 255, 0.95) 0%,
    rgba(10, 22, 40, 0.7) 60%,
    transparent 100%
  );
}

.case-tag {
  font-size: 13px;
  font-weight: 700;
  background: rgba(8, 145, 255, 0.9);
  padding: 6px 16px;
  border-radius: 6px;
  width: fit-content;
  margin-bottom: 16px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.case-card:hover .case-tag {
  background: white;
  color: #0891ff;
}

.case-meta-overlay h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
  line-height: 1.3;
}

.case-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease 0.1s;
}

.case-card:hover .case-desc {
  opacity: 1;
  transform: translateY(0);
}

.case-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.2) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.8s ease;
  pointer-events: none;
}

.case-card:hover .case-shine {
  transform: translateX(100%);
}

/* ==================== Newsletter ==================== */
.newsletter-modern {
  padding: 100px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

/* ==================== Section Footer CTA ==================== */
.section-footer-cta {
  text-align: center;
  margin-top: 80px;
}

.outline-btn {
  height: 60px !important;
  padding: 0 44px !important;
  border-radius: 16px !important;
  border: 2px solid #0891ff !important;
  color: #0891ff !important;
  background: transparent !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.glow-outline:hover {
  background: linear-gradient(135deg, #0891ff 0%, #0066cc 100%) !important;
  color: white !important;
  border-color: transparent !important;
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(8, 145, 255, 0.4);
}

/* ==================== Animations ==================== */
[data-aos] {
  transition:
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

[data-aos]:not(.aos-animate) {
  opacity: 0;
  transform: translateY(30px);
}

[data-aos].aos-animate {
  opacity: 1;
  transform: translateY(0);
}

[data-aos='fade-right'] {
  transform: translateX(-50px);
}

[data-aos='fade-right'].aos-animate {
  transform: translateX(0);
}

[data-aos='zoom-in'] {
  transform: scale(0.9);
}

[data-aos='zoom-in'].aos-animate {
  transform: scale(1);
}

/* ==================== Responsive ==================== */
@media (max-width: 1200px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .modern-product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .trust-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .services-modern-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cases-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: auto;
    min-height: 100vh;
    padding: 120px 0;
  }
  .title-main {
    font-size: 2.5rem;
  }
  .title-sub {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.9rem;
  }
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  .cta-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }
  .intro-card,
  .stats-card {
    grid-column: span 1;
    grid-row: span 1;
  }
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .trust-grid {
    grid-template-columns: 1fr;
  }
  .trust-item {
    flex-direction: column;
    text-align: center;
  }
  .trust-icon-box {
    margin: 0 auto;
  }

  .services-modern-grid {
    grid-template-columns: 1fr;
  }
  .modern-product-grid {
    grid-template-columns: 1fr;
  }
  .cases-row {
    grid-template-columns: 1fr;
  }

  .trust-cta {
    padding: 48px 28px;
  }
  .trust-cta h3 {
    font-size: 1.75rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

/* 减少动画偏好 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.text-balance {
  text-wrap: balance;
}
.text-pretty {
  text-wrap: pretty;
}
</style>
