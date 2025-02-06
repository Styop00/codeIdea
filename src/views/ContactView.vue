<template>
  <div class="md:pt-32">
    <div class="w-full pt-6 pb-6 px-5 sm:px-0 bg-gradient-to-bl from-gray-200 to-gray-300
                md:from-white md:to-white">
      <div class="divContainer">
        <Title description="Contact us">
          <p class="w-full lg:w-70%">We transform the way IT products are developed, creating a collaborative culture where
            teams and founders shape the success of digital products together.</p>
        </Title>
      </div>
    </div>

    <ContactUs class="divContainer !pt-0 md:!pt-20"/>
  </div>
</template>

<script setup>
import ContactUs from "@/components/Contacts/ContactUs.vue";
import Title from "@/components/Title.vue";
</script>
