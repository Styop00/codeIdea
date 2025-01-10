<template>
  <div class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-9  parent  justify-between gap-12   w-full">
    <div class="flex max-w-80 general flex-col gap-5 lg:col-span-3">
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
