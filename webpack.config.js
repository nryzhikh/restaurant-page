const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
        home: './src/home.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant Page',
        }),
        new ImageminWebpWebpackPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
         },
    mode: 'development',
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
           {
             test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
             type: 'asset/resource',
           },
           {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
           }
          ],
        },
      };