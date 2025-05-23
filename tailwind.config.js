/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '650px',
      'md': '870px',
      'lg': '1080px',
      'xl': '1300px',
    },
    extend: {
      colors: {
        ...colors,

        'white-20': '#fafafa',
        'white-30': '#FAFBFB',
        'white-40': '#f2f2f2',
        'white-50': '#F6F6F6',
        'white-60': '#FAFBFF',
        'white-70': '#FAFCFF',
        'white-100': '#e3e3e3',

        'black-10': '#000000DE',
        'black-50': '#00000099',
        'black-100': '#000000AD',
        'black-150': '#3C3C43D9',
        'black-200': '#18191F',

        'purple-10': '#7B5EB6',
        'purple-20': '#7B42A7',

        'pink-10': '#FF5A7F',

        'green-10': '#17BF83',
        'green-100': '#CBF443',

        'orange-10': '#FF9D00',

        'blue-10': '#B4BAED',
        'blue-100': '#4E95D8',

        "gray-10": "#282929",
        'gray-100': '#B3B3B3',
        "gray-150": "#00000040",
        'gray-200': "#fefefe",
        'gray-300': "#efefef",
        "gray-400": "#28282800",
        "gray-500": "#28282814",
        "gray-600": "#C4C4C4",
        'gray-700': '#A9A9A9',
        'gray-750': '#9A9A9A',
        'gray-800': '#3c3d3d',
        'gray-850': '#d9d9d9',
        'gray-900': '#979797',
        'gray-950': '#D7D7D7',
        'gray-1000': "#D9D9D9",
        'gray-1050': '#9EA2AE',
        "black-250": '#282929',
        "white-300": "#FBFCFF",
        'gray-1100': "#9EA2AE",
        'gray-1150': "#B3B3B3",
        'gray-1200': '#F3F3F3',
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
        '45px': '45px',
        '60px': '60px',
        '100px': '100px',
        '178px': '178px',
        '220px': '220px',
        '300px': '300px',
        '345px': '345px',
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '800px': '800px',
        '1000px': '1000px',
        '1200px': '1200px',
        '40%': '40%',
        '55%': '55%',
        '70%': '70%',
        '90%': '90%',
      },
      height: {
        '3px': '3px',
        '40px': '40px',
        '60px': '60px',
        '150px': '150px',
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
        'gray-400': '#d6dede',
      },
      borderRadius: {
        '6px': '6px',
        '10px': '10px',
        '16px': '16px',
      },
      boxShadow: {
        'ex-small': '0px 4px 4px 0px #00000024',
        'small-10': "0px 4px 4px 0px #00000014",
        "small-15": "0px 4px 4px 0px #00000024",
        "small-20": "0px 4px 4px 0px #00000040",
        'small-30': '0px 4px 4px 0px #C4C4C417',
        'small': "0px 0px 4px 1px #00000026",
        'medium': "0px 10px 40px 0px #0000000F",

        'large': "0px 10px 64px 0px #00000014",
      },
      inset: {
        '18px': '18px',
        '88px': '88px',
        '96%': '96%',
        '110%': '110%',
      },
      margin: {
        '3px': '3px',
        '88px': '88px',
      },
      zIndex: {
        '0': '-1',
        '1': '1',
      },
      keyframes: {
        'rotate-1': {
          'to': {transform: 'rotate(1deg)'}
        },
        'rotate-2': {
          'to': {transform: 'rotate(-1deg)'}
        },
        'rotate-3': {
          'to': {transform: 'rotate(2deg)'}
        },
        'rotate-4': {
          'to': {transform: 'rotate(-2deg)'}
        },
        'rotateCircle1-md': {
          'to': {top: '44%', left: '81%'}
        },
        'rotateCircle1-xl': {
          'to': {top: '36%', left: '81%'}
        },
        'rotateCircle1': {
          'to': {top: '41%', left: '81%'}
        },
        'rotateCircle2': {
          'to': {top: '45%', left: '90%'}
        },
        'rotateCircle3': {
          'to': {top: '85%', left: '8%'}
        },
        'rotateCircle4-md': {
          'to': {top: '115%', left: '-12%'}
        },
        'rotateCircle4': {
          'to': {top: '85%', left: '-9%'}
        }
      },
      animation: {
        'rotate-1': 'rotate-1 5s forwards',
        'rotate-2': 'rotate-2 5s forwards',
        'rotate-3': 'rotate-3 5s forwards',
        'rotate-4': 'rotate-4 5s forwards',
        'rotateCircle-1-md': 'rotateCircle1-md 1.5s infinite',
        'rotateCircle-1-xl': 'rotateCircle1-xl 1.5s infinite',
        'rotateCircle-4-md': 'rotateCircle4-md 2s infinite',
        'rotateCircle-1': 'rotateCircle1 1.5s infinite',
        'rotateCircle-2': 'rotateCircle2 1.5s infinite',
        'rotateCircle-3': 'rotateCircle3 1.5s infinite',
        'rotateCircle-4': 'rotateCircle4 2s infinite',
      }
    },
  },
  plugins: [],
}

