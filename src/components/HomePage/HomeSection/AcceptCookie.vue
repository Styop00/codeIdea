<template>
  <div class="w-full bg-white grid md:grid-cols-1 lg:grid-cols-2">
      <CookieConsentVue/>
    <div class="lg:text-right">
      <Button btnText="Accept Cookies" class="w-full md:w-[180px] md:mr-4 !bg-black text-white"/>
      <Button btnText="Decline" class="w-full md:w-[180px] bg-white border-1px border-black hover:bg-black hover:text-white duration-500" />
    </div>
  </div>
</template>

<script setup>
import CookieConsentVue from '../../Cookie/cookieconsent.vue'
</script>
