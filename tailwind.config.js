/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors:{
        'primary':{
        1:'#240D57',
        2:'#501FC1',
        3:'#8456EC',
        4:'#E87BF8'
        },
        'secondary':{
          1:'#CCB6FF',
          2:'#EDE5FF',
          3:'#F6F2FF'
        },
        'alert':{
          1:'#FFD7E0',
          2:'#E61445',
          3:'#D3FFE2',
          4:'#00805E'
        },
        'neutral':{
          1:'#4F4F4F',
          2:'#828282',
          3:'#BDBDBD',
          4:'#E0E0E0',
          5:'#F2F2F2',
          6:'#FBFAFF'
        }
      },
      spacing: {
        19:'19px',
        21:'21px',
        23:'92px',
        27:'27px',
        34:'34px',
      }
    },
    screens: {
      "md":"950px",
      "lg":"1212px"
    }
  },
  plugins: [],
}
