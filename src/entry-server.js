/**
 * @description Server 服务端配置
 * @author lvhaoxian
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp } from "./main";

export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();

        router.push(context.url); // 把服务端上下文(context)传入的url放入到路由表

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents(); // 获取全部路由组件
            // 如果未注册过, 则抛出
            if (!matchedComponents.length) {
                return reject({ code: 404 });
            }

            Promise.all(
                matchedComponents.map((Component) => {
                    // 如组件存在asyncData, 把实例router与store传递到asyncData函数中, 进行预处理
                    if (Component?.asyncData) {
                        return Component.asyncData({
                            store,
                            route: router.currentRoute
                        });
                    }
                })
            )
                .then(() => {
                    // 在所有预取钩子(preFetch hook) resolve 后，
                    // 我们的 store 现在已经填充入渲染应用程序所需的状态。
                    // 当我们将状态附加到上下文，
                    // 并且 `template` 选项用于 renderer 时，
                    // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                    context.state = store.state;

                    resolve(app);
                })
                .catch(reject);
        }, reject);
    });
};
