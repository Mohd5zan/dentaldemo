/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette explicit tokens: Baltic Blue, Teal, Verdigris, Mint Leaf, Cream
        'baltic-blue': '#05668d',
        'baltic': {
          50: '#edf7fa',
          100: '#d5edf3',
          200: '#aedbe8',
          300: '#74c1d6',
          400: '#35a2be',
          500: '#1b84a3',
          600: '#146b86',
          700: '#05668d', // Base Baltic Blue (#05668d)
          800: '#045272',
          900: '#033a52',
          950: '#022332',
          DEFAULT: '#05668d',
        },
        'teal': {
          50: '#eef9fa',
          100: '#d5f1f3',
          200: '#aee3e8',
          300: '#75ced7',
          400: '#36b2c0',
          500: '#028090', // Base Teal (#028090)
          600: '#026c7b',
          700: '#05668d', // Blends into Baltic Blue for dark rich teal
          800: '#045272',
          900: '#033a52',
          950: '#022332',
          DEFAULT: '#028090',
        },
        'verdigris': {
          50: '#effdfa',
          100: '#d4faf1',
          200: '#aaf4e3',
          300: '#71e9d1',
          400: '#34d6ba',
          500: '#00a896', // Base Verdigris (#00a896)
          600: '#008f80',
          700: '#007267',
          800: '#00574f',
          900: '#00443e',
          950: '#002723',
          DEFAULT: '#00a896',
        },
        'mint': {
          50: '#eefdf8',
          100: '#d4fbf0',
          200: '#abf7e1',
          300: '#6eefcc',
          400: '#2ee0b4',
          500: '#02c39a', // Base Mint Leaf (#02c39a)
          600: '#00a380',
          700: '#008167',
          800: '#006552',
          900: '#004f40',
          950: '#002d25',
          DEFAULT: '#02c39a',
        },
        'mint-leaf': '#02c39a',
        'cream': {
          50: '#fdfef8',
          100: '#fbfdf1',
          200: '#f6fbe3',
          300: '#f0f3bd', // Base Cream (#f0f3bd)
          400: '#e3ea98',
          500: '#d2dc6f',
          600: '#b3bd4d',
          700: '#8b9437',
          800: '#6d742e',
          900: '#595e29',
          DEFAULT: '#f0f3bd',
        },
        // Component-compatible alias scales tuned to new palette
        'champagne': {
          50: '#fdfef8',
          100: '#fbfdf1',
          200: '#f6fbe3',
          300: '#f0f3bd', // Cream (#f0f3bd)
          400: '#e3ea98',
          500: '#b3bd4d',
          DEFAULT: '#f0f3bd',
        },
        'ivory': {
          50: '#fdfef9',
          100: '#fafcf2',
          200: '#f3f7e5',
          300: '#e8efd5',
          400: '#d6dfbe',
          500: '#bfcba6',
          DEFAULT: '#fdfef9',
        },
        'sage': {
          50: '#effdfa',
          100: '#d4faf1',
          200: '#aaf4e3',
          300: '#71e9d1',
          400: '#34d6ba',
          500: '#00a896', // Verdigris (#00a896)
          600: '#008f80',
          700: '#007267',
          800: '#00574f',
          900: '#00443e',
          DEFAULT: '#00a896',
        }
      },
      fontFamily: {
        // Professional modern typography pairing:
        // Outfit for crisp, authoritative, contemporary executive headlines
        // Plus Jakarta Sans for clean, highly legible body, interface, and data
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'], // Remaps existing font-serif headlines to clean professional Outfit
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(5, 102, 141, 0.06), 0 2px 6px -1px rgba(5, 102, 141, 0.04)',
        'card': '0 10px 30px -4px rgba(5, 102, 141, 0.08), 0 4px 12px -2px rgba(5, 102, 141, 0.04)',
        'elevated': '0 20px 40px -8px rgba(5, 102, 141, 0.16), 0 6px 16px -3px rgba(5, 102, 141, 0.08)',
        'glow': '0 0 35px -5px rgba(2, 195, 154, 0.35)',
        'glow-baltic': '0 0 35px -5px rgba(5, 102, 141, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
