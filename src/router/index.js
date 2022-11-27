import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
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
