<template>
  <a-layout class="contact-layout">
    <Header />
    <a-layout-content class="main-content">
      <div class="location-banner">
        <div class="banner-bg">
          <img
            src="@/assets/images/diqiu1.jpeg"
            alt="地球"
            class="banner-earth" />
        </div>
        <div class="banner-content">
          <h1>我们在哪里</h1>
          <div class="banner-subtitle">The Location</div>
        </div>
      </div>
      <section class="contact-section">
        <div class="contact-content-wide">
          <div class="contact-info-box">
            <h2 class="contact-title">山东岱威创新管业有限公司</h2>
            <ul class="contact-list">
              <li>
                <span class="label">联系地址：</span>
                山东省济南市南园经济开发区
              </li>
              <li>
                <span class="label">邮编：</span>
                250100
              </li>
              <li>
                <span class="label">传真：</span>
                0531-88888999
              </li>
              <li>
                <span class="label">电话：</span>
                0531-88888888
              </li>
              <li>
                <span class="label">电子邮箱：</span>
                contact@daiwei.com
              </li>
            </ul>
          </div>
          <div class="contact-map-box">
            <iframe
              src="https://www.amap.com/place/B0FFHDOFZ2?center=117.120513,36.600564&zoom=16"
              frameborder="0"
              allowfullscreen
              class="map-iframe"
              referrerpolicy="no-referrer-when-downgrade"
              title="山东省济南市南园经济开发区地图"></iframe>

            <!-- <iframe
              class="map-iframe"
              frameborder="0"
              allowfullscreen
              src="https://www.amap.com/place/B0FFG04B0Y"
              referrerpolicy="no-referrer-when-downgrade"
              title="山东省济南市南园经济开发区地图"></iframe> -->
            <div class="map-tip">山东省济南市南园经济开发区</div>
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
// 无逻辑
</script>

<style scoped>
.contact-layout {
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
  min-height: 500px;
  padding-bottom: 40px;
}

/* Banner 新样式 */
.location-banner {
  width: 100vw;
  max-width: 100vw;
  min-height: 240px;
  height: 28vw;
  max-height: 340px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: #0d1d3a;
}

.banner-bg {
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100vw;
  height: 100%;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.banner-earth {
  width: 100%;
  max-width: 850px;
  min-width: 320px;
  height: auto;
  transform: scale(1.12);
  animation: bannerZoomIn 2s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

@keyframes bannerZoomIn {
  from {
    transform: scale(1.12);
  }

  to {
    transform: scale(1);
  }
}

.banner-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  width: 100%;
  padding-bottom: 28px;
}

.banner-content h1 {
  font-size: 2.7rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 6px;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.09);
}

.banner-subtitle {
  font-size: 1.2rem;
  color: #d6e5fa;
  letter-spacing: 4px;
  margin-top: 12px;
  font-weight: 400;
}

/* 内容布局更宽、更简约 */
.contact-section {
  background: none;
  box-shadow: none;
  max-width: 1500px;
  margin: 0 auto;
  padding: 64px 0 0 0;
}

.contact-content-wide {
  display: flex;
  gap: 56px;
  justify-content: center;
  align-items: flex-start;
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.05);
  padding: 56px 70px 48px 70px;
  max-width: 1280px;
  margin: 0 auto;
}

.contact-info-box {
  flex: 1.1;
  min-width: 300px;
  max-width: 400px;
  padding-right: 24px;
}

.contact-title {
  font-size: 27px;
  font-weight: bold;
  color: #1677ff;
  margin-bottom: 28px;
  letter-spacing: 2px;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  font-size: 17px;
  color: #333;
  margin-bottom: 22px;
  line-height: 2.1;
  letter-spacing: 1px;
}

.contact-list .label {
  color: #888;
  font-weight: 500;
  display: inline-block;
  min-width: 90px;
}

.contact-map-box {
  flex: 1.8;
  min-width: 340px;
  max-width: 700px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.08);
  background: #e8eef4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.map-iframe {
  width: 100%;
  height: 400px;
  border: none;
  display: block;
  border-radius: 16px;
}

.map-tip {
  position: absolute;
  bottom: 10px;
  left: 14px;
  background: rgba(22, 119, 255, 0.87);
  color: #fff;
  font-size: 14px;
  padding: 5px 16px;
  border-radius: 10px;
  opacity: 0.92;
  pointer-events: none;
  letter-spacing: 1px;
}

/* 响应式 */
@media (max-width: 1200px) {
  .contact-content-wide {
    flex-direction: column;
    gap: 32px;
    padding: 30px 10px 28px 10px;
  }

  .contact-info-box {
    padding-right: 0;
    max-width: 100%;
  }

  .contact-map-box {
    min-width: 0;
    max-width: 100%;
  }
}

@media (max-width: 700px) {
  .contact-section {
    padding: 18px 0 0 0;
  }

  .contact-content-wide {
    padding: 10px 0 10px 0;
    border-radius: 10px;
  }

  .location-banner {
    height: 90px;
    min-height: 55px;
  }

  .banner-earth {
    width: 100vw;
    min-width: 120px;
  }

  .banner-content {
    padding-bottom: 12px;
  }

  .banner-content h1 {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }

  .banner-subtitle {
    font-size: 0.82rem;
    letter-spacing: 1.5px;
  }

  .contact-title {
    font-size: 17px;
  }

  .map-iframe {
    height: 170px;
    border-radius: 8px;
  }
}

.footer-bottom {
  text-align: center;
  color: #888;
  background: #181e29;
  padding: 18px 0 14px 0;
  font-size: 14px;
  margin-top: 36px;
}
</style>