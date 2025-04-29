<template>
  <div class="relative parentDiv">
    <input type="text"
           class="w-full mb-4 placeholder-gray-100 p-4 bg-white-40 rounded-6px"
           :placeholder='placeholderText'
            @focus="changePlaceholderText"
            @blur="resetPlaceholderText"
    />
    <span class="iconsSpan absolute top-4 right-4 invisible">
      <img src="@/assets/img/contacts/userIcon.svg" alt="#" class="inline-block mr-2">
      <img src="@/assets/img/contacts/downArrow.svg" alt="#" class="inline-block">
    </span>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['name']);
const placeholderText = ref(props.name);
const originalText = placeholderText.value;
const newText = "";

const changePlaceholderText = () => {
  placeholderText.value = newText;
}

const resetPlaceholderText = () => {
  placeholderText.value = originalText;
}
</script>
