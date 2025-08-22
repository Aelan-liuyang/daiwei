import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  const isProduction = mode.mode === 'development'

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // @ 表示 src
      }
    },
    base: isProduction ? '/' : '/daiwei/', // 生产环境使用仓库名称，开发环境使用根路径
    optimizeDeps: {
      include: ['axios']
    },
    server: {
      host: '0.0.0.0', // 解决 vite use --host to expose
      port: env.VITE_PORT as unknown as number,
      open: true,
      https: false,
      ssr: false,
      hmr: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          ws: true,
          changeOrigin: true, // 是否允许跨域
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      target: 'es2015',
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      minify: 'terser', // 混淆器，terser构建后文件体积更小
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
