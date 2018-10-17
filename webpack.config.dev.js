var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    javascript: path.resolve('./client/index.js')
  },
  output: {
    path: path.resolve('./public'),        // Production bundle destination directory
    filename: 'client-[hash].js',       // Destination file name
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body'
    })
  ],
  devServer: {
    historyApiFallback: true,            // Makes page reload work
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,                  // Process js files
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      }
    ]
  }
}
