var path = require('path');
var EnvironmentPlugin = require('webpack').EnvironmentPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    __dirname + '/app/index.jsx'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [HTMLWebpackPluginConfig]
};
