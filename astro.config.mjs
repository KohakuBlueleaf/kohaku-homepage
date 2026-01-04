import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import UnoCSS from '@unocss/astro';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://kblueleaf.net/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [
    vue(),
    UnoCSS({
      injectReset: true,
    }),
    sitemap(),
    robotsTxt(),
  ],
  server: {
    host: '127.0.0.1',
    port: 43211,
  },
});
