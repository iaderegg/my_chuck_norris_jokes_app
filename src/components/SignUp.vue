<template>
  <div id="signup-form">
    <img src="../assets/logo.png" alt="Logo" />
    <h2 class="mb-3">Sign up for an account</h2>
    <form @submit.prevent="handleSignup">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input id="email" type="email" class="form-control" v-model="email" />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";
import router from "../router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSignup = async () => {
      try {
        // Use the Supabase provided method to handle the signup
        const { error } = await supabase.auth.signUp({
          email: email.value,
          password: password.value,
        });
        if (error) throw error;
        router.push("/");
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };

    return {
      email,
      password,
      handleSignup,
    };
  },
};
</script>

<style scope>
#signup-form {
  padding: 10em 20em 0em 20em;
}
</style>
