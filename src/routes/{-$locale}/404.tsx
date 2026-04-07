import { createFileRoute } from '@tanstack/react-router';
import {
  defaultLocale,
  getIntlayer,
  getLocalizedUrl,
  localeMap,
} from 'intlayer';

import { NotFoundComponent } from '#/components/NotFoundComponent';

export const Route = createFileRoute('/{-$locale}/404')({
  component: NotFoundComponent,
  head: ({ params }) => {
    const { locale } = params;
    const path = '/404';
    const { meta } = getIntlayer('not-found', locale);

    return {
      links: [
        { rel: 'canonical', href: getLocalizedUrl(path, locale) },
        ...localeMap(({ locale: mapLocale }) => ({
          rel: 'alternate',
          hrefLang: mapLocale,
          href: getLocalizedUrl(path, mapLocale),
        })),
        {
          rel: 'alternate',
          hrefLang: 'x-default',
          href: getLocalizedUrl(path, defaultLocale),
        },
      ],
      meta: [
        { title: meta.title },
        { name: 'description', content: meta.description },
      ],
    };
  },
});
