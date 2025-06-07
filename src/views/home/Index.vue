<template>
  <a-layout class="home-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- Banner大图+动画 -->
      <section class="banner">
        <div class="banner-bg-anim"></div>
        <div class="banner-text animated fadeInDown">
          <h1 class="main-title">智慧管道设计与解决方案</h1>
          <p class="main-desc">
            提供先进的工业管道设计、施工与运维一站式服务，助力企业高效安全生产
          </p>
          <a-button type="primary" size="large" class="animated fadeInUp"
            style="margin-top:18px;">了解更多</a-button>
        </div>
      </section>

      <!-- 公司简介 横向铺满 -->
      <section class="about-row animated fadeInUp">
        <div class="about-content">
          <h2>公司介绍 <span class="about-en">COMPANY INTRODUCTION</span></h2>
          <h3 class="about-title">山东岱威创新管业有限公司</h3>
          <p>
            山东岱威创新管业有限公司，是国内领先的工业管道系统整体解决方案提供商。我们致力于工业管道设计、智能制造、安装施工以及智能运维服务，拥有自主研发的智能管道设计软件和一支经验丰富的工程技术团队。
            公司集研发、生产、经营为一体，是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商。公司产品广泛应用于电力、矿山、化工、冶金、环保、食品等行业，助力客户实现高效、安全、智能生产。
            拥有多项自主知识产权，获得“高新技术企业”等多项荣誉，与多家知名企业建立了长期合作关系。
          </p>
          <div class="about-stats-row">
            <div>
              <div class="stat-num">15+</div>
              <div class="stat-label">年行业经验</div>
            </div>
            <div>
              <div class="stat-num">200+</div>
              <div class="stat-label">专利技术</div>
            </div>
            <div>
              <div class="stat-num">1000+</div>
              <div class="stat-label">合作客户</div>
            </div>
          </div>
        </div>
        <div class="about-img-wrap">
          <img class="about-img big" :src="factoryImg" alt="公司办公环境" />
          <div class="about-img-mask"></div>
        </div>
      </section>


      <!-- 产品优势 横向铺满 -->
      <section class="products-row">
        <h2 class="section-title">产品优势</h2>
        <div class="products-features-row">
          <div class="feature-col" v-for="item in products" :key="item.title">
            <img :src="item.img" class="feature-img" />
            <div class="feature-info">
              <div class="feature-title">{{ item.title }}</div>
              <div class="feature-desc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 产品轮播 居中大图（swiper实现） -->
      <section>
        <ProductFocusCarousel />
      </section>

      <!-- 工程案例 横向分栏 -->
      <section class="cases-row">
        <h2 class="section-title">工程案例</h2>
        <div class="cases-features-row">
          <div class="case-col" v-for="c in cases" :key="c.title">
            <img :src="c.img" class="case-img-row" />
            <div class="case-info-row">
              <div class="case-title-row">{{ c.title }}</div>
              <div class="case-desc-row">{{ c.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 客户&合作伙伴 -->
      <section class="partners-row">
        <h2 class="section-title">合作伙伴</h2>
        <div class="partners-list">
          <img v-for="(logo, i) in partners" :key="i" :src="logo"
            class="partner-logo" />
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'

import Footer from '@/components/Footer.vue'
import factoryImg from '@/assets/images/factory.jpg'
import productBg from '@/assets/images/productBg.jpg'
import adv1 from '@/assets/images/factory1.jpg'
import adv2 from '@/assets/images/factory2.jpg'
import adv3 from '@/assets/images/factory3.jpg'
import adv4 from '@/assets/images/factory4.jpg'
import ProductFocusCarousel from '@/components/ProductFocusCarousel.vue'
import anli1 from '@/assets/images/anli1.jpg'
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'


const products = [
  {
    title: '技术创新',
    desc: '拥有多项国家专利技术，持续创新研发，推动行业进步。',
    img: adv1
  },
  {
    title: '品质保证',
    desc: '严格的质量管理体系，确保每一件产品高品质交付。',
    img: adv2
  },
  {
    title: '专业团队',
    desc: '资深技术专家，经验丰富的工程团队，服务更专业。',
    img: adv3
  },
  {
    title: '服务支持',
    desc: '完善的售后服务及技术支持体系，解决客户后顾之忧。',
    img: adv4
  },
]
const productCarousel = [
  {
    title: '智能管道设计平台',
    desc: '自主研发的智能设计平台，支持三维建模与仿真，提升设计效率和精度。',
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '高精度管道制造',
    desc: '采用先进设备，严格检测流程，确保每一根管道精准可靠。',
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '智能运维系统',
    desc: '实现管道远程监控与智能预警，保障生产安全无忧。',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
  }
]
const cases = [
  {
    title: '水泥厂耐磨管道',
    desc: '为知名水泥厂提供耐磨管道，保障生产安全。',
    img: anli2
  },
  {
    title: '化工厂智能管网',
    desc: '为大型化工企业部署智能管网系统，实现数据可视化与远程运维。',
    img: anli1
  },

  {
    title: '化工厂耐磨管道',
    desc: '为省内化工厂提供双金属耐磨管，承受高温高压环境。',
    img: anli3
  },
  {
    title: '电子脱销管道',
    desc: '为电子脱销企业提供耐磨管道，延长设备使用寿命。',
    img: anli4
  }
]
const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png",
]
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
@import "swiper/swiper-bundle.css";

.home-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  background: #f7f9fb;
  padding: 0;
}

.banner {
  position: relative;
  height: 620px;
  background: #131a22;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-bg-anim {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* background: linear-gradient(120deg, #1677ff 0%, #43c6ac 100%);
  opacity: 0.18;
  z-index: 0;
  animation: bannerBgMove 8s linear infinite alternate; */
  /* background-image: url('@/assets/images/productBg.jpg'); */
  background-image: url(https://www.victaulic.com/wp-content/uploads/2024/09/009V-Homepage.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  border-top-width: 1px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
}

@keyframes bannerBgMove {
  0% {
    filter: blur(0px) brightness(1);
  }

  100% {
    filter: blur(2px) brightness(1.09);
  }
}

.banner-text {
  position: relative;
  z-index: 2;
  margin-left: 60px;
  width: 100%;
  max-width: 570px;
  color: #fff;
}

.main-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 18px;
  letter-spacing: 2px;
  line-height: 1.1;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);
}

.main-desc {
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 32px;
  color: #eaf6ff;
  text-shadow: 0 2px 9px rgba(22, 119, 255, 0.09);
}

/* 公司简介 */
.about-row {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  margin: 0 auto 32px auto;
  max-width: 100vw;
  min-width: 0;
  padding: 30px 0 20px 0;
}

.about-content {
  flex: 2.1;
  min-width: 320px;
  padding: 0 42px 0 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-en {
  color: #1677ff;
  font-size: 13px;
  letter-spacing: 2px;
  margin-left: 14px;
  vertical-align: middle;
}

.about-title {
  font-size: 1.24rem;
  font-weight: 700;
  margin: 22px 0 10px 0;
  color: #222;
  letter-spacing: 1px;
}

.about-content>p {
  color: #444;
  font-size: 15.5px;
  margin-bottom: 18px;
  line-height: 1.8;
}

.about-stats-row {
  display: flex;
  gap: 34px;
  margin-top: 14px;
}

.about-stats-row>div {
  text-align: center;
}

.stat-num {
  font-size: 2rem;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 6px;
  white-space: nowrap;
}

.stat-label {
  color: #888;
  font-size: 14px;
}

.about-img-wrap {
  flex: 1.3;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 48px 0 0;
  position: relative;
}

.about-img {
  width: 430px;
  max-width: 96vw;
  border-radius: 17px;
  box-shadow: 0 6px 32px rgba(64, 158, 255, 0.11);
  z-index: 2;
  position: relative;
  transition: transform 0.4s cubic-bezier(.4, 2, .7, .4);
}

.about-img.big {
  width: 480px;
  max-width: 99vw;
}

.about-img-mask {
  position: absolute;
  left: 14px;
  top: 18px;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, #1677ff33 0%, #43c6ac22 100%);
  border-radius: 17px;
  z-index: 1;
  filter: blur(22px);
  pointer-events: none;
  opacity: 0.28;
}

/* 产品优势 */
.products-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fafdff;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 18px;
  text-align: left;
  margin-left: 6vw;
  letter-spacing: 2px;
}

.products-features-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 0 auto;
  gap: 0;
}

.feature-col {
  display: flex;
  align-items: center;
  flex: 1 1 210px;
  min-width: 210px;
  max-width: 340px;
  padding: 30px 16px 30px 46px;
  background: none;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
}

.feature-col:first-child {
  border-left: none;
}

.feature-col:last-child {
  border-right: none;
}

.feature-img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  background: #e6f0ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.feature-info {
  flex: 1;
}

.feature-title {
  font-size: 17px;
  font-weight: 600;
  color: #1677ff;
  margin-bottom: 7px;
}

.feature-desc {
  color: #444;
  font-size: 15px;
  min-height: 30px;
  line-height: 1.6;
}


/* 案例横向 */
.cases-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fafdff;
}

.cases-features-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 0 auto;
  gap: 0;
}

.case-col {
  display: flex;
  align-items: center;
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 400px;
  padding: 30px 18px 30px 46px;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  background: none;
}

.case-col:first-child {
  border-left: none;
}

.case-col:last-child {
  border-right: none;
}

.case-img-row {
  width: 74px;
  height: 74px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 24px;
  background: #e6f0ff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.case-info-row {
  flex: 1;
}

.case-title-row {
  font-size: 16px;
  font-weight: 600;
  color: #1677ff;
  margin-bottom: 7px;
}

.case-desc-row {
  color: #444;
  font-size: 15px;
  min-height: 30px;
  line-height: 1.6;
}

/* 合作伙伴 */
.partners-row {
  width: 100vw;
  margin: 0 auto 32px auto;
  padding-top: 10px;
  background: #fff;
}

.partners-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 36px;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding-bottom: 10px;
}

.partner-logo {
  width: 110px;
  max-width: 32vw;
  object-fit: contain;
  background: #fafbff;
  border-radius: 8px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.04);
  padding: 6px 10px;
  transition: transform 0.15s;
  filter: grayscale(0.13);
}

.partner-logo:hover {
  transform: scale(1.09);
  filter: grayscale(0);
}


/* 响应式优化 */
@media (max-width: 1200px) {
  .about-content {
    padding: 0 20px 0 20px;
  }

  .about-img-wrap {
    padding: 0 8px 0 0;
  }

  .section-title {
    margin-left: 20px;
  }

  .products-features-row,
  .cases-features-row {
    max-width: 98vw;
  }

  .carousel-center-inner {
    width: 99vw;
  }

  .carousel-img-center {
    max-width: 98vw;
  }
}

@media (max-width: 900px) {
  .about-row {
    flex-direction: column;
    padding: 10px 0 10px 0;
  }

  .about-content {
    padding: 0 10px;
  }

  .about-img-wrap {
    justify-content: center;
    padding: 0;
  }

  .about-img,
  .about-img.big {
    width: 98vw;
    max-width: 98vw;
  }

  .philo-content {
    flex-direction: column;
    gap: 16px;
  }

  .products-features-row,
  .cases-features-row {
    flex-direction: column;
  }

  .feature-col,
  .case-col {
    border: none;
    padding: 18px 4vw;
  }

  .carousel-row,
  .products-row,
  .cases-row {
    padding: 0;
  }

  .carousel-center-inner {
    border-radius: 8px;
  }

  .carousel-slide-center {
    min-height: 120px;
  }

  .carousel-img-center {
    max-width: 99vw;
    min-height: 120px;
  }

  .partners-list {
    gap: 14px;
  }

  .partner-logo {
    width: 84px;
  }
}

@media (max-width: 600px) {
  .banner-text {
    margin-left: 11px;
  }

  .banner {
    height: 120px;
  }

  .main-title {
    font-size: 1.15rem;
  }

  .main-desc {
    font-size: 12px;
  }

  .about-content>p,
  .feature-desc,
  .case-desc-row,
  .carousel-caption-center p {
    font-size: 12px;
  }

  .stat-num {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 1rem;
    margin-bottom: 18px;
  }

  .products-features-row,
  .cases-features-row {
    gap: 0;
  }

  .feature-col,
  .case-col {
    padding: 10px 2vw;
  }

  .feature-img,
  .case-img-row {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }

  .contact-bar-row {
    font-size: 14px;
    gap: 10px;
  }

  .carousel-img-center {
    border-radius: 6px;
  }
}
</style>