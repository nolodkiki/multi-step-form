/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': 'hsl(213, 96%, 18%)',
        'blue-200': 'hsl(243, 100%, 62%)',
        'blue-300': 'hsl(228, 100%, 84%)',
        'blue-400': 'hsl(206, 94%, 87%)',
        red: 'hsl(354, 84%, 57%)',
        'gray-100': 'hsl(231, 11%, 63%)',
        'gray-200': 'hsl(229, 24%, 87%)',
        magnolia: 'hsl(217, 100%, 97%)',
        alabaster: 'hsl(231, 100%, 99%)',
        white: 'hsl(0, 0%, 100%)',
      },
      backgroundImage: {
        'bgMb': "url('/assets/images/bg-sidebar-mobile.svg')",
      },
      fontSize: {
        'main': '16px',
        'small': '14px'
      }
    },
  },
  plugins: [],
}
