const path = require('path');

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, './')
    },
    devServer: {
        contentBase: path.join(__dirname, './')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}