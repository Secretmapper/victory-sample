const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
const paths = ['/']

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [ { test: /\.js$/, loader: 'babel-loader' } ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', paths) 
  ]
}
