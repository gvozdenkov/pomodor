const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const devMode = mode === 'development';

module.exports = {
  mode: mode,

  entry: { main: './src/index.js' },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name]_[hash][ext][query]',
    clean: true,
  },

  devServer: {
    static: path.resolve(__dirname, './build'),
    compress: true,
    port: 8080,
    open: false,
  },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
