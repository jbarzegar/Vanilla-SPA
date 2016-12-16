const config = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  }
}

export default config
