'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale) => {
    const params = new URLSearchParams(searchParams);
    
    if (newLocale === 'en') {
      // Remove lang param for default language (optional)
      params.delete('lang');
    } else {
      params.set('lang', newLocale);
    }

    const newUrl = params.toString() 
      ? `${pathname}?${params.toString()}`
      : pathname;
    
    router.push(newUrl);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded transition-colors ${
          currentLocale === 'en' 
            ? 'bg-red-cherry-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1 rounded transition-colors ${
          currentLocale === 'fr' 
            ? 'bg-red-cherry-500 text-white' 
            : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Fr
      </button>
    </div>
  );
}