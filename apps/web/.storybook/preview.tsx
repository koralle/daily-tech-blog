import type { Preview } from '@storybook/preact-vite';
import { Global, css } from 'storybook/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (storyFn) => (
      <>
        <Global
          styles={css`
            .sb-show-main.sb-main-padded {
              padding: 0;
              margin: 0;
            }

            #storybook-root {
              display: flex;
              flex-direction: column;
              gap: 0;
              min-block-size: 100svb;
            }
          `}
        />
        {storyFn()}
      </>
    )
  ]
};

export default preview;
