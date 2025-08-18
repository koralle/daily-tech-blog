import { css } from '../../styled-system/css';

export const Footer = () => (
  <footer
    class={css({
      fontWeight: '700',
      fontSize: '16',
      lineHeight: '150',
      letterSpacing: '0.04em',
      color: 'gray.700',
      display: 'grid',
      placeContent: 'center',
      paddingY: 'calc(var(--spacing-unit) * 2)'
    })}
  >
    &copy; 2025 koralle. All rights reserved.
  </footer>
);
