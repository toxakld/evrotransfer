/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}", ".src/**/*.{html,js,php,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '319px',

      'sm': '320px',

      'md': '768px',

      'lg': '1200px',
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
}
