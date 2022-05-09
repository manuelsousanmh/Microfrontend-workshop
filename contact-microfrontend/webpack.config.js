const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    devtool: 'source-map',
    devServer: {
      hot: true,
      port: 8084,
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.less$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|ico)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'images',
              esModule: false,
            },
          },
        }]
    },
    mode: 'development'
};