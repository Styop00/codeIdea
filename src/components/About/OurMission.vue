<template>
  <div class="flex justify-between flex-col md:flex-row lg:flex-row divContainer gap-12 ">
    <div class=" w-full lg:w-1/2 flex flex-col gap-6">
      <p class="font-bold text-2xl md:text-5xl leading-loose tracking-wider	text-black-250	">Our mission</p>
      <p class="font-normal text-base md:text-lg leading-9 text-black-250">Our mission is to build digital platforms
        that stand the test of time. With a sharp focus on sports, booking, and SaaS solutions, we bring together deep
        product expertise and specialized tech know-how to consistently deliver high-quality software—without
        surprises.</p>

      <p class="font-normal text-base md:text-lg leading-9 text-black-250">Since 2017, we've successfully launched 40+
        web and mobile projects across sports tech, event management, booking platforms, and more—partnering with brands
        like Padel IQ, MVPAPP, SportyFriends, GolfMore, and LineMe.</p>

      <p class="font-normal text-base md:text-lg leading-9 text-black-250">Our approach is straightforward: we build
        strong, transparent partnerships with our clients, working side by side to craft scalable solutions that meet
        real business needs.</p>
    </div>
    <div class="w-full lg:w-1/2 ">
      <div class="w-full relative bg-gray-100 h-72 z-1">
        <img :src="teamPhoto2" class="w-full " alt="#">
      </div>
    </div>
  </div>
</template>
<script setup>
import teamPhoto2 from "../../images/team2.jpg"</script>
