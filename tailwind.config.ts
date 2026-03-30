import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          primary: '#A259FF',
          light: '#A28FFF',
          dark: '#7B3FCC',
        },
        pink: {
          accent: '#BF219F',
        },
        dark: {
          bg: '#0A0A0A',
          card: 'rgba(20,20,20,0.7)',
        },
      },
      fontFamily: {
        grotesk: ['Space_Grotesk', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
