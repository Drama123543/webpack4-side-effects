const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  recordsPath: path.resolve(__dirname, 'dist/records.json'),
  optimization: {
    sideEffects: true, // for test set true, in development mode default false, in production mode default true
    usedExports: true, // for test set true, in development mode default false, in production mode default true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: '3',
                  targets: {
                    browsers: ['> 0.25%, not dead'],
                  },
                },
              ]
            ]
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
    })
  ]
};
