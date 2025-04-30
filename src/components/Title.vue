<template>
  <div>
    <span class="uppercase font-bold tracking-widest">{{ title }}</span>
    <h2 class="font-bold text-24px sm:text-36px md:text-46px">{{ description }}</h2>
    <div class="w-100px h-3px bg-black"></div>
  </div>
  <p class="md:text-lg mt-5">
    <slot/>
  </p>
</template>

<script setup>
defineProps(['title', 'description']);
</script>
