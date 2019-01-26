const PATHS = require('./webpack.path');
const loaders = require('./webpack.loader');
const plugins = require('./webpack.plugin');

module.exports = {
  entry: [PATHS.client],
  output: {
    path: PATHS.public,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [loaders.babel, loaders.css, loaders.file],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:55554',
        secure: false,
      },
    },
  },
  plugins: [plugins.clean, plugins.html, plugins.manifest, plugins.sw],
};
