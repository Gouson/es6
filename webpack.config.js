const webpack = require('webpack');
module.exports = {
    devtool: 'source-map',
    entry: './app2.js',
    output: {
        filename: './dist/bundle2.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }) //压缩代码
    ]
}