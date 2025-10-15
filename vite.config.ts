import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv } from 'vite'

export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  const isProduction = mode.mode === 'production'

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    base: isProduction ? '/daiwei/' : '/', // 修正：生产环境用仓库名
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
