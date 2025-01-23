<template>
  <div class="flex flex-col div_container items-center md:items-start gap-16">
    <div class="font-bold text-2xl md:text-5xl leading-10 pt-5 md:pt-16 tracking-wider	">Job Application Form</div>
    <div class="flex flex-col justify-center items-center  gap-8 pb-12 ">
        <div class="flex flex-col md:flex-row flex-wrap gap-16 justify-between w-full md:w-4/5 px-5 md:px-0" >
          <div class="w-full md:w-2/5 flex flex-col gap-2.5" >
            <p class="font-medium	leading-6 text-base">Full Name</p>
            <input type="text" placeholder="Maria Anderson" class="w-full  p-4 border border-gray-1050 outline-none	 rounded-lg">
          </div>
          <div class="w-full md:w-2/5 flex flex-col gap-2.5">
            <p class="font-medium	leading-6 text-base">Phone</p>
            <input type="number" placeholder="+374 98 000 000" class="w-full no-arrows p-4 border border-gray-1050 outline-none	 rounded-lg">
          </div>
          <div class="w-full md:w-2/5 flex flex-col gap-2.5">
            <p class="font-medium	leading-6 text-base">Email</p>
            <input type="email" placeholder="ex: myname@example.com" class="w-full p-4 border border-gray-1050 outline-none	 rounded-lg">
          </div>
          <div class="w-full md:w-2/5 flex flex-col gap-2.5">
            <label class="font-medium	leading-6 rounded-lg text-base">Applied position</label>
            <select  class="p-4 custom-select rounded-lg border border-gray-1050 outline-none bg-white" >
              <option class="text-gray-1150" disabled selected hidden>Choose your profession</option>
              <option class="rounded-lg">UI</option>
              <option>Front end developer</option>
              <option>Backend developer</option>
            </select>
          </div>
        </div>
      <div class="w-full md:w-4/5   flex justify-center items-center mt-8 md:w-4/5 px-5 md:px-0">
        <div class="w-full md:w-1/2 ">
          <label class="font-medium	leading-6 rounded-lg text-base " > Earliest Possible Start Date</label>
          <input type="date" class="w-full  no-arrows p-4 border border-gray-1050 outline-none	  rounded-lg custom-date-input">
        </div>
      </div>
      <div class="w-full md:w-4/5 flex flex-col gap-3 md:w-4/5 px-5 md:px-0">
        <p class="font-medium	leading-6 text-base"> Cover letter</p>
        <textarea class="w-full h-[161px] border  rounded-lg p-4 border border-gray-1050 outline-none"></textarea>
      </div>
      <div class="w-full md:w-4/5 flex flex-col gap-1 md:w-4/5 px-5 md:px-0">
        <p class="font-medium	leading-6 text-base"> Upload Resume</p>
        <div class="w-full bg-white-300  h-[161px] border-dashed  rounded-lg p-4 border border-gray-1050 outline-none flex items-center justify-center" @click="uploadPdf2">
          <div class="flex flex-col items-center justify-center ">
            <img :src="uploadIcon" >
            <p class="font-semibold	leading-10 text-base">Upload a file</p>
            <p class="text-sm font-semibold text-gray-1150 leading-9">Drag and drop files here</p>
            <input type="file" class="hidden" ref="inputRef2" @click="chooseFile2">

          </div>
        </div>
      </div>
      <div class="w-full md:w-4/5 flex flex-col gap-1 md:w-4/5 px-5 md:px-0">
        <p class="font-medium	leading-6 text-base"> Any other document to upload</p>
        <div class="flex flex-col gap-8">
          <div class="w-full bg-white-300  h-[161px] border-dashed  rounded-lg p-4 border border-gray-1050 outline-none flex items-center justify-center" @click="uploadPdf">
            <div class="flex flex-col items-center justify-center  ">
              <img :src="uploadIcon" >
              <p class="font-semibold	leading-10 text-base">Upload a file</p>
              <p class="text-sm font-semibold text-gray-1150 leading-9">Drag and drop files here</p>
              <input type="file" class="hidden" ref="inputRef" @click="chooseFile">
            </div>
          </div>
          <p class="font-medium	text-sm leading-tight	 text-gray-1150">You can share certificates, diplomas, etc.</p>
        </div>
      </div>
      <button class="py-3  text-center px-16 bg-gray-600 rounded-xl mt-16 font-bold text-xs leading-4 tracking-widest	uppercase ">apply</button>

    </div>

  </div>
</template>
<script setup>
import {useRoute} from "vue-router";
import {ref} from "vue";
import uploadIcon from "../../images/upload.png"
const route=useRoute()
const jobId=ref(route.params.id)
const inputRef=ref(null)
const inputRef2=ref(null)

function uploadPdf(){
  inputRef.value.click()
}
function uploadPdf2(){
  inputRef2.value.click()
}
</script>
<style scoped>
.custom-select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url("../src/images/Vector.png");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}


.custom-select {
  padding-right: 2.5rem;
}
.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows[type="number"] {
  -moz-appearance: textfield;
}
.custom-date-input {
  appearance: none; /* Убираем стандартный стиль браузера */
  -webkit-appearance: none; /* Для Safari/Chrome */
  -moz-appearance: none; /* Для Firefox */

}


.custom-date-input::-webkit-calendar-picker-indicator {
  background-image: url('../src/images/calendar.png');
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: center center;
}


</style>
