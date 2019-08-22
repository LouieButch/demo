import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("./views/Home");
const Demo1 = () => import("./views/demo1/Demo1");
const Demo2 = () => import("./views/demo2/Demo2");
const Demo3 = () => import("./views/demo3/Demo3");

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: "/demo1",
            children: [
                {path: "/demo1", name: "Demo1", component: Demo1,meta:{tabIndex:"1-1"}},
                {path: "/demo2/:name", name: "Demo2", component: Demo2,meta:{tabIndex:"2"}},
                {path: "/demo3", name: "Demo3", component: Demo3,meta:{tabIndex:"4"}},
            ]
        },

    ]
})
