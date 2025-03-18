<template>
  <section id="awards" class="bg-gray-1200 pb-12 md:pb-16 mb-20 pt-14 sm:pt-0 px-5 sm:px-0 mt-10 md:mt-28">
    <div class="divContainer">
      <SectionsTitle sectionsTitle="Awards & recognitions"/>
      <div class="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
        <AwardsItem />
        <AwardsItem />
        <AwardsItem class="hidden md:block" />
        <AwardsItem class="hidden md:block" />
      </div>
    </div>
    <div class="relative top-24 left-1/2 w-60px h-60px rounded-full
    shadow-small-10 cursor-pointer"
         :style="{ backgroundColor: bgColor, color: color }"
         @click="changeBackgroundColor"
    >
      <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <fa :icon="['fas', 'arrow-down']" class="text-2xl duration-300"
            :style="{ transform: rotate }"
        />
      </span>
    </div>
  </section>
</template>

<script setup>
import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
import AwardsItem from "@/components/HomePage/AwardsSection/AwardsItem.vue"
import {ref} from "vue"

const bgColor = ref("white");
const color = ref('black');
const rotate = ref('rotate(0)');

const changeBackgroundColor = () => {
  bgColor.value = bgColor.value === 'white' ? 'black' : 'white';
  color.value = color.value === 'black' ? 'white' : 'black';
  rotate.value = rotate.value === 'rotate(0)' ? 'rotate(-180deg)' : 'rotate(0)';
}

</script>
