let prodPlugins = {};

if (process.env.NODE_ENV === 'production') {
  prodPlugins = { cssnano: {} };
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...prodPlugins,
  },
};
