import { css } from '../../../styled-system/css';
import type { JSX } from 'solid-js/jsx-runtime';

interface SocialLinkRootProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element;
}

const Root = ({ children, ...rest }: SocialLinkRootProps) => (
  <a
    class={css({
      display: 'block grid'
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
