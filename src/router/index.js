import Vue from 'vue';
//使用路由结构
import VueRouter from "vue-router";
// 2.使用(安装)vue-router（VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);
//引入组件
import Home from '../pasg/Home.vue'
import Car from '../pasg/Car.vue'
import classify from '../pasg/Classify'
import Mine from '../pasg/Mine.vue'
import NotFound from "../pasg/NotFund.vue"
//配置路由
let router = new VueRouter({
    routes: [
        // 首页
        {
            name: "home",
            path: "/home",
            component: Home
        },
        {
            path: "./",
            redirect: "/home"
        }, {
            name: "car",
            path: "/car",
            component: Car
        }, {
            name: "classify",
            path: "/classify",
            component: classify
        }, {
            name: "mine",
            path: "/mine",
            component: Mine
        }, {
            path: '/404',
            component: NotFound
        }, {
            path: "*",
            redirect: "/404"
        }
    ]
})

// 导出
export default router