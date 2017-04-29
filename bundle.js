const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

module.exports = function (PORT) {

  // First we fire up Webpack an pass in the configuration we
  // created
  var bundleStart = null;
  const compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', function() {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  const bundler = new WebpackDevServer(compiler, {
    proxy: {
      "*" : "http://localhost:" + (PORT + 1)
    },
    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:

    // Configure hot replacement
    hot: true,

    historyApiFallback: true,
    // The rest is terminal configurations
    quiet: false,
    noInfo: false,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(PORT, 'localhost', function () {
    console.log('Bundling project, please wait...');
  });

};