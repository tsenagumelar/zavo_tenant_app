// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // <— Wajib untuk NativeWind
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};
