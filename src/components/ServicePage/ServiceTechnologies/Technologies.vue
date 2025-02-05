<template>
  <div class="md:pt-28 w-full bg-white flex flex-col gap-4 md:gap-16 justify-center px-5 md:px-0">
    <div class="font-bold text-4xl    md:text-center  lg:text-center">Technologies we work in</div>
    <span class="w-1/4 h-3px md:hidden bg-black"></span>
    <div class="lg:gap-16 gap-3 flex flex-wrap md:gap-14">
      <p v-for="logo in data" class="w-11 lg:w-20 md:w-20">
        <img :src="logo"
             :class=" logo!=='/src/images/ios.png'?'transition-ease duration-300 grayscale hover:grayscale-0':'transition-ease duration-1000 invert hover:invert-0' " alt="#">
      </p>
    </div>
  </div>
</template>
<script setup>

defineProps({
  data: {
    type: Array
  }
})

</script>
