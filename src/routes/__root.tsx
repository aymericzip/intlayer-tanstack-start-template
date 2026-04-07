import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useParams,
} from '@tanstack/react-router';
import { defaultLocale, getHTMLTextDir } from 'intlayer';
import { IntlayerProvider } from 'react-intlayer';
import Header from '#/components/Header';
import { LocaleSwitcher } from '#/components/locale-switcher';
import appCss from '../styles.css?url';
import type { ReactNode } from 'react';

export const Route = createRootRouteWithContext<{}>()({
  head: () => ({
    links: [
      {
        href: appCss,
        rel: 'stylesheet',
      },
    ],
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        content: 'width=device-width, initial-scale=1',
        name: 'viewport',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
  }),

  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  // Try to find locale in params of any active match
  const params = useParams({ strict: false });
  const locale = params?.locale ?? defaultLocale;

  return (
    <html dir={getHTMLTextDir(locale)} lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <IntlayerProvider locale={locale}>
          <Header />
          <LocaleSwitcher />
          {children}
        </IntlayerProvider>
        <Scripts />
      </body>
    </html>
  );
}
