/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Imprima', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        beige: '#A1A194',
        amarillo: '#FCFAD0',
        cafe: '#5B605F',
        rojo: '#A90641',
        gris: '#464646',
      },
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'p': { marginBottom: theme('spacing.4') },
        'a': { color: theme('colors.cafe') },
        'a:hover': { color: theme('colors.rojo') },
      })
    })
  ]
}
