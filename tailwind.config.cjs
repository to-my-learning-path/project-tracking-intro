/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      red: "hsl(0, 100%, 68%)",
      veryDarkBlue: "hsl(230, 29%, 20%)",
      darkGrayishBlue: "hsl(230, 11%, 40%)",
      grayishBlue: "hsl(231, 7%, 65%)",
      lightGrayishBlue: "hsl(207, 33%, 95%)",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      barlowCondensed: ["Barlow Condensed", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
