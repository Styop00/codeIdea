<template>
  <div class="flex flex-col col-span-1 gap-2  lg:pt-0 lg:col-span-2 md:pt-0 ">
    <p class="text-white mb-4 text-base uppercase font-bold leading-4" >{{title}}</p>
    <span class="text-white font-normal text-sm leading-5 cursor-pointer whitespace-nowrap " v-for="it in item">
      {{it}}
    </span>
  </div>
</template>

<script setup>
defineProps({
  item:{
    type:Array
  },
  title:{
    type:String
  }
})
</script>

<style scoped>

</style>
