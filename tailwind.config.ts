// Importing type of tailwindCSS configs
import type { Config } from 'tailwindcss'

// Defining configs of tailwindCSS
const config:Config = {
  content: [
      './app/*.{ts,tsx,js,jsx}',
      './app/**/*.{ts,tsx,js,jsx}',
      './component/*.{ts,tsx,js,jsx}',
      './component/**/*.{ts,tsx,js,jsx}',
      './chunk/*.{ts,tsx,js,jsx}',
      './chunk/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
      extend: {
          colors: {
              dark: '#232323',
              theme: '#49B486',
              lightGrey: '#BBBBBB',
              themeBlue: '#2B96CC',
              lightTheme: '#5DE3AA',
              darkerTheme: '#123828',
              lighterGrey: '#e3e3e3',
              themePurple: '#9288F8',
              frogGreen: '#86D028',
              darkFrogGreen: '#1EBB10',
              lightOrange: '#FCAA0B',
              orange: '#FD7123',
              pink: '#FF5492',
              lightGreen: '#93AF40'
          }
      }
  },
  plugins: [],
}

// Exporting configs of tailwindCSS
export default config;
