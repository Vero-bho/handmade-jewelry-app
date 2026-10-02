import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#210425',
          purple: '#3C1B43',
          plum: '#501537',
          mauve: '#B8A3B8',
          white: '#F5F5F5',
        }
      },
      fontFamily: {
        serif: ['Oranienbaum', 'serif'],
      }
    }
  }
} satisfies Config