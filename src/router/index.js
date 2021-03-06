import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Juz2 from "../views/Juz 2.vue";
import Juz3 from "../views/Juz 3.vue";
import Juz4 from "../views/Juz 4.vue";
import Juz5 from "../views/Juz 5.vue";
import Juz6 from "../views/Juz 6.vue";
import Yasin from "../views/Yasin.vue";
import Juz from "../views/Juz 1.vue";
import ListChapters from "../views/List Chapters.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/listchapters",
      name: "ListChapters",
      component: ListChapters,
    },
    {
      path: "/juz2",
      name: "Juz2",
      component: Juz2,
    },
    {
      path: "/yasin",
      name: "Yasin",
      component: Yasin,
    },
    {
      path: "/juz",
      name: "Juz",
      component: Juz,
    },
    {
      path: "/juz3",
      name: "Juz3",
      component: Juz3,
    },
    {
      path: "/juz4",
      name: "Juz4",
      component: Juz4,
    },
    {
      path: "/juz5",
      name: "Juz5",
      component: Juz5,
    },
    {
      path: "/juz6",
      name: "Juz6",
      component: Juz6,
    },
    {
      path: "/juz30",
      name: "juz30",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Juz 30.vue"),
    },
  ],
});

export default router;
