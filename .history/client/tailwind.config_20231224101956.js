// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    container: false
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
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
