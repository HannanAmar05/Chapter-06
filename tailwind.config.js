/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens :{
      mobile : "414px",
      tablet : "834px",
      web : "1280px"

    }
  },
  plugins: [],
}