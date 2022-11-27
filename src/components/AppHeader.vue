<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          @click="reload"
          src="@/assets/logo.png"
          alt="Logo"
          class="navbar-brand"
        />
        My <span>Chuck Norris</span> Jokes App
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav m-3">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">
              Get Jokes
            </router-link>
          </li>
          <li>
            <router-link
              class="nav-link active"
              aria-current="page"
              to="/my-jokes"
            >
              My Jokes
            </router-link>
          </li>
        </ul>
        <button class="btn btn-danger" @click="signOut">Sign out</button>
      </div>
    </div>
  </nav>
  <router-view></router-view>
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

