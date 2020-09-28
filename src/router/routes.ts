/**
 * @description 路由相关
 * @author lvhaoxian
 */

import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
    // {
    //     path: "*",
    //     redirect: "/"
    // },
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "../pages/Home.vue")
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "../pages/About.vue")
    }
];

export default routes;
