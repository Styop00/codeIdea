/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-color': "#fafafa",
        'sidebar-text-color': "#A9A9A9",
        'sidebar-bg-color': '#e3e3e3',
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      }
    },
  },
  plugins: [],
}

