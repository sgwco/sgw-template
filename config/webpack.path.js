const path = require('path');

module.exports = {
  root: path.resolve(__dirname, '..'),
  client: path.join(__dirname, '../client'),
  public: path.join(__dirname, '../dist/client'),
};
