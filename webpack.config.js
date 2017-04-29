var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
var configPath =  process.env.NODE_ENV && process.env.NODE_ENV ==='production'? 'config.production.js': 'config.local.js' ;
var path = require('path');

var plugins = [
  new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
  ),
  new HtmlWebpackPlugin({
          hash: true,
          filename: 'index.html',
          template: __dirname + '/src/index.html',
      }),
  new webpack.DefinePlugin({ ENV: require(path.join(__dirname,'src', configPath)) }),

  new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")

]

if(process.env.NODE_ENV ==='production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress:true,
        mangle: false,
        minimize:true
      })
  )
}
else {
  plugins.push(new OpenBrowserPlugin({
    url: 'http://localhost:4999/index.html'
  }))

}


module.exports = {
  context: __dirname + '/src',
  entry: {
    app:'./index.js',
    vendor: [
      'angular',
      'angular-animate',
      'angular-sanitize',
      'angular-ui-router',
      'ionic/release/js/ionic',
      'ionic/release/js/ionic-angular',
      'ion-google-place',
      'ionic-material/src/js/ionic-material',
      'ng-file-upload/ng-file-upload-all'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: plugins,
  resolve: {
      modulesDirectories: ["web_modules", "node_modules", "bower_components"]
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: "style!css!less"},
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel?presets[]=es2015'},
      { test: /\.(hbs|html)$/, loader: 'html-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader'},
      { test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(png|woff2|jpg)$/, loader: 'url-loader?limit=100000' }
     ]
  }
}