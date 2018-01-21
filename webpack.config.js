module.exports = {
  entry: {
    app: "src/app.ts",
    vendor: "src/vendor.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        loaders: "style-loader!css-loader"
      }
    ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  output: {
    filename: "[name].js"
  }
};
