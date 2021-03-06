const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-hexrgba'),
    require('postcss-simple-vars'),
    require('postcss-mixins'),
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
        before: function(app, server) {
            server._watch('./**/*.html')
        },
        contentBase: path.join(__dirname, './'),
        hot: true,
        port: 3001,
        host: '0.0.0.0'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}