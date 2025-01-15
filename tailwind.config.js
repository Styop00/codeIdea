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

        'white-20': '#fafafa',
        'white-30': '#FAFBFB',
        'white-40': '#f2f2f2',
        'white-50': '#F6F6F6',
        'white-60': '#FAFBFF',
        'white-100': '#e3e3e3',

        'black-10': '#000000DE',
        'black-200': '#18191F',

        'purple-10': '#7B5EB6',
        'purple-20': '#7B42A7',

        'pink-10': '#FF5A7F',

        'green-10': '#17BF83',

        'orange-10': '#FF9D00',
        
        'blue-10': '#B4BAED',
        'blue-100': '#4E95D8',

        "gray-10":"#282929",
        'gray-100':'#B3B3B3',
        "gray-150":"#00000040",
        'gray-200':"#fefefe",
        'gray-300':"#efefef",
        "gray-400":"#28282800",
        "gray-500":"#28282814",
        "gray-600":"#C4C4C4",
        'gray-700': '#A9A9A9',
        'gray-750': '#9A9A9A',
        'gray-800': '#3c3d3d',
        'gray-850': '#d9d9d9',
      },
      fontFamily: {
        'montserrat': 'Montserrat'
      },
      fontSize: {
        '10px': '10px',
        '24px': '24px',
        '26px': '26px',
        '32px': '32px',
        '36px': '36px',
        '46px': '46px',
      },
      width: {
        '30px': '30px',
        '100px': '100px',
        '178px': '178px',
        '300px': '300px',
        '345px': '345px',
        '500px': '500px',
      },
      height: {
        '3px': '3px',
        '40px': '40px',
        '353px': '353px',
        '400px': '400px',
        '600px': '600px',
      },
      minHeight: {
        '414px': '414px',
        '450px': '450px',
        '460px': '460px',
        '472px': '472px',
        '590px': '590px',
        '1000px': '1000px',
      },
      borderWidth: {
        '1px': '1px',
      },
      borderColor: {
        'color1': '#d6dede',
      },
      borderRadius: {
        'buttom-radius': '10px',
        '16px': '16px',
      },
      boxShadow: {
        'shadow1': "0px 10px 40px 0px #0000000F",
        'shadow2': "0px 10px 64px 0px #00000014",
        'shadow3': "0px 0px 4px 1px #00000026",
      },
      inset: {
        '18px': '18px',
        '88px': '88px',
      },
      margin: {
        '3px': '3px',
        '88px': '88px',
      },
      zIndex: {
        '0': '-1', 
        '1': '1',
      }
    },
  },
  plugins: [],
}

