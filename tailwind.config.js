module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#C6C87E',
        secondary: '#1C1C1C',
        accent: '#F6F9D1',
        'cool-blue': '#0070f3',
        'red-alert': 'rgb(221, 52, 84)',
        'dark-mustard': '#38391B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
