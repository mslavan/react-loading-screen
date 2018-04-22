const webpack = require('webpack');
const path = require('path');

const plugins = [];
if (process.env.MINIFY) {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

const filename = (process.env.MINIFY)
  ? 'LoadingScreen.min.js'
  : 'LoadingScreen.js';

module.exports = {
  entry: {
    AriaMenuButton: './src/index.js',
  },
  output: {
    library: 'LoadingScreen',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'umd'),
    filename: filename,
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
  node: {
    Buffer: false,
    process: false,
    setImmediate: false,
  },
  plugins: plugins,
};
