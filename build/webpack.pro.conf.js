const path = require('path')
const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin

module.exports = merge(baseConf, {
  entry: path.join(__dirname, '../src/index.js'),
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    filename: 'index.min.js',
    library: 'geek-components',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  mode: 'production',
  plugins: [
    new CleanPlugin()
  ]
})