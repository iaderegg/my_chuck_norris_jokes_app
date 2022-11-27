<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>

    <template #joke>
      <Joke
        :joketext="'No one has ever spoken during review of Chuck Norris\' code and lived to tell about it.'"
      />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import AppHeader from "../components/AppHeader.vue";
import Joke from "../components/Joke/Index.vue";
import { store } from "../store";
import router from "../router";

export default {
  components: {
    AppLayout,
    AppHeader,
    Joke,
  },
  setup() {
    if (store.state.user == undefined) {
      router.push("/login");
    }
  },
};
</script>
