/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js', './node_modules/vue-tailwind-datepicker/**/*.js'],
  mode: 'jit',
  theme: {
    colors: {
      // Configure your color palette here
      whiteF: '#FDFBF5',
      blueB: '#4484A5',
      pinkP: '#F196A7'
    },
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
}
