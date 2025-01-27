<template>
  <div class="flex flex-col div_container items-center md:items-start gap-16">
    <div class="font-bold text-2xl md:text-5xl leading-10 pt-5 md:pt-16 tracking-wider	">Job Application Form</div>
    <div class="flex flex-col justify-center items-center  gap-8 pb-12 ">
        <div class="flex flex-col md:flex-row flex-wrap gap-16 justify-between w-full md:w-4/5 px-5 md:px-0" >
          <FormUser title="Full Name" type="text" placeholder="Maria Anderson" />
          <FormUser title="Phone" type="number" placeholder="+374 98 000 000"/>
          <FormUser title="Email" type="email" placeholder="ex: myname@example.com"/>

          <div class="w-full md:w-2/5 flex flex-col gap-2.5">
            <label class="font-medium	leading-6 rounded-lg text-base">Applied position</label>
            <select :style="{ backgroundImage: 'url(' + arrow + ')' }"  class="bg-no-repeat p-4 custom-select rounded-lg border border-gray-1050 outline-none bg-white" >
              <option class="text-gray-1150" disabled selected hidden>Choose your profession</option>
              <option class="rounded-lg">UI</option>
              <option>Front end developer</option>
              <option>Backend developer</option>
            </select>
          </div>
        </div>
      <div class="w-full md:w-4/5   flex justify-center items-center mt-8 md:w-4/5 px-5 md:px-0">
        <div class="w-full md:w-1/2 relative">
          <label class="font-medium	leading-6 rounded-lg text-base " > Earliest Possible Start Date</label>
          <input type="date"  class="w-full  no-arrows p-4 border border-gray-1050 outline-none	  rounded-lg custom-date-input">
          <img :src="calendar" class="absolute top-1/2 right-0 z-1 pr-5">
        </div>
      </div>
      <div class="w-full md:w-4/5 flex flex-col gap-3 md:w-4/5 px-5 md:px-0">
        <p class="font-medium	leading-6 text-base"> Cover letter</p>
        <input type="text" class="w-full h-40 border  rounded-lg p-4 border border-gray-1050 outline-none">
      </div>
      <UploadCv accept="application/pdf" title="Upload Resume" footerText=" "/>
      <UploadCv title="Any other document to upload" footerText="You can share certificates, diplomas, etc."/>
      <button class="py-3  text-center px-16 bg-gray-600 rounded-xl mt-16 font-bold text-xs leading-4 tracking-widest	uppercase ">apply</button>

    </div>

  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
import arrow from "../../images/Vector.png"
import calendar from "../../images/calendar.png"

import FormUser from "./FormUser.vue";
import UploadCv from "./UploadCv.vue";
const route=useRoute()
const jobId=ref(route.params.id)

</script>
<style scoped>
.custom-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background-size: 12px auto;
  background-position: right 10px center;
  background-repeat: no-repeat;

}
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  position: absolute;
  right: 0;
  padding-right: 1rem;
  z-index: 10;
  opacity: 0;
}

</style>
