// tailwind.config.js
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bonheur: ['"Bonheur Royale"', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        'fondo-principal': '#111827',
      },
      backgroundImage: {
        'fondo-secundario': 'linear-gradient(to right, #1f2937, #374151)',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};
