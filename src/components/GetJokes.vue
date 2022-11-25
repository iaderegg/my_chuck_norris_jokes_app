<template>
  <AppLayout>
    <template #header>
      <AppHeader />
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "./AppLayout.vue";
import AppHeader from "./AppHeader.vue";

export default {
  components: {
    AppLayout,
    AppHeader,
  },
};
</script>
