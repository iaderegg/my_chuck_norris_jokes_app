<template>
  <main class="text-center">
    <p>{{ joketext }}</p>
    <button class="btn btn-primary" @click="getJoke">Get Joke</button>
  </main>
</template>

<script>
export default {
  props: {
    joketext: {
      type: String,
    },
  },
  methods: {
    getJoke() {
      window.alert("Get Joke");
    },
  },
};
</script>
