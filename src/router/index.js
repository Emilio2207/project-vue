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
      component: () => import("../modules/mycounter/components/MyCounter.vue"),
    },
    {
      path: "/things-to-do",
      name: "ThingsToDo",
      component: () =>
        import("../modules/thingsToDo/components/ThingsToDo.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../modules/record/views/RecordView.vue"),
    },
  ],
});

export default router;
