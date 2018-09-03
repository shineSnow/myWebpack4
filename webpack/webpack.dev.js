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
                // include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.css$/,
                exclude: /src/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

});