const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'regenerator-runtime/runtime',
      './src/index.js',
    ],
  },

  mode: 'development',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },

  performance: {
    hints: false,
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/core/components'),
      constants: path.resolve(__dirname, './src/core/constants'),
      state: path.resolve(__dirname, './src/state'),
      core: path.resolve(__dirname, './src/core'),
      provider: path.resolve(__dirname, './src/core/provider'),
      interactor: path.resolve(__dirname, './src/core/interactor'),
      store: path.resolve(__dirname, './src/store'),
      container: path.resolve(__dirname, './src/container'),
      helper: path.resolve(__dirname, './src/core/helper'),
    },
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.jsx', '.js', '.mjs'],
  },

  module: {
    rules: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      { test: /\.(js|jsx)?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      title: 'CSP',
      template: './src/index.ejs',
      config: process.env.APP_ENV || 'config',
    }),
  ],
}
