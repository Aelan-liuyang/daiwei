/**
 * 性能监控工具
 */

// 页面加载性能指标
export interface PerformanceMetrics {
  // 首次内容绘制
  FCP?: number
  // 最大内容绘制
  LCP?: number
  // 首次输入延迟
  FID?: number
  // 累积布局偏移
  CLS?: number
  // 首次字节时间
  TTFB?: number
  // DOM 内容加载完成时间
  DCL?: number
  // 页面完全加载时间
  L?: number
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observer: PerformanceObserver | null = null

  constructor() {
    this.init()
  }

  private init() {
    // 监听性能指标
    if ('PerformanceObserver' in window) {
      this.observeWebVitals()
    }

    // 页面加载完成后收集基础指标
    if (document.readyState === 'complete') {
      this.collectBasicMetrics()
    } else {
      window.addEventListener('load', () => {
        this.collectBasicMetrics()
      })
    }
  }

  private observeWebVitals() {
    try {
      // 观察 LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        this.metrics.LCP = lastEntry.startTime
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // 观察 FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime
          }
        })
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // 观察 CLS (Cumulative Layout Shift)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            this.metrics.CLS = clsValue
          }
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // 观察 FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          this.metrics.FID = entry.processingStart - entry.startTime
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

    } catch (error) {
      console.warn('Performance monitoring not supported:', error)
    }
  }

  private collectBasicMetrics() {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

    if (navigation) {
      // TTFB (Time to First Byte)
      this.metrics.TTFB = navigation.responseStart - navigation.fetchStart

      // DCL (DOM Content Loaded)
      this.metrics.DCL = navigation.domContentLoadedEventEnd - navigation.fetchStart

      // L (Load)
      this.metrics.L = navigation.loadEventEnd - navigation.fetchStart
    }
  }

  // 获取当前性能指标
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  // 记录自定义性能指标
  mark(name: string) {
    if ('performance' in window && performance.mark) {
      performance.mark(name)
    }
  }

  // 测量两个标记之间的时间
  measure(name: string, startMark: string, endMark?: string) {
    if ('performance' in window && performance.measure) {
      try {
        performance.measure(name, startMark, endMark)
        const measure = performance.getEntriesByName(name, 'measure')[0]
        return measure.duration
      } catch (error) {
        console.warn('Performance measure failed:', error)
        return 0
      }
    }
    return 0
  }

  // 获取资源加载性能
  getResourceMetrics() {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
    
    return resources.map(resource => ({
      name: resource.name,
      duration: resource.duration,
      size: resource.transferSize,
      type: this.getResourceType(resource.name)
    }))
  }

  private getResourceType(url: string): string {
    if (url.match(/\.(js|mjs)$/)) return 'script'
    if (url.match(/\.css$/)) return 'stylesheet'
    if (url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) return 'image'
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font'
    return 'other'
  }

  // 报告性能数据（可以发送到分析服务）
  report() {
    const metrics = this.getMetrics()
    const resources = this.getResourceMetrics()
    
    // 这里可以发送到你的分析服务
    console.group('🚀 Performance Metrics')
    console.table(metrics)
    console.log('📊 Resource Performance:', resources)
    console.groupEnd()

    return { metrics, resources }
  }

  // 清理观察器
  disconnect() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}

// 创建全局实例
export const performanceMonitor = new PerformanceMonitor()

// 页面可见性变化时报告性能
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    performanceMonitor.report()
  }
})

// 工具函数：防抖
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

// 工具函数：节流
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// 工具函数：检测设备性能
export function getDeviceInfo() {
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
  
  return {
    // 设备内存（GB）
    deviceMemory: (navigator as any).deviceMemory || 'unknown',
    // 硬件并发数
    hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
    // 网络连接信息
    connection: connection ? {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt
    } : 'unknown',
    // 用户代理
    userAgent: navigator.userAgent
  }
}
