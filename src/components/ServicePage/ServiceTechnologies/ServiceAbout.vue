<template>
  <div class="bg-white md:bg-gradient-to-r from-gray-400 to-gray-500 py-24 flex-col  px-5 sm:px-0">
    <div class="divContainer">
      <div class="flex flex-col gap-3">
        <p class="font-bold text-base leading-4 tracking-wider uppercase">services</p>
        <div class="mb-6 font-bold md:text-5xl mt-8 text-2xl leading-9  md:leading-loose tracking-wide  ">
          {{ data.title }}
        </div>
        <div class="w-32 h-1 bg-black"></div>

        <span class=" font-normal text-base mt-8 md:text-lg leading-9 ">We create MVPs for startups and develop complex, enterprise-level
          platforms <br></br>with Java, JavaScript, Go, PHP,
          Swift and other languages, as well as 100+ <br>frameworks.</span>
      </div>
      <div class="w-full h-96 bg-gray-1000 lg:hidden md:hidden"></div>
      <div class="flex flex-col gap-3.5 mt-16">
        <p class="lg:font-bold  lg:text-3xl md:font-widest font-bold md:text-2xl text-xl leading-10 "
           v-for="item in data.items">{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>


defineProps({
  data: {
    type: Object
  }
})
</script>
<style scoped>

</style>
