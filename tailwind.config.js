/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
<<<<<<< HEAD
    extend: {},
=======
    extend: {
      colors: {
        primary: '#ff725e'
      }
    },
>>>>>>> 990559e569dc0fad9f9990272102eb6e100d5dc4
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: []
}
