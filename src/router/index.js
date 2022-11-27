import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: import("../components/GetJokes.vue"),
    },
    {
      path: "/login",
      component: import("../components/AppAuth.vue"),
    },
    {
      path: "/my-jokes",
      component: import("../components/MyJokes.vue"),
    },
  ],
});

export default router;
