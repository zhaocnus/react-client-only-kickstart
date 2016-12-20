'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// path related
const DEST = path.resolve(__dirname, 'build');

// include grommet SCSS
const scssIncludePath =
  'includePaths[]=' +
  encodeURIComponent(path.join(__dirname, 'node_modules')) +
  '&includePaths[]=' +
  encodeURIComponent(path.join(__dirname, 'node_modules/grommet/node_modules'));

module.exports = {
  entry: {
    vendor: [
      'react', 
      'react-dom',  
      'react-router', 
      'redux',
      'webpack/hot/dev-server'
    ],
    index: [
      './src/index.js',
      'webpack/hot/dev-server'
    ]
  },

  output: {
    path: DEST,
    publicPath: '/',
    filename: '[name].bundle.js'
  },

  devtool: 'eval',

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', `sass?outputStyle=compressed&${scssIncludePath}`]
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'file'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        loader: 'url'
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 version'] })
  ]
};