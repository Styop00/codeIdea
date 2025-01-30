<template>
  <div class="w-full md:w-2/5 ">
    <label >
      {{title}}
    </label>
    <vue-tel-input v-model="phone" class="w-full p-3 rounded-lg" mode="international"  @input="filterChars" :input-options="{ type: 'tel',  placeholder: 'Enter your phone number'} "
    ></vue-tel-input>

  </div>
</template>
<script setup>
import {defineProps, toRef, watch} from "vue";
import {VueTelInput} from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';



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
function filterChars(){
  phone.value = phone.value.replace(/\D/g, '');
}
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
