const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    // alias: {
    //   '@': path.resolve(__dirname, 'src'),
    // },
  },
  entry: {
    app: './src/index',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre', test: /\.tsx$/, loader: 'source-map-loader',
      },
      { 
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist',
          name: '[name].[ext]?[hash]',
          limit: 4000,
        }
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new webpack.HotModuleReplacementPlugin() //hot loader 와 안맞는듯?
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  node: {
    fs: 'empty',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  } 
};
