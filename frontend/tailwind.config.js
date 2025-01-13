/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-dark': '#0f172a',
        'panel-gray': '#e1dede',
      }
    },
  },
  plugins: [],
}
