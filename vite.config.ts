import { defineConfig, ConfigEnv, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// 引入node内置模块path：可以获取绝对路径（找不到模块“path”或其相应的类型声明。ts(2307))
import path from "path"

// https://vitejs.dev/config/
const viteConfig = defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src") //@ 表示 src
      }
    },
    base: "./",
    publicPath: "./",
    optimizeDeps: {
      include: ["axios"]
    },
    server: {
      host: "0.0.0.0", //解决 vite use --host to expose
      port: env.VITE_PORT as unknown as number,
      open: true,
      // 是否开启 https
      https: false,
      // 服务端渲染
      ssr: false,
      hmr: true, //热更新是否开启
      proxy: {
        "/api": {
          target: env.VITE_API_URL,
          ws: true,
          changeOrigin: true, //是否允许跨域
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    },
    build: {
      outDir: "dist",
      target: "modules",
      assetsDir: "assets", // 指定生成静态资源的存放路径
      minify: "terser", // 混淆器，terser构建后文件体积更小
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].${new Date().getTime()}.js`,
          chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
          assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
          compact: true,
          manualChunks: {
            vue: ["vue", "vue-router"]
          }
        }
      }
    }
  }
})
export default viteConfig
