const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,   // node_modules旧不适用babel-loader
        loader: "babel-loader",
      }, {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',   // 名称使用原来的名称和原来的后缀
            outputPath: 'images/', // 把文件打包到打包出去的根目录下的images文件夹
          }
        }
      }, {
        test: /\.(eot|svg|ttf|woff)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/fonts/'
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     fallback: "style-loader",
      //     use: ['css-loader']
      //   })
      // },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextWebpackPlugin.extract({
      //     fallback: "style-loader",
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           importLoaders: 2, // 表示下面有两个loader要执行
      //           modules: true, // 开启模块化
      //         }
      //       }, 'sass-loader', 'postcss-loader']
      //   }),
      // }
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,      // 使用外部链接的loader
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 表示下面有两个loader要执行
              modules: true, // 开启模块化
            }
          }, 'sass-loader', 'postcss-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    // new ExtractTextWebpackPlugin({
    //   filename: 'css/main.css',
    //   disable: false       //禁用
    // })
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],

  optimization: {
    usedExports: true,
    minimizer: [new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendor'
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
          name: 'common'
        }
      }
    }
  },
}