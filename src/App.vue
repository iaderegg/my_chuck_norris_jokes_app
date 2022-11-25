<script>
import SplashScreen from "@/components/SplashScreen.vue";
import GetJokes from "./components/GetJokes.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    SplashScreen,
    GetJokes: defineAsyncComponent(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./components/GetJokes.vue"))
          }, 2500);
        })
    ),
  },
};
</script>

<template>
  <Suspense>
    <template #default>
      <GetJokes />
    </template>
    <template #fallback>
      <SplashScreen />
    </template>
  </Suspense>
</template>

<style scoped>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-brown: #995915;
  --brand-yellow: #CC7800;
}
</style>
