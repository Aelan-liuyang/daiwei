<template>
  <a-layout class="about-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 极简Banner -->
      <div class="about-banner">
        <img src="@/assets/images/aboutUs.jpeg" alt="新闻中心"
          class="banner-bg-img" />
        <!-- <div class="about-banner-content">
          <h1>关于我们</h1>
          <p>专注工业管道系统整体解决方案，创新引领行业未来。</p>
        </div> -->
      </div>

      <!-- 公司简介 -->
      <section class="about-section about-intro">
        <div class="intro-header">
          <span class="intro-idx">01</span>
          <span class="intro-divider">|</span>
          <span class="intro-key">公司介绍</span>
          <span class="intro-en">Company Introduction</span>
        </div>
        <div class="intro-main">
          <div class="intro-title">
            <div class="intro-title-name">
              山东岱威创新管业有限公司<br />
              <span class="en-sub">SHANDONG DAIWEI INNOVATION PIPE CO.,
                LTD</span>
            </div>
          </div>
          <div class="intro-content">
            山东岱威创新管业有限公司位于济南市南园经济开发区，距济荷高速长清区出口2公里，紧邻220国道，交通便利。
            <br /><br />
            公司集研发、生产、经营为一体。是耐磨、耐腐蚀、耐冲击、耐热复合管及各种异形件综合服务商。公司经营的产品有：碳化硅聚合陶瓷管件、烧结碳化硅管件；衬胶、衬塑、衬聚四氟、箱罐内防腐；陶瓷内衬复合钢管、陶瓷贴片耐磨管、双金属耐磨管及衬板，管道补偿器；龟甲网刚玉喷涂耐磨管、大烟道耐磨层喷涂；脱硫脱硝设备用碳化硅喷嘴、真空皮带脱水机整机及配件，脱硝催化剂、防腐工程施工；机械设备、法兰的制造、销售。
            <br /><br />
            碳化硅聚合陶瓷管件，法兰连接处采用内密封工艺，直管、变径管、异形件，从研发、设计、生产制造等拥有多项国家专利（专利号ZL202121006695.6、ZL202121167507.8、ZL202121166150.1、2L202021335562.9..）。公司拥有一支由教授、专家、工程师和熟练的技术工人组成的经验丰富、技术过硬、作风扎实的技术团队。专业为电力、矿山、钢铁、化工、水泥、洗选煤等行业提供适应不同介质运行环境的多种类型的管道产品，为客户增值，做客户放心满意的产品，同客户一起成长。
            <br /><br />
            提供适应不同介质环境的一体化解决方案和多种类管道。
          </div>
        </div>
      </section>

      <!-- 企业文化 -->
      <section class="about-section culture">
        <div class="section-title">企业文化</div>
        <div class="culture-content">
          <div class="culture-block">
            <div class="culture-key">愿景</div>
            <div class="culture-value">成为全球工业管道系统领域具有影响力的创新型企业。</div>
          </div>
          <div class="culture-block">
            <div class="culture-key">使命</div>
            <div class="culture-value">以科技赋能工业管道，为客户创造更高价值，助力绿色可持续发展。</div>
          </div>
          <div class="culture-block">
            <div class="culture-key">核心价值观</div>
            <div class="culture-value">诚信、创新、协作、卓越</div>
          </div>
        </div>
      </section>

      <!-- 发展历程 -->
      <section class="about-section history">
        <div class="section-title">发展历程</div>
        <a-timeline>
          <a-timeline-item color="green">
            <b>2010年</b> - 山东岱威创新管业有限公司成立，专注耐磨复合管道研发制造
          </a-timeline-item>
          <a-timeline-item color="blue">
            <b>2014年</b> - 取得多项国家专利，技术创新能力大幅提升
          </a-timeline-item>
          <a-timeline-item color="blue">
            <b>2017年</b> - 服务客户突破300家，产品销往全国各地
          </a-timeline-item>
          <a-timeline-item color="blue">
            <b>2021年</b> - 荣获高新技术企业等多项行业认证，产能规模持续扩大
          </a-timeline-item>
          <a-timeline-item color="gray">
            <b>未来</b> - 持续创新发展，迈向国际市场
          </a-timeline-item>
        </a-timeline>
      </section>

      <!-- 荣誉资质轮播 -->
      <section class="about-section honors">
        <div class="section-title">荣誉资质</div>
        <div class="honor-swiper-wrap">
          <swiper
            :modules="[Navigation, Pagination]"
            :loop="true"
            :slides-per-view="3"
            :centeredSlides="true"
            :spaceBetween="0"
            navigation
            :pagination="{ clickable: true }"
            class="honor-swiper honor-swiper-coverflow"
            effect="coverflow">
            <swiper-slide v-for="(honor, idx) in honors" :key="idx">
              <div class="honor-swiper-item">
                <div class="honor-image-wrapper">
                  <img :src="honor.img" alt="荣誉证书" class="honor-swiper-img" />
                </div>
                <div class="honor-swiper-caption">
                  <div class="honor-swiper-title">{{ honor.title }}</div>
                  <div class="honor-swiper-desc">{{ honor.desc }}</div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <!-- 团队 极简版 -->
      <section class="about-section team">
        <div class="section-title">核心团队</div>
        <div class="team-row">
          <div v-for="member in team" :key="member.name" class="team-card">
            <img :src="member.avatar" alt="头像" class="team-avatar" />
            <div class="team-name">{{ member.name }}</div>
            <div class="team-role">{{ member.role }}</div>
            <div class="team-desc">{{ member.desc }}</div>
          </div>
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import rongyu from '@/assets/images/rongyu.jpeg'
import zhuanli from '@/assets/images/zhunli.jpeg'
const team = [
  {
    name: "李明",
    role: "创始人 & CEO",
    desc: "20年工业管道工程经验，擅长企业战略与产品创新。",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "王芳",
    role: "技术总监",
    desc: "工业自动化硕士，主导智能设计与运维平台研发。",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "张伟",
    role: "项目经理",
    desc: "丰富的大型工程实施与管理经验，保障每一个项目高质量交付。",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
]
const honors = [
  {
    title: "高新技术企业证书",
    desc: "荣获国家高新技术企业认证，彰显技术实力与创新能力。",
    img: rongyu
  },
  {
    title: "ISO9001质量体系认证",
    desc: "通过ISO9001国际质量管理体系认证，规范生产流程，保障产品质量。",
    img: rongyu
  },
  {
    title: "行业创新奖",
    desc: "连续三年荣获中国工业管道行业创新成果奖。",
    img: zhuanli
  },
  {
    title: "质量示范单位",
    desc: "被授予省级质量示范单位称号。",
    img: zhuanli
  },
  {
    title: "诚信经营示范企业",
    desc: "坚持诚信为本，荣获工商部门诚信经营示范企业。",
    img: zhuanli
  }
]
</script>

<style scoped>
.honor-swiper-wrap {
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 30px;
  background: transparent;
}

.honor-swiper {
  width: 100%;
  padding-bottom: 38px;
  overflow: visible !important;
}

.honor-swiper-coverflow {
  /* 让coverflow效果更居中更显著 */
  overflow: visible !important;
}

.honor-swiper-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(120deg, #fafdff 60%, #eaf5ff 100%);
  border-radius: 22px;
  box-shadow: 0 3px 18px rgba(22, 119, 255, 0.09), 0 1.5px 6px rgba(0, 0, 0, 0.09);
  padding: 20px 10px 18px 10px;
  margin: 12px 4px;
  min-height: 420px;
  border: 1.5px solid #e0e8f8;
  position: relative;
  width: 370px;
  max-width: 100vw;
  justify-content: flex-start;
}

.honor-image-wrapper {
  width: 330px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #fff; */
  border-radius: 14px;
  overflow: hidden;
  /* box-shadow: 0 4px 24px rgba(22, 119, 255, 0.06); */
  margin-bottom: 18px;
}

.honor-swiper-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 14px;
  display: block;
  background: #fafcff;
  border: none;
  transition: transform .3s cubic-bezier(.4, 1.5, .45, 1.4);
  box-shadow: none;
}


.honor-swiper-caption {
  text-align: center;
  padding: 0 5px;
}

.honor-swiper-title {
  font-size: 19px;
  color: #1677ff;
  font-weight: 700;
  margin-bottom: 7px;
  letter-spacing: 2px;
}

.honor-swiper-desc {
  font-size: 15px;
  color: #444;
  min-height: 38px;
  font-weight: 400;
}

.honor-swiper :deep(.swiper-button-prev),
.honor-swiper :deep(.swiper-button-next) {
  color: #8ab0cb;
  width: 52px;
  height: 52px;
  top: 48%;
  background: transparent;
  transition: color .2s;
  z-index: 10;
}

.honor-swiper :deep(.swiper-button-prev) {
  left: 0;
}

.honor-swiper :deep(.swiper-button-next) {
  right: 0;
}

.honor-swiper :deep(.swiper-button-prev:after),
.honor-swiper :deep(.swiper-button-next:after) {
  font-size: 52px;
}

.honor-swiper :deep(.swiper-pagination-bullet) {
  background: #d8d8d8;
  opacity: 1;
}

.honor-swiper :deep(.swiper-pagination-bullet-active) {
  background: #1677ff;
}

.honor-swiper :deep(.swiper-slide.swiper-slide-next),
.honor-swiper :deep(.swiper-slide.swiper-slide-prev) {
  opacity: 0.85;
  filter: blur(1px) grayscale(.12);
  z-index: 10;
  transform: scale(.93) !important;
}

/* Swiper coverflow 层叠效果美化 */
.honor-swiper :deep(.swiper-slide) {
  pointer-events: auto;
  opacity: 0.25;
  transition: all .48s cubic-bezier(.4, 1.5, .45, 1.4);
  z-index: 1;
}

.honor-swiper :deep(.swiper-slide.swiper-slide-active) {
  opacity: 1;
  filter: none;
  z-index: 9;
  transform: scale(1.08) !important;
}

.honor-swiper :deep(.swiper-slide.swiper-slide-next),
.honor-swiper :deep(.swiper-slide.swiper-slide-prev) {
  opacity: 0.8;
  filter: grayscale(.08);
  z-index: 5;
  transform: scale(.98) !important;
}

.honor-swiper :deep(.swiper-slide) {
  /* 保证卡片可以压叠出效果 */
  transition: opacity .4s, filter .4s, z-index .4s, transform .4s;
  pointer-events: auto;
}


.about-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  background: #f7f9fb;
  padding-bottom: 40px;
  min-height: 800px;
}

.about-banner {
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

.about-banner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.about-banner-content {
  position: relative;
  z-index: 1;
}

.about-banner-content h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 6px;
}

.about-banner-content p {
  font-size: 18px;
  color: #d8eaff;
  letter-spacing: 1px;
}

.about-section {
  background: #fff;
  border-radius: 16px;
  margin: 48px auto 0 auto;
  padding: 0 0 0 0;
  max-width: 1100px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.03);
  overflow: hidden;
}

.about-intro {
  padding: 46px 44px 32px 44px;
}

.intro-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #1677ff;
  font-weight: 700;
  margin-bottom: 22px;
  letter-spacing: 2px;
}

.intro-idx {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-right: 8px;
}

.intro-divider {
  color: #eee;
  margin: 0 10px;
  font-size: 21px;
}

.intro-key {
  font-weight: bold;
  font-size: 19px;
  color: #1677ff;
  margin-right: 10px;
}

.intro-en {
  font-size: 14px;
  color: #bbb;
  font-weight: 400;
  margin-left: 8px;
  letter-spacing: 2px;
}

.intro-main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.intro-title {
  margin-bottom: 10px;
}

.intro-title-cn {
  font-size: 18px;
  color: #888;
  font-weight: 500;
  letter-spacing: 2px;
}

.intro-title-en {
  font-size: 15px;
  color: #b0b5bd;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.intro-title-name {
  font-size: 22px;
  color: #222;
  font-weight: bold;
  margin-top: 8px;
  letter-spacing: 2px;
  line-height: 1.5;
}

.intro-title-name .en-sub {
  font-size: 13px;
  color: #888;
  display: block;
  font-weight: 400;
  margin-top: 5px;
}

.intro-content {
  color: #333;
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
  font-family: 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
}

.section-title {
  text-align: left;
  font-size: 22px;
  font-weight: 700;
  color: #1677ff;
  margin: 38px 0 26px 44px;
  letter-spacing: 2px;
}

.culture {
  background: #fafdff;
  box-shadow: none;
  padding-bottom: 28px;
}

.culture-content {
  display: flex;
  gap: 46px;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 44px;
  flex-wrap: wrap;
}

.culture-block {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);
  padding: 24px 36px;
  min-width: 180px;
  max-width: 320px;
  flex: 1 1 260px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 126px;
}

.culture-key {
  font-size: 17px;
  color: #1677ff;
  font-weight: 600;
  margin-bottom: 7px;
  letter-spacing: 2px;
}

.culture-value {
  font-size: 15px;
  color: #333;
  line-height: 1.8;
}

.history {
  background: #f7faff;
  box-shadow: none;
  padding: 0 44px 32px 44px;
}

.team {
  padding: 0 0 48px 0;
  background: #fff;
  box-shadow: none;
}

.team-row {
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  margin: 0 44px;
  flex-wrap: wrap;
}

.team-card {
  background: #f7f9fb;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.04);
  padding: 18px 16px 20px 16px;
  text-align: center;
  min-width: 170px;
  max-width: 210px;
  min-height: 200px;
  height: 200px;
  flex: 1 1 180px;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-avatar {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.team-name {
  color: #1677ff;
  font-weight: 600;
  margin-bottom: 6px;
}

.team-role {
  color: #888;
  font-size: 14px;
  margin-bottom: 4px;
}

.team-desc {
  color: #444;
  font-size: 13px;
  margin-top: 2px;
  line-height: 1.2rem;
}

/* 响应式优化 */
@media (max-width: 1000px) {

  .about-section,
  .about-intro {
    padding: 24px 10px 16px 10px;
  }

  .honors-row,
  .team-row,
  .culture-content {
    margin: 0 10px;
    gap: 14px;
  }

  .about-banner-content {
    margin-left: 20px;
  }

  .history {
    padding: 0 10px 24px 10px;
  }

  .honor-swiper-img {
    width: 140px;
    height: 100px;
  }

  .honor-swiper-item {
    min-height: 210px;
  }
}

@media (max-width: 600px) {

  .about-section,
  .about-intro {
    padding: 10px 0 10px 0;
  }

  .section-title {
    margin: 22px 0 14px 10px;
    font-size: 18px;
  }

  .about-banner {
    height: 80px;
  }

  .about-banner-content h1 {
    font-size: 22px;
  }

  .about-banner-content {
    margin-left: 10px;
  }

  .honor-carousel {
    width: 99%;
  }

  .honor-swiper-img {
    width: 90px;
    height: 68px;
  }

  .honor-swiper-item {
    min-height: 120px;
    padding: 12px 2px 8px 2px;
  }
}
</style>