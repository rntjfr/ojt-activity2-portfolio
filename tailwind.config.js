/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ['Aileron', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
      },
      margin: {
        '-60': '-23.5rem',  // Custom negative margin value
        '-80': '-25.5rem',  // Custom negative margin value
        '-90': '-18rem',  // Custom negative margin value
      },
    },
  },
  plugins: [],
}
