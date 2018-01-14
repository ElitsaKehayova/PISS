const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

module.exports = {
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
          presets: ['es2015', 'react']
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
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [],
  devServer: {
    contentBase: publicPath,
    noInfo: true
  },
  devtool: 'source-map'
};
