<template>
    <div class="grid md:grid-cols-2 bg-white font-montserrat">
        <div class="bg-sidebar-color pt-9 h-screen">
            <Logo class="pl-12 md:pl-16"/>
            <div class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-sidebar-text-color font-bold px-10 lg:px-28">
                <SidebarLeftSection/>
            </div>
        </div>
        <div>
            <p class="text-right absolute top-12 right-9">
                <slot/>
            </p>
            <div class="absolute top-[88px] right-8 md:right-20 text-right">
                <SidebarMenuItems />
            </div>
        </div>
    </div>
</template>

<script setup>
    import SidebarLeftSection from "@/components/SidebarLeftSection.vue"
    import SidebarMenuItems from "@/components/SidebarMenuItems.vue"
    import Logo from "@/components/Logo.vue"
</script>