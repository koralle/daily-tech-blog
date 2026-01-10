import type { ComponentProps, JSX } from 'solid-js';
import { css } from '../../../../styled-system/css';
import { splitProps } from 'solid-js';
import { CodeBlock } from './code-block';

export interface MDXComponentProps {
  children: JSX.Element;
}

interface BlockquoteProps extends ComponentProps<'blockquote'> {
  children: JSX.Element;
}

const Blockquote = (props: BlockquoteProps) => {
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
    <blockquote
      {...rest}
      class={css({
        color: 'gray.200',
        fontWeight: '700',
        fontStyle: 'oblique 40deg',
        letterSpacing: '0.025em',
        lineHeight: '150',

        paddingInlineStart: 'calc(var(--spacing-unit) * 3)',

        borderInlineStartWidth: '4px',
        borderInlineStartStyle: 'solid',
        borderInlineStartColor: 'gray.200'
      })}
    >
      {local.children}
    </blockquote>
  );
};
interface LinkProps extends ComponentProps<'a'> {
  children: JSX.Element;
}

const Link = (props: LinkProps) => {
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
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
      {local.children}
    </a>
  );
};

const H2 = ({ children }: MDXComponentProps) => (
  <h2
    class={css({
      color: 'gray.700',
      fontSize: '24',
      fontWeight: '700',
      letterSpacing: '0.04em',
      lineHeight: '150',
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
  <h2
    class={css({
      color: 'gray.700',
      fontSize: '20',
      fontWeight: '700',
      letterSpacing: '0.04em',
      lineHeight: '150',
      paddingInlineStart: 'calc(var(--spacing-unit) * 2)',
      boxSizing: 'border-box',
      borderInlineStartWidth: '6px',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'rosePink.600'
    })}
  >
    {children}
  </h2>
);

const Paragraph = ({ children }: MDXComponentProps) => (
  <p
    class={css({
      color: 'gray.800',
      fontSize: '16',
      fontWeight: '400',
      letterSpacing: '0.04em',
      lineHeight: '170'
    })}
  >
    {children}
  </p>
);

const Code = ({ children }: MDXComponentProps) => (
  <code
    class={css({
      '&:where(:not(:has(.line)))': {
        color: 'rosePink.600',
        fontWeight: '700',
        backgroundColor: 'color-mix(in oklch, var(--colors-rose-pink-600) 12.5%, transparent)',
        padding: '0.25em',
        borderRadius: '4',
        letterSpacing: '0.025em'
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
  children: JSX.Element;
}

const Table = (props: TableProps) => {
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
    <div class={css({ overflowX: 'scroll' })}>
      <table
        class={css({
          width: 'stretch',
          md: {
            width: 'stretch'
          },
          alignSelf: 'center',
          boxSizing: 'border-box',
          borderCollapse: 'collapse',
          borderWidth: 'px',
          borderStyle: 'solid',
          borderColor: 'gray.100',
          overflow: 'scroll',
          whiteSpace: 'nowrap',
          backgroundColor: 'white'
        })}
        {...rest}
      >
        {local.children}
      </table>
    </div>
  );
};

interface TdProps extends ComponentProps<'td'> {
  children: JSX.Element;
}

const Td = (props: TdProps) => {
  const [local, rest] = splitProps(props, ['children', 'class', 'style']);

  return (
    <td
      style={local.style}
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
      {local.children}
    </td>
  );
};

interface ThProps extends ComponentProps<'th'> {
  children: JSX.Element;
}

const Th = (props: ThProps) => {
  const [local, rest] = splitProps(props, ['children', 'class', 'style']);

  return (
    <th
      style={local.style}
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
      {local.children}
    </th>
  );
};

interface TrProps extends ComponentProps<'tr'> {
  children: JSX.Element;
}

const Tr = (props: TrProps) => {
  const [local, rest] = splitProps(props, ['children', 'class']);

  return (
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
      {local.children}
    </tr>
  );
};

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
  Pre: CodeBlock,
  Strong: Strong,
  Table: Table,
  Th: Th,
  Td: Td,
  Tr: Tr,
  Ul: Ul
};
