import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { cookies } from 'next/headers';

// Can be imported from a shared config
const locales = ['en', 'es', 'fr'];

export default getRequestConfig(async ({
  requestLocale
}) => {
  // Validate that the incoming `locale` parameter is valid
  // const cookieStore = cookies();
  const locale =  'en';


  // if (!locales.includes(locale)) notFound();

  return {
    locale: requestLocale || locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});