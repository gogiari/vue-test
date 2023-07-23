import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MyHomeView from "../views/MyHome.vue";
import InTest from "../views/test/InTest.vue";

const myhomeroute: Array<RouteRecordRaw> = [
  {
    path: "/myhome",
    name: "myhome",
    component: MyHomeView,
    // component: import("../views/MyHome.vue"),
    children: [
      {
        path: "intest",
        name: "intest",
        component: InTest,
        // component: import("../views/test/InTest.vue"),
      },
    ],
  },
];

export default myhomeroute;
