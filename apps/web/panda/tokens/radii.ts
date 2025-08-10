import type { Tokens } from '@pandacss/dev';

export const radiiTokens = {
  4: {
    value: '4px'
  },
  6: {
    value: '6px'
  },
  8: {
    value: '8px'
  },
  12: {
    value: '12px'
  }
} as const satisfies Tokens['radii'];
