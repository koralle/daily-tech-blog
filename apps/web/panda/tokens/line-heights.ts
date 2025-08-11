import type { Tokens } from '@pandacss/dev';

export const lineHeightTokens = {
  100: {
    value: '100%'
  },
  150: {
    value: '150%'
  },
  170: {
    value: '170%'
  },
  175: {
    value: '175%'
  }
} as const satisfies Tokens['lineHeights'];
