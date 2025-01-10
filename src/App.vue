<script setup>
  import Sidebar from './components/Sidebar.vue'
  import {useDataStore} from "@/store/dataStore.js";

  const dataStore = useDataStore();

  function toggle_menu() {
    dataStore.visible = !dataStore.visible;
    dataStore.visible_content = !dataStore.visible_content;
  }
</script>

<template>
  <button @click="toggle_menu" class="absolute right-5 top-12 border-2 rounded border-black" v-if="dataStore.visible_content">Open</button>

  <Transition>
    <Sidebar v-if="dataStore.visible">
      <button @click="toggle_menu" class="cursor-pointer">
        <fa :icon="['fas', 'xmark']" class="text-xl"/>
      </button>
    </Sidebar>
  </Transition>

  <div v-if="dataStore.visible_content">
    <RouterView />
  </div>
</template>

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
