const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
mode: 'development',
entry: './src/main.tsx',
// devtool: 'inline-source-map',
output: {
path: path.join(__dirname, '/dist'),
filename: 'bundle.js'
},
// devtool: 'inline-source-map',
devServer: {
static: './public',
historyApiFallback: true,
},
module: {
rules: [
{
test: /\.jsx?$/,
exclude: /node_modules/,
loader: 'babel-loader'
},
{
test: /\.tsx?$/,
use: 'ts-loader',
exclude: /node_modules/,
},
{
  test: /\.css$/i,
  include: path.resolve(__dirname, 'src'),
  use: ['style-loader', 'css-loader', 'postcss-loader'],
},

]
},
resolve: {
extensions: ['.tsx', '.ts', '.js'],
},
plugins:[
new HtmlWebpackPlugin({
template: './public/index.html',
inject:true
}),
new CopyPlugin({
  patterns: [
    {
      from: './public/_redirects',
      to: '.',
    },
  ],
})
]
}