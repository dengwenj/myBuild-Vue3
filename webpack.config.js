const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.ts',
  output: {
    filename: 'js/bunild.js',
    path: path.resolve(__dirname, 'dest'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.wasm', '.jsx', '.tsx', '.vue'],
    // 别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    hot: 'only',
    hot: true,
    port: 2217,
    open: false,
    compress: true, // 开启 gzip ，性能压缩
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(j|t)s$/,
        exclude: /node_modules/,
        use: [
          // 'ts-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'dengnwj',
      template: './public/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          globOptions: {
             // 要忽略的文件
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      BASE_URL: '"./"'
    })
  ]
}
