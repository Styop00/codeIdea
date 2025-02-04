<template>
  <div class="md:w-3/4 lg:w-3/5 mt-14">
    <slot/>
    <Button btnText="explore"/>
    <div class="md:hidden w-full h-48 bg-gray-850 mt-8"></div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue"
</script>
