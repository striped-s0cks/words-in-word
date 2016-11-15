var webpack = require('webpack');
global.Promise = require('bluebird');

module.exports = {
    entry: "./src/main.js",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
            }
        })
    ],

    output: {
        path: __dirname + '/',
        filename: "main.js",
        publicPath: ""
    },

    module: {
        noParse: [/autoit.js/],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.jsx$/, loader: "react-hot!babel!eslint-loader", exclude: [/node_modules/] },
            { test: /\.js$/, loader: "babel!eslint-loader", exclude: [/node_modules/] },
            { test: /\.json$/, loader: "json-loader"}
        ]
    },

    eslint: {
        configFile: '.eslintrc'
    },

    devServer: {
        historyApiFallback: true
    }
};
