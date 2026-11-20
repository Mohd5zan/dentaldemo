/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#F0F7F6',
          100: '#D9ECE9',
          200: '#B6DCD7',
          300: '#89C4BD',
          400: '#52A39B',
          500: '#2A827B',
          600: '#1D6762',
          700: '#154E4B',
          800: '#0E3B39',
          900: '#0A2B2A',
          950: '#051817',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E6EDE7',
          200: '#CEDDCF',
          300: '#A9C5AB',
          400: '#7FA784',
          500: '#5E8B64',
          600: '#486E4D',
          700: '#3A573E',
          800: '#314734',
          900: '#293C2C',
        },
        ivory: {
          50: '#FCFBF8',
          100: '#F8F6F0',
          200: '#F0EDE2',
          300: '#E4DFD0',
          400: '#CEC6B2',
          500: '#B6AC92',
        },
        champagne: {
          100: '#F5EFE6',
          200: '#EADFCF',
          300: '#DDC9B1',
          400: '#CBB18F',
          500: '#B5956D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(10, 43, 42, 0.05), 0 2px 6px -1px rgba(10, 43, 42, 0.03)',
        'card': '0 10px 30px -4px rgba(10, 43, 42, 0.06), 0 4px 12px -2px rgba(10, 43, 42, 0.03)',
        'elevated': '0 20px 40px -8px rgba(10, 43, 42, 0.12), 0 6px 16px -3px rgba(10, 43, 42, 0.05)',
        'glow': '0 0 35px -5px rgba(42, 130, 123, 0.25)',
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
