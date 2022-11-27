<template>
  <router-view />
</template>

<script>
import { defineAsyncComponent } from "vue";
import router from "./router";
import { store } from "./store";
import { supabase } from "./supabase";

export default {
  components: {},
  setup() {
    // we initially verify if a user is logged in with Supabase
    store.state.user = supabase.auth.user;
    // we then set up a listener to update the store when the user changes either by logging in or out
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
        store.state.user = null;
        router.push("/login");
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
