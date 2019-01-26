exports.css = {
  test: /\.(css|sass|scss)$/,
  use: ['style-loader', 'css-loader'],
};

exports.babel = {
  use: 'babel-loader',
  test: /\.js$/,
  exclude: /node_modules/,
};

exports.file = {
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
  loader: 'file-loader',
};
