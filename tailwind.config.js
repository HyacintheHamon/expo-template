/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        9: "9",
        21: "21",
      },
      opacity: {
        13: ".13",
        22: ".22",
      },
      colors: {
        "main-red": "#960001",
        "main-gray": "#9B9999",
        "main-black": "#222222",
        "main-pink": "#FFB2B3",
        "main-light-pink": "#FFC4C5",
        "main-dark-gray": "#252525",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
