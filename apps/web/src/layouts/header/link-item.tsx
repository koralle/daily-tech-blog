import type { ComponentProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import { css } from '../../../styled-system/css';
import { splitProps } from 'solid-js';

interface LinkItemRootProps extends ComponentProps<'a'> {
  children: JSX.Element;
}

const Root = (props: LinkItemRootProps) => {
  const [local, rest] = splitProps(props, ['children']);

  return (
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
      {local.children}
    </a>
  );
};

interface LinkItemLabelProps extends ComponentProps<'span'> {
  children: JSX.Element;
}

const Label = (props: LinkItemLabelProps) => {
  const [local, rest] = splitProps(props, ['children']);

  return (
    <span
      class={css({
        fontSize: '16',
        fontWeight: '400',
        letterSpacing: '0.025em',
        lineHeight: '150'
      })}
      {...rest}
    >
      {local.children}
    </span>
  );
};

interface LinkItemIconProps extends ComponentProps<'div'> {
  children: JSX.Element;
}

const Icon = (props: LinkItemIconProps) => {
  const [local] = splitProps(props, ['children']);

  return (
    <div
      class={css({
        display: 'grid',
        placeContent: 'center',
        inlineSize: 'calc(var(--spacing-unit) * 6)',
        blockSize: 'calc(var(--spacing-unit) * 6)'
      })}
    >
      {local.children}
    </div>
  );
};

export const LinkItem = {
  Root,
  Label,
  Icon
};
