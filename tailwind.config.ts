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
  theme: {},
  plugins: [],
}

// Exporting configs of tailwindCSS
export default config;
