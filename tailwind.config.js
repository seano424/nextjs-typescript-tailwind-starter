module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      colors: {
        primary: '#65BE7D',
        'primary-light': '#F6FBF8',
        secondary: '#188FD9',
        neutral: '#1C1C1C',
        'neutral-light': '#333333',
        'neutral-superlight': '#F7F7F7',
      },
    },
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: 'black',
        color: 'white',
        margin: '0.5rem',
        padding: '0.5rem',
      },
      prefix: 'screen: ',
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
