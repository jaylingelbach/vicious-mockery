/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      borderWidth: { 8: "8px" },
    },
  },
  plugins: [],
};
