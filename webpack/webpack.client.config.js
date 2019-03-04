// Sample Webpack Configuration for Client Bundle
const path = require('path')
const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, {
  mode: 'development', // production
  entry: './src/client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '../build/client'),
  },
}, baseConfig);
