<template>
  <div class="w-full flex flex-col lg:flex-row relative gap-x-4 gap-y-0 lg:gap-y-32 flex-wrap
  justify-between">
    <div v-if="visible" v-for="(item,index) in items" class="lg:w-40% w-full relative">
      <div :style="{ backgroundColor: item.color }"
           :class="['h-600px outer', index % 2 === 0 ?'lg:translate-y-[5%]':'lg:-translate-y-[55%]']">
        <div class="inner lg:w-full z-1 absolute" :style="[index % 2 === 0 ? 'top: -10.71429%;' : 'top: 0;']">
          <img :src='item.img_url' alt="#" style="margin: 0 auto;">
        </div>
        <div :class="['inner-text ml-7 lg:ml-0 lg:bottom-13 bottom-8 absolute z-20',
          index % 2===0 ? 'lg:text-left text-left':'text-left lg:right-0 lg:translate-x-1/4']">
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
const items = ref([{}]);
const visible = ref(false);

async function getPortfolio() {
  try {
    const response = await $axios.get('index.php/wp-json/portfolio/v1/all/');
    items.value = response.data;
    visible.value = true;
  } catch (error) {

    console.log(error);
  }
}
getPortfolio();
</script>

<style scoped>

.inner {
  top: -10.71429%;
}

@media (max-width: 600px) {
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    top: unset !important;
  }

  .inner-text {
    text-align: unset !important;
    margin: unset !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}

</style>
