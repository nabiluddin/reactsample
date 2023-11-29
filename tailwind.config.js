/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,mdx}", "./src/*.{html,js,ts,jsx,tsx,mdx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        aso: ['Alfa Slab One', 'cursive'],
        righ: ['Righteous', 'cursive'],
        poppins: ['Poppins', 'cursive'],
        inter: ['Inter', 'cursive'],
        // satoshi: ['Satoshi', 'cursive'],
      },
      colors: {
        'primary': '#231F33',
        'black': '#000000',
        'black-lite': '#1E1E1E',
        'blacky': '#202020',
        'white-lite': '#E8E8E8',
        'white-2lite': '#E9E9E9',
        'navbtnbg': 'var(--nav-btn-bg)',
        'yellow': '#FFE600',
      },
      animation: {
        'scaleanim': 'scaleanim 1.6s linear infinite',
        'animate-fadeIn' : 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        scaleanim: {
          '0%, 100%': { scale: '1' },
          '50%': { scale: '1.1' },
        },
        fadeIn:{
          '0%': {opacity: '0'},
          '100%' : {opacity: '1'}
        }
      },

    },
  },
  plugins: [],
}