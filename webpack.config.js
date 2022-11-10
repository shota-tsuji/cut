const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    mode: process.env.NODE_ENV || "development",
    entry: {
        popup: "./src/popup.tsx",
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
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: 'raw-loader'
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    target: ["web", "es5"]
};