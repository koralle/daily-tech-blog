import type { JSX } from 'astro/jsx-runtime';
import { css } from '../../../styled-system/css';

interface DrawerRootProps {
  id: string;
  'aria-labelledby': string;
  children: JSX.Element;
}

const Root = ({ id, children }: DrawerRootProps) => (
  <dialog
    id={id}
    class={css({
      '&[open]': {
        display: 'grid'
      }
    })}
  >
    {children}
  </dialog>
);

interface DrawerTriggerProps {
  id: string;
  children: JSX.Element;
}

const Trigger = ({ id, children }: DrawerTriggerProps) => (
  <button
    id={id}
    class={css({
      display: 'inline flex',
      inlineSize: 'calc(var(--spacing-unit) * 6)',
      blockSize: 'calc(var(--spacing-unit) * 6)',
      md: {
        inlineSize: 'calc(var(--spacing-unit) * 8)',
        blockSize: 'calc(var(--spacing-unit) * 8)'
      },
      lg: {
        display: 'none'
      }
    })}
  >
    {children}
  </button>
);

export const Drawer = {
  Root,
  Trigger
};
