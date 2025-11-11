import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const isProduction = command === 'build'

  // 判断部署目标（GitHub / Cloudflare）
  const target = process.env.DEPLOY_TARGET || ''
  const isGithub = target === 'github' || process.env.GITHUB_ACTIONS === 'true'
  // Cloudflare Pages 会自动设置 CF_PAGES 环境变量
  const isCloudflare =
    target === 'cloudflare' || process.env.CF_PAGES === '1' || process.env.CF_PAGES === 'true'

  // ✅ 基础路径配置
  // 开发环境：保持根路径 "/"
  // GitHub Pages：部署在仓库子路径 "/daiwei/"
  // Cloudflare Pages：使用相对路径 "./" 以兼容静态资源
  const base = isGithub ? '/daiwei/' : isCloudflare ? './' : '/'

  if (isProduction) {
    const targetName = isGithub ? 'GitHub Pages' : isCloudflare ? 'Cloudflare Pages' : 'Default'
    console.log(`🚀 Building for: ${targetName}`)
    console.log(`📁 Base path: ${base}`)
  }

  return {
    plugins: [vue()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    base,

    optimizeDeps: {
      include: ['axios']
    },

    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: p => p.replace(/^\/api/, '')
        }
      }
    },

    build: {
      outDir: 'dist',
      target: 'es2015',
      assetsDir: 'assets',
      minify: 'terser',
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `js/[name]-[hash].js`,
          chunkFileNames: `js/[name]-[hash].js`,
          assetFileNames: assetInfo => {
            const name = assetInfo?.name ?? ''
            if (!name) {
              return `assets/[name]-[hash][extname]`
            }
            const info = name.split('.')
            const ext = info[info.length - 1]
            if (/\.(png|jpe?g|gif|svg|ico)$/i.test(name)) {
              return `images/[name]-[hash][extname]`
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(name)) {
              return `fonts/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          },
          manualChunks: {
            vue: ['vue', 'vue-router']
          }
        }
      }
    }
  }
})
