import { createApp } from 'vue'
// main.js 或 App.vue 中引入
import '@/assets/css/reset.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'swiper/swiper-bundle.css'

import Antd from 'ant-design-vue'
import 'ant-design-vue/lib/button/style'

const app = createApp(App);
// 实例化 Pinia

const pinia = createPinia()

app.use(router).use(pinia).use(pinia).use(Antd).mount('#app')
