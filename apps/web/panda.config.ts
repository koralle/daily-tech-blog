import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,astro}', './pages/**/*.{ts,tsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: '{colors.rosePink.600}',
            description: 'koralle\'s brand color'
          },
          rosePink: {
            50: { value: '#FEFCFD' },
            100: { value: '#FDF8F9' },
            200: { value: '#FAEEF0' },
            300: { value: '#F7DFE3' },
            400: { value: '#F4CFD6' },
            500: { value: '#F1B1BD' },
            600: { value: '#EC93A1' },
            700: { value: '#D47585' },
            800: { value: '#BC5769' },
            900: { value: '#983D4E' },
            1000: { value: '#742E3A' },
            1100: { value: '#4A1D25' },
            1200: { value: '#2E0F13' }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
