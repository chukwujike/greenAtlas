/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#203854',
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
};
