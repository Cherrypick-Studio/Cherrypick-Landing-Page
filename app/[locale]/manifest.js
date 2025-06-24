import {getTranslations} from 'next-intl/server';

export default async function manifest({params: {locale}}) {
  const t = await getTranslations({locale});
  
  return {
    name: t('hero.title'),
    short_name: t('hero.title'),
    description: t('hero.subtitle'),
    start_url: `/${locale}`,
    display: "standalone",
    background_color: "#fff",
    theme_color: "#C42026",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}