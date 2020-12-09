// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader, 
          //   options: {
          //       publicPath: ''
          //   }
          // },
          {
              loader: "css-loader"
          }
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader, 
          //   options: {
          //       publicPath: ''
          //   }
          // },
          {
              loader: "css-loader"
          },
          {
              loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   inject: true,
    //   template: path.resolve(__dirname, 'src', 'index.html'),
    // }),
    // new MiniCssExtractPlugin({
    //   filename: '[name].[contenthash].css',
    // }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  }
}