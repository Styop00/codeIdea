<template>
  <div class="bg-white md:bg-gradient-to-r from-gray-400 to-gray-500 mb-10 md:py-24 flex-col  px-5 sm:px-0">
    <div class="divContainer">
      <Title title="Services" description="Web & Mobile Development">
        <p class="w-full lg:w-5/6">We create MVPs for startups and develop complex, enterprise-level platforms
          with Java, JavaScript, Go, PHP, Swift and other languages, as well as 100+ frameworks.</p>
      </Title>

      <div class="mt-10 w-full h-96 bg-gray-1000 lg:hidden md:hidden"></div>
      <div class="flex flex-col gap-3.5 mt-10 md:mt-16">
        <p class="lg:font-bold lg:text-3xl md:font-widest font-bold text-lg leading-8 "
           v-for="item in data.items">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "@/components/Title.vue";

defineProps({
  data: {
    type: Object
  }
})
</script>
