const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthasg].js'
  },
  module: {
    rules: [
      // {
      //  test: /\.css$/,
      //  use: [
      //    MiniCssExtractPlugin.loader,
      //    {
      //      loader: 'css-loader',
      //      options: {
      //        importLoaders: 1
      //      }
      //    },
      //    'postcss-loader'
      //  ]
      // },
      {
        test: /\.js$/,
        user: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        user: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use:'file-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './public/index.html'
    }),
    // new MiniCssExtractPlugin()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks:{
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};


module.exports = config;