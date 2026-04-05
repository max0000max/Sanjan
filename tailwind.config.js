/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      mob: { max: "450px" },
      desk: { min: "451px" },
    },
    colors: {
      dark: "#383737",
      regular: "#2E434A",
      blue: "#1793C2",
    },
    extend: {},
  },
  plugins: [],
};
