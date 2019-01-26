const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const FontminPlugin = require('fontmin-webpack');
const PATHS = require('./webpack.path');

exports.clean = new CleanWebpackPlugin([PATHS.public]);

exports.html = new HtmlWebpackPlugin({
  template: PATHS.client + '/index.html',
  favicon: PATHS.client + '/assets/images/favicon.png',
});

exports.manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json',
});

exports.uglifyJs = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  uglifyOptions: {
    compress: false,
    ecma: 6,
    mangle: true,
    output: {
      comments: false,
    },
  },
  sourceMap: true,
});

exports.sw = new SWPrecacheWebpackPlugin({
  // By default, a cache-busting query parameter is appended to requests
  // used to populate the caches, to ensure the responses are fresh.
  // If a URL is already hashed by Webpack, then there is no concern
  // about it being stale, and the cache-busting can be skipped.
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  filename: 'service-worker.js',
  logger(message) {
    if (message.indexOf('Total precache size is') === 0) {
      // This message occurs for every build and is a bit too noisy.
      return;
    }
  },
  minify: true, // minify and uglify the script
  navigateFallback: '/index.html',
  staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
  navigateFallbackWhitelist: [/^(?!\/robots.txt).*/ + '|' + /^(?!\/api).*/],
});

exports.copy = new CopyWebpackPlugin([
  { from: PATHS.pwa }, // define the path of the files to be copied
]);

exports.compress = new CompressionPlugin({
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  // test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
});

exports.fontmin = new FontminPlugin({
  autodetect: true, // automatically pull unicode characters from CSS
  glyphs: ['\uf0c8' /* extra glyphs to include */],
});
