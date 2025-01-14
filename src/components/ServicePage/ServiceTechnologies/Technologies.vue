<template>
  <div class="py-28 px-14 w-full bg-white flex flex-col gap-16 justify-center items-center">
        <div class="font-bold lg:text-5xl md:text-2xl text-xl md:text-3xl md:text-center  lg:text-center" >Technologies we work in</div>

    <div class=" lg:gap-16 gap-7 flex flex-wrap md:gap-14">
      <p v-for="logo in data">
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
