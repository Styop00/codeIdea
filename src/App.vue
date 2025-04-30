<template>
  <Layout/>
  <div :class="['z-10 bg-white', { 'sticky': !isModalOpen }]">
    <AcceptCookie class="divContainer"/>
  </div>
</template>

<script setup>
import Layout from "./components/Layout/Layout.vue";
import AcceptCookie from "@/components/HomePage/HomeSection/AcceptCookie.vue";
</script>
