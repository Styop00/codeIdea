<template>
  <button class="mt-3 rounded-10px px-3 text-gray-800 bg-white-70 shadow-ex-small mr-5">
    {{ btnText }}
  </button>
</template>

<script setup>
defineProps(['btnText']);
</script>
