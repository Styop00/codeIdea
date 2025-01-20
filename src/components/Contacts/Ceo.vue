<template>
  <div class="w-full md:w-full lg:w-2/4 bg-white py-24  !pl-0 md:pl-0 lg:pl-32 pr-0 md:pr-0 lg:pr-28 flex child flex-col ">
    <div class="font-bold uppercase text-xxl md:text-3xl lg:text-5xl leading-10 tracking-widest mb-16">What comes next?</div>
    <div class="uppercase font-bold text-lg leading-6 tracking-widest mb-3">Project Follow-Up</div>
    <div class="font-normal tracking-widest text-sm text-gray-10">You’ll hear from one of these guys within 48 hours</div>
    <div>
      <div class="p-0 flex items-center gap-10 mt-3 flex-wrap">
        <div class="flex items-center gap-3">
        <div class="relative ">
          <img :src="rectAngle" class="rounded-full max-w-20 w-20 " >
          <img :src="avatarMail" class=" absolute right-0 bottom-0 w-6">
        </div>
          <div class="flex flex-col gap-2">
            <span class="font-normal text-sm leading-5">CEO</span>
            <span class="font-semibold text-xl leading-6	">Gevorg</span>
          </div>
        </div>
        <div class="flex items-center gap-3">
        <div class="relative ">
          <img :src="rectAngle2" class="rounded-full max-w-20 w-20 " >
          <img :src="avatarMail" class=" absolute right-0 bottom-0 w-6">
        </div>
          <div class="flex flex-col gap-2">
            <span class="font-normal text-sm leading-5">CEO</span>
            <span class="font-semibold text-xl leading-6	">Sergey</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col  gap-6 mt-14">
      <div class="flex gap-2.5"><img :src="phoneIcon" class="w-4 h-4">
        <span class="text-xl font-normal leading-6 text-gray-10">+374 91 30 40 02</span>
      </div>
      <div class="flex gap-2.5" ><img :src="mailIcon" class=" h-4">
        <span class="text-xl font-normal leading-6 text-gray-10">info@codeidea.com</span>
      </div>
      <div class="flex gap-2.5"><img :src="geoIcon" class="max-w-4 max-h-5 " alt="">
        <span class="text-xl font-normal leading-6 text-gray-10">Anastas Mikoyan 64/5,<br> Yerevan, Armenia</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import phoneIcon from "../../images/phone.png"
import mailIcon from "../../images/mail.png"
import geoIcon from "../../images/geo.png"
import rectAngle from "../../images/Rectangle 135 2.png"
import rectAngle2 from "../../images/Rectangle2.png"

import avatarMail from "../../images/avatarMail.png"

</script>
<style scoped>
@media (max-width: 1024px) {
  .child{
    width: 100%;
    justify-content: flex-start;
    padding-right: 0 ;
    padding-left: 2rem;
    margin-left: 0;
  }
}
</style>
