<template>
  <div class="divContainer  flex flex-col items-start md:items-end gap-10 md:gap-36  px-5 pb-20">
    <div class="flex flex-col gap-3">
      <p class="font-bold text-2xl md:text-5xl leading-loose tracking-wider	text-black-250	">Join us</p>
      <p class="font-normal text-lg leading-9 text-black-250 text-wrap">View open positions if you want to join the
        team.</p>
      <Button btnText = 'JOBS' class="bg-white shadow-small-20" />
    </div>
    <div
      class="w-full flex gap-7 justify-center pb-22 relative items-center md:items-start md:gap-32  flex-col md:relative mb-0 md:mb-32">
      <div class="w-full md:w-3/5  ">
        <img :src="teamPhoto" class="w-full" alt="#">
      </div>
      <div class="w-11/12 md:w-2/5 md:absolute top-1/3 right-1/3 z-10">
        <img :src="teamPhoto2" class="w-full" alt="#">
      </div>
      <div class="w-full md:w-2/5">
        <img :src="teamPhoto2" class="w-full " alt="#">
      </div>
    </div>
  </div>
</template>

<script setup>
import teamPhoto from "../../images/team.png"
import teamPhoto2 from "../../images/team2.png"
import Button from "@/components/Button.vue";
</script>
