const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  target: 'web',
  entry: {
    'preview': './src/preview.js'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        './src/index.js',
        './src/markdown.css'
      ]
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = [config]
