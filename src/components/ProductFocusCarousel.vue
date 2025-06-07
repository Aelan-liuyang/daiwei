<template>
  <div class="product-focus-carousel">
    <h2 class="carousel-title">产品聚焦</h2>
    <swiper
      :modules="[Navigation]"
      :loop="true"
      :speed="1000"
      :slides-per-view="3"
      :centeredSlides="true"
      :spaceBetween="60"
      :parallax="true"
      navigation
      :pagination="{ clickable: true }"
      class="focus-swiper">
      <swiper-slide v-for="(item, idx) in products" :key="idx">
        <transition name="fade-smooth" mode="out-in">
          <div class="focus-slide-content">
            <img :src="item.img" class="focus-img" />
            <div class="focus-caption">
              <div class="focus-title" v-html="item.title"></div>
              <div class="focus-desc" v-html="item.desc"></div>
            </div>
          </div>
        </transition>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import falan from '@/assets/images/falan.jpg'
import falan1 from '@/assets/images/falan1.jpg'
import falan2 from '@/assets/images/falan2.jpg'
import falan3 from '@/assets/images/falan3.jpg'

// 示例数据，实际请替换为真实产品图片及内容
const products = [
  {
    img: falan,
    title: '009V 型 FIRELOCK™ INSTALLATION-READY™',
    desc: '刚性接头'
  },
  {
    img: falan1,
    title: 'W257 型动态运动接头',
    desc: ''
  },
  {
    img: falan2,
    title: '用于 CPVC/PVC 管道的<br>INSTALLATION-READY™<br>356 型过滤接头',
    desc: ''
  },
  {
    img: falan3,
    title: 'FireLock™ Installation-Ready™ 沟槽管件',
    desc: ''
  },
  // 可继续添加产品
]
</script>

<style scoped>
.product-focus-carousel {
  width: 100vw;
  margin: 0 auto;
  padding: 40px 0 30px 0;
  background: #fff;
  overflow-x: hidden;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 18px;
  text-align: left;
  margin-left: 6vw;
  letter-spacing: 2px;
}

.focus-swiper {
  width: 92vw;
  max-width: 1700px;
  margin: 0 auto;
  padding-bottom: 24px;
}

.focus-slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 380px;
  background: none;
  user-select: none;
}

.focus-img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  margin-bottom: 20px;
}


.focus-caption {
  text-align: center;
}

.focus-title {
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 8px;
  color: #222;
  line-height: 1.3;
}

.focus-desc {
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  margin-top: 3px;
  line-height: 1.5;
}

.swiper-button-prev,
.swiper-button-next {
  color: #8ab0cb;
  width: 48px;
  height: 48px;
  top: 55%;
  background: transparent;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 48px;
}

.swiper-pagination-bullet {
  background: #d8d8d8;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: #1677ff;
}

@media (max-width: 900px) {
  .focus-swiper {
    width: 99vw;
  }

  .focus-img {
    width: 160px;
    height: 160px;
  }

  .carousel-title {
    font-size: 1.12rem;
    margin-left: 4vw;
  }
}

@media (max-width: 600px) {
  .focus-swiper {
    width: 100vw;
  }

  .focus-img {
    width: 110px;
    height: 110px;
  }

  .carousel-title {
    font-size: .98rem;
    margin-left: 2vw;
  }
}
</style>