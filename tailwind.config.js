/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens :{
      sm: '480px', 
      md:'768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        brightRed: 'hsl(12, 88%,59%)',
        brightRedLight : 'hsl(12,88%,69%)',
        brightRedLightSupLight:'hsl(12,88%,95%)',
        darkBlue:'hsl(28,39%,23%)',
        darkGreyishBlue : 'hsl(227,12%,13%)',
        veryDarkBlue : 'hsl(223,12%,13%)',
        veryPalRed: 'hsl(13,100%,96%)',
        veryLightGrey: 'hsl(0,0%,98%)',

      }
    },
  },
  plugins: [],
}
