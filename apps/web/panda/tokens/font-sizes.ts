import type { Tokens } from '@pandacss/dev';

export const fontSizeTokens = {
  16: {
    value: '1.0rem'
  },
  18: {
    value: 'calc(18 / 16 * 1rem)'
  },
  20: {
    value: 'calc(20 / 16 * 1rem)'
  },
  24: {
    value: 'calc(24 / 16 * 1rem)'
  }
} as const satisfies Tokens['fontSizes'];
