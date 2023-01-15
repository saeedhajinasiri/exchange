/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/screens/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      "white": '#ffffff',
      "black": '#000000',
      'primary': {
        light: '#96b1ac',
        DEFAULT: '#009688',
        dark: '#344b47',
      },
      'secondary': {
        light: '#a9ad9b',
        DEFAULT: '#94c720',
        dark: '#454839',
      },
      'tertiary': {
        light: '#bfa5a4',
        DEFAULT: '#c70d38',
        dark: '#574141',
      },
      'grey': {
        lighter: '#efefef',
        light: '#8D8D8D',
        DEFAULT: '#404040',
        dark: '#121212',
        darker: '#000000',
      },
    },
    screens: {
      'sm': '640px',
      'md': '1024px',
    },
    fontSize: {
      'm-sm': '0.75rem',
      'm-base': '1.125rem',
      'm-lg': '2.25rem',
      't-sm': '0.75rem',
      't-base': '1.125rem',
      't-lg': '2.25rem',
      'd-sm': '1rem',
      'd-base': '1.5rem',
      'd-lg': '3rem',
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
