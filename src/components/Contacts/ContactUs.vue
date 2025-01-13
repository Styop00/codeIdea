<template>
  <div
    class="px-14 py-32 bg-white flex flex-col md:flex-col lg:flex-row justify-start md:justify-start lg:justify-between  items-center gap-0   ">
    <div
      class="w-full md:w-full lg:w-2/4 flex flex-col pl-0 md:pl-0  gap-4 pt-24 pl-0 md:pl-0 lg:pl-16 pr-14 pb-32 md:border-0 border-0 lg:border-4 lg:border-gray-10 ">
      <p class="font-bold uppercase text-lg leading-5 tracking-widest">Contact us</p>
      <p>Thank you for your time. We really appreciate your interest in our company.  </p>
      <p class="flex flex-col gap-0 ">
        <label class="font-normal text-base leading-5 text-gray-10">Full name <sup>*</sup></label>
      <p class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></p>
      </p>
      <p class="flex flex-col gap-0 ">
        <label class="font-normal text-base leading-5 text-gray-10">Email <sup>*</sup></label>
      <p class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></p>
      </p>
      <p class="flex flex-col gap-0 ">
        <label class="font-normal text-base leading-5 text-gray-10">Phone number</label>
      <p class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></p>
      </p>
      <div class="flex flex-col gap-14">
        <p class="w-full flex justify-between">
        <p class="font-normal text-base leading-5 text-gray-10">Message <sup>*</sup></p>
        <img :src="scImage" class="cursor-pointer">
        </p>
        <div class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></div>

      </div>
      <div class="flex gap-0.5 items-start">
        <input type="radio">
        <p class="font-normal leading-5 text-gray-10	text-base">I've read and accepted your <span
          class="font-semibold	text-base text-gray-10 leading-5">Privacy Policy</span></p>
      </div>
      <div>
        <div class="flex gap-0.5">
          <input type="radio">
          <p class="font-normal leading-5 text-gray-10	text-base">Send me the latest in tech and inspiring
            peer case
            studies</p>

        </div>
        <button class="py-3 px-16 bg-gray-600  font-bold text-center text-xs leading-4 tracking-wider rounded-lg mt-9">
          SEND
        </button>

      </div>
    </div>
    <Ceo/>
  </div>
</template>
<script setup>
import scImage from "../../images/sc.png"
import Ceo from "./Ceo.vue";

</script>
<style scoped>

</style>
