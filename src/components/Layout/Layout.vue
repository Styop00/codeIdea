<template>
  <Transition>
    <Sidebar v-if="dataStore.visible">
      <button @click="toggle_menu" class="cursor-pointer">
        <fa :icon="['fas', 'xmark']" class="text-xl"/>
      </button>
    </Sidebar>
  </Transition>
  <div class="w-full p-0 flex flex-col justify-between gap-[3rem]" v-if="dataStore.visible_content">
    <div class=" w-full bg-[#ffff] z-5 pt-0 h-[104px] max-h-[104px] menu fixed">
      <Header/>
    </div>


    <div >
      <RouterView />
    </div>
    <Footer/>
  </div>
</template>
<script setup>
import Header from "../Header/Header.vue"
import Footer from "../Footer/Footer.vue";
import {useDataStore} from "../../store/dataStore";
import Sidebar from "../Sidebar.vue";

const dataStore = useDataStore();

function toggle_menu() {
  dataStore.visible = !dataStore.visible;
  dataStore.visible_content = !dataStore.visible_content;
}
</script>
<style  scoped>
  @media (max-width: 600px) {
    .menu{
      height: 80px;
    }
  }

</style>
