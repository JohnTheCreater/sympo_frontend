/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],

  content: [],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'jj': '200px',
        // ...
      },
    },
  },
  plugins: [],
}

