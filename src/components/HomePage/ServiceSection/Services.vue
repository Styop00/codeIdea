<template>
  <section id="services" class="px-5 sm:px-0 pt-10 pb-24 flex flex-col">
    <ServiceItem class="md:self-end">
      <Title title="services" description="Web & Mobile Development">
        <p>We create MVPs for startups and develop complex, enterprise-level platforms with Java, JavaScript, Go, PHP,
          Swift and other languages, as well as 100+ frameworks.</p>
      </Title>
    </ServiceItem>

    <ServiceItem>
      <Title title="services" description="IT Consulting & Management">
        <p>
          We build <b>native mobile applications</b> for <b>iOS & <br>
          Android</b> since 2011. In more than 10 years of software development, we acquired solid experience that also
          includes <b>React Native</b> based <b>cross platform solutions</b>.
        </p>
      </Title>
    </ServiceItem>

    <ServiceItem class="md:self-end">
      <Title title="services" description="Cloud & DevOps">
        <p>We use cloud platforms for continuous product development, testing and deployment. Our team integrates cloud
          storage into the development process and scaling of ready solutions.</p>
      </Title>
    </ServiceItem>

    <ServiceItem>
      <Title title="services" description="UI/UX Design">
        <p>We are masters of custom UX/UI, brand identity and illustrations — the product's entire visual component.</p>
      </Title>
    </ServiceItem>
  </section>
</template>

<script setup>
import ServiceItem from "@/components/HomePage/ServiceSection/ServiceItem.vue"
import Title from "@/components/Title.vue"
</script>
