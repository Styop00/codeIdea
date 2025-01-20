<template>
  <ServiceAbout :data="data"/>
  <div class="div_container">
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

