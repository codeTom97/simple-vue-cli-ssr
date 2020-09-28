/**
 * @description vueRouter相关配置
 * @author lvhaoxian
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

export function createRouter() {
    return new VueRouter({
        mode: "history",
        base: "/",
        routes
    });
}
