exports.css = {
  test: /\.(css|sass|scss)$/,
  use: ['isomorphic-style-loader', { loader: 'css-loader' }],
};

exports.babel = {
  use: 'babel-loader',
  test: /\.js$/,
  exclude: /node_modules/,
};

exports.url = { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' };

exports.file = {
  test: /\.(png|jpg|gif|webp|svg|eot|ttf|woff|woff2)$/,
  loader: 'file-loader',
};

exports.babelNode = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      ignore: [/(node_modules)/],
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
};
