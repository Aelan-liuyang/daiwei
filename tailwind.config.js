/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // 匹配所有 Vue 文件
    "./index.html"
  ],
  theme: {
    extend: {},  // 可添加自定义主题配置
  },
  plugins: [],
}