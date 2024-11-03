/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Cormorant Garamond"', 'serif'], 
      },
      colors:{
        universe_primary: '#FFC1CC',
        universe_secendary: '#C5A3FF',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}