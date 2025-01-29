<template>
  <div class="w-full md:w-2/5 flex flex-col gap-2.5 ">
    <label>
      Applied position
      <el-select
                     v-model="localValue" class="no-border p-4 w-full border border-gray-1050 rounded-lg" placeholder="Choose your position">
        <el-option
          class="w-full"
          v-for="item in options"
          :key="item.index"
          :label="item"
          :value="item"
        />
      </el-select>
    </label>
  </div>
</template>
<script setup>
import {ref, toRef, watch} from "vue";
import arrow from "../../images/Vector.png"
const options=ref(["UI","Project manager","Frontend developer","Backend developer"])

const props=defineProps({
  modelValue:{
    type:String,
    required:true,
  }
})
const localValue=toRef(props.modelValue)

const emits=defineEmits()
watch(localValue, (newValue) => {
  emits('update:modelValue', newValue);
});

watch(() => props.modelValue, (newValue) => {
  if (props.modelValue !== localValue.value) {
    localValue.value = newValue;
  }
});
</script>
<style  scoped>
::v-deep(.el-select__wrapper){
  box-shadow: none;
}
::v-deep(.el-select__wrapper:focus){
  box-shadow: none;
}
::v-deep(.el-select__wrapper:hover){
  box-shadow: none;
}
::v-deep(el-select__suffix){
  width: 160px;
}
</style>
