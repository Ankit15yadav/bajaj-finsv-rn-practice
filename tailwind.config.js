/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'bajaj-100': '#336ebd',
        bajaj: '#004da8',
        light_sky: '#B3DAF7',
      },
      fontFamily: {

      }
    },
  },
  plugins: [],
}