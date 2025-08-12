import { cva } from '../../../styled-system/css';

export const article = cva({
  base: {
    backgroundColor: 'white',
    padding: 'calc(var(--spacing-unit) * 4)',
    md: {
      padding: 'calc(var(--spacing-unit) * 8)'
    },
    maxWidth: '50',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
});
