/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/**.js", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
