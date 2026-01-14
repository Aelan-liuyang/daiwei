<template>
  <div 
    class="responsive-container"
    :class="containerClasses"
    :style="containerStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useResponsiveContainer, useResponsive, type Breakpoint } from '@/composables/useResponsive'

interface Props {
  // 是否为流体容器
  fluid?: boolean
  // 自定义最大宽度
  maxWidth?: Partial<Record<Breakpoint, string>>
  // 自定义内边距
  padding?: Partial<Record<Breakpoint, string>>
  // 是否居中
  center?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fluid: false,
  center: true
})

const { containerWidth, containerPadding } = useResponsiveContainer()
const { getResponsiveValue } = useResponsive()

// 容器样式
const containerStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.fluid) {
    styles.width = '100%'
    styles.maxWidth = 'none'
  } else {
    styles.maxWidth = props.maxWidth 
      ? getResponsiveValue(props.maxWidth) || containerWidth.value
      : containerWidth.value
  }

  styles.padding = `0 ${props.padding 
    ? getResponsiveValue(props.padding) || containerPadding.value
    : containerPadding.value}`

  if (props.center) {
    styles.margin = '0 auto'
  }

  return styles
})

// 容器类名
const containerClasses = computed(() => ({
  'responsive-container--fluid': props.fluid,
  'responsive-container--center': props.center
}))
</script>

<style scoped>
.responsive-container {
  width: 100%;
  box-sizing: border-box;
}

.responsive-container--fluid {
  max-width: none !important;
}

.responsive-container--center {
  margin-left: auto;
  margin-right: auto;
}

/* 响应式调整 */
@media (max-width: 575px) {
  .responsive-container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .responsive-container {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

@media (min-width: 768px) {
  .responsive-container {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
</style>
