const path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './javascripts/game.js',
  output: {
    path: path.resolve(__dirname, 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    loaders: []
  },
  devtool: 'source-maps',
};
