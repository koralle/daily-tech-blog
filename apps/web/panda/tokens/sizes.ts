import type { Tokens } from '@pandacss/dev';

export const sizeTokens = {
  1: {
    value: 'calc(4 / 16 * 1rem)'
  },
  2: {
    value: 'calc(8 / 16 * 1rem)'
  },
  3: {
    value: 'calc(12 / 16 * 1rem)'
  },
  4: {
    value: 'calc(16 / 16 * 1rem)'
  },
  6: {
    value: 'calc(24 / 16 * 1rem)'
  },
  8: {
    value: 'calc(32 / 16 * 1rem)'
  },
  9: {
    value: 'calc(36 / 16 * 1rem)'
  },
  10: {
    value: 'calc(40 / 16 * 1rem)'
  },
  12: {
    value: 'calc(48 / 16 * 1rem)'
  },
  14: {
    value: 'calc(56 / 16 * 1rem)'
  },
  16: {
    value: 'calc(64 / 16 * 1rem)'
  },
  '17_5': {
    value: 'calc(280 / 16 * 1rem)'
  },
  50: {
    value: 'calc(800 / 16 * 1rem)'
  }
} as const satisfies Tokens['sizes'];
