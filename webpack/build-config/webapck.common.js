const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name][hash].bundle.js",
        chunkFilename:"[name].[chunkhash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath:"./"
    },

    resolve: {
        extensions: [".js", ".css", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                exclude: /src/,
                include:/node_modules/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, "src"),
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack4-react",
            template: "./index.template.html",
            inject: "body",
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, "../dist")]),
    ]
}