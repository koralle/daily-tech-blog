import type { Tokens } from '@pandacss/dev';

export const borderWidthTokens = {
  px: {
    value: '1px'
  },
  '0_5': {
    value: '2px'
  },
  '0_75': {
    value: '3px'
  }
} as const satisfies Tokens['borderWidths'];
