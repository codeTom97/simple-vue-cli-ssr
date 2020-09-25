/**
 * @description vueRouter相关配置
 * @author lvhaoxian
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const createRouter = function() {
    return new VueRouter({
        mode: "history",
        base: process.env.BASE_URL,
        routes
    });
};

export default createRouter;
