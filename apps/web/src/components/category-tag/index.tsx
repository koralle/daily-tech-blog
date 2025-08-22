import { cva } from '../../../styled-system/css';
import { styled } from '../../../styled-system/jsx';

const categoryTagStyle = cva({
  base: {
    color: 'white',
    backgroundColor: 'rosePink.700',
    fontWeight: '700',
    fontSize: '16',
    letterSpacing: '0.04em',
    paddingY: 'calc(var(--spacing-unit))',
    paddingX: 'calc(var(--spacing-unit) * 2)',
    borderRadius: '4'
  }
});

export const CategoryTag = styled('a', categoryTagStyle);
