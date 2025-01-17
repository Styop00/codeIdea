<template>
  <div class="bg-gradient-to-r from-gray-400 to-gray-500 py-24 flex-col "  >
    <div class="div_container">
      <div class="flex flex-col gap-3">
        <p class="font-bold text-base leading-4 tracking-wider uppercase">services</p>
        <div class="mb-6 font-bold lg:text-5xl md:text-3xl text-2xl leading-loose tracking-wide " >
          <span class="underline ld:decoration-5 md:decoration-3 lg:underline-offset-[2rem] md:underline-offset-[1rem] outline-0 ">{{data.border_title}}</span>{{data.title}}</div>
        <span class=" font-normal text-lg leading-9 ">We create MVPs for startups and develop complex, enterprise-level
          platforms <br></br>with Java, JavaScript, Go, PHP,
          Swift and other languages, as well as 100+ <br>frameworks.</span>
      </div>

      <div class="flex flex-col gap-3.5 mt-16" >
        <p class="lg:font-bold  lg:text-3xl md:font-widest font-normal md:text-2xl text-xl leading-10 " v-for="item in data.items">{{item}}</p>
      </div>
    </div>
  </div>
</template>
<script setup>


defineProps({
  data:{
    type:Object
  }
})
</script>
<style scoped>

</style>
