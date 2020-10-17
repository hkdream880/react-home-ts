const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', //production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx','.js','.tsx','.ts']
    },
    entry: {
        app: './src/index'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { 
                enforce: "pre", test: /\.js$/, loader: "source-map-loader" 
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
          }),
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname,'dist'),
        publicPath: '/dist'
    },
    node: {
        fs: 'empty'
      }
    // devServer: {

    // }
}