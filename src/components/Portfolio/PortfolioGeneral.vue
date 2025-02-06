<template>
  <div class="w-full relative">
    <div class="bg-white md:bg-gradient-to-r from-gray-200 to-gray-300 pb-10">
      <div class="divContainer pt-5 lg:pt-40 px-5 lg:px-0">
        <Title title="OUR WORKS" description="Portfolio">
          <p class="w-full lg:w-55%">At CodeIdea, we take pride in transforming ideas into digital experiences that captivate,
            engage, and deliver results. Our portfolio showcases a diverse range of projects spanning web and mobile development,
            highlighting our expertise and commitment to excellence.s.</p>
        </Title>
      </div>
    </div>

    <div class="divContainer">
      <PortfolioItems/>
    </div>
  </div>

  <ContactUs class="divContainer"/>
</template>

<script setup>
import PortfolioItems from "./PortfolioItems.vue";
import Title from "@/components/Title.vue";
import ContactUs from "@/components/Contacts/ContactUs.vue";
</script>
