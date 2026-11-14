/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F6',
        sidebar: '#F2ECE7',
        'sidebar-active': '#25232A',
        card: '#FFFFFF',
        'card-hover': '#FCFBF9',
        border: '#EEE8E3',
        'border-soft': '#F5F1ED',
        maintext: '#25232A',
        subtext: '#77747B',
        muted: '#A5A1A8',
        // Pastel accent palette
        primary: {
          DEFAULT: '#BDEBD9',
          dark: '#1F5A43',
          light: '#E2F7EE',
        },
        secondary: {
          DEFAULT: '#DAD5F7',
          dark: '#4B428A',
          light: '#EFEBFD',
        },
        pink: {
          DEFAULT: '#F3C9CC',
          dark: '#8E383D',
          light: '#FAEBEC',
        },
        peach: {
          DEFAULT: '#F8DFC2',
          dark: '#7D4D1A',
          light: '#FCF2E5',
        },
        // Semantic statuses
        success: {
          DEFAULT: '#70BFA0',
          dark: '#1F6349',
          bg: '#EAF6F1',
        },
        warning: {
          DEFAULT: '#E7B66C',
          dark: '#7A551A',
          bg: '#FCF6EC',
        },
        danger: {
          DEFAULT: '#DF8585',
          dark: '#853232',
          bg: '#FCEFEF',
        },
        charcoal: {
          DEFAULT: '#25232A',
          hover: '#19171C',
          light: '#37343E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 2px 10px -2px rgba(37, 35, 42, 0.03), 0 1px 3px rgba(37, 35, 42, 0.02)',
        'card-hover': '0 12px 28px -4px rgba(37, 35, 42, 0.06), 0 2px 8px rgba(37, 35, 42, 0.03)',
        subtle: '0 1px 3px 0 rgba(37, 35, 42, 0.04)',
        soft: '0 4px 16px -2px rgba(37, 35, 42, 0.05)',
        dropdown: '0 10px 30px -4px rgba(37, 35, 42, 0.1), 0 2px 8px rgba(37, 35, 42, 0.04)',
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'spin-slow': 'spin 1.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
