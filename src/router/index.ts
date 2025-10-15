import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    //路由初始指向
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index.vue'),
    meta: {
      title: '首页',
      description:
        '山东岱威创新管业专注于提供高品质的管道系统解决方案，包括管件、阀门、智能管网系统等产品。',
      keywords: '管道系统,管件,阀门,智能管网,岱威管业'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/home/About.vue'),
    meta: {
      title: '关于我们',
      description: '了解山东岱威创新管业的企业历史、发展理念、技术实力和服务优势。',
      keywords: '企业介绍,公司简介,岱威管业,管道企业'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/home/Products.vue'),
    meta: {
      title: '产品服务',
      description: '岱威管业提供全系列管道产品，包括管件、阀门、智能管网系统等，满足不同行业需求。',
      keywords: '管道产品,管件系列,阀门产品,智能管网,产品目录'
    }
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('@/views/home/Cases.vue'),
    meta: {
      title: '工程案例',
      description: '查看岱威管业在化工、建筑、市政等行业的成功案例和项目经验。',
      keywords: '工程案例,项目案例,成功案例,化工管道,建筑管道'
    }
  },
  {
    path: '/cases/:id',
    name: 'CasesDetail',
    component: () => import('@/views/home/CasesDetail.vue'),
    meta: {
      title: '案例详情',
      description: '详细了解岱威管业的工程案例实施过程、技术方案和项目成果。',
      keywords: '案例详情,项目详情,工程实施,技术方案'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/home/Contact.vue'),
    meta: {
      title: '联系我们',
      description: '联系山东岱威创新管业，获取专业的管道系统解决方案和技术支持。',
      keywords: '联系方式,技术支持,业务咨询,岱威管业联系'
    }
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: () => import('@/views/home/ProductDetail.vue'),
    meta: {
      title: '产品详情',
      description: '查看岱威管业产品的详细规格、技术参数和应用场景。',
      keywords: '产品详情,产品规格,技术参数,产品应用'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/home/News.vue'),
    meta: {
      title: '新闻中心',
      description: '了解岱威管业最新动态、行业资讯和技术发展趋势。',
      keywords: '企业新闻,行业资讯,技术动态,管道行业新闻'
    }
  },
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import('@/views/home/NewsDetail.vue'),
    meta: {
      title: '新闻详情',
      description: '阅读岱威管业的详细新闻内容和行业分析。',
      keywords: '新闻详情,行业分析,企业动态,技术资讯'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory('/daiwei/'),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0, behavior: 'smooth' }) //可以使用 "smooth" 实现平滑滚动效果
})

export default router
