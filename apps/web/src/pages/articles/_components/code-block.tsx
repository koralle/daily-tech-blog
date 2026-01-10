import { type ComponentProps, splitProps, createSignal, Show } from 'solid-js';
import { css } from '../../../../styled-system/css';
import { flex, stack } from '../../../../styled-system/patterns';

interface CodeBlockProps extends ComponentProps<'pre'> {
  'data-language'?: string;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const [local, rest] = splitProps(props, ['children', 'class', 'data-language']);
  const [isCopied, setIsCopied] = createSignal(false);
  let codeRef: HTMLElement | undefined;

  const handleCopy = async () => {
    if (!codeRef) return;
    const codeText = codeRef.textContent || '';
    
    try {
      await navigator.clipboard.writeText(codeText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  return (
    <div
      class={stack({
        gap: '0',
        rounded: '8',
        overflow: 'hidden',
        borderWidth: '1px',
        borderColor: 'gray.200',
        bg: '#24292e', // Default dark background for code
        my: '4'
      })}
    >
      <div
        class={flex({
          justify: 'space-between',
          align: 'center',
          px: '4',
          py: '2',
          bg: 'gray.900',
          borderBottomWidth: '1px',
          borderBottomColor: 'gray.700'
        })}
      >
        <span class={css({ fontSize: 'xs', color: 'gray.400', fontWeight: 'bold' })}>
          {local['data-language'] ? local['data-language'].toUpperCase() : 'TEXT'}
        </span>
        <button
          onClick={handleCopy}
          class={css({
            fontSize: 'xs',
            color: 'gray.400',
            cursor: 'pointer',
            transition: 'color 0.2s',
            _hover: { color: 'white' }
          })}
          aria-label="Copy code"
        >
          <Show when={isCopied()} fallback={<span>Copy</span>}>
            <span class={css({ color: 'green.400' })}>Copied!</span>
          </Show>
        </button>
      </div>
      <pre
        ref={codeRef}
        {...rest}
        class={css({
          overflowX: 'auto',
          p: '4',
          fontSize: 'sm',
          lineHeight: '1.6',
          fontFamily: 'monospace',
          color: 'gray.100',
          '& code': {
            bg: 'transparent',
            p: '0'
          }
        })}
      >
        {local.children}
      </pre>
    </div>
  );
};
