const path    = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './demo/index.js'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'demo-bundle.js',
  },
  plugins: [  
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),    
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel-loader'] },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
};
