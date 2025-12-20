<template>
  <a-layout class="modern-about-wrapper">
    <Header />

    <a-layout-content>
      <section class="hero-banner">
        <div class="hero-overlay"></div>
        <img src="@/assets/images/aboutUs.jpeg" class="hero-img" alt="Daiwei Office" />
        <div class="hero-content">
          <div class="hero-tag" data-aos="fade-down">SINCE 2010</div>
          <h1 class="hero-title">
            <span class="light">铸就工业之魂</span><br />
            <span class="bold">岱威创新管业</span>
          </h1>
          <div class="hero-divider"></div>
          <p class="hero-subtitle">专业的耐磨、耐腐蚀、耐高温复合管道系统集成服务商</p>

          <div class="hero-stats">
            <div class="stat-card" v-for="(s, i) in stats" :key="i">
              <span class="stat-value">{{ s.val }}</span>
              <span class="stat-label">{{ s.label }}</span>
            </div>
          </div>
        </div>
        <div class="mouse-scroll">
          <div class="mouse-dot"></div>
        </div>
      </section>

      <section class="section-container intro-grid-section">
        <div class="content-wrapper">
          <div class="grid-layout">
            <div class="text-side animate-on-scroll">
              <div class="section-badge">ABOUT US</div>
              <h2 class="section-main-title">山东岱威创新管业有限公司</h2>
              <p class="en-sub-title">SHANDONG DAIWEI INNOVATION PIPE CO., LTD</p>
              <div class="text-content">
                <p>
                  山东岱威创新管业坐落于泉城济南，是一家集<strong>研发、生产、经营</strong>为一体的科创型企业。我们深耕于耐磨损、耐腐蚀、耐冲击、耐热复合管道领域，作为综合服务商，专业为电力、矿山、钢铁、石化等行业提供适应不同介质环境的一体化解决方案。
                </p>
                <p>
                  公司拥有一支由行业资深专家领衔的技术团队，通过现场测绘、方案优化，有效解决工业管道运行中的安全隐患，为客户实现降本增效。
                </p>
              </div>
              <div class="tech-tags">
                <router-link
                  v-for="tag in productTags"
                  :key="tag.name"
                  :to="tag.url"
                  class="tech-chip"
                >
                  {{ tag.name }}
                </router-link>
              </div>
            </div>
            <div class="image-side animate-on-scroll">
              <div class="image-stack">
                <div class="image-main">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                    alt="工业生产"
                  />
                </div>
                <div class="image-decoration"></div>
                <div class="experience-box">
                  <span class="exp-num">15+</span>
                  <span class="exp-txt">年行业深耕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-container advantages-section">
        <div class="content-wrapper">
          <div class="centered-header">
            <div class="section-badge centered">CORE ADVANTAGES</div>
            <h2 class="section-main-title centered">我们的核心优势</h2>
          </div>
          <div class="advantage-grid">
            <div class="adv-card" v-for="(adv, idx) in advantages" :key="idx">
              <div class="adv-icon">{{ adv.icon }}</div>
              <h3>{{ adv.title }}</h3>
              <p>{{ adv.desc }}</p>
              <div class="adv-number">0{{ idx + 1 }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-container culture-section">
        <div class="culture-bg-blobs"></div>
        <div class="content-wrapper">
          <div class="culture-grid">
            <div class="culture-item" v-for="c in cultures" :key="c.key">
              <div class="c-icon-wrap">{{ c.icon }}</div>
              <h4>{{ c.key }}</h4>
              <p>{{ c.value }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-container honors-section">
        <div class="content-wrapper">
          <div class="section-header-flex">
            <div>
              <div class="section-badge">QUALIFICATIONS</div>
              <h2 class="section-main-title">荣誉资质</h2>
            </div>
          </div>
          <div class="honors-masonry">
            <div
              class="honor-card"
              v-for="(honor, idx) in honors"
              :key="idx"
              @click="openHonorModal(honor)"
            >
              <div class="honor-img-wrapper">
                <img :src="honor.img" :alt="honor.title" loading="lazy" />
                <div class="honor-mask">
                  <span class="zoom-icon">🔍 查看详情</span>
                </div>
              </div>
              <div class="honor-info">
                <p>{{ honor.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-container team-section">
        <div class="content-wrapper">
          <div class="section-badge centered">OUR TEAM</div>
          <h2 class="section-main-title centered">核心专家团队</h2>
          <div class="team-grid">
            <div class="team-member-card" v-for="m in team" :key="m.name">
              <div class="member-avatar-wrap">
                <img :src="m.avatar" alt="avatar" />
              </div>
              <div class="member-info">
                <h4>{{ m.name }}</h4>
                <span class="role">{{ m.role }}</span>
                <p>{{ m.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </a-layout-content>

    <Footer />

    <a-modal
      v-model:open="honorModalVisible"
      :footer="null"
      :width="800"
      centered
      class="custom-honor-modal"
    >
      <div v-if="selectedHonor" class="modal-preview">
        <img :src="selectedHonor.img" class="modal-img" />
        <h3 class="modal-title">{{ selectedHonor.title }}</h3>
      </div>
    </a-modal>
  </a-layout>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { useSEO } from '@/composables/useSEO'
import { onMounted, ref } from 'vue'

// 导入荣誉资质图片（保留您的导入路径）
import rongyu1 from '@/assets/images/rongyu1.jpg'
import rongyu10 from '@/assets/images/rongyu10.jpg'
import rongyu11 from '@/assets/images/rongyu11.jpg'
import rongyu12 from '@/assets/images/rongyu12.jpg'
import rongyu2 from '@/assets/images/rongyu2.jpg'
import rongyu3 from '@/assets/images/rongyu3.jpg'
import rongyu4 from '@/assets/images/rongyu4.jpg'
import rongyu5 from '@/assets/images/rongyu5.jpg'
import rongyu6 from '@/assets/images/rongyu6.jpg'
import rongyu7 from '@/assets/images/rongyu7.jpg'
import rongyu8 from '@/assets/images/rongyu8.jpg'
import rongyu9 from '@/assets/images/rongyu9.jpg'

const { setSEO } = useSEO()

// 数据配置
const stats = [
  { val: '15+', label: '年技术积淀' },
  { val: '200+', label: '专利技术' },
  { val: '1000+', label: '合作客户' },
  { val: '24h', label: '响应服务' }
]

const productTags = [
  { name: '碳化硅聚合陶瓷管', url: '/products?category=碳化硅聚合陶瓷管' },
  { name: '陶瓷复合钢管', url: '/products?category=陶瓷内衬复合钢管' },
  { name: '双金属耐磨管', url: '/products?category=双金属耐磨管' },
  { name: '陶瓷贴片耐磨管', url: '/products?category=陶瓷贴片耐磨管' },
  { name: '真空皮带脱水机', url: '/products' }
]

const advantages = [
  {
    icon: '🛠️',
    title: '一站式定制',
    desc: '集研发、设计、生产于一体，提供针对复杂工况的专属管道解决方案。'
  },
  {
    icon: '🔬',
    title: '硬核研发',
    desc: '拥有由教授级专家领衔的技术团队，在衬胶、碳化硅聚合陶瓷等领域领先行业。'
  },
  {
    icon: '📐',
    title: '精准测绘',
    desc: '专业团队现场测绘优化，针对异型件、易损件进行针对性增强设计。'
  },
  {
    icon: '🛡️',
    title: '安全保障',
    desc: '结合强度高、耐腐蚀性强，解决传统管件易脱落、寿命短的核心痛点。'
  }
]

const cultures = [
  { icon: '🎯', key: '企业愿景', value: '成为全球工业管道系统领域具有影响力的创新型企业。' },
  { icon: '🚀', key: '企业使命', value: '科技赋能工业，为客户创造价值，助力绿色可持续发展。' },
  { icon: '💎', key: '核心价值观', value: '诚信、创新、协作、卓越' }
]

const team = [
  {
    name: '庄振华',
    role: '创始人 & CEO',
    desc: '20年工业管道工程经验，擅长企业战略与产品创新。',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
  },
  {
    name: '庄晓婧',
    role: '技术总监',
    desc: '工业自动化硕士，主导智能设计与运维平台研发。',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka'
  },
  {
    name: '张伟',
    role: '项目经理',
    desc: '丰富的大型工程实施与管理经验，保障高质量交付。',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack'
  }
]

const honors = [
  { title: '质量管理体系认证', img: rongyu1 },
  { title: '环境管理体系认证', img: rongyu2 },
  { title: '职业健康安全认证', img: rongyu3 },
  { title: '产品质量认证', img: rongyu4 },
  { title: '技术创新奖', img: rongyu5 },
  { title: '优秀企业奖', img: rongyu6 },
  { title: '行业领军企业', img: rongyu7 },
  { title: '科技进步奖', img: rongyu8 },
  { title: '专利技术证书', img: rongyu9 },
  { title: '质量信誉AAA级', img: rongyu10 },
  { title: '守合同重信用', img: rongyu11 },
  { title: '安全生产标准化', img: rongyu12 }
]

const honorModalVisible = ref(false)
const selectedHonor = ref(null)

const openHonorModal = honor => {
  selectedHonor.value = honor
  honorModalVisible.value = true
}

onMounted(() => {
  setSEO({
    title: '关于我们 - 山东岱威创新管业',
    description:
      '山东岱威创新管业有限公司成立于2010年，专注耐磨、耐腐蚀、耐高温复合管道研发与制造。',
    keywords: '岱威管业,公司简介,企业文化,碳化硅管,耐磨管道'
  })

  window.scrollTo(0, 0)

  // 滚动触发动效
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* --- 布局容器 --- */
.modern-about-wrapper {
  background: #fff;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.section-container {
  padding: 100px 0;
}

.content-wrapper {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 30px;
}

/* --- 1. Hero Section --- */
.hero-banner {
  height: 85vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f172a;
  color: #fff;
  overflow: hidden;
}

.hero-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
  animation: slowPan 20s infinite alternate;
}

@keyframes slowPan {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.5));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-tag {
  display: inline-block;
  padding: 6px 22px;
  background: #1677ff;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 4.2rem);
  line-height: 1.2;
  margin-bottom: 24px;
  color: #fff;
}

.hero-title .light {
  font-weight: 300;
  opacity: 0.8;
}
.hero-title .bold {
  font-weight: 800;
  background: linear-gradient(90deg, #fff, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #cbd5e1;
  max-width: 600px;
  margin: 0 auto 50px;
}

.hero-stats {
  display: flex;
  gap: 60px;
  justify-content: center;
}

.stat-card {
  text-align: center;
}
.stat-value {
  font-size: 42px;
  font-weight: 800;
  color: #1677ff;
  display: block;
}
.stat-label {
  font-size: 14px;
  color: #94a3b8;
}

.mouse-scroll {
  position: absolute;
  bottom: 30px;
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  z-index: 2;
}

.mouse-dot {
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  margin: 6px auto;
  animation: scrollAnim 2s infinite;
}

@keyframes scrollAnim {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* --- 2. Intro Section --- */
.grid-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
}

.section-badge {
  color: #1677ff;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.section-badge.centered {
  text-align: center;
  display: block;
}

.section-main-title {
  font-size: 34px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}

.section-main-title.centered {
  text-align: center;
  margin-bottom: 50px;
}

.en-sub-title {
  color: #94a3b8;
  font-size: 14px;
  margin-bottom: 30px;
  display: block;
}

.text-content {
  font-size: 16px;
  line-height: 2;
  color: #475569;
  margin-bottom: 40px;
}
.text-content p {
  margin-bottom: 20px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tech-chip {
  padding: 10px 20px;
  background: #f8fafc;
  border-radius: 10px;
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s;
  border: 1px solid #e2e8f0;
}

.tech-chip:hover {
  background: #fff;
  border-color: #1677ff;
  color: #1677ff;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(22, 119, 255, 0.1);
}

.image-stack {
  position: relative;
  padding: 20px;
}
.image-main img {
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

.experience-box {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: #1677ff;
  color: #fff;
  padding: 35px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(22, 119, 255, 0.35);
}

.exp-num {
  font-size: 48px;
  font-weight: 900;
  display: block;
  line-height: 1;
}
.exp-txt {
  font-size: 15px;
  font-weight: 500;
  opacity: 0.9;
}

/* --- 3. Advantages Section --- */
.advantages-section {
  background: #f8fafc;
}
.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.adv-card {
  background: #fff;
  padding: 50px 40px;
  border-radius: 28px;
  position: relative;
  border: 1px solid #e2e8f0;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.adv-card:hover {
  transform: translateY(-12px);
  border-color: #1677ff;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.06);
}

.adv-icon {
  font-size: 44px;
  margin-bottom: 30px;
}
.adv-card h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #0f172a;
}
.adv-card p {
  color: #64748b;
  line-height: 1.7;
  font-size: 15px;
}
.adv-number {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 60px;
  font-weight: 900;
  color: #f1f5f9;
  z-index: 0;
  line-height: 1;
}

/* --- 4. Culture Section --- */
.culture-section {
  position: relative;
  background: #0f172a;
  color: #fff;
  padding: 120px 0;
}

.culture-bg-blobs {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 15%, rgba(22, 119, 255, 0.18) 0%, transparent 45%),
    radial-gradient(circle at 85% 85%, rgba(67, 198, 172, 0.15) 0%, transparent 45%);
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;
}

.culture-item {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  padding: 50px 40px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  transition: 0.3s;
}

.culture-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(22, 119, 255, 0.4);
}
.c-icon-wrap {
  font-size: 54px;
  margin-bottom: 25px;
}
.culture-item h4 {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 18px;
}
.culture-item p {
  color: #94a3b8;
  font-size: 16px;
  line-height: 1.8;
}

/* --- 5. Honors Section --- */
.honors-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.honor-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}

.honor-img-wrapper {
  position: relative;
  aspect-ratio: 4/5;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.honor-img-wrapper img {
  width: 90%;
  height: 90%;
  object-fit: contain;
}

.honor-mask {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.4s;
}

.honor-card:hover .honor-mask {
  opacity: 1;
}
.zoom-icon {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
}

.honor-info {
  padding: 20px;
  text-align: center;
  font-weight: 700;
  color: #1e293b;
  background: #fff;
}

/* --- 6. Team Section --- */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
}

.team-member-card {
  text-align: center;
}
.member-avatar-wrap {
  width: 160px;
  height: 160px;
  margin: 0 auto 25px;
  border-radius: 50%;
  padding: 8px;
  border: 2px solid #1677ff;
}
.member-avatar-wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f1f5f9;
}
.member-info h4 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 5px;
}
.member-info .role {
  color: #1677ff;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 15px;
}
.member-info p {
  color: #64748b;
  font-size: 15px;
  line-height: 1.8;
  max-width: 280px;
  margin: 0 auto;
}

/* --- Modal & Animations --- */
.modal-preview {
  text-align: center;
  padding: 20px;
}
.modal-img {
  max-width: 100%;
  max-height: 70vh;
  border-radius: 8px;
}
.modal-title {
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
}

.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .grid-layout,
  .culture-grid {
    grid-template-columns: 1fr;
    gap: 50px;
  }
  .hero-stats {
    gap: 30px;
    flex-wrap: wrap;
  }
  .image-side {
    order: -1;
  }
  .section-container {
    padding: 70px 0;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .stat-value {
    font-size: 32px;
  }
  .experience-box {
    padding: 20px;
    position: static;
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  .culture-item {
    padding: 35px 25px;
  }
}
</style>
