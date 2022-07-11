module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/**/*.html',
      './apps/**/*.ts',
      './apps/**/*.tsx',
      './libs/**/*.html',
      './libs/**/*.ts',
      './libs/**/*.tsx',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('flowbite/plugin')],
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
}
