/** @type {import('next').NextConfig} */
// next.config.js
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  turbopack: {},
};

module.exports = withNextIntl(nextConfig);
