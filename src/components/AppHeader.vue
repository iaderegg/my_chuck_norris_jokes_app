<template>
  <header>
    <img @click="reload" src="@/assets/logo.png" alt="Logo" />
    <h1>My <span>Chuck Norris</span> Jokes App</h1>
    <span>
      <button class="btn btn-danger" @click="signOut">Sign Out</button>
    </span>
  </header>
</template>

<script>
import { supabase } from "../supabase";
import { ref } from "vue";

const loading = ref(true);

export default {
  methods: {
    reload() {
      location.reload();
    },
    async signOut() {
      try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
      } catch (error) {
        window.console.log(error.message);
      } finally {
        loading.value = false;
      }
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
}
img,
span {
  width: 48px;
}
h1 {
  font-size: 1.4rem;
  color: var(--brand-yellow);
}
h1 span {
  color: var(--brand-brown);
}
</style>
