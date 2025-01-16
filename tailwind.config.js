/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      height:{
        "screen-700":"700px"
      },
      colors: {
        ...colors,
        'sidebar-color': "#fafafa",
        'sidebar-text-color': "#A9A9A9",
        'sidebar-bg-color': '#e3e3e3',
        'logo-color': '#9A9A9A',
        'gray-100':'#B3B3B3',
        "gray-600":"#C4C4C4",
        "gray-400":"#28282800",
        "gray-500":"#28282814",
        "gray-150":"#00000040",
        'gray-200':"#fefefe",
        'gray-300':"#efefef",
        "gray-10":"#282929"
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      },
    },
  },
  plugins: [],
}

