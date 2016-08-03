const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Bourbon = require('bourbon');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract("style", "css!sass")
      },
    ]
  },
  sassLoader: {
    includePaths: [
      Bourbon.includePaths, 
      'node_modules/bourbon-neat/app/assets/stylesheets',
      'src/styles/settings.dev.scss']
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
    }),
    new ExtractTextPlugin("bundle.css")
  ]
};

