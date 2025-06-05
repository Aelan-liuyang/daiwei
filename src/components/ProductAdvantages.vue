<template>
  <div class="section">
    <h2>产品优势</h2>
    <a-row gutter="16">
      <a-col :span="6" v-for="item in items" :key="item.title">
        <a-card :title="item.title">
          <!-- Replace h() with direct img tag in template -->
          <template #cover>
            <img :src="item.img" :alt="item.title" class="w-full" />
          </template>
          <p>{{ item.desc }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import adv1 from '@/assets/images/factory1.jpg'
import adv2 from '@/assets/images/factory2.jpg'
import adv3 from '@/assets/images/factory3.jpg'
import adv4 from '@/assets/images/factory4.jpg'

export default {
  data() {
    return {
      items: [
        { title: '技术领先', desc: '引进先进设备，确保工艺领先', img: adv1 },
        { title: '品质保障', desc: '严格质检流程，确保产品合格率', img: adv2 },
        { title: '专业团队', desc: '经验丰富的工程师团队', img: adv3 },
        { title: '服务完善', desc: '售前售后一体化服务', img: adv4 }
      ]
    }
  }
}
</script>
