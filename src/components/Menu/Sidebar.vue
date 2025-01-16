<template>
  <div class="grid md:grid-cols-2 bg-white font-montserrat">
    <div class="bg-black-100 pt-9 h-screen pl-12 pr-10 hidden md:block">
      <Logo class="text-center md:text-left"/>
      <div class="text-3xl md:text-4xl font-bold tracking-wider
      relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p class="mb-4">Front-end developer</p>
        <p class="mb-4">WordPress developer</p>
        <p class="mb-4">Laravel developer</p>
        <p class="mb-4">Quality analyst</p>
        <p>UI/UX Designer</p>
      </div>
    </div>
    
    <div class="p-7 md:pt-10">
      <div class="text-right">
        <slot/>
      </div>
      <div class="md:mr-16 text-center text-right">
        <SidebarMenuItems/>
      </div>
    </div>
  </div>

  
</template>

<script setup>
  import SidebarLeftSection from "@/components/Menu/SidebarLeftSection.vue"
  import SidebarMenuItems from "@/components/Menu/SidebarMenuItems.vue"
  import Logo from "@/components/Menu/Logo.vue"
</script>
