const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve('./bundle'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015','stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
  ]
  }
}
