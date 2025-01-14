<template>
  <FooterItem :item="items.Services" title="Service" class="col-span-2 md:col-span-1"/>
  <FooterItem :item="items.Insights" title="Insights" class="flex flex-col	col-span-2 md:hidden	 lg:hidden  w-fit ml-2rem	" />
  <FooterItem :item="items.Technologies" title="Technologies" class="col-span-4 md:col-span-1"/>
  <FooterItem :item="items.Insights"  title="Insights" class=" md:flex md:flex-col	 lg:flex lg:flex-col	 hidden	" />
</template>
<script setup>
import FooterItem from "./FooterItem.vue";

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
