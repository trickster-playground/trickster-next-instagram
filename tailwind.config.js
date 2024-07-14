/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1920px'
      }
    },
    extend: {
      colors: {
        'primary-500': '#0047AB',
        'primary-600': '#0096FF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        red: '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#89CFF0',
        'light-4': '#ADD8E6'
      },
      screens: {
        xs: '480px'
      },
      width: {
        420: '420px',
        465: '465px'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwindcss-animate')]
};
