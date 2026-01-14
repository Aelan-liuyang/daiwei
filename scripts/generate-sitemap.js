import fs from 'fs'
import path from 'path'

// 网站基础 URL
const BASE_URL = 'https://www.daiwei-pipes.com'

// 静态页面路由
const staticRoutes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/products',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/cases',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/news',
    changefreq: 'daily',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// 产品页面（这里可以从数据库或文件中读取）
const productRoutes = [
  {
    url: '/products/管件系列',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/products/阀门系列',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/products/智能管网',
    changefreq: 'weekly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// 案例页面
const caseRoutes = [
  {
    url: '/cases/1',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/cases/2',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/cases/3',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// 新闻页面
const newsRoutes = [
  {
    url: '/news/1',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/news/2',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
]

// 合并所有路由
const allRoutes = [
  ...staticRoutes,
  ...productRoutes,
  ...caseRoutes,
  ...newsRoutes
]

// 生成 sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return sitemap
}

// 生成 robots.txt
function generateRobots() {
  const robots = `User-agent: *
Allow: /

# 禁止访问的目录
Disallow: /admin/
Disallow: /api/
Disallow: /.git/
Disallow: /node_modules/

# Sitemap 位置
Sitemap: ${BASE_URL}/sitemap.xml

# 爬取延迟（可选）
Crawl-delay: 1`

  return robots
}

// 写入文件
function writeFiles() {
  const publicDir = path.resolve(process.cwd(), 'public')
  
  // 确保 public 目录存在
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  // 写入 sitemap.xml
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  fs.writeFileSync(sitemapPath, generateSitemap(), 'utf8')
  console.log('✅ sitemap.xml 生成成功:', sitemapPath)

  // 写入 robots.txt
  const robotsPath = path.join(publicDir, 'robots.txt')
  fs.writeFileSync(robotsPath, generateRobots(), 'utf8')
  console.log('✅ robots.txt 生成成功:', robotsPath)
}

// 执行生成
if (import.meta.url === `file://${process.argv[1]}`) {
  writeFiles()
}

export { generateSitemap, generateRobots, writeFiles }
