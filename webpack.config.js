const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const dest = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: dest
  },
  devServer: {
    contentBase: dest,
    compress: true,
    port: 9090
  },
  plugins: [
    new CopyPlugin([
        { from: 'src/index.html', to: dest }
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  }
}