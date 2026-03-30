import { createFileRoute } from '@tanstack/react-router';
import { generateSitemap } from 'intlayer';

const SITE_URL = 'http://localhost:3000';

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const sitemap = generateSitemap(
          [
            { path: '/', changefreq: 'daily', priority: 1.0 },
            { path: '/about', changefreq: 'monthly', priority: 0.8 },
          ],
          { siteUrl: SITE_URL },
        );

        return new Response(sitemap, {
          headers: { 'Content-Type': 'application/xml' },
        });
      },
    },
  },
});
