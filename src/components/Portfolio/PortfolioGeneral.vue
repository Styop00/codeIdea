<template>

  <div class="mb-3  w-full relative  bg-white   ">
  
    <div class="flex gap-6 w-full  bg-gradient-to-r from-gray-200 to-gray-300 lg:pb-96 pb-14 " >
       
        <div class="div_container flex flex-col gap-2">
          <div class="font-bold text-base leading-4 tracking-wider uppercase">OUR WORKS</div>
          <div class="mb-6 font-bold text-5xl   leading-loose tracking-wide "><span class=" decoration-5  underline-offset-[2rem]  outline-0 ">Port</span>folio</div>
          <span class=" font-normal text-lg leading-9  mt-6" > At CodeIdea, we take pride in transforming ideas into digital <br> experiences that captivate, engage, and deliver results. Our<br> portfolio
          showcases a diverse range of projects spanning web and<br> mobile development, highlighting our expertise and commitment <br> to excellence.s.</span>
        </div>
       
    </div>

    <div class="div_container !px-0">
      <PortfolioItems />
    </div>
  </div>
</template>
<script setup>
import PortfolioItems from "./PortfolioItems.vue";
</script>
