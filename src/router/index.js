import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Juz2 from "../views/Juz 2.vue";
import AsySyams from "../views/Asy-Syams.vue";
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
      path: "/asysyams",
      name: "AsySyams",
      component: AsySyams,
    },
    {
      path: "/juz",
      name: "Juz",
      component: Juz,
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
