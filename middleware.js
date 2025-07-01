import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'kr', 'cn', 'ae'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always use locale prefix
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames - fix the matcher to include 'fr'
  matcher: ['/', '/(en|es|fr|ae|cn|kr)/:path*']
};