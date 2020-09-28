/**
 * @description vue webpack server 配置
 * @author lvhaoxian
 */

const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: './src/entry-server.js',
    target: "node",
    devtool: "source-map",
    output: {
        libraryTarget: 'commonjs2'
    },
    // 外置化应用程序依赖模块。可以使服务器构建速度更快，并生成较小的 bundle 文件。
    externals: nodeExternals({
        allowlist: [/\.css$/, /ant-design-vue\/lib/]
    }),
    optimization: { 
        splitChunks: false
    },
    plugins: [new VueSSRServerPlugin()]
};
