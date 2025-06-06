<template>
  <a-layout class="cases-layout">
    <Header />
    <a-layout-content class="main-content">
      <div class="cases-banner">
        <div class="cases-banner-text">
          <h1>工程案例</h1>
          <div class="cases-banner-sub">Project Cases</div>
        </div>
      </div>
      <section class="case-section">
        <div class="case-grid">
          <div v-for="c in cases" :key="c.title" class="case-card">
            <div class="case-img-wrap">
              <img :src="c.img" :alt="c.title" class="case-img" />
            </div>
            <div class="case-card-body">
              <h3 class="case-title">{{ c.title }}</h3>
              <div class="case-desc">{{ c.desc }}</div>
              <div class="case-tags">
                <span class="case-tag" v-for="tag in c.tags"
                  :key="tag">{{ tag }}</span>
              </div>
            </div>
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
const cases = [
  {
    title: '化工厂管道系统项目',
    desc: '为国内知名化工企业设计并安装高耐腐蚀、高强度的工业管道系统，实现生产自动化与智能监控，有效提升了企业的生产效率与安全水平。',
    img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80',
    tags: ['化工', '自动化', '智能管道']
  },
  {
    title: '食品级管道改造工程',
    desc: '为大型食品加工厂提供304/316L不锈钢食品级管道全线升级，严格遵循卫生标准，全过程无尘安装，保障食品安全。',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    tags: ['食品', '卫生级', '不锈钢']
  },
  {
    title: '电厂耐磨管道EPC总包',
    desc: '承接省内大型电厂输灰系统双金属耐磨管及弯头EPC项目，从设计、制造到安装一体化交付，满足高磨损、高温工况要求。',
    img: 'https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80',
    tags: ['电力', '耐磨', 'EPC']
  },
  {
    title: '智能远程监控管网',
    desc: '为城市供水公司部署智能远程监控系统，实现管道运行数据实时在线采集与报警，极大提升了供水安全性与管理效率。',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    tags: ['市政', '智能监控', '运维']
  },
  {
    title: '矿山高分子管道工程',
    desc: '为矿山企业量身定制高分子聚乙烯耐磨管道解决方案，显著延长管道使用寿命，降低维护成本。',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80',
    tags: ['矿山', '高分子', '耐磨']
  },
  {
    title: '环保行业陶瓷复合管网',
    desc: '环保领域大型废气处理项目，采用陶瓷内衬复合钢管，确保耐腐蚀、耐磨损，实现环保设施稳定运行。',
    img: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=600&q=80',
    tags: ['环保', '陶瓷复合', '耐腐蚀']
  }
]
</script>

<style scoped>
.cases-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.header {
  display: flex;
  align-items: center;
  background: #001529;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-right: 32px;
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
}

.main-content {
  background: #f7f9fb;
  min-height: 480px;
  padding-bottom: 40px;
}

.cases-banner {
  width: 100vw;
  max-width: 100vw;
  min-height: 180px;
  height: 18vw;
  max-height: 270px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: #0d1d3a url('https://img2.baidu.com/it/u=2692391962,1108114355&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=600') no-repeat center 80%/cover;
}

.cases-banner-text {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding-bottom: 30px;
  background: rgba(0, 0, 0, 0.15);
}

.cases-banner-text h1 {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 5px;
  text-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
}

.cases-banner-sub {
  font-size: 1.13rem;
  color: #d6e5fa;
  letter-spacing: 4px;
  margin-top: 10px;
  font-weight: 400;
}

.case-section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 52px 24px 0 24px;
  background: none;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px 38px;
}

.case-card {
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.18s, box-shadow 0.18s;
  cursor: pointer;
}

.case-card:hover {
  transform: translateY(-6px) scale(1.015);
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.11);
}

.case-img-wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f3f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.case-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s;
}

.case-card:hover .case-img {
  transform: scale(1.08);
}

.case-card-body {
  padding: 28px 20px 20px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.case-title {
  font-size: 19px;
  color: #1677ff;
  font-weight: bold;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.case-desc {
  color: #333;
  font-size: 15px;
  margin-bottom: 16px;
  min-height: 54px;
  line-height: 1.7;
}

.case-tags {
  margin-top: auto;
}

.case-tag {
  display: inline-block;
  background: #f0f6ff;
  color: #1677ff;
  font-size: 13px;
  border-radius: 10px;
  padding: 3px 16px 3px 14px;
  margin-right: 8px;
  margin-bottom: 5px;
  letter-spacing: 1px;
}

.footer-bottom {
  text-align: center;
  color: #888;
  background: #181e29;
  padding: 18px 0 14px 0;
  font-size: 14px;
  margin-top: 36px;
}

/* 响应式优化 */
@media (max-width: 1100px) {
  .case-section {
    padding: 26px 2px 0 2px;
  }
}

@media (max-width: 700px) {
  .cases-banner {
    height: 65px;
    min-height: 0;
  }

  .cases-banner-text {
    padding-bottom: 12px;
  }

  .cases-banner-text h1 {
    font-size: 1.1rem;
  }

  .cases-banner-sub {
    font-size: 0.82rem;
  }

  .case-section {
    padding: 10px 0 0 0;
  }

  .case-grid {
    gap: 15px;
  }

  .case-card-body {
    padding: 12px 8px 8px 10px;
  }

  .case-title {
    font-size: 15px;
  }

  .case-desc {
    font-size: 12px;
    min-height: 32px;
  }

  .case-tag {
    font-size: 11px;
    padding: 2px 10px 2px 10px;
  }
}
</style>