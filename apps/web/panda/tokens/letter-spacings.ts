import type { Tokens } from '@pandacss/dev';

export const letterSpacingTokens = {
  none: {
    value: '0'
  },
  sm: {
    value: '0.025em'
  },
  md: {
    value: '0.03em'
  },
  lg: {
    value: '0.04em'
  }
} as const satisfies Tokens['letterSpacings'];
