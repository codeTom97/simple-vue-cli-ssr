# 雨燕直播 - 前端

## 新项目需先运行

```
yarn install
```

### 开发环境

```
yarn serve
```

### 打包项目(生成环境)

```
yarn build
```

### 代码检查(husky 与 lint-staged 会自动执行)

```
yarn lint
```

### 项目目录

```
|-- src                                 // 源码目录
|   |-- components                      // vue所有组件
|   |-- router                          // vue的路由管理
|   |-- App.vue                         // 页面入口文件
|   |-- main.js                         // 程序入口文件，加载各种公共组件
|-- public                              // 静态资源目录
|   |-- index.html                      // 入口文件
|   |-- favicon.ico                     // 浏览器icon
|-- test                                // 测试文件
|   |--                                 // 测试目录
|-- .babelrc                            // ES6语法编译配置
|-- .browserslistrc                     // 浏览器版本兼容
|-- .eslintignore                       // eslint检测代码忽略的文件（夹）
|-- .eslintrc.js                        // 定义eslint的plugins,extends,rules
|-- .gitignore                          // git上传需要忽略的文件格式
|-- .huskyrc.js                         // git -> commit时的钩子拦截器
|-- .lintstagedrc.js                    // 与husky搭配, 用于对git add缓存池的代码进行校验
|-- .prettierrc.js                      // 与eslint搭配, 用于对代码进行格式化
|-- .stylelintrc.js                     // 样式版eslint, 用于样式进行格式化
|-- package.json                        // 项目基本信息,包依赖信息等
|-- README.md                           // 项目说明，markdown文档
|-- tsconfig.json                       // 项目typescript配置
|-- vue.config.js                       // 项目vue-cli脚手架配置
```
