const path = require('path');

module.exports = {
    entry: './scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, './')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader?url=false']
            }
        ]
    }
}