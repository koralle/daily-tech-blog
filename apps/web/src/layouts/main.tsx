import type { JSX } from 'astro/jsx-runtime';
import { css } from '../../styled-system/css';

interface Props {
  children?: JSX.Element;
}

export const Main = ({ children }: Props) => (
  <main
    id="main"
    class={css({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      lg: {
        maxWidth: '50',
        minHeight: '100%'
      }
    })}
  >
    {children}
  </main>
);
