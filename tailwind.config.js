/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FDF6E3',
          dark: '#F5EDDA',
          cream: '#FAF0D7',
          line: '#B8D4E3',
          margin: '#E74C3C',
        },
        ink: {
          DEFAULT: '#2D3250',
          dark: '#1a1a2e',
          light: '#676FA3',
          blue: '#3468C0',
          pencil: '#8B8B8B',
          red: '#C62828',
          green: '#2E7D32',
        },
        highlight: {
          yellow: '#FFF9C4',
          green: '#C8E6C9',
          pink: '#F8BBD0',
          blue: '#BBDEFB',
          orange: '#FFE0B2',
        },
        stickynote: {
          yellow: '#FFF59D',
          pink: '#F48FB1',
          blue: '#81D4FA',
          green: '#A5D6A7',
        },
      },
      fontFamily: {
        hand: ['"Caveat"', 'cursive'],
        body: ['"Patrick Hand"', 'cursive'],
        code: ['"Source Code Pro"', 'monospace'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'draw': 'draw 2s ease-in-out forwards',
        'draw-slow': 'draw 3s ease-in-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'ink-spread': 'inkSpread 1s ease-out forwards',
        'write': 'write 1.5s steps(30) forwards',
        'stamp': 'stamp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'peel': 'peel 0.6s ease-out forwards',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'page-turn': 'pageTurn 0.8s ease-in-out forwards',
        'float-gentle': 'floatGentle 4s ease-in-out infinite',
        'sketch-in': 'sketchIn 0.8s ease-out forwards',
      },
      keyframes: {
        draw: {
          'from': { strokeDashoffset: '1000' },
          'to': { strokeDashoffset: '0' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          'from': { opacity: '0', transform: 'translateX(30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        inkSpread: {
          'from': { opacity: '0', transform: 'scale(0.8)', filter: 'blur(4px)' },
          'to': { opacity: '1', transform: 'scale(1)', filter: 'blur(0)' },
        },
        write: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        stamp: {
          'from': { opacity: '0', transform: 'scale(2) rotate(-10deg)' },
          'to': { opacity: '1', transform: 'scale(1) rotate(-2deg)' },
        },
        peel: {
          'from': { opacity: '0', transform: 'rotateX(-30deg) translateY(20px)' },
          'to': { opacity: '1', transform: 'rotateX(0) translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        pageTurn: {
          'from': { transform: 'perspective(1200px) rotateY(-90deg)', opacity: '0' },
          'to': { transform: 'perspective(1200px) rotateY(0)', opacity: '1' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        sketchIn: {
          'from': { opacity: '0', transform: 'scale(0.9) rotate(-2deg)' },
          'to': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
      },
      backgroundImage: {
        'ruled-lines': 'repeating-linear-gradient(transparent, transparent 31px, #B8D4E3 31px, #B8D4E3 32px)',
        'graph-paper': 'linear-gradient(rgba(184, 212, 227, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184, 212, 227, 0.3) 1px, transparent 1px)',
      },
      backgroundSize: {
        'ruled': '100% 32px',
        'graph': '20px 20px',
      },
      boxShadow: {
        'paper': '2px 3px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'sticky': '2px 4px 12px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.08)',
        'page': '4px 4px 15px rgba(0,0,0,0.1), inset 0 0 40px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
}
