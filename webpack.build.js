
const webpack = require('webpack')
const path = require('path')

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve('lib'),
    publicPath: '/lib/',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  mode: 'production',
  externals: {
    'react-dom': 'ReactDOM',
    react: 'React'
  },

  module: {
    rules: [{
      test: /\.js/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
      
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}
