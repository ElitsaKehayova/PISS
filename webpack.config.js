const path = require('path');
const publicPath = path.resolve(__dirname, 'public');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);

  return {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: publicPath,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', 'json']
    },
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-class-properties']
          }
        },
        {
          test: /\.css$/,
          loaders: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            // Minified version of loaders set-up:
            use: ifProd('css-loader?modules&importLoader=2&sourceMap&camelCase&localIdentName=[hash:base64:5]!sass-loader?sourceMap=true',
                        'css-loader?modules&importLoader=2&sourceMap&camelCase&localIdentName=[local]!sass-loader?sourceMap=true')
          }))
        },
        {
          test: /\.svg$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: ifProd('[name].[chunkhash].css', '[name].css'),
        disable: false,
        allChunks: true
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
      })
    ]),
    devServer: {
      contentBase: publicPath,
      noInfo: true
    },
    devtool: 'source-map'
  }
};
