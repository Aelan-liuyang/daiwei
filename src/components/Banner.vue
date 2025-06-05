<template>
  <div class="banner">
    <div class="content">
      <h1>创新科技 引领未来</h1>
      <p>专注金属加工、焊接、打标设备，以智能技术提升生产效率和品质</p>
      <div class="buttons">
        <a-button type="primary">了解更多</a-button>
        <a-button>联系我们</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: url('@/assets/images/banner.jpg') no-repeat center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}
.content p {
  font-size: 16px;
}
.buttons {
  margin-top: 20px;
}
</style>
