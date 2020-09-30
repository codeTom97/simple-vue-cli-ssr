/**
 * @description webpack 基础配置
 * @author lvhaoxian
 */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { resolve, isProd } = require("./config");

module.exports = {
    // 出口配置
    output: {
        filename: "js/[name].[hash:5].js",
        chunkFilename: "js/[name].[hash:5].js",
        path: resolve('../dist')
    },
    // 项目文件依赖
    module: {
        rules: [
            // eslint检查
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            // tslint 检查
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            // .vue预处理
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: [
                            "vue-style-loader",
                            {
                                loader: "css-loader",
                                options: { sourceMap: true }
                            }
                        ],
                        less: [
                            'vue-style-loader',
                            {
                                loader: "css-loader",
                                options: { sourceMap: true }
                            },
                            "less-loader"
                        ],
                        scss: [
                            isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                            {
                                loader: "css-loader",
                                options: { sourceMap: true }
                            },
                            "scss-loader"
                        ]
                    },
                    postLoaders: {
                        html: "babel-loader?sourceMap"
                    },
                    sourceMap: true // 定位根总
                }
            },
            // {
            //     test: /\.tsx?$/,
            //     loader: "vue-loader",
            //     exclude: /node_modules/
            // },
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/] //为script有lang='ts'标识的脚本文件添加ts后缀
                }
            },
            // js预处理
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/,    // 排除node_modules打包
            },
            // css预处理
            {
                test: /\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 
                    'css-loader'
                ]
            },
            // less预处理
            {
                test: /\.less$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', 
                    'css-loader',
                    {
                        loader: "less-loader",
                        // options: {
                        //     lessOptions: {
                        //         javascriptEnabled: true
                        //     }
                        // }
                    }
                ]
            },
            // 字体图标预处理
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader?limit=8192"
            },
            // 图片预处理
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: "url-loader"
            },
            // html预处理
            {
                test: /\.(html|tpl)$/,
                loader: "html-loader"
            }
        ]
    },
    // 快速定位配置
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".vue", "json"],
        alias: { 
            "@": resolve("src")
        }
    },
    plugins: [
        // .vue文件loader
        new VueLoaderPlugin(),
        // html 模板生成
        new HTMLPlugin({
            title: 'Vue client',
            filename: path.join(__dirname, "../dist/index.html"),
            template: path.join(__dirname, "../public/index.html"),
            favicon: path.join(__dirname, "../public/favicon.ico")
        }),
        // css 抽离
        new MiniCssExtractPlugin({ 
            filename: isProd ? 'css/[name].[hash].css' : 'css/[name].css'
        })
    ]
};
