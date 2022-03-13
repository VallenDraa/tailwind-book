module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        dark: '#272D3E',
        primary: '#00BAC7',
        'light-gray': '#E5E5E5',
      },
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: { header: "url('./public/img/header.svg')" },
    },
    boxShadow: {
      soft: '0px 15px 30px rgba(0, 186, 199, 0.33)',
    },
  },
  plugins: [],
};