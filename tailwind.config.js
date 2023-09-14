/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        userTomato: "hsl(4, 100%, 67%)",
        userDarkGrey: "hsl(234, 29%, 20%)",
        userCharcoalGrey: "hsl(235, 18%, 26%)",
        userGrey: "hsl(231, 7%, 60%)",
        userWhite: "hsl(0, 0%, 100%)",
        userGradient1: "hsl(346, 100%, 66%)",
        userGradient2: "hsl(14, 100%, 61%)",
        userInputErrorBG: "hsl(5, 100%, 95%)",
      },
    },
  },
  plugins: [],
}