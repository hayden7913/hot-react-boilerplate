const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /(\.scss$|\.css$)/,
        exclude: /node_modules/,
        use: ['css-loader', 'style-loader', 'raw-loader' 'sass-loader'],
      },
    ],
  },
  // devServer: {
  //   overlay: true,
  //   port: 3000,
  //   stats: 'minimal',
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
