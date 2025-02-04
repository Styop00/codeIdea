<template>
  <div class="w-full md:w-4/5 flex flex-col gap-3 md:w-4/5 px-5 md:px-0">
    <p class="font-medium	leading-6 text-base"> Cover letter</p>
    <textarea v-model="localValue" class="w-full h-40 border  rounded-lg p-4  border-gray-1050 outline-none"></textarea>
  </div>
</template>
<script setup>
import {toRef, watch} from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  }
})
const localValue = toRef(props.modelValue)
const emits = defineEmits(["update:modelValue"])
watch(localValue, (newValue) => {
  emits("update:modelValue", newValue)
})
watch(() => props.modelValue, (newValue) => {
  if (props.modelValue !== localValue.value) {
    localValue.value = newValue
  }
})
</script>
