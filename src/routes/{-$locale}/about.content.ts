import { type Dictionary, t } from 'intlayer';

const aboutContent = {
  content: {
    description: t({
      en: 'This is the about page using Intlayer for internationalization.',
      es: 'Esta es la página de información usando Intlayer para internacionalización.',
      fr: "Ceci est la page à propos utilisant Intlayer pour l'internationalisation.",
    }),
    meta: {
      description: t({
        en: 'Learn more about us and our use of Intlayer for internationalization.',
        es: 'Aprende más sobre nosotros y nuestro uso de Intlayer para internacionalización.',
        fr: "Apprenez-en plus sur nous et notre utilisation d'Intlayer pour l'internationalisation.",
      }),
      title: t({
        en: 'About Us',
        es: 'Sobre Nosotros',
        fr: 'À Propos',
      }),
    },
    title: t({
      en: 'About Us',
      es: 'Sobre Nosotros',
      fr: 'À Propos',
    }),
  },
  key: 'about',
} satisfies Dictionary;

export default aboutContent;
