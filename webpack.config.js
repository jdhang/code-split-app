const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  // devtool: "source-map",
  entry: [
    'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
            plugins: [
              'syntax-dynamic-import',
              'transform-object-rest-spread',
              'transform-class-properties'
            ]
          }
        }
      } 
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
};