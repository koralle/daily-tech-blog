import type { Tokens } from '@pandacss/dev';

export const letterSpacingTokens = {
  none: {
    value: '0'
  },
  sm: {
    value: '0.025em'
  },
  md: {
    value: '0.1em'
  },
  lg: {
    value: '0.2em'
  }
} as const satisfies Tokens['letterSpacings'];
