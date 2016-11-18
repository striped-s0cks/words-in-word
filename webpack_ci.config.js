var webpack = require('webpack');
global.Promise = require('bluebird');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8090',
        __dirname + '/src/main.js'
    ],
    output: {
        path: __dirname + '/',
        filename: 'main.js',
        publicPath: ''
    },

    plugins: [new webpack.HotModuleReplacementPlugin()],

    module: {
        noParse: [/autoit.js/],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.jsx$/, loader: "react-hot!babel!eslint-loader", exclude: [/node_modules/] },
            { test: /\.js$/, loader: "react-hot!babel!eslint-loader" },
            { test: /\.json$/, loader: "json-loader"}
        ]
    },

    resolve: {
        extensions: ['', '.js']
    },

    node: {
        'react/lib/ReactMount': 'empty'
    },

    eslint: {
        configFile: '.eslintrc'
    },

    devServer: {
        historyApiFallback: true
    }
};
