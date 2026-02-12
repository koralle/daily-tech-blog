import type { ComponentChildren, ComponentProps } from 'preact';
import { css } from '../../../../styled-system/css';

export interface MDXComponentProps {
  children: ComponentChildren;
}

interface BlockquoteProps extends ComponentProps<'blockquote'> {
  children: ComponentChildren;
}

const Blockquote = ({ children, ...rest }: BlockquoteProps) => (
  <blockquote
    {...rest}
    class={css({
      color: 'gray.600',
      fontWeight: '700',
      fontStyle: 'oblique 40deg',
      letterSpacing: '0.025em',
      lineHeight: '170',
      marginBlock: 'calc(var(--spacing-unit) * 4)',
      paddingInlineStart: 'calc(var(--spacing-unit) * 3)',
      borderInlineStartWidth: '4px',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'rosePink.400'
    })}
  >
    {children}
  </blockquote>
);
interface LinkProps extends ComponentProps<'a'> {
  children: ComponentChildren;
}

const Link = ({ children, ...rest }: LinkProps) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
    class={css({
      color: 'rosePink.700',
      textDecoration: 'underline',
      textUnderlineOffset: '3',
      borderRadius: '4',
      _hover: {
        backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-600) 12.5%, transparent)'
      },
      _active: {
        backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-600) 25%, transparent)'
      },
      _focusVisible: {
        outlineOffset: '2'
      },
      _visited: {
        color: 'rosePink.900'
      }
    })}
  >
    {children}
  </a>
);

const H2 = ({ children }: MDXComponentProps) => (
  <h2
    class={css({
      color: 'gray.700',
      fontSize: '24',
      fontWeight: '700',
      letterSpacing: '0.04em',
      lineHeight: '150',
      marginBlock: 'calc(var(--spacing-unit) * 8) calc(var(--spacing-unit) * 4)',
      boxSizing: 'border-box',
      borderBlockEndWidth: '2px',
      borderBlockEndStyle: 'solid',
      borderBlockEndColor: 'rosePink.600',
      '&:where(:has(a))': {
        borderBlockEnd: 'none'
      }
    })}
  >
    {children}
  </h2>
);

const H3 = ({ children }: MDXComponentProps) => (
  <h3
    class={css({
      color: 'gray.700',
      fontSize: '20',
      fontWeight: '700',
      letterSpacing: '0.04em',
      lineHeight: '150',
      marginBlock: 'calc(var(--spacing-unit) * 6) calc(var(--spacing-unit) * 3)',
      paddingInlineStart: 'calc(var(--spacing-unit) * 2)',
      boxSizing: 'border-box',
      borderInlineStartWidth: '6px',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'rosePink.600'
    })}
  >
    {children}
  </h3>
);

const Paragraph = ({ children }: MDXComponentProps) => (
  <p
    class={css({
      color: 'gray.800',
      fontSize: '16',
      fontWeight: '400',
      letterSpacing: '0.04em',
      lineHeight: '175'
    })}
  >
    {children}
  </p>
);

const Code = ({ children }: MDXComponentProps) => (
  <code
    class={css({
      fontFamily: 'mono',
      '&:where(:not(:has(.line)))': {
        color: 'rosePink.700',
        fontWeight: '700',
        backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-600) 12.5%, transparent)',
        padding: '0.25em 0.4em',
        borderRadius: '4',
        letterSpacing: 'normal',
        wordBreak: 'break-word'
      }
    })}
  >
    {children}
  </code>
);

const Strong = ({ children }: MDXComponentProps) => (
  <strong
    class={css({
      color: 'gray.700',
      fontSize: '16',
      fontWeight: '700',
      letterSpacing: '0.025em'
    })}
  >
    {children}
  </strong>
);

interface TableProps extends ComponentProps<'table'> {
  children: ComponentChildren;
}

const Table = ({ children, ...rest }: TableProps) => (
  <div class={css({ overflowX: 'auto' })}>
    <table
      class={css({
        width: '100%',
        alignSelf: 'center',
        boxSizing: 'border-box',
        borderCollapse: 'collapse',
        borderWidth: 'px',
        borderStyle: 'solid',
        borderColor: 'gray.100',
        whiteSpace: 'nowrap',
        backgroundColor: 'white'
      })}
      {...rest}
    >
      {children}
    </table>
  </div>
);

interface TdProps extends ComponentProps<'td'> {
  children: ComponentChildren;
}

const Td = ({ children, style, ...rest }: TdProps) => (
  <td
    style={style}
    class={css({
      textAlign: 'start',
      paddingX: 'calc(var(--spacing-unit) * 4)',
      paddingY: 'calc(var(--spacing-unit) * 2)',
      boxSizing: 'border-box',
      borderWidth: 'px',
      borderStyle: 'solid',
      borderColor: 'gray.200'
    })}
    {...rest}
  >
    {children}
  </td>
);

interface ThProps extends ComponentProps<'th'> {
  children: ComponentChildren;
}

const Th = ({ children, style, ...rest }: ThProps) => (
  <th
    style={style}
    class={css({
      color: 'gray.900',
      backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-800) 20%, transparent)',
      textAlign: 'start',
      paddingX: 'calc(var(--spacing-unit) * 4)',
      paddingY: 'calc(var(--spacing-unit) * 2)',
      boxSizing: 'border-box',
      borderWidth: 'px',
      borderStyle: 'solid',
      borderColor: 'gray.200'
    })}
    {...rest}
  >
    {children}
  </th>
);

interface TrProps extends ComponentProps<'tr'> {
  children: ComponentChildren;
}

const Tr = ({ children, ...rest }: TrProps) => (
  <tr
    class={css({
      width: '100%',
      boxSizing: 'border-box',
      borderWidth: 'px',
      borderStyle: 'solid',
      borderColor: 'gray.100',
      '&:nth-child(even)': {
        backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-800) 6.25%, transparent)'
      },
      '&:nth-child(odd)': {
        backgroundColor: 'white'
      }
    })}
    {...rest}
  >
    {children}
  </tr>
);

const Ul = ({ children }: MDXComponentProps) => (
  <ul
    class={css({
      color: 'gray.800',
      listStyleType: 'circle',
      listStylePosition: 'inside',
      paddingX: 'calc(var(--spacing-unit) * 4)'
    })}
  >
    {children}
  </ul>
);

export const MDX = {
  Blockquote: Blockquote,
  H2: H2,
  H3: H3,
  Link: Link,
  Paragraph: Paragraph,
  Code: Code,
  Strong: Strong,
  Table: Table,
  Th: Th,
  Td: Td,
  Tr: Tr,
  Ul: Ul
};
