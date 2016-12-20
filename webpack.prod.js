'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// path
const scssIncludePath =
  'includePaths[]=' +
  encodeURIComponent(path.resolve(__dirname, './node_modules')) +
  '&includePaths[]=' +
  encodeURIComponent(path.resolve(__dirname, './node_modules/grommet/node_modules'));

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',  
      'react-router', 
      'redux'
    ],
    index: [
      './client/src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name]-[hash].js'
  },

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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.tpl.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: { warnings: false }
    }),
    new CopyWebpackPlugin([
      {
        from: './client/favicon.ico',
        to: './'
      }
    ])
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 version'] })
  ]
};