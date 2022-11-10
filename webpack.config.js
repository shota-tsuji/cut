const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    mode: process.env.NODE_ENV || "development",
    entry: {
        popup: "./src/popup.ts",
    },
    output: {
        path: `${__dirname}/dist/js`,
        filename: "[name].js",
    },
    devServer: {
        static: "dist",
        open: true
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    target: ["web", "es5"]
};