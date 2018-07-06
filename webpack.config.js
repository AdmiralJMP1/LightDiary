var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/static",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        },
        resolve: { extensions: ['*', '.js', '.jsx'] },
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/app.template.pug",
      filename: __dirname + '/views/application_page.pug'
    }),
    new HtmlWebpackPugPlugin()
  ]  
}
    