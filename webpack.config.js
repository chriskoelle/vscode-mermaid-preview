const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  target: 'webworker',
  entry: {
    'preview': './src/preview.js',
    'index': './src/index.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        './src/markdown.css'
      ]
    }),
  ],
  externals: {
    'vscode': 'commonjs vscode'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      }
    ]
  }
}

module.exports = [config]
