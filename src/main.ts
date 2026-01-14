import { createApp } from 'vue'
// main.js 或 App.vue 中引入
import '@/assets/css/reset.css'
import { createPinia } from 'pinia'
import 'swiper/swiper-bundle.css'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/lib/button/style'

// 导入性能监控和 SEO 检查工具（暂时注释）
// import { performanceMonitor } from '@/utils/performance'
// import '@/utils/seo-checker'

const app = createApp(App)
// 实例化 Pinia

const pinia = createPinia()

// 路由守卫：页面切换时的 SEO 处理
router.afterEach((to) => {
  // 更新页面标题和描述（如果路由没有设置的话）
  if (to.meta?.title) {
    document.title = `${to.meta.title} - 山东岱威创新管业`
  }
})

app.use(router).use(pinia).use(Antd).mount('#app')
