const merge = require('webpack-merge');
const common = require('./webapck.common');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        overlay: {errors: true},
        publicPath: "/",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include:/src/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]––[local}__[hash:base64:5]"
                        }
                    },
                    "postcss-loader"
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});