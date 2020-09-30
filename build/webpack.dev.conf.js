/**
 * @description webpack 开发环境配置
 * @author lvhaoxian
 */

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');  // 错误信息增强

const baseConf = require('./webpack.base.conf');

const HOST = 'localhost';
const PORT = 8080

const devConf = {
    mode: "development",
    devtool: "eval-source-map",

    // 入口配置
    entry: {
        app: "./src/main.js",
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
        new webpack.HotModuleReplacementPlugin(),  // 热重载
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`You can application is running here http://${HOST}:${PORT}`],
                clearConsole: true
            }
        })
    ]
}

module.exports = merge(baseConf, devConf);