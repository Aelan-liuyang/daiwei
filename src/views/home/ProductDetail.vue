<template>
  <a-layout class="product-detail-layout">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item>
          <a href="/products">产品服务</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{ product.name }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <!-- 产品主图和简介 -->
    <div class="product-main">
      <div class="product-image-block">
        <img :src="product.mainImage" class="main-img" />
        <div class="thumbs-row">
          <img
            v-for="(img, i) in product.images"
            :key="i"
            :src="img"
            :class="['thumb-img', { active: img === product.mainImage }]"
            @click="setMainImage(img)" />
        </div>
      </div>
      <div class="product-info-block">
        <h1 class="product-title">{{ product.name }}</h1>
        <ul class="product-features">
          <li v-for="(item, i) in product.features" :key="i">{{ item }}</li>
        </ul>
        <div class="product-btns">
          <a-button>常见问题</a-button>
          <a-button type="primary" style="margin-left:18px;">技术咨询</a-button>
        </div>
      </div>
    </div>

    <!-- 视频及相关内容推荐 -->
    <div class="product-video-section">
      <div class="video-left">
        <!-- 假设是YouTube/B站/自有视频，也可以用 img 占位 -->
        <div class="video-player">
          <img :src="product.videoCover"
            style="width:100%;border-radius:12px;" />
          <div class="video-play-btn"></div>
        </div>
      </div>
      <div class="video-right">
        <div class="video-recommend-title">相关安装/演示</div>
        <ul class="video-recommend-list">
          <li v-for="(item, i) in product.relatedVideos" :key="i">
            <a :href="item.link" target="_blank">
              <img :src="item.img" class="video-thumb" />
              <div class="video-title">{{ item.title }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 资料下载区域 -->
    <div class="product-resource-section">
      <div class="resource-tabs">
        <a-tabs v-model:activeKey="tabKey">
          <a-tab-pane key="all" tab="所有资源">
            <ResourceTable :resources="product.resources" />
          </a-tab-pane>
          <a-tab-pane key="software" tab="软件">
            <SoftwareTable :softwares="product.softwares" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>

    <!-- 相关系统/产品推荐 -->
    <div class="product-systems-section">
      <div class="systems-title">相关系统</div>
      <div class="systems-row">
        <div v-for="(item, i) in product.systems" :key="i" class="system-block">
          <img :src="item.img" alt="" class="system-img" />
          <div class="system-caption">
            <div class="system-name">{{ item.name }}</div>
            <div class="system-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue'
import ResourceTable from '@/components/ResourceTable.vue'
import SoftwareTable from '@/components/SoftwareTable.vue'
import rongyu from '@/assets/images/rongyu.jpeg'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = Number(route.params.id)
// 示例数据，可从后端/路由参数获取
const product = ref({
  name: 'FIRELOCK™ INSTALLATION-READY™ 沟槽管件',
  mainImage: rongyu,
  images: [
    rongyu,
    rongyu,
    rongyu,
    rongyu,
  ],
  features: [
    '一体式管件，安装更便捷，可靠性高',
    '安装效率比传统方式提升4倍',
    '比螺纹连接快5倍',
    '适用管径：1”~2½”（32~65 mm, 76.1 mm）',
  ],
  videoCover: rongyu,
  relatedVideos: [
    {
      img: rongyu,
      title: 'FIRELOCK™ 安装演示',
      link: '#'
    },
    {
      img: rongyu,
      title: '沟槽管件对比讲解',
      link: '#'
    },
    {
      img: rongyu,
      title: '管道系统案例',
      link: '#'
    },
  ],
  resources: [
    {
      name: 'FIRELOCK™ INSTALLATION-READY™ 管件产品样本',
      number: '10.06',
      download: '#',
      collection: '#'
    },
    {
      name: 'FIRELOCK™ 安装说明书 (B-101/103)',
      number: '101,103',
      download: '#',
      collection: '#'
    },
    {
      name: 'FIRELOCK™ 安装说明书 (B-102-104)',
      number: '102-104',
      download: '#',
      collection: '#'
    },
    {
      name: '类型兼容性及应用指南',
      number: 'AN-001',
      download: '#',
      collection: '#'
    }
  ],
  softwares: [
    { name: 'Revit ELS-GLOBAL - 10.06', download: '#' },
    { name: 'Revit Europe - 10.06', download: '#' },
    { name: 'Revit UK - 10.06', download: '#' },
    { name: 'Revit ANZ - 10.06', download: '#' },
    { name: 'AutoCAD 10.06', download: '#' }
  ],
  systems: [
    {
      img: rongyu,
      name: 'FIRELOCK™ INSTALLATION-READY™ 管件',
      desc: ''
    },
    {
      img: rongyu,
      name: 'INSTALLATION-READY™ 技术',
      desc: ''
    }
  ]
})

const tabKey = ref('all')

function setMainImage(img) {
  product.value.mainImage = img
}
</script>

<style scoped>
.product-detail-layout {
  background: #f7f9fb;
  min-height: 100vh;
  padding: 0 0 40px 0;
}

.breadcrumb {
  margin: 24px 0 16px 32px;
}

.product-main {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 0 auto 36px auto;
  max-width: 1080px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(22, 119, 255, 0.07);
  padding: 32px 44px 28px 44px;
}

.product-image-block {
  flex: 1.05;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-img {
  width: 330px;
  max-width: 75vw;
  border-radius: 18px;
  box-shadow: 0 2px 18px rgba(22, 119, 255, 0.10);
  background: #fff;
  margin-bottom: 22px;
}

.thumbs-row {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.thumb-img {
  width: 54px;
  height: 54px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid #eee;
  cursor: pointer;
  background: #fff;
  transition: border-color 0.18s;
}

.thumb-img.active,
.thumb-img:hover {
  border-color: #1677ff;
}

.product-info-block {
  flex: 1.6;
  min-width: 280px;
  padding-left: 18px;
}

.product-title {
  font-size: 1.45rem;
  color: #1677ff;
  font-weight: 800;
  margin-bottom: 14px;
  letter-spacing: 1px;
}

.product-features {
  margin-bottom: 16px;
  color: #444;
  font-size: 15.7px;
  line-height: 1.85;
  list-style: disc inside;
  padding-left: 0;
}

.product-btns {
  margin-top: 18px;
}

/* 视频区 */
.product-video-section {
  display: flex;
  max-width: 1080px;
  margin: 0 auto 36px auto;
  gap: 32px;
}

.video-left {
  flex: 1.5;
}

.video-player {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  min-height: 236px;
}

.video-play-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: rgba(22, 119, 255, 0.93);
  box-shadow: 0 4px 18px rgba(22, 119, 255, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-play-btn::before {
  content: '';
  display: block;
  margin-left: 11px;
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 30px solid #fff;
}

.video-right {
  flex: 1.1;
  padding-top: 12px;
}

.video-recommend-title {
  font-size: 17px;
  color: #1677ff;
  font-weight: 600;
  margin-bottom: 16px;
}

.video-recommend-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.video-recommend-list li {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.video-thumb {
  width: 70px;
  height: 54px;
  object-fit: cover;
  border-radius: 7px;
  margin-right: 13px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.08);
  background: #fff;
}

.video-title {
  color: #222;
  font-size: 14px;
  font-weight: 600;
}

/* 资源下载区 */
.product-resource-section {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 16px rgba(22, 119, 255, 0.06);
  padding: 16px 18px 18px 18px;
  max-width: 1080px;
  margin: 0 auto 46px auto;
}

.resource-tabs {
  width: 100%;
}

.product-systems-section {
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 36px;
}

.systems-title {
  font-size: 1.16rem;
  font-weight: 700;
  color: #1677ff;
  margin: 28px 0 22px 6px;
  letter-spacing: 2px;
}

.systems-row {
  display: flex;
  gap: 36px;
  justify-content: flex-start;
  align-items: stretch;
}

.system-block {
  background: linear-gradient(120deg, #eaf6ff 0%, #fafdff 100%);
  border-radius: 11px;
  box-shadow: 0 2px 11px rgba(22, 119, 255, 0.05);
  padding: 18px 22px 10px 22px;
  min-width: 200px;
  max-width: 260px;
  flex: 1 1 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.system-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 18px;
}

.system-caption {
  text-align: center;
}

.system-name {
  font-size: 15.2px;
  font-weight: 700;
  color: #1677ff;
  margin-bottom: 5px;
}

.system-desc {
  color: #444;
  font-size: 13px;
  min-height: 20px;
}

/* 响应式优化 */
@media (max-width: 1200px) {

  .product-main,
  .product-video-section,
  .product-resource-section,
  .product-systems-section {
    max-width: 98vw;
    padding-left: 8px;
    padding-right: 8px;
  }

  .system-block {
    max-width: 48vw;
  }
}

@media (max-width: 800px) {

  .product-main,
  .product-video-section {
    flex-direction: column;
    gap: 18px;
    padding: 16px 8px 12px 8px;
  }

  .main-img {
    width: 90vw;
  }

  .system-block {
    padding: 10px 4px;
  }
}

@media (max-width: 600px) {
  .breadcrumb {
    margin: 12px 0 10px 10px;
  }

  .main-img {
    width: 92vw;
  }

  .thumb-img {
    width: 38px;
    height: 38px;
  }

  .system-img {
    width: 60px;
    height: 60px;
  }

  .systems-row {
    gap: 7px;
  }

  .system-block {
    min-width: 90px;
    max-width: 98vw;
  }
}
</style>