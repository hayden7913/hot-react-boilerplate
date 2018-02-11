var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
var config = require('./webpack.dev');

process.env.NODE_ENV = 'production'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    timings: true,
    warnings: true,
    assets: false,
    chunks: false,
    colors: false,
    errorDetails: false,
    hash: false,
    version: false,
  },
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Dev server running at: ')
  console.log('')
  console.log(chalk.cyan('http://localhost:3000'));
  console.log('')
  console.log('Webpack is compiling...')
});
