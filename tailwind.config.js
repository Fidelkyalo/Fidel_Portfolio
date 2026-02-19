/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#D4AF37',
        'gold-light': '#F4CF57',
        'gold-dark': '#B48F17',
      }
    },
  },
  plugins: [],
}
