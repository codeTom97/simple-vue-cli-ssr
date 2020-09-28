/**
 * @description vue webpack client 配置
 * @author lvhaoxian
 */

const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");


module.exports = {
    entry: './src/entry-client.js',
    optimization: { 
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: undefined
        // splitChunks: {
        //     cacheGroups: {
        //       vendor: {
        //         test: /[\\/]node_modules[\\/]/,
        //         name: 'vendor',
        //         chunks: 'all',
        //       },
        //     },
        // }
    },
    plugins: [
        new VueSSRClientPlugin()
    ]
}