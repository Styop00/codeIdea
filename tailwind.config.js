/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        ...colors,
        'sidebar-color': "#fafafa",
        'sidebar-text-color': "#A9A9A9",
        'sidebar-bg-color': '#e3e3e3',
        'logo-color': '#9A9A9A',
        'footer_text_color':'#B3B3B3',
        "butt_color":"#C4C4C4"

      },
      fontFamily: {
        'montserrat': 'Montserrat'
      },
    },
  },
  plugins: [],
}

