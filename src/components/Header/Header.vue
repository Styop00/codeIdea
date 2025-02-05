<template>
  <div class="divContainer px-5 sm:px-0
  flex  justify-between items-center lg:pt-8 md:pt-8 md:mt-0 lg:mt-0  pt-8 lg:mb-12 md:mb-12 mb-2">
    <div>
      <img :src="logo" alt="CodeIdea" class="cursor-pointer">
    </div>
    <div class="flex  gap-8 justify-center items-center">
      <div
        class="px-7 hidden md:block lg:block py-3 bg-gray-600 rounded-xl font-bold font-xs leading-4 uppercase tracking-widest cursor-pointer">
        Get in touch
      </div>
      <div>
        <img :src="menuIcon" class="cursor-pointer" @click="toggle_menu">
      </div>
    </div>
  </div>
</template>
<script setup>
import logo from "../../images/CODEIDEA.png"
import menuIcon from "../../images/Frame 1.png"
import {useDataStore} from "../../store/dataStore";

const dataStore = useDataStore();

function toggle_menu() {
  dataStore.visible = !dataStore.visible;
  dataStore.visible_content = !dataStore.visible_content;
}
</script>
<style scoped>

</style>
