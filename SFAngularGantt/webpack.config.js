//var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/AppBundle/Resources/public/js/gantt-controller.js",
  output: {
    path: __dirname + "/web",
    filename: "js/gantt.min.js"
  },
 // devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      },
      //{
      //  test: /\.scss$/,
      //  loaders: ["style", "css", "sass"]
      //}
    ]
  },
  //plugins: [
  //  //new webpack.optimize.UglifyJsPlugin({
  //  //  compress: {
  //  //    warnings: false
  //  //  }
  //  //})
  //]
};