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
      transformOrigin: {
        'rotate-text': '0px 60px'
      },
      boxShadow: {
        'shadowDefault': '0px 4px 26px 0px rgba(66, 71, 76, 0.08)',
        'shadowDefault3': '4px 4px 18px 4px rgba(66, 71, 76, 0.13)',
        'shadowDefault2': '4px 5px 26px 11px rgba(66, 71, 76, 0.15)',
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
        },
        rotateText: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        }
        
      },
      animation: {
        iconEffect: 'iconMoving 0.3s linear',
        sidebarOpenEffect: 'handleOpenSidebar 0.4s linear',
        sidebarCloseEffect: 'handleCloseSidebar 0.4s linear',
        scaleSelectionEffect: 'scaleSelection 0.5s linear',
        rotateUpEffect: 'rotateMoveUp 0.3s linear',
        rotateDownEffect: 'rotateMoveDown 0.3s linear',
        rotateTextEffect: 'rotateText 10s linear infinite',
        spinText: 'spin 8s linear infinite',
      }
    },
    colors: {
      text_color: '#120A21',
      primary: '#FFA920',
      none: 'transparent'
    }
  },
  plugins: [],
}

