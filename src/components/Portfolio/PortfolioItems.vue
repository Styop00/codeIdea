<template>
  <div
    class="
    w-full flex flex-col lg:flex-row relative gap-x-4 gap-y-0 lg:gap-y-64 flex-wrap justify-between lg:-translate-y-[10%]">
    <div v-for="(item,index) in items" class="lg:w-[40%] w-full relative">
      <div :style="{ backgroundColor: item.color }" :class="[' h-screen-700',
      index % 2 === 0 ?'':'lg:-translate-y-[80%]']">
        <div class="lg:w-full w-3/4 z-1 md:translate-x-1/3 lg:translate-x-1/4 absolute">
          <img :src="item.avatar" alt="#">
        </div>
        <div :class="['md:w-8/12 ml-7 lg:ml-0 lg:bottom-13 bottom-8 absolute z-20',
          index % 2===0?'lg:text-right text-left md:left-0 lg:-translate-x-1/3':'text-left md:right-0 lg:translate-x-1/3']">
          <p class="font-bold text-4xl leading-loose tracking-widest">{{ item.title }}</p>
          <p class="font-normal text-base leading-7 tracking-wider	">{{ item.about }}</p>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>
import avatar from "../../images/preview-w86.webp"

const items = [
  {
    color: "#FF8BB2",
    title: "Veseli Carameli",
    about: "Corporate website development for Veseli\n" +
      "karameli, caramel sweets crafting company",
    avatar
  },
  {
    color: "#A062CB",
    title: "Waddington's",
    about: "Cross-platform mobile app for Canadian\n" +
      "auction and appraisal company",
    avatar
  },
  {
    color: "#C9C0FF",
    title: "W86",
    about: "Website development for real estate\n" +
      "development company project in Krems,\n" + "Austria",

  },
  {
    color: "#3BA8FF",
    title: "Template\n" +
      "Monster",
    about: "Website development for real estate\n" +
      "development company project in Krems,\n" + "Austria",

  },
]
</script>
<style scoped></style>
