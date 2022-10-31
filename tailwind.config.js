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
        '227.5': '56.875rem',
        '74': '18.5rem',
        '45': '11.25rem'
      },
      height: {
        '150': '37.5rem',
        '125': '31.25rem',
        '120': '30rem',
        '74': '18.5rem'
      },
      spacing: {
        '127.5': '31.875rem',
        '130': '32.5rem',
        '1/5': '20%'
      },
      padding: {
        '5.7': '1.4375rem',
        '5.5': '1.375rem',
        '1.5': '6px'
      },
      margin: {
        '45.5': '11.375rem'
      },
      maxWidth: {
        '235': '58.75rem',
        '120': '30rem'
      },
      lineHeight: {
        '11': '2.75rem'
      }
    },
  },
  plugins: [],
}
