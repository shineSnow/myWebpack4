const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin")
const HtmlWebpackPlugin  = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
        overlay:{errors: true},
        publicPath: "/",
        hot: true
    },
    resolve: {
        extensions: [".js", ".css",".json"]
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
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, "src"),
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
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
}