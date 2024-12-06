/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-purple-start': '#461096',
        'custom-purple-end': '#7F3CE0',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}