import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  createFileRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import { IntlayerProvider, useLocale } from 'react-intlayer';

import Header from '@/components/Header';
import { LocaleSwitcher } from '@/components/locale-switcher';

const queryClient = new QueryClient();

export const Route = createFileRoute('/{-$locale}')({
  component: RouteComponent,
});

function RouteComponent() {
  const { locale } = Route.useParams();
  const { defaultLocale } = useLocale();

  return (
    <html lang={locale ?? defaultLocale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />

        <IntlayerProvider locale={locale ?? defaultLocale}>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
          <LocaleSwitcher />
        </IntlayerProvider>

        <Scripts />
      </body>
    </html>
  );
}
