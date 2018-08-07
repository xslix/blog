/* eslint-disable */
 
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle-[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html',
    })
    // new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    hot: true,
  },
};
