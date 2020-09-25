/**
 * @description Server 服务端配置
 * @author lvhaoxian
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApp } from "./main";

export default (context: any) => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp();

        router.push(context.url);

        // 路由初始化完成后
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents(); // 获取路由

            if (!matchedComponents.length) {
                return reject({
                    code: 404
                });
            }

            resolve(app);
        }, reject);
    });
};
