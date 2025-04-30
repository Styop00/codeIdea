<template>
  <div class="w-full bg-white grid md:grid-cols-1 lg:grid-cols-2">
    <div>
      <p class="mt-4 text-sm font-medium">We use cookies to improve user experience, analyze site usage, and assist in marketing
        efforts. For details, see our
        <a href="#" class="underline underline-offset-1">privacy policy</a>
        and adjust your preferences.
      </p>
    </div>
    <div class="lg:text-right">
      <Button btnText="Accept Cookies" class="w-full md:w-[180px] md:mr-4 !bg-black text-white"/>
      <Button btnText="Decline" class="w-full md:w-[180px] bg-white border-1px border-black hover:bg-black hover:text-white duration-500" />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>
