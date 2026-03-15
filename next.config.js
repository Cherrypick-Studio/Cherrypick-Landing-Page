/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',          // outputs the service worker in /public
    register: true,
    skipWaiting: true,
    disable: true,
});
  
const nextConfig = {
}

module.exports = withPWA(nextConfig)
