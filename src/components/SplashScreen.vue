<template>
  <div class="splashscreen">
    <img src="@/assets/logo.png" alt="Logo" />
    <h1>My <span>Chuck Norris</span> Jokes App</h1>
  </div>
</template>

<style scoped>
.splashscreen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

h1 {
  color: var(--brand-brown);
}

h1 span {
  color: var(--brand-yellow);
}
</style>
