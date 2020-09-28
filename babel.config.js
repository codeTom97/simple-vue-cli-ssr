/**
 * @description babel相关配置
 * @author lvhaoxian
 */

module.exports = {
    presets: ["@vue/cli-plugin-babel/preset"],
    plugins: [
        [
            "import",
            {
                libraryName: "ant-design-vue",
                // libraryDirectory: 'es',  // SSR中, 不需要把目录引入到es模块下, es模块用的是import在node端会报错
                style: true // `style: true` 会加载 less文件
            },
            "ant-design-vue"
        ]
    ]
};
