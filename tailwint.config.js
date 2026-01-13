/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // iOS System Colors
        'ios-bg': '#000000',
        'ios-gray': '#1c1c1e',
        'ios-blue': '#007aff',
        'ios-green': '#34c759',
        'ios-red': '#ff3b30',
      },
      animation: {
        'bounce-slight': 'bounce-slight 0.3s ease-in-out',
      },
      keyframes: {
        'bounce-slight': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
        }
      }
    },
  },
  plugins: [],
}
