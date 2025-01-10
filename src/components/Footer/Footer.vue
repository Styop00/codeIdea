<template>
  <div class="bg-black w-full parent py-10 mt-14 px-14 flex flex-col justify-between  ">
    <div>
      <FooterItems/>
    </div>
    <div class="flex md:gap-7 lg:gap-7  md:mt-2 lg:mt-2  mt-12 gap-2  items-center">
      <div class="flex items-center justify-center py-3 px-4  rounded-full border-2 border-white/25">
        <img :src="fb" class="max-w-2">
      </div>
      <div class="p-3  rounded-full border-2 border-white/25">
        <img :src="ld" class="max-w-3 flex items-center justify-center">
      </div>
      <div class="p-3.5  rounded-full border-2 border-white/25">
        <img :src="tw" class="max-w-3 h-3">

      </div>
    </div>

    <div class="flex  flex-col-reverse gap-4 md:flex-row md:gap-7 lg:flex-row md:gap-7  mt-28">
      <span class="text-footer_text_color text-base leading-3 font-normal">
        ©{{new Date().getFullYear()}}. All Rights Reserved.
      </span>
      <span class="text-footer_text_color text-base leading-3 font-normal">
        Privacy Policy
      </span>
      <span class="text-footer_text_color text-base font-normal leading-3">
        Terms of  service
      </span>
    </div>
  </div>
</template>
<script setup>



import FooterItems from "./Services/FooterItems.vue";
import fb from "../../images/fb.png"
import ld from "../../images/ld.png"
import tw from "../../images/Twitter.png"
</script>
<style scoped>


</style>
