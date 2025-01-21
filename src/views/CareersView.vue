<template>
  <div class="w-full bg-white md:md:bg-gradient-to-r from-gray-200 to-gray-300 px-5 pb-44 ">
    <div class="div_container  flex flex-col  ">
      <div class="font-bold text-base leading-4 tracking-wider uppercase">Jobs</div>
      <div class="mb-6 font-bold text-5xl   leading-loose tracking-wide"><span class="underline decoration-5  underline-offset-[1rem]  outline-0 ">Be a part</span>  of our team</div>
      <p class="font-normal text-lg leading-9  mt-6">We transform the way IT products are developed, creating a collaborative culture
        <br> where br teams and founders shape the success of digital products together.</p>
    </div>
    <div class="div_container">
    <div class="lg:w-[90%] md:w-full flex justify-between gap-y-3 flex-wrap mt-14  ">
      <div class="flex w-1/2 flex-col md:w-3/12 ">
        <p class="font-medium text-5xl leading-9 ">30+</p>
        <p class="leading-9 text-sm font-normal ">employees</p>
      </div>
      <div class="flex flex-col w-1/2 md:w-3/12">
        <p class="font-medium text-5xl leading-9">70+</p>
        <p class="leading-9 text-sm font-normal">partners worldwide</p>
      </div>
      <div class="flex flex-col w-1/2 md:w-3/12">
        <p class="font-medium text-5xl leading-9">12+</p>
        <p class="leading-9 text-sm font-normal">fields of expertise
        </p>
      </div>
      <div class="flex flex-col w-1/2 md:w-3/12 ">
        <p class="font-medium text-5xl leading-9">100+</p>
        <p class="leading-9 text-sm font-normal">completed projects

        </p>
      </div>
    </div>
    </div>
  </div>
    <Jobs/>
  <ContactUs/>
</template>
<script setup>
import Jobs from "../components/Jobs.vue";
import ContactUs from "../components/Contacts/ContactUs.vue";

</script>
