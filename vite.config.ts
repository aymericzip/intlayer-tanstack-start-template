import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { localeFlatMap } from 'intlayer';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';
import { intlayer } from 'vite-intlayer';

export const pathList = ['', '/about', '/404'];

const localizedPages = localeFlatMap(({ urlPrefix }) =>
  pathList.map((path) => ({
    path: `${urlPrefix}${path}`,
    prerender: {
      enabled: true,
    },
  })),
);

const config = defineConfig({
  plugins: [
    nitro(),
    tailwindcss(),
    tanstackStart({
      router: {
        routeFileIgnorePattern:
          '.content.(ts|tsx|js|mjs|cjs|jsx|json|jsonc|json5)$',
      },
      sitemap: {
        enabled: true,
        host: 'http://localhost:3000',
      },
      prerender: {
        enabled: true,
        crawlLinks: false,
        concurrency: 10,
      },
      pages: localizedPages,
    }),
    viteReact(),
    intlayer({
      proxy: {
        ignore: (req: any) => req.url?.startsWith('/api'),
      },
    }), // To make intlayer work
  ],
});

export default config;
