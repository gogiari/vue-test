import { RouteRecordRaw } from "vue-router";
import List from "../views/cats/CatsList.vue"

const catsroute: Array<RouteRecordRaw> = [
    {
        path: "/cats/list",
        name: "catslist",
        component: List,
    }
];

export default catsroute;