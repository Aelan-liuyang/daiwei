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
import anli1 from '@/assets/images/anli1.jpg'
import anli2 from '@/assets/images/anli2.jpg'
import anli3 from '@/assets/images/anli3.jpg'
import anli4 from '@/assets/images/anli4.jpg'
import anli5 from '@/assets/images/anli5.jpg'
const cases = [
  {
    title: '水泥厂耐磨管道',
    desc: '为知名水泥厂提供耐磨管道，保障生产安全',
    img: anli2,
    tags: ['水泥', '耐磨', '管道']
  },
  {
    title: '化工厂耐磨管道',
    desc: '为省内化工厂提供双金属耐磨管，承受高温高压环境',
    img: anli1,
    tags: ['化工', '耐磨', '管道']
  },
  {
    title: '化工厂智能管网',
    desc: '为大型化工企业部署智能管网系统，实现数据可视化与远程运维。',
    img: anli3,
    tags: ['化工', '智能', '管网']
  },

  {
    title: '钢铁厂耐磨管道',
    desc: '为省内钢铁厂提供双金属耐磨管，承受高温高压环境',
    img: anli4,
    tags: ['化工', '耐磨', '管道']
  },
  {
    title: '电子脱销管道',
    desc: '为电子脱销企业提供耐磨管道，延长设备使用寿命',
    img: anli5,
    tags: ['电子', '耐磨', '管道']
  },
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