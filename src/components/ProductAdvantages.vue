<template>
  <div class="section max-w-screen-xl mx-auto px-4 py-16 bg-[#f8f9fa]">
    <h2 class="text-2xl md:text-3xl font-bold text-[#003366] mb-12 text-center">核心产品优势</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="item in advantages" :key="item.title" class="bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
        <div class="p-6 text-center space-y-4">
          <img :src="item.img" alt="优势" class="h-24 mx-auto" />
          <h3 class="text-xl font-semibold text-[#003366]">{{ item.title }}</h3>
          <p class="text-gray-600">{{ item.desc }}</p>
        </div>
      </div>
    </div>
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
      advantages: [
        { title: '技术领先', desc: '引进德国进口设备，拥有20+项专利技术', img: adv1 },
        { title: '品质保障', desc: '通过ISO9001认证，产品合格率99.9%', img: adv2 },
        { title: '专业团队', desc: '100+工程师提供全周期技术支持', img: adv3 },
        { title: '服务完善', desc: '7×24小时响应，全国30+服务网点', img: adv4 }
      ]
    }
  }
}
</script>
