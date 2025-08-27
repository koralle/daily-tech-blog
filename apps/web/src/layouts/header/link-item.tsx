import { sva } from '../../../styled-system/css';
import { createStyleContext } from '../../../styled-system/jsx';

const linkItemStyles = sva({
  slots: ['root', 'icon', 'label'],
  base: {
    root: {
      color: 'gray.700',
      display: 'grid',
      gridTemplateColumns: 'max-content 1fr',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: 'calc(var(--spacing-unit) * 4)',
      height: 'calc(var(--spacing-unit) * 14)',
      paddingInlineStart: 'calc(var(--spacing-unit) * 8)',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'rosePink.100'
      }
    },
    icon: {},
    label: {
      fontSize: 16,
      fontWeight: '700',
      letterSpacing: '0.04em'
    }
  }
});

const { withProvider, withContext } = createStyleContext(linkItemStyles);

const Root = withProvider('a', 'root');
const Icon = withContext('div', 'icon');
const Label = withContext('span', 'label');

export const LinkItem = {
  Root,
  Icon,
  Label
};
