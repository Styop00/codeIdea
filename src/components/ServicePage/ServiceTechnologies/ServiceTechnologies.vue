<template>
  <ServiceAbout :data="data"/>
  <Technologies :data="data.logos"/>
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

