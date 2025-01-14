<template>
  <div>
    <ServiceAbout/>
    <Technologies/>
    <ContactUs/>
  </div>
</template>
<script setup></script>
<script>
import ServiceAbout from "./ServiceAbout.vue";
import Technologies from "./Technologies.vue";
import ContactUs from "../Contacts/ContactUs.vue";
export default {
  components: {ContactUs, Technologies, ServiceAbout}
}
</script>
