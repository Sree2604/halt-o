/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      'madeFor': ['"Wix Madefor Display"', 'sans'],
      'sarabun': ['Sarabun', 'sans-serif'],
      'red-hat-display': ['Red Hat Display', 'sans-serif'],
    }

  },
  plugins: [],
};
