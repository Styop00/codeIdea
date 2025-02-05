<template>
  <div class="w-full md:w-2/5 flex flex-col gap-2.5 ">
    <p class="font-medium	leading-6 text-base">{{ title }}</p>
    <input :type="type" :placeholder="placeholder"
           class="w-full  p-4 border border-gray-1050 outline-none	 rounded-lg no-arrows">
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  }

})
</script>
<style scoped>

.no-arrows::-webkit-outer-spin-button,
.no-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  appearance: none;
}
</style>
