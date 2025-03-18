<template>
  <div
    v-if="visibleModal"
    class="top-0 left-0 w-full bg-black-50 absolute z-10 py-20"
  >
    <ContactUs class="bg-white mx-28 !py-0"/>
  </div>

  <section id="home" class="px-5 sm:px-0 shadow-small-30">
    <div class="divContainer
        flex flex-wrap md:flex-nowrap justify-between py-20 pb-0 md:pb-52 ld:pb-44">
      <div class="hidden md:block py-20">
        <img src="@/assets/logo.svg" alt="CodeIdea">
        <p class="font-semibold text-xl text-center mt-8">To transform innovative ideas into groundbreaking web and mobile
          platforms—<span class="text-green-100">sports</span>, <span class="text-green-100">booking</span>, and <span class="text-green-100">SaaS</span>—becoming
          the strategic partner that propels our clients to the forefront of their industries.</p>
        <div class="text-xs relative inline-block -rotate-90 md:top-32 lg:top-40 left-96% z-1 ">
          <span>SCROLL</span>
          <div class="w-45px border-1px border-gray-900 absolute left-110% top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div class="md:hidden w-full">
        <div class="text-3xl md:text-4xl font-bold sm:mt-16 lg:mt-48 tracking-wider">
          <p class="mb-4">Front-end developer</p>
          <p class="mb-4">WordPress developer</p>
          <p class="mb-4">Laravel developer</p>
          <p class="mb-4">Quality analyst</p>
          <p class="mb-4">UI/UX Designer</p>
        </div>

        <div class="bg-gray-850 w-full h-150px md:ml-20 mt-5 md:mt-0"></div>
      </div>
    </div>

    <div class="divContainer relative">
      <AcceptCookie class="md:absolute md:bottom-10"/>
    </div>

  </section>
</template>

<script setup>
import AcceptCookie from "@/components/HomePage/HomeSection/AcceptCookie.vue";
import ContactUs from "@/components/Contacts/ContactUs.vue";
import {onMounted, ref} from 'vue'

const visibleModal = ref(false);

const openModal = () => {
  visibleModal.value = true;
}

onMounted(() => {
  window.openModal = openModal;
});
</script>
