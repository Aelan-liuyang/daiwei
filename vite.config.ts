import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  const isProduction = mode.mode === 'production'

  // ✅ 新增：判断部署目标
  const isGithub = process.env.DEPLOY_TARGET === 'github'

  // ✅ 新增：动态 base 路径
  // 开发环境 -> "/"
  // GitHub Pages -> "/daiwei/"
  // Cloudflare Pages -> "./"
  const base = !isProduction ? '/' : isGithub ? '/daiwei/' : './'

  // ✅ 新增：构建日志
  if (isProduction) {
    console.log(`🚀 Building for: ${isGithub ? 'GitHub Pages' : 'Cloudflare Pages'}`)
    console.log(`📁 Base path: ${base}`)
  }

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // ✅ 修改：使用动态 base
    base,
    optimizeDeps: {
      include: ['axios']
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT as unknown as number,
      open: true,
      https: false,
      ssr: false,
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
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
          entryFileNames: `assets/[name].${new Date().getTime()}.js`,
          chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
          assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
          compact: true,
          manualChunks: {
            vue: ['vue', 'vue-router']
          }
        }
      }
    }
  }
})
