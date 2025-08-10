import type { Tokens } from '@pandacss/dev';

export const colorTokens = {
  white: {
    value: '#ffffff'
  },
  black: {
    value: '#000000'
  },
  gray: {
    0: {
      value: '#ffffff'
    },
    100: {
      value: '#e8e8e8'
    },
    200: {
      value: '#dbdbdb'
    },
    300: {
      value: '#c9c9c9'
    },
    400: {
      value: '#b0b0b0'
    },
    500: {
      value: '#929292'
    },
    600: {
      value: '#717171'
    },
    700: {
      value: '#525252'
    },
    800: {
      value: '#383838'
    },
    900: {
      value: '#252525'
    },
    1000: {
      value: '#181818'
    },
    1100: {
      value: '#0f0f0f'
    }
  },
  rosePink: {
    100: {
      value: '#ffcad8'
    },
    200: {
      value: '#ffbecc'
    },
    300: {
      value: '#ffabb9'
    },
    400: {
      value: '#ec93a1'
    },
    500: {
      value: '#cb7583'
    },
    600: {
      value: '#a65463'
    },
    700: {
      value: '#833545'
    },
    800: {
      value: '#64182c'
    },
    900: {
      value: '#4c0019'
    },
    1000: {
      value: '#3b000c'
    },
    1100: {
      value: '#2f0005'
    }
  }
} as const satisfies Tokens['colors'];
