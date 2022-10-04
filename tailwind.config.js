module.exports = {
  content: [
    './apps/**/*.html',
    './apps/**/*.ts',
    './apps/**/*.tsx',
    './libs/**/*.html',
    './libs/**/*.ts',
    './libs/**/*.tsx',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('flowbite/plugin')],
}
