const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


function srcPaths(src) {
  const p = path.join(__dirname, '../', src);
  return p;
}

module.exports = {
  node: { __dirname: false, __filename: false },

  output: { path: srcPaths('dist') },

  resolve: {
    alias: {
      '@': srcPaths('src'),
      '@app': srcPaths('src/app'),
      '@store': srcPaths('src/app/store'),
      '@images': srcPaths('images'),
      '@public': srcPaths('public'),

      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.json', '.ts', '.tsx', '.scss'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader?configFile=tsconfig.webpack.json',
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader', options: {
              sourceMap: true
            }
          }]
      },{
        test: /\.(jpg|png|svg|ico|icns)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};
