<script setup>
import Sidebar from './components/Sidebar.vue'

import {ref} from "vue";

let visible = ref(false);
let visible_content = ref(true);

function open_menu() {
  visible_content.value = !visible_content.value;
  visible.value = !visible.value;
}
</script>

<template>
  <button @click="open_menu" class="absolute right-5 top-12 border-2" v-if="visible_content">Open</button>

  <Transition>
    <Sidebar v-if="visible">
      <button @click="open_menu">
        <fa :icon="['fas', 'xmark']" class="text-xl cursor-pointer"/>
      </button>
    </Sidebar>
  </Transition>


  <!-- <RouterView /> -->
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
