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
|   |-- api                             // 接口
|   |-- assets                          // 项目静态资源
|   |-- |-- images                      // 图片资源
|   |-- |-- styles                      // 样式资源(含全局样式)
|   |-- components                      // 项目公用组件
|   |-- libs                            // 第三方库、组件封装
|   |-- pages                           // 页面组件
|   |-- router                          // vue-router的配置管理
|   |-- store                           // vuex的配置管理
|   |-- utils                           // 项目工具管理
|   |-- App.vue                         // 页面入口文件
|   |-- shims-tsx.d.ts                  // typescript - jsx类型声明
|   |-- shims-vue.d.ts                  // typescript - vue类型声明
|-- public                              // 静态资源目录
|   |-- index.html                      // 入口文件
|   |-- favicon.ico                     // 浏览器icon
|-- test                                // 测试文件
|   |--                                 // 测试目录
|-- .browserslistrc                     // 浏览器版本兼容
|-- .eslintignore                       // eslint检测代码忽略的文件（夹）
|-- .eslintrc.js                        // 定义eslint的plugins,extends,rules
|-- .gitignore                          // git上传需要忽略的文件格式
|-- .huskyrc.js                         // git -> commit时的钩子拦截器
|-- .lintstagedrc.js                    // 与husky搭配, 用于对git add缓存池的代码进行校验
|-- .prettierrc.js                      // 与eslint搭配, 用于对代码进行格式化
|-- .stylelintrc.js                     // 样式版eslint, 用于样式进行格式化
|-- babel.config.js                     // babel对ES6语法编译配置
|-- package.json                        // 项目基本信息,包依赖信息等
|-- README.md                           // 项目说明，markdown文档
|-- tsconfig.json                       // 项目typescript配置
|-- vue.config.js                       // 项目vue-cli脚手架配置
```
