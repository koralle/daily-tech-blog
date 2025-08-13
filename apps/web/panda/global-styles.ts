import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
  html: {
    '--global-font-body': 'fonts.sans',
    '--global-font-mono': 'fonts.mono',
    backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-100) 50%, transparent)'
  },
  ':where(.astro-code)': {
    padding: '32px',
    rounded: '8'
  }
});
