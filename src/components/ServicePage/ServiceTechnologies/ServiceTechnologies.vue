<template>
  <ServiceAbout :data="data"/>
  <div class="mx-auto 2xl:w-1400px xl:w-1200px lg:w-1000px md:w-800px sm:w-600px w-400px">
    <Technologies :data="data.logos"/>
  </div>
</template>
<script setup>
import ServiceAbout from "./ServiceAbout.vue";
import Technologies from "./Technologies.vue";
  defineProps({
    data:{
      type:Object,
      required:true
    }
  })
</script>

