<template>
  <li class="relative bg-white cursor-pointer text-gray-900 md:text-black"
      :class="{'!text-black': i === active_i}"
      @click="emit('questionEmit')">
    <div class="px-4 pr-10 py-6 border-1px ">
      <span>{{ q }}</span>
      <slot name="arrow"/>
    </div>

    <slot/>
  </li>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(['q', 'i', 'active_i']);
const emit = defineEmits(['questionEmit']);
</script>
