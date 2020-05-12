const path = require('path');

module.exports = {
    entry: './scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    }
}