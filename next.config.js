const path = require('path');
const withFonts = require('next-fonts');

module.exports = withFonts({
  env: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
    API_ENDPOINT: process.env.API_ENDPOINT,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  images: {
    domains: ['api.deezer.com', 'e-cdns-images.dzcdn.net'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    return config;
  },
});
