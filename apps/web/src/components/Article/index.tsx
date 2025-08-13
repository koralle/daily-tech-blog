import type { JSX } from 'solid-js';
import { css } from '../../../styled-system/css';

interface Props {
  children: JSX.Element;
}

export const Article = ({ children }: Props) => {
  return (
    <article
      class={css({
        backgroundColor: 'white',
        padding: 'calc(var(--spacing-unit) * 4)',
        width: '100%',
        md: {
          padding: 'calc(var(--spacing-unit) * 8)'
        },
        lg: {
          maxWidth: '50'
        },
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        rounded: '12',
        boxShadow: '0 8px 24px oklch(0% 0 0 / 0.15)'
      })}
    >
      {children}
    </article>
  );
};
