const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: "./bundle", // 表示打开一个本地服务器, 卢锦师bundle下的index.html
    open: true,
    hot: true,
    // hotOnly: true,
    // proxy: {
    //   "/react/api": {
    //     target: 'http://www.dell-lee.com',
    //     pathRewrite: {
    //       'header.json': 'demo.json'
    //     }
    //   }
    // }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../bundle')
  },
}

module.exports = merge(commonConfig, devConfig)