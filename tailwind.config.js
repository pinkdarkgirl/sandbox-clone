/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          '0%': { opacity: '1', transform: 'scale(.1)' },
          '1.5%, 4.75%': { opacity: '1', transform: 'scale(1)' },
          '6.25%, 100%': { opacity: '0', transform: 'scale(.1)' },
        },
        goDown: {
          '0%': { transform: 'translate(-50%, -30%) scale(1)' },
          '100%': { transform: 'translate(-50% , 70%) scale(.8)' },
        },
        goBig: {
          '0%': { height: '192px' },
          '100%': { height: '224px' },
        },
        goTaller: {
          '0%': { height: '160px' },
          '100%': { height: '205px' },
        },
      },
      animation: {
        scaleUp: '21s infinite ease-in-out  scaleUp',
        goDown: '.5s ease-in forwards goDown',
        goBig: '.5s ease-in-out forwards goBig',
        goTaller: '.4s ease-in-out forwards goTaller',
      },
      fontFamily: {
        sans: ['"Montserrat", sans-serif'],
      },
      colors: {
        primary: '#14191e',
        bluey: '#0084ff',
        blueybtn: '#0055fe',
        blueyLight: '#38a0ff',
        blueyDark: '#174291',
        grey: '#a0a4a7',
        darkGrey: '#14181d',
        navGrey: '#1d2128',
        gradientPurp: '#6929ff',
        gradientPurpA: 'rgba(105, 41, 255, 0)',
        hotPink: '#df4af9',
      },
      fontSize: {
        xxs: '0.625rem',
        s: '13px',
        large: '22px',
        xxl: '28px',
      },
      backgroundImage: {
        'footer-texture': "url( './assets/footer-grid.webp')",
        'cubes-texture':
          'radial-gradient(50% 266.67% at 50% 0, #0038ef 0, rgba(102, 0, 232, 0) 100%)',
        'radial-gradient-break':
          'radial-gradient(50% 100% at 50% 100%, #6929ff 0, rgba(30, 84, 183, 0) 100%)',
      },
      height: {
        md: '650px',
      },
      maxWidth: {
        'video-w': 'calc(100vw - 16px)',
      },
    },
  },
  plugins: [],
}
