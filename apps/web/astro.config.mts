// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), preact({ devtools: true })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: 'cloudflare'
  }),
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-frappe'
    }
  }
});
