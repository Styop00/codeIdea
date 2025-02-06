<template>
  <div class="w-full flex flex-col gap-14 md:gap-32  ">
    <div class="bg-white md:pt-32 md:bg-gradient-to-r from-gray-200 to-gray-300  flex flex-col  gap-14">
      <div class="divContainer px-5">
        <Title title="About us" description="Meet the people of CodeIdea">
          <p><b>CodeIdea</b> is a fast-growing web and mobile apps development company with great experience in software
            developing. Using best practices we offer our clients cloud based rich web applications development
            services. We can create your product from the scratch - staring with User Experience and ending with Quality
            Assurance. Shipping the high quality product at the right time - this is our formula of success.</p>
        </Title>
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
import Title from "@/components/Title.vue";

</script>
