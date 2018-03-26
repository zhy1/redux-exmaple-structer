var path = require('path');
var webpack = require('webpack');
// 自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var config = {
    //源码
    devtool: '#eval-source-map',
    //打包入口
    entry: {
        index: path.resolve(__dirname, 'src/index.jsx')
    },
    //压缩的出口或者说dev-server地址
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, ''),
        publicPath: '/public' // express: 虚拟目录，真实目录(static, assets)
    },
    //模块加载器，用于对特定文件处理
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style', 'css']
        }]
    },
    //处理器
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    //
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),

        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};

module.exports = config;