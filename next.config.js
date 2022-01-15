const path = require('path');
const withFonts = require('next-fonts');

module.exports = withFonts({
  env: {
    SERVER_API_ENDPOINT: process.env.SERVER_API_ENDPOINT,
    API_ENDPOINT: process.env.API_ENDPOINT,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    return config;
  },
});
