<!--
  样式系统使用示例组件
  展示新设计系统的各种功能
-->
<template>
  <div class="style-example p-8">
    <!-- 标题区 -->
    <div class="text-center mb-12 animate-fade-in-down">
      <h1 class="text-5xl font-bold text-gradient mb-4">新样式系统示例</h1>
      <p class="text-xl text-gray-600">展示设计令牌、工具类和动画效果</p>
    </div>

    <!-- 颜色系统 -->
    <section class="mb-16 animate-fade-in-up delay-100">
      <h2 class="text-3xl font-bold mb-6">颜色系统</h2>
      <div class="grid grid-cols-5 gap-4">
        <div
          v-for="i in 5"
          :key="i"
          class="card hover-lift cursor-pointer"
          :style="{
            background: `var(--color-primary-${i * 200})`,
            color: i > 2 ? 'white' : 'var(--color-gray-900)'
          }"
        >
          <div class="p-6 text-center">
            <div class="font-semibold">Primary {{ i * 200 }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 按钮组件 -->
    <section class="mb-16 animate-fade-in-up delay-200">
      <h2 class="text-3xl font-bold mb-6">按钮样式</h2>
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary hover-lift">主要按钮</button>
        <button class="btn btn-secondary hover-lift">次要按钮</button>
        <button class="btn btn-ghost hover-scale">幽灵按钮</button>
        <button class="btn btn-primary btn-sm">小按钮</button>
        <button class="btn btn-primary btn-lg hover-glow">大按钮</button>
      </div>
    </section>

    <!-- 卡片组件 -->
    <section class="mb-16 animate-fade-in-up delay-300">
      <h2 class="text-3xl font-bold mb-6">卡片效果</h2>
      <div class="grid grid-cols-3 gap-6">
        <!-- 标准卡片 -->
        <div class="card hover-lift">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-gradient-primary"></div>
            <div>
              <h3 class="font-bold text-lg">标准卡片</h3>
              <p class="text-sm text-gray-600">带悬停效果</p>
            </div>
          </div>
          <p class="text-gray-700 mb-4">这是一个标准卡片，具有阴影和悬停上浮效果。</p>
          <button class="btn btn-primary btn-sm">查看详情</button>
        </div>

        <!-- 玻璃态卡片 -->
        <div class="card-glass hover-scale" style="background: var(--glass-bg)">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-gradient-primary"></div>
            <div>
              <h3 class="font-bold text-lg">玻璃态卡片</h3>
              <p class="text-sm text-gray-600">毛玻璃效果</p>
            </div>
          </div>
          <p class="text-gray-700 mb-4">半透明背景加模糊效果，现代化设计。</p>
          <button class="btn btn-secondary btn-sm">查看详情</button>
        </div>

        <!-- 渐变卡片 -->
        <div class="card bg-gradient-primary text-white hover-glow">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-white opacity-20"></div>
            <div>
              <h3 class="font-bold text-lg">渐变卡片</h3>
              <p class="text-sm">发光效果</p>
            </div>
          </div>
          <p class="mb-4">渐变背景配合悬停发光效果。</p>
          <button class="btn bg-white text-primary-600 btn-sm">查看详情</button>
        </div>
      </div>
    </section>

    <!-- 动画效果 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">动画效果</h2>
      <div class="grid grid-cols-4 gap-6">
        <div class="card text-center hover-lift">
          <div class="text-4xl mb-4 animate-pulse">✨</div>
          <h3 class="font-semibold mb-2">脉冲</h3>
          <p class="text-sm text-gray-600">animate-pulse</p>
        </div>

        <div class="card text-center hover-scale">
          <div class="text-4xl mb-4 animate-float">🎈</div>
          <h3 class="font-semibold mb-2">浮动</h3>
          <p class="text-sm text-gray-600">animate-float</p>
        </div>

        <div class="card text-center hover-rotate">
          <div class="text-4xl mb-4 animate-spin-slow">⚙️</div>
          <h3 class="font-semibold mb-2">旋转</h3>
          <p class="text-sm text-gray-600">animate-spin</p>
        </div>

        <div class="card text-center hover-glow">
          <div class="text-4xl mb-4 animate-bounce">🎯</div>
          <h3 class="font-semibold mb-2">弹跳</h3>
          <p class="text-sm text-gray-600">animate-bounce</p>
        </div>
      </div>
    </section>

    <!-- 徽章和标签 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">徽章和标签</h2>
      <div class="flex flex-wrap gap-3">
        <span class="badge">默认徽章</span>
        <span class="badge badge-success">成功</span>
        <span class="badge badge-warning">警告</span>
        <span class="badge badge-error">错误</span>
        <span class="badge animate-pulse-ring">通知 (3)</span>
      </div>
    </section>

    <!-- 响应式网格 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">响应式布局</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="i in 6"
          :key="i"
          class="card hover-lift"
          :class="`animate-fade-in-up delay-${i * 100}`"
        >
          <div class="flex items-center gap-4 mb-3">
            <div
              class="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold"
            >
              {{ i }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold">产品 {{ i }}</h3>
              <p class="text-sm text-gray-600">高品质产品</p>
            </div>
          </div>
          <p class="text-sm text-gray-700 mb-4">
            这是产品{{ i }}的描述信息，展示响应式网格布局效果。
          </p>
          <div class="flex gap-2">
            <button class="btn btn-primary btn-sm flex-1">查看</button>
            <button class="btn btn-secondary btn-sm flex-1">收藏</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 滚动触发动画演示 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">滚动触发动画</h2>
      <p class="text-gray-600 mb-8">向下滚动查看元素逐个出现的效果</p>
      <div class="space-y-6">
        <div
          v-for="i in 5"
          :key="i"
          class="card scroll-reveal"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold"
            >
              {{ i }}
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg">滚动触发项 {{ i }}</h3>
              <p class="text-gray-600">滚动到此处时出现</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实用工具类展示 -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">实用工具类</h2>
      <div class="card">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">间距</h3>
          <div class="flex gap-4">
            <div class="p-4 bg-primary-100 rounded">p-4</div>
            <div class="p-6 bg-primary-100 rounded">p-6</div>
            <div class="p-8 bg-primary-100 rounded">p-8</div>
          </div>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-3">圆角</h3>
          <div class="flex gap-4">
            <div class="w-20 h-20 bg-primary-500 rounded-sm"></div>
            <div class="w-20 h-20 bg-primary-500 rounded-md"></div>
            <div class="w-20 h-20 bg-primary-500 rounded-lg"></div>
            <div class="w-20 h-20 bg-primary-500 rounded-xl"></div>
            <div class="w-20 h-20 bg-primary-500 rounded-full"></div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-3">阴影</h3>
          <div class="flex gap-4">
            <div class="w-20 h-20 bg-white rounded-lg shadow-sm"></div>
            <div class="w-20 h-20 bg-white rounded-lg shadow-md"></div>
            <div class="w-20 h-20 bg-white rounded-lg shadow-lg"></div>
            <div class="w-20 h-20 bg-white rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 返回顶部 -->
    <div class="text-center">
      <button class="btn btn-primary btn-lg hover-lift" @click="scrollToTop">返回顶部 ↑</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// 滚动触发动画
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, observerOptions)

  // 观察所有滚动触发元素
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
.style-example {
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  min-height: 100vh;
}

/* 自定义样式示例 */
.custom-gradient-bg {
  background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-secondary-400) 100%);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-5 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
