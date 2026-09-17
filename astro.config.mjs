import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://complexity.com',
  output: 'static',
  build: { format: 'directory' }
});
