<template>
  <div v-if="visibleModal" class="fixed top-0 left-0 w-full h-full bg-black-50 z-50 flex items-center justify-center"
       @click.self="closeModal">
    <ContactUs class="bg-white mx-28 py-0"/>
  </div>

  <section id="home" class="shadow-small-30">
    <div class="w-full h-screen flex flex-col justify-center items-center text-center px-5 sm:px-0" style="padding-bottom: 80px;">
      <img src="@/assets/logo.svg" alt="CodeIdea" class="mx-auto max-w-[80%] h-auto"/>

      <p class="font-semibold text-base sm:text-lg md:text-xl mt-8 max-w-4xl leading-snug sm:leading-normal px-4">
        To transform innovative ideas into groundbreaking web and mobile platforms—
        <span class="text-green-100">sports</span>, <span class="text-green-100">booking</span>, and
        <span class="text-green-100">SaaS</span>—becoming the strategic partner that propels our clients to the
        forefront of their industries.
      </p>
    </div>
  </section>
</template>

<script setup>
import ContactUs from "@/components/Contacts/ContactUs.vue";
import {defineEmits, ref, onMounted} from "vue";

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
