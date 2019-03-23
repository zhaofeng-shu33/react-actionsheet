
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve('lib'),
    publicPath: '/lib/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },

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
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.css$/,
      options: {
        postcss: [
          require('postcss-cssnext')({browsers: ['chrome >= 35', 'ios >= 7']})
        ]
      }
    })
  ]
}
