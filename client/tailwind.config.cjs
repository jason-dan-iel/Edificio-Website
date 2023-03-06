module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      },
      screens: {
        mobile : {'max': '640px'},
      }
    },
  },
  plugins: [],
}