<template>
  <div class="flex flex-wrap md:flex-nowrap justify-between mb-10 md:mb-24 gap-12">
    <div class="w-full md:w-2/3">
      <Title title="services" :description="serviceTitle">
        <p>{{ text }}</p>
      </Title>

      <Button btnText="explore" class="bg-white border-1px border-black
        overflow-hidden relative diagonalAnimation"/>
    </div>

    <div :class="{'md:order-first' : i%2===0}" class="w-full md:w-1/3 relative">
      <img :src=image
           alt="Service image"
           class="w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >

      <img
        src="@/assets/img/services/circle.svg"
        alt="circle"
        class="absolute rotate-180 w-[15%]"
        :class="{
          'top-[5%] left-[7%] md:top-[21%] md:left-[8%] xl:top-[-13%] xl:left-[8%] animate-rotateCircle-1 md:animate-rotateCircle-1-md xl:animate-rotateCircle-1-xl' : i===0,
          'top-[2%] left-[2%] md:top-[9%] md:left-[3%] xl:top-[-13%] xl:left-[8%] animate-rotateCircle-2' : i===1,
          'top-0 left-[8%] animate-rotateCircle-3' : i===2,
          '-top-[3%] left-[46%] md:-top-[39%] md:left-[46%] animate-rotateCircle-4 md:animate-rotateCircle-4-md' : i===3,
        }"
      >
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue"
import Title from "@/components/Title.vue";
import {ref} from "vue"

const props = defineProps(['serviceTitle', 'serviceText', 'image', 'i'])
const text = ref(props.serviceText);
</script>
