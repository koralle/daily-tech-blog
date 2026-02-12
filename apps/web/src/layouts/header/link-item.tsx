import type { ComponentChildren, ComponentProps } from 'preact';
import { css } from '../../../styled-system/css';

interface LinkItemRootProps extends ComponentProps<'a'> {
  children: ComponentChildren;
  variant?: 'desktop' | 'mobile';
}

const Root = ({ children, variant = 'desktop', ...rest }: LinkItemRootProps) => (
  <a
    class={css({
      color: 'gray.700',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 'calc(var(--spacing-unit) * 4)',
      height: 'calc(var(--spacing-unit) * 14)',
      paddingInlineStart: variant === 'mobile' ? 'calc(var(--spacing-unit) * 6)' : 'calc(var(--spacing-unit) * 8)',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'rosePink.100'
      },
      _focusVisible: {
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineColor: 'rosePink.400',
        outlineOffset: variant === 'mobile' ? '-2px' : '2px'
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
