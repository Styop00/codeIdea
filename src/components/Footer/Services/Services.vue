<template>
<!--  <div v-for="title in Object.keys(items)" class="flex flex-col col-span-1 gap-2  lg:pt-0 lg:col-span-2 md:pt-0 ">-->
<!--    <p class="text-white mb-4 text-base uppercase font-bold leading-4" >{{title}}</p>-->
<!--    <span class="text-white font-normal text-sm leading-5 cursor-pointer whitespace-nowrap " v-for="item in items[title]">-->
<!--      {{item}}-->
<!--    </span>-->
<!--  </div>-->

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
