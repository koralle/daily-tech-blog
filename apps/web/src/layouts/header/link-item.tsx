import type { ComponentChildren, ComponentProps } from 'preact';
import { css } from '../../../styled-system/css';

interface LinkItemRootProps extends ComponentProps<'a'> {
  children: ComponentChildren;
}

const Root = ({ children, ...rest }: LinkItemRootProps) => (
  <a
    class={css({
      color: 'gray.700',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 'calc(var(--spacing-unit) * 4)',
      height: 'calc(var(--spacing-unit) * 14)',
      paddingInlineStart: 'calc(var(--spacing-unit) * 8)',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'rosePink.100'
      }
    })}
    {...rest}
  >
    {children}
  </a>
);

interface LinkItemLabelProps extends ComponentProps<'span'> {
  children: ComponentChildren;
}

const Label = ({ children, ...rest }: LinkItemLabelProps) => (
  <span
    class={css({
      fontSize: '16',
      fontWeight: '400',
      letterSpacing: '0.025em',
      lineHeight: '150'
    })}
    {...rest}
  >
    {children}
  </span>
);

interface LinkItemIconProps extends ComponentProps<'div'> {
  children: ComponentChildren;
}

const Icon = ({ children }: LinkItemIconProps) => (
  <div
    class={css({
      display: 'grid',
      placeContent: 'center',
      inlineSize: 'calc(var(--spacing-unit) * 6)',
      blockSize: 'calc(var(--spacing-unit) * 6)'
    })}
  >
    {children}
  </div>
);

export const LinkItem = {
  Root,
  Label,
  Icon
};
