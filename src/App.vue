<template>
  <Layout/>
</template>
<script setup>
import Layout from "./components/Layout/Layout.vue";

</script>
<style scoped>
  .v-enter-active {
    transition: opacity 0.5s;
  }

  .v-leave-active {
    transition: 0.2s;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
