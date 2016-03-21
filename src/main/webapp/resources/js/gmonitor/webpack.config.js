module.exports = {
  entry: {
    Gmonitor: './index.js',
  },
  output: {
      path: '..',
      filename: '[name]-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
