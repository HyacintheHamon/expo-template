/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      opacity: {
        13: ".13",
        22: ".22",
      },
      colors: {
        "main-red": "#960001",
        "main-gray": "#9B9999",
        "main-black": "#222222",
        "main-light-pink": "#FFC4C5",
        "main-dark-gray": "#252525",
      },
    },
  },
  plugins: [],
};
