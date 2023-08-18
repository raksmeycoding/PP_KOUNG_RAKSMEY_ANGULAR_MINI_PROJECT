/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        kontum: ['Kantumruy Pro', 'sans-serif'],
        sans: ['Quicksan', 'sans-serif'],
        rochester: ['Rochester', 'cursive'],
      },
      backgroundImage: {
        moon: "url('../src/assets/moon.svg')",
        welcomeBook: "url('../src/assets/wlcome-book.svg')",
      },
    },
  },
  plugins: [],
}
