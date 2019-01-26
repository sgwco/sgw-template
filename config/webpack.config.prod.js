const PATHS = require('./webpack.path');
const loaders = require('./webpack.loader');
const plugins = require('./webpack.plugin');

module.exports = {
  entry: [PATHS.client],
  output: {
    path: PATHS.public,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [loaders.babel, loaders.css, loaders.file],
  },
  optimization: {
    minimizer: [plugins.uglifyJs],
  },
  plugins: [
    plugins.clean,
    plugins.html,
    plugins.manifest,
    plugins.sw,
    plugins.compress,
    plugins.fontmin,
    plugins.copy,
  ],
};
