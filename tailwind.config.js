/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}', // 匹配所有 Vue 文件
    './index.html'
  ],
  theme: {
    screens: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px'
    },
    extend: {
      // 品牌色彩
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dfff',
          300: '#7cc7ff',
          400: '#36abff',
          500: '#0891ff',
          600: '#0070f3',
          700: '#0056d6',
          800: '#004bb8',
          900: '#003366',
          950: '#002952'
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717'
        }
      },
      // 字体大小
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      // 间距
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem'
      },
      // 容器
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem'
        },
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px'
        }
      },
      // 动画
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      // 阴影
      boxShadow: {
        soft: '0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        medium: '0 4px 25px 0 rgba(0, 0, 0, 0.15)',
        hard: '0 10px 40px 0 rgba(0, 0, 0, 0.2)'
      }
    }
  },
  plugins: [
    // 添加一些有用的插件
    function ({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance'
        },
        '.text-pretty': {
          'text-wrap': 'pretty'
        }
      })
    }
  ]
}
