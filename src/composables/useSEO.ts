import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export interface SEOData {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  siteName?: string
  locale?: string
}

const defaultSEO: SEOData = {
  title: '山东岱威创新管业 - 专业管道系统解决方案',
  description:
    '山东岱威创新管业专注于提供高品质的管道系统解决方案，包括管件、阀门、智能管网系统等产品。服务于化工、建筑、市政等多个行业，致力于成为管道行业的领导者。',
  keywords: '管道系统,管件,阀门,智能管网,化工管道,建筑管道,市政管道,岱威管业',
  image: '/images/og-image.jpg',
  type: 'website',
  siteName: '山东岱威创新管业',
  locale: 'zh_CN'
}

export function useSEO(initialData?: Partial<SEOData>) {
  const route = useRoute()
  const seoData = ref<SEOData>({ ...defaultSEO, ...initialData })

  // 更新页面标题
  const updateTitle = (title: string) => {
    const fullTitle = title === defaultSEO.title ? title : `${title} - ${defaultSEO.siteName}`
    document.title = fullTitle
    updateMetaTag('og:title', fullTitle)
    updateMetaTag('twitter:title', fullTitle)
  }

  // 更新描述
  const updateDescription = (description: string) => {
    updateMetaTag('description', description)
    updateMetaTag('og:description', description)
    updateMetaTag('twitter:description', description)
  }

  // 更新关键词
  const updateKeywords = (keywords: string) => {
    updateMetaTag('keywords', keywords)
  }

  // 更新图片
  const updateImage = (image: string) => {
    const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`
    updateMetaTag('og:image', fullImageUrl)
    updateMetaTag('twitter:image', fullImageUrl)
  }

  // 更新 URL
  const updateUrl = (url?: string) => {
    const fullUrl = url || window.location.href
    updateMetaTag('og:url', fullUrl)
    updateMetaTag('twitter:url', fullUrl)
    updateLinkTag('canonical', fullUrl)
  }

  // 更新通用 meta 标签
  const updateMetaTag = (name: string, content: string) => {
    if (!content) return

    // 处理不同类型的 meta 标签
    let selector = `meta[name="${name}"]`
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      selector = `meta[property="${name}"]`
    }

    let meta = document.querySelector(selector) as HTMLMetaElement
    if (!meta) {
      meta = document.createElement('meta')
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  // 更新 link 标签
  const updateLinkTag = (rel: string, href: string) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', rel)
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }

  // 添加结构化数据
  const addStructuredData = (data: any) => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
  }

  // 设置 SEO 数据
  const setSEO = (data: Partial<SEOData>) => {
    seoData.value = { ...seoData.value, ...data }

    if (data.title) updateTitle(data.title)
    if (data.description) updateDescription(data.description)
    if (data.keywords) updateKeywords(data.keywords)
    if (data.image) updateImage(data.image)
    if (data.url !== undefined) updateUrl(data.url)

    // 更新其他 Open Graph 标签
    if (data.type) updateMetaTag('og:type', data.type)
    if (data.siteName) updateMetaTag('og:site_name', data.siteName)
    if (data.locale) updateMetaTag('og:locale', data.locale)
    if (data.author) updateMetaTag('author', data.author)
    if (data.publishedTime) updateMetaTag('article:published_time', data.publishedTime)
    if (data.modifiedTime) updateMetaTag('article:modified_time', data.modifiedTime)

    // Twitter Card 标签
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:site', '@daiwei_pipes')
  }

  // 生成产品页面的结构化数据
  const setProductSEO = (product: {
    name: string
    description: string
    image: string
    price?: string
    brand?: string
    category?: string
    availability?: string
  }) => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      brand: {
        '@type': 'Brand',
        name: product.brand || '岱威管业'
      },
      manufacturer: {
        '@type': 'Organization',
        name: '山东岱威创新管业'
      },
      category: product.category,
      offers: product.price
        ? {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'CNY',
            availability: product.availability || 'https://schema.org/InStock'
          }
        : undefined
    }

    addStructuredData(structuredData)

    setSEO({
      title: `${product.name} - 岱威管业产品`,
      description: product.description,
      image: product.image,
      type: 'product'
    })
  }

  // 生成文章页面的结构化数据
  const setArticleSEO = (article: {
    title: string
    description: string
    image: string
    author?: string
    publishedTime?: string
    modifiedTime?: string
  }) => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: article.image,
      author: {
        '@type': 'Person',
        name: article.author || '岱威管业'
      },
      publisher: {
        '@type': 'Organization',
        name: '山东岱威创新管业',
        logo: {
          '@type': 'ImageObject',
          url: '/images/logo.png'
        }
      },
      datePublished: article.publishedTime,
      dateModified: article.modifiedTime || article.publishedTime
    }

    addStructuredData(structuredData)

    setSEO({
      title: article.title,
      description: article.description,
      image: article.image,
      type: 'article',
      author: article.author,
      publishedTime: article.publishedTime,
      modifiedTime: article.modifiedTime
    })
  }

  // 生成组织结构化数据
  const setOrganizationSEO = () => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '山东岱威创新管业',
      url: window.location.origin,
      logo: `${window.location.origin}/images/logo.png`,
      description: '专业的管道系统解决方案提供商',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN',
        addressRegion: '山东省',
        addressLocality: '济南市',
        addressArea: '长清区',
        streetAddress: '双龙路1006号'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+86-xxx-xxxx-xxxx',
        contactType: 'customer service'
      },
      sameAs: [
        // 社交媒体链接
      ]
    }

    addStructuredData(structuredData)
  }

  // 监听路由变化，更新 URL
  watch(
    () => route.path,
    () => {
      updateUrl()
    }
  )

  // 初始化
  onMounted(() => {
    setSEO(seoData.value)
    setOrganizationSEO()
  })

  return {
    seoData,
    setSEO,
    setProductSEO,
    setArticleSEO,
    updateTitle,
    updateDescription,
    updateKeywords,
    updateImage,
    updateUrl
  }
}
