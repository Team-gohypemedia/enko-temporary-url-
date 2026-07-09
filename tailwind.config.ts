import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forge: '#080808',
        charge: '#E8A020',
        warm: '#EEEBE4',
        steel: '#1A1A1A',
      },
      fontSize: {
        xs: '18px',
        sm: '18px',
        base: '18px',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(8,8,8,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(8,8,8,0.07) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
