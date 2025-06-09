<template>
  <a-layout-footer>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>产品中心</h3>
          <ul>
            <li>碳化硅聚合陶瓷管件</li>
            <li>陶瓷内衬复合钢管</li>
            <li>双金属耐磨管及衬板</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>服务支持</h3>
          <ul>
            <li>技术支持</li>
            <li>售后服务</li>
            <li>在线咨询</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>联系方式</h3>
          <ul>
            <li>电话：0531-88888888</li>
            <li>邮箱：contact@daiwei.com</li>
            <li>地址：济南市南园经济开发区</li>
          </ul>
          <!-- 微信图标 -->
          <div class="social-icons">
            <span>关注我们：</span>
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wechat.svg"
              alt="微信"
              class="wechat-icon" />
            <div v-if="showWx" class="wechat-qrcode">
              <img src="https://img.qr.wechat.com/your-qrcode.png"
                alt="微信二维码" />
              <div class="qrcode-tip">微信扫一扫关注</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        © 2025 山东岱威创新管业有限公司 版权所有
      </div>
    </footer>
    <a-back-top />
  </a-layout-footer>
</template>

<script setup>
import { ref } from "vue"
const showWx = ref(false)
</script>

<style scoped>
.ant-layout-footer {
  padding: 0;
}

.footer {
  background: #19202a;
  color: #bbb;
  font-size: 15px;
  padding: 56px 0 0 0;
  margin-top: 56px;
  letter-spacing: .5px;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
  padding: 0 24px;
}

.footer-section {
  flex: 1 1 220px;
  min-width: 210px;
  margin-bottom: 16px;
}

.footer-section h3 {
  color: #fff;
  font-size: 17px;
  margin-bottom: 14px;
  font-weight: 600;
  letter-spacing: 1px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
  transition: color 0.3s;
  color: #bbb;
  cursor: pointer;
}

.footer-section ul li:hover {
  color: #fff;
}

.footer-bottom {
  border-top: 1px solid #222d3a;
  text-align: center;
  margin-top: 40px;
  padding: 20px 0 16px 0;
  color: #888;
  font-size: 14px;
  background: #181e29;
}

.social-icons {
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  font-size: 14px;
  color: #bbb;
}

.wechat-icon {
  background-color: #fff;
  width: 26px;
  height: 26px;
  cursor: pointer;
  filter: grayscale(1) brightness(1.25);
  transition: filter 0.3s, transform 0.3s;
}

.wechat-icon:hover {
  filter: grayscale(0) brightness(1.6);
  transform: scale(1.1);
}

.wechat-qrcode {
  position: absolute;
  left: 100px;
  top: -60px;
  background: #fff;
  border-radius: 10px;
  padding: 10px 12px 6px 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.13);
  z-index: 10;
  min-width: 130px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wechat-qrcode img {
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 6px;
}

.qrcode-tip {
  color: #333;
  font-size: 13px;
  margin-top: 6px;
}

/* 响应式适配 */
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    padding: 0 12px;
  }

  .footer-section {
    min-width: 0;
    margin-bottom: 24px;
  }

  .social-icons {
    margin-top: 12px;
  }
}

@media (max-width: 600px) {
  .footer {
    font-size: 14px;
    padding: 32px 0 0 0;
  }

  .footer-bottom {
    padding: 12px 0 10px 0;
    font-size: 12px;
  }

  .wechat-qrcode {
    left: 10px;
    top: 38px;
  }
}
</style>