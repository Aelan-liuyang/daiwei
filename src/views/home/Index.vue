<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- Banner大图 -->
      <div class="banner">
        <div class="banner-text">
          <h1>智慧管道设计与解决方案</h1>
          <p>
            提供先进的工业管道设计、施工与运维一站式服务，助力企业高效安全生产。
          </p>
          <a-button type="primary" size="large">了解更多</a-button>
        </div>
      </div>
      <!-- 公司简介 -->
      <section class="section about">
        <h2>公司介绍</h2>
        <p class="text-gray-500">COMPANY INTRODUCTION</p>
        <a-row :gutter="32" align="middle">
          <a-col :xs="24" :md="14">
            <h3 class="text-2xl">山东岱威创新管业有限公司</h3>
            <div class="about-text">
              <p>
                山东岱威创新管业有限公司，是国内领先的工业管道系统整体解决方案提供商。我们致力于工业管道设计、智能制造、安装施工以及智能运维服务，拥有自主研发的智能管道设计软件和一支经验丰富的工程技术团队。
              </p>
              <p>
                公司集研发、生产、经营为一体，是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商。
              </p>
              <!-- <ul class="about-features">
                <li>✔ 高效的智能设计平台</li>
                <li>✔ 一站式工程实施与运维</li>
                <li>✔ 丰富的行业案例与经验</li>
                <li>✔ 专业技术团队全程服务</li>
              </ul> -->
              <div class="grid grid-cols-3 gap-6 mt-8">
                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div class="text-3xl font-bold text-primary mb-2">15+</div>
                  <div class="text-gray-600">年行业经验</div>
                </div>
                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div class="text-3xl font-bold text-primary mb-2">200+</div>
                  <div class="text-gray-600">专利技术</div>
                </div>
                <div class="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div class="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div class="text-gray-600">合作客户</div>
                </div>
              </div>
            </div>
          </a-col>
          <a-col :xs="24" :md="10">
            <img
              class="about-img"
              :src="factoryImg"
              alt="公司办公环境" />
          </a-col>
        </a-row>
      </section>
      <!--产品优势 -->
      <section class="section products">
        <h2>产品优势</h2>
        <a-row gutter="24">
          <a-col :xs="24" :sm="12" :md="6" v-for="item in products"
            :key="item.title">
            <a-card :title="item.title" class="product-card" hoverable>
              <img :src="item.img" class="product-img" />
              <p>{{ item.desc }}</p>
            </a-card>
          </a-col>
        </a-row>
      </section>
      <!-- 产品轮播图 -->
      <section class="section product-carousel">
        <h2>产品展示</h2>

      </section>
      <!-- 联系我们 -->
      <section class="section contact">
        <h2>联系我们</h2>
        <p>邮箱：info@pipetech.com | 电话：400-888-8888</p>
        <a-button type="primary">立即咨询</a-button>
      </section>
    </a-layout-content>
    <a-layout-footer class="footer">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import factoryImg from '@/assets/images/factory.jpg'
import adv1 from '@/assets/images/factory1.jpg'
import adv2 from '@/assets/images/factory2.jpg'
import adv3 from '@/assets/images/factory3.jpg'
import adv4 from '@/assets/images/factory4.jpg'
const products = [
  {
    title: '技术创新',
    desc: '拥有多项国家专利技术，持续创新研发',
    img: adv1
  },
  {
    title: '品质保证',
    desc: '严格的质量管理体系，确保产品品质',
    img: adv2
  },
  {
    title: '专业团队',
    desc: '资深技术专家，专业服务团队',
    img: adv3
  },
  {
    title: '服务支持',
    desc: '全方位技术支持和售后服务体系',
    img: adv4
  },
]
const productCarousel = [
  {
    title: '智能管道设计平台',
    desc: '自主研发的智能设计平台，支持三维建模与仿真。',
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '高精度管道制造',
    desc: '采用先进设备，确保每一根管道精准可靠。',
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '智能运维系统',
    desc: '实现管道远程监控与智能预警，提高安全保障。',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  }
]
// 轮播相关
const carouselIndex = ref(0)
const perPage = 3

const visibleProducts = computed(() => {
  const start = carouselIndex.value * perPage
  let arr = []
  if (start >= products.length) {
    arr = products.slice(0, perPage)
  } else {
    arr = products.slice(start, start + perPage)
    // 不足三张时循环补齐
    if (arr.length < perPage) {
      arr = arr.concat(products.slice(0, perPage - arr.length))
    }
  }
  return arr
})

function slidePrev() {
  if (carouselIndex.value === 0) {
    carouselIndex.value = Math.ceil(products.length / perPage) - 1
  } else {
    carouselIndex.value--
  }
}
function slideNext() {
  if (carouselIndex.value >= Math.ceil(products.length / perPage) - 1) {
    carouselIndex.value = 0
  } else {
    carouselIndex.value++
  }
}
</script>
<style scoped>
.home-layout {
  min-height: 100vh;
}

.main-content {
  background: #f5f6fa;
  padding: 0;
}

.banner {
  background: url('@/assets/images/banner.jpg') no-repeat center/cover;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  position: relative;
}

.banner::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
}

.banner-text {
  position: relative;
  z-index: 1;
  margin-left: 80px;
  max-width: 500px;
}

.banner-text h1 {
  font-size: 38px;
  margin-bottom: 16px;
}

.banner-text p {
  font-size: 18px;
  margin-bottom: 28px;
}

.section {
  margin: 56px 0 32px 0;
  padding: 0 48px;
}

.section h2 {
  color: #1f2937;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
}

.text-2xl {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
}

.text-gray-500 {
  color: #6B7280;
}

.about-text p {
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.625;
  color: #4b5563;
}



.about-img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
  margin-top: 12px;
}

.product-carousel {
  margin-bottom: 32px;
}

.carousel {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 24px auto;
}

.carousel-slide {
  text-align: center;
  position: relative;
}

.carousel-img {
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);
}

.carousel-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 16px;
  color: #fff;
  background: rgba(0, 0, 0, 0.28);
  padding: 8px 0 4px 0;
}

.carousel-caption h3 {
  margin: 0;
  font-size: 20px;
}

.carousel-caption p {
  margin: 0;
  font-size: 14px;
}

.product-card,
.case-card {
  margin-bottom: 20px;
}

.product-img,
.case-img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.footer {
  text-align: center;
  color: #888;
  background: #fff;
  padding: 16px 0;
  font-size: 14px;
  margin-top: 56px;
}

@media (max-width: 600px) {
  .banner-text {
    margin-left: 20px;
  }

  .section {
    padding: 0 10px;
  }
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid {
  display: grid;
}

.mt-8 {
  margin-top: 2rem;
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.text-center {
  text-align: center;
}

.p-6 {
  padding: 1.5rem;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255);
}

.rounded-lg {
  border-radius: 12px;
}

.font-bold {
  font-weight: 700;
}

.text-primary {
  --tw-text-opacity: 1;
  color: rgb(24 144 255 / var(--tw-text-opacity, 1));
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
</style>