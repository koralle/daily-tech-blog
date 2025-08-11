import type { Tokens } from '@pandacss/dev';

export const fontWeightTokens = {
  regular: {
    value: '400'
  },
  bold: {
    value: '700'
  }
} as const satisfies Tokens['fontWeights'];
