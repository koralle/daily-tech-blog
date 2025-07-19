// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), solid({ devtools: true })],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    },

    imageService: 'cloudflare'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
