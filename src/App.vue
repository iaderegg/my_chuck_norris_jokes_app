<template>
  <AppAuth v-if="!store.state.user" />
  <Suspense v-else>
    <template #default>
      <GetJokes />
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<script>
import AppAuth from "./components/AppAuth.vue";
import SplashScreen from "@/components/SplashScreen.vue";
import GetJokes from "./components/GetJokes.vue";

import { defineAsyncComponent } from "vue";
import { store } from "./store";
import { supabase } from "./supabase";

export default {
  components: {
    SplashScreen,
    GetJokes: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./components/GetJokes.vue"));
          }, 2500);
        })
    ),
    AppAuth,
  },
  setup() {
    // we initially verify if a user is logged in with Supabase
    store.state.user = supabase.auth.user;
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        store.state.user = null;
      } else {
        store.state.user = session.user;
      }
    });

    return {
      store,
    };
  },
};
</script>

<style scoped>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Helvetica, Arial, sans-serif;
}

* {
  --brand-brown: #995915;
  --brand-yellow: #cc7800;
}
</style>
