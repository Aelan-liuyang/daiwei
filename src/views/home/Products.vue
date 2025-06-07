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
      <!-- 分类选择 -->
      <div class="categories-bar">
        <a-radio-group v-model:value="selectedCategory"
          @change="onCategoryChange" button-style="solid">
          <a-radio-button value="all">全部</a-radio-button>
          <a-radio-button
            v-for="cat in categories"
            :key="cat"
            :value="cat">{{ cat }}</a-radio-button>
        </a-radio-group>
      </div>
      <!-- 产品列表 新布局 -->
      <section class="products-section">
        <div class="products-grid">
          <div
            class="product-card-outer"
            v-for="item in pagedProducts"
            :key="item.id"
            @click="goDetail(item.id)">
            <div class="product-card-inner">
              <div class="product-image-wrap">
                <img :src="item.img" class="product-img" :alt="item.title" />
                <span class="product-category">{{ item.category }}</span>
              </div>
              <div class="product-card-content">
                <h3 class="product-title">{{ item.title }}</h3>
                <p class="product-desc">{{ item.desc }}</p>
                <ul class="product-features">
                  <li v-for="f in item.features" :key="f">• {{ f }}</li>
                </ul>
                <div class="card-more">查看详情 &gt;
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页 -->
        <div class="products-pagination">
          <a-pagination
            v-model:current="currentPage"
            :total="filteredProducts.length"
            :page-size="pageSize"
            show-size-changer
            :page-size-options="['4', '8', '12', '16']"
            @change="onPageChange"
            @showSizeChange="onSizeChange"
            :show-total="showTotal" />
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

const router = useRouter()

const products = [
  {
    id: 1,
    title: "碳化硅聚合陶瓷管件",
    desc: "高耐磨高耐腐蚀，适用于极端工况环境，广泛应用于矿山、电厂、钢铁、化工等行业。",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    features: ["优异的耐磨性能", "抗腐蚀能力强", "寿命长、维护成本低"],
    category: "陶瓷管道"
  },
  {
    id: 2,
    title: "陶瓷内衬复合钢管",
    desc: "采用先进复合工艺，将陶瓷内衬与钢管紧密结合，兼具高强度与高耐磨性能。",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    features: ["复合结构，安全可靠", "适用于高温高压输送", "安装简便"],
    category: "陶瓷管道"
  },
  {
    id: 3,
    title: "双金属耐磨管及衬板",
    desc: "内层采用耐磨合金，外层为结构钢，双层材料优势互补，适用于强磨损环境。",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    features: ["高强度、高耐磨", "抗冲击能力强", "广泛应用于渣浆输送"],
    category: "金属管道"
  },
  {
    id: 4,
    title: "高分子聚乙烯管道",
    desc: "采用高分子量聚乙烯材料制成，具有优良的耐腐蚀性和自润滑性。",
    img: "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=400&q=80",
    features: ["耐腐蚀、不结垢", "重量轻、易安装", "适用于化工及市政工程"],
    category: "塑料管道"
  },
  {
    id: 5,
    title: "食品级不锈钢管道",
    desc: "采用304/316L等优质不锈钢，符合食品卫生标准，适用于食品、制药、饮料等行业。",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80",
    features: ["卫生无毒", "表面光滑不易结垢", "耐高温高压"],
    category: "金属管道"
  },
  {
    id: 6,
    title: "管道配件及智能检测",
    desc: "提供各类弯头、三通、法兰及智能检测系统，满足多样化工程需求。",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    features: ["规格齐全，支持定制", "智能化检测，保障安全", "高性价比"],
    category: "配件检测"
  },
  {
    id: 7,
    title: "耐磨陶瓷弯头",
    desc: "弯头内衬高性能陶瓷，适用于高磨损弯管工况。",
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80",
    features: ["高耐磨", "耐腐蚀", "适应高流速"],
    category: "陶瓷管道"
  },
  {
    id: 8,
    title: "钢塑复合管",
    desc: "内层塑料，外层钢管，结合两者优点，适用于多种输送介质。",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    features: ["耐压强度高", "耐腐蚀", "使用寿命长"],
    category: "复合管道"
  },
  {
    id: 9,
    title: "PE给水管",
    desc: "聚乙烯材料，主要用于城镇给水管网，安全无毒，安装简便。",
    img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
    features: ["环保", "柔韧性好", "抗冲击"],
    category: "塑料管道"
  }
]

// 分类自动提取
const categories = Array.from(new Set(products.map(p => p.category)))

const selectedCategory = ref("all")
const pageSize = ref(8) // 默认8，适配4列
const currentPage = ref(1)

const showTotal = total => `共 ${total} 条`

// 分类过滤
const filteredProducts = computed(() => {
  if (selectedCategory.value === "all") return products
  return products.filter(p => p.category === selectedCategory.value)
})

// 分页
const pagedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredProducts.value.slice(start, start + pageSize.value)
})

function onCategoryChange() {
  currentPage.value = 1
}

function onPageChange(page) {
  currentPage.value = page
}

function onSizeChange(_, size) {
  pageSize.value = size
  currentPage.value = 1
}

// 跳转至详情页
function goDetail(id) {
  router.push(`/products/${id}`)
}
</script>

<style scoped>
.products-layout {
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

.categories-bar {
  max-width: 1200px;
  margin: 0 auto 32px auto;
  padding: 0 20px;
  text-align: left;
  display: flex;
  align-items: center;
}

.products-section {
  max-width: 1720px;
  margin: 0 auto;
  padding: 0 12px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(320px, 1fr));
  gap: 36px 36px;
  /* 优化4列时卡片更宽 */
}

.product-card-outer {
  cursor: pointer;
  transition: transform 0.18s, box-shadow 0.18s;
  border-radius: 22px;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.05);
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 440px;
  margin: 0 auto;
}

.product-card-outer:hover {
  transform: translateY(-6px) scale(1.022);
  box-shadow: 0 8px 32px rgba(22, 119, 255, 0.16);
  border-color: #1677ff;
}

.product-card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-image-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  overflow: hidden;
  background: #f3f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card-outer:hover .product-img {
  transform: scale(1.06);
}

.product-category {
  position: absolute;
  bottom: 12px;
  right: 18px;
  background: #1677ffcc;
  color: #fff;
  font-size: 13px;
  padding: 2px 12px;
  border-radius: 10px;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.09);
}

.product-card-content {
  flex: 1;
  padding: 22px 22px 18px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-title {
  font-size: 20px;
  color: #222;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-desc {
  font-size: 15px;
  color: #444;
  margin-bottom: 10px;
  min-height: 44px;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-features {
  padding-left: 18px;
  color: #f58200;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
  min-height: 44px;
}

.card-more {
  margin-top: 16px;
  color: #1677ff;
  font-size: 15px;
  font-weight: 500;
  text-align: right;
  letter-spacing: 1px;
  transition: color 0.2s;
}

.product-card-outer:hover .card-more {
  color: #0b45a1;
}

.products-pagination {
  text-align: center;
  margin: 46px 0 0 0;
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
@media (max-width: 1720px) {
  .products-section {
    max-width: 1540px;
  }

  .products-grid {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    gap: 28px 22px;
  }
}

@media (max-width: 1400px) {
  .products-section {
    max-width: 1240px;
  }

  .products-grid {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
  }
}

@media (max-width: 1050px) {
  .products-section {
    max-width: 900px;
  }

  .products-grid {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    gap: 22px 10px;
  }
}

@media (max-width: 700px) {
  .products-section {
    max-width: 100vw;
    padding: 0 2px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 12px 0;
  }

  .product-card-outer {
    max-width: 95vw;
  }
}
</style>