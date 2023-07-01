/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fbf3eb",
        secondary: "#000000",
        tertiary: "#adc178",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#000000",
      },
      boxShadow: {
        card: "0px 15px 30px -15px #000000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg-main.jpg')",
      },
    },
  },
  plugins: [],
};