<template>
  <main class="text-center">
    <p id="joke-text">{{ joketext }}</p>
    <button id="button-get-joke" class="btn btn-primary" @click="getJoke">
      Get Joke
    </button>
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
    async getJoke() {
      window.console.log("Get Joke");
      const responseText = document.getElementById("joke-text");

      const response = await fetch("https://serverless-functions-cn-jokes.netlify.app/.netlify/functions/get-jokes")
                              .then(response => response.json())
                              .catch(e => console.log(e));

      responseText.innerText = response.data.value;

    },
  },
};
</script>
