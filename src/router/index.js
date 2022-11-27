import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: import("../views/GetJokes.vue"),
    },
    {
      path: "/login",
      component: import("../views/AppAuth.vue"),
    },
    {
      path: "/my-jokes",
      component: import("../views/MyJokes.vue"),
    },
  ],
});

export default router;
