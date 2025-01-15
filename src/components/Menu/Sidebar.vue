<template>
  <div class="grid md:grid-cols-2 bg-white font-montserrat">
    <div class="bg-white-20 pt-9 h-screen">
      <Logo class="md:pl-12 text-center md:text-left"/>
      <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                text-gray-700 font-bold px-10 lg:px-28">
        <SidebarLeftSection/>
      </div>
    </div>
    <div>
      <p class="text-right absolute top-2 md:top-12 right-2 md:right-9">
        <slot/>
      </p>
      <div class="absolute top-88px left-1/2 -translate-x-1/2
                        md:static md:mt-88px md:mr-16 md:translate-x-0
                        text-center md:text-right">
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
