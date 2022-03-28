const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx|.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader','sass-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias:{
      'shared/routes': path.resolve('./src/shared/routes/routes.ts')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
