var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  /*this part is needed to tell webpack to load using babel-loader*/
  module: {
        rules: [
            /* used with babel-loader loader */
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            /* used with css-loader and style-loader loaders */
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    /*tells webpack dev server where to find files*/
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};

