<template>
  <div class="w-full  mt-12   flex flex-col gap-2 justify-center items-center mt-8 md:w-4/5 px-5 md:px-0">
    <div class="w-full md:w-1/2 relative calendar-container ">
      <label class="font-medium	leading-6 rounded-lg text-base"> Earliest Possible Start Date</label>
      <input :placeholder="formattedDate" readonly @click="toggleCalendar"
             class="w-full cursor-pointer no-arrows p-4 border border-gray-1050 outline-none	  rounded-lg custom-date-input">
      <img :src="calendar" class="absolute hidden md:flex cursor-pointer top-1/2 right-0 z-1 pr-5" alt="#"
           @click="toggleCalendar">
      <img :src="arrow" class="absolute flex md:hidden cursor-pointer top-1/2 pt-2 right-0 z-1 pr-5" alt="#"
           @click="show = toggleCalendar">

    </div>
    <DatePicker v-model="selectDate" class="px-5" :class="show ? '' : '!hidden'" mode="date" @click.stop/>
  </div>
</template>
<script setup>
import calendar from "../../images/calendar.png"
import {computed, onMounted, onUnmounted, ref, toRef, watch} from "vue";
import arrow from "../../images/Vector.png"
import moment from "moment";
import { DatePicker } from 'v-calendar';

const props = defineProps({
  modelValue: {
    type: String
  }
})
const show = ref(false)
const selectDate = toRef('')
const emits = defineEmits(["update:modelValue"])

const formattedDate = computed(() => {
  if (selectDate.value) {
    return moment(selectDate.value, 'DD-MM-YYYY').format('DD-MM-YYYY').toString();
  }
  return "MM-DD-YYYY"
});

watch(formattedDate, (newValue) => {
  show.value = false
  emits("update:modelValue", newValue)
})

watch(() => props.modelValue, (newValue) => {
  if (props.modelValue !== selectDate.value) {
    selectDate.value = moment(newValue, 'DD-MM-YYYY').format('DD-MM-YYYY').toString();
  }
});

function toggleCalendar(event) {
  event.stopPropagation();
  show.value = !show.value;
}

function closeCalendar(event) {
  if (!event.target.closest(".calendar-container")) {
    show.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", closeCalendar);
});

onUnmounted(() => {
  window.removeEventListener("click", closeCalendar);
});

</script>
<style scoped>
::v-deep(.vc-bordered) {
  width: 100%;
  margin-inline: 2rem;
  position: absolute;
  bottom: -17rem;


}

@media (min-width: 866px) {
  ::v-deep(.vc-bordered) {
    width: 50%;

  }
}

</style>
