var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  // stats: "minimal",
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(chalk.cyan('Listening at localhost:3000'));
});
