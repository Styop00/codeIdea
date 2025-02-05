<template>
  <div class="w-full flex flex-col lg:flex-row relative gap-x-4 gap-y-0 lg:gap-y-32 flex-wrap
  justify-between lg:-translate-y-[10%]">
    <div v-for="(item,index) in items" class="lg:w-40% w-full relative">
      <div :style="{ backgroundColor: item.color }"
           :class="['h-600px', index % 2 === 0 ?'lg:translate-y-[155%]':'lg:translate-y-[95%]']">
        <div class="lg:w-full w-3/4 z-1 md:translate-x-1/4 lg:translate-x-1/4 absolute">
          <img :src='item.img' alt="#">
        </div>
        <div :class="['ml-7 lg:ml-0 lg:bottom-13 bottom-8 absolute z-20',
          index % 2===0 ? 'lg:text-right text-left lg:left-0 lg:-translate-x-1/4':'text-left lg:right-0 lg:translate-x-1/4']">
          <p class="font-bold text-4xl tracking-widest">{{ item.title }}</p>
          <p class="font-normal text-base leading-7 tracking-wider mt-5	">{{ item.about }}</p>
        </div>
      </div>
    </div>
  </div>


</template>
<script setup>
import {$axios} from "@/plugins/axios.js";
import {ref} from "vue";

// const items = ref([
//   {
//     color: "#FF8BB2",
//     title: "Veseli Carameli",
//     about: "Corporate website development for Veseli\n" +
//       "karameli, caramel sweets crafting company",
//
//   },
//   {
//     color: "#A062CB",
//     title: "Waddington's",
//     about: "Cross-platform mobile app for Canadian\n" +
//       "auction and appraisal company",
//
//   },
//   {
//     color: "#C9C0FF",
//     title: "W86",
//     about: "Website development for real estate\n" +
//       "development company project in Krems,\n" + "Austria",
//
//   },
//   {
//     color: "#3BA8FF",
//     title: "Template\n" +
//       "Monster",
//     about: "Website development for real estate\n" +
//       "development company project in Krems,\n" + "Austria",
//
//   },
// ]);

const items = ref([{}]);

async function getPortfolio() {
  try {
    const response = await $axios.get('/portfolio');
    items.value = response.data.data;
    console.log(items.value);
  } catch (error) {
    console.log(error);
  }
}
getPortfolio();
</script>
