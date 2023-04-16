/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#050816",
        //primary: "#2E2E64",
        primary: "#2F3060",
        secondary: "#AAA6C3",
        tertiary: "#151030",
        quaternary: "#50538A",
        quinary: "#2A2E66",
        "black-100": "#1d1836",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg2.jpg')",
      },
    },
  },
  plugins: [],
}