/**
 * @description webpack 开发环境配置
 * @author lvhaoxian
 */

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');  // 错误信息增强
const ClientRenderPlugin = require("vue-server-renderer/client-plugin");

const baseConf = require('./webpack.base.conf');

const HOST = 'localhost';
const PORT = 8080

const devConf = {
    mode: "development",
    devtool: "eval-source-map",

    // 入口配置
    entry: {
        app: "./src/entry-client.js",
        vendors: ["vue", "vue-router"]
    },


    // webpack-dev-server 配置
    devServer: {
        host: HOST,
        port: PORT,
        hot: true,
        contentBase: path.join(__dirname, "../dist"),           // 告诉服务器从哪里提供内容
        clientLogLevel: "error",                                // 客户端控制台输出
        overlay: { warnings: false, errors: true },             // 开启错误提醒
        publicPath: "/",                                        // 打包文件可在浏览器中访问
        quiet: true,                                            // 开启后控制台不在输出打包信息
    },

    plugins: [
        new VueLoaderPlugin(),
        new ClientRenderPlugin(),
        new webpack.HotModuleReplacementPlugin(),  // 热重载
        new HTMLPlugin({
            title: 'Vue client',
            filename: path.join(__dirname, "../dist/index.html"),
            template: path.join(__dirname, "../public/index.html"),
            favicon: path.join(__dirname, "../public/favicon.ico")
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`You can application is running here http://${HOST}:${PORT}`],
                clearConsole: true
            }
        })
    ]
}

module.exports = merge(baseConf, devConf);