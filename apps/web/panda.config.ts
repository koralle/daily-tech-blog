import { defineConfig } from '@pandacss/dev';
import { colorTokens } from './panda/tokens/colors';
import { fontWeightTokens } from './panda/tokens/font-weights';

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
        colors: colorTokens,
        fontWeights: fontWeightTokens
      },
    }
  },

  // The output directory for your css system
  outdir: 'styled-system'
});
