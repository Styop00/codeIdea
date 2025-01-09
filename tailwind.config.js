/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "butt_color":"#C4C4C4"
    },
    extend: {
      colors: {
        ...colors,
        'sidebar-color': "#fafafa",
        'sidebar-text-color': "#A9A9A9",
        'sidebar-bg-color': '#e3e3e3',
        'logo-color': '#9A9A9A'
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      },
    },
  },
  plugins: [],
}

