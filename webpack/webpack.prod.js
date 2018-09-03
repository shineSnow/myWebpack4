const merge = require('webpack-merge');
const common = require('./webapck.common');
const webpack = require('webpack');
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    devtool:"source-map",
    module: {
        rules: [

        ]
    },
    plugins: [
    ]

});