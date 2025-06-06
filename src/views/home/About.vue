<template>
  <a-layout class="about-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 极简Banner -->
      <div class="about-banner">
        <div class="about-banner-content">
          <h1>关于我们</h1>
          <p>专注工业管道系统整体解决方案，创新引领行业未来。</p>
        </div>
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
            <div class="intro-title-name">山东岱威创新管业有限公司<br /><span
                class="en-sub">SHANDONG DAIWEI INNOVATION PIPE CO., LTD</span>
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
        <a-carousel arrows dots-class="slick-dots slick-thumb" :autoplay="true"
          class="honor-carousel">
          <div v-for="(honor, idx) in honors" :key="idx" class="honor-slide">
            <img :src="honor.img" alt="荣誉证书" class="honor-img" />
            <div class="honor-title">{{ honor.title }}</div>
            <div class="honor-desc">{{ honor.desc }}</div>
          </div>
        </a-carousel>
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
import factory from '@/assets/images/factory.jpg'

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
    img: factory
  },
  {
    title: "ISO9001质量体系认证",
    desc: "通过ISO9001国际质量管理体系认证，规范生产流程，保障产品质量。",
    img: "https://img2.baidu.com/it/u=2206753297,1985836885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=600"
  },
  {
    title: "行业创新奖",
    desc: "连续三年荣获中国工业管道行业创新成果奖。",
    img: "https://img2.baidu.com/it/u=4196188451,1466655632&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=600"
  },
  // 可继续补充更多荣誉图片
  {
    title: "质量示范单位",
    desc: "被授予省级质量示范单位称号。",
    img: "https://img2.baidu.com/it/u=1558262690,3371167615&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480"
  },
  {
    title: "诚信经营示范企业",
    desc: "坚持诚信为本，荣获工商部门诚信经营示范企业。",
    img: "https://img2.baidu.com/it/u=1181036776,3831679083&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=600"
  }
]
</script>

<style scoped>
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
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 220px;
  background: #131a22 url('https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80') no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
}

.about-banner::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.38);
}

.about-banner-content {
  position: relative;
  z-index: 2;
  color: #fff;
  margin-left: 80px;
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

.honors {
  padding: 0 0 48px 0;
  background: #fafdff;
  box-shadow: none;
}

.honor-carousel {
  width: 88%;
  max-width: 780px;
  margin: 0 auto;
}

.honor-slide {
  text-align: center;
  padding: 20px 12px 34px 12px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.honor-img {
  width: 90%;
  max-width: 320px;
  border-radius: 10px;
  margin: 0 auto 16px auto;
  display: block;
  border: 1px solid #e6e6e6;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.honor-title {
  font-size: 16px;
  color: #1677ff;
  font-weight: 500;
  margin-bottom: 6px;
}

.honor-desc {
  font-size: 14px;
  color: #444;
  min-height: 36px;
}

.team {
  padding: 0 0 48px 0;
  background: #fff;
  box-shadow: none;
}

.team-row {
  display: flex;
  gap: 32px;
  justify-content: flex-start;
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
  margin-bottom: 2px;
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
}
</style>