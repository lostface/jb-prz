'use strict';

module.exports = {
  entry: './app/index.js',

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },

  eslint: {
    cache: true,
    failOnWarning: false,
    failOnError: false,
  }
};
