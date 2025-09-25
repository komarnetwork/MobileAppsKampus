/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/app/components/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
