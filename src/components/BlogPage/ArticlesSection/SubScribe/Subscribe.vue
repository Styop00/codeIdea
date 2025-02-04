<template>
  <div class="bg-gray-10 rounded-lg pt-14 pl-6 pr-4 pb-28 relative overflow-hidden">
    <div class="text-white leading-9 mb-11">
      <p class="text-xl">Subscribe to Our</p>
      <p class="text-32px">NEWSLETTER</p>
    </div>

    <div>
      <Input placeholder="Name"/>
      <Input placeholder="your@email.com"/>
    </div>

    <div class="absolute -top-1 -right-10">
      <img src="@/assets/img/subscribe/arrow.svg" alt="Subscribe arrow">
    </div>
  </div>
</template>

<script setup>
import Input from "@/components/BlogPage/ArticlesSection/SubScribe/Input.vue"
</script>
