// Shared SEO helpers for locale-aware canonical + hreflang alternates.
// en is served at the root (no prefix); id is served under /id (localePrefix: "as-needed").

export const SITE_URL = "https://cherrypick.studio";
export const LOCALES = ["en", "id"];
export const DEFAULT_LOCALE = "en";

/**
 * Build the absolute URL for a given locale + path.
 * @param {string} path - e.g. "/", "/blog", "/blog/my-post"
 * @param {string} locale - "en" | "id"
 */
export function localeUrl(path, locale) {
  const clean = path === "/" ? "" : path;
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  const url = `${SITE_URL}${prefix}${clean}`;
  return url === SITE_URL ? `${SITE_URL}` : url;
}

/**
 * Build a Next.js `alternates` object (canonical + hreflang languages)
 * for an equivalent page that exists in every locale.
 * @param {string} path - locale-agnostic path, e.g. "/blog/my-post"
 * @param {string} currentLocale - the locale of the page being rendered
 */
export function localizedAlternates(path, currentLocale) {
  return {
    canonical: localeUrl(path, currentLocale),
    languages: {
      en: localeUrl(path, "en"),
      id: localeUrl(path, "id"),
      "x-default": localeUrl(path, DEFAULT_LOCALE),
    },
  };
}
