const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Point d'entrée
  output: {
    publicPath: '/',
    filename: 'bundle.js', // Nom du fichier de sortie
    path: path.resolve(__dirname, 'dist') // Répertoire de sortie
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]', // Le nom du fichier de sortie
            outputPath: 'assets/images/', // Le dossier de sortie
            publicPath: 'assets/images/', // Le chemin public
            emitFile: true, // Si le fichier doit être généré
            esModule: false, // Si le fichier est un module ES6
          }
        }]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './src/assets/favicon.ico',
      template: './src/index.html',
    }),
  ]
};