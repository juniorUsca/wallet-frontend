// Sample Webpack Configuration for Server Bundle
const path = require('path')
const baseConfig = require('./webpack.config')

// Note that since this is for the server, it is important to
// set the target to node and set the libraryTarget to commonjs2
module.exports = Object.assign({}, {
  target: 'node',
  mode: 'development', // production
  entry: './src/server/index.jsx',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../build/server'),
    libraryTarget: 'commonjs2',
  },
}, baseConfig)
