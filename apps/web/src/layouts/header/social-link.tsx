import type { ComponentProps } from 'solid-js';
import type { JSX } from 'solid-js/jsx-runtime';
import { css } from '../../../styled-system/css';

interface SocialLinkRootProps extends ComponentProps<'a'> {
  children: JSX.Element;
}

const Root = ({ children, ...rest }: SocialLinkRootProps) => (
  <a
    target="_blank"
    class={css({
      color: 'gray.700',
      display: 'block grid',
      placeContent: 'center',
      position: 'relative',
      touchAction: 'manipulation',
      '&:not(:disabled)': {
        cursor: 'pointer'
      },
      _before: {
        blockSize: '100%',
        content: '""',
        display: 'block',
        inlineSize: '100%',
        left: '50%',
        minBlockSize: '44px',
        minInlineSize: '44px',
        position: 'absolute',
        top: '50%',
        transform: 'translate3d(-50%, -50%, 0)'
      },
      _hover: {
        color: 'gray.900'
      }
    })}
    {...rest}
  >
    {children}
  </a>
);

interface SocialLinkIconProps {
  children: JSX.Element;
}

const Icon = ({ children }: SocialLinkIconProps) => <>{children}</>;

export const SocialLink = {
  Root,
  Icon
};
