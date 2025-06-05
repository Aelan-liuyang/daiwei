<template>
  <div class="banner">
    <div class="banner-text">
      <h1>智慧管道设计与解决方案</h1>
      <p>
        提供先进的工业管道设计、施工与运维一站式服务，助力企业高效安全生产。
      </p>
      <a-button type="primary" size="large">了解更多</a-button>
    </div>
  </div>
</template>

<script>
import bgImage from '@/assets/images/banner.jpg'

export default {
  data() {
    return {
      bgImage
    }
  }
}
</script>
<style scoped>
.banner {
  background: url('@/assets/images/banner.jpg') no-repeat center/cover;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  position: relative;
}
.banner::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.35);
}
.banner-text {
  position: relative;
  z-index: 1;
  margin-left: 80px;
  max-width: 500px;
}
.banner-text h1 {
  font-size: 38px;
  margin-bottom: 16px;
}
.banner-text p {
  font-size: 18px;
  margin-bottom: 28px;
}
</style>