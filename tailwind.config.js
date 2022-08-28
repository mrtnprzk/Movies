/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};