import type { Tokens } from '@pandacss/dev';

export const fontTokens = {
  sans: {
    value: [
      'Helvetica Neue',
      'Arial',
      'Hiragino Kaku Gothic ProN',
      'Hiragino Sans',
      'Noto Sans JP',
      'BIZ UDPGothic',
      'Arial',
      'sans-serif'
    ]
  },
  mono: {
    value: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'BIZ UDGothic',
      'monospace'
    ]
  }
} as const satisfies Tokens['fonts'];
