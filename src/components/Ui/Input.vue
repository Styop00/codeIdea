<template>
  <div class="w-full md:w-2/5  " >
    <label class="font-medium	leading-6 text-base">
      {{title}}
      <input :type="type" v-model="localValue" :placeholder="placeholder"  class="w-full  p-4 border border-gray-1050 outline-none rounded-lg no-arrows">
    </label>
  </div>
</template>
<script setup>
import {toRef, defineEmits, watch} from "vue";

const props=defineProps({
  title:{
    type:String,
    required:true
  },
  placeholder:{
    type:String,
    required:true,
  },
  type:{
    type:String,
    required:true
  },
  modelValue:{
    type:[String,Number],
    required:true
  }

})
const emits=defineEmits(["update:modelValue"])
const localValue=toRef(props.value)

watch(localValue, (newValue) => {
  emits('update:modelValue', newValue);
});

watch(() => props.modelValue, (newValue) => {
  if (props.value !== localValue.value) {
    localValue.value = newValue;
  }
});
</script>
<style scoped>


</style>
