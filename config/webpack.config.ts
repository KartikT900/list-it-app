import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import 'webpack-dev-server';
import path from 'path';
const Dotenv = require('dotenv-webpack');

const devMode: boolean = process.env.NODE_ENV !== 'production';

const config: webpack.Configuration = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 8000,
    client: {
      overlay: true,
      logging: 'warn'
    },
    open: '/list'
  },
  devtool: devMode
    ? 'eval-cheap-module-source-map'
    : 'cheap-module-source-map',
  entry: ['./src/public-path.ts', './src/index.tsx'],
  mode: devMode ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${path.join(__dirname, '../src')}/index.html`
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      systemvars: true
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: ['node_modules', 'src']
  },
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
};

export default config;
