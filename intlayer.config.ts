import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  dictionary: {
    importMode: 'dynamic',
  },
  // dictionary: {
  //   locale: Locales.ENGLISH,
  // },
  editor: {
    applicationURL: 'http://localhost:3000',
  },
  routing: {
    enableProxy: false,
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
  compiler: {
    output: ({ fileName }) => `./${fileName}.content.ts`,
  },
};

export default config;
