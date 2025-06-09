<template>
  <a-layout class="products-layout">
    <Header />
    <a-layout-content class="main-content">
      <!-- 顶部大Banner -->
      <div class="products-banner">
        <div class="products-banner-text">
          <h1>产品服务</h1>
          <p>致力于为客户提供高质量、多样化的管道产品与全方位服务</p>
        </div>
      </div>
      <section class="products-section">
        <div class="product-detail-modern">
          <!-- 顶部面包屑 -->
          <div class="product-breadcrumb">
            <a-breadcrumb>
              <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
              <a-breadcrumb-item>
                <a href="/products">产品服务</a>
              </a-breadcrumb-item>
              <a-breadcrumb-item>{{ currentCategory }}</a-breadcrumb-item>
            </a-breadcrumb>
          </div>
          <div class="product-detail-content">
            <!-- 左侧信息区 -->
            <aside class="side-info-panel">
              <section class="side-block product-category">
                <div class="side-title">产品分类</div>
                <ul>
                  <li v-for="cat in categories" :key="cat"
                    :class="{ active: cat === currentCategory }"
                    @click="selectCategory(cat)">
                    {{ cat }}
                  </li>
                </ul>
              </section>
              <section class="side-block news">
                <div class="side-title">新闻中心</div>
                <ul>
                  <li v-for="(news, i) in newsList" :key="i">{{ news }}</li>
                </ul>
              </section>
              <section class="side-block keywords">
                <div class="side-title">热门关键词</div>
                <div class="keywords-list">
                  <span v-for="(kw, i) in keywords" :key="i">{{ kw }}</span>
                </div>
              </section>
            </aside>
            <!-- 右侧产品区 -->
            <main class="product-gallery-panel">
              <h2 class="product-title-modern">{{ currentCategory }}及配件</h2>
              <div class="product-gallery-grid">
                <div
                  v-for="item in filteredProductList"
                  :key="item.title"
                  class="gallery-item"
                  @click="goDetail(item)">
                  <div class="img-wrap">
                    <img :src="item.img" :alt="item.title" />
                  </div>
                  <div class="img-title">{{ item.title }}</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </a-layout-content>
    <Footer />
  </a-layout>
</template>



<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import zhenkong from '@/assets/images/zhenkong.jpg'
import duihan from '@/assets/images/duihan.jpg'
import xiangjiao from '@/assets/images/xiangjiao.jpg'
import penzui from '@/assets/images/penzui.jpg'
import jusi from '@/assets/images/jusi.jpg'
import gangsu from '@/assets/images/gangsu.jpg'
import zuran1 from '@/assets/images/zuran1.jpg'
import zuran2 from '@/assets/images/zuran2.jpg'
import guijia1 from '@/assets/images/guijia1.jpg'
import guijia2 from '@/assets/images/guijia2.jpg'
import shuangjin from '@/assets/images/shuangjin.jpg'
import gaonai from '@/assets/images/gaonai.png'
import chenjiao from '@/assets/images/chenjiao.jpg'
import tanhua from '@/assets/images/tanhua.jpg'
import chenci from '@/assets/images/chenci.jpg'
import tanhuaduo from '@/assets/images/tanhuaduo.jpg'
import daituo from '@/assets/images/daituo.jpg'
import tanhuada from '@/assets/images/tanhuada.jpg'
import tanhuahe from '@/assets/images/tanhuahe.jpg'
import tanhuayi from '@/assets/images/tanhuayi.jpg'
import tanhuaguan from '@/assets/images/tanhuaguan.jpg'
import tanhuazhi from '@/assets/images/tanhuazhi.jpg'

import taoci from '@/assets/images/taoci.jpg'
import taociwan from '@/assets/images/taociwan.jpg'
import taocinai from '@/assets/images/taocinai.jpg'
import daibeibao from '@/assets/images/daibeibao.jpg'
import taocifu from '@/assets/images/taocifu.png'




// 分类
const categories = [
  "碳化硅聚合陶瓷管",
  "反应阻燃型-碳化硅聚合陶瓷涂抹",
  "双金属耐磨管",
  "陶瓷内衬复合钢管",
  "陶瓷贴片耐磨管",
  "龟甲网耐磨陶瓷管"
]
const currentCategory = ref(categories[0])
function selectCategory(cat) {
  currentCategory.value = cat
}

// 新闻
const newsList = [
  "碳化硅陶瓷管的新型应用案例",
  "几种常见耐磨管道对比",
  "反应阻燃型陶瓷管道技术更新",
  "工业管道选型小知识",
  "陶瓷贴片耐磨管安装方法"
]

// 关键词
const keywords = [
  "脱硫管道", "耐磨陶瓷管", "陶瓷贴片耐磨管", "龟甲网耐磨陶瓷管", "SIC陶瓷涂抹", "真空带式脱水机", "碳化硅陶瓷喷嘴"
]

// 产品图片和标题（每个分类一组，演示可适当复用图片）
const allProductList = [
  { category: "碳化硅聚合陶瓷管", img: zhenkong, title: "真空皮带脱水机及配件" },
  { category: "碳化硅聚合陶瓷管", img: duihan, title: "堆焊耐磨衬板管件" },
  { category: "碳化硅聚合陶瓷管", img: xiangjiao, title: "橡胶膨胀节" },
  { category: "碳化硅聚合陶瓷管", img: penzui, title: "烧结碳化硅陶瓷管件.喷嘴" },
  { category: "碳化硅聚合陶瓷管", img: jusi, title: "聚四氟内衬管件" },
  { category: "碳化硅聚合陶瓷管", img: gangsu, title: "钢塑复合管件" },
  { category: "碳化硅聚合陶瓷管", img: chenjiao, title: "衬胶管件" },
  { category: "碳化硅聚合陶瓷管", img: tanhua, title: " 碳化硅聚合陶瓷直管" },
  { category: "碳化硅聚合陶瓷管", img: chenci, title: "衬瓷弯管" },
  { category: "碳化硅聚合陶瓷管", img: tanhuaduo, title: "碳化硅聚合三（多）通" },
  { category: "碳化硅聚合陶瓷管", img: daituo, title: "带托座衬瓷弯头" },
  { category: "碳化硅聚合陶瓷管", img: tanhuada, title: "碳化硅聚合陶瓷大小头" },
  { category: "碳化硅聚合陶瓷管", img: tanhuahe, title: "碳化硅聚合陶瓷管" },
  { category: "碳化硅聚合陶瓷管", img: tanhuayi, title: "碳化硅聚合陶瓷大小头异型件" },
  { category: "碳化硅聚合陶瓷管", img: tanhuaguan, title: "碳化硅衬瓷管件" },
  { category: "碳化硅聚合陶瓷管", img: tanhuazhi, title: "碳化硅直管" },

  { category: "反应阻燃型-碳化硅聚合陶瓷涂抹", img: zuran1, title: "阻燃型碳化硅衬瓷材料" },
  { category: "反应阻燃型-碳化硅聚合陶瓷涂抹", img: zuran2, title: "阻燃型碳化硅陶瓷衬材" },
  { category: "双金属耐磨管", img: shuangjin, title: "双金属耐磨管及异形件" },

  { category: "陶瓷内衬复合钢管", img: taoci, title: "陶瓷内衬复合钢管" },
  { category: "陶瓷内衬复合钢管", img: taociwan, title: "陶瓷耐磨弯管" },
  { category: "陶瓷内衬复合钢管", img: taocinai, title: "陶瓷耐磨直管" },
  { category: "陶瓷内衬复合钢管", img: daibeibao, title: "带背包耐磨陶瓷管件" },
  { category: "陶瓷内衬复合钢管", img: taocifu, title: "陶瓷复合钢管" },

  { category: "陶瓷贴片耐磨管", img: gaonai, title: "碳化硅陶瓷耐磨管道" },
  { category: "龟甲网耐磨陶瓷管", img: guijia1, title: "龟甲网耐磨陶瓷管" },
  { category: "龟甲网耐磨陶瓷管", img: guijia2, title: "龟甲网刚玉喷涂耐磨管" }
]

const filteredProductList = computed(() =>
  allProductList.filter(item => item.category === currentCategory.value)
)

const router = useRouter()
function goDetail(item) {
  // 将产品数据作为路由参数传递
  router.push({
    path: `/products/${encodeURIComponent(item.title)}`,
    query: {
      category: item.category,
      image: item.img
    }
  })
}
</script>

<style scoped>
.products-layout {
  min-height: 100vh;
  background: #f7f9fb;
}

.main-content {
  background: #f7f9fb;
  min-height: 550px;
  padding-bottom: 40px;
}

.products-banner {
  background: url('@/assets/images/productBg.jpg') no-repeat center/cover;
  color: #fff;
  height: 240px;
  display: flex;
  align-items: flex-end;
  padding-left: 70px;
  margin-bottom: 40px;
  border-radius: 0 0 26px 26px;
  position: relative;
  overflow: hidden;
}

.products-banner-text {
  padding: 36px 48px 18px 0;
  border-radius: 0 0 18px 0;
}

.products-banner h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.products-banner p {
  font-size: 17px;
  color: #e5eefa;
}

.products-section {
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4px;
}

.product-detail-modern {
  background: #f7f9fb;
  min-height: 100vh;
  font-family: 'Inter', 'HarmonyOS Sans', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
}

/* 面包屑 */
.product-breadcrumb {
  background: #fff;
  border-radius: 0 0 14px 14px;
  box-shadow: 0 1px 8px rgba(22, 119, 255, 0.04);
  padding: 24px 32px 12px 32px;
  margin-bottom: 0;
  font-size: 16px;
}

.product-detail-content {
  display: flex;
  align-items: flex-start;
  max-width: 1380px;
  margin: 32px auto 0 auto;
  gap: 32px;
  padding: 0 12px;
}

/* 左侧侧边栏 */
.side-info-panel {
  flex: 0 0 260px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 200px;
}

/* 侧边栏区块 */
.side-block {
  background: #fff;
  border-radius: 13px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
  padding: 20px 16px 13px 18px;
  margin-bottom: 0;
}

.side-title {
  font-size: 16px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 14px;
  letter-spacing: 1px;
}

/* 分类 */
.product-category ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-category li {
  font-size: 15px;
  color: #222;
  padding: 12px 0 12px 0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.16s, color 0.16s;
  margin-bottom: 2px;
  padding-left: 6px;
  white-space: normal;
  word-break: break-all;
}

.product-category li.active,
.product-category li:hover {
  background: #f4f9ff;
  color: #1677ff;
  font-weight: 600;
}

/* 新闻中心 */
.news ul {
  list-style: disc inside;
  padding-left: 0;
  color: #555;
  font-size: 13.5px;
}

.news li {
  margin-bottom: 6px;
  line-height: 1.7;
}

/* 关键词 */
.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
}

.keywords-list span {
  background: #f3f8fd;
  color: #1677ff;
  border-radius: 6px;
  font-size: 12.5px;
  padding: 2px 10px;
  margin-bottom: 2px;
}

/* 右侧产品展示区 */
.product-gallery-panel {
  flex: 1 1 0;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 14px rgba(22, 119, 255, 0.06);
  padding: 32px 22px 24px 22px;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.product-title-modern {
  font-size: 1.5rem;
  color: #1677ff;
  font-weight: 800;
  margin-bottom: 28px;
  letter-spacing: 1px;
  text-align: left;
}

/* 图片网格，三列 */
.product-gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px 32px;
}

/* 产品卡片 */
.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfcfe;
  border-radius: 11px;
  box-shadow: 0 2px 10px rgba(22, 119, 255, 0.05);
  padding: 22px 12px 14px 12px;
  transition: box-shadow 0.18s, transform 0.13s;
  cursor: pointer;
  min-width: 0;
}

.gallery-item:hover {
  box-shadow: 0 5px 24px rgba(22, 119, 255, 0.13);
  transform: translateY(-4px) scale(1.035);
}

.img-wrap {
  width: 100%;
  aspect-ratio: 1.1 / 1;
  background: #f4f7fb;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  max-width: 360px;
  min-height: 180px;
}

.img-wrap img {
  width: 92%;
  height: 92%;
  object-fit: contain;
  display: block;
}

.img-title {
  font-size: 15.5px;
  color: #333;
  text-align: center;
  margin-top: 6px;
  line-height: 1.35;
  font-weight: 500;
  letter-spacing: 0.5px;
  word-break: break-all;
  max-width: 96%;
}

/* 响应式 */
@media (max-width: 1100px) {
  .product-detail-content {
    flex-direction: column;
    gap: 12px;
    padding: 0 2vw;
  }

  .side-info-panel {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    min-width: 0;
    width: 100%;
  }

  .side-block {
    min-width: 120px;
    flex: 1 1 140px;
    padding: 14px 6px 10px 6px;
  }

  .product-gallery-panel {
    padding: 14px 2px 14px 2px;
  }
}

@media (max-width: 900px) {
  .product-gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px 10px;
  }

  .img-wrap {
    max-width: 98vw;
    min-height: 110px;
  }
}

@media (max-width: 600px) {
  .product-breadcrumb {
    padding: 8px 4px 4px 4px;
    font-size: 12px;
  }

  .product-title-modern {
    font-size: 1.08rem;
    margin-bottom: 10px;
  }

  .product-gallery-grid {
    grid-template-columns: 1fr;
    gap: 10px 0;
  }

  .img-wrap {
    min-height: 72px;
  }
}
</style>