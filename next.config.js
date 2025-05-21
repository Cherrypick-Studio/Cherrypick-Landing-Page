/** @type {import('next').NextConfig} */
// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',          // outputs the service worker in /public
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
});
  
const nextConfig = {
}

module.exports = withPWA(nextConfig)
