const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin('all.css');

module.exports = {
  entry: [
    './fractal/src/resources/scss/all.scss',
  ],
  output: {
    path: `${__dirname}/fractal/src/bundle/css`,
    filename: 'all.css'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  resolve: {
    extensions: ['.js', '.css', '.scss']
  }
};