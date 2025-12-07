import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  build: {
    importMode: 'dynamic',
  },
  // dictionary: {
  //   locale: Locales.ENGLISH,
  // },
  editor: {
    applicationURL: 'http://localhost:3000',
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
};

export default config;
