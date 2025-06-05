<template>
  <div class="min-h-screen w-full bg-white">
    <!-- 顶部导航 -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <nav
        class="flex items-center justify-between h-16 px-8 max-w-screen-xl mx-auto">
        <div class="flex items-center space-x-2">
          <img :src="logoUrl" alt="Logo" class="h-8">
          <span class="text-lg font-bold text-gray-800">山东岱威创新管业</span>
        </div>
        <div class="flex items-center space-x-8">
          <a v-for="item in navItems" :key="item" href="#"
            class="text-gray-600 hover:text-blue-600 transition">{{ item }}</a>
          <a-button type="primary" class="!rounded-md">联系我们</a-button>
        </div>
      </nav>
    </header>

    <!-- Hero 区域 -->
    <section class="relative h-[600px] mt-16 overflow-hidden">
      <img :src="heroImageUrl" alt="Hero Background"
        class="absolute inset-0 w-full h-full object-cover z-0">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent z-10">
        <div class="flex items-center h-full max-w-screen-xl mx-auto px-8">
          <div class="max-w-2xl text-white space-y-6">
            <h1 class="text-5xl font-bold">创新科技 引领未来</h1>
            <p class="text-xl">专业为电力、矿山、钢铁、化工等行业提供适应不同介质运行环境的多种类型管道产品</p>
            <div class="flex space-x-4">
              <a-button type="primary" size="large"
                class="!rounded-md">了解更多</a-button>
              <a-button ghost size="large"
                class="!rounded-md text-white border-white hover:text-white">在线咨询</a-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司介绍 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="flex items-center mb-12">
          <span class="text-4xl font-bold text-gray-300">01</span>
          <div class="ml-4">
            <h2 class="text-2xl font-bold text-gray-800">公司介绍</h2>
            <p class="text-gray-500">COMPANY INTRODUCTION</p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold mb-6">山东岱威创新管业有限公司</h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              公司位于济南市南园经济开发区，距济南机场15公里，交通便利。
            </p>
            <p class="text-gray-600 leading-relaxed mb-4">
              集研发、生产、经营为一体，是综合性复合管服务商。
            </p>
            <div class="grid grid-cols-3 gap-6 mt-8">
              <div class="text-center p-6 bg-white rounded-lg shadow">
                <div class="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div class="text-gray-600">年行业经验</div>
              </div>
              <div class="text-center p-6 bg-white rounded-lg shadow">
                <div class="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <div class="text-gray-600">专利技术</div>
              </div>
              <div class="text-center p-6 bg-white rounded-lg shadow">
                <div class="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div class="text-gray-600">合作客户</div>
              </div>
            </div>
          </div>
          <div>
            <img :src="companyImageUrl" alt="Company"
              class="w-full h-[400px] object-cover rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- 产品优势 -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">产品优势</h2>
          <p class="text-gray-600">提供适应不同介质环境的一体化解决方案和多种类管道</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(advantage, index) in advantages" :key="index"
            class="bg-white rounded-lg shadow-sm hover:shadow-md p-6 text-center cursor-pointer transition"
            @click="showDetail = true">
            <img :src="advantage.imageUrl" alt="Advantage"
              class="h-48 w-full object-cover rounded mb-4">
            <h3 class="text-xl font-semibold mb-2">{{ advantage.title }}</h3>
            <p class="text-gray-600">{{ advantage.description }}</p>
          </div>
        </div>

        <!-- 弹窗详情 -->
        <a-modal v-model:visible="showDetail" title="产品详情" :footer="null"
          width="1000px">
          <div class="flex gap-8 flex-col lg:flex-row">
            <div class="lg:w-1/2">
              <img :src="detailData.image" alt="Product Detail"
                class="w-full rounded-lg shadow-lg">
              <div class="grid grid-cols-4 gap-4 mt-4">
                <img v-for="(img, index) in detailData.subImages" :key="index"
                  :src="img"
                  class="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80"
                  @click="detailData.image = img">
              </div>
            </div>
            <div class="lg:w-1/2 space-y-6">
              <h2 class="text-2xl font-bold">碳化硅聚合陶瓷管件</h2>
              <div>
                <h3 class="text-lg font-semibold mb-2">产品特点</h3>
                <ul class="list-disc pl-5 text-gray-600 space-y-2">
                  <li>超高耐磨性能，使用寿命长</li>
                  <li>优异的耐腐蚀性能</li>
                  <li>优秀的耐高温性能</li>
                  <li>卓越的抗冲击性能</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">技术参数</h3>
                <table class="w-full text-sm">
                  <tbody>
                    <tr class="border-b">
                      <td class="py-2 font-medium">硬度</td>
                      <td class="py-2">HV1000-1200</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 font-medium">使用温度</td>
                      <td class="py-2">-40℃~350℃</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 font-medium">抗弯强度</td>
                      <td class="py-2">≥180MPa</td>
                    </tr>
                    <tr class="border-b">
                      <td class="py-2 font-medium">耐磨性能</td>
                      <td class="py-2">≤0.015g/1000r</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">应用领域</h3>
                <p class="text-gray-600">
                  广泛适用于电力、矿山、钢铁、化工等行业的输送系统，适合输送含腐蚀性与磨蚀性介质。
                </p>
              </div>
              <div class="flex space-x-4 mt-6">
                <a-button type="primary" class="!rounded-md"
                  size="large">立即咨询</a-button>
                <a-button class="!rounded-md" size="large">下载产品说明</a-button>
              </div>
            </div>
          </div>
        </a-modal>
      </div>
    </section>

    <!-- 联系我们 -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">联系我们</h2>
          <p class="text-gray-600">期待与您的合作</p>
        </div>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-4">
            <h3 class="text-xl font-bold mb-4">联系方式</h3>
            <p class="flex items-center text-gray-600"><environment-outlined
                class="mr-2" />地址：济南市南园经济开发区</p>
            <p class="flex items-center text-gray-600"><phone-outlined
                class="mr-2" />电话：0531-88888888</p>
            <p class="flex items-center text-gray-600"><mail-outlined
                class="mr-2" />邮箱：contact@daiwei.com</p>
          </div>
          <a-form layout="vertical">
            <a-form-item label="姓名">
              <a-input v-model:value="formState.name" placeholder="请输入您的姓名" />
            </a-form-item>
            <a-form-item label="电话">
              <a-input v-model:value="formState.phone" placeholder="请输入联系电话" />
            </a-form-item>
            <a-form-item label="留言">
              <a-textarea v-model:value="formState.message" rows="4"
                placeholder="请输入留言" />
            </a-form-item>
            <a-button type="primary" class="w-full !rounded-md">提交</a-button>
          </a-form>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-12">
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-lg font-bold mb-4">关于我们</h3>
            <p class="text-gray-400">山东岱威创新管业有限公司专注于管道解决方案，致力于为客户提供优质服务。</p>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">产品中心</h3>
            <ul class="space-y-2 text-gray-400">
              <li>碳化硅聚合陶瓷管件</li>
              <li>陶瓷内衬复合钢管</li>
              <li>双金属耐磨管及衬板</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">服务支持</h3>
            <ul class="space-y-2 text-gray-400">
              <li>技术支持</li>
              <li>售后服务</li>
              <li>在线咨询</li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-bold mb-4">联系方式</h3>
            <ul class="space-y-2 text-gray-400">
              <li>电话：0531-88888888</li>
              <li>邮箱：contact@daiwei.com</li>
              <li>地址：济南市南园经济开发区</li>
            </ul>
          </div>
        </div>
        <div
          class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 山东岱威创新管业有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons-vue'

const logoUrl = 'https://image-resource.mastergo.com/77939995274156/77939995274158/9181b7363182616c08a5493355ef5926.jpg'
const heroImageUrl = 'https://ai-public.mastergo.com/ai/img_res/1ac1d803c51682947fb57ac63ea74c07.jpg'
const companyImageUrl = 'https://ai-public.mastergo.com/ai/img_res/3f4dd1c8d51bb6d1fc21e1d8b0d97403.jpg'

const navItems = ['首页', '公司介绍', '产品中心', '技术优势', '新闻中心']

const advantages = [
  { imageUrl: 'https://ai-public.mastergo.com/ai/img_res/fb1fc6ae2f366c91fd36dfbc981d4af6.jpg', title: '技术创新', description: '拥有多项国家专利技术，持续创新研发' },
  { imageUrl: 'https://ai-public.mastergo.com/ai/img_res/3e5cb6f385d24bbc3495706283369a8c.jpg', title: '材质可靠', description: '选用高强耐磨材料，耐腐蚀抗冲击' },
  { imageUrl: 'https://ai-public.mastergo.com/ai/img_res/337b8da0325faadd7a7b4de72020895b.jpg', title: '支持定制', description: '可按客户需求定制各种规格型号' },
  { imageUrl: 'https://ai-public.mastergo.com/ai/img_res/c9545f16072e083508f6884a2c75ee99.jpg', title: '服务完善', description: '专业售后团队保障项目落地' }
]

const showDetail = ref(false)
const detailData = ref({
  image: advantages[0].imageUrl,
  subImages: [
    'https://ai-public.mastergo.com/ai/img_res/3e5cb6f385d24bbc3495706283369a8c.jpg',
    'https://ai-public.mastergo.com/ai/img_res/337b8da0325faadd7a7b4de72020895b.jpg',
    'https://ai-public.mastergo.com/ai/img_res/c9545f16072e083508f6884a2c75ee99.jpg',
    'https://ai-public.mastergo.com/ai/img_res/680ac53bfc581c2dc897947160ca1ec4.jpg'
  ]
})

const formState = ref({
  name: '',
  phone: '',
  message: ''
})
</script>