export default function sitemap() {
  const locales = ['en', 'es', 'fr'];
  const urls = [];

  locales.forEach((locale) => {
    urls.push({
      // url: `https://cherrypick.studio/${locale}`,
      url: `https://cherrypick.studio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });
  });

  return urls;
}
