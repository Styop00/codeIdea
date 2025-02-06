<template>
  <div>
    <ServiceTechnologies :data="myData.web"/>
    <ContactUs class="divContainer"/>
  </div>
</template>

<script setup>
import ContactUs from "../Contacts/ContactUs.vue";
import {myData} from "./ServiceTechnologies/serviceData.js"
import ServiceTechnologies from "./ServiceTechnologies/ServiceTechnologies.vue";
</script>

