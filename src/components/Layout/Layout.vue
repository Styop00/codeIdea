<template>
  <Transition>
    <Sidebar v-if="dataStore.visible">
      <button @click="toggle_menu" class="cursor-pointer">
        <fa :icon="['fas', 'xmark']" class="text-xl"/>
      </button>
    </Sidebar>
  </Transition>
  <div class="w-full p-0 flex flex-col justify-between " v-if="dataStore.visible_content">
    <div>
      <RouterView/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "../Footer/Footer.vue";
import {useDataStore} from "@/store/dataStore.js";
import Sidebar from "@/components/Menu/Sidebar.vue";

const dataStore = useDataStore();

function toggle_menu() {
  dataStore.visible = !dataStore.visible;
  dataStore.visible_content = !dataStore.visible_content;
}
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
