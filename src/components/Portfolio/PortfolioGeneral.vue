<template>


  <div class="mb-3  w-full relative  bg-white   ">

    <div class="flex gap-6 w-full bg-white md:bg-gradient-to-r from-gray-200 to-gray-300 lg:pb-96 pb-14 " >

        <div class="divContainer flex flex-col gap-2 px-5 sm:px-0">
          <div class="font-bold text-base leading-4 tracking-wider uppercase">OUR WORKS</div>
          <div class="mb-6 font-bold md:text-5xl mt-8 text-2xl leading-9  md:leading-loose tracking-wide">Portfolio</div>
          <div class="w-32 h-1 bg-black"></div>

          <span class=" font-normal text-base md:text-lg leading-9  mt-6" > At CodeIdea, we take pride in transforming ideas into digital <br> experiences that captivate, engage, and deliver results. Our<br> portfolio
          showcases a diverse range of projects spanning web and<br> mobile development, highlighting our expertise and commitment <br> to excellence.s.</span>
        </div>

    </div>

    <div class="divContainer">
      <PortfolioItems />
    </div>
  </div>
</template>
<script setup>
import PortfolioItems from "./PortfolioItems.vue";
</script>
