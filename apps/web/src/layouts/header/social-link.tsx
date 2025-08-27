import { sva } from '../../../styled-system/css';
import { createStyleContext } from '../../../styled-system/jsx';

const socialLinkStyles = sva({
  slots: ['root', 'icon'],
  base: {
    root: {
      position: 'relative',
      _before: {
        position: 'absolute',
        content: '',
        width: '44px',
        height: '44px'
      }
    },
    icon: {
      color: 'gray.700'
    }
  }
});

const { withProvider, withContext } = createStyleContext(socialLinkStyles);

const Root = withProvider('a', 'root');
const Icon = withContext('div', 'icon');

export const SocialLink = {
  Root,
  Icon
};
