'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const locales = ['en', 'id'];

export default function LocaleProvider({ children, initialMessages, initialLocale }) {
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState(initialLocale);
  const [messages, setMessages] = useState(initialMessages);

  useEffect(() => {
    const urlLocale = searchParams.get('lang') || searchParams.get('locale');
    
    if (urlLocale && locales.includes(urlLocale) && urlLocale !== locale) {
      // Load new messages when locale changes
      import(`../../messages/${urlLocale}.json`)
        .then((newMessages) => {
          setMessages(newMessages.default);
          setLocale(urlLocale);
        })
        .catch((error) => {
          console.error('Failed to load messages:', error);
        });
    }
  }, [searchParams, locale]);

    console.log('lang', messages)
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}