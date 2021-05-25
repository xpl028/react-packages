const { resolve } = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './src/index.html'),
    }),
    new EslintWebpackPlugin({
      extensions: ['.js', '.jsx'],
      fix: true,
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, 'main/dist'),
    hot: true,
    // open: true,
  },
};
