<template>
  <div
    class="w-full md:w-full lg:w-2/4 flex flex-col pl-0 md:pl-0  gap-4 pt-24 pl-0 md:pl-0 lg:pl-16 pr-14 pb-32 md:border-0 border-0 lg:border-4 lg:border-gray-10 ">
    <div class="font-bold uppercase text-lg leading-5 tracking-widest">Contact us</div>
    <div>Thank you for your time. We really appreciate your interest in our company.  </div>
    <div class="flex flex-col gap-0 ">
      <label class="font-normal text-base leading-5 text-gray-10">Full name <sup>*</sup></label>
      <div class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></div>
    </div>
    <div class="flex flex-col gap-0 ">
      <label class="font-normal text-base leading-5 text-gray-10">Email <sup>*</sup></label>
      <div class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></div>
    </div>
    <div class="flex flex-col gap-0 ">
      <label class="font-normal text-base leading-5 text-gray-10">Phone number</label>
      <div class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></div>
    </div>
    <div class="flex flex-col gap-14">
      <div class="w-full flex justify-between">
      <div class="font-normal text-base leading-5 text-gray-10">Message<sup>*</sup></div>
      <img :src="scImage" class="cursor-pointer">
      </div>
      <div class="border-b-2 border-black/10"><input type="text" class="w-full outline-0"></div>

    </div>
    <div class="flex gap-1.5 items-start lg:items-start md:items-center">
      <div class="pt-0"><input type="radio" ></div>
      <div class="font-normal leading-5 text-gray-10 	text-base">I've read and accepted your <span
        class="font-semibold	text-base text-gray-10 leading-5">Privacy Policy</span></div>
    </div>
    <div>
      <div class="flex gap-1.5 items-start lg:items-start md:items-center">
        <div class="pt-0"><input type="radio"></div>
        <div class="font-normal leading-5 text-gray-10 	text-base">Send me the latest in tech and inspiring
          peer case
          studies</div>

      </div>
      <button class="py-3 px-16 bg-gray-600  font-bold text-center text-xs leading-4 tracking-wider rounded-lg mt-9">
        SEND
      </button>

    </div>
  </div>
</template>
<script setup>
import scImage from "../../images/sc.png"

</script>
