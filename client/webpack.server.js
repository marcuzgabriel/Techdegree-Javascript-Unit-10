const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');
require("@babel/polyfill");
require("react-app-polyfill/ie11");


const config = {
    mode: 'development',
    target: 'node',
    entry: ['@babel/polyfill', 'react-app-polyfill/ie11', './server.js'],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);