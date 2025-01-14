<template>
  <div class="grid md:grid-cols-2  lg:grid-cols-9 gap-20 grid-cols-4 gap-x-28 justify-between gap-12 w-full  pb-12 lg:pb-0 md:pb-0 md:border-0 lg:border-0 border-b  border-white/20 ">
    <div class="flex lg:max-w-80 md:max-w-80 w-4/5 general md:col-span-1 flex-col col-span-4 gap-5 lg:col-span-3">
      <img :src="logo" class="max-w-32">
      <p class="text-white  text-sm   font-normal leading-5">
        Since 2015, we’ve helped 80+ fast-growing
        companies in over 20 different industries
        build web, mobile and desktop app that
        make an impact.
      </p>
    </div>

    <Services/>

  </div>
</template>

<script setup>
import logo from "../../../images/CODEIDEAFOOTER.png"
import Services from "./Services.vue";


</script>
