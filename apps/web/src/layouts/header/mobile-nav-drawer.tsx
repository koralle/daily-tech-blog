import { useEffect, useRef, useCallback, useState } from 'preact/hooks';
import { css } from '../../../styled-system/css';

// Icons inlined to avoid SSR issues with SVG imports
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <title>menu</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
      />
    </g>
  </svg>
);

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <title>home</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M13.2 2.65a2 2 0 0 0-2.4 0l-7 5.25A2 2 0 0 0 3 9.5V19a2 2 0 0 0 2 2h3.9a1.1 1.1 0 0 0 1.1-1.1V15a2 2 0 1 1 4 0v4.9a1.1 1.1 0 0 0 1.1 1.1H19a2 2 0 0 0 2-2V9.5a2 2 0 0 0-.8-1.6z"
      />
    </g>
  </svg>
);

const PaperIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <title>paper</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M16 3a3 3 0 0 1 2.995 2.824L19 6v10h.75c.647 0 1.18.492 1.244 1.122l.006.128V19a3 3 0 0 1-2.824 2.995L18 22H8a3 3 0 0 1-2.995-2.824L5 19V9H3.25a1.25 1.25 0 0 1-1.244-1.122L2 7.75V6a3 3 0 0 1 2.824-2.995L5 3zm3 15h-9v1c0 .35-.06.687-.17 1H18a1 1 0 0 0 1-1zm-7-6h-2a1 1 0 0 0-.117 1.993L10 14h2a1 1 0 0 0 .117-1.993zm2-4h-4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2M5 5a1 1 0 0 0-1 1v1h1z"
      />
    </g>
  </svg>
);

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <title>profile</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M16 14a5 5 0 0 1 4.995 4.783L21 19v1a2 2 0 0 1-1.85 1.995L19 22H5a2 2 0 0 1-1.995-1.85L3 20v-1a5 5 0 0 1 4.783-4.995L8 14zM12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10"
      />
    </g>
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <title>github</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032.4.444.5 1.188.571 1.756.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276-.712-.302-1.208-.77-1.581-1.218-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088.48.62.87 1.43 1.63 1.753.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581 9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719.59-.653 1.584-.268 2.28-.031Z"
      />
    </g>
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
  >
    <title>twitter</title>
    <g fill="none">
      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
      <path
        fill="currentColor"
        d="M4.594 4.984a1 1 0 0 1 .941.429C7.011 7.572 8.783 8.47 10.75 8.674c.096-.841.323-1.672.75-2.404.626-1.074 1.644-1.864 3.098-2.156 2.01-.404 3.54.324 4.427 1.215l1.792-.335a1 1 0 0 1 1.053 1.478l-1.72 3.022c.157 4.361-1.055 7.405-3.639 9.502-1.37 1.112-3.332 1.743-5.485 1.938-2.17.196-4.623-.041-7.061-.753a1 1 0 0 1 .007-1.922c1.226-.349 2.16-.65 3.003-1.177-1.199-.636-2.082-1.468-2.707-2.416-.868-1.318-1.19-2.788-1.254-4.113-.064-1.325.127-2.553.329-3.438.115-.505.249-1.011.434-1.495a1 1 0 0 1 .818-.636Z"
      />
    </g>
  </svg>
);

// Link Item Styles (inline to avoid component rendering issues)
const linkItemStyles = (variant: 'desktop' | 'mobile' = 'desktop') =>
  css({
    color: 'gray.700',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 'calc(var(--spacing-unit) * 4)',
    height: 'calc(var(--spacing-unit) * 14)',
    paddingInlineStart: variant === 'mobile' ? 'calc(var(--spacing-unit) * 6)' : 'calc(var(--spacing-unit) * 8)',
    cursor: 'pointer',
    textDecoration: 'none',
    _hover: {
      backgroundColor: 'rosePink.100'
    },
    _focusVisible: {
      outlineStyle: 'solid',
      outlineWidth: '2px',
      outlineColor: 'rosePink.400',
      outlineOffset: variant === 'mobile' ? '-2px' : '2px'
    }
  });

const linkItemLabelStyles = css({
  fontSize: '16',
  fontWeight: '400',
  letterSpacing: '0.025em',
  lineHeight: '150'
});

const linkItemIconStyles = css({
  display: 'grid',
  placeContent: 'center',
  inlineSize: 'calc(var(--spacing-unit) * 6)',
  blockSize: 'calc(var(--spacing-unit) * 6)'
});

// Social Link Styles
const socialLinkStyles = css({
  color: 'gray.700',
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
  touchAction: 'manipulation',
  textDecoration: 'none',
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
  },
  _focusVisible: {
    outlineStyle: 'solid',
    outlineWidth: '2px',
    outlineColor: 'rosePink.400',
    outlineOffset: '3px'
  }
});

// Link Item Component
interface LinkItemProps {
  href: string;
  children: preact.ComponentChildren;
  variant?: 'desktop' | 'mobile';
}

const LinkItem = ({ href, children, variant = 'desktop' }: LinkItemProps) => (
  <a
    href={href}
    class={linkItemStyles(variant)}
  >
    {children}
  </a>
);

const LinkItemIcon = ({ children }: { children: preact.ComponentChildren }) => (
  <div class={linkItemIconStyles}>{children}</div>
);

const LinkItemLabel = ({ children }: { children: preact.ComponentChildren }) => (
  <span class={linkItemLabelStyles}>{children}</span>
);

// Social Link Component
interface SocialLinkProps {
  href: string;
  children: preact.ComponentChildren;
  'aria-label'?: string;
}

const SocialLink = ({ href, children, 'aria-label': ariaLabel }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    class={socialLinkStyles}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

export default function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Handle dialog open/close based on isOpen state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Handle ESC key and close events
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      handleClose();
    };

    const handleCloseEvent = () => {
      setIsOpen(false);
      // Focus return to trigger when dialog closes
      triggerRef.current?.focus();
    };

    dialog.addEventListener('cancel', handleCancel);
    dialog.addEventListener('close', handleCloseEvent);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      dialog.removeEventListener('close', handleCloseEvent);
    };
  }, [handleClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: MouseEvent) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      handleClose();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        class={css({
          display: 'grid',
          placeItems: 'center',
          color: 'gray.700',
          inlineSize: 'calc(var(--spacing-unit) * 11)',
          blockSize: 'calc(var(--spacing-unit) * 11)',
          borderRadius: '12',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'gray.200',
          backgroundColor: 'white',
          cursor: 'pointer',
          _hover: {
            backgroundColor: 'gray.100'
          },
          _focusVisible: {
            outlineStyle: 'solid',
            outlineWidth: '2px',
            outlineColor: 'rosePink.400',
            outlineOffset: '2px'
          }
        })}
      >
        <span
          class={css({
            display: 'grid',
            placeItems: 'center',
            inlineSize: 'calc(var(--spacing-unit) * 6)',
            blockSize: 'calc(var(--spacing-unit) * 6)'
          })}
        >
          <MenuIcon />
        </span>
      </button>

      {/* Drawer Dialog */}
      <dialog
        ref={dialogRef}
        id="mobile-drawer"
        onClick={handleBackdropClick}
        class={css({
          position: 'fixed',
          inset: '0',
          margin: '0',
          padding: '0',
          border: 'none',
          backgroundColor: 'transparent',
          maxInlineSize: '100%',
          maxBlockSize: '100%',
          inlineSize: '100%',
          blockSize: '100%',
          '&::backdrop': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(2px)'
          },
          '&[open]': {
            display: 'grid',
            gridTemplateColumns: '1fr auto'
          }
        })}
      >
        {/* Backdrop area (left side) */}
        <div
          class={css({
            backgroundColor: 'transparent'
          })}
          onClick={handleClose}
          aria-hidden="true"
        />

        {/* Drawer panel (right side) */}
        <div
          class={css({
            backgroundColor: 'white',
            inlineSize: 'calc(var(--spacing-unit) * 70)',
            maxInlineSize: '85vw',
            blockSize: '100%',
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
            animation: 'slideInFromRight 250ms cubic-bezier(0.16, 1, 0.3, 1)'
          })}
        >
          {/* Drawer header with close button */}
          <div
            class={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingInline: 'calc(var(--spacing-unit) * 6)',
              paddingBlock: 'calc(var(--spacing-unit) * 4)',
              borderBottomWidth: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'gray.200'
            })}
          >
            <span
              class={css({
                color: 'gray.700',
                fontSize: '18',
                fontWeight: '700',
                letterSpacing: '0.02em'
              })}
            >
              メニュー
            </span>
            <button
              type="button"
              onClick={handleClose}
              aria-label="メニューを閉じる"
              class={css({
                display: 'grid',
                placeItems: 'center',
                color: 'gray.500',
                inlineSize: 'calc(var(--spacing-unit) * 10)',
                blockSize: 'calc(var(--spacing-unit) * 10)',
                borderRadius: '12',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'gray.200',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '24',
                fontWeight: '400',
                lineHeight: '1',
                _hover: {
                  backgroundColor: 'gray.100',
                  color: 'gray.700'
                },
                _focusVisible: {
                  outlineStyle: 'solid',
                  outlineWidth: '2px',
                  outlineColor: 'rosePink.400',
                  outlineOffset: '2px'
                }
              })}
            >
              ×
            </button>
          </div>

          {/* Drawer content */}
          <nav
            aria-label="モバイルナビゲーション"
            class={css({
              display: 'grid',
              alignContent: 'start',
              gap: 'calc(var(--spacing-unit) * 2)',
              paddingBlock: 'calc(var(--spacing-unit) * 4)',
              overflowY: 'auto'
            })}
          >
            <LinkItem
              href="/"
              variant="mobile"
            >
              <LinkItemIcon>
                <HomeIcon />
              </LinkItemIcon>
              <LinkItemLabel>Home</LinkItemLabel>
            </LinkItem>

            <LinkItem
              href="/page/1"
              variant="mobile"
            >
              <LinkItemIcon>
                <PaperIcon />
              </LinkItemIcon>
              <LinkItemLabel>Articles</LinkItemLabel>
            </LinkItem>

            <LinkItem
              href="/about"
              variant="mobile"
            >
              <LinkItemIcon>
                <ProfileIcon />
              </LinkItemIcon>
              <LinkItemLabel>About</LinkItemLabel>
            </LinkItem>

            {/* Social Links Section */}
            <div
              class={css({
                display: 'grid',
                gridTemplateColumns: 'repeat(2, calc(var(--spacing-unit) * 6))',
                justifyContent: 'start',
                alignItems: 'center',
                gap: 'calc(var(--spacing-unit) * 5)',
                borderTopWidth: '1px',
                borderTopStyle: 'solid',
                borderTopColor: 'gray.200',
                marginTop: 'calc(var(--spacing-unit) * 1)',
                paddingInline: 'calc(var(--spacing-unit) * 6)',
                paddingTop: 'calc(var(--spacing-unit) * 4)',
                paddingBottom: 'calc(var(--spacing-unit) * 2)'
              })}
            >
              <SocialLink
                href="https://twitter.com/koralle_tech"
                aria-label="X (Twitter)"
              >
                <TwitterIcon />
              </SocialLink>

              <SocialLink
                href="https://github.com/koralle"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </SocialLink>
            </div>
          </nav>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes slideInFromRight {
            from { 
              opacity: 0;
              transform: translateX(100%);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </dialog>
    </>
  );
}
