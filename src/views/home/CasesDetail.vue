<template>
  <a-layout class="case-detail-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 标题与项目元信息 -->
      <div class="case-head">
        <div class="case-head-main">
          <div class="case-title">{{ caseData.title }}</div>
          <div class="case-meta">
            <span class="case-tag" v-for="tag in caseData.tags"
              :key="tag">{{ tag }}</span>
            <span class="case-date">{{ caseData.date }}</span>
          </div>
        </div>
        <img :src="caseData.img" class="case-head-img" :alt="caseData.title" />
      </div>
      <!-- 详情主体 -->
      <section class="case-content">
        <div class="case-content-main">
          <h2 class="section-title">项目概况</h2>
          <p class="case-desc">{{ caseData.desc }}</p>

          <h2 class="section-title">客户需求</h2>
          <ul class="case-list">
            <li v-for="d in caseData.demands" :key="d">{{ d }}</li>
          </ul>

          <h2 class="section-title">解决方案</h2>
          <div class="case-solution">
            <img :src="caseData.solutionImg" class="solution-img"
              v-if="caseData.solutionImg" />
            <div>
              <p v-for="(sol, i) in caseData.solution" :key="i">{{ sol }}</p>
            </div>
          </div>

          <h2 class="section-title">项目成果</h2>
          <ul class="case-list">
            <li v-for="r in caseData.results" :key="r">{{ r }}</li>
          </ul>

          <div class="case-gallery"
            v-if="caseData.gallery && caseData.gallery.length">
            <h2 class="section-title">现场图片</h2>
            <div class="gallery-grid">
              <img v-for="(img, idx) in caseData.gallery" :key="idx" :src="img"
                :alt="caseData.title + ' - 图' + (idx + 1)" />
            </div>
          </div>
        </div>
        <!-- 侧边栏 -->
        <aside class="case-content-side">
          <div class="side-block">
            <div class="side-title">项目信息</div>
            <div class="side-info-item"><span>客户：</span>{{ caseData.customer }}
            </div>
            <div class="side-info-item"><span>行业：</span>{{ caseData.industry }}
            </div>
            <div class="side-info-item"><span>项目时间：</span>{{ caseData.date }}
            </div>
            <div class="side-info-item"><span>地区：</span>{{ caseData.region }}
            </div>
            <div class="side-info-item">
              <span>主要产品：</span>{{ caseData.products }}</div>
          </div>
          <div class="side-block contact-block">
            <div class="side-title">获取专属方案</div>
            <div class="contact-desc">如需了解更多行业案例或定制解决方案，欢迎联系我们。</div>
            <a-button type="primary" size="large"
              style="width: 100%">在线咨询</a-button>
          </div>
        </aside>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRoute } from 'vue-router'
import anli1 from '@/assets/images/anli1.jpg'
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import anli5 from '@/assets/images/anli5.jpg'

const allCases = [
  {
    id: 1,
    title: '水泥厂耐磨管道升级项目',
    desc: '为知名水泥厂设计并安装全新耐磨管道系统，提升生产线运行可靠性与效率。',
    img: anli2,
    tags: ['水泥', '耐磨', '升级'],
    date: '2024-11-12',
    industry: '水泥制造',
    customer: '山东某水泥集团',
    region: '山东 济南',
    products: '碳化硅陶瓷管、弯头、三通',
    demands: [
      '耐磨管道需适应高强度砂浆输送',
      '降低停机检修频率',
      '节省维护成本，提升管道寿命'
    ],
    solutionImg: anli3,
    solution: [
      '针对水泥生产中磨损点，采用高性能碳化硅陶瓷管，适配原有工艺流程。',
      '为弯头、三通等高冲刷位置定制加厚陶瓷内衬。',
      '全程现场指导安装，确保系统无缝衔接。'
    ],
    results: [
      '管道寿命提高3倍以上，年节省维护成本30%',
      '大幅减少生产线非计划停机次数',
      '获得客户高度认可'
    ],
    gallery: [anli2, anli3, anli5]
  },
  {
    id: 2,
    title: '化工厂耐磨管道改造',
    desc: '为化工厂高温高压环境量身定制双金属耐磨管道，提高安全性。',
    img: anli1,
    tags: ['化工', '耐磨', '管道'],
    date: '2024-07-04',
    industry: '化工',
    customer: '山东某化工企业',
    region: '山东 淄博',
    products: '双金属耐磨管',
    demands: [
      '耐受高温、强腐蚀性介质',
      '确保长期稳定运行'
    ],
    solutionImg: anli1,
    solution: [
      '采用复合材料结构，内层耐磨合金，外层碳钢，兼顾强度和耐腐蚀。',
      '特殊工艺焊接，确保密封性和长期稳定。'
    ],
    results: [
      '运行两年无重大故障，远超客户预期',
      '安全生产水平提升'
    ],
    gallery: [anli1, anli4]
  },
  {
    id: 3,
    title: '智能管网系统集成',
    desc: '为大型化工企业部署智能管网，实现生产数据实时监控与远程管理。',
    img: anli3,
    tags: ['智能', '化工', '管网'],
    date: '2023-12-15',
    industry: '化工',
    customer: '大型化工集团',
    region: '江苏 南京',
    products: '智能管网系统、传感器',
    demands: [
      '需实现管道状态实时监测',
      '提升远程管理与数据分析能力'
    ],
    solutionImg: anli4,
    solution: [
      '部署高精度传感器，实时采集流量、压力和温度数据。',
      '搭建云平台，支持移动端远程监控和报警。'
    ],
    results: [
      '管网运行效率提升15%',
      '远程巡检率提升，节省人力成本'
    ],
    gallery: [anli3, anli5]
  }
]

const route = useRoute()
const caseId = Number(route.params.id)
const caseData = allCases.find(c => c.id === caseId) || allCases[0]
</script>

<style scoped>
.case-detail-layout {
  background: #f7f9fb;
  min-height: 100vh;
}

.main-content {
  background: #f7f9fb;
  min-height: 480px;
  padding-bottom: 40px;
}

/* 顶部信息块 */
.case-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1180px;
  margin: 0 auto;
  padding: 38px 24px 0 24px;
  gap: 40px;
}

.case-head-main {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.case-title {
  font-size: 2.1rem;
  font-weight: 800;
  color: #1677ff;
  letter-spacing: 2px;
  margin-bottom: 4px;
  line-height: 1.18;
}

.case-meta {
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 15px;
  font-weight: 500;
  opacity: .97;
}

.case-tag {
  display: inline-block;
  background: #1677ff;
  color: #fff;
  border-radius: 10px;
  font-size: 13px;
  padding: 4px 16px 4px 14px;
  margin-right: 8px;
  letter-spacing: 1px;
}

.case-date {
  color: #9da8b6;
  letter-spacing: 1px;
  font-size: 13px;
  font-weight: 400;
}

.case-head-img {
  width: 340px;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 2px 14px rgba(22, 119, 255, 0.10);
  flex-shrink: 0;
  background: #f6f7f8;
}

/* 详情主体 */
.case-content {
  max-width: 1280px;
  margin: 28px auto 0 auto;
  display: flex;
  z-index: 3;
  position: relative;
  gap: 38px;
  padding: 0 16px;
}

.case-content-main {
  flex: 1 1 0;
  background: #fff;
  border-radius: 17px;
  box-shadow: 0 2px 14px rgba(22, 119, 255, 0.08);
  padding: 48px 48px 38px 48px;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 1.14rem;
  color: #1677ff;
  font-weight: 700;
  margin: 32px 0 16px 0;
  letter-spacing: 1px;
}

.section-title:first-child {
  margin-top: 0;
}

.case-desc {
  font-size: 16.5px;
  color: #222;
  margin-bottom: 14px;
  line-height: 1.8;
  font-weight: 500;
}

.case-list {
  font-size: 15px;
  color: #444;
  padding-left: 21px;
  margin-bottom: 0;
}

.case-list li {
  margin-bottom: 7px;
  line-height: 1.7;
}

.case-solution {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: 10px;
}

.solution-img {
  width: 160px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.07);
  flex-shrink: 0;
}

.case-solution p {
  margin-bottom: 8px;
}

.case-gallery {
  margin-top: 32px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 18px;
  margin-top: 12px;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 9px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
}

/* 侧边栏 */
.case-content-side {
  flex: 0 0 280px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 180px;
}

.side-block {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
  padding: 20px 18px 14px 18px;
  margin-bottom: 0;
}

.side-title {
  font-size: 15px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.side-info-item {
  font-size: 14px;
  color: #222;
  margin-bottom: 7px;
  word-break: break-all;
}

.side-info-item span {
  color: #888;
}

.contact-block {
  margin-top: 24px;
}

.contact-desc {
  font-size: 13.5px;
  color: #555;
  margin-bottom: 16px;
}

@media (max-width: 900px) {
  .case-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px 6px 0 6px;
  }

  .case-head-img {
    width: 100%;
    height: 120px;
    margin-top: 8px;
  }

  .case-content {
    flex-direction: column;
    gap: 10px;
    padding: 0 2vw;
    margin-top: 10px;
  }

  .case-content-main {
    padding: 16px 8px 12px 8px;
  }

  .case-content-side {
    flex-direction: row;
    gap: 8px;
    min-width: 0;
    width: 100%;
  }

  .side-block {
    min-width: 120px;
    flex: 1 1 130px;
    padding: 14px 6px 10px 6px;
  }

  .case-title {
    font-size: 1.13rem;
  }

  .gallery-grid {
    gap: 7px;
  }
}
</style>