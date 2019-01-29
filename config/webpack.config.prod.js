const PATHS = require('./webpack.path');
const loaders = require('./webpack.loader');
const plugins = require('./webpack.plugin');

module.exports = {
  entry: [PATHS.client],
  output: {
    path: PATHS.public,
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [loaders.babel, loaders.css, loaders.file],
  },
  optimization: {
    minimizer: [plugins.uglifyJs],
    splitChunks: {
      name: 'manifest',
      minChunks: Infinity,
    },
  },
  plugins: [
    plugins.manifest,
    // plugins.sw,
    plugins.copy,
  ],
};
