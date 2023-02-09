/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: '"Poppins", sans-serif',
      questrial: '"Questrial", sans-serif',
    },
    extend: {
      colors: {
        "logo-red": "#c32129",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
