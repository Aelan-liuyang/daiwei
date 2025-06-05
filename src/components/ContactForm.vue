<template>
  <div class="section max-w-screen-xl mx-auto px-4 py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-[#003366] mb-12 text-center">立即联系我们</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-[#003366] rounded-lg p-6 text-white">
        <h3 class="text-xl font-semibold mb-4">联系方式</h3>
        <ul class="space-y-3">
          <li class="flex items-center gap-2"><icon-phone /> 400-000-0000</li>
          <li class="flex items-center gap-2"><icon-mail /> contact@daiwei.com</li>
          <li class="flex items-center gap-2"><icon-location /> 济南市南园经济开发区</li>
        </ul>
        <div class="mt-6">
          <img :src="mapImg" alt="地图" class="rounded-lg mt-4" />
        </div>
      </div>
      <a-form layout="vertical" class="bg-white rounded-lg shadow-md p-6">
        <a-form-item label="姓名">
          <a-input placeholder="请输入姓名" />
        </a-form-item>
        <a-form-item label="电话">
          <a-input placeholder="请输入联系电话" />
        </a-form-item>
        <a-form-item label="留言">
          <a-textarea rows="4" placeholder="请输入您的需求" />
        </a-form-item>
        <a-button type="primary" block class="!rounded-lg">提交咨询</a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
import mapImg from '@/assets/images/map.jpg'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    'icon-phone': PhoneOutlined,
    'icon-mail': MailOutlined,
    'icon-location': EnvironmentOutlined
  },
  data() {
    return {
      mapImg
    }
  }
}
</script>