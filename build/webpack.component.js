const path = require('path');
const baseConf = require('./webpack.base.conf')
const merge = require('webpack-merge')

const Components = require('../components');
const config = require('../config');

console.log('components: ', Components)

const webpackConfig = {
  mode: 'production',
  entry: Components,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  }
};

console.log(webpackConfig)

module.exports = merge(baseConf, webpackConfig);