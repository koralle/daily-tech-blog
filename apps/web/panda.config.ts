import { defineConfig } from '@pandacss/dev';
import { colorTokens } from './panda/tokens/colors';
import { fontWeightTokens } from './panda/tokens/font-weights';
import { radiiTokens } from './panda/tokens/radii';
import { lineHeightTokens } from './panda/tokens/line-heights';
import { letterSpacingTokens } from './panda/tokens/letter-spacings';
import { fontSizeTokens } from './panda/tokens/font-sizes';
import { spacingTokens } from './panda/tokens/spacings';
import { fontTokens } from './panda/tokens/fonts';
import { borderWidthTokens } from './panda/tokens/border-widths';
import { sizeTokens } from './panda/tokens/sizes';
import { globalStyles } from './panda/global-styles';
import { textStyles } from './panda/text-styles';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [],

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,astro}', './pages/**/*.{ts,tsx,astro}'],

  // Files to exclude
  exclude: [],

  globalCss: globalStyles,

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        borderWidths: borderWidthTokens,
        colors: colorTokens,
        fonts: fontTokens,
        fontSizes: fontSizeTokens,
        fontWeights: fontWeightTokens,
        letterSpacings: letterSpacingTokens,
        lineHeights: lineHeightTokens,
        radii: radiiTokens,
        sizes: sizeTokens,
        spacing: spacingTokens
      },
      breakpoints: {
        sm: '640px',
        md: '864px',
        lg: '1176px'
      },
      textStyles
    }
  },

  jsxFramework: 'solid',
  jsxFactory: 'panda',

  // The output directory for your css system
  outdir: 'styled-system'
});
