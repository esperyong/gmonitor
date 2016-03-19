module.exports = {
  entry: {
    DashBoard: './dashboard.js',
    QueryBoard: './queryboard.js',
    GmonitorAdmin: './src/admin/index.js'
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
