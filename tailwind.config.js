const defaultTheme = require("tailwindcss/defaultTheme");
const twColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Supreme-Variable", ...defaultTheme.fontFamily.sans],
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#070808',
        'special-blue':'#0D1524',
        claro:{
          intense:'#F7F7F8',
          mild:'#CDCCD0'
        },
        oscuro:{
          intense:'#070808',
          mild:'#212123'
        },
        //
      },
    },
  },
  plugins: [],
};
