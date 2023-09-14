/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': { 'min': '280px', 'max': '570px' },
        'md': { 'min': '768', 'max': '1023' },
      }
    },
  },
  plugins: [],
}

