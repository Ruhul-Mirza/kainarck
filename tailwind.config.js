/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
         'spin-slow': 'spin 10s linear infinite', // slower spin
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        'aurora-drift': {
          '0%': {
            backgroundPosition: '0% 0%, 0% 0%, 0% 0%',
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '50%': {
            backgroundPosition: '-10% -5%, 5% 10%, 0% 15%',
            filter: 'hue-rotate(30deg) brightness(1.2)',
          },
          '100%': {
            backgroundPosition: '5% 10%, -10% -5%, 15% 0%',
            filter: 'hue-rotate(60deg) brightness(1)',
          },
        },
        'grid-shift': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50%, -50%)' },
        },
        'aurora-pulse': {
          '0%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05)',
          },
          '100%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
        },
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        'aurora-drift': 'aurora-drift 25s infinite alternate ease-in-out',
        'grid-shift': 'grid-shift 20s linear infinite',
        'aurora-pulse': 'aurora-pulse 8s infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
