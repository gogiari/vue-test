import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import myhomeroute from "./myhome";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
    //   path: "/myhome",
    //   name: "myhome",
    //   component: () => import("../views/MyHome.vue"),
    // },
    ...myhomeroute, // ...(spread operator)으로 단일 배열 병합
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
