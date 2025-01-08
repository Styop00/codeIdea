<template>
    <div class="grid md:grid-cols-2 bg-white h-[1024px] font-montserrat">
        <div class="bg-sidebar-color px-10 sm:px-28">
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-sidebar-text-color font-bold">
                <SidebarLeftSection/>
            </div>
        </div>
        <div class="relative">
            <div class="absolute top-[88px] right-[90px] text-right">
                <SidebarMenuItems />
            </div>
        </div>
    </div>
</template>

<script setup>
    import SidebarLeftSection from "@/components/SidebarLeftSection.vue"
    import SidebarMenuItems from "@/components/SidebarMenuItems.vue"

</script>