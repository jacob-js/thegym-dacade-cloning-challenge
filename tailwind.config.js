/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color': '#3f4246'
      },
      fontSize: {
        '7': '1.75rem',
        '5.5': '1.375rem'
      },
      width: {
        '50': '12.5rem',
        '227.5': '56.875rem'
      },
      height: {
        '150': '37.5rem',
        '125': '31.25rem'
      },
      spacing: {
        '127.5': '31.875rem',
        '130': '32.5rem'
      },
      padding: {
        '5.7': '1.4375rem'
      }
    },
  },
  plugins: [],
}
