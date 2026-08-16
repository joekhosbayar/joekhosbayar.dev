import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joekhosbayar.dev',
  output: 'static',
  compressHTML: false,
  build: { inlineStylesheets: 'auto' },
});
