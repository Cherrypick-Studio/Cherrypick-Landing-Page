/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        'red-cherry-50': '#F9E9E9',
        'red-cherry-100': '#F3D2D4',
        'red-cherry-150': '#EDBCBE',
        'red-cherry-200': '#E7A6A8',
        'red-cherry-300': '#DC797D',
        'red-cherry-400': '#D04D51',
        'red-cherry-500': '#C42026',
        'red-cherry-600': '#9D1A1E',
        'red-cherry-700': '#761317',
        'red-cherry-800': '#4E0D0F',
        'red-cherry-850': '#3B0A0B',
        'red-cherry-900': '#270608',
        'gray-0': '#BCBCBC',
        'gray-50': '#ADADAD',
        'gray-100': '#9E9E9E',
        'gray-150': '#909090',
        'gray-200': '#818181',
        'gray-300': '#636363',
        'gray-400': '#464646',
        'gray-500': '#282828',
        'gray-600': '#202020',
        'gray-700': '#181818',
        'gray-800': '#101010',
        'gray-850': '#0C0C0C',
        'gray-900': '#080808',
        black: {
          DEFAULT:'#282828'
        }
      },
      boxShadow: {
        'custom-shadow-left': '32px 0px 24px 0px rgba(255, 255, 255, 1)',
        'custom-shadow-right': '-32px 0px 24px 0px rgba(255, 255, 255, 1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'bounce': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'bounce-once': 'bounce 1s ease 1 forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}