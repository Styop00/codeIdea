<template>
  <div v-if="visibleModal" class="top-0 left-0 w-full bg-black-50 absolute py-20" @click.self="closeModal">
    <ContactUs class="bg-white mx-28 !py-0" />
  </div>

  <section id="home" class="px-5 sm:px-0 shadow-small-30">
    <div>
      <div class="flex flex-wrap justify-center md:justify-between py-20 pb-0 md:pb-52 ld:pb-44">
        <div class="w-full md:w-auto flex flex-col items-center text-center divContainer">
          <img src="@/assets/logo.svg" alt="CodeIdea" class="mx-auto max-w-full h-auto" />

          <p
            class="font-semibold text-base sm:text-lg md:text-xl mt-8 w-full max-w-screen-xl lg:h-[126px] leading-snug sm:leading-normal"
          >
            To transform innovative ideas into groundbreaking web and mobile platforms—
            <span class="text-green-100">sports</span>, <span class="text-green-100">booking</span>, and
            <span class="text-green-100">SaaS</span>—becoming the strategic partner that propels our clients to the
            forefront of their industries.
          </p>
        </div>
      </div>

      <div class="md:hidden w-full divContainer">
        <div class="text-2xl sm:text-3xl font-bold sm:mt-16 lg:mt-48 tracking-wider">
          <p class="mb-4">Front-end developer</p>
          <p class="mb-4">WordPress developer</p>
          <p class="mb-4">Laravel developer</p>
          <p class="mb-4">Quality analyst</p>
          <p class="mb-4">UI/UX Designer</p>
        </div>

        <div class="bg-gray-850 w-full h-[150px] mt-5"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactUs from "@/components/Contacts/ContactUs.vue";
import { onMounted, ref } from "vue";

const emit = defineEmits(["modal-change"]);

const visibleModal = ref(false);

const openModal = () => {
  visibleModal.value = true;
  emit("modal-change", true);
};

const closeModal = () => {
  visibleModal.value = false;
  emit("modal-change", false);
};

onMounted(() => {
  window.openModal = openModal;
});
</script>
