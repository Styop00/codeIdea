<template>
  <section id="services" class="px-5 sm:px-0 pt-10 pb-24 flex flex-col">
    <ServiceItem
      v-for="(service, index) in services"
      :serviceTitle=service.title
      :serviceText=service.desc
      :image="service.pic"
      :i="index"
    />

    <div class="text-center">
      <Button btnText="SEE ALL SERVICES" class="bg-white border-1px border-black hover:bg-black hover:text-white duration-500"/>
    </div>

  </section>
</template>

<script setup>
import ServiceItem from "@/components/HomePage/ServiceSection/ServiceItem.vue"
import {ref} from "vue"
import Button from "@/components/Button.vue";

import img1 from "@/assets/img/services/service-img-1.svg"
import img2 from "@/assets/img/services/service-img-2.svg"
import img3 from "@/assets/img/services/service-img-3.svg"
import img4 from "@/assets/img/services/service-img-4.svg"

const services = ref([
  {
    'title': 'Web & Mobile Development',
    'desc': 'We create MVPs for startups and develop complex, enterprise-level platforms with Java, JavaScript, Go, PHP, Swift and other languages, as well as 100+ frameworks.',
    'pic': img1,
  },
  {
    'title': 'IT Consulting & Management',
    'desc': 'We build native mobile applications for iOS &\n' +
      'Android since 2011. In more than 10 years of software development, we acquired solid experience that also includes React Native based cross platform solutions.',
    'pic': img2,
  },
  {
    'title': 'Cloud & DevOps',
    'desc': 'We use cloud platforms for continuous product development, testing and deployment. Our team integrates cloud storage into the development process and scaling of ready solutions.',
    'pic': img3,
  },
  {
    'title': 'UI/UX Design',
    'desc': 'We are masters of custom UX/UI, brand identity and illustrations — the product\'s entire visual component.',
    'pic': img4,
  },
]);
</script>
