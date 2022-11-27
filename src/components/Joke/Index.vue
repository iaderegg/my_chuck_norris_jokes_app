<template>
  <main class="container text-center">
    <div class="row">
      <div class="col-8">
        <p id="joke-text">{{ joketext }}</p>
      </div>
      <div class="col-4">
        <button
          id="button-add-favorite"
          class="btn btn-warning"
          @click="saveFavorite"
        >
          Add to favorites
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button id="button-get-joke" class="btn btn-primary" @click="getJoke">
          Get Joke
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { supabase } from "../../supabase";

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

      const response = await fetch(
        "https://serverless-functions-cn-jokes.netlify.app/.netlify/functions/get-jokes",
        {
          method: "POST",
          body: JSON.stringify(userData),
        }
      )
        .then((response) => response.json())
        .catch((e) => console.log(e));

      responseText.innerText = response.data.value;
    },
    async saveFavorite() {
      const supabaseSession = await supabase.auth
        .getSession()
        .then((response) => response.data.session);

      const response = await supabase.from("favorite_jokes").insert([
        {
          userid: supabaseSession.user.id,
          joke: document.getElementById("joke-text").innerHTML,
        },
      ]);
    },
  },
};
</script>
