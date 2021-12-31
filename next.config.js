const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Born Techies',
    siteDescription: 'Get some Born Techies',
    siteKeywords: 'cloth, stickers, fun',
    siteUrl: 'https://www.doggystickers.xyz',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@deepwhitman'
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
}) 
