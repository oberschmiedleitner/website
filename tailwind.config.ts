import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-bg)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)'
      },
      fontFamily: {
        sans: ['var(--font-family-base)', 'sans-serif']
      },
      borderRadius: {
        xl: 'var(--border-radius)'
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(183, 24, 35, 0.35)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
