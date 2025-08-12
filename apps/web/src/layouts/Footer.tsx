import { css } from '../../styled-system/css';

export const Footer = () => (
  <footer
    class={css({
      textStyle: 'footer',
      color: 'gray.700',
      display: 'grid',
      placeContent: 'center',
      paddingY: '8px'
    })}
  >
    <p>&copy; 2025 koralle. All rights reserved.</p>
  </footer>
);
