/** @type {import('tailwindcss').Config} */
export default {
  content: [
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: {
              light: '#1351b4',
              hover: '#6082B9',
              dark: '#555555',
            },
            secondary: {
              hover: '#D7E3F5',
              back: '#F8F8F8',
              light: '#13BFD7',
            },
            tertiary: {
              light: '#2783ED',
            }
          },
        },
      },
      plugins: [],
    }
    
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rawline', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

