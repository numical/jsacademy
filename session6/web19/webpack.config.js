const { resolve } = require('path');

module.exports = {
  entry: './client/fetchMail.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  }
};
