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
      boxShadow: {
        'shadowDefault': '0px 4px 26px 0px rgba(66, 71, 76, 0.08)',
      },
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
        },

        handleOpenSidebar: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0%)'},
        },

        handleCloseSidebar: {
          '0%': {transform: 'translateX(0%)'},
          '100%': {transform: 'translateX(-100%)'},
        },
        scaleSelection: {
          '0%' : {transform: 'scale(0.5)'},
          '100%': {transform: 'scale(1)'}
        },

        rotateMoveDown: {
          '0%' : {transform: 'rotate(-45deg)'},
          '100%': {transform: 'rotate(135deg)'}
        },
        rotateMoveUp: {
          '0%' : {transform: 'rotate(135deg)'},
          '100%': {transform: 'rotate(-45deg)'}
        }
        
      },
      animation: {
        iconEffect: 'iconMoving 0.3s linear',
        sidebarOpenEffect: 'handleOpenSidebar 0.4s linear',
        sidebarCloseEffect: 'handleCloseSidebar 0.4s linear',
        scaleSelectionEffect: 'scaleSelection 0.5s linear',
        rotateUpEffect: 'rotateMoveUp 0.3s linear',
        rotateDownEffect: 'rotateMoveDown 0.3s linear'
      }
    },
    colors: {
      text_color: '#120A21',
      primary: '#FFA920',
    }
  },
  plugins: [],
}

