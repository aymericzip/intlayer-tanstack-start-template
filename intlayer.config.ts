import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  build: {
    importMode: 'dynamic',
  },
  internationalization: {
    defaultLocale: Locales.ENGLISH,
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      // Your other locales
    ],
  },
  editor: {
    applicationURL: 'http://localhost:3000',
  },
};

export default config;
