/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4a6cf7",
        black: "#121723",
        dark: "#1d2430",
        yellow: "#fbb040",
        "bg-color-dark": "#171c28",
        "body-color": "#788293",
      },
      screens: {
        xs: "450px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      }
    },
  },
  plugins: [],
}