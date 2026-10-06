/** @type {import('tailwindcss').Config} */
require("@arete/tokens")
module.exports = {
  content: ["App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: require("@arete/tokens").tailwindColors,
      spacing: require("@arete/tokens").spacing,
      borderRadius: require("@arete/tokens").radius,
      fontFamily: require("@arete/tokens").fontFamily,
      fontSize: require("@arete/tokens").fontSize,
    },
  },
  plugins: [],
}
