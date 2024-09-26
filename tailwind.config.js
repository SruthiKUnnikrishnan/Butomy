/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#FFF3E3',
        'custom-yellow': '#B88E2F',
        'custom-white': '#FCF8F3',

      },
    },
  },
  plugins: [],
}

