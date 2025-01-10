<template>
  <div v-for="title in Object.keys(items)" class="flex flex-col gap-2 lg:border-none lg:pt-0 lg:col-span-2 md:pt-0 md:border-none pt-5 border-t-2 border-t-white">
    <p class="text-white mb-4 text-base uppercase font-bold leading-4" >{{title}}</p>
    <span class="text-white font-normal text-sm leading-5 cursor-pointer whitespace-nowrap " v-for="item in items[title]">
      {{item}}
    </span>
  </div>
</template>
<script setup>
const items = {
  Services: [
    "Web Development",
    "Mobile App Development",
    "Desktop App Development",
    "Digital Product Development",
    "Staff Augmentation",
    "UI/IUX Design",
    "Cloud Engineering & DevOps",
    "Generative AI Development",
    "Legacy App Modernization",
    "Discovery Workshops",
  ],
  Technologies: [
    ".NET",
    "NODE JS",
    "REACT JS",
    "REACT NATIVE",
    "ELECTRON",
    "AWS",
  ],
  Insights: [
    "Case Studies",
    "Careers",
    "FAQ",
    "BLOG",
    "Contact",
  ],
}
</script>
<style scoped>

</style>
