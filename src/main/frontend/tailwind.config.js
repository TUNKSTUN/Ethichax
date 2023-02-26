/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '0.5rem',
      ms: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '10xl': '4.052rem',
    },
    screens: {
      
        'sm': {'min': '0', 'max': '667px'},
        'md': {'min': '668px', 'max': '991px'},
        'lg': {'min': '992px', 'max': '1199px'},
        'xl': {'min': '1200px'},
    
    },
    extend: {
      fontFamily: {
        Epilogue: ["Epilogue", "sans-serif"]
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      crollbarWidth: {
        thin: '6px',
      },
      scrollbarColor: {
        base: 'rgba(0, 0, 0, 0.2)',
        hover: 'rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
}
}
