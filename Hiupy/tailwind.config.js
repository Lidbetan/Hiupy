/* eslint-disable no-undef */
// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
],
  theme: {
    extend: {
      backgroundColor: {
        af7d4d: "#AF7D4D",
      },
      textColor: {
        ff9c00: "#FF9C00",
        c7786c: "#C7786C",
        caceb9: "#CACEB9",
        e2a748: '#E2A748',
      },
      fontFamily: {
        poppins: ['Poppins']  //instalacion de fuente poppins
      },
      colors: {
        'dark-grey': '#A9A9A9',
        'amarillo-custom': '#FF9C00',
        'botones': '#AF7D4D',
        'light-grey': '#D9D9D9'
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
};
