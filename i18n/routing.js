import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "en",
  // en is served at the root (/, /blog, ...); id is prefixed (/id, /id/blog, ...).
  localePrefix: "as-needed",
});
