const path = require('path');
const ModuleFederationPlugin = 
            require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 8081,
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
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        home: 'home@http://localhost:8082/remoteEntry.js',
        contact: 'contact@http://localhost:8083/remoteEntry.js',
        about: 'about@http://localhost:8084/remoteEntry.js',
      },
    })
  ],
};