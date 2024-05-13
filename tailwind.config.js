/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'main-red':'#960001',
        'main-gray':'#9B9999'
      },
    },
  },
  plugins: [],
}

