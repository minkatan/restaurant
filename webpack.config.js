const path = require('path')
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   static: {
  //     directory: path.resolve(__dirname, 'dist'),
  //   },
  //   port: 3000,
  //   open: true,
  //   hot: true,
  //   compress: true,
  //   historyApiFallback: true,
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
  plugins: [
    new Dotenv()
  ]
}