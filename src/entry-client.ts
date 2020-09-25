/**
 * @description Client 客户端配置
 * @author lvhaoxian
 */

import { createApp } from "./main";
const { app, router } = createApp();

// 路由加载完毕后 把Vue实例注入
router.onReady(() => {
    app.$mount("#app");
});
