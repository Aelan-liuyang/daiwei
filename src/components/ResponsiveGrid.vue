<template>
  <div 
    class="responsive-grid" 
    :class="gridClasses"
    :style="gridStyles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useResponsive, type Breakpoint } from '@/composables/useResponsive'

interface Props {
  // 各断点下的列数
  cols?: Partial<Record<Breakpoint, number>>
  // 间距
  gap?: Partial<Record<Breakpoint, number | string>>
  // 是否自动填充
  autoFit?: boolean
  // 最小列宽（用于 auto-fit）
  minColWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  cols: () => ({ xs: 1, sm: 2, md: 3, lg: 4 }),
  gap: () => ({ xs: 16, sm: 20, md: 24 }),
  autoFit: false,
  minColWidth: '250px'
})

const { getResponsiveValue } = useResponsive()

// 当前列数
const currentCols = computed(() => getResponsiveValue(props.cols) || 1)

// 当前间距
const currentGap = computed(() => {
  const gap = getResponsiveValue(props.gap)
  return typeof gap === 'number' ? `${gap}px` : gap || '16px'
})

// 网格样式
const gridStyles = computed(() => {
  if (props.autoFit) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(${props.minColWidth}, 1fr))`,
      gap: currentGap.value
    }
  }

  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${currentCols.value}, 1fr)`,
    gap: currentGap.value
  }
})

// 网格类名
const gridClasses = computed(() => ({
  'responsive-grid--auto-fit': props.autoFit,
  [`responsive-grid--cols-${currentCols.value}`]: !props.autoFit
}))
</script>

<style scoped>
.responsive-grid {
  width: 100%;
}

/* 响应式网格项目动画 */
.responsive-grid > :deep(*) {
  transition: all 0.3s ease;
}

/* 自动适应模式的特殊样式 */
.responsive-grid--auto-fit > :deep(*) {
  min-width: 0; /* 防止内容溢出 */
}

/* 不同列数下的特殊处理 */
.responsive-grid--cols-1 > :deep(*) {
  max-width: 100%;
}

.responsive-grid--cols-2 > :deep(*) {
  max-width: 100%;
}

@media (max-width: 767px) {
  .responsive-grid {
    /* 移动端特殊处理 */
  }
}
</style>
