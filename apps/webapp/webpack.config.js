import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [

      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts']
  },
  output: {
    filename: './bundle.js',
    path: path.resolve('./dist/'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
  })],
};