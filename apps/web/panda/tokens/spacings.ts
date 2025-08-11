import type { Tokens } from '@pandacss/dev';

export const spacingTokens = {
  unit: {
    value: '4px'
  }
} as const satisfies Tokens['spacing'];
