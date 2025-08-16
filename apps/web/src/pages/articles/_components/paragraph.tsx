import type { JSX } from 'astro/jsx-runtime';
import { css } from '../../../../styled-system/css';

interface Props {
  children: JSX.Element;
}

export const Paragraph = ({ children }: Props) => (
  <p
    class={css({
      fontSize: '16',
      lineHeight: '175',
      letterSpacing: 'sm',
      fontWeight: '400',
      color: 'gray.800'
    })}
  >
    {children}
  </p>
);
