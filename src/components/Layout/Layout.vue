<template>
  <Transition>
    <Sidebar v-if="dataStore.visible">
      <button @click="toggle_menu" class="cursor-pointer">
        <fa :icon="['fas', 'xmark']" class="text-xl"/>
      </button>
    </Sidebar>
  </Transition>
  <div class="w-full p-0 flex flex-col justify-between " v-if="dataStore.visible_content">
    <div >
      <div class="mb-28">
        <div class=" w-full h-24 bg-gradient-to-r from-gray-200 to-gray-300 pt-0 md:h-28 lg:h-28  max-h-28 z-[99] fixed">
          <Header/>
        </div>
      </div>
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>

<script setup>
  import Header from "../Header/Header.vue"
  import Footer from "../Footer/Footer.vue";
  import {useDataStore} from "../../store/dataStore";
  import Sidebar from "../Menu/Sidebar.vue";
  import ServicePage from "../ServicePage/ServicePage.vue";

  const dataStore = useDataStore();

  function toggle_menu() {
    dataStore.visible = !dataStore.visible;
    dataStore.visible_content = !dataStore.visible_content;
  }
</script>

<style  scoped>
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
