const Dotenv = require('dotenv-webpack');

module.exports = {
    plugins: [
        new Dotenv()
    ],
    module: {
    
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-class-properties'],
                    presets: [
                        "@babel/preset-react",
                        ["@babel/preset-env", {targets: {browsers: ['last 2 versions']}}]
                        
                    ]
                }
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                name: '[path][name].[hash].[ext]',
                },
            },
            
        ]
    },
}