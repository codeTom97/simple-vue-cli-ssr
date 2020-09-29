/**
 * @description 打包配置相关变量以及方法
 * @author lvhaoxian
 */

const path = require("path");

module.exports = {
    /**
     * 获取文件相对路径
     * @param {*} file 
     */
    resolve: (file) => {
        return path.resolve(__dirname, file);
    },
    /**
     * 环境变量
     */ 
    isProd: process.env.NODE_ENV === 'production',   // 生产环境
    isDev: process.env.NODE_ENV === 'development'    // 开发环境
}