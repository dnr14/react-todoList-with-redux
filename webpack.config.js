const path = require('path');
const getAbsolutePath = (target) => path.resolve(__dirname, target)
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  name: "webpack info name",
  mode: 'development',
  devtool: 'eval',
  // 웹팩 데브 서버에서 타겟을 web으로 주지 않으면 es6 모듈을 읽을 수 없다.
  target: 'web',
  resolve: {
    extensions: [".js", '.jsx'],
    // 경로를 별칭으로 치환해준다.
    alias: {
      "@components": getAbsolutePath('src/components/'),
      "@containers": getAbsolutePath('src/containers/'),
      "@style": getAbsolutePath('src/assets/style/'),
      "@images": getAbsolutePath('src/assets/images/'),
      "@redux": getAbsolutePath('src/redux/'),
    }
  },
  //입력 => 변환(모듈설정) => 출력
  entry: {
    main: ['./client.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-modules-commonjs", 'react-refresh/babel']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]',
            }
          },
        ],
      },
    ]
  },


  plugins: [
    new RefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
      chunkFilename: "[id].css"
    })
  ],

  //출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },

  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
}