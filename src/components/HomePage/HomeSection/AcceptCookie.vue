<template>
  <div class="w-full bg-white grid md:grid-cols-1 lg:grid-cols-2">
    <client-only>
      <CookieConsentVue/>
    </client-only>
  </div>
</template>

<script setup>
import CookieConsentVue from '../../Cookie/cookieconsent.vue'
</script>
