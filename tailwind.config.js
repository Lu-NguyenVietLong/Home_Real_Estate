/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '739px'},
      'md': {'min': '740px', 'max': '1023px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1024px', 'max': '1534px'},
      '2xl': {'min': '1535px'},
    },
    extend: {
      keyframes: {
        iconMoving: {
          '0%': {
            transform: 'translateY(0px)',
            opacity: 1
          },
          '49%': {
            transform: 'translateY(20px)',
            opacity: 0
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1
          },
        }
      },
      animation: {
        iconEffect: 'iconMoving 0.3s linear',
      }
    },
    colors: {
      text_color: '#120A21',
      primary: '#FFA920',
    }
  },
  plugins: [],
}

