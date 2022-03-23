import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import seisMap from "../views/seisMapView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "seisMap",
    component: seisMap,
  },
  {
    path: "/crossSection",
    name: "crossSection",
    component: () => import("../views/crossSectionView.vue"),
  },
  {
    path: "/timeSeries",
    name: "timeSeries",
    component: () => import("../views/timeSeriesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
