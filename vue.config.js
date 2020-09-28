/**
 * @description vue-cli相关配置
 * @author lvhaoxian
 */

const fs = require("fs");
const merge = require("lodash.merge");
const clientConfig = require('./vue.config.client');
const serverConfig = require('./vue.config.server');
const lessToJs = require('less-vars-to-js');
const paletteLess = fs.readFileSync("./src/assets/styles/var.less", "utf-8");

const globalVars = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: true }); // 对全局less转换

const HOST = "localhost";
const PORT = 8080;

module.exports = {
    // 出口目录
    outputDir: './dist',
    // 对部分webpack进行重写
    configureWebpack: process.env.WEBPACK_TARGET === "node" ? serverConfig : clientConfig,
    // 样式配置
    css: {
        extract: false, // process.env.NODE_NEV !== 'production'
        // 第三方库需开启
        requireModuleExtension: true,
        // 对less进行配置
        loaderOptions: {
            less: {
                globalVars,
                modules: false,
                javascriptEnabled: true  // less^4需要开启
            }
        }
    },
    // webpack-dev-server 配置
    devServer: {
        host: HOST,
        port: PORT,
        open: false,
        hot: true,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    },
    chainWebpack: config => {
        config.module
        .rule("vue")
        .use("vue-loader")
        .tap(options => {
            merge(options, {
                optimizeSSR: false
            });
        });
    }
};
