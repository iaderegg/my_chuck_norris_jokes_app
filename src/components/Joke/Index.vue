<template>
  <main class="text-center">
    <p id="joke-text">{{ joketext }}</p>
    <button id="button-get-joke" class="btn btn-primary" @click="getJoke">
      Get Joke
    </button>
  </main>
</template>

<script>
import { supabase } from "../../supabase";
import { store } from "../../store";

export default {
  props: {
    joketext: {
      type: String,
    },
  },
  methods: {
    async getJoke() {
      const responseText = document.getElementById("joke-text");

      const accessToken = await supabase.auth
        .getSession()
        .then((response) => response.data.session.access_token);

      const userData = {
        access_token: accessToken,
      };

      console.log(accessToken);

      const response = await fetch(
        "https://serverless-functions-cn-jokes.netlify.app/.netlify/functions/get-jokes", {
          method: "POST",
          body: JSON.stringify(userData),
        }
      )
        .then((response) => response.json())
        .catch((e) => console.log(e));

        responseText.innerText = response.data.value;
    },
  },
};
</script>
