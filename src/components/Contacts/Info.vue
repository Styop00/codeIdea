<template>
  <div class="flex my-4">
    <slot/>
    <span class="ml-4 text-lg"> {{ data }} </span>
  </div>
</template>

<script setup>
defineProps(['data']);
</script>
