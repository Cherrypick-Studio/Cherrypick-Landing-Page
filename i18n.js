import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  const validLocales = ['en', 'es', 'fr'];
  const validatedLocale = validLocales.includes(locale) ? locale : 'en';
  
  try {
      return {
        locale: validatedLocale,
        messages: (await import(`./messages/${validatedLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Fallback to English if the locale file doesn't exist
    return {
      messages: (await import(`./messages/en.json`)).default
    };
  }
});