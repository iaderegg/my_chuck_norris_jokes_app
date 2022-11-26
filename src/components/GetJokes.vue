<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>

    <template #joke>
      <Joke :joketext="'Chuck Norris always hits the G-spot with mathematical precision.'" />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "./AppLayout.vue";
import AppHeader from "./AppHeader.vue";
import Joke from "./Joke/Index.vue";

export default {
  components: {
    AppLayout,
    AppHeader,
    Joke,
  },
};
</script>
