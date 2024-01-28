// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b113d',
        secondary: '#f9f9fa',
        third: '#fdc318',
        fourth: '#0093cf',
        fifth: '#747b88',
        sixth: '#f14666',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-60': 'rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }
      })
    })
  ]
}
