/**
 * @description vue-cli相关配置
 * @author lvhaoxian
 */

const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const merge = require("lodash.merge");
const TARGET_NODE = process.env.WEBPACK_TARGET === "node"; // 通过命令行注入, 判断当前是否node-server
const target = TARGET_NODE ? "server" : "client";
const isProd = process.env.NODE_ENV === "production"; // 判断是否为生产环境
const HOST = "0.0.0.0";
const PORT = 8080;

// 需要分离的第三方包
const externalOptions = {
    vue: "Vue"
};

module.exports = {
    // 出口目录
    outputDir: "./dist",
    productionSourceMap: true, // 生产环境开启source map
    publicPath: isProd ? "/" : `http://${HOST}:${PORT}`,
    // webpack-dev-server 配置
    devServer: {
        host: HOST,
        port: PORT,
        open: false,
        hot: true,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        proxy: {}
    },
    // 对webpack部分配置进行重写
    configureWebpack: {
        entry: `./src/entry-${target}.ts`,
        target: TARGET_NODE ? "node" : "web",
        node: TARGET_NODE ? undefined : false,
        devtool: "source-map",
        output: {
            libraryTarget: TARGET_NODE ? "commonjs2" : undefined
        },
        // 分离第三方包
        externals: isProd ? externalOptions : undefined,
        plugins: [TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
    },
    // 修改webpack配置
    chainWebpack: (config) => {
        if (TARGET_NODE) {
            config.plugins.delete("hmr"); // 关闭热更新
            config.optimization.splitChunks(undefined);
        }
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap((options) => {
                merge(options, {
                    optimizeSSR: false
                });
            });
    }
};
