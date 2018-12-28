module.exports = {
  module: {
    rules: [
        {
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                plugins: ['transform-class-properties'],
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
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
  }
}