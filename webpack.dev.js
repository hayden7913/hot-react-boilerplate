const path =  require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /(\.scss$|\.css$)/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src', 'styles'),
        use: ['style-loader', 'raw-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    overlay: true,
    port: 3000,
    // stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
