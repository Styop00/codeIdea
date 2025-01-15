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
        'logo-color': '#9A9A9A',
        'button-bg-color': '#c4c4c4',
        'txt-color': '#282929',
        'comments-bg-color': '#FAFBFB',
        'position-text-color': '#000000DE',
        'description-color':'#3c3d3d',
        'effect-background-color': '#7B5EB6',
        'home-background-color': '#f2f2f2',
        'div-background-color': '#d9d9d9',
        'active-item': '#F6F6F6',
        'question-text-color': '#18191F',
        '#FAFBFF': '#FAFBFF',
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

