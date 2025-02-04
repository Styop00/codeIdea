<template>
  <div class="bg-black w-full  py-10 mt-14 lg:px-14 md:px-14 px-6 flex flex-col justify-between ">
    <div class="divContainer">
      <div>
        <FooterItems/>
      </div>
      <div class="flex flex-col gap-2 mt-12 justify-center items-center md:items-start lg:items-start   ">
        <div class="flex gap-4 md:hidden lg:hidden inline">
          <span class="text-white font-normal text-xs leading-4">Terms</span>
          <span class="text-white font-normal text-xs leading-4">Privacy</span>
          <span class="text-white font-normal text-xs leading-4">Cookies</span>
        </div>
        <div class="flex md:gap-7 lg:gap-7  md:mt-2 lg:mt-2   gap-3  items-center">
          <div class="flex items-center justify-center py-3 px-4  rounded-full border border-white/25">
            <img :src="fb" class="max-w-2">
          </div>
          <div class="p-3.5  rounded-full border border-white/25">
            <img :src="ld" class="max-w-3 flex items-center justify-center">
          </div>
          <div class="p-3  rounded-full border border-white/25">
            <img :src="insta" class="max-w-4 flex items-center justify-center">
          </div>
          <div class="p-2.5  rounded-full border border-white/25">
            <img :src="youtube" class="w-5 h-5 flex items-center justify-center">
          </div>
          <div class="p-3.5  rounded-full border border-white/25">
            <img :src="tw" class="max-w-3 h-3">
          </div>
        </div>
      </div>

      <div
        class="flex  flex-col justify-center items-center md:justify-start lg:justify-start  gap-4 md:flex-row md:gap-7 lg:flex-row md:gap-7 md:mt-28 mt-12  lg:mt-28">
        <span class="text-gray-100 text-base leading-3 font-normal">
          ©{{ new Date().getFullYear() }}. All Rights Reserved.
        </span>
        <span class="text-gray-100 text-base leading-3 font-normal hidden  lg:inline md:inline">
          Privacy Policy
        </span>
        <span class="text-gray-100 text-base font-normal leading-3 hidden  lg:inline md:inline">
          Terms of  service
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>


import FooterItems from "./Services/FooterItems.vue";
import fb from "../../images/fb.png"
import ld from "../../images/ld.png"
import tw from "../../images/tw.png"
import insta from "../../images/insta.png"
import youtube from "../../images/Youtube.png"
</script>
<style scoped>


</style>
