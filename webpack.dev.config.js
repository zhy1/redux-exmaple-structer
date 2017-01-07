var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: '#eval-source-map',
    entry: {
        index: path.resolve(__dirname, 'src/index.jsx')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, ''),
        publicPath: '/public' // express: 虚拟目录，真实目录(static, assets)
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
};

module.exports = config;