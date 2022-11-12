/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{jsx,tsx}', './src/components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fade_in_up: 'fade_in_up 550ms cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
      },
      keyframes: {
        fade_in_up: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
