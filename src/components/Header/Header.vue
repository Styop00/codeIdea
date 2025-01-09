<template>
  <div class=" flex parent justify-between items-center mx-[60px]  pt-[32px] mt-0 mb-[3rem]">
    <div>
      <img :src="logo" alt="CodeIdea" class="cursor-pointer">
    </div>
    <div class="flex  gap-[31px] justify-center items-center" >
      <div class="px-[27px] butt py-[12.5px] bg-butt_color rounded-[10px] font-bold font-xs leading-[15px] uppercase tracking-[3px] cursor-pointer">
          Get in touch
      </div>
      <div >
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
  @media (max-width: 560px) {
    .parent{
      margin-inline: 10px;
      padding-top: 12px;
      margin-bottom: 1rem;
    }
    .butt{
      display: none;
    }
  }
</style>
