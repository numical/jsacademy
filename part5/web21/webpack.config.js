const { resolve } = require('path');

module.exports = {
  entry: ['babel-polyfill', './client/fetchMail.js'],
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
