<template>
  <div class="divContainer  flex flex-col items-start md:items-end gap-36  px-5 ">
    <div class="flex flex-col gap-3">
      <p class="font-bold text-2xl md:text-5xl leading-loose tracking-wider	text-black-250	">Join us</p>
      <p class="font-normal text-lg leading-9 text-black-250 text-wrap">View open positions if you want to join the
        team.</p>
      <div
        class="w-fit font-bold text-base md:text-lg leading-4 tracking-widest	 py-3.5 px-16 rounded-xl bg-gray-600 align-center  cursor-pointer">
        JOBS
      </div>
    </div>
    <div
      class="w-full flex gap-7 justify-center pb-22 relative items-center md:items-start md:gap-32  flex-col md:relative mb-0 md:mb-32">
      <div class="w-full md:w-3/5  ">
        <img :src="teamPhoto" class="w-full">
      </div>
      <div class="w-11/12 md:w-2/5 md:absolute top-1/3 right-1/3 z-10">
        <img :src="teamPhoto2" class="w-full">
      </div>
      <div class="w-full md:w-2/5">
        <img :src="teamPhoto2" class="w-full ">
      </div>


    </div>
  </div>
</template>
<script setup>
import teamPhoto from "../../images/team.png"
import teamPhoto2 from "../../images/team2.png"
</script>
