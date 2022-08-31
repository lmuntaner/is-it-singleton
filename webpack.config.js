const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'my-first-webpack.bundle.js',
  },
  mode: 'development'
};