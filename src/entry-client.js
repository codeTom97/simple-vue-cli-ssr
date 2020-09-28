/**
 * @description Client 客户端配置
 * @author lvhaoxian
 */

import { createApp } from "./main";
const { app, router, store } = createApp();

// 判断Vuex的数据是佛已初始化, 初始化后则刷新
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

// 路由加载完毕后 把Vue实例注入
router.onReady(() => {
    // 添加路由钩子函数，用于处理 asyncData.
    // 在初始路由 resolve 后执行，
    // 以便我们不会二次预取(double-fetch)已有的数据。
    // 使用 `router.beforeResolve()`，以便确保所有异步组件都 resolve
    router.beforeResolve((to, from, next) => {
        const matched = router.getMatchedComponents(to);
        const prevMatched = router.getMatchedComponents(from);

        let diffed = false;
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = prevMatched[i] !== c);
        });

        if (!activated.length) {
            return next();
        }

        // 这里如果有加载指示器，就触发

        Promise.all(
            activated.map((c) => {
                if (c.asyncData) {
                    return c.asyncData({ store, route: to });
                }
            })
        )
            .then(() => {
                // 停止加载指示器

                next();
            })
            .catch(next);
    });

    app.$mount("#app");
});
