<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>

    <template #joke>
      <div id="my-jokes"></div>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "./AppLayout.vue";
import AppHeader from "./AppHeader.vue";
import { store } from "../store";
import router from "../router";
import { supabase } from "../supabase";

export default {
  components: {
    AppLayout,
    AppHeader,
  },
  setup() {
    if (store.state.user == undefined) {
      router.push("/login");
    }
  },
  mounted() {
    this.getMyJokes();
  },
  methods: {
    async getMyJokes() {
      const myJokes = await supabase
        .from("favorite_jokes")
        .select()
        .then((response) => response.data);

      const divMyJokes = document.getElementById("my-jokes");

      myJokes.forEach((joke) => {
        console.log(joke);
        divMyJokes.innerHTML += "<div>" + joke.joke + "</div>";
      });
    },
  },
};
</script>
