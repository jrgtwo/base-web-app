import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  output: {
    filename: './bundle.js',
    path: path.resolve('./dist/'),
  },
  plugins: [new HtmlWebpackPlugin()],
};