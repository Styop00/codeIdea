<template>
  <div class="w-full flex flex-col gap-32  ">
    <div class=" pt-10 bg-white pt-44 md:bg-gradient-to-r from-gray-200 to-gray-300  flex flex-col  gap-14">
      <div class="divContainer px-5">
        <p class="font-bold text-base leading-4 tracking-wider uppercase">About us</p>
        <div class="mb-6 font-bold md:text-5xl mt-8 text-2xl leading-9  md:leading-loose tracking-wide ">Meet the people
          of CodeIdea
        </div>
        <div class="w-32 h-1 bg-black"></div>
        <p class=" font-normal text-base md:text-lg leading-9  mt-6">CodeIdea is a fast-growing web and mobile apps
          development company with great experience in software developing. Using best practices we offer our clients
          cloud based rich web applications development services. We can create your product from the scratch - staring
          with User Experience and ending with Quality Assurance. Shipping the high quality product at the right time -
          this is our formula of success.</p>
      </div>
      <Team/>
    </div>
    <OurMission/>
    <JoinUs/>
  </div>
</template>
<script setup>
import Team from "./Team.vue";
import OurMission from "./OurMission.vue";
import JoinUs from "./JoinUs.vue";

</script>
