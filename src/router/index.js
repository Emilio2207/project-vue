import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: "/mycounter",
      name: "counter",
      component: () => import("../components/MyCounter.vue"),
    },
    {
      path: "/things-to-do",
      name: "ThingsToDo",
      component: () => import("../components/ThingsToDo.vue"),
    },
  ],
});

export default router;
