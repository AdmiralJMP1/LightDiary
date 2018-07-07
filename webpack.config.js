var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "appStyle.css"
    }),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/app.template.pug",
      filename: __dirname + '/views/application_page.pug'
    }),
    new HtmlWebpackPugPlugin()
  ]  
}
    