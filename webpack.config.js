const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = './dist/client';

module.exports = {
  entry: ['@babel/polyfill', './client/index.js'],
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
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
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
};
