const path = require('path')
const webpack = require('webpack')
const baseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')

module.exports = merge(baseConf, {
  entry: path.join(__dirname , '../src/index.js'),
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.js',
    library: 'geek-components',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './debug',
    publicPath: '/lib/',
    hot: true,
    open: true,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})