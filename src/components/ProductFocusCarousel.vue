<template>
  <div class="product-focus-carousel">
    <h2 class="carousel-title">产品聚焦</h2>
    <swiper
      ref="swiperRef"
      :modules="[Autoplay, Navigation]"
      :loop="true"
      :speed="1000"
      :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
      :slides-per-view="3"
      :centeredSlides="true"
      :spaceBetween="60"
      navigation
      class="focus-swiper"
    >
      <swiper-slide v-for="(item, idx) in products" :key="idx" class="slide-wrapper">
        <div class="focus-slide-content">
          <img :src="item.img" class="focus-img" />
          <div class="focus-caption">
            <div class="focus-title" v-html="item.title"></div>
            <div class="focus-desc" v-html="item.desc"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import falan from '@/assets/images/falan.jpg'
import falan1 from '@/assets/images/falan1.jpg'
import falan2 from '@/assets/images/falan2.jpg'
import falan3 from '@/assets/images/falan3.jpg'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const products = [
  {
    img: falan,
    title: 'INSTALLATION-READY™',
    desc: ''
  },
  {
    img: falan1,
    title: 'W257 型动态运动接头',
    desc: ''
  },
  {
    img: falan2,
    title: '356 型过滤接头',
    desc: ''
  },
  {
    img: falan3,
    title: 'FireLock 沟槽管件',
    desc: ''
  }
]
</script>

<style scoped>
.product-focus-carousel {
  width: 100vw;
  margin: 0 auto;
  padding: 40px 0 30px 0;
  background: #fff;
  overflow: hidden;
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

.slide-wrapper {
  transition: transform 0.5s ease;
}

/* 主图放大效果 */
.swiper-slide-active .focus-img {
  transform: scale(1.15);
  transition: transform 0.5s ease;
  z-index: 2;
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
  transition: transform 0.5s ease;
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
    font-size: 0.98rem;
    margin-left: 2vw;
  }
}
</style>
