import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        sec: {
          dark: '#0B0C10',
          main: '#151338',
          card: '#312e81',
          primary: '#818cf8',
          accent: '#c7d2fe',
          glass: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #0e0c2c 1px, transparent 1px), linear-gradient(to bottom, #0e0c2c 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;


