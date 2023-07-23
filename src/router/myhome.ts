import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import MyHomeView from "../views/MyHome.vue";

const myhomeroute: Array<RouteRecordRaw> = [
  {
    path: "/myhome",
    name: "myhome",
    // component: MyHomeView,
    component: import("../views/MyHome.vue"),
  },
];

export default myhomeroute;
