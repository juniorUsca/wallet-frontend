// Sample Webpack Configuration
// const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.styl', '.json'],
    /* alias: {
      'firebase-database': path.resolve(__dirname, '../functions/firebase-database'),
    }, */
  },
  /* resolveLoader: {
    modules: [path.resolve(__dirname, "../node_modules")],
  }, */
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
