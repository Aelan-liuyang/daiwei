import { ref, onMounted, onUnmounted, computed } from 'vue'

// 断点定义
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
} as const

export type Breakpoint = keyof typeof breakpoints

// 响应式状态
const windowWidth = ref(0)
const windowHeight = ref(0)

// 更新窗口尺寸
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

// 防抖函数
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

const debouncedUpdateWindowSize = debounce(updateWindowSize, 100)

export function useResponsive() {
  // 初始化
  onMounted(() => {
    updateWindowSize()
    window.addEventListener('resize', debouncedUpdateWindowSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', debouncedUpdateWindowSize)
  })

  // 当前断点
  const currentBreakpoint = computed((): Breakpoint => {
    const width = windowWidth.value
    if (width >= breakpoints.xxl) return 'xxl'
    if (width >= breakpoints.xl) return 'xl'
    if (width >= breakpoints.lg) return 'lg'
    if (width >= breakpoints.md) return 'md'
    if (width >= breakpoints.sm) return 'sm'
    return 'xs'
  })

  // 断点检查函数
  const isXs = computed(() => currentBreakpoint.value === 'xs')
  const isSm = computed(() => currentBreakpoint.value === 'sm')
  const isMd = computed(() => currentBreakpoint.value === 'md')
  const isLg = computed(() => currentBreakpoint.value === 'lg')
  const isXl = computed(() => currentBreakpoint.value === 'xl')
  const isXxl = computed(() => currentBreakpoint.value === 'xxl')

  // 范围检查
  const isMobile = computed(() => windowWidth.value < breakpoints.md)
  const isTablet = computed(() => 
    windowWidth.value >= breakpoints.md && windowWidth.value < breakpoints.lg
  )
  const isDesktop = computed(() => windowWidth.value >= breakpoints.lg)

  // 大于等于某个断点
  const isGte = (breakpoint: Breakpoint) => 
    computed(() => windowWidth.value >= breakpoints[breakpoint])

  // 小于某个断点
  const isLt = (breakpoint: Breakpoint) => 
    computed(() => windowWidth.value < breakpoints[breakpoint])

  // 在某个范围内
  const isBetween = (min: Breakpoint, max: Breakpoint) =>
    computed(() => 
      windowWidth.value >= breakpoints[min] && windowWidth.value < breakpoints[max]
    )

  // 获取响应式值
  const getResponsiveValue = <T>(values: Partial<Record<Breakpoint, T>>): T | undefined => {
    const sortedBreakpoints = Object.keys(breakpoints).sort(
      (a, b) => breakpoints[b as Breakpoint] - breakpoints[a as Breakpoint]
    ) as Breakpoint[]

    for (const bp of sortedBreakpoints) {
      if (windowWidth.value >= breakpoints[bp] && values[bp] !== undefined) {
        return values[bp]
      }
    }

    return undefined
  }

  // 设备类型检测
  const deviceType = computed(() => {
    if (isMobile.value) return 'mobile'
    if (isTablet.value) return 'tablet'
    return 'desktop'
  })

  // 屏幕方向
  const orientation = computed(() => 
    windowWidth.value > windowHeight.value ? 'landscape' : 'portrait'
  )

  // 是否为触摸设备
  const isTouchDevice = computed(() => 
    'ontouchstart' in window || navigator.maxTouchPoints > 0
  )

  // 网格列数计算
  const getGridCols = (config: Partial<Record<Breakpoint, number>>) => {
    return computed(() => getResponsiveValue(config) || 1)
  }

  // 间距计算
  const getSpacing = (config: Partial<Record<Breakpoint, number | string>>) => {
    return computed(() => getResponsiveValue(config) || '16px')
  }

  return {
    // 窗口尺寸
    windowWidth: readonly(windowWidth),
    windowHeight: readonly(windowHeight),
    
    // 当前断点
    currentBreakpoint,
    
    // 断点检查
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    
    // 设备类型
    isMobile,
    isTablet,
    isDesktop,
    deviceType,
    
    // 屏幕方向
    orientation,
    
    // 触摸设备
    isTouchDevice,
    
    // 工具函数
    isGte,
    isLt,
    isBetween,
    getResponsiveValue,
    getGridCols,
    getSpacing
  }
}

// 响应式 CSS 类生成器
export function useResponsiveClasses() {
  const { currentBreakpoint, isMobile, isTablet, isDesktop } = useResponsive()

  const classes = computed(() => ({
    [`breakpoint-${currentBreakpoint.value}`]: true,
    'is-mobile': isMobile.value,
    'is-tablet': isTablet.value,
    'is-desktop': isDesktop.value
  }))

  return {
    classes,
    currentBreakpoint
  }
}

// 响应式字体大小
export function useResponsiveFontSize(config: Partial<Record<Breakpoint, string>>) {
  const { getResponsiveValue } = useResponsive()
  
  return computed(() => getResponsiveValue(config) || '16px')
}

// 响应式容器宽度
export function useResponsiveContainer() {
  const { currentBreakpoint } = useResponsive()
  
  const containerWidth = computed(() => {
    const widths = {
      xs: '100%',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      xxl: '1320px'
    }
    return widths[currentBreakpoint.value]
  })

  const containerPadding = computed(() => {
    const paddings = {
      xs: '16px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '32px',
      xxl: '32px'
    }
    return paddings[currentBreakpoint.value]
  })

  return {
    containerWidth,
    containerPadding
  }
}
