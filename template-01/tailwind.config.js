/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': '#1a202c',
        'sub-dark': '#222c3b',
        'main-light': '#ffffff',
        'sub-light': '#f9fafb'
      },
      boxShadow: {
        'main-sh': '0 0 20px rgba(0, 0, 0, 0.5)',
        'main-sh-dark': '0 0 20px rgba(0, 0, 0, 0.2)',
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.3)',
        'dialog-shadow': '0 0 150px rgba(0, 0, 0, 0.6)'
      }
    },
  },
  plugins: []
}

