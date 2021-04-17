const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = (env, options) => {
  dotenv.config()
  // dotenv.config({path: dotenvPath})
  return {
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
          loader: 'ts-loader',
        },
        {
          test: /\.scss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader'],
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
       // DefinePlugin으로 'process.env.ENV'를 process.env.ENV 이라는 환경변수를 정의하고
       new webpack.DefinePlugin({
        // 'process.env.ENV': JSON.stringify(process.env.ENV),
        'ENV': JSON.stringify(process.env.ENV),
        'CAPTCHA_SITE_KEY': JSON.stringify(process.env.CAPTCHA_SITE_KEY)
      }),
      // EnvironmentPlugin 이 뒤에 []에 해당하는 환경변수를 클라이언트로 전달해 준답니다.
      new webpack.EnvironmentPlugin(['ENV','CAPTCHA_SITE_KEY'])
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
  }
};
