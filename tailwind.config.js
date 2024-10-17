// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './app/**/*.{js,ts,jsx,tsx}',
];

export const theme = {
  extend: {
    colors: {
      primary: '#028489',
      white: '#ffffff',
      headingColor: '#0F2137',
      secondary: '#000',
    },
    spacing: {
      3: '48px',
      2: '8px',
      4: '15px',
    },
    borderRadius: {
      DEFAULT: '3px',
    },
    fontSize: {
      '4': '16px',
    },
    fontWeight: {
      '4': '500',
    },
  },
};

export const plugins = [];
