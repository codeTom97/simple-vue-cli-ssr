/**
 * @description webpack prod 打包配置
 * @author lvhaoxian
 */

const webpack = require("webpack");
const { merge } = require("webpack-merge");
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ClientRenderPlugin = require("vue-server-renderer/client-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConf = require("./webpack.base.conf");

const { isTest } = require('./config')

const prodConf = {
    mode: 'production',     // mode为production时, NODE_ENV默认为production
    entry: './src/main.js',
    plugins: [
        new CleanWebpackPlugin(),                   // 清除dist
        new ClientRenderPlugin(),                   // 生成vue ssr client文件
        new webpack.HashedModuleIdsPlugin(),        // 稳定chunkid, 无修改不执行               
    ]
}

if (isTest) {
    prodConf.plugins.push(new Analyzer())           // 生成打包文件
}


module.exports = merge(baseConf, prodConf)