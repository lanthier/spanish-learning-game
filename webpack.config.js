const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const dest = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: dest,
    compress: true,
    port: 9090
  },
  plugins: [
    new CopyPlugin([
        { from: 'src/index.html', to: dest },
        { from: 'src/style.css', to: dest },
    ]),
],
}