/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dictionary/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'background' :"url('../Image/bgImage.png')"
      }
    },
  },
  plugins: [],
}
