const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
require("@babel/polyfill");
require("react-app-polyfill/ie11");
 
const config = {
    mode: 'development',
    entry: ['@babel/polyfill', 'react-app-polyfill/ie11', './src/Client.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);