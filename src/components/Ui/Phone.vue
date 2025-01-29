<template>
  <div class="w-full md:w-2/5 ">
    <label >
      {{title}}
    </label>

    <vue-tel-input v-model="phone" class="w-full p-3 rounded-[120px]" mode="international"   :input-options="{ type: 'number' } "
    ></vue-tel-input>

  </div>
</template>
<script setup>
import {defineProps, toRef, watch} from "vue";

const props=defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue:{
    type:String,
    required:true
  }
})
const phone=toRef(props.modelValue)
const emits=defineEmits(["update:modelValue"])
watch(phone,(newValue)=>{
  emits("update:modelValue",newValue)
})
watch(() => props.modelValue, (newValue) => {
  if (props.modelValue !== phone.value) {
    phone.value = newValue;
  }
});
</script>
<style scoped>
.vue-tel-input{
  border-radius: 8px;
}
</style>
