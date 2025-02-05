<template>
  <div class="w-full bg-gradient-to-tl from-gray-500 to-gray-400
  md:from-gray-200 md:to-gray-300 px-5 pb-10 md:pb-44">
    <div class="divContainer pt-10 md:pt-28">
      <Title title="JOBS" description="Be a part of our team">
        <p class="w-full lg:w-90%">We transform the way IT products are developed, creating a collaborative culture
          where teams and founders shape the success of digital products together.</p>
      </Title>

      <div class="lg:w-90% w-full flex justify-between gap-y-3 flex-wrap mt-14 pr-7">
        <div class="text-right w-1/2 md:w-max">
          <p class="font-medium text-xl md:text-5xl md:leading-9">30+</p>
          <p class="leading-9 text-sm font-normal ">employees</p>
        </div>

        <div class="text-right w-1/2 md:w-max">
          <p class="font-medium text-xl md:text-5xl md:leading-9">70+</p>
          <p class="leading-9 text-sm font-normal">partners worldwide</p>
        </div>

        <div class="text-right w-1/2 md:w-max">
          <p class="font-medium text-xl md:text-5xl md:leading-9">12+</p>
          <p class="leading-9 text-sm font-normal">fields of expertise
          </p>
        </div>

        <div class="text-right w-1/2 md:w-max">
          <p class="font-medium text-xl md:text-5xl md:leading-9">100+</p>
          <p class="leading-9 text-sm font-normal">completed projects
          </p>
        </div>
      </div>
    </div>
  </div>

  <Jobs/>

  <ContactUs class="divContainer"/>
</template>

<script setup>
import Jobs from "../components/Jobs.vue";
import ContactUs from "../components/Contacts/ContactUs.vue";
import Title from "@/components/Title.vue";
</script>
