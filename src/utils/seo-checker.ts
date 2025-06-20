/**
 * SEO 检查工具
 * 用于检查页面的 SEO 优化情况
 */

export interface SEOCheckResult {
  score: number
  issues: SEOIssue[]
  suggestions: string[]
}

export interface SEOIssue {
  type: 'error' | 'warning' | 'info'
  message: string
  element?: string
}

export class SEOChecker {
  private issues: SEOIssue[] = []
  private suggestions: string[] = []

  // 检查页面标题
  checkTitle(): void {
    const title = document.title
    
    if (!title) {
      this.addIssue('error', '页面缺少标题标签')
      return
    }

    if (title.length < 30) {
      this.addIssue('warning', '页面标题过短，建议30-60个字符', 'title')
    } else if (title.length > 60) {
      this.addIssue('warning', '页面标题过长，建议30-60个字符', 'title')
    }

    if (!title.includes('岱威') && !title.includes('管业')) {
      this.addIssue('warning', '标题中建议包含品牌关键词', 'title')
    }
  }

  // 检查描述
  checkDescription(): void {
    const description = this.getMetaContent('description')
    
    if (!description) {
      this.addIssue('error', '页面缺少描述标签')
      return
    }

    if (description.length < 120) {
      this.addIssue('warning', '页面描述过短，建议120-160个字符', 'meta[name="description"]')
    } else if (description.length > 160) {
      this.addIssue('warning', '页面描述过长，建议120-160个字符', 'meta[name="description"]')
    }
  }

  // 检查关键词
  checkKeywords(): void {
    const keywords = this.getMetaContent('keywords')
    
    if (!keywords) {
      this.addIssue('warning', '页面缺少关键词标签')
      return
    }

    const keywordArray = keywords.split(',').map(k => k.trim())
    if (keywordArray.length > 10) {
      this.addIssue('warning', '关键词过多，建议控制在5-10个', 'meta[name="keywords"]')
    }
  }

  // 检查 H1 标签
  checkH1Tags(): void {
    const h1Tags = document.querySelectorAll('h1')
    
    if (h1Tags.length === 0) {
      this.addIssue('error', '页面缺少 H1 标签')
    } else if (h1Tags.length > 1) {
      this.addIssue('warning', '页面有多个 H1 标签，建议只使用一个', 'h1')
    }

    h1Tags.forEach((h1, index) => {
      if (!h1.textContent?.trim()) {
        this.addIssue('error', `第${index + 1}个 H1 标签为空`, 'h1')
      }
    })
  }

  // 检查标题层级
  checkHeadingHierarchy(): void {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let previousLevel = 0

    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1))
      
      if (index === 0 && currentLevel !== 1) {
        this.addIssue('warning', '第一个标题应该是 H1', heading.tagName.toLowerCase())
      }

      if (currentLevel > previousLevel + 1) {
        this.addIssue('warning', `标题层级跳跃：从 H${previousLevel} 直接到 H${currentLevel}`, heading.tagName.toLowerCase())
      }

      previousLevel = currentLevel
    })
  }

  // 检查图片 alt 属性
  checkImageAlt(): void {
    const images = document.querySelectorAll('img')
    let missingAltCount = 0

    images.forEach((img, index) => {
      if (!img.alt) {
        missingAltCount++
      } else if (img.alt.length > 125) {
        this.addIssue('warning', `第${index + 1}个图片的 alt 文本过长`, 'img')
      }
    })

    if (missingAltCount > 0) {
      this.addIssue('error', `${missingAltCount} 个图片缺少 alt 属性`)
    }
  }

  // 检查内部链接
  checkInternalLinks(): void {
    const links = document.querySelectorAll('a[href]')
    let internalLinks = 0
    let externalLinks = 0

    links.forEach(link => {
      const href = link.getAttribute('href')
      if (!href) return

      if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        externalLinks++
        if (!link.getAttribute('rel')?.includes('noopener')) {
          this.addIssue('warning', '外部链接建议添加 rel="noopener"', 'a')
        }
      } else {
        internalLinks++
      }
    })

    if (internalLinks < 3) {
      this.addIssue('info', '页面内部链接较少，建议增加相关页面链接')
    }
  }

  // 检查 Open Graph 标签
  checkOpenGraph(): void {
    const requiredOGTags = ['og:title', 'og:description', 'og:image', 'og:url']
    
    requiredOGTags.forEach(tag => {
      if (!this.getMetaProperty(tag)) {
        this.addIssue('warning', `缺少 ${tag} 标签`)
      }
    })
  }

  // 检查页面加载速度相关
  checkPerformance(): void {
    // 检查图片数量
    const images = document.querySelectorAll('img')
    if (images.length > 20) {
      this.addIssue('warning', '页面图片过多，可能影响加载速度')
      this.suggestions.push('考虑使用图片懒加载')
    }

    // 检查外部脚本
    const externalScripts = document.querySelectorAll('script[src^="http"]')
    if (externalScripts.length > 5) {
      this.addIssue('warning', '外部脚本过多，可能影响页面性能')
    }
  }

  // 检查移动端友好性
  checkMobileFriendly(): void {
    const viewport = this.getMetaContent('viewport')
    
    if (!viewport) {
      this.addIssue('error', '缺少 viewport meta 标签')
    } else if (!viewport.includes('width=device-width')) {
      this.addIssue('warning', 'viewport 标签建议包含 width=device-width')
    }
  }

  // 检查结构化数据
  checkStructuredData(): void {
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]')
    
    if (jsonLdScripts.length === 0) {
      this.addIssue('warning', '页面缺少结构化数据')
      this.suggestions.push('添加 JSON-LD 结构化数据以提高搜索引擎理解')
    }

    jsonLdScripts.forEach((script, index) => {
      try {
        JSON.parse(script.textContent || '')
      } catch (error) {
        this.addIssue('error', `第${index + 1}个结构化数据格式错误`)
      }
    })
  }

  // 辅助方法：获取 meta 标签内容
  private getMetaContent(name: string): string | null {
    const meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
    return meta?.content || null
  }

  // 辅助方法：获取 meta property 内容
  private getMetaProperty(property: string): string | null {
    const meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement
    return meta?.content || null
  }

  // 添加问题
  private addIssue(type: SEOIssue['type'], message: string, element?: string): void {
    this.issues.push({ type, message, element })
  }

  // 计算 SEO 分数
  private calculateScore(): number {
    const errorWeight = 10
    const warningWeight = 5
    const infoWeight = 1

    const totalDeductions = this.issues.reduce((total, issue) => {
      switch (issue.type) {
        case 'error': return total + errorWeight
        case 'warning': return total + warningWeight
        case 'info': return total + infoWeight
        default: return total
      }
    }, 0)

    return Math.max(0, 100 - totalDeductions)
  }

  // 执行完整的 SEO 检查
  checkAll(): SEOCheckResult {
    this.issues = []
    this.suggestions = []

    this.checkTitle()
    this.checkDescription()
    this.checkKeywords()
    this.checkH1Tags()
    this.checkHeadingHierarchy()
    this.checkImageAlt()
    this.checkInternalLinks()
    this.checkOpenGraph()
    this.checkPerformance()
    this.checkMobileFriendly()
    this.checkStructuredData()

    // 添加通用建议
    if (this.issues.filter(i => i.type === 'error').length === 0) {
      this.suggestions.push('页面基础 SEO 设置良好')
    }

    if (this.issues.filter(i => i.type === 'warning').length > 0) {
      this.suggestions.push('修复警告项目可以进一步提升 SEO 效果')
    }

    return {
      score: this.calculateScore(),
      issues: this.issues,
      suggestions: this.suggestions
    }
  }
}

// 创建全局实例
export const seoChecker = new SEOChecker()

// 在开发环境下自动检查
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const result = seoChecker.checkAll()
      console.group('🔍 SEO 检查结果')
      console.log(`📊 SEO 分数: ${result.score}/100`)
      
      if (result.issues.length > 0) {
        console.group('⚠️ 发现的问题:')
        result.issues.forEach(issue => {
          const icon = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : 'ℹ️'
          console.log(`${icon} ${issue.message}${issue.element ? ` (${issue.element})` : ''}`)
        })
        console.groupEnd()
      }

      if (result.suggestions.length > 0) {
        console.group('💡 优化建议:')
        result.suggestions.forEach(suggestion => {
          console.log(`💡 ${suggestion}`)
        })
        console.groupEnd()
      }
      
      console.groupEnd()
    }, 1000)
  })
}
