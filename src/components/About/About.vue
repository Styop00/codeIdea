<template>
  <div class="w-full flex flex-col gap-32  ">
  <div class=" pt-44 bg-gradient-to-r from-gray-200 to-gray-300  flex flex-col  gap-14">
      <div class="div_container px-5">
        <p class="font-bold text-base leading-4 tracking-wider uppercase">About us</p>
        <div class="mb-6 font-bold text-5xl   leading-loose tracking-wide "><span class=" decoration-5 underline  underline-offset-[2rem]  lg:underline-offset-[2rem] md:underline-offset-[1rem] outline-0 ">Meet</span> the people of CodeIdea</div>
        <p class=" font-normal text-lg leading-9  mt-6">CodeIdea is a fast-growing web and mobile apps development company with great experience in software developing. Using best practices we offer our clients cloud based rich web applications development services. We can create your product from the scratch - staring with User Experience and ending with Quality Assurance. Shipping the high quality product at the right time - this is our formula of success.</p>
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
