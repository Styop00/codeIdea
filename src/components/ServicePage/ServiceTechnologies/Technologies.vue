<template>
  <div class="py-28 w-full bg-white flex flex-col gap-16 justify-center px-5 ">
        <div class="font-bold text-4xl    md:text-center  lg:text-center" >Technologies we work in</div>
      <div class="w-1/4 h-1 md:hidden bg-black  "></div>
    <div class=" lg:gap-16 gap-3 flex flex-wrap  px-5 lg:px-0 md:px-0 md:gap-14">
      <p v-for="logo in data" class="w-11 lg:w-20 md:w-20">
        <img :src="logo" class=" transition-ease duration-300 grayscale	 hover:grayscale-0 " v-if="logo!==iosLogo" >
        <img :src="logo" class=" transition-ease duration-500 invert	 hover:invert-0" v-else>
      </p>

    </div>
  </div>
</template>
<script setup>




defineProps({
  data:{
    type:Array
  }
})

</script>
