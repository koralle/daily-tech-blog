import { createSignal, onMount, onCleanup, createRoot } from 'solid-js';
import type { Accessor, Setter } from 'solid-js';
import { css } from '../../../styled-system/css';
import { token } from '../../../styled-system/tokens/index.mjs';
import { BLOG_DESCRIPTION, BLOG_TITLE } from '../../constants';
import { LinkItem } from './link-item';
import { SocialLink } from './social-link';

const createMediaQuery = (): [Accessor<boolean>, Setter<boolean>] => {
  const MEDIA_QUERY = `(min-width: ${token('breakpoints.lg')})`;

  const [isBreakpointLg, setIsBreakpointLg] = createSignal(window.matchMedia(MEDIA_QUERY).matches);

  const onChange = () => setIsBreakpointLg(window.matchMedia(MEDIA_QUERY).matches);

  onMount(() => window.matchMedia(MEDIA_QUERY).addEventListener('change', onChange));

  onCleanup(() => window.matchMedia(MEDIA_QUERY).removeEventListener('change', onChange));

  return [isBreakpointLg, setIsBreakpointLg];
};

const BlogTitle = () => (
  <span
    class={css({
      display: 'inline flex',
      justifyContent: 'start',
      alignItems: 'center',
      fontSize: '24',
      fontWeight: '700',
      lineHeight: '150'
    })}
  >
    {BLOG_TITLE}
  </span>
);

const Sidebar = () => (
  <header
    class={css({
      color: 'gray.700',
      display: 'grid',
      gap: 'calc(var(--spacing-unit) * 6)',
      width: 'calc(var(--spacing-unit) * 70)',
      backgroundColor: 'white',
      paddingY: 'calc(var(--spacing-unit) * 6)',
      borderRadius: '16'
    })}
  >
    <div
      class={css({
        display: 'grid',
        gap: 'calc(var(--spacing-unit) * 2)',
        paddingX: 'calc(var(--spacing-unit) * 8)'
      })}
    >
      <div>
        <BlogTitle />
      </div>
      <p class={css({ fontWeight: '400', letterSpacing: '0.025em', lineHeight: '150' })}>
        フロントエンドの波に浮かぶあざらしの技術ブログ
      </p>
    </div>
    <nav class={css({ display: 'grid', gap: 'calc(var(--spacing-unit) * 4)' })}>
      <div
        class={css({
          display: 'flex',
          justifyContent: 'start',
          gap: 'calc(var(--spacing-unit) * 4)',
          paddingX: 'calc(var(--spacing-unit) * 8)'
        })}
      >
        <SocialLink.Root
          href="https://github.com/koralle"
          target="_blank"
        >
          <SocialLink.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <title>twitter_fill</title>
              <g
                id="twitter_fill"
                fill="none"
              >
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="#525252FF"
                  d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404.626-1.074 1.644-1.864 3.098-2.156 2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502-1.37 1.112-3.332 1.743-5.485 1.938-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177-1.199-.636-2.082-1.468-2.707-2.416-.868-1.318-1.19-2.788-1.254-4.113-.064-1.325.127-2.553.329-3.438.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
                />
              </g>
            </svg>
          </SocialLink.Icon>
        </SocialLink.Root>
        <SocialLink.Root
          href="https://github.com/koralle"
          target="_blank"
        >
          <SocialLink.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <title>github_fill</title>
              <g
                id="github_fill"
                fill="none"
              >
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032.4.444.5 1.188.571 1.756.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276-.712-.302-1.208-.77-1.581-1.218-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088.48.62.87 1.43 1.63 1.753.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581 9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719.59-.653 1.584-.268 2.28-.031Z"
                />
              </g>
            </svg>
          </SocialLink.Icon>
        </SocialLink.Root>
      </div>
      <div>
        <LinkItem.Root href="/">
          <LinkItem.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>home_4_fill</title>
              <g
                id="home_4_fill"
                fill="none"
              >
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 1 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6z"
                />
              </g>
            </svg>
          </LinkItem.Icon>

          <LinkItem.Label>Home</LinkItem.Label>
        </LinkItem.Root>

        <LinkItem.Root href="/pages/1">
          <LinkItem.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>paper_fill</title>
              <g
                id="paper_fill"
                fill="none"
              >
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3zm3 15h-9v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1zm-7-6h-2a1 1 0 0 0-.117 1.993L10 14h2a1 1 0 0 0 .117-1.993zm2-4h-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2M5 5a1 1 0 0 0-1 1v1h1z"
                />
              </g>
            </svg>
          </LinkItem.Icon>

          <LinkItem.Label>Articles</LinkItem.Label>
        </LinkItem.Root>

        <LinkItem.Root href="/about">
          <LinkItem.Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>user_2_fill</title>
              <g
                id="user_2_fill"
                fill="none"
              >
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
                />
              </g>
            </svg>
          </LinkItem.Icon>

          <LinkItem.Label>About</LinkItem.Label>
        </LinkItem.Root>
      </div>
    </nav>
  </header>
);

const BlockStartMenu = () => (
  <header
    class={css({
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'calc(var(--spacing-unit) * 4)',
      md: {
        padding: 'calc(var(--spacing-unit) * 8)'
      },
      backgroundColor: 'white',
      borderRadius: '8'
    })}
  >
    <div>
      <BlogTitle />
    </div>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title>menu_fill</title>
        <g
          id="menu_fill"
          fill="none"
        >
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
          <path
            fill="#525252FF"
            d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
          />
        </g>
      </svg>
    </button>
  </header>
);

export const Header = () => {
  const [isBreakpointLg, setIsBreakpointLg] = createRoot(createMediaQuery);
  console.log(isBreakpointLg());

  if (isBreakpointLg()) {
    return <Sidebar />;
  } else {
    return <BlockStartMenu />;
  }
};
