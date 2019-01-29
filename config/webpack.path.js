const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '..'),
  client: path.join(__dirname, '../client'),
  server: path.join(__dirname, '../server/server'),
  public: path.join(__dirname, '../dist/public'),
  serverPublic: path.join(__dirname, '../dist/server'),
  pwa: path.join(__dirname, '../client/assets/pwa'),
};
